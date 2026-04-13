"use client";

import { useState } from "react";
import Link from "next/link";

type Step = "input" | "medical" | "result";

interface FormData {
  gender: "male" | "female" | "";
  age: string;
  height: string;
  weight: string;
  hasDiabetes: string;
  hasTriedDiet: string;
  hasThyroid: string;
  isPregnant: string;
}

interface Result {
  bmi: number;
  bmiCategory: string;
  eligible: boolean;
  eligibilityLevel: "high" | "moderate" | "low" | "not_eligible";
  reasons: string[];
  recommendations: string[];
}

function calculateResult(data: FormData): Result {
  const height = parseFloat(data.height) / 100;
  const weight = parseFloat(data.weight);
  const bmi = weight / (height * height);

  let bmiCategory = "";
  if (bmi < 18.5) bmiCategory = "Berat Badan Kurang";
  else if (bmi < 23) bmiCategory = "Normal";
  else if (bmi < 25) bmiCategory = "Berisiko";
  else if (bmi < 30) bmiCategory = "Obesitas I";
  else bmiCategory = "Obesitas II";

  // Asian BMI cutoffs: overweight >=23, obese >=25
  const isOverweight = bmi >= 23;
  const isObese = bmi >= 25;
  const hasDiabetes = data.hasDiabetes === "yes";
  const hasTriedDiet = data.hasTriedDiet === "yes";
  const hasThyroid = data.hasThyroid === "yes";
  const isPregnant = data.isPregnant === "yes";
  const isFemale = data.gender === "female";

  const reasons: string[] = [];
  const recommendations: string[] = [];

  if (isPregnant || (isFemale && data.isPregnant === "yes")) {
    return {
      bmi,
      bmiCategory,
      eligible: false,
      eligibilityLevel: "not_eligible",
      reasons: ["GLP-1 tidak boleh digunakan selama kehamilan atau saat merencanakan kehamilan."],
      recommendations: [
        "Konsultasikan dengan dokter kandungan Anda untuk manajemen berat badan yang aman selama kehamilan.",
        "GLP-1 bisa menjadi pilihan setelah kehamilan dan masa menyusui selesai.",
      ],
    };
  }

  if (bmi < 23) {
    return {
      bmi,
      bmiCategory,
      eligible: false,
      eligibilityLevel: "not_eligible",
      reasons: [
        "BMI Anda dalam rentang normal menurut standar Asia.",
        "GLP-1 umumnya diresepkan untuk BMI ≥25 (atau ≥23 dengan komorbiditas).",
      ],
      recommendations: [
        "Pertahankan pola hidup sehat dengan diet seimbang dan olahraga teratur.",
        "Jika memiliki kekhawatiran kesehatan lain, konsultasikan dengan dokter.",
      ],
    };
  }

  // Build eligibility reasons
  if (isObese) {
    reasons.push(`BMI Anda ${bmi.toFixed(1)} termasuk kategori ${bmiCategory} — ini memenuhi kriteria BMI untuk GLP-1.`);
  } else if (isOverweight && hasDiabetes) {
    reasons.push(`BMI Anda ${bmi.toFixed(1)} dikombinasikan dengan diabetes tipe 2 memenuhi kriteria GLP-1.`);
  } else if (isOverweight) {
    reasons.push(`BMI Anda ${bmi.toFixed(1)} termasuk kategori berisiko menurut standar Asia.`);
  }

  if (hasDiabetes) {
    reasons.push("Diabetes tipe 2 adalah indikasi utama yang disetujui BPOM untuk Ozempic.");
  }

  if (hasTriedDiet) {
    reasons.push("Riwayat metode penurunan berat badan sebelumnya menunjukkan kebutuhan akan intervensi medis.");
  }

  if (hasThyroid) {
    reasons.push("Riwayat gangguan tiroid perlu dievaluasi lebih lanjut — GLP-1 memiliki kontraindikasi untuk MEN 2 dan karsinoma tiroid meduler.");
  }

  // Determine eligibility level
  let eligibilityLevel: "high" | "moderate" | "low" | "not_eligible";

  if (isObese && hasDiabetes) {
    eligibilityLevel = "high";
    recommendations.push("Anda memiliki profil yang sangat sesuai untuk terapi GLP-1.");
    recommendations.push("Ozempic terdaftar BPOM untuk diabetes tipe 2 dan terbukti menurunkan BB hingga 15%.");
    recommendations.push("Konsultasi dokter Nadi Health untuk resep dan rencana pengobatan personal.");
  } else if (isObese || (isOverweight && hasDiabetes)) {
    eligibilityLevel = "high";
    recommendations.push("Profil Anda menunjukkan kesesuaian yang baik untuk terapi GLP-1.");
    recommendations.push("Dokter akan mengevaluasi kondisi lengkap Anda untuk menentukan obat dan dosis terbaik.");
    recommendations.push("Konsultasi gratis dengan dokter Nadi Health sangat disarankan.");
  } else if (isOverweight && hasTriedDiet) {
    eligibilityLevel = "moderate";
    recommendations.push("GLP-1 bisa menjadi opsi yang baik setelah evaluasi medis lengkap.");
    recommendations.push("Dokter perlu menilai riwayat kesehatan Anda secara menyeluruh.");
    recommendations.push("Konsultasikan dengan dokter Nadi Health untuk penilaian personal.");
  } else {
    eligibilityLevel = "low";
    recommendations.push("Konsultasi dokter diperlukan untuk menentukan apakah GLP-1 sesuai untuk Anda.");
    recommendations.push("Perubahan gaya hidup (diet dan olahraga) mungkin menjadi langkah pertama yang disarankan.");
    recommendations.push("Dokter Nadi Health dapat membantu menentukan pendekatan terbaik.");
  }

  if (hasThyroid) {
    recommendations.push("Riwayat tiroid Anda perlu dievaluasi secara khusus sebelum memulai GLP-1.");
  }

  return {
    bmi,
    bmiCategory,
    eligible: true,
    eligibilityLevel,
    reasons,
    recommendations,
  };
}

