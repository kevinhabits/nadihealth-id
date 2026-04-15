import type { Metadata } from "next";
import Link from "next/link";
import TrustMarquee from "@/components/TrustMarquee";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Ozempic (Semaglutide) di Indonesia — Harga, BPOM, dan Cara Mendapatkan Resep",
  description:
    "Informasi lengkap tentang Ozempic (semaglutide) di Indonesia: harga Rp 2,6–3,1 juta/pen, nomor BPOM DKI2164605043A1, cara kerja, efek samping, dan konsultasi dokter online.",
  keywords: [
    "ozempic indonesia",
    "ozempic harga",
    "semaglutide indonesia",
    "ozempic bpom",
    "resep ozempic online",
  ],
  openGraph: {
    title: "Ozempic (Semaglutide) di Indonesia | Nadi Health",
    description: "Informasi resmi Ozempic: harga, BPOM, cara kerja, dan konsultasi dokter online.",
  },
};

const ozempicFaqs = [
  {
    question: "Berapa harga Ozempic di Indonesia?",
    answer:
      "Harga Ozempic di Nadi Health berkisar Rp 2,6 juta (0,5mg) hingga Rp 3,1 juta (1mg) per pen. Satu pen berisi 4 dosis mingguan. Harga sudah termasuk konsultasi dokter dan resep digital.",
  },
  {
    question: "Apakah Ozempic sudah terdaftar BPOM?",
    answer:
      "Ya. Ozempic terdaftar di BPOM RI dengan nomor DKI2164605043A1 untuk indikasi diabetes tipe 2 dewasa.",
  },
  {
    question: "Seberapa cepat Ozempic menurunkan berat badan?",
    answer:
      "Sebagian besar pasien mulai merasakan penurunan nafsu makan dalam minggu pertama. Penurunan berat badan bermakna biasanya terlihat dalam 4-8 minggu. Rata-rata penurunan berat badan adalah 5-10% dalam 6 bulan pertama dengan dosis optimal.",
  },
  {
    question: "Bagaimana cara menyuntik Ozempic?",
    answer:
      "Ozempic disuntikkan sekali seminggu di bawah kulit (subkutan) di perut, paha, atau lengan atas. Pen sudah dilengkapi jarum kecil dan mudah digunakan tanpa pelatihan khusus. Dokter Nadi Health akan menjelaskan cara penggunaan saat konsultasi.",
  },
  {
    question: "Bisakah saya menggunakan Ozempic tanpa diabetes?",
    answer:
      "Ozempic terdaftar BPOM untuk diabetes tipe 2. Dokter dapat meresepkan off-label untuk indikasi lain berdasarkan penilaian klinis. Konsultasikan kondisi Anda dengan dokter Nadi Health untuk mengetahui opsi yang paling sesuai.",
  },
];

const stepTrialData = [
  { label: "Penurunan BB rata-rata (STEP 1)", value: "14,9%", detail: "vs 2,4% plasebo" },
  { label: "Peserta capai >5% penurunan BB", value: "86%", detail: "dalam 68 minggu" },
  { label: "Peserta capai >15% penurunan BB", value: "50%", detail: "dosis semaglutide 2,4mg" },
  { label: "Penurunan HbA1c (STEP 2)", value: "1,6%", detail: "pada penderita diabetes" },
];

