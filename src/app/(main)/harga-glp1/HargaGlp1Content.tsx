"use client";

import Link from "next/link";
import { useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import {
  pricingData,
  wegovyTitrationSchedule,
  globalComparison,
  platformSummary,
  formatRupiah,
  DISCLAIMER_ID,
  LAST_UPDATED,
  EXCHANGE_RATE_IDR_USD,
} from "@/data/glp1-pricing-data";

const hargaFaqs = [
  {
    question: "Apakah harga yang tercantum sudah termasuk resep dokter?",
    answer:
      "Harga yang tercantum adalah harga obat di apotek online masing-masing. Biaya konsultasi dokter dan resep biasanya terpisah kecuali untuk program Halofit yang sudah termasuk semua biaya.",
  },
  {
    question: "Mengapa harga berbeda antar platform?",
    answer:
      "Setiap platform apotek online memiliki perjanjian distribusi dan margin yang berbeda. Halodoc cenderung paling lengkap, sementara platform lain mungkin hanya menyediakan beberapa produk. Kami sarankan membandingkan harga dan ketersediaan sebelum membeli.",
  },
  {
    question: "Apakah saya bisa membeli GLP-1 tanpa resep?",
    answer:
      "Tidak. Semua obat GLP-1 adalah obat resep (obat keras) yang WAJIB diresepkan oleh dokter berlisensi. Platform apotek online yang terpercaya akan memerlukan verifikasi resep sebelum menjual obat ini.",
  },
  {
    question: "Seberapa sering harga diperbarui?",
    answer:
      "Kami memverifikasi harga secara berkala (minimal sebulan sekali). Harga terakhir diverifikasi pada " + LAST_UPDATED + ". Harga dapat berubah sewaktu-waktu tanpa pemberitahuan dari platform apotek.",
  },
  {
    question: "Mengapa harga GLP-1 di Indonesia lebih murah dibanding negara lain?",
    answer:
      "Indonesia mendapat keuntungan dari strategi harga Novo Nordisk untuk pasar berkembang, regulasi harga obat pemerintah, dan biaya distribusi yang lebih rendah. Ozempic di Indonesia sekitar 80% lebih murah dibanding di Amerika Serikat.",
  },
];

type SortKey = "drugBrand" | "dose" | "pharmacySource" | "priceRp" | "monthlyCostRp";

function statusBadge(status: string) {
  if (status === "tersedia") return <span className="badge badge-green text-xs">Tersedia</span>;
  if (status === "stok_habis") return <span className="badge badge-orange text-xs">Stok Habis</span>;
  return <span className="badge text-xs bg-gray-100 text-gray-600">Tidak Tersedia</span>;
}

export default function HargaGlp1Content() {
  const [sortKey, setSortKey] = useState<SortKey>("priceRp");
  const [sortAsc, setSortAsc] = useState(true);
  const [filterDrug, setFilterDrug] = useState<string>("all");

  const drugs = Array.from(new Set(pricingData.map((e) => e.drugBrand)));

  const filtered = pricingData
    .filter((e) => filterDrug === "all" || e.drugBrand === filterDrug)
    .sort((a, b) => {
      const valA = a[sortKey] ?? 0;
      const valB = b[sortKey] ?? 0;
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  const sortIcon = (key: SortKey) =>
    sortKey === key ? (sortAsc ? " ↑" : " ↓") : "";

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="badge badge-teal">Database Harga</span>
              <span className="text-sm text-text-secondary font-medium">
                Terakhir diperbarui: {LAST_UPDATED}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
              Harga Obat GLP-1{" "}
              <span className="text-primary">di Indonesia</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Bandingkan harga Ozempic, Wegovy, Victoza, dan Trulicity dari
              apotek online resmi. Data terverifikasi langsung dari Halodoc,
              K24Klik, Alodokter, dan Farmaku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quiz" className="btn-primary text-base px-8 py-4">
                Konsultasi Dokter Gratis →
              </Link>
              <Link href="/tools/kalkulator-biaya-ozempic" className="btn-secondary text-base px-8 py-4">
                Kalkulator Biaya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-red-50 border-y border-red-200 py-4">
        <div className="container-custom">
          <p className="text-xs text-red-700 leading-relaxed">
            <span className="font-bold">⚠️ PERINGATAN:</span> {DISCLAIMER_ID}
          </p>
        </div>
      </section>

      {/* ══════ DRUG COMPARISON TABLE ══════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">Perbandingan Harga Obat GLP-1</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Semua harga dalam Rupiah (IDR) dari apotek online resmi di Indonesia
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <button
              onClick={() => setFilterDrug("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterDrug === "all"
                  ? "bg-primary text-white"
                  : "bg-white border border-border text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              Semua Obat
            </button>
            {drugs.map((drug) => (
              <button
                key={drug}
                onClick={() => setFilterDrug(drug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterDrug === drug
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                {drug}
              </button>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-card border border-border overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  {([
                    ["drugBrand", "Obat"],
                    ["dose", "Dosis"],
                    ["pharmacySource", "Apotek"],
                    ["priceRp", "Harga"],
                    ["monthlyCostRp", "Biaya/Bulan"],
                  ] as [SortKey, string][]).map(([key, label]) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className="px-4 py-3 text-left text-sm font-semibold cursor-pointer hover:bg-primary-dark select-none transition-colors"
                    >
                      {label}{sortIcon(key)}
                    </th>
                  ))}
                  <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((entry, i) => (
                  <tr key={i} className={`hover:bg-gray-50 transition-colors ${entry.availabilityStatus !== "tersedia" ? "opacity-60" : ""}`}>
                    <td className="px-4 py-4">
                      <p className="font-bold text-text">{entry.drugBrand}</p>
                      <p className="text-xs text-text-secondary">{entry.activeIngredient}</p>
                    </td>
                    <td className="px-4 py-4 text-sm text-text-secondary">{entry.dose}</td>
                    <td className="px-4 py-4">
                      <a
                        href={entry.pharmacyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {entry.pharmacySource} ↗
                      </a>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-text">{formatRupiah(entry.priceRp)}</p>
                      <p className="text-xs text-text-secondary">{entry.priceUnit}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-primary">
                        {entry.monthlyCostRp ? formatRupiah(entry.monthlyCostRp) : "—"}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {entry.monthlyCostRp
                          ? `~$${Math.round(entry.monthlyCostRp / EXCHANGE_RATE_IDR_USD)} USD`
                          : ""}
                      </p>
                    </td>
                    <td className="px-4 py-4">{statusBadge(entry.availabilityStatus)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {filtered.map((entry, i) => (
              <div key={i} className={`card ${entry.availabilityStatus !== "tersedia" ? "opacity-70" : ""}`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-text">{entry.drugBrand}</h3>
                    <p className="text-xs text-text-secondary">{entry.activeIngredient} · {entry.dose}</p>
                  </div>
                  {statusBadge(entry.availabilityStatus)}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-text-secondary text-xs">Harga</p>
                    <p className="font-semibold text-text">{formatRupiah(entry.priceRp)}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs">Biaya/Bulan</p>
                    <p className="font-semibold text-primary">
                      {entry.monthlyCostRp ? formatRupiah(entry.monthlyCostRp) : "—"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-text-secondary text-xs">Apotek</p>
                    <a href={entry.pharmacyUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                      {entry.pharmacySource} ↗
                    </a>
                  </div>
                </div>
                {entry.notes && (
                  <p className="text-xs text-text-secondary mt-3 pt-3 border-t border-border">{entry.notes}</p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-text-secondary mt-6">
            Klik header kolom untuk mengurutkan. Harga dapat berubah sewaktu-waktu. Kurs: 1 USD = Rp{EXCHANGE_RATE_IDR_USD.toLocaleString("id-ID")}.
          </p>
        </div>
      </section>

      {/* ══════ WEGOVY TITRATION CALCULATOR ══════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="badge-teal mb-4 mx-auto w-fit block">Kalkulator Biaya</span>
              <h2 className="section-title mb-4">Biaya Titrasi Wegovy</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Jadwal titrasi resmi Wegovy dari 0.25mg hingga dosis pemeliharaan 2.4mg
              </p>
            </div>

            {/* Titration timeline */}
            <div className="space-y-4 mb-8">
              {wegovyTitrationSchedule.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 md:gap-6 bg-gray-50 rounded-xl p-4 md:p-5"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                    <span className="text-[10px] uppercase leading-none">Bulan</span>
                    <span className="text-lg font-bold leading-tight">{step.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-text">{step.dose}</p>
                    <p className="text-xs text-text-secondary">
                      {formatRupiah(step.pricePerPenRp)} / pen
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-primary">{formatRupiah(step.monthlyCostRp)}</p>
                    <p className="text-xs text-text-secondary">/bulan</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cost summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-light rounded-2xl p-6 text-center">
                <p className="text-sm text-text-secondary mb-2">Total 6 Bulan Pertama</p>
                <p className="text-3xl font-bold text-primary">Rp25.369.900</p>
                <p className="text-sm text-text-secondary mt-1">
                  ~${Math.round(25369900 / EXCHANGE_RATE_IDR_USD).toLocaleString()} USD
                </p>
                <p className="text-xs text-text-secondary mt-2">4 bulan titrasi + 2 bulan pemeliharaan</p>
              </div>
              <div className="bg-primary-light rounded-2xl p-6 text-center">
                <p className="text-sm text-text-secondary mb-2">Total 12 Bulan</p>
                <p className="text-3xl font-bold text-primary">Rp58.819.300</p>
                <p className="text-sm text-text-secondary mt-1">
                  ~${Math.round(58819300 / EXCHANGE_RATE_IDR_USD).toLocaleString()} USD
                </p>
                <p className="text-xs text-text-secondary mt-2">4 bulan titrasi + 8 bulan pemeliharaan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PLATFORM AVAILABILITY ══════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">Ketersediaan per Platform</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Obat GLP-1 mana yang tersedia di setiap apotek online Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformSummary.map((p) => (
              <div key={p.name} className="card flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-text">{p.name}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    Kunjungi ↗
                  </a>
                </div>

                {p.drugsAvailable.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-green-700 mb-1.5">Tersedia:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.drugsAvailable.map((d) => (
                        <span key={d} className="badge badge-green text-xs">{d}</span>
                      ))}
                    </div>
                  </div>
                )}

                {p.drugsNotFound.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-text-secondary mb-1.5">Tidak ditemukan:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.drugsNotFound.map((d) => (
                        <span key={d} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{d}</span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-text-secondary mt-auto pt-3 border-t border-border">
                  {p.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ GLOBAL PRICE COMPARISON ══════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="badge-teal mb-4 mx-auto w-fit block">Perbandingan Global</span>
            <h2 className="section-title mb-4">Harga GLP-1: Indonesia vs Dunia</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Indonesia memiliki salah satu harga GLP-1 terendah di dunia
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full bg-white rounded-2xl shadow-card border border-border overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  {["Negara", "Obat", "Harga (USD)", "Harga Lokal", "Catatan"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {globalComparison.map((row, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-gray-50 transition-colors ${
                      row.country === "Indonesia" ? "bg-primary-light/40 font-medium" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-sm text-text font-medium">{row.country}</td>
                    <td className="px-4 py-3 text-sm text-text-secondary">{row.drug}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-primary">
                      ${row.priceUsd.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-text-secondary">{row.priceLocal}</td>
                    <td className="px-4 py-3 text-xs text-text-secondary">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {globalComparison.map((row, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border ${
                  row.country === "Indonesia"
                    ? "bg-primary-light/40 border-primary/30"
                    : "bg-white border-border"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-text text-sm">{row.country}</p>
                  <p className="font-bold text-primary text-sm">${row.priceUsd.toLocaleString()}</p>
                </div>
                <p className="text-xs text-text-secondary">{row.drug}</p>
                {row.notes && <p className="text-xs text-text-secondary mt-1">{row.notes}</p>}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-text-secondary mt-6 max-w-2xl mx-auto">
            Harga bersifat perkiraan dan dapat bervariasi. Data dikumpulkan dari berbagai sumber publik.
            Kurs: 1 USD = Rp{EXCHANGE_RATE_IDR_USD.toLocaleString("id-ID")}.
          </p>
        </div>
      </section>

      {/* ══════ CROSS-LINKS ══════ */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-4">
            <Link
              href="/direktori-klinik"
              className="group flex items-center gap-4 md:gap-6 rounded-2xl border-2 border-border hover:border-primary bg-white p-5 md:p-6 transition-all duration-200 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-bold text-text group-hover:text-primary transition-colors">
                  Direktori Klinik GLP-1 &amp; Diabetes Indonesia
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-0.5 hidden sm:block">
                  Temukan RS, klinik, apotek, dan platform telehealth terdekat untuk obat GLP-1 dan perawatan diabetes.
                </p>
              </div>
              <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/tools/kalkulator-biaya-ozempic"
              className="group flex items-center gap-4 md:gap-6 rounded-2xl border-2 border-border hover:border-primary bg-white p-5 md:p-6 transition-all duration-200 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-bold text-text group-hover:text-primary transition-colors">
                  Kalkulator Biaya Ozempic
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-0.5 hidden sm:block">
                  Hitung estimasi biaya pengobatan Ozempic berdasarkan dosis dan durasi yang Anda butuhkan.
                </p>
              </div>
              <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">FAQ Harga GLP-1</h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={hargaFaqs} />
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Bantuan Memilih Obat GLP-1?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Konsultasikan kondisi Anda dengan dokter berlisensi kami untuk rekomendasi obat dan dosis yang tepat.
          </p>
          <Link
            href="/quiz"
            className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-colors inline-block"
          >
            Cek Kesesuaian Sekarang →
          </Link>
        </div>
      </section>
    </>
  );
}
