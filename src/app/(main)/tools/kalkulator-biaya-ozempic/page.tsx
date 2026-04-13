import type { Metadata } from "next";
import CostCalculatorClient from "./CostCalculatorClient";

export const metadata: Metadata = {
  title: "Kalkulator Biaya Ozempic — Estimasi Harga per Kg Turun di Indonesia",
  description:
    "Hitung estimasi biaya Ozempic di Indonesia berdasarkan target penurunan berat badan Anda. Bandingkan biaya per kg dengan metode lain. Harga terkini Nadi Health.",
  keywords: [
    "harga ozempic indonesia",
    "biaya ozempic",
    "kalkulator biaya ozempic",
    "ozempic murah",
    "semaglutide harga",
    "biaya penurunan berat badan",
    "ozempic per bulan",
  ],
  openGraph: {
    title: "Kalkulator Biaya Ozempic Indonesia | Nadi Health",
    description:
      "Berapa biaya Ozempic untuk turun berat badan? Hitung estimasi biaya personal Anda dan bandingkan dengan metode lain.",
    url: "https://nadihealth.id/tools/kalkulator-biaya-ozempic",
  },
};

const calculatorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kalkulator Biaya Ozempic Indonesia",
  description:
    "Kalkulator estimasi biaya terapi Ozempic (semaglutide) berdasarkan target penurunan berat badan individual.",
  url: "https://nadihealth.id/tools/kalkulator-biaya-ozempic",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  publisher: {
    "@type": "MedicalBusiness",
    name: "Nadi Health",
    url: "https://nadihealth.id",
  },
};

export default function CostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="badge-teal mb-4 inline-block">Kalkulator Gratis</span>
            <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight mb-4">
              Berapa Biaya Ozempic untuk{" "}
              <span className="text-primary">Target Anda?</span>
            </h1>
            <p className="section-subtitle">
              Hitung estimasi biaya terapi Ozempic berdasarkan target penurunan berat badan Anda.
              Bandingkan biaya per kg turun dengan metode lain.
            </p>
          </div>

          <CostCalculatorClient />
        </div>
      </section>
    </>
  );
}
