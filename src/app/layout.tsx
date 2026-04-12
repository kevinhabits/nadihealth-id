import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nadihealth.id"),
  title: {
    default: "Nadi Health — Solusi GLP-1 & Penurunan Berat Badan Terpercaya di Indonesia",
    template: "%s | Nadi Health",
  },
  description:
    "Konsultasi dokter online untuk Ozempic, semaglutide, dan GLP-1 di Indonesia. BPOM resmi, dokter berlisensi IDI, privasi terjamin. Mulai perjalanan sehat Anda hari ini.",
  keywords: [
    "ozempic indonesia",
    "semaglutide indonesia",
    "glp-1 indonesia",
    "turun berat badan",
    "diabetes treatment",
    "telehealth indonesia",
    "konsultasi dokter online",
    "wegovy indonesia",
    "liraglutide victoza",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nadihealth.id",
    siteName: "Nadi Health",
    title: "Nadi Health — Solusi GLP-1 & Penurunan Berat Badan Terpercaya di Indonesia",
    description:
      "Konsultasi dokter online untuk Ozempic, semaglutide, dan GLP-1 di Indonesia. BPOM resmi, dokter berlisensi IDI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nadi Health — Solusi GLP-1 Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadi Health — Solusi GLP-1 & Penurunan Berat Badan Terpercaya di Indonesia",
    description:
      "Konsultasi dokter online untuk Ozempic, semaglutide, dan GLP-1 di Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-token-here",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Nadi Health",
  url: "https://nadihealth.id",
  logo: "https://nadihealth.id/logo.png",
  description:
    "Platform telehealth terpercaya untuk konsultasi GLP-1, Ozempic, dan penurunan berat badan di Indonesia.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressRegion: "DKI Jakarta",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Indonesian",
  },
  medicalSpecialty: [
    "Endocrinology",
    "Internal Medicine",
    "Obesity Medicine",
  ],
  sameAs: [
    "https://nadihealth.org",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="has-sticky-cta">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCtaBar />
      </body>
    </html>
  );
}
