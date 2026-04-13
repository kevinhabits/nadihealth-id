import type { Metadata } from "next";
import Link from "next/link";
import TrustMarquee from "@/components/TrustMarquee";
import StatsSection from "@/components/StatsSection";
import FaqAccordion from "@/components/FaqAccordion";
import { homeFaqs } from "@/data/faqs";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Nadi Health — Solusi GLP-1 & Penurunan Berat Badan Terpercaya di Indonesia",
  description:
    "Konsultasi dokter online untuk Ozempic, semaglutide, dan GLP-1 di Indonesia. BPOM resmi, dokter berlisensi IDI, privasi terjamin.",
};

const treatments = [
  {
    name: "Ozempic",
    generic: "Semaglutide 0.5mg / 1mg",
    price: "Rp 2,6–3,1 juta/pen",
    badge: "BPOM Resmi",
    badgeStyle: "badge-green",
    description: "Pengobatan diabetes tipe 2 dan penurunan berat badan berbasis bukti.",
    href: "/ozempic",
    bpomNo: "DKI2164605043A1",
    available: true,
  },
  {
    name: "Liraglutide",
    generic: "Victoza 6mg/mL",
    price: "Rp 1,8–2,5 juta/pen",
    badge: "BPOM Resmi",
    badgeStyle: "badge-green",
    description: "Alternatif GLP-1 harian yang terbukti efektif untuk diabetes.",
    href: "/glp1-diabetes",
    available: true,
  },
  {
    name: "Wegovy",
    generic: "Semaglutide 2,4mg",
    price: "Segera Hadir",
    badge: "Segera Hadir",
    badgeStyle: "badge-orange",
    description: "Dosis lebih tinggi khusus untuk manajemen berat badan kronik.",
    href: "/turun-berat-badan",
    available: false,
  },
  {
    name: "Mounjaro",
    generic: "Tirzepatide",
    price: "Segera Hadir",
    badge: "Segera Hadir",
    badgeStyle: "badge-orange",
    description: "GIP/GLP-1 dual agonist terbaru dengan efektivitas tertinggi.",
    href: "/glp1-diabetes",
    available: false,
  },
];

const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Konsultasi Dokter Online",
    description: "Dokter berlisensi IDI siap mendampingi perjalanan kesehatan Anda — dari penilaian awal hingga pemantauan rutin.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Obat BPOM Resmi",
    description: "Semua obat yang kami sediakan telah terdaftar dan disetujui oleh BPOM RI. Tidak ada obat palsu atau ilegal.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Privasi & Kenyamanan",
    description: "Data medis Anda terenkripsi dan terjaga penuh. Obat dikirim dalam kemasan diskrit ke seluruh Indonesia.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Isi Kuesioner Kesehatan",
    description: "Jawab pertanyaan kesehatan sederhana dalam 2 menit. Dokter kami akan meninjau jawaban Anda secara personal.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Konsultasi dengan Dokter",
    description: "Konsultasi online dengan dokter berlisensi IDI. Tanya apa saja tentang GLP-1 dan kondisi kesehatan Anda.",
    icon: "👨‍⚕️",
  },
  {
    step: "03",
    title: "Terima Resep & Obat",
    description: "Resep digital dikirim langsung, obat BPOM resmi dikirim ke pintu rumah Anda dalam kemasan diskrit.",
    icon: "📦",
  },
];

const doctors = [
  {
    name: "dr. Ahmad Fauzi, SpPD",
    specialty: "Spesialis Penyakit Dalam",
    credentials: "FK UI • RSUPN Cipto Mangunkusumo",
    description: "10+ tahun pengalaman menangani diabetes tipe 2 dan metabolik syndrome.",
  },
  {
    name: "dr. Sari Dewi, SpGK",
    specialty: "Spesialis Gizi Klinik",
    credentials: "FK Unpad • RS Hasan Sadikin",
    description: "Spesialis nutrisi dan manajemen berat badan berbasis bukti ilmiah.",
  },
  {
    name: "dr. Budi Santoso, SpPD-KEMD",
    specialty: "Konsultan Endokrinologi",
    credentials: "FK UGM • RSUP Dr. Sardjito",
    description: "Pakar hormon dan metabolisme, spesialisasi obesitas dan diabetes.",
  },
];

