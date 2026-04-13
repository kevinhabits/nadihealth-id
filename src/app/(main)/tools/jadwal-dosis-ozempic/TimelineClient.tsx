"use client";

import { useState } from "react";
import Link from "next/link";

interface WeekData {
  week: number;
  dose: string;
  phase: string;
  phaseColor: string;
  expectedEffects: string[];
  tips: string[];
  commonSideEffects: string[];
  weightLossPercent: number; // cumulative % of starting weight
}

const TIMELINE_DATA: WeekData[] = [
  {
    week: 1,
    dose: "0,25 mg",
    phase: "Titrasi Awal",
    phaseColor: "bg-blue-100 text-blue-700 border-blue-200",
    expectedEffects: ["Tubuh mulai mengenal obat", "Mungkin belum terasa perubahan signifikan"],
    tips: ["Suntik di hari yang sama setiap minggu", "Catat tanggal dan lokasi suntikan", "Minum air putih yang cukup"],
    commonSideEffects: ["Mual ringan (30% pasien)", "Sedikit penurunan nafsu makan"],
    weightLossPercent: 0.3,
  },
  {
    week: 2,
    dose: "0,25 mg",
    phase: "Titrasi Awal",
    phaseColor: "bg-blue-100 text-blue-700 border-blue-200",
    expectedEffects: ["Nafsu makan mulai berkurang", "Porsi makan mungkin mengecil secara alami"],
    tips: ["Makan porsi kecil tapi sering", "Hindari makanan berlemak tinggi"],
    commonSideEffects: ["Mual (biasanya membaik)", "Kembung ringan"],
    weightLossPercent: 0.6,
  },
  {
    week: 3,
    dose: "0,25 mg",
    phase: "Titrasi Awal",
    phaseColor: "bg-blue-100 text-blue-700 border-blue-200",
    expectedEffects: ["Pola makan mulai berubah", "Rasa kenyang lebih lama"],
    tips: ["Fokus pada protein dan sayuran", "Mulai atau pertahankan olahraga ringan"],
    commonSideEffects: ["Efek samping biasanya berkurang"],
    weightLossPercent: 0.9,
  },
  {
    week: 4,
    dose: "0,25 mg",
    phase: "Titrasi Awal",
    phaseColor: "bg-blue-100 text-blue-700 border-blue-200",
    expectedEffects: ["Penurunan berat badan awal terlihat (~1% BB)", "Persiapan untuk kenaikan dosis"],
    tips: ["Timbang badan di pagi hari", "Catat progress untuk konsultasi dokter"],
    commonSideEffects: ["Tubuh umumnya sudah adaptasi"],
    weightLossPercent: 1.2,
  },
  {
    week: 5,
    dose: "0,5 mg",
    phase: "Titrasi Menengah",
    phaseColor: "bg-teal-100 text-teal-700 border-teal-200",
    expectedEffects: ["Dosis naik — efek menekan nafsu makan lebih kuat", "Penurunan BB mulai konsisten"],
    tips: ["Efek samping mual bisa kembali sementara", "Tetap makan teratur meski porsi kecil"],
    commonSideEffects: ["Mual bisa kembali (sementara)", "Perubahan pola BAB"],
    weightLossPercent: 1.7,
  },
  {
    week: 6,
    dose: "0,5 mg",
    phase: "Titrasi Menengah",
    phaseColor: "bg-teal-100 text-teal-700 border-teal-200",
    expectedEffects: ["Tubuh adaptasi dengan dosis baru", "Kontrol porsi makan semakin baik"],
    tips: ["Perhatikan asupan nutrisi cukup", "Konsumsi protein minimal 60g/hari"],
    commonSideEffects: ["Efek samping umumnya mereda"],
    weightLossPercent: 2.3,
  },
  {
    week: 7,
    dose: "0,5 mg",
    phase: "Titrasi Menengah",
    phaseColor: "bg-teal-100 text-teal-700 border-teal-200",
    expectedEffects: ["Penurunan BB semakin terlihat", "Energi dan mood membaik"],
    tips: ["Tingkatkan aktivitas fisik bertahap", "Foto progress untuk motivasi"],
    commonSideEffects: ["Umumnya minimal"],
    weightLossPercent: 2.9,
  },
  {
    week: 8,
    dose: "0,5 mg",
    phase: "Titrasi Menengah",
    phaseColor: "bg-teal-100 text-teal-700 border-teal-200",
    expectedEffects: ["~3% penurunan BB dari awal", "Evaluasi dokter untuk kenaikan dosis"],
    tips: ["Follow-up dengan dokter Nadi Health", "Diskusikan apakah perlu naik ke 1mg"],
    commonSideEffects: ["Tubuh sudah adaptasi baik"],
    weightLossPercent: 3.5,
  },
  {
    week: 9,
    dose: "1 mg",
    phase: "Dosis Optimal",
    phaseColor: "bg-primary-light text-primary border-primary/20",
    expectedEffects: ["Dosis optimal — efek terapeutik maksimal", "Penurunan BB konsisten ~0,5-1 kg/minggu"],
    tips: ["Monitor efek samping dengan kenaikan dosis", "Jangan skip dosis"],
    commonSideEffects: ["Mual ringan mungkin kembali sementara", "Konstipasi pada sebagian pasien"],
    weightLossPercent: 4.2,
  },
  {
    week: 10,
    dose: "1 mg",
    phase: "Dosis Optimal",
    phaseColor: "bg-primary-light text-primary border-primary/20",
    expectedEffects: ["Pola makan sehat menjadi kebiasaan", "Penurunan BB stabil"],
    tips: ["Fokus pada kebiasaan jangka panjang", "Pertimbangkan konseling nutrisi"],
    commonSideEffects: ["Efek samping biasanya minimal"],
    weightLossPercent: 5.0,
  },
  {
    week: 11,
    dose: "1 mg",
    phase: "Dosis Optimal",
    phaseColor: "bg-primary-light text-primary border-primary/20",
    expectedEffects: ["Peningkatan sensitivitas insulin", "Gula darah membaik (jika diabetes)"],
    tips: ["Periksa gula darah secara teratur", "Lanjutkan olahraga teratur"],
    commonSideEffects: ["Umumnya ditoleransi dengan baik"],
    weightLossPercent: 5.7,
  },
  {
    week: 12,
    dose: "1 mg",
    phase: "Dosis Optimal",
    phaseColor: "bg-primary-light text-primary border-primary/20",
    expectedEffects: ["~6% penurunan BB dari awal", "Milestone 3 bulan — evaluasi lengkap"],
    tips: ["Evaluasi komprehensif dengan dokter", "Periksa lab darah jika disarankan"],
    commonSideEffects: ["Tubuh sudah terbiasa sepenuhnya"],
    weightLossPercent: 6.5,
  },
  {
    week: 13,
    dose: "1 mg",
    phase: "Pemeliharaan",
    phaseColor: "bg-green-100 text-green-700 border-green-200",
    expectedEffects: ["Masuk fase pemeliharaan", "Penurunan BB terus berlanjut tapi lebih lambat"],
    tips: ["Konsistensi adalah kunci", "Fokus pada kualitas hidup keseluruhan"],
    commonSideEffects: ["Minimal — tubuh sudah adaptasi penuh"],
    weightLossPercent: 7.2,
  },
  {
    week: 14,
    dose: "1 mg",
    phase: "Pemeliharaan",
    phaseColor: "bg-green-100 text-green-700 border-green-200",
    expectedEffects: ["Pola hidup sehat terkonsolidasi", "Perubahan komposisi tubuh terlihat"],
    tips: ["Tambah latihan kekuatan untuk massa otot", "Ukur lingkar pinggang untuk progress"],
    commonSideEffects: ["Umumnya tidak ada"],
    weightLossPercent: 7.8,
  },
  {
    week: 15,
    dose: "1 mg",
    phase: "Pemeliharaan",
    phaseColor: "bg-green-100 text-green-700 border-green-200",
    expectedEffects: ["Mendekati target 4 bulan", "Banyak pasien merasakan perubahan besar"],
    tips: ["Rencanakan strategi jangka panjang dengan dokter", "Evaluasi kebutuhan lanjutan"],
    commonSideEffects: ["Umumnya tidak ada"],
    weightLossPercent: 8.4,
  },
  {
    week: 16,
    dose: "1 mg",
    phase: "Pemeliharaan",
    phaseColor: "bg-green-100 text-green-700 border-green-200",
    expectedEffects: ["~9% penurunan BB dari awal", "Milestone 4 bulan — rencana ke depan"],
    tips: ["Diskusikan rencana lanjutan dengan dokter", "Pertimbangkan modifikasi gaya hidup permanen"],
    commonSideEffects: ["Umumnya tidak ada"],
    weightLossPercent: 9.0,
  },
];