export default function OzempicPage() {
  return (
    <>
      <TrustMarquee />

      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="badge badge-green">BPOM Resmi</span>
              <span className="badge badge-teal">Tersedia Sekarang</span>
              <span className="text-sm text-text-secondary font-medium">No. Reg: DKI2164605043A1</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
              Ozempic (Semaglutide)<br />
              <span className="text-primary">di Indonesia</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Ozempic adalah semaglutide injeksi mingguan yang terbukti secara klinis menurunkan berat badan hingga 15% dan memperbaiki kontrol gula darah pada diabetes tipe 2.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="btn-primary text-base px-8 py-4">
                Apakah Ozempic Cocok untuk Anda? →
              </Link>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                Konsultasi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="bg-primary-light border-y border-primary/20 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-text-secondary mb-1">Harga Ozempic di Nadi Health</p>
              <p className="text-2xl font-bold text-primary">Rp 2,6 – 3,1 juta<span className="text-base font-normal">/pen (4 dosis)</span></p>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Termasuk konsultasi dokter
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Resep digital resmi
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Pengiriman ke seluruh Indonesia
              </div>
            </div>
            <Link href="/quiz" className="btn-primary whitespace-nowrap">
              Cek Kesesuaian →
            </Link>
          </div>
        </div>
      </section>

      {/* What is Ozempic */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Apa itu Ozempic?</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text">Ozempic</strong> adalah nama merek untuk semaglutide, obat injeksi GLP-1 receptor agonist yang diproduksi oleh Novo Nordisk. Di Indonesia, Ozempic tersedia dalam dua dosis: 0,5mg dan 1mg per suntikan mingguan.
                </p>
                <p>
                  Ozempic bekerja dengan meniru hormon GLP-1 alami yang diproduksi usus saat makan. Ini memperlambat pengosongan lambung, meningkatkan produksi insulin, mengurangi produksi glukagon, dan menekan nafsu makan di otak.
                </p>
                <p>
                  Obat ini disetujui FDA pada 2017 dan telah digunakan oleh lebih dari 6 juta orang di seluruh dunia. Di Indonesia, BPOM telah menyetujui Ozempic untuk pengobatan diabetes tipe 2 dewasa.
                </p>
              </div>
            </div>

            {/* Mechanism Visual */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-text mb-6 text-center">Mekanisme Kerja Ozempic</h3>
              <div className="space-y-4">
                {[
                  { icon: "🧠", title: "Otak", desc: "Menekan nafsu makan & rasa lapar" },
                  { icon: "🫁", title: "Lambung", desc: "Memperlambat pengosongan → kenyang lebih lama" },
                  { icon: "🫀", title: "Pankreas", desc: "Meningkatkan insulin, menurunkan glukagon" },
                  { icon: "🩸", title: "Kadar Gula", desc: "Menurunkan gula darah puasa & post-makan" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-card">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-text text-sm">{item.title}</p>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP Trial Data */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge-teal mb-4 mx-auto w-fit block">Data Klinis</span>
            <h2 className="section-title mb-4">Hasil Uji Klinis STEP Trials</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Data dari uji klinis randomized controlled trial terbesar untuk semaglutide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepTrialData.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-card border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                <p className="font-semibold text-text text-sm mb-1">{item.label}</p>
                <p className="text-xs text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-text-secondary mt-6">
            * Data berdasarkan STEP 1 (NEJM 2021) dan STEP 2 (Lancet 2021). Hasil individual dapat berbeda.
          </p>
        </div>
      </section>

      {/* Dosing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dosing schedule */}
            <div>
              <h2 className="section-title mb-6">Jadwal Dosis Ozempic</h2>
              <div className="space-y-4">
                {[
                  { week: "Minggu 1-4", dose: "0,25mg", note: "Dosis awal, toleransi tubuh", color: "bg-primary-light" },
                  { week: "Minggu 5-8", dose: "0,5mg", note: "Dosis pemeliharaan awal", color: "bg-primary/20" },
                  { week: "Minggu 9+", dose: "1mg", note: "Dosis penuh (atas arahan dokter)", color: "bg-primary/30" },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} rounded-xl p-4 flex items-center gap-4`}>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs font-bold text-primary text-center">
                      {item.dose}
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm">{item.week}</p>
                      <p className="text-text-secondary text-xs">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-secondary mt-4">
                * Jadwal titrasi ditentukan oleh dokter berdasarkan kondisi individual pasien.
              </p>
            </div>

            {/* Side Effects */}
            <div>
              <h2 className="section-title mb-6">Efek Samping</h2>
              <div className="space-y-3">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <h4 className="font-bold text-yellow-800 mb-3">Umum (10-40% pasien)</h4>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    {["Mual (terutama 2-4 minggu pertama)", "Kembung / gangguan pencernaan", "Diare atau konstipasi", "Penurunan nafsu makan"].map(se => (
                      <li key={se} className="flex items-center gap-2">
                        <span>•</span> {se}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-bold text-red-800 mb-3">Jarang tapi Serius</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    {["Pankreatitis akut", "Gangguan ginjal", "Reaksi alergi berat", "Hipoglikemia (jika dikombinasi insulin)"].map(se => (
                      <li key={se} className="flex items-center gap-2">
                        <span>•</span> {se}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-text-secondary">
                  Pemantauan berkala oleh dokter Nadi Health memastikan keamanan optimal selama pengobatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-text mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Panduan Lengkap Ozempic Indonesia", url: "https://nadihealth.org/ozempic-adalah/", readTime: "8 menit" },
              { title: "Efek Samping Ozempic dan Cara Mengatasinya", url: "https://nadihealth.org/semaglutide-efek-samping/", readTime: "8 menit" },
              { title: "Wegovy vs Ozempic: Perbedaan Dosis", url: "https://nadihealth.org/wegovy-vs-ozempic/", readTime: "7 menit" },
            ].map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:shadow-card-hover transition-all group"
              >
                <span className="badge-teal text-xs mb-3 block w-fit">Ozempic</span>
                <h3 className="font-semibold text-text text-sm group-hover:text-primary transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-text-secondary">{article.readTime} baca · nadihealth.org ↗</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">FAQ Ozempic</h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={ozempicFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Apakah Ozempic Cocok untuk Anda?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Jawab kuesioner kesehatan singkat dan konsultasikan kondisi Anda dengan dokter spesialis kami.
          </p>
          <Link href="/quiz" className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-colors inline-block">
            Cek Kesesuaian Sekarang →
          </Link>
        </div>
      </section>
    </>
  );
}
