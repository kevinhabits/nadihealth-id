import type { Metadata } from "next";
import Link from "next/link";
import TrustMarquee from "@/components/TrustMarquee";
import FaqAccordion from "@/components/FaqAccordion";
import { faqGroups } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan Umum tentang GLP-1 dan Layanan Nadi Health",
  description:
    "Jawaban lengkap atas 30+ pertanyaan tentang GLP-1, Ozempic, harga, efek samping, status halal, BPJS, dan cara kerja layanan Nadi Health.",
  keywords: ["faq ozempic indonesia", "glp-1 pertanyaan", "ozempic efek samping", "ozempic halal"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <TrustMarquee />

      {/* Hero */}
      <section className="bg-white py-12 md:py-16 border-b border-border">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="badge-teal mb-4 block w-fit">Pusat Bantuan</span>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h1>
            <p className="text-text-secondary leading-relaxed">
              Temukan jawaban komprehensif atas pertanyaan seputar GLP-1, Ozempic, harga, efek samping, status halal, dan cara kerja layanan Nadi Health.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-gray-50 border-b border-border py-4">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {faqGroups.map((group) => (
              <a
                key={group.title}
                href={`#${group.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-border text-sm text-text-secondary hover:text-primary hover:border-primary transition-colors"
              >
                <span>{group.icon}</span>
                <span>{group.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqGroups.map((group) => (
              <div
                key={group.title}
                id={group.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <span className="text-2xl">{group.icon}</span>
                  <h2 className="text-xl font-bold text-text">{group.title}</h2>
                  <span className="ml-auto text-xs text-text-secondary">
                    {group.items.length} pertanyaan
                  </span>
                </div>
                <FaqAccordion items={group.items} />
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-primary-light rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-text mb-3">
                Masih Ada Pertanyaan?
              </h3>
              <p className="text-text-secondary mb-6 text-sm">
                Tim dokter kami siap menjawab pertanyaan spesifik tentang kondisi Anda. Konsultasi gratis tersedia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/quiz" className="btn-primary">
                  Konsultasi dengan Dokter →
                </Link>
                <a
                  href="https://wa.me/628123456789?text=Halo%20Nadi%20Health%2C%20saya%20punya%20pertanyaan%20tentang%20GLP-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
