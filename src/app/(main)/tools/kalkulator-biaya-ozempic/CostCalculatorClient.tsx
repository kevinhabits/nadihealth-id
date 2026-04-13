"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  currentWeight: string;
  targetWeight: string;
  dosePreference: "0.5mg" | "1mg";
}

interface CostResult {
  weightToLose: number;
  percentageLoss: number;
  estimatedWeeks: number;
  estimatedMonths: number;
  monthlyPenCost: number;
  totalPenCost: number;
  pensNeeded: number;
  costPerKgLost: number;
  weeklyBreakdown: { dose: string; weekRange: string; pensInPeriod: number; periodCost: number }[];
}

const PRICES = {
  "0.5mg": 2_600_000,
  "1mg": 3_100_000,
};

const DOSES_PER_PEN = 4; // 4 weekly doses per pen

function calculateCost(data: FormData): CostResult | null {
  const currentWeight = parseFloat(data.currentWeight);
  const targetWeight = parseFloat(data.targetWeight);
  if (!currentWeight || !targetWeight || targetWeight >= currentWeight) return null;

  const weightToLose = currentWeight - targetWeight;
  const percentageLoss = (weightToLose / currentWeight) * 100;

  // Average weight loss rate with semaglutide: ~1% body weight per month initially, slowing over time
  // STEP 1 trial: ~15% in 68 weeks
  // Simplified model: 0.8-1.2kg/week early, 0.3-0.5kg/week later
  const avgWeeklyLoss = currentWeight * 0.0022; // ~0.22% per week on average
  const estimatedWeeks = Math.ceil(weightToLose / avgWeeklyLoss);
  const estimatedMonths = Math.ceil(estimatedWeeks / 4.33);

  // Titration schedule: first 4 weeks at 0.25mg (still 0.5mg pen), then maintenance
  const titrationWeeks = 4;
  const maintenanceWeeks = Math.max(0, estimatedWeeks - titrationWeeks);

  // During titration: use 0.5mg pen (0.25mg dose = half pen usage, but still 1 pen per 4 weeks)
  const titrationPens = Math.ceil(titrationWeeks / DOSES_PER_PEN);
  const maintenancePens = Math.ceil(maintenanceWeeks / DOSES_PER_PEN);
  const pensNeeded = titrationPens + maintenancePens;

  const penPrice = PRICES[data.dosePreference];
  const titrationCost = titrationPens * PRICES["0.5mg"]; // Always 0.5mg for titration
  const maintenanceCost = maintenancePens * penPrice;
  const totalPenCost = titrationCost + maintenanceCost;

  const monthlyPenCost = penPrice; // 1 pen per month at maintenance
  const costPerKgLost = totalPenCost / weightToLose;

  const weeklyBreakdown = [
    {
      dose: "0,25mg",
      weekRange: "Minggu 1-4",
      pensInPeriod: titrationPens,
      periodCost: titrationCost,
    },
    {
      dose: data.dosePreference === "0.5mg" ? "0,5mg" : "1mg",
      weekRange: `Minggu 5-${estimatedWeeks}`,
      pensInPeriod: maintenancePens,
      periodCost: maintenanceCost,
    },
  ];

  return {
    weightToLose,
    percentageLoss,
    estimatedWeeks,
    estimatedMonths,
    monthlyPenCost,
    totalPenCost,
    pensNeeded,
    costPerKgLost,
    weeklyBreakdown,
  };
}

function formatRupiah(amount: number): string {
  return "Rp " + amount.toLocaleString("id-ID");
}

const COMPARISONS = [
  { label: "Gym + Personal Trainer", monthlyCost: 2_000_000, avgKgPerMonth: 0.5, icon: "🏋️" },
  { label: "Program Diet Komersial", monthlyCost: 1_500_000, avgKgPerMonth: 0.3, icon: "🥗" },
  { label: "Suplemen Penurun BB", monthlyCost: 800_000, avgKgPerMonth: 0.1, icon: "💊" },
  { label: "Bariatric Surgery", monthlyCost: 0, oneTimeCost: 80_000_000, avgKgPerMonth: 3, icon: "🔪" },
];

