"use client";

import { useState } from "react";
import TrustMarquee from "@/components/TrustMarquee";
import { articles, categories } from "@/data/articles";
import Link from "next/link";

export default function ArtikelClient() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <TrustMarquee />

      {/* Hero */}
      <section className="bg-white py-12 md:py-16 border-b border-border">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="badge-teal mb-4 block w-fit">Edukasi Kesehatan</span>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Artikel Kesehatan Nadi Health
            </h1>
            <p className="text-text-secondary leading-relaxed">
              Edukasi mendalam berbasis bukti ilmiah tentang GLP-1, Ozempic, diabetes, dan penurunan berat badan. Ditulis oleh tim dokter dalam Bahasa Indonesia.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://nadihealth.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Baca Semua di nadihealth.org ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-border py-4 shadow-sm">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-text-secondary hover:bg-primary-light hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <p className="text-sm text-text-secondary mb-6">
            Menampilkan {filtered.length} artikel{activeCategory !== "Semua" ? ` dalam kategori "${activeCategory}"` : ""}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:shadow-card-hover transition-all duration-200 group flex flex-col bg-white"
              >
                {/* Category + Read time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-teal text-xs">{article.category}</span>
                  <span className="text-xs text-text-secondary">{article.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="font-bold text-text leading-snug group-hover:text-primary transition-colors mb-3 flex-1 text-base">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-xs text-text-secondary">
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Baca artikel
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Link to nadihealth.org */}
          <div className="mt-12 text-center bg-white rounded-2xl border border-border p-8 shadow-card">
            <h3 className="text-xl font-bold text-text mb-3">
              Temukan 75+ Artikel Lainnya di nadihealth.org
            </h3>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto text-sm">
              Blog Nadi Health memuat panduan mendalam, ulasan riset terbaru, dan informasi terkini tentang GLP-1 dan kesehatan metabolik di Indonesia.
            </p>
            <a
              href="https://nadihealth.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Kunjungi nadihealth.org ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Siap untuk Konsultasi Personal?
          </h2>
          <p className="text-primary-100 mb-6">
            Artikel adalah permulaan — konsultasi dokter memberikan panduan yang dipersonalisasi untuk kondisi Anda.
          </p>
          <Link href="/quiz" className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-primary-light transition-colors inline-block">
            Mulai Konsultasi →
          </Link>
        </div>
      </section>
    </>
  );
}
