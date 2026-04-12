"use client";

import { useState } from "react";
import TrustMarquee from "@/components/TrustMarquee";

export default function QuizClient() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && (formData.whatsapp || formData.email)) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <TrustMarquee />

      <section className="min-h-[80vh] bg-white flex items-center py-16 md:py-24">
        <div className="container-custom w-full">
          <div className="max-w-2xl mx-auto text-center">
            {/* Badge */}
            <span className="badge badge-orange text-sm mb-6 mx-auto block w-fit">
              Segera Hadir
            </span>

            {/* Icon */}
            <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
              Cek Apakah GLP-1 Cocok<br />
              <span className="text-primary">untuk Anda</span>
            </h1>

            {/* Description */}
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Jawab beberapa pertanyaan kesehatan sederhana untuk mendapatkan rekomendasi personal dari tim medis kami — dalam hitungan menit.
            </p>

            {/* What to expect */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: "⏱️", label: "5-10 menit", desc: "Waktu pengisian" },
                { icon: "🔒", label: "100% Privat", desc: "Data Anda aman" },
                { icon: "👨‍⚕️", label: "Ditinjau Dokter", desc: "Respons personal" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <p className="font-semibold text-text text-sm">{item.label}</p>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            {!submitted ? (
              <div className="bg-white border border-border rounded-2xl shadow-card p-8">
                <h2 className="text-xl font-bold text-text mb-2">
                  Daftar untuk Akses Pertama
                </h2>
                <p className="text-text-secondary text-sm mb-6">
                  Kuesioner sedang kami siapkan. Daftarkan diri untuk mendapat notifikasi saat live.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-left">
                    <label className="block text-sm font-semibold text-text mb-1.5">
                      Nama Lengkap <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-text text-sm transition-colors"
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-sm font-semibold text-text mb-1.5">
                      Nomor WhatsApp <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm font-medium">
                        +62
                      </span>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="812 3456 7890"
                        required
                        className="w-full pl-14 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-text text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-sm font-semibold text-text mb-1.5">
                      Email <span className="text-text-secondary font-normal">(opsional)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-text text-sm transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-base"
                  >
                    Daftar Akses Pertama →
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    Dengan mendaftar, Anda menyetujui{" "}
                    <a href="/kebijakan-privasi" className="text-primary hover:underline">
                      Kebijakan Privasi
                    </a>{" "}
                    kami. Tidak ada spam.
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Pendaftaran Berhasil!</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Terima kasih, <strong>{formData.name}</strong>! Kami akan menghubungi Anda via WhatsApp segera setelah kuesioner siap.
                </p>
                <p className="text-xs text-text-secondary">
                  Sambil menunggu, baca artikel edukasi kami di{" "}
                  <a href="https://nadihealth.org" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                    nadihealth.org ↗
                  </a>
                </p>
              </div>
            )}

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-text-secondary">
              {[
                "✓ Dokter Berlisensi IDI",
                "✓ Data Terenkripsi",
                "✓ Tanpa Komitmen",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
