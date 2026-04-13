import type { Metadata } from "next";
import Link from "next/link";
import TrustMarquee from "@/components/TrustMarquee";

export const metadata: Metadata = {
  title: "Program Penurunan Berat Badan Berbasis Medis — GLP-1 di Indonesia",
  description:
    "Program penurunan berat badan berbasis medis dengan GLP-1 di Indonesia. Data STEP trials, siapa yang memenuhi syarat, dan cara memulai dengan bimbingan dokter berlisensi.",
  keywords: ["turun berat badan medis", "obesitas pengobatan indonesia", "glp-1 penurunan berat badan", "wegovy indonesia"],
};

const stepTrials = [
  {
    trial: "STEP 1",
    drug: "Semaglutide 2,4mg",
    population: "Dewasa obesitas tanpa diabetes",
    weightLoss: "14,9%",
    duration: "68 minggu",
    journal: "NEJM 2021",
  },
  {
    trial: "STEP 2",
    drug: "Semaglutide 2,4mg",
    population: "Dewasa dengan diabetes tipe 2",
    weightLoss: "9,6%",
    duration: "68 minggu",
    journal: "Lancet 2021",
  },
  {
    trial: "STEP 3",
    drug: "Semaglutide 2,4mg",
    population: "Obesitas + intervensi intensif gaya hidup",
    weightLoss: "16,0%",
    duration: "68 minggu",
    journal: "JAMA 2021",
  },
  {
    trial: "SURMOUNT-1",
    drug: "Tirzepatide 15mg",
    population: "Dewasa obesitas tanpa diabetes",
    weightLoss: "22,5%",
    duration: "72 minggu",
    journal: "NEJM 2022",
  },
];

const qualificationCriteria = [
  {
    title: "BMI ≥30 (Obesitas)",
    desc: "Terlepas dari ada tidaknya kondisi penyerta lain. BMI 30+ menunjukkan risiko metabolik yang signifikan.",
    emoji: "📊",
  },
  {
    title: "BMI ≥27 + Komorbiditas",
    desc: "Dengan setidaknya satu kondisi: diabetes tipe 2, hipertensi, dislipidemia, atau apnea tidur.",
    emoji: "🩺",
  },
  {
    title: "Gagal dengan Diet & Olahraga",
    desc: "Sudah mencoba perubahan gaya hidup selama ≥6 bulan namun belum mencapai atau mempertahankan penurunan berat badan bermakna.",
    emoji: "🏃",
  },
];

const treatmentApproach = [
  {
    step: "1",
    title: "Evaluasi Medis Komprehensif",
    desc: "Dokter menilai riwayat medis, BMI, kondisi penyerta, dan faktor risiko untuk menentukan apakah GLP-1 tepat untuk Anda.",
  },
  {
    step: "2",
    title: "Pemilihan Obat & Dosis",
    desc: "Dokter memilih obat GLP-1 yang paling sesuai (Ozempic, Victoza, atau lainnya) dan merancang jadwal titrasi yang aman.",
  },
  {
    step: "3",
    title: "Pendampingan Gaya Hidup",
    desc: "Program GLP-1 paling efektif dikombinasikan dengan panduan nutrisi dan aktivitas fisik yang personalisasi.",
  },
  {
    step: "4",
    title: "Pemantauan Berkala",
    desc: "Follow-up rutin setiap 4-8 minggu untuk memantau kemajuan, toleransi obat, dan penyesuaian dosis jika diperlukan.",
  },
];

