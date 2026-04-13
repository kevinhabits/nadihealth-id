import type { Metadata } from "next";
import Link from "next/link";
import TrustMarquee from "@/components/TrustMarquee";

export const metadata: Metadata = {
  title: "GLP-1 & Diabetes — Panduan Lengkap Pengobatan di Indonesia",
  description:
    "Panduan lengkap GLP-1 receptor agonist untuk diabetes dan obesitas di Indonesia: Ozempic, Victoza, Wegovy, Mounjaro — status BPOM, cara kerja, dan pilihan pengobatan.",
  keywords: ["glp-1 indonesia", "diabetes pengobatan", "semaglutide diabetes", "liraglutide victoza indonesia"],
};

const glp1Drugs = [
  {
    name: "Ozempic",
    generic: "Semaglutide 0,5mg / 1mg",
    manufacturer: "Novo Nordisk",
    bpomStatus: "Terdaftar BPOM",
    bpomNo: "DKI2164605043A1",
    indication: "Diabetes tipe 2",
    frequency: "Sekali seminggu",
    weightLoss: "~6-8%",
    price: "Rp 2,6–3,1 juta/pen",
    available: true,
    href: "/ozempic",
  },
  {
    name: "Victoza",
    generic: "Liraglutide 6mg/mL",
    manufacturer: "Novo Nordisk",
    bpomStatus: "Terdaftar BPOM",
    bpomNo: "DKL1763801343A1",
    indication: "Diabetes tipe 2",
    frequency: "Sekali sehari",
    weightLoss: "~5-7%",
    price: "Rp 1,8–2,5 juta/pen",
    available: true,
    href: "/glp1-diabetes",
  },
  {
    name: "Wegovy",
    generic: "Semaglutide 2,4mg",
    manufacturer: "Novo Nordisk",
    bpomStatus: "Proses Registrasi",
    indication: "Obesitas / manajemen BB",
    frequency: "Sekali seminggu",
    weightLoss: "~15%",
    price: "Belum tersedia",
    available: false,
    href: "/turun-berat-badan",
  },
  {
    name: "Mounjaro",
    generic: "Tirzepatide",
    manufacturer: "Eli Lilly",
    bpomStatus: "Belum Terdaftar",
    indication: "Diabetes & obesitas",
    frequency: "Sekali seminggu",
    weightLoss: "~20-22%",
    price: "Belum tersedia",
    available: false,
    href: "/glp1-diabetes",
  },
];

const diabetesStats = [
  { value: "19,5 juta", label: "Penderita diabetes di Indonesia", source: "IDF 2021" },
  { value: "#7", label: "Negara dengan diabetes terbesar di dunia", source: "IDF Diabetes Atlas" },
  { value: "66%", label: "Tidak menyadari memiliki diabetes", source: "Riskesdas 2018" },
  { value: "1,5%", label: "Prevalensi diabetes Indonesia (2018→2030: diprediksi naik)", source: "Kemenkes RI" },
];

