import type { Metadata } from "next";
import ScreenerClient from "./ScreenerClient";

export const metadata: Metadata = {
  title: "Skrining BMI & Kesesuaian GLP-1 — Apakah Anda Kandidat Ozempic?",
  description:
    "Cek BMI Anda dengan standar Asia-Pasifik dan ketahui apakah Anda kandidat terapi GLP-1 (Ozempic/semaglutide). Skrining gratis 2 menit, hasil instan.",
  keywords: [
    "kalkulator bmi indonesia",
    "bmi asia",
    "skrining glp-1",
    "kandidat ozempic",
    "cek bmi online",
    "bmi ideal indonesia",
    "semaglutide kesesuaian",
  ],
  openGraph: {
    title: "Skrining BMI & GLP-1 — Apakah Anda Kandidat Ozempic? | Nadi Health",
    description:
      "Hitung BMI standar Asia-Pasifik dan cek kesesuaian GLP-1 Anda. Gratis, 2 menit, hasil instan.",
    url: "https://nadihealth.id/tools/skrining-bmi-glp1",
  },
};

const screenerJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Skrining BMI & Kesesuaian GLP-1",
  description:
    "Kalkulator BMI standar Asia-Pasifik dengan skrining kesesuaian terapi GLP-1 receptor agonist.",
  url: "https://nadihealth.id/tools/skrining-bmi-glp1",
  mainEntity: {
    "@type": "MedicalTest",
    name: "Skrining Kesesuaian GLP-1",
    usedToDiagnose: {
      "@type": "MedicalCondition",
      name: "Obesitas",
    },
  },
  about: {
    "@type": "MedicalCondition",
    name: "Obesity",
    alternateName: "Obesitas",
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

export default function ScreenerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(screenerJsonLd) }}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="badge-teal mb-4 inline-block">Alat Skrining Gratis</span>
            <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight mb-4">
              Apakah Anda Kandidat{" "}
              <span className="text-primary">Terapi GLP-1?</span>
            </h1>
            <p className="section-subtitle">
              Hitung BMI Anda dengan standar Asia-Pasifik dan cek kesesuaian GLP-1
              (Ozempic/semaglutide) dalam 2 menit. Gratis, tanpa pendaftaran.
            </p>
          </div>

          <ScreenerClient />
        </div>
      </section>
    </>
  );
}
