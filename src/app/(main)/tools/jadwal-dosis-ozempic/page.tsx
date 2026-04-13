import type { Metadata } from "next";
import TimelineClient from "./TimelineClient";

export const metadata: Metadata = {
  title: "Jadwal Dosis Ozempic Minggu 1-16 — Visualisasi Titrasi Lengkap",
  description:
    "Lihat jadwal titrasi dosis Ozempic minggu demi minggu (0,25mg → 0,5mg → 1mg). Lengkap dengan efek yang diharapkan, tips, efek samping, dan proyeksi penurunan BB.",
  keywords: [
    "jadwal dosis ozempic",
    "titrasi ozempic",
    "ozempic minggu pertama",
    "dosis ozempic berapa",
    "cara pakai ozempic",
    "efek samping ozempic per minggu",
    "ozempic timeline",
  ],
  openGraph: {
    title: "Jadwal Dosis Ozempic 16 Minggu — Visualisasi Titrasi | Nadi Health",
    description:
      "Jadwal titrasi dosis Ozempic minggu demi minggu. Lihat efek, tips, dan proyeksi penurunan berat badan Anda.",
    url: "https://nadihealth.id/tools/jadwal-dosis-ozempic",
  },
};

const timelineJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Jadwal Dosis Ozempic — Visualisasi Titrasi 16 Minggu",
  description:
    "Panduan visual jadwal titrasi dosis Ozempic (semaglutide) dari minggu 1 hingga 16, lengkap dengan efek samping dan proyeksi penurunan berat badan.",
  url: "https://nadihealth.id/tools/jadwal-dosis-ozempic",
  about: {
    "@type": "Drug",
    name: "Ozempic",
    activeIngredient: "Semaglutide",
    manufacturer: {
      "@type": "Organization",
      name: "Novo Nordisk",
    },
  },
  audience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
    geographicArea: {
      "@type": "Country",
      name: "Indonesia",
    },
  },
  publisher: {
    "@type": "MedicalBusiness",
    name: "Nadi Health",
    url: "https://nadihealth.id",
  },
};

export default function TimelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(timelineJsonLd) }}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="badge-teal mb-4 inline-block">Alat Interaktif Gratis</span>
            <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight mb-4">
              Jadwal Dosis Ozempic{" "}
              <span className="text-primary">Minggu 1–16</span>
            </h1>
            <p className="section-subtitle">
              Visualisasi lengkap perjalanan titrasi Ozempic dari 0,25mg hingga 1mg.
              Lihat apa yang diharapkan setiap minggu, tips praktis, dan proyeksi penurunan berat badan.
            </p>
          </div>

          <TimelineClient />
        </div>
      </section>
    </>
  );
}
