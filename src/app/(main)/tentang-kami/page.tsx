import type { Metadata } from "next";
import Link from "next/link";
import TrustMarquee from "@/components/TrustMarquee";

export const metadata: Metadata = {
  title: "Tentang Nadi Health — Misi, Tim Medis & Standar Editorial",
  description:
    "Nadi Health adalah platform telehealth terpercaya untuk GLP-1 dan penurunan berat badan di Indonesia. Pelajari misi, tim dokter, dan standar medis kami.",
};

const medicalAdvisors = [
  {
    name: "Prof. Dr. dr. Ahmad Fauzi, SpPD-KEMD",
    title: "Ketua Dewan Medis",
    affiliation: "Universitas Indonesia · RSUPN Cipto Mangunkusumo",
    specialty: "Endokrinologi & Diabetes",
    bio: "Pakar endokrinologi dengan 20+ tahun pengalaman dan 50+ publikasi ilmiah. Kontributor pedoman diabetes nasional PERKENI.",
  },
  {
    name: "Dr. dr. Sari Dewi Nugrahaeni, SpGK",
    title: "Konsultan Gizi Klinik",
    affiliation: "Universitas Padjadjaran · RS Hasan Sadikin",
    specialty: "Gizi Klinik & Manajemen Obesitas",
    bio: "Spesialis nutrisi dan manajemen berat badan dengan fokus pada pendekatan berbasis bukti untuk pasien obesitas.",
  },
  {
    name: "Dr. Budi Santoso, SpPD, MARS",
    title: "Konsultan Telehealth & Kebijakan",
    affiliation: "Kemenkes RI · Universitas Gadjah Mada",
    specialty: "Penyakit Dalam & Manajemen Layanan Kesehatan",
    bio: "Berpengalaman dalam regulasi telemedicine Indonesia dan pengembangan kebijakan kesehatan digital.",
  },
  {
    name: "dr. Ratna Kusuma Dewi, SpPD",
    title: "Dokter Konsultan Klinis",
    affiliation: "Universitas Airlangga · RSUD Dr. Soetomo",
    specialty: "Penyakit Dalam & GLP-1",
    bio: "Spesialis penyakit dalam dengan pengalaman luas dalam penanganan diabetes dan obesitas menggunakan terapi modern.",
  },
];

const editorialStandards = [
  {
    title: "Berbasis Bukti Ilmiah",
    desc: "Setiap klaim medis didukung oleh penelitian peer-reviewed dari jurnal bereputasi tinggi (NEJM, Lancet, JAMA, dll).",
    icon: "📚",
  },
  {
    title: "Ditinjau oleh Dokter",
    desc: "Semua konten medis ditinjau oleh dokter berlisensi sebelum dipublikasikan. Tidak ada klaim yang melebihi bukti ilmiah.",
    icon: "👨‍⚕️",
  },
  {
    title: "Diperbarui Secara Berkala",
    desc: "Informasi medis selalu diperbarui sesuai pedoman terbaru dari WHO, ADA, PERKENI, dan regulator BPOM.",
    icon: "🔄",
  },
  {
    title: "Transparansi",
    desc: "Kami mengungkapkan afiliasi, sumber referensi, dan batas kemampuan diagnosis. Kami bukan pengganti dokter tatap muka.",
    icon: "🔍",
  },
];