export default function Glp1DiabetesPage() {
  return (
    <>
      <TrustMarquee />

      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge-teal mb-6 block w-fit">Edukasi Medis</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
              GLP-1 & Diabetes:<br />
              <span className="text-primary">Panduan Pengobatan</span><br />
              di Indonesia
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              GLP-1 receptor agonist telah merevolusi pengobatan diabetes tipe 2 dan obesitas. Pelajari opsi yang tersedia di Indonesia dan konsultasikan dengan dokter kami.
            </p>
            <Link href="/quiz" className="btn-primary text-base px-8 py-4">
              Cek Kesesuaian GLP-1 untuk Anda →
            </Link>
          </div>
        </div>
      </section>

      {/* Diabetes Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Diabetes di Indonesia: Fakta dan Angka</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diabetesStats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-card border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-text font-medium text-sm mb-1">{stat.label}</p>
                <p className="text-xs text-text-secondary">Sumber: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is GLP-1 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Apa itu GLP-1 dan Bagaimana Cara Kerjanya?</h2>
            <div className="prose prose-sm max-w-none text-text-secondary space-y-4 leading-relaxed">
              <p>
                <strong className="text-text">GLP-1 (Glucagon-Like Peptide-1)</strong> adalah hormon incretin yang secara alami diproduksi oleh sel L di usus halus saat kita mengonsumsi makanan. Hormon ini memainkan peran kunci dalam regulasi gula darah dan nafsu makan.
              </p>
              <p>
                Obat-obatan GLP-1 receptor agonist meniru aksi hormon GLP-1 alami ini, namun dengan durasi kerja yang jauh lebih panjang (dari beberapa menit menjadi beberapa hari hingga seminggu penuh).
              </p>
              <div className="bg-primary-light rounded-xl p-6 my-6">
                <h3 className="font-bold text-text mb-4">Manfaat Utama GLP-1:</h3>
                <ul className="space-y-2">
                  {[
                    "Menurunkan kadar gula darah puasa dan setelah makan",
                    "Meningkatkan sekresi insulin saat kadar gula darah tinggi",
                    "Menekan produksi glukagon berlebih",
                    "Memperlambat pengosongan lambung → kenyang lebih lama",
                    "Mengurangi nafsu makan melalui sinyal ke otak",
                    "Terbukti menurunkan risiko kardiovaskular",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-text text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drug Comparison */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Obat GLP-1 Tersedia di Indonesia</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Status BPOM, indikasi, dan perbandingan obat GLP-1 untuk pasar Indonesia
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-card border border-border overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  {["Obat", "Generik", "Status BPOM", "Indikasi", "Frekuensi", "Rata-rata Penurunan BB", "Harga Est."].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {glp1Drugs.map((drug) => (
                  <tr key={drug.name} className={`${!drug.available ? "opacity-60" : ""} hover:bg-gray-50 transition-colors`}>
                    <td className="px-4 py-4">
                      <Link href={drug.href} className="font-bold text-text hover:text-primary">
                        {drug.name}
                      </Link>
                      <p className="text-xs text-text-secondary">{drug.manufacturer}</p>
                    </td>
                    <td className="px-4 py-4 text-sm text-text-secondary">{drug.generic}</td>
                    <td className="px-4 py-4">
                      <span className={`badge text-xs ${drug.available ? "badge-green" : "badge-orange"}`}>
                        {drug.bpomStatus}
                      </span>
                      {drug.bpomNo && (
                        <p className="text-xs text-text-secondary mt-1">{drug.bpomNo}</p>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-text-secondary">{drug.indication}</td>
                    <td className="px-4 py-4 text-sm text-text-secondary">{drug.frequency}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-primary">{drug.weightLoss}</td>
                    <td className="px-4 py-4 text-sm font-medium text-text">{drug.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {glp1Drugs.map((drug) => (
              <div key={drug.name} className={`card ${!drug.available ? "opacity-70" : ""}`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-text">{drug.name}</h3>
                    <p className="text-xs text-text-secondary">{drug.generic}</p>
                  </div>
                  <span className={`badge text-xs ${drug.available ? "badge-green" : "badge-orange"}`}>
                    {drug.bpomStatus}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-text-secondary text-xs">Frekuensi</p>
                    <p className="font-medium text-text">{drug.frequency}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs">Penurunan BB</p>
                    <p className="font-semibold text-primary">{drug.weightLoss}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-text-secondary text-xs">Harga</p>
                    <p className="font-medium text-text">{drug.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-text-secondary mt-6">
            * Perkiraan penurunan berat badan berdasarkan uji klinis. Hasil individual bervariasi. Konsultasi dokter diperlukan.
          </p>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-6">Siapa yang Cocok Menggunakan GLP-1?</h2>
              <div className="space-y-3">
                {[
                  "Penderita diabetes tipe 2 dengan HbA1c tidak terkontrol (>7%)",
                  "Individu dengan BMI ≥30 (obesitas)",
                  "Individu dengan BMI ≥27 + komorbiditas (hipertensi, dislipidemia)",
                  "Pasien yang ingin menurunkan risiko kardiovaskular",
                  "Mereka yang gagal dengan diet dan olahraga saja",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-title mb-6">Siapa yang Tidak Cocok?</h2>
              <div className="space-y-3">
                {[
                  "Ibu hamil atau menyusui",
                  "Riwayat kanker tiroid meduler (MTC) atau MEN2",
                  "Riwayat pankreatitis akut",
                  "Alergi terhadap semaglutide/liraglutide",
                  "Diabetes tipe 1 (bukan indikasi utama)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-sm text-text">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-secondary mt-4">
                Penilaian kelayakan akhir dilakukan oleh dokter berlisensi berdasarkan riwayat medis lengkap Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Mulai Perjalanan Sehat Anda</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Cek apakah GLP-1 sesuai untuk kondisi Anda melalui konsultasi dokter online bersama Nadi Health.
          </p>
          <Link href="/quiz" className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-colors inline-block">
            Cek Kesesuaian GLP-1 →
          </Link>
        </div>
      </section>
    </>
  );
}