export default function CostCalculatorClient() {
  const [formData, setFormData] = useState<FormData>({
    currentWeight: "",
    targetWeight: "",
    dosePreference: "0.5mg",
  });
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value as typeof prev[typeof field] }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const cw = parseFloat(formData.currentWeight);
    const tw = parseFloat(formData.targetWeight);

    if (!formData.currentWeight) newErrors.currentWeight = "Masukkan berat badan saat ini";
    else if (cw < 40 || cw > 300) newErrors.currentWeight = "Berat badan tidak valid (40-300 kg)";

    if (!formData.targetWeight) newErrors.targetWeight = "Masukkan target berat badan";
    else if (tw < 30 || tw > 280) newErrors.targetWeight = "Target tidak valid";
    else if (formData.currentWeight && tw >= cw) newErrors.targetWeight = "Target harus lebih rendah dari berat saat ini";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) setShowResult(true);
  };

  const result = showResult ? calculateCost(formData) : null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@") && email.includes(".")) setEmailSubmitted(true);
  };

  const handleShare = () => {
    if (navigator.share && result) {
      navigator.share({
        title: "Kalkulator Biaya Ozempic — Nadi Health",
        text: `Estimasi biaya Ozempic untuk turun ${result.weightToLose.toFixed(0)} kg: ${formatRupiah(result.totalPenCost)}. Hitung biaya Anda!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {!showResult ? (
        <div className="animate-fade-in-up">
          {/* Input Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Berat Badan Saat Ini (kg)</label>
              <input
                type="number"
                inputMode="decimal"
                value={formData.currentWeight}
                onChange={(e) => updateField("currentWeight", e.target.value)}
                placeholder="Contoh: 90"
                className="w-full px-4 py-3 rounded-xl border-2 border-border text-sm focus:border-primary focus:outline-none transition-colors"
              />
              {errors.currentWeight && <p className="text-error text-xs mt-1">{errors.currentWeight}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text mb-2">Target Berat Badan (kg)</label>
              <input
                type="number"
                inputMode="decimal"
                value={formData.targetWeight}
                onChange={(e) => updateField("targetWeight", e.target.value)}
                placeholder="Contoh: 75"
                className="w-full px-4 py-3 rounded-xl border-2 border-border text-sm focus:border-primary focus:outline-none transition-colors"
              />
              {errors.targetWeight && <p className="text-error text-xs mt-1">{errors.targetWeight}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text mb-2">Dosis Pemeliharaan</label>
              <div className="grid grid-cols-2 gap-3">
                {(["0.5mg", "1mg"] as const).map((dose) => (
                  <button
                    key={dose}
                    onClick={() => updateField("dosePreference", dose)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.dosePreference === dose
                        ? "border-primary bg-primary-light"
                        : "border-border bg-white hover:border-primary/30"
                    }`}
                  >
                    <p className={`font-bold text-sm ${formData.dosePreference === dose ? "text-primary" : "text-text"}`}>
                      {dose}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {formatRupiah(PRICES[dose])}/pen
                    </p>
                    <p className="text-2xs text-text-light mt-0.5">
                      {dose === "0.5mg" ? "Dosis standar" : "Dosis optimal (lebih efektif)"}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Live preview */}
            {formData.currentWeight && formData.targetWeight && parseFloat(formData.targetWeight) < parseFloat(formData.currentWeight) && (
              <div className="bg-primary-light rounded-xl p-4">
                <p className="text-sm text-primary font-semibold">
                  Target penurunan: {(parseFloat(formData.currentWeight) - parseFloat(formData.targetWeight)).toFixed(1)} kg
                  ({((parseFloat(formData.currentWeight) - parseFloat(formData.targetWeight)) / parseFloat(formData.currentWeight) * 100).toFixed(1)}% dari BB saat ini)
                </p>
              </div>
            )}

            {/* Price info */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-text-secondary leading-relaxed">
                <strong className="text-text">Harga di Nadi Health:</strong> Ozempic 0,5mg = Rp 2,6 juta/pen, 1mg = Rp 3,1 juta/pen.
                Setiap pen berisi 4 dosis mingguan (1 bulan). Harga sudah termasuk konsultasi dokter.
              </p>
            </div>
          </div>

          <button onClick={handleCalculate} className="btn-primary w-full mt-8">
            Hitung Estimasi Biaya →
          </button>
        </div>
      ) : result ? (
        <div className="animate-fade-in-up">
          {/* Headline Result */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6 mb-6 text-center">
            <p className="text-sm text-text-secondary mb-1">Estimasi Total Biaya</p>
            <p className="text-4xl font-bold text-primary">{formatRupiah(result.totalPenCost)}</p>
            <p className="text-text-secondary text-sm mt-2">
              untuk turun <strong className="text-text">{result.weightToLose.toFixed(1)} kg</strong> dalam ~<strong className="text-text">{result.estimatedMonths} bulan</strong>
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Biaya/kg turun", value: formatRupiah(Math.round(result.costPerKgLost)) },
              { label: "Biaya/bulan", value: formatRupiah(result.monthlyPenCost) },
              { label: "Total pen", value: `${result.pensNeeded} pen` },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-text">{item.value}</p>
                <p className="text-2xs text-text-secondary">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6 mb-6">
            <h3 className="font-bold text-text mb-4">Rincian Biaya per Fase</h3>
            <div className="space-y-3">
              {result.weeklyBreakdown.map((phase, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold text-text">{phase.weekRange}</p>
                    <p className="text-xs text-text-secondary">Dosis {phase.dose} — {phase.pensInPeriod} pen</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{formatRupiah(phase.periodCost)}</p>
                </div>
              ))}
              <div className="flex items-center justify-between p-3 bg-primary-light rounded-xl border border-primary/20">
                <p className="text-sm font-bold text-text">Total</p>
                <p className="text-sm font-bold text-primary">{formatRupiah(result.totalPenCost)}</p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6 mb-6">
            <h3 className="font-bold text-text mb-4">Perbandingan Biaya Metode Lain</h3>
            <div className="space-y-3">
              {COMPARISONS.map((comp) => {
                const monthsNeeded = result.weightToLose / comp.avgKgPerMonth;
                const totalCost = comp.oneTimeCost || comp.monthlyCost * monthsNeeded;
                const costPerKg = totalCost / result.weightToLose;
                const isOzempicCheaper = result.costPerKgLost < costPerKg;

                return (
                  <div key={comp.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-xl">{comp.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text">{comp.label}</p>
                      <p className="text-xs text-text-secondary">
                        {comp.oneTimeCost
                          ? `~${formatRupiah(comp.oneTimeCost)} (satu kali)`
                          : `~${formatRupiah(Math.round(totalCost))} (~${Math.round(monthsNeeded)} bulan)`}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-semibold text-text">{formatRupiah(Math.round(costPerKg))}/kg</p>
                      <p className={`text-2xs font-medium ${isOzempicCheaper ? "text-green-600" : "text-orange-600"}`}>
                        {isOzempicCheaper ? "Ozempic lebih hemat" : "Lebih murah/kg"}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center gap-3 p-3 bg-primary-light rounded-xl border border-primary/20">
                <span className="text-xl">💉</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary">Ozempic (Nadi Health)</p>
                  <p className="text-xs text-primary/80">
                    {formatRupiah(result.totalPenCost)} (~{result.estimatedMonths} bulan)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-primary">{formatRupiah(Math.round(result.costPerKgLost))}/kg</p>
                  <p className="text-2xs text-primary/70">+ konsultasi dokter</p>
                </div>
              </div>
            </div>
            <p className="text-2xs text-text-light mt-3">
              * Estimasi berdasarkan rata-rata. Hasil dan biaya aktual dapat berbeda.
            </p>
          </div>

          {/* Email Capture */}
          {!emailSubmitted ? (
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-text mb-2">Kirim Perhitungan ke Email Anda</h3>
              <p className="text-sm text-text-secondary mb-4">
                Termasuk rincian biaya lengkap, timeline, dan opsi pembayaran cicilan.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-border text-sm focus:border-primary focus:outline-none"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap px-6">
                  Kirim
                </button>
              </form>
              <p className="text-2xs text-text-light mt-2">
                Kami tidak akan membagikan email Anda. Baca <Link href="/kebijakan-privasi" className="underline">kebijakan privasi</Link>.
              </p>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6 text-center">
              <p className="text-green-700 font-semibold">Perhitungan telah dikirim ke {email}</p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link href="/quiz" className="btn-primary w-full text-center block">
              Konsultasi dengan Dokter →
            </Link>
            <button onClick={handleShare} className="btn-secondary w-full">
              Bagikan Kalkulator Ini
            </button>
            <button
              onClick={() => { setShowResult(false); setEmailSubmitted(false); setEmail(""); }}
              className="btn-ghost w-full"
            >
              Hitung Ulang
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-xs text-text-light leading-relaxed">
              <strong className="text-text-secondary">Disclaimer:</strong> Estimasi biaya bersifat indikatif berdasarkan harga Nadi Health per April 2026.
              Durasi dan hasil penurunan berat badan bervariasi per individu. Harga dapat berubah sewaktu-waktu.
              Perhitungan berdasarkan rata-rata data STEP trials (semaglutide 2,4mg).
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
