import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alat Kesehatan Interaktif — Skrining BMI, Kalkulator Biaya, Jadwal Dosis",
  description:
    "Gunakan alat kesehatan gratis dari Nadi Health: skrining BMI & kesesuaian GLP-1, kalkulator biaya Ozempic, dan visualisasi jadwal dosis 16 minggu.",
  keywords: [
    "alat kesehatan online",
    "kalkulator bmi indonesia",
    "kalkulator biaya ozempic",
    "jadwal dosis ozempic",
    "skrining glp-1",
    "tools kesehatan gratis",
  ],
  openGraph: {
    title: "Alat Kesehatan Interaktif Gratis | Nadi Health",
    description:
      "Skrining BMI, kalkulator biaya Ozempic, dan jadwal dosis — semua gratis dan tanpa pendaftaran.",
    url: "https://nadihealth.id/tools",
  },
};

const tools = [
  {
    title: "Skrining BMI & Kesesuaian GLP-1",
    subtitle: "Apakah Anda kandidat Ozempic?",
    description:
      "Hitung BMI Anda dengan standar Asia-Pasifik dan cek kesesuaian terapi GLP-1. Hasil instan dalam 2 menit.",
    href: "/tools/skrining-bmi-glp1",
    badge: "Paling Populer",
    badgeColor: "badge-green",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    features: ["BMI standar Asia-Pasifik", "Skrining medis awal", "Rekomendasi personal"],
  },
  {
    title: "Kalkulator Biaya Ozempic",
    subtitle: "Berapa biaya untuk target Anda?",
    description:
      "Hitung estimasi biaya terapi Ozempic berdasarkan target penurunan BB. Bandingkan biaya per kg turun dengan metode lain.",
    href: "/tools/kalkulator-biaya-ozempic",
    badge: "Baru",
    badgeColor: "badge-teal",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ["Harga terkini Indonesia", "Perbandingan metode", "Rincian per fase"],
  },
  {
    title: "Jadwal Dosis Ozempic 16 Minggu",
    subtitle: "Visualisasi perjalanan titrasi Anda",
    description:
      "Lihat jadwal titrasi minggu demi minggu dari 0,25mg hingga 1mg. Lengkap dengan efek, tips, dan proyeksi penurunan BB.",
    href: "/tools/jadwal-dosis-ozempic",
    badge: "Interaktif",
    badgeColor: "badge-orange",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    features: ["16 minggu detail", "Efek samping per fase", "Proyeksi BB personal"],
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-teal mb-4 inline-block">100% Gratis</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
              Alat Kesehatan{" "}
              <span className="text-primary">Interaktif</span>
            </h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Gunakan alat gratis kami untuk memahami kesesuaian GLP-1, estimasi biaya, dan jadwal pengobatan Anda.
              Tanpa pendaftaran, hasil instan.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="bg-white rounded-2xl border border-border shadow-card p-6 hover:shadow-card-hover transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {tool.icon}
                  </div>
                  <span className={`${tool.badgeColor} text-2xs`}>{tool.badge}</span>
                </div>

                <h2 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-1">
                  {tool.title}
                </h2>
                <p className="text-sm font-medium text-primary mb-2">{tool.subtitle}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {tool.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {tool.features.map((f) => (
                    <li key={f} className="text-xs text-text-secondary flex items-center gap-2">
                      <span className="text-green-600">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="btn-primary text-center text-sm mt-auto">
                  Gunakan Alat →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title mb-4">Mengapa Menggunakan Alat Kami?</h2>
            <p className="section-subtitle">
              Alat kami dirancang oleh tim medis Nadi Health dengan standar klinis terkini.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🔬", title: "Berbasis Bukti", desc: "Data dari uji klinis STEP trials (NEJM, Lancet)" },
              { icon: "🇮🇩", title: "Standar Indonesia", desc: "BMI Asia-Pasifik & harga farmasi Indonesia" },
              { icon: "🔒", title: "Privasi Terjamin", desc: "Data tidak disimpan di server — semua dihitung di browser Anda" },
              { icon: "👨‍⚕️", title: "Ditinjau Dokter", desc: "Konten ditinjau oleh dokter spesialis Nadi Health" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-text text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap untuk Langkah Selanjutnya?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Setelah menggunakan alat kami, konsultasikan hasilnya dengan dokter spesialis Nadi Health.
          </p>
          <Link
            href="/quiz"
            className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-colors inline-block"
          >
            Konsultasi Sekarang →
          </Link>
        </div>
      </section>
    </>
  );
}