function BmiGauge({ bmi }: { bmi: number }) {
  // Position on the gauge (18.5 to 40 range)
  const minBmi = 15;
  const maxBmi = 40;
  const clampedBmi = Math.max(minBmi, Math.min(maxBmi, bmi));
  const percentage = ((clampedBmi - minBmi) / (maxBmi - minBmi)) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-text-secondary mb-1">
        <span>Kurang</span>
        <span>Normal</span>
        <span>Berisiko</span>
        <span>Obesitas I</span>
        <span>Obesitas II</span>
      </div>
      <div className="relative h-4 rounded-full overflow-hidden bg-gray-100">
        {/* Gradient bar */}
        <div className="absolute inset-0 flex">
          <div className="h-full bg-blue-400" style={{ width: "14%" }} />
          <div className="h-full bg-green-400" style={{ width: "18%" }} />
          <div className="h-full bg-yellow-400" style={{ width: "8%" }} />
          <div className="h-full bg-orange-400" style={{ width: "20%" }} />
          <div className="h-full bg-red-400" style={{ width: "40%" }} />
        </div>
        {/* Indicator */}
        <div
          className="absolute top-0 w-1 h-full bg-gray-900 rounded-full shadow-lg transition-all duration-700"
          style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
        />
      </div>
      <div className="flex justify-between text-2xs text-text-light mt-1">
        <span>18.5</span>
        <span>23</span>
        <span>25</span>
        <span>30</span>
        <span>40</span>
      </div>
    </div>
  );
}

