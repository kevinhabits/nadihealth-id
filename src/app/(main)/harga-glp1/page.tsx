import type { Metadata } from "next";
import TrustMarquee from "@/components/TrustMarquee";
import HargaGlp1Content from "./HargaGlp1Content";

export const metadata: Metadata = {
  title: "Harga Obat GLP-1 di Indonesia 2026 — Perbandingan Ozempic, Wegovy, Victoza, Trulicity",
  description:
    "Database harga obat GLP-1 terlengkap di Indonesia. Bandingkan harga Ozempic, Wegovy, Victoza, dan Trulicity di Halodoc, K24Klik, Alodokter, dan Farmaku. Terakhir diperbarui April 2026.",
  keywords: [
    "harga ozempic indonesia",
    "harga wegovy indonesia",
    "harga glp-1 indonesia",
    "harga semaglutide",
    "harga trulicity",
    "harga victoza",
    "perbandingan harga obat diabetes",
    "apotek online glp-1",
  ],
  openGraph: {
    title: "Harga Obat GLP-1 di Indonesia 2026 | Nadi Health",
    description:
      "Bandingkan harga Ozempic, Wegovy, Victoza & Trulicity di apotek online Indonesia. Data terverifikasi April 2026.",
    url: "https://nadihealth.id/harga-glp1",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Database Harga Obat GLP-1 Indonesia 2026",
  description:
    "Perbandingan harga obat GLP-1 (Ozempic, Wegovy, Victoza, Trulicity) dari apotek online resmi di Indonesia.",
  inLanguage: "id",
  creator: { "@type": "Organization", name: "NadiHealth.id", url: "https://nadihealth.id" },
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  url: "https://nadihealth.id/harga-glp1",
  license: "https://creativecommons.org/licenses/by-nc/4.0/",
};

export default function HargaGlp1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrustMarquee />
      <HargaGlp1Content />
    </>
  );
}