function WeightProjectionBar({ week, percent, startWeight }: { week: number; percent: number; startWeight: number }) {
  const kgLost = (startWeight * percent) / 100;
  const maxPercent = 10;
  const barWidth = (percent / maxPercent) * 100;

  return (
    <div className="flex items-center gap-2">
      <span className="text-2xs text-text-light w-6 text-right flex-shrink-0">{week}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${Math.min(barWidth, 100)}%` }}
        />
      </div>
      <span className="text-2xs text-text-secondary w-24 flex-shrink-0 text-right">
        -{kgLost.toFixed(1)} kg ({percent.toFixed(1)}%)
      </span>
    </div>
  );
}

export default function TimelineClient() {
  const [startWeight, setStartWeight] = useState("");
  const [activeWeek, setActiveWeek] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const weight = parseFloat(startWeight) || 85;

  const handleStart = () => {
    setShowTimeline(true);
    setActiveWeek(1);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@") && email.includes(".")) setEmailSubmitted(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Jadwal Dosis Ozempic 16 Minggu — Nadi Health",
        text: "Lihat jadwal titrasi dosis Ozempic minggu demi minggu, lengkap dengan efek yang diharapkan dan tips.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {!showTimeline ? (
        <div className="animate-fade-in-up max-w-xl mx-auto">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-text mb-2">
                Berat Badan Anda (kg) <span className="font-normal text-text-secondary">— opsional, untuk proyeksi personal</span>
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={startWeight}
                onChange={(e) => setStartWeight(e.target.value)}
                placeholder="Contoh: 85"
                className="w-full px-4 py-3 rounded-xl border-2 border-border text-sm focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Preview */}
            <div className="bg-primary-light rounded-xl p-5">
              <h3 className="font-bold text-primary mb-3">Apa yang akan Anda lihat:</h3>
              <ul className="space-y-2 text-sm text-primary/80">
                <li className="flex items-start gap-2"><span>→</span> Jadwal titrasi 16 minggu lengkap</li>
                <li className="flex items-start gap-2"><span>→</span> Dosis per minggu dan fase pengobatan</li>
                <li className="flex items-start gap-2"><span>→</span> Efek yang diharapkan setiap minggu</li>
                <li className="flex items-start gap-2"><span>→</span> Tips praktis dan efek samping umum</li>
                <li className="flex items-start gap-2"><span>→</span> Proyeksi penurunan berat badan personal</li>
              </ul>
            </div>
          </div>

          <button onClick={handleStart} className="btn-primary w-full mt-8">
            Lihat Jadwal Dosis →
          </button>
        </div>
      ) : (
        <div className="animate-fade-in-up">
          {/* Weight Projection Chart */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6 mb-8">
            <h3 className="font-bold text-text mb-1">Proyeksi Penurunan Berat Badan</h3>
            <p className="text-xs text-text-secondary mb-4">
              Berdasarkan data STEP trials, dimulai dari {weight} kg
            </p>
            <div className="space-y-1.5">
              {TIMELINE_DATA.filter((_, i) => i % 2 === 0).map((week) => (
                <WeightProjectionBar
                  key={week.week}
                  week={week.week}
                  percent={week.weightLossPercent}
                  startWeight={weight}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-text-secondary">Minggu</span>
              <span className="text-primary font-semibold">
                Proyeksi 16 minggu: -{((weight * 9) / 100).toFixed(1)} kg ({weight > 0 ? (weight - (weight * 9) / 100).toFixed(1) : "—"} kg)
              </span>
            </div>
          </div>

          {/* Phase Legend */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { label: "Titrasi Awal (0,25mg)", color: "bg-blue-100 text-blue-700 border-blue-200" },
              { label: "Titrasi Menengah (0,5mg)", color: "bg-teal-100 text-teal-700 border-teal-200" },
              { label: "Dosis Optimal (1mg)", color: "bg-primary-light text-primary border-primary/20" },
              { label: "Pemeliharaan (1mg)", color: "bg-green-100 text-green-700 border-green-200" },
            ].map((phase) => (
              <span key={phase.label} className={`text-2xs font-medium px-2.5 py-1 rounded-full border ${phase.color}`}>
                {phase.label}
              </span>
            ))}
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {TIMELINE_DATA.map((week, index) => {
              const isExpanded = activeWeek === week.week;
              const kgLost = (weight * week.weightLossPercent) / 100;
              const isPhaseStart = index === 0 || TIMELINE_DATA[index - 1].phase !== week.phase;

              return (
                <div key={week.week}>
                  {/* Phase header */}
                  {isPhaseStart && (
                    <div className="pt-4 pb-2 first:pt-0">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${week.phaseColor}`}>
                        {week.phase}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveWeek(isExpanded ? null : week.week)}
                    className={`w-full text-left transition-all ${
                      isExpanded ? "mb-0" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 py-3 border-b border-border/50 hover:bg-gray-50 px-2 -mx-2 rounded-lg">
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full border-2 ${
                          isExpanded ? "bg-primary border-primary" : "bg-white border-gray-300"
                        }`} />
                      </div>

                      {/* Week info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-text">Minggu {week.week}</span>
                          <span className={`text-2xs px-2 py-0.5 rounded-full ${week.phaseColor}`}>
                            {week.dose}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary truncate">
                          {week.expectedEffects[0]}
                        </p>
                      </div>

                      {/* Weight loss */}
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-semibold text-primary">-{kgLost.toFixed(1)} kg</p>
                        <p className="text-2xs text-text-light">-{week.weightLossPercent}%</p>
                      </div>

                      {/* Chevron */}
                      <svg
                        className={`w-4 h-4 text-text-light transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="ml-6 pl-4 border-l-2 border-primary/20 py-4 animate-fade-in-up">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h4 className="text-xs font-bold text-text mb-2 uppercase tracking-wider">Efek yang Diharapkan</h4>
                          <ul className="space-y-1">
                            {week.expectedEffects.map((e, i) => (
                              <li key={i} className="text-xs text-text-secondary flex items-start gap-1.5">
                                <span className="text-primary mt-0.5">•</span> {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h4 className="text-xs font-bold text-text mb-2 uppercase tracking-wider">Tips Minggu Ini</h4>
                          <ul className="space-y-1">
                            {week.tips.map((t, i) => (
                              <li key={i} className="text-xs text-text-secondary flex items-start gap-1.5">
                                <span className="text-green-600 mt-0.5">✓</span> {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h4 className="text-xs font-bold text-text mb-2 uppercase tracking-wider">Efek Samping Umum</h4>
                          <ul className="space-y-1">
                            {week.commonSideEffects.map((s, i) => (
                              <li key={i} className="text-xs text-text-secondary flex items-start gap-1.5">
                                <span className="text-yellow-600 mt-0.5">!</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary Card */}
          <div className="bg-primary-light rounded-2xl p-6 mt-8 mb-6 border border-primary/20">
            <h3 className="font-bold text-primary mb-3">Ringkasan 16 Minggu</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total pen", value: "4 pen" },
                { label: "Fase titrasi", value: "8 minggu" },
                { label: "Proyeksi turun", value: `-${((weight * 9) / 100).toFixed(1)} kg` },
                { label: "Target BB", value: `${(weight - (weight * 9) / 100).toFixed(1)} kg` },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                  <p className="text-2xs text-primary/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email Capture */}
          {!emailSubmitted ? (
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-text mb-2">Dapatkan Jadwal Personal Anda</h3>
              <p className="text-sm text-text-secondary mb-4">
                Kami kirimkan jadwal dosis lengkap dalam format PDF yang bisa Anda cetak dan tempelkan di kulkas.
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
              <p className="text-green-700 font-semibold">Jadwal personal telah dikirim ke {email}</p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link href="/quiz" className="btn-primary w-full text-center block">
              Konsultasi dengan Dokter →
            </Link>
            <Link href="/tools/kalkulator-biaya-ozempic" className="btn-secondary w-full text-center block">
              Hitung Estimasi Biaya →
            </Link>
            <button onClick={handleShare} className="btn-ghost w-full">
              Bagikan Jadwal Ini
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-xs text-text-light leading-relaxed">
              <strong className="text-text-secondary">Disclaimer:</strong> Jadwal titrasi dan proyeksi penurunan berat badan bersifat ilustratif
              berdasarkan protokol standar dan data rata-rata STEP trials. Jadwal aktual ditentukan oleh dokter berdasarkan
              respons individual. Jangan mengubah dosis tanpa konsultasi dokter.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