export default function ScreenerClient() {
  const [step, setStep] = useState<Step>("input");
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    age: "",
    height: "",
    weight: "",
    hasDiabetes: "",
    hasTriedDiet: "",
    hasThyroid: "",
    isPregnant: "",
  });
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.gender) newErrors.gender = "Pilih jenis kelamin";
    if (!formData.age) newErrors.age = "Masukkan usia Anda";
    const age = parseInt(formData.age);
    if (formData.age && (age < 18 || age > 80)) newErrors.age = "Usia harus antara 18-80 tahun";
    if (!formData.height) newErrors.height = "Masukkan tinggi badan";
    const h = parseFloat(formData.height);
    if (formData.height && (h < 100 || h > 250)) newErrors.height = "Tinggi badan tidak valid";
    if (!formData.weight) newErrors.weight = "Masukkan berat badan";
    const w = parseFloat(formData.weight);
    if (formData.weight && (w < 30 || w > 300)) newErrors.weight = "Berat badan tidak valid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.hasDiabetes) newErrors.hasDiabetes = "Pilih salah satu";
    if (!formData.hasTriedDiet) newErrors.hasTriedDiet = "Pilih salah satu";
    if (!formData.hasThyroid) newErrors.hasThyroid = "Pilih salah satu";
    if (formData.gender === "female" && !formData.isPregnant) newErrors.isPregnant = "Pilih salah satu";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === "input" && validateStep1()) {
      setStep("medical");
    } else if (step === "medical" && validateStep2()) {
      setStep("result");
    }
  };

  const result = step === "result" ? calculateResult(formData) : null;

  const levelLabels = {
    high: { text: "Kemungkinan Besar Sesuai", color: "text-green-700", bg: "bg-green-50", border: "border-green-200", icon: "✓" },
    moderate: { text: "Kemungkinan Sesuai", color: "text-primary", bg: "bg-primary-light", border: "border-primary/30", icon: "~" },
    low: { text: "Perlu Evaluasi Lebih Lanjut", color: "text-yellow-700", bg: "bg-yellow-50", border: "border-yellow-200", icon: "?" },
    not_eligible: { text: "Tidak Disarankan Saat Ini", color: "text-red-700", bg: "bg-red-50", border: "border-red-200", icon: "✕" },
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@") && email.includes(".")) {
      setEmailSubmitted(true);
    }
  };

  const handleShare = () => {
    if (navigator.share && result) {
      navigator.share({
        title: "Hasil Skrining GLP-1 Saya — Nadi Health",
        text: `BMI saya ${result.bmi.toFixed(1)} (${result.bmiCategory}). Cek kesesuaian GLP-1 Anda juga!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex gap-2 mb-8">
        {["Data Diri", "Riwayat Medis", "Hasil"].map((label, i) => {
          const steps: Step[] = ["input", "medical", "result"];
          const isActive = steps.indexOf(step) >= i;
          return (
            <div key={label} className="flex-1">
              <div className={`h-2 rounded-full transition-colors ${isActive ? "bg-primary" : "bg-gray-200"}`} />
              <p className={`text-xs mt-1 ${isActive ? "text-primary font-medium" : "text-text-light"}`}>{label}</p>
            </div>
          );
        })}
      </div>

      {/* Step 1: Physical Data */}
      {step === "input" && (
        <div className="animate-fade-in-up">
          <h2 className="text-xl font-bold text-text mb-2">Data Fisik Anda</h2>
          <p className="text-text-secondary text-sm mb-6">
            Kami menggunakan standar BMI Asia-Pasifik yang telah disesuaikan untuk populasi Indonesia.
          </p>

          <div className="space-y-5">
            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Jenis Kelamin</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "male", label: "Laki-laki" },
                  { value: "female", label: "Perempuan" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => updateField("gender", opt.value)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                      formData.gender === opt.value
                        ? "border-primary bg-primary-light text-primary"
                        : "border-border bg-white text-text-secondary hover:border-primary/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {errors.gender && <p className="text-error text-xs mt-1">{errors.gender}</p>}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Usia (tahun)</label>
              <input
                type="number"
                inputMode="numeric"
                value={formData.age}
                onChange={(e) => updateField("age", e.target.value)}
                placeholder="Contoh: 35"
                className="w-full px-4 py-3 rounded-xl border-2 border-border text-sm focus:border-primary focus:outline-none transition-colors"
              />
              {errors.age && <p className="text-error text-xs mt-1">{errors.age}</p>}
            </div>

            {/* Height & Weight */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Tinggi Badan (cm)</label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={formData.height}
                  onChange={(e) => updateField("height", e.target.value)}
                  placeholder="165"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {errors.height && <p className="text-error text-xs mt-1">{errors.height}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Berat Badan (kg)</label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={formData.weight}
                  onChange={(e) => updateField("weight", e.target.value)}
                  placeholder="85"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border text-sm focus:border-primary focus:outline-none transition-colors"
                />
                {errors.weight && <p className="text-error text-xs mt-1">{errors.weight}</p>}
              </div>
            </div>

            {/* Live BMI preview */}
            {formData.height && formData.weight && (
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-text-secondary mb-1">Estimasi BMI Anda</p>
                <p className="text-2xl font-bold text-primary">
                  {(parseFloat(formData.weight) / Math.pow(parseFloat(formData.height) / 100, 2)).toFixed(1)}
                  <span className="text-sm font-normal text-text-secondary ml-2">kg/m²</span>
                </p>
              </div>
            )}
          </div>

          <button onClick={handleNext} className="btn-primary w-full mt-8">
            Lanjutkan →
          </button>
        </div>
      )}

      {/* Step 2: Medical History */}
      {step === "medical" && (
        <div className="animate-fade-in-up">
          <h2 className="text-xl font-bold text-text mb-2">Riwayat Medis</h2>
          <p className="text-text-secondary text-sm mb-6">
            Informasi ini membantu menentukan kesesuaian GLP-1 untuk Anda.
          </p>

          <div className="space-y-5">
            {[
              { field: "hasDiabetes" as const, question: "Apakah Anda terdiagnosis diabetes tipe 2?" },
              { field: "hasTriedDiet" as const, question: "Apakah Anda sudah pernah mencoba diet atau program penurunan berat badan lain?" },
              { field: "hasThyroid" as const, question: "Apakah Anda memiliki riwayat gangguan tiroid atau MEN 2?" },
              ...(formData.gender === "female" ? [{ field: "isPregnant" as const, question: "Apakah Anda sedang hamil atau merencanakan kehamilan?" }] : []),
            ].map(({ field, question }) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-text mb-2">{question}</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "yes", label: "Ya" },
                    { value: "no", label: "Tidak" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateField(field, opt.value)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData[field] === opt.value
                          ? "border-primary bg-primary-light text-primary"
                          : "border-border bg-white text-text-secondary hover:border-primary/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors[field] && <p className="text-error text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}

            <div className="bg-primary-light rounded-xl p-4 text-sm text-primary">
              <p className="font-semibold mb-1">Mengapa kami bertanya ini?</p>
              <p className="text-primary/80">
                GLP-1 receptor agonist seperti Ozempic memiliki indikasi dan kontraindikasi spesifik.
                Jawaban Anda membantu skrining awal — keputusan akhir selalu oleh dokter.
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button onClick={() => setStep("input")} className="btn-secondary flex-1">
              ← Kembali
            </button>
            <button onClick={handleNext} className="btn-primary flex-1">
              Lihat Hasil →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Result */}
      {step === "result" && result && (
        <div className="animate-fade-in-up">
          {/* BMI Card */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6 mb-6">
            <div className="text-center mb-4">
              <p className="text-sm text-text-secondary mb-1">BMI Anda (Standar Asia-Pasifik)</p>
              <p className="text-5xl font-bold text-primary">{result.bmi.toFixed(1)}</p>
              <p className="text-lg font-semibold text-text mt-1">{result.bmiCategory}</p>
            </div>
            <BmiGauge bmi={result.bmi} />
          </div>

          {/* Eligibility Card */}
          <div className={`rounded-2xl border ${levelLabels[result.eligibilityLevel].border} ${levelLabels[result.eligibilityLevel].bg} p-6 mb-6`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${levelLabels[result.eligibilityLevel].color} bg-white`}>
                {levelLabels[result.eligibilityLevel].icon}
              </div>
              <div>
                <p className="text-sm text-text-secondary">Kesesuaian GLP-1</p>
                <p className={`text-lg font-bold ${levelLabels[result.eligibilityLevel].color}`}>
                  {levelLabels[result.eligibilityLevel].text}
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {result.reasons.map((r, i) => (
                <p key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="mt-0.5">•</span> {r}
                </p>
              ))}
            </div>

            <div className="border-t border-current/10 pt-4">
              <p className="font-semibold text-sm text-text mb-2">Rekomendasi:</p>
              {result.recommendations.map((r, i) => (
                <p key={i} className="text-sm text-text-secondary flex items-start gap-2 mb-1">
                  <span className="text-primary mt-0.5">→</span> {r}
                </p>
              ))}
            </div>
          </div>

          {/* Email Capture */}
          {!emailSubmitted ? (
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-text mb-2">Dapatkan Hasil Lengkap via Email</h3>
              <p className="text-sm text-text-secondary mb-4">
                Termasuk rekomendasi personal, perbandingan obat GLP-1, dan estimasi biaya.
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
              <p className="text-green-700 font-semibold">Hasil lengkap telah dikirim ke {email}</p>
              <p className="text-green-600 text-sm mt-1">Periksa inbox (dan folder spam) Anda.</p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link href="/quiz" className="btn-primary w-full text-center block">
              Konsultasi dengan Dokter →
            </Link>
            <button onClick={handleShare} className="btn-secondary w-full">
              Bagikan Hasil
            </button>
            <button
              onClick={() => { setStep("input"); setFormData({ gender: "", age: "", height: "", weight: "", hasDiabetes: "", hasTriedDiet: "", hasThyroid: "", isPregnant: "" }); setEmailSubmitted(false); setEmail(""); }}
              className="btn-ghost w-full"
            >
              Hitung Ulang
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-xs text-text-light leading-relaxed">
              <strong className="text-text-secondary">Disclaimer:</strong> Hasil skrining ini bersifat edukatif dan bukan diagnosis medis.
              Kesesuaian terapi GLP-1 hanya dapat ditentukan oleh dokter berlisensi setelah pemeriksaan menyeluruh.
              Standar BMI menggunakan acuan Asia-Pasifik (WHO WPRO 2000).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