const testimonials = [
  {
    name: "Rini S.",
    location: "Jakarta Selatan",
    text: "Setelah 3 bulan pakai Ozempic dengan bimbingan dokter Nadi Health, turun 8 kg! Prosesnya mudah dan dokternya sangat responsif.",
    rating: 5,
    metric: "-8 kg dalam 3 bulan",
  },
  {
    name: "Budi W.",
    location: "Surabaya",
    text: "HbA1c saya turun dari 9.2% ke 6.8% dalam 6 bulan. Konsultasinya dari rumah, tidak perlu antri di RS lagi.",
    rating: 5,
    metric: "HbA1c turun dari 9.2% → 6.8%",
  },
  {
    name: "Dewi K.",
    location: "Bandung",
    text: "Akhirnya bisa turun berat badan dengan cara yang medis dan aman. Dokternya sabar menjawab semua pertanyaan saya.",
    rating: 5,
    metric: "-11 kg dalam 4 bulan",
  },
];

export default function HomePage() {
  const previewArticles = articles.slice(0, 3);

  return (
    <>
      {/* Trust Marquee */}
      <TrustMarquee />

      {/* ═══════════════════════════════════════════════
          HERO SECTION — Quiz CTA as primary element
      ═══════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-light/40 to-transparent" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Platform Telehealth GLP-1 Pertama di Indonesia
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Solusi GLP-1{" "}
              <span className="text-primary relative">
                Terpercaya
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" preserveAspectRatio="none">
                  <path d="M0 6 Q75 0 150 6 Q225 12 300 6" stroke="#0E7490" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </span>{" "}
              di Indonesia
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Konsultasi dokter online untuk Ozempic, penurunan berat badan, dan
              manajemen diabetes — mudah, aman, dan terjangkau.
            </p>

            {/* ── PRIMARY QUIZ CTA — large eye-catching card ── */}
            <Link
              href="/quiz"
              className="group block max-w-xl mb-5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-primary to-[#0C5E75] px-6 py-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                    Cek Kesesuaian Anda — Gratis
                  </div>
                  <div className="text-primary-light text-sm font-medium">
                    Penilaian kesehatan 2 menit oleh dokter berlisensi IDI
                  </div>
                  {/* Micro-trust signals */}
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-white/80 font-medium">
                    <span>⏱️ 2 menit</span>
                    <span>•</span>
                    <span>🔒 Privat</span>
                    <span>•</span>
                    <span>👨‍⚕️ Ditinjau Dokter</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Secondary CTA */}
            <div className="flex items-center gap-4">
              <Link href="/ozempic" className="text-text-secondary text-sm font-medium hover:text-primary transition-colors">
                Pelajari Ozempic →
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 items-center mt-6">
              {[
                "✓ Dokter Berlisensi IDI",
                "✓ BPOM Resmi",
                "✓ Privasi Terjamin",
              ].map((item) => (
                <span key={item} className="text-sm text-text-secondary font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero visual element */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary-light rounded-full opacity-60" />
              <div className="absolute inset-8 bg-primary/10 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-40 h-40 text-primary" fill="none" stroke="currentColor" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" strokeWidth="2" opacity="0.2"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M60 30v30m0 0l15-15M60 60l-15-15M45 75h30M40 90h40" opacity="0.8"/>
                  <circle cx="60" cy="60" r="8" fill="#0E7490" opacity="0.9"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          QUIZ TEASER SECTION
      ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-light/30 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                Apakah Terapi GLP-1 Cocok untuk Anda?
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">
                Ribuan orang Indonesia sudah mengecek — mulai penilaian gratis Anda sekarang
              </p>
            </div>

            {/* Quiz preview cards — 3 floating overlapping mockups */}
            <div className="relative h-56 md:h-64 flex items-center justify-center mb-10 select-none">
              {/* Card 3 — Result (rightmost, behind) */}
              <div className="absolute right-[5%] md:right-[15%] top-2 w-44 md:w-52 bg-white rounded-2xl shadow-lg border border-border p-4 rotate-3 z-10">
                <div className="text-[10px] font-semibold text-primary bg-primary-light rounded-full px-2 py-0.5 inline-block mb-2">📊 Hasil</div>
                <div className="text-sm font-bold text-text mb-1">BMI: 26.1</div>
                <div className="text-[10px] text-text-secondary mb-2">Kategori: Overweight</div>
                <div className="text-[10px] font-semibold text-green-700 bg-green-50 rounded px-2 py-1">
                  ✅ GLP-1 Direkomendasikan
                </div>
              </div>

              {/* Card 2 — BMI (middle, slightly behind) */}
              <div className="absolute left-[5%] md:left-[18%] top-5 w-44 md:w-52 bg-white rounded-2xl shadow-lg border border-border p-4 -rotate-2 z-20">
                <div className="text-[10px] font-semibold text-text-secondary mb-2">Langkah 4 dari 12</div>
                <div className="text-sm font-bold text-text mb-2">Tinggi & Berat Badan</div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-50 rounded px-2 py-1.5 text-[10px] text-center">
                    <span className="block font-bold text-text text-sm">165</span>
                    <span className="text-text-secondary">cm</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded px-2 py-1.5 text-[10px] text-center">
                    <span className="block font-bold text-text text-sm">71</span>
                    <span className="text-text-secondary">kg</span>
                  </div>
                </div>
              </div>

              {/* Card 1 — Gender (front, center) */}
              <div className="relative w-48 md:w-56 bg-white rounded-2xl shadow-xl border-2 border-primary p-4 z-30">
                <div className="text-[10px] font-semibold text-text-secondary mb-2">Langkah 1 dari 12</div>
                <div className="text-sm font-bold text-text mb-3">Jenis kelamin Anda?</div>
                <div className="flex gap-2">
                  <div className="flex-1 flex flex-col items-center p-2 border-2 border-primary bg-primary-light rounded-lg">
                    <span className="text-xl mb-1">👨</span>
                    <span className="text-[10px] font-semibold text-primary">Pria</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center p-2 border-2 border-border bg-white rounded-lg">
                    <span className="text-xl mb-1">👩</span>
                    <span className="text-[10px] font-medium text-text">Wanita</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#0C5E75] hover:-translate-y-px hover:shadow-md transition-all duration-150"
              >
                Mulai Penilaian Sekarang
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="mt-3 text-sm text-text-secondary">
                Dipercaya oleh 2.500+ orang Indonesia • Gratis, tanpa komitmen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Pilihan Pengobatan Kami</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Semua produk resmi BPOM RI dengan konsultasi dokter berlisensi IDI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment) => (
              <Link
                key={treatment.name}
                href={treatment.href}
                className={`card hover:shadow-card-hover transition-all duration-200 group flex flex-col ${
                  !treatment.available ? "opacity-80" : ""
                }`}
              >
                {/* Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`badge ${treatment.badgeStyle} text-xs`}>
                    {treatment.badge}
                  </span>
                  {treatment.available && (
                    <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>

                {/* Drug name */}
                <h3 className="text-lg font-bold text-text mb-1">{treatment.name}</h3>
                <p className="text-xs text-text-secondary mb-3">{treatment.generic}</p>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                  {treatment.description}
                </p>

                {/* Price */}
                <div className="mt-auto pt-4 border-t border-border">
                  <p className={`text-sm font-semibold ${treatment.available ? "text-primary" : "text-text-secondary"}`}>
                    {treatment.price}
                  </p>
                  {treatment.bpomNo && (
                    <p className="text-xs text-text-secondary mt-1">BPOM: {treatment.bpomNo}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Teal banner after treatment cards */}
          <div className="mt-10 rounded-2xl bg-primary px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-base md:text-lg">
                Tidak yakin pengobatan mana yang cocok?
              </p>
              <p className="text-primary-light text-sm mt-0.5">
                Cek kesesuaian Anda dalam 2 menit — gratis, tanpa komitmen
              </p>
            </div>
            <Link
              href="/quiz"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-light transition-colors whitespace-nowrap"
            >
              Cek Kesesuaian Anda →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Mengapa Memilih Nadi Health?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Layanan telehealth premium dengan standar medis tertinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="flex flex-col items-start p-6 rounded-2xl bg-gray-50 hover:bg-primary-light/30 transition-colors duration-200">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-5">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-bold text-text mb-3">{prop.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* How it Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Cara Kerja Layanan Kami</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Dari pendaftaran hingga obat di tangan Anda — mudah dan cepat
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-light via-primary to-primary-light" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {howItWorks.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-btn">
                    <span className="text-4xl">{step.icon}</span>
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#0C5E75] hover:-translate-y-px hover:shadow-md transition-all duration-150"
            >
              Mulai Kuesioner Kesehatan →
            </Link>
            <p className="mt-3 text-sm text-text-secondary">Gratis • 2 menit • Tanpa komitmen</p>
          </div>
        </div>
      </section>

      {/* Doctor Credibility */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge-teal mb-4 mx-auto w-fit">Tim Medis</div>
            <h2 className="section-title mb-4">Ditangani oleh Dokter Spesialis</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Tim medis Nadi Health terdiri dari dokter spesialis berpengalaman yang berdedikasi pada kesehatan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doctor, i) => (
              <div key={i} className="card flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-4 text-3xl">
                  👨‍⚕️
                </div>
                <h3 className="font-bold text-text mb-1">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{doctor.specialty}</p>
                <p className="text-xs text-text-secondary mb-3">{doctor.credentials}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{doctor.description}</p>
              </div>
            ))}
          </div>

          {/* IDI Badge */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-4 bg-white border border-border rounded-xl px-6 py-4 shadow-card">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-xl">
                🏥
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Semua Dokter Berlisensi IDI</p>
                <p className="text-xs text-text-secondary">Terdaftar di Konsil Kedokteran Indonesia (KKI)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Cerita Pasien Kami</h2>
            <p className="section-subtitle">Hasil nyata dari pasien yang telah merasakan manfaatnya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Metric highlight */}
                <div className="bg-primary-light rounded-lg px-4 py-2 mb-4">
                  <p className="text-primary font-bold text-sm">{t.metric}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-text-secondary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Previews */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="section-title mb-2">Artikel Kesehatan Terbaru</h2>
              <p className="section-subtitle">Edukasi berbasis bukti dari tim medis kami</p>
            </div>
            <Link href="/artikel" className="hidden md:inline-flex btn-ghost text-sm">
              Lihat Semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:shadow-card-hover transition-all duration-200 group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-teal text-xs">{article.category}</span>
                  <span className="text-xs text-text-secondary">{article.readTime}</span>
                </div>
                <h3 className="font-bold text-text text-sm leading-snug group-hover:text-primary transition-colors mb-3 flex-1">
                  {article.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary text-xs font-semibold">
                  Baca di nadihealth.org
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/artikel" className="btn-secondary">
              Lihat Semua Artikel →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Temukan jawaban atas pertanyaan umum seputar layanan kami
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={homeFaqs} />
            <div className="mt-8 text-center">
              <Link href="/faq" className="btn-secondary">
                Lihat FAQ Lengkap →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BOTTOM QUIZ CTA — replaces newsletter section
      ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Belum Yakin? Cek Kesesuaian Anda
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mulai Perjalanan Sehat Anda Hari Ini
            </h2>
            <p className="text-primary-light text-lg mb-8">
              Jawab 12 pertanyaan singkat dan dapatkan rekomendasi personal dari dokter spesialis kami.
            </p>

            {/* Big quiz CTA card */}
            <Link
              href="/quiz"
              className="group block max-w-md mx-auto mb-5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white px-6 py-5 flex items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-lg font-bold text-text mb-1">
                    Cek Kesesuaian Anda — Gratis
                  </div>
                  <div className="text-text-secondary text-sm">
                    Penilaian 2 menit • Ditinjau dokter • Privat
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-[#0C5E75] transition-colors">
                  <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <p className="text-primary-light text-xs">
              Dipercaya oleh 2.500+ orang Indonesia • Tidak ada spam. Tanpa komitmen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
