import type { Metadata } from "next";
import TrustMarquee from "@/components/TrustMarquee";
import PeptidaContent from "./PeptidaContent";

export const metadata: Metadata = {
  title: "Panduan Lengkap Peptida 2026 — Database Komprehensif untuk Kesehatan, Kecantikan & Wellness",
  description:
    "Database peptida terlengkap di Indonesia. 40+ peptida untuk kecantikan, penurunan berat badan, pemulihan, anti-aging, dan kesehatan. Berbasis riset ilmiah, status regulasi BPOM, dan panduan halal.",
  keywords: [
    "peptida indonesia",
    "kolagen peptida",
    "semaglutide indonesia",
    "BPC-157",
    "skincare peptida",
    "suplemen kolagen halal",
    "GHK-Cu",
    "anti aging peptida",
    "terapi peptida indonesia",
    "BPOM peptida",
    "glutathione indonesia",
    "panduan peptida",
  ],
  openGraph: {
    title: "Panduan Lengkap Peptida 2026 — NadiHealth.id",
    description:
      "Database peptida terlengkap di Indonesia. 40+ peptida berbasis riset ilmiah dengan panduan halal dan regulasi BPOM.",
    url: "https://nadihealth.id/panduan-peptida",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Panduan Lengkap Peptida 2026: Database Komprehensif untuk Kesehatan, Kecantikan & Wellness di Indonesia",
  description:
    "Database peptida terlengkap di Indonesia dengan 40+ peptida, riset ilmiah, status regulasi BPOM, dan panduan halal.",
  inLanguage: "id",
  author: { "@type": "Organization", name: "NadiHealth.id" },
  publisher: {
    "@type": "Organization",
    name: "NadiHealth.id",
    url: "https://nadihealth.id",
  },
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  url: "https://nadihealth.id/panduan-peptida",
};

export default function PanduanPeptidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrustMarquee />
      <PeptidaContent />
    </>
  );
}