const companyValues = [
  {
    title: "Akses Setara",
    desc: "Kami percaya bahwa pengobatan modern berbasis bukti harus dapat diakses oleh semua orang Indonesia, bukan hanya yang tinggal di kota besar.",
    icon: "🌏",
  },
  {
    title: "Kepercayaan Medis",
    desc: "Setiap keputusan yang kami buat mengutamakan keselamatan dan kesehatan pasien di atas kepentingan komersial.",
    icon: "🏥",
  },
  {
    title: "Privasi Pertama",
    desc: "Isu berat badan dan diabetes adalah hal yang sangat personal. Kami menjaga privasi Anda dengan standar keamanan data tertinggi.",
    icon: "🔒",
  },
  {
    title: "Inovasi Bertanggung Jawab",
    desc: "Kami mengadopsi kemajuan medis terbaru sambil tetap mematuhi regulasi BPOM dan Kemenkes RI.",
    icon: "💡",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <TrustMarquee />

      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge-teal mb-6 block w-fit">Tentang Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
              Misi Kami: Menghadirkan<br />
              <span className="text-primary">Pengobatan Modern</span><br />
              untuk Semua Indonesia
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Nadi Health lahir dari keyakinan bahwa akses ke pengobatan GLP-1 berbasis bukti tidak seharusnya dibatasi oleh geografi, waktu, atau birokrasi medis yang rumit.
            </p>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-white/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
              &ldquo;Kami ingin setiap orang Indonesia yang berjuang dengan berat badan atau diabetes mendapatkan akses ke pengobatan berbasis bukti yang aman, legal, dan terjangkau — dari kenyamanan rumah mereka sendiri.&rdquo;
            </blockquote>
            <p className="text-primary-100 font-medium">— Pendiri Nadi Health</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Nilai-Nilai Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value) => (
              <div key={value.title} className="card flex flex-col items-start">
                <span className="text-4xl mb-4">{value.icon}</span>
                <h3 className="font-bold text-text text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Advisory Board */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge-teal mb-4 mx-auto w-fit block">Dewan Medis</span>
            <h2 className="section-title mb-4">Dewan Penasihat Medis</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Nadi Health didukung oleh dokter spesialis dan akademisi medis terkemuka di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {medicalAdvisors.map((advisor) => (
              <div key={advisor.name} className="card flex gap-5">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="font-bold text-text mb-0.5">{advisor.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-0.5">{advisor.title}</p>
                  <p className="text-xs text-text-secondary mb-1">{advisor.affiliation}</p>
                  <span className="badge-teal text-xs mb-3 inline-block">{advisor.specialty}</span>
                  <p className="text-sm text-text-secondary leading-relaxed">{advisor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Standar Editorial & Medis</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Komitmen kami terhadap akurasi, transparansi, dan tanggung jawab medis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorialStandards.map((std) => (
              <div key={std.title} className="flex flex-col items-start p-6 bg-gray-50 rounded-2xl">
                <span className="text-3xl mb-4">{std.icon}</span>
                <h3 className="font-bold text-text mb-3">{std.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>

          {/* Science badge */}
          <div className="mt-12 bg-primary-light rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-text mb-4">
              Didukung oleh Bukti Ilmiah
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              Semua informasi di Nadi Health mengacu pada penelitian dari New England Journal of Medicine, The Lancet, JAMA, dan pedoman klinis PERKENI, ADA, serta WHO. Kami tidak membuat klaim yang melampaui data ilmiah yang ada.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["NEJM", "The Lancet", "JAMA", "PERKENI", "ADA", "WHO"].map((source) => (
                <span key={source} className="px-4 py-2 bg-white rounded-full border border-border text-sm font-semibold text-text-secondary">
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner with us / nadihealth.org */}
      <section className="py-12 bg-gray-50 border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-text mb-2">
                Baca 75+ Artikel Edukasi di nadihealth.org
              </h3>
              <p className="text-text-secondary text-sm">
                Konten edukasi mendalam tentang GLP-1, diabetes, obesitas, dan kesehatan metabolik dalam Bahasa Indonesia.
              </p>
            </div>
            <a
              href="https://nadihealth.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary whitespace-nowrap"
            >
              Kunjungi nadihealth.org ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siap Memulai?</h2>
          <p className="text-primary-100 mb-8">
            Konsultasikan kondisi kesehatan Anda dengan tim dokter Nadi Health hari ini.
          </p>
          <Link href="/quiz" className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-colors inline-block">
            Mulai Konsultasi Gratis →
          </Link>
        </div>
      </section>
    </>
  );
}