export default function TurunBeratBadanPage() {
  return (
    <>
      <TrustMarquee />

      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge-teal mb-6 block w-fit">Program Medis</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
              Penurunan Berat Badan<br />
              <span className="text-primary">Berbasis Medis</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              GLP-1 telah mengubah cara pengobatan obesitas. Dengan bimbingan dokter berlisensi dan obat BPOM resmi, mulai perjalanan penurunan berat badan Anda secara aman dan efektif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="btn-primary text-base px-8 py-4">
                Cek Apakah GLP-1 Cocok untuk Anda →
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { value: "~15%", label: "Rata-rata penurunan BB" },
                { value: "68 minggu", label: "Durasi studi STEP" },
                { value: "50%", label: "Peserta turun >15% BB" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STEP Trials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge-teal mb-4 mx-auto w-fit block">Data Klinis Peer-Reviewed</span>
            <h2 className="section-title mb-4">Hasil Uji Klinis STEP & SURMOUNT</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Randomized controlled trials terbesar untuk GLP-1 dalam penurunan berat badan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepTrials.map((trial) => (
              <div key={trial.trial} className="card flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-teal text-xs">{trial.trial}</span>
                  <span className="text-xs text-text-secondary">{trial.journal}</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{trial.weightLoss}</div>
                <p className="text-xs text-text-secondary mb-1">penurunan berat badan</p>
                <div className="flex-1 mt-4 space-y-2">
                  <div>
                    <p className="text-xs text-text-secondary">Obat</p>
                    <p className="text-sm font-medium text-text">{trial.drug}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Populasi</p>
                    <p className="text-sm text-text">{trial.population}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Durasi</p>
                    <p className="text-sm font-medium text-text">{trial.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-text-secondary mt-6">
            Semua data berasal dari uji klinis peer-reviewed. Hasil individual bervariasi tergantung kondisi medis, diet, dan aktivitas fisik.
          </p>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Siapa yang Memenuhi Syarat?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Pedoman internasional dan rekomendasi dokter untuk terapi GLP-1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {qualificationCriteria.map((item) => (
              <div key={item.title} className="card text-center flex flex-col items-center">
                <span className="text-5xl mb-4">{item.emoji}</span>
                <h3 className="font-bold text-text text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* BMI Calculator callout */}
          <div className="bg-primary-light rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="font-bold text-text text-xl mb-2">Tidak Yakin BMI Anda?</h3>
              <p className="text-text-secondary text-sm">
                Dokter Nadi Health akan menghitung dan menilai BMI Anda secara akurat dalam proses konsultasi.
              </p>
            </div>
            <Link href="/quiz" className="btn-primary whitespace-nowrap">
              Mulai Konsultasi →
            </Link>
          </div>
        </div>
      </section>

      {/* Why GLP-1 is Different */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">GLP-1: Berbeda dari Program Diet Biasa</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Bekerja pada Mekanisme Biologis",
                    desc: "GLP-1 mengatasi resistensi fisiologis terhadap penurunan berat badan yang sering kali membuat diet saja tidak cukup.",
                  },
                  {
                    title: "Terbukti dalam Uji Klinis Ketat",
                    desc: "Tidak seperti suplemen atau program diet, GLP-1 telah diuji dalam randomized controlled trials berskala besar.",
                  },
                  {
                    title: "Manfaat Metabolik Tambahan",
                    desc: "Selain penurunan berat badan, GLP-1 juga memperbaiki kontrol gula darah, tekanan darah, dan profil lipid.",
                  },
                  {
                    title: "Didampingi Dokter Profesional",
                    desc: "Bukan sekadar suplemen — ini adalah pengobatan medis di bawah pengawasan dokter berlisensi.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="font-semibold text-text mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-bold text-text text-lg mb-6 text-center">Pendekatan Nadi Health</h3>
              <div className="space-y-4">
                {treatmentApproach.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-text-secondary">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon: Wegovy & Mounjaro */}
      <section className="py-12 bg-orange-50 border-y border-orange-200">
        <div className="container-custom">
          <div className="text-center">
            <span className="badge badge-orange mb-4 mx-auto w-fit block">Segera Hadir</span>
            <h2 className="text-2xl font-bold text-text mb-4">
              Wegovy & Mounjaro — Segera Tersedia di Nadi Health
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              Wegovy (semaglutide 2,4mg) dan Mounjaro (tirzepatide) menunjukkan penurunan berat badan yang jauh lebih besar dibanding dosis Ozempic standar. Daftar sekarang untuk mendapat akses pertama.
            </p>
            <Link href="/quiz" className="btn-primary">
              Daftarkan Minat Saya →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mulai Program Penurunan Berat Badan Medis
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Konsultasikan kondisi Anda dengan dokter kami dan temukan program yang tepat untuk Anda.
          </p>
          <Link href="/quiz" className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-colors inline-block">
            Cek Kesesuaian Sekarang →
          </Link>
        </div>
      </section>
    </>
  );
}
