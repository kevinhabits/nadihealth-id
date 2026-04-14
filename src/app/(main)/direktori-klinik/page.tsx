import type { Metadata } from "next";
import Link from "next/link";
import TrustMarquee from "@/components/TrustMarquee";

export const metadata: Metadata = {
  title: "Direktori Klinik GLP-1, Penurunan Berat Badan & Diabetes di Indonesia",
  description:
    "Direktori lengkap rumah sakit, klinik, apotek, dan platform telehealth di Indonesia untuk obat GLP-1 (Ozempic, Mounjaro), perawatan penurunan berat badan, diabetes, dan terapi peptida — dengan data harga terkini.",
  keywords: [
    "klinik ozempic indonesia",
    "klinik glp-1 indonesia",
    "klinik penurunan berat badan indonesia",
    "klinik diabetes indonesia",
    "harga ozempic indonesia",
    "klinik bariatrik indonesia",
    "apotek ozempic",
    "telehealth diabetes indonesia",
    "klinik peptida bali",
    "direktori klinik kesehatan indonesia",
  ],
  openGraph: {
    title: "Direktori Klinik GLP-1, Penurunan Berat Badan & Diabetes di Indonesia",
    description:
      "Direktori lengkap rumah sakit, klinik, apotek, dan platform telehealth di Indonesia untuk obat GLP-1, perawatan penurunan berat badan, dan diabetes.",
    url: "https://nadihealth.id/direktori-klinik",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Direktori Klinik GLP-1, Penurunan Berat Badan & Diabetes di Indonesia",
  description:
    "Direktori lengkap rumah sakit, klinik, apotek, dan platform telehealth di Indonesia untuk obat GLP-1, perawatan penurunan berat badan, diabetes, dan terapi peptida.",
  url: "https://nadihealth.id/direktori-klinik",
  publisher: {
    "@type": "Organization",
    name: "Nadi Health",
    url: "https://nadihealth.id",
  },
  dateModified: "2026-04-14",
  inLanguage: "id",
  about: {
    "@type": "MedicalCondition",
    name: "Obesitas dan Diabetes Mellitus Tipe 2",
  },
};

export default function DirektoriKlinikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrustMarquee />

      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Terakhir Diperbarui: April 2026
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-tight mb-6">
              Direktori Klinik GLP-1, Penurunan Berat Badan, Diabetes &amp; Peptida di{" "}
              <span className="text-primary">Indonesia</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-3xl">
              Direktori lengkap rumah sakit, klinik, apotek, dan platform telehealth di seluruh Indonesia
              tempat pasien dapat mengakses obat GLP-1 (Ozempic, Mounjaro), perawatan penurunan berat badan,
              perawatan diabetes, dan terapi peptida — dilengkapi data harga terkini.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 leading-relaxed">
              <strong>Disclaimer:</strong> Semua obat yang tercantum memerlukan resep dokter yang sah.
              Ozempic (semaglutide) telah disetujui BPOM di Indonesia untuk Diabetes Mellitus Tipe 2.
              Penggunaannya untuk penurunan berat badan bersifat off-label di Indonesia dan hanya boleh
              dilakukan di bawah pengawasan medis. Harga bersifat perkiraan dan dapat berubah sewaktu-waktu.
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Isi */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-text mb-6">Daftar Isi</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { href: "#harga", label: "Referensi Harga Singkat" },
                { href: "#klinik-spesialis", label: "Bagian 1: Klinik Spesialis Penurunan Berat Badan & GLP-1" },
                { href: "#rumah-sakit", label: "Bagian 2: Rumah Sakit dengan Pusat Diabetes/Obesitas" },
                { href: "#bali", label: "Bagian 3: Klinik di Bali (Fokus Ekspat & Internasional)" },
                { href: "#apotek-online", label: "Bagian 4: Apotek Online & Platform E-Commerce" },
                { href: "#jaringan-rs", label: "Bagian 5: Jaringan Rumah Sakit Besar" },
                { href: "#bariatrik", label: "Bagian 6: Pusat Bedah Bariatrik" },
                { href: "#telehealth", label: "Bagian 7: Platform Telehealth" },
                { href: "#regulasi", label: "Bagian 8: Catatan Regulasi & Praktis" },
                { href: "#kota", label: "Bagian 9: Pencarian Cepat Berdasarkan Kota" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium text-text-secondary"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Referensi Harga Singkat */}
      <section id="harga" className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-3">Referensi Harga Singkat</h2>
            <p className="section-subtitle mb-8">Indonesia, April 2026</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold text-text">Obat</th>
                    <th className="px-4 py-3 font-semibold text-text">Jenis</th>
                    <th className="px-4 py-3 font-semibold text-text">Harga Perkiraan (IDR)</th>
                    <th className="px-4 py-3 font-semibold text-text">Catatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { obat: "Ozempic Pen 0,25/0,5 mg (1,5 ml)", jenis: "Injeksi semaglutide", harga: "Rp 2.500.000 – 3.100.000", catatan: "Disetujui BPOM untuk DMT2" },
                    { obat: "Ozempic Pen 1 mg (3 ml)", jenis: "Injeksi semaglutide", harga: "Rp 2.600.000 – 2.900.000", catatan: "Disetujui BPOM untuk DMT2" },
                    { obat: "Mounjaro (Tirzepatide)", jenis: "Injeksi dual GLP-1/GIP", harga: "Rp 2.000.000+", catatan: "Ketersediaan terbatas" },
                    { obat: "Victoza (Liraglutide)", jenis: "Injeksi GLP-1", harga: "Rp 1.200.000 – 1.800.000", catatan: "Disetujui BPOM untuk DMT2" },
                    { obat: "Trulicity (Dulaglutide)", jenis: "Injeksi GLP-1", harga: "Rp 800.000 – 1.200.000", catatan: "Disetujui BPOM untuk DMT2" },
                    { obat: "Saxenda (Liraglutide 3mg)", jenis: "GLP-1 untuk obesitas", harga: "Rp 1.500.000 – 2.500.000", catatan: "Terbatas; sering diimpor" },
                    { obat: "Rybelsus (Semaglutide Oral)", jenis: "Tablet GLP-1", harga: "Ketersediaan terbatas", catatan: "Konsultasi dengan endokrinolog" },
                    { obat: "Peptida BPC-157", jenis: "Terapi peptida", harga: "Bervariasi per klinik", catatan: "Hanya dengan resep" },
                    { obat: "CJC-1295 / Ipamorelin", jenis: "Peptida hormon pertumbuhan", harga: "Bervariasi per klinik", catatan: "Hanya dengan resep" },
                  ].map((row) => (
                    <tr key={row.obat} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-text">{row.obat}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.jenis}</td>
                      <td className="px-4 py-3 text-primary font-semibold">{row.harga}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.catatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-secondary mt-4 italic">
              Catatan: Semaglutide generik mulai tersedia di pasar terdekat (India meluncurkan generik dengan diskon 80% pada Maret 2026).
              Ini dapat memengaruhi harga di Indonesia dalam beberapa bulan ke depan.
            </p>
          </div>
        </div>
      </section>

      {/* BAGIAN 1: Klinik Spesialis */}
      <section id="klinik-spesialis" className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 1</span>
              <h2 className="section-title mb-3">Klinik Spesialis Penurunan Berat Badan &amp; GLP-1</h2>
              <p className="section-subtitle">Klinik yang berfokus pada program penurunan berat badan dan terapi GLP-1</p>
            </div>

            <div className="space-y-8">
              {/* 1.1 Boost Health Clinic */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">1.1 Boost Health Clinic</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">GLP-1</span>
                  <span className="badge-teal text-xs">Peptida</span>
                  <span className="badge text-xs">Telehealth</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi:</strong> <span className="text-text-secondary">Bali (area Canggu) + Jakarta + Surabaya (telemedicine)</span></p>
                    <p className="mb-2"><strong className="text-text">Situs Web:</strong> <a href="https://boosthealthclinic.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">boosthealthclinic.com</a></p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Inggris, Bahasa Indonesia</span></p>
                    <p className="mb-2"><strong className="text-text">Telehealth:</strong> <span className="text-text-secondary">Ya — konsultasi telemedicine tersedia untuk tindak lanjut; pengambilan darah awal disarankan tatap muka</span></p>
                    <p className="mb-2"><strong className="text-text">Target Pasar:</strong> <span className="text-text-secondary">Ekspat, digital nomad, klien internasional, pria Indonesia</span></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Resep GLP-1 (Ozempic, Mounjaro), TRT, terapi peptida (30+ peptida termasuk BPC-157, CJC-1295, Ipamorelin, Semaglutide, Tirzepatide, Retatrutide), pemeriksaan darah, program penurunan berat badan, pengobatan disfungsi ereksi</span></p>
                    <p className="mb-2"><strong className="text-text">Kisaran Harga:</strong> <span className="text-text-secondary">Konsultasi mulai ~Rp 500.000; obat GLP-1 harga pasar; protokol peptida disesuaikan</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Klinik GLP-1 + peptida + kesehatan pria paling lengkap di Indonesia dengan protokol standar internasional. Hadir di beberapa kota dan platform telemedicine mapan.</p>
              </div>

              {/* 1.2 Klinik LIGHThouse */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">1.2 Klinik LIGHThouse (PT Shape UP Indonesia)</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">Penurunan Berat Badan</span>
                  <span className="badge-orange text-xs">18 Klinik</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi (18 klinik):</strong></p>
                    <ul className="text-text-secondary ml-4 list-disc space-y-1 mb-2">
                      <li><strong>Jakarta:</strong> Kebayoran, Cilandak, Thamrin, Kelapa Gading, LOTTE Shopping Avenue, Lippo Mall Puri, Gandaria City, Grand Indonesia Mall</li>
                      <li><strong>Tangerang:</strong> BSD City, Gading Serpong, Bintaro</li>
                      <li><strong>Bekasi:</strong> Cibubur</li>
                      <li><strong>Surabaya, Medan, Makassar</strong></li>
                    </ul>
                    <p className="mb-2"><strong className="text-text">Situs Web:</strong> <a href="https://lighthouse-clinic.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lighthouse-clinic.com</a></p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Bahasa Indonesia, Inggris</span></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Program penurunan berat badan di bawah pengawasan medis (program LIGHTweight), pembentukan tubuh, terapi perilaku makan, pengurangan lemak injeksi dan non-injeksi, dukungan psikologis untuk gangguan makan, rujukan bariatrik</span></p>
                    <p className="mb-2"><strong className="text-text">Target Pasar:</strong> <span className="text-text-secondary">Masyarakat Indonesia kelas menengah/atas, terutama wanita</span></p>
                    <p className="mb-2"><strong className="text-text">Kisaran Harga:</strong> <span className="text-text-secondary">Paket program bervariasi; konsultasi diperlukan untuk harga</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Jaringan klinik penurunan berat badan terbesar di Indonesia dengan 20+ tahun pengalaman, bersertifikat ISO 9001:2015, pemenang Superbrands (#1 Slimming Center). Telah menangani 90.000+ pasien. Tim multidisiplin (dokter, psikolog, ahli gizi, psikiater).</p>
              </div>

              {/* 1.3 Jakarta Slimming Center */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">1.3 Jakarta Slimming Center (JSC)</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">Penurunan Berat Badan</span>
                  <span className="badge-teal text-xs">Balon Lambung</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi:</strong></p>
                    <ul className="text-text-secondary ml-4 list-disc space-y-1 mb-2">
                      <li>Jl. Wolter Monginsidi 79, Jakarta Selatan</li>
                      <li>Jl. Pakubuwono 6 No. 99, Jakarta Selatan</li>
                    </ul>
                    <p className="mb-2"><strong className="text-text">Telepon:</strong> <span className="text-text-secondary">08111-611-711</span></p>
                    <p className="mb-2"><strong className="text-text">Situs Web:</strong> <a href="https://jakartaslimmingcenter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">jakartaslimmingcenter.com</a></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Penurunan berat badan medis, program balon lambung Allurion (pertama di Indonesia), optimalisasi metabolik, perawatan pelangsingan, konseling diet</span></p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Bahasa Indonesia, Inggris</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Klinik pertama di Indonesia yang menawarkan Program Allurion (balon lambung yang dapat ditelan), yang telah dipasang pada 100.000+ pasien di seluruh dunia. Pendekatan berfokus pada metabolisme.</p>
              </div>

              {/* 1.4 Nu You Clinic */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">1.4 Nu You Clinic</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">Nutrisi & Pelangsingan</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi:</strong></p>
                    <ul className="text-text-secondary ml-4 list-disc space-y-1 mb-2">
                      <li>Jl. Kemang 1A No. 9A, Jakarta Selatan</li>
                      <li>Jl. Cideng Timur No. 65, Jakarta Pusat</li>
                    </ul>
                    <p className="mb-2"><strong className="text-text">Instagram:</strong> <span className="text-text-secondary">@nuyouclinic (71K pengikut)</span></p>
                    <p className="mb-2"><strong className="text-text">Didirikan oleh:</strong> <span className="text-text-secondary">dr. Feni Nugraha, SpGK (Spesialis Gizi Klinik)</span></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Program nutrisi & pelangsingan, diet di bawah pengawasan medis, kontur tubuh</span></p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Bahasa Indonesia, Inggris</span></p>
                    <p className="mb-2"><strong className="text-text">Target Pasar:</strong> <span className="text-text-secondary">Warga Jakarta, masyarakat Indonesia yang peduli kesehatan</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Dipimpin oleh spesialis gizi klinik; kehadiran media sosial yang kuat menunjukkan komunitas pasien aktif.</p>
              </div>

              {/* 1.5 Sati8 Weight Loss Clinic */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">1.5 Sati8 Weight Loss Clinic</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">Penurunan Berat Badan</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi:</strong> <span className="text-text-secondary">Kedoya, Jakarta Barat</span></p>
                    <p className="mb-2"><strong className="text-text">WhatsApp:</strong> <span className="text-text-secondary">0851-868-54718</span></p>
                    <p className="mb-2"><strong className="text-text">Instagram:</strong> <span className="text-text-secondary">@sati8clinic (17K pengikut)</span></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Program penurunan berat badan, program anti-yo-yo diet, protokol pemecah stagnasi</span></p>
                    <p className="mb-2"><strong className="text-text">Didirikan oleh:</strong> <span className="text-text-secondary">dr. Ferry CW, MSc Nutr</span></p>
                    <p className="mb-2"><strong className="text-text">Target Pasar:</strong> <span className="text-text-secondary">Konsumen Indonesia yang mengalami plateau berat badan dan yo-yo diet</span></p>
                  </div>
                </div>
              </div>

              {/* 1.6 Halofit by Halodoc */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">1.6 Halofit by Halodoc (Klinik Obesitas Digital)</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">Penurunan Berat Badan</span>
                  <span className="badge text-xs">Telehealth</span>
                  <span className="badge-teal text-xs">Ozempic Tersedia</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Platform:</strong> <a href="https://halodoc.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">halodoc.com</a> / Aplikasi Halodoc</p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Bahasa Indonesia, Inggris</span></p>
                    <p className="mb-2"><strong className="text-text">Telehealth:</strong> <span className="text-text-secondary">Ya — sepenuhnya digital, jangkauan nasional</span></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Klinik obesitas digital yang menawarkan program manajemen berat badan berbasis klinis, nutrisi, dan gaya hidup; konsultasi dokter; resep obat termasuk Ozempic</span></p>
                    <p className="mb-2"><strong className="text-text">Harga Ozempic via Halodoc:</strong> <span className="text-text-secondary">~Rp 2.617.100 – 2.671.100 per pen (memerlukan konsultasi dokter + biaya sesi edukasi)</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Platform telehealth terbesar Indonesia (2 juta+ pengguna, 20.000+ dokter). Pengiriman apotek terintegrasi (pengiriman 1 jam di kota besar). Obat resep termasuk Ozempic tersedia melalui e-farmasi mereka dengan konsultasi dokter wajib.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 2: Rumah Sakit */}
      <section id="rumah-sakit" className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 2</span>
              <h2 className="section-title mb-3">Rumah Sakit dengan Pusat Diabetes/Obesitas/Endokrinologi</h2>
            </div>

            {/* Jakarta & Jabodetabek */}
            <h3 className="text-xl font-bold text-text mb-6 mt-8">Jakarta &amp; Jabodetabek</h3>
            <div className="space-y-6">
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.1 RS Pondok Indah Group</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> Pondok Indah, Bintaro Jaya, Puri Indah</p>
                  <p><strong className="text-text">Layanan:</strong> Departemen endokrinologi, manajemen diabetes, bedah bariatrik, konseling nutrisi</p>
                  <p><strong className="text-text">Bahasa:</strong> Bahasa Indonesia, Inggris</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://rspondokindah.co.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rspondokindah.co.id</a></p>
                  <p className="text-xs italic">Rumah sakit swasta premium; endokrinolog dapat meresepkan obat GLP-1 untuk diabetes; bedah bariatrik tersedia</p>
                </div>
              </div>

              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.2 Siloam Hospitals</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> 40+ rumah sakit di seluruh Indonesia termasuk Jakarta, Surabaya, Bali (Denpasar), Medan, Makassar, Bandung, Semarang, Balikpapan, Manado, dan lainnya</p>
                  <p><strong className="text-text">Layanan:</strong> Endokrinologi, pusat diabetes, bedah bariatrik (lokasi tertentu), penyakit dalam</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://siloamhospitals.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">siloamhospitals.com</a></p>
                  <p className="text-xs italic">Jaringan rumah sakit swasta terbesar di Indonesia. Endokrinolog di semua lokasi utama dapat meresepkan obat GLP-1.</p>
                </div>
              </div>

              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.3 Mayapada Hospital</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> Jakarta Selatan (terakreditasi JCI), Jakarta Kuningan, Bandung, Surabaya, Bogor, Tangerang</p>
                  <p><strong className="text-text">Layanan:</strong> Pusat bedah bariatrik, endokrinologi, manajemen diabetes, klinik nutrisi</p>
                  <p><strong className="text-text">Harga Bedah Bariatrik:</strong> Paket mulai dari ~Rp 175.000.000 (termasuk konsultasi, operasi, rawat inap, perawatan pasca-operasi)</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://mayapadahospital.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mayapadahospital.com</a> | Telepon: 150770</p>
                  <p className="text-xs italic">Terakreditasi JCI (Jakarta Selatan); tim bedah bariatrik berdedikasi di Jakarta, Bandung, dan Surabaya</p>
                </div>
              </div>

              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.4 RS EMC (Eka Hospital)</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> BSD Tangerang, Sentul, Cibubur, Bekasi</p>
                  <p><strong className="text-text">Layanan:</strong> Pusat Digestif & Bariatrik, endokrinologi, perawatan diabetes</p>
                  <p><strong className="text-text">Harga Bedah Bariatrik:</strong> Mulai dari ~Rp 49.999.000 (termasuk kamar, operasi, obat)</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://emc.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">emc.id</a></p>
                  <p className="text-xs italic">Program Diabetes Connection Care tersedia di semua jaringan Eka Hospital; pusat bariatrik dengan ahli bedah berpengalaman</p>
                </div>
              </div>

              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.5 Radjak Hospital — Pusat Obesitas</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> Jakarta Pusat (Salemba)</p>
                  <p><strong className="text-text">Layanan:</strong> Pusat obesitas komprehensif dengan tim multidisiplin; pemasangan balon lambung, bedah bariatrik (sleeve gastrectomy, gastric bypass), gastroplasti endoskopi, penurunan berat badan medis, konseling nutrisi, resep olahraga, dukungan psikologis</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://radjakhospital.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">radjakhospital.com</a></p>
                  <p className="text-xs italic">Pusat obesitas khusus — salah satu dari sedikit di Jakarta dengan perawatan obesitas spektrum penuh. Endoskopi bariatrik untuk BMI ≥27,5; bedah untuk BMI ≥32,5 dengan komorbiditas.</p>
                </div>
              </div>

              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.6 RS Gading Pluit — Gading Diabetes Center</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> Jl. Boulevard Timur Raya, Kelapa Gading, Jakarta Utara 14250</p>
                  <p><strong className="text-text">Telepon:</strong> (021) 4521001, 4520201</p>
                  <p><strong className="text-text">Layanan:</strong> Pusat diabetes khusus (est. 2009) dengan enam departemen spesialis: diabetologi, kardiologi, vaskular, nefrologi, oftalmologi, neurologi, dan nutrisi. Paket laboratorium untuk skrining diabetes.</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://gadingpluit-hospital.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gadingpluit-hospital.com</a></p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">2.7 RS Puri Cinere — Rumah Luka Diabetes</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Lokasi:</strong> Cinere, Depok</p>
                    <p><strong className="text-text">Layanan:</strong> Pusat edukasi diabetes, perawatan luka ulkus diabetik, pemantauan gula darah, perencanaan nutrisi</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">2.8 Bethsaida Hospital — Pusat Diabetes</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Lokasi:</strong> Gading Serpong, Tangerang</p>
                    <p><strong className="text-text">Layanan:</strong> Endokrinologi, manajemen diabetes dengan tim multidisiplin, manajemen pompa insulin, perawatan kaki diabetik</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">2.9 RS Mitra Keluarga Bintaro</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Lokasi:</strong> Bintaro, Tangerang Selatan</p>
                    <p><strong className="text-text">Layanan:</strong> Pusat Diabetes & Tiroid; kontrol gula darah, perawatan kaki diabetik, pencegahan komplikasi</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">2.10 Klinik Utama DR Indrajana</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Lokasi:</strong> Jakarta</p>
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://klinikdrindrajana.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">klinikdrindrajana.com</a></p>
                    <p><strong className="text-text">Layanan:</strong> Konsultasi spesialis diabetes, endokrin, dan penyakit metabolik</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">2.11 mGanik Care — Klinik Diabetes</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://mganik.care" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mganik.care</a></p>
                    <p><strong className="text-text">Layanan:</strong> Disebut sebagai &quot;klinik perawatan diabetes tertarget pertama di Indonesia&quot;; protokol diabetes khusus</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">2.12 Klinik Diabetes Nusantara (KDN)</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://klinikdiabetesnusantara.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">klinikdiabetesnusantara.com</a></p>
                    <p><strong className="text-text">Layanan:</strong> Klinik diabetes dengan teknologi terkini dan keahlian medis internasional</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">2.13 Jakarta Anti Aging Center (JAAC)</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://jakartaantiagingcenter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">jakartaantiagingcenter.com</a></p>
                    <p><strong className="text-text">Layanan:</strong> Kedokteran preventif, promosi kesehatan, detoksifikasi hati, optimalisasi metabolik</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Yogyakarta */}
            <h3 className="text-xl font-bold text-text mb-6 mt-12">Yogyakarta</h3>
            <div className="space-y-6">
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.14 RS Panti Rapih — Klinik Anti Obesitas Katarina</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> Lantai 6, Gedung Rawat Jalan Terpadu Borromeus, Jl. Cik Di Tiro 30, Yogyakarta 55223</p>
                  <p><strong className="text-text">Telepon:</strong> (0274) 514014, 514845, 563333 ext 1512</p>
                  <p><strong className="text-text">Layanan:</strong> Klinik anti-obesitas holistik dengan tim interdisiplin: dokter umum, spesialis gizi klinik, endokrinolog, kardiolog, spesialis rehabilitasi medik, psikolog. Program termasuk Mindfulness Based Cognitive Therapy (MBCT), konseling nutrisi, program olahraga. Aplikasi Slimwell untuk pemantauan jarak jauh.</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://pantirapih.or.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pantirapih.or.id</a></p>
                  <p className="text-xs italic">Salah satu klinik obesitas terintegrasi penuh berbasis rumah sakit di luar Jakarta. Tindak lanjut berbasis aplikasi (Slimwell).</p>
                </div>
              </div>
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.15 RSUP Dr. Sardjito — Poli Obesitas</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Lokasi:</strong> Yogyakarta (rumah sakit rujukan nasional)</p>
                  <p><strong className="text-text">Layanan:</strong> Klinik anti-obesitas dan kesehatan holistik di bawah departemen endokrin; manajemen berat badan medis</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://sardjito.co.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sardjito.co.id</a></p>
                  <p className="text-xs italic">Rumah sakit rujukan nasional pemerintah — relevan untuk pasien BPJS; pusat medis akademik</p>
                </div>
              </div>
            </div>

            {/* Bandung & Surabaya */}
            <h3 className="text-xl font-bold text-text mb-6 mt-12">Bandung &amp; Surabaya</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.16 Mayapada Hospital Bandung</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Layanan:</strong> Bedah bariatrik tersedia dengan Dr. dr. Reno Rudiman MSc, Sp.B-SubSp BD (K), FICS, FCSI; prosedur bariatrik laparoskopi</p>
                  <p className="text-xs italic">Bedah bariatrik invasif minimal; tim bariatrik yang sama dengan jaringan Mayapada Jakarta</p>
                </div>
              </div>
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.17 Mayapada Hospital Surabaya</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Layanan:</strong> Bedah bariatrik dengan dr. Anita Hartono, Sp.B., Subsp.BD (K); endokrinologi; manajemen diabetes</p>
                  <p className="text-xs italic">Pilihan bedah bariatrik premium di Jawa Timur dalam jaringan Mayapada</p>
                </div>
              </div>
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">2.18 Siloam Hospitals Surabaya</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Layanan:</strong> Endokrinologi, pusat diabetes, penyakit dalam</p>
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://siloamhospitals.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">siloamhospitals.com</a></p>
                  <p className="text-xs italic">Bagian dari jaringan Siloam; endokrinolog dapat meresepkan obat GLP-1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 3: Klinik di Bali */}
      <section id="bali" className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 3</span>
              <h2 className="section-title mb-3">Klinik di Bali (Fokus Ekspat &amp; Internasional)</h2>
            </div>
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">3.1 Boost Health Clinic Bali</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">GLP-1</span>
                  <span className="badge-teal text-xs">Peptida</span>
                  <span className="badge text-xs">TRT</span>
                </div>
                <div className="text-sm text-text-secondary">
                  <p className="mb-2"><strong className="text-text">Lokasi:</strong> Area Canggu, Bali</p>
                  <p className="mb-2"><strong className="text-text">Info Tambahan Bali:</strong> Melayani digital nomad dan ekspat; penjadwalan janji fleksibel; telemedicine untuk pasien yang bepergian. Apotek mitra untuk dispensing obat. Protokol GLP-1 + peptida + TRT semuanya tersedia.</p>
                  <p className="italic text-xs">Lihat Bagian 1.1 untuk detail lengkap</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">3.2 Dripdok Bali</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-teal text-xs">Peptida</span>
                  <span className="badge text-xs">Longevity</span>
                  <span className="badge-green text-xs">IV Terapi</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi:</strong> <span className="text-text-secondary">Layanan ke rumah/villa di seluruh Bali; kantor konsultasi di Bali</span></p>
                    <p className="mb-2"><strong className="text-text">Situs Web:</strong> <a href="https://dripdok.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dripdok.com</a></p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Inggris</span></p>
                    <p className="mb-2"><strong className="text-text">Didirikan:</strong> <span className="text-text-secondary">2017; 2.000+ perawatan IV; 1.000.000+ titik data terkumpul</span></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Terapi IV canggih (NAD+, NMN, NR-7), terapi peptida (BPC-157, CJC-1295, Ipamorelin, Thymosin Alpha-1, GHK-Cu, dan lainnya), TRT dengan pengawasan dokter, protokol longevity, tes usia biologis (metilasi DNA)</span></p>
                    <p className="mb-2"><strong className="text-text">Harga:</strong> <span className="text-text-secondary">Protokol regeneratif mulai ~$2.400 USD; protokol kustom premium mulai ~$7.500 USD</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Protokol regeneratif berbasis data yang dirancang dokter. Sistem skor biomarker CLOSE Regenerative Index (CRI) proprietary. Pengawasan dokter bersertifikat AS & NZ. Model pengiriman ke villa. Klinik peptida dan longevity paling canggih di Bali.</p>
              </div>

              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">3.3 AMO Skin / AMO Spa</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-green text-xs">Ozempic Tersedia</span>
                  <span className="badge text-xs">Estetika</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi:</strong> <span className="text-text-secondary">Jl. Pantai Batu Bolong No. 69, Canggu, Badung, Bali 80361</span></p>
                    <p className="mb-2"><strong className="text-text">Telepon:</strong> <span className="text-text-secondary">+62 8113999806</span></p>
                    <p className="mb-2"><strong className="text-text">Situs Web:</strong> <a href="https://amospa.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">amospa.com</a></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">Klinik estetika dan wellness spa, konsultasi dan resep Ozempic/semaglutide, terapi IV, perawatan kulit, pembentukan tubuh (Hi-Fem, cryotherapy)</span></p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Inggris, Bahasa Indonesia</span></p>
                    <p className="mb-2"><strong className="text-text">Telehealth:</strong> <span className="text-text-secondary">Layanan telemedicine yang berkembang; dapat membantu mengelola rencana perawatan Ozempic jangka panjang secara remote</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Destinasi wellness premium Canggu. Menggabungkan estetika + penurunan berat badan medis. Pemenang Tripadvisor Travelers&apos; Choice.</p>
              </div>

              <div className="card">
                <h3 className="text-lg font-bold text-text mb-1">3.4 Lumina Aesthetics Clinic</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge text-xs">TRT</span>
                  <span className="badge-green text-xs">Pelangsingan</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-2"><strong className="text-text">Lokasi:</strong> <span className="text-text-secondary">Jl. Dewi Sri No. 88E, Legian, Kec. Kuta Selatan, Kabupaten Badung, Bali 80361</span></p>
                    <p className="mb-2"><strong className="text-text">Telepon:</strong> <span className="text-text-secondary">+62 812 1068 8884 / +62 812 2888 8837</span></p>
                    <p className="mb-2"><strong className="text-text">Situs Web:</strong> <a href="https://luminaaesthetics.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">luminaaesthetics.com</a></p>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-text">Layanan:</strong> <span className="text-text-secondary">TRT (Testosterone Replacement Therapy) melalui Lumina Men&apos;s Clinic, program pelangsingan (BTL Vanquish, cryolipolysis, injeksi Mesolipo), perawatan estetika</span></p>
                    <p className="mb-2"><strong className="text-text">Bahasa:</strong> <span className="text-text-secondary">Inggris, Bahasa Indonesia, berbagai bahasa internasional</span></p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-primary font-medium">Keunggulan: Klinik tiga lantai dengan tim internasional. Pemenang World Luxury Spa Award. Penawaran TRT dan kesehatan pria yang kuat.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">3.5 Upscale Bali</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://upscalebali.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">upscalebali.com</a></p>
                    <p><strong className="text-text">Layanan:</strong> Klinik estetika dan wellness; kedokteran anti-aging; kontur tubuh</p>
                    <p><strong className="text-text">Didirikan oleh:</strong> Dr. Liana Susanti (13+ tahun pengalaman, pascasarjana Anti-Aging Medicine dari Universitas Udayana)</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">3.6 BaliDoc (Telehealth)</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://balidoc.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">balidoc.com</a></p>
                    <p><strong className="text-text">Layanan:</strong> Konsultasi video gratis dengan dokter bersertifikat berbahasa Inggris; layanan resep untuk kondisi kronis (diabetes, dll); pengiriman obat ke seluruh Bali</p>
                    <p><strong className="text-text">Telehealth:</strong> Ya — 90% perawatan ditangani secara online</p>
                    <p className="text-xs italic">Dokter dan klinik mitra yang diakui pemerintah. Infrastruktur telehealth-first.</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">3.7 MindTek (Pemasok Peptida)</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://mindtek.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mindtek.co</a></p>
                    <p><strong className="text-text">Layanan:</strong> Pasokan peptida (IGF-1, GH, MT2, Thymosin Alpha-1, Epitalon, BPC-157, TB-500, GHK-Cu, Ipamorelin, CJC-1295)</p>
                    <p className="text-xs italic">Bukan klinik — pemasok peptida. Peptida terapeutik diklasifikasikan sebagai senyawa resep-only. Pengadaan sendiri tanpa pengawasan medis memiliki risiko kesehatan dan hukum.</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">3.8 SOS Medika Klinik Bali</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Lokasi:</strong> Jl. By Pass Ngurah Rai No. 505X, Kuta 80221, Bali</p>
                    <p><strong className="text-text">Telepon:</strong> +62 361 720 100</p>
                    <p><strong className="text-text">Layanan:</strong> Layanan dokter keluarga 24/7, konsultasi spesialis, perawatan darurat, apotek internal, laboratorium</p>
                    <p className="text-xs italic">35+ tahun beroperasi; perawatan primer standar internasional. Dipercaya oleh program ekspat korporat dan asuransi internasional.</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">3.9 Bali Pharmacy (Online)</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://balipharma.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">balipharma.com</a></p>
                    <p><strong className="text-text">Layanan:</strong> Apotek online berbasis Bali; Ozempic Pen 1mg tersedia; memerlukan resep dan sesi edukasi obat</p>
                    <p className="text-xs italic">Pemesanan online dengan persyaratan resep; dapat mengirim ke seluruh Bali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 4: Apotek Online */}
      <section id="apotek-online" className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 4</span>
              <h2 className="section-title mb-3">Apotek Online &amp; Platform E-Commerce</h2>
            </div>
            <div className="space-y-6">
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">4.1 Halodoc Pharmacy</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Platform:</strong> <a href="https://halodoc.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">halodoc.com</a> / Aplikasi Halodoc (iOS & Android)</p>
                  <p><strong className="text-text">Ozempic Tersedia:</strong> Ya — Ozempic Pen 0,25/0,5mg dan Ozempic Pen 1mg</p>
                  <p><strong className="text-text">Harga:</strong> Mulai dari Rp 2.617.100 per pen</p>
                  <p><strong className="text-text">Proses:</strong> Konsultasi dokter wajib → sesi edukasi (biaya tambahan) → resep → pengiriman (1 jam di kota besar)</p>
                  <p><strong className="text-text">Jangkauan:</strong> Nasional, dengan pengiriman tercepat di Jakarta, Surabaya, Bandung, Medan, Bali</p>
                </div>
              </div>
              <div className="card">
                <h4 className="text-base font-bold text-text mb-2">4.2 K24Klik (Apotek K-24 Online)</h4>
                <div className="text-sm space-y-1 text-text-secondary">
                  <p><strong className="text-text">Situs Web:</strong> <a href="https://k24klik.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">k24klik.com</a></p>
                  <p><strong className="text-text">Ozempic Tersedia:</strong> Ya — Ozempic 0,25mg/0,5mg Prefilled Pen</p>
                  <p><strong className="text-text">Harga:</strong> Rp 3.100.942 (harga tercantum; dapat bervariasi)</p>
                  <p><strong className="text-text">Jangkauan:</strong> Nasional melalui jaringan apotek K-24 (2.800+ gerai)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">4.3 Farmaku</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://farmaku.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">farmaku.com</a></p>
                    <p><strong className="text-text">Ozempic Tersedia:</strong> Ya — Ozempic Single Dose 1mg Injection 3ml</p>
                    <p><strong className="text-text">Jangkauan:</strong> Kota-kota besar di Indonesia</p>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-base font-bold text-text mb-2">4.5 HDmall</h4>
                  <div className="text-sm space-y-1 text-text-secondary">
                    <p><strong className="text-text">Situs Web:</strong> <a href="https://hdmall.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hdmall.id</a></p>
                    <p><strong className="text-text">Layanan:</strong> Marketplace kesehatan dengan daftar skrining diabetes dan tes gula darah di ratusan lokasi klinik (Prodia, Pramita, dll)</p>
                    <p><strong className="text-text">Jangkauan:</strong> Nasional — 50+ kota</p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>4.4 Tokopedia (Marketplace) — Peringatan:</strong> Berbagai penjual mencantumkan pen semaglutide mulai dari ~Rp 2.000.000. Pembelian di marketplace memiliki risiko produk palsu yang lebih tinggi. Selalu verifikasi kredensial penjual, periksa nomor registrasi BPOM, dan pastikan pengiriman rantai dingin yang benar. Obat resep sebaiknya diperoleh melalui apotek berlisensi.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 5: Jaringan RS Besar */}
      <section id="jaringan-rs" className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 5</span>
              <h2 className="section-title mb-3">Jaringan Rumah Sakit Besar dengan Departemen Endokrinologi</h2>
              <p className="section-subtitle">Jaringan rumah sakit ini memiliki endokrinolog yang dapat meresepkan obat GLP-1 untuk diabetes (dan berpotensi off-label untuk manajemen berat badan)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { nama: "Siloam Hospitals", lokasi: "40+ lokasi", kota: "Jakarta (beberapa), Surabaya, Denpasar/Bali, Medan, Makassar, Bandung, Semarang, Balikpapan, Manado, Palembang, Jambi, Kupang, dll", web: "siloamhospitals.com", url: "https://siloamhospitals.com" },
                { nama: "Mayapada Hospital", lokasi: "7+ lokasi", kota: "Jakarta (Selatan, Kuningan), Bandung, Surabaya, Bogor, Tangerang", web: "mayapadahospital.com", url: "https://mayapadahospital.com" },
                { nama: "RS Mitra Keluarga", lokasi: "28+ lokasi", kota: "Jakarta (beberapa), Bekasi, Depok, Bogor, Surabaya, Semarang", web: "mitrakeluarga.com", url: "https://mitrakeluarga.com" },
                { nama: "RS Eka Hospital", lokasi: "5+ lokasi", kota: "BSD Tangerang, Bekasi, Cibubur, Pekanbaru", web: "emc.id", url: "https://emc.id" },
                { nama: "RS Pusat Pertamina (RSPP)", lokasi: "Jakarta", kota: "Menerbitkan konten edukasi GLP-1; endokrinolog meresepkan agonis GLP-1 untuk diabetes dan manajemen berat badan", web: "rspp.co.id", url: "https://rspp.co.id" },
                { nama: "RSCM (RS Cipto Mangunkusumo)", lokasi: "Jakarta", kota: "Rumah sakit rujukan nasional; pusat medis akademik afiliasi Universitas Indonesia; manajemen diabetes dan penyakit metabolik. Relevan untuk pasien BPJS.", web: "rscm.co.id", url: "https://rscm.co.id" },
                { nama: "RS Hasan Sadikin", lokasi: "Bandung", kota: "Rumah sakit rujukan Jawa Barat; pusat medis akademik afiliasi Universitas Padjadjaran", web: "rshs.or.id", url: "https://rshs.or.id" },
                { nama: "RSUD Dr. Soetomo", lokasi: "Surabaya", kota: "Rumah sakit pemerintah terbesar Jawa Timur; afiliasi akademik Universitas Airlangga; pusat diabetes dan penyakit metabolik", web: "rfrfrfrsu-drsoetomo.jatimprov.go.id", url: "https://rsu-drsoetomo.jatimprov.go.id" },
              ].map((rs) => (
                <div key={rs.nama} className="card">
                  <h4 className="text-base font-bold text-text mb-1">{rs.nama}</h4>
                  <span className="badge-teal text-xs mb-2 inline-block">{rs.lokasi}</span>
                  <div className="text-sm text-text-secondary space-y-1">
                    <p>{rs.kota}</p>
                    <p><a href={rs.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{rs.web}</a></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 6: Pusat Bedah Bariatrik */}
      <section id="bariatrik" className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 6</span>
              <h2 className="section-title mb-3">Pusat Bedah Bariatrik</h2>
              <p className="section-subtitle">Untuk pasien yang pengobatan dan intervensi gaya hidup tidak mencukupi (umumnya BMI ≥32,5 dengan komorbiditas atau BMI ≥37,5)</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold text-text">Rumah Sakit</th>
                    <th className="px-4 py-3 font-semibold text-text">Lokasi</th>
                    <th className="px-4 py-3 font-semibold text-text">Harga Mulai (IDR)</th>
                    <th className="px-4 py-3 font-semibold text-text">Prosedur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { rs: "RS EMC (Eka Hospital)", lokasi: "BSD Tangerang", harga: "~Rp 49.999.000", prosedur: "Sleeve gastrectomy, gastric bypass" },
                    { rs: "Mayapada Hospital", lokasi: "Jakarta Selatan", harga: "~Rp 175.000.000 (paket lengkap)", prosedur: "Sleeve, bypass, endoskopi" },
                    { rs: "Radjak Hospital", lokasi: "Jakarta Pusat", harga: "Konsultasi", prosedur: "Balon, sleeve, bypass, gastroplasti endoskopi" },
                    { rs: "RS Pondok Indah", lokasi: "Jakarta Selatan", harga: "Konsultasi", prosedur: "Bedah bariatrik" },
                    { rs: "Siloam Hospitals", lokasi: "Lokasi tertentu", harga: "Konsultasi", prosedur: "Bedah bariatrik" },
                    { rs: "Ciputra Hospital", lokasi: "Jakarta", harga: "Konsultasi", prosedur: "Bedah bariatrik" },
                  ].map((row) => (
                    <tr key={row.rs} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-text">{row.rs}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.lokasi}</td>
                      <td className="px-4 py-3 text-primary font-semibold">{row.harga}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.prosedur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 7: Platform Telehealth */}
      <section id="telehealth" className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 7</span>
              <h2 className="section-title mb-3">Platform Telehealth untuk Diabetes/Manajemen Berat Badan</h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold text-text">Platform</th>
                    <th className="px-4 py-3 font-semibold text-text">Situs Web</th>
                    <th className="px-4 py-3 font-semibold text-text">Layanan</th>
                    <th className="px-4 py-3 font-semibold text-text">Nasional?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { platform: "Halodoc (+ Halofit)", web: "halodoc.com", url: "https://halodoc.com", layanan: "Telekonsultasi, apotek Ozempic, klinik obesitas digital", nasional: "Ya" },
                    { platform: "Alodokter", web: "alodokter.com", url: "https://alodokter.com", layanan: "Konsultasi dokter, artikel kesehatan, apotek", nasional: "Ya" },
                    { platform: "BaliDoc", web: "balidoc.com", url: "https://balidoc.com", layanan: "Telehealth berbahasa Inggris, pengiriman resep (Bali)", nasional: "Hanya Bali" },
                    { platform: "Boost Health Clinic", web: "boosthealthclinic.com", url: "https://boosthealthclinic.com", layanan: "Konsultasi GLP-1, TRT, peptida (Inggris/ID)", nasional: "Bali, Jakarta, berkembang" },
                    { platform: "Good Doctor (GrabHealth)", web: "gooddoctor.co.id", url: "https://gooddoctor.co.id", layanan: "Telekonsultasi, apotek via Grab", nasional: "Ya" },
                    { platform: "KlikDokter", web: "klikdokter.com", url: "https://klikdokter.com", layanan: "Konsultasi dokter, konten kesehatan", nasional: "Ya" },
                    { platform: "SehatQ", web: "sehatq.com", url: "https://sehatq.com", layanan: "Pencarian dokter, telekonsultasi", nasional: "Ya" },
                  ].map((row) => (
                    <tr key={row.platform} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-text">{row.platform}</td>
                      <td className="px-4 py-3"><a href={row.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{row.web}</a></td>
                      <td className="px-4 py-3 text-text-secondary">{row.layanan}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.nasional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 8: Catatan Regulasi */}
      <section id="regulasi" className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 8</span>
              <h2 className="section-title mb-3">Catatan Regulasi &amp; Praktis</h2>
            </div>
            <div className="space-y-8">
              {/* Status BPOM */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-4">Status BPOM Obat-Obatan Utama</h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li><strong className="text-text">Ozempic (injeksi semaglutide):</strong> Disetujui BPOM untuk Diabetes Mellitus Tipe 2. BELUM disetujui untuk penurunan berat badan (penggunaan off-label memerlukan kebijaksanaan dokter).</li>
                  <li><strong className="text-text">Mounjaro (tirzepatide):</strong> Ketersediaan terbatas di Indonesia; konsultasikan dengan endokrinolog untuk status BPOM terkini.</li>
                  <li><strong className="text-text">Victoza/Saxenda (liraglutide):</strong> Victoza disetujui untuk DMT2; Saxenda (indikasi penurunan berat badan) ketersediaan terbatas.</li>
                  <li><strong className="text-text">Trulicity (dulaglutide):</strong> Disetujui BPOM untuk DMT2.</li>
                  <li><strong className="text-text">Peptida (BPC-157, CJC-1295, dll.):</strong> Diklasifikasikan sebagai senyawa resep-only. Legal bila diresepkan oleh dokter berlisensi dan didistribusikan melalui apotek terdaftar. Tidak diklasifikasikan sebagai narkotika.</li>
                </ul>
              </div>

              {/* Persyaratan Resep */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-4">Persyaratan Resep</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Semua obat GLP-1 diklasifikasikan sebagai &quot;obat keras&quot; (obat resep) di Indonesia. Anda harus memiliki resep yang sah dari dokter berlisensi Indonesia (Surat Izin Praktik) untuk membelinya. Resep luar negeri umumnya tidak diakui, tetapi surat dari dokter luar negeri yang menjelaskan obat Anda dapat membantu dokter Indonesia melanjutkan pengobatan Anda.
                </p>
              </div>

              {/* Cakupan Asuransi */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-4">Cakupan Asuransi</h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li><strong className="text-text">BPJS Kesehatan (Asuransi Kesehatan Nasional):</strong> Cakupan obat GLP-1 terbatas dan umumnya dibatasi untuk indikasi diabetes. Periksa dengan loket BPJS rumah sakit Anda.</li>
                  <li><strong className="text-text">Asuransi Swasta:</strong> Cakupan sangat bervariasi tergantung plan. Beberapa plan menanggung Ozempic untuk diabetes tetapi tidak untuk penurunan berat badan. Hubungi asuransi Anda.</li>
                  <li><strong className="text-text">Bayar Tunai:</strong> Sebagian besar klinik dan apotek menerima pembayaran tunai/kartu. Obat GLP-1 tergolong mahal — perkirakan Rp 2,5–3 juta per pen.</li>
                </ul>
              </div>

              {/* Bepergian dengan Obat GLP-1 */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-4">Bepergian dengan Obat GLP-1</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Jika membawa Ozempic atau obat injeksi lainnya ke Indonesia, bawa resep dokter Anda, simpan obat dalam kemasan asli dengan label yang jelas, dan pastikan rantai dingin selama transportasi. Obat untuk penggunaan pribadi umumnya diizinkan melalui bea cukai Indonesia dengan dokumentasi yang sesuai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN 9: Pencarian Cepat per Kota */}
      <section id="kota" className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="badge-teal text-xs mb-3 inline-block">Bagian 9</span>
              <h2 className="section-title mb-3">Pencarian Cepat Berdasarkan Kota</h2>
            </div>
            <div className="space-y-8">
              {/* Jakarta */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-4">Jakarta</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-text mb-1">GLP-1/Penurunan Berat Badan:</p>
                    <p className="text-text-secondary mb-3">LIGHThouse (11 lokasi), Jakarta Slimming Center, Nu You Clinic, Sati8 Clinic, Halodoc/Halofit</p>
                    <p className="font-semibold text-text mb-1">Diabetes:</p>
                    <p className="text-text-secondary mb-3">RS Gading Pluit, RS Mitra Keluarga Bintaro, RS Pondok Indah, RSCM, RSPP, Klinik DR Indrajana, Klinik Diabetes Nusantara</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-1">Bariatrik:</p>
                    <p className="text-text-secondary mb-3">Radjak Hospital, Mayapada, RS EMC, RS Pondok Indah</p>
                    <p className="font-semibold text-text mb-1">Peptida:</p>
                    <p className="text-text-secondary">Boost Health Clinic (kantor Jakarta)</p>
                  </div>
                </div>
              </div>

              {/* Bali */}
              <div className="card">
                <h3 className="text-lg font-bold text-text mb-4">Bali (Denpasar/Kuta/Canggu/Ubud)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-text mb-1">GLP-1/Penurunan Berat Badan:</p>
                    <p className="text-text-secondary mb-3">Boost Health Clinic, AMO Skin, BaliDoc (telehealth)</p>
                    <p className="font-semibold text-text mb-1">Peptida/Longevity:</p>
                    <p className="text-text-secondary mb-3">Dripdok, Boost Health Clinic, MindTek (pemasok)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-1">TRT/Hormon:</p>
                    <p className="text-text-secondary mb-3">Boost Health Clinic, Dripdok, Lumina Aesthetics (Men&apos;s Clinic)</p>
                    <p className="font-semibold text-text mb-1">Medis Umum:</p>
                    <p className="text-text-secondary mb-3">SOS Medika Klinik Bali, Siloam Hospitals Denpasar</p>
                    <p className="font-semibold text-text mb-1">Apotek:</p>
                    <p className="text-text-secondary">Bali Pharmacy (online), apotek lokal dengan resep</p>
                  </div>
                </div>
              </div>

              {/* Kota lainnya */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-base font-bold text-text mb-3">Surabaya</h3>
                  <div className="text-sm text-text-secondary space-y-2">
                    <p><strong className="text-text">Penurunan Berat Badan:</strong> LIGHThouse Surabaya</p>
                    <p><strong className="text-text">Diabetes/RS:</strong> Siloam Hospitals Surabaya, Mayapada Hospital Surabaya, RSUD Dr. Soetomo</p>
                    <p><strong className="text-text">Bariatrik:</strong> Mayapada Hospital Surabaya</p>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-base font-bold text-text mb-3">Bandung</h3>
                  <div className="text-sm text-text-secondary space-y-2">
                    <p><strong className="text-text">RS:</strong> Mayapada Hospital Bandung (bedah bariatrik), RS Hasan Sadikin, Siloam Hospitals Bandung</p>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-base font-bold text-text mb-3">Yogyakarta</h3>
                  <div className="text-sm text-text-secondary space-y-2">
                    <p><strong className="text-text">Obesitas:</strong> RS Panti Rapih — Klinik Katarina, RSUP Dr. Sardjito — Poli Obesitas</p>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-base font-bold text-text mb-3">Medan</h3>
                  <div className="text-sm text-text-secondary space-y-2">
                    <p><strong className="text-text">Penurunan Berat Badan:</strong> LIGHThouse Medan</p>
                    <p><strong className="text-text">RS:</strong> Siloam Hospitals Medan</p>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-base font-bold text-text mb-3">Makassar</h3>
                  <div className="text-sm text-text-secondary space-y-2">
                    <p><strong className="text-text">Penurunan Berat Badan:</strong> LIGHThouse Makassar</p>
                    <p><strong className="text-text">RS:</strong> Siloam Hospitals Makassar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Indeks Ini + CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Tentang Direktori Ini</h2>
            <div className="prose prose-sm text-text-secondary space-y-4">
              <p>
                Direktori ini disusun oleh NadiHealth.id sebagai sumber publik untuk membantu masyarakat Indonesia
                menavigasi lanskap obat GLP-1, pilihan manajemen berat badan, dan layanan kesehatan metabolik yang terus berkembang.
                Kami percaya pasien yang terinformasi membuat keputusan kesehatan yang lebih baik.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-base font-bold text-text mb-3">Cara Menggunakan Panduan Ini:</h3>
                <ol className="list-decimal ml-4 space-y-2 text-sm">
                  <li>Identifikasi kota dan kebutuhan Anda (penurunan berat badan, manajemen diabetes, terapi peptida, bedah bariatrik)</li>
                  <li>Hubungi klinik atau rumah sakit untuk memverifikasi harga dan ketersediaan terkini</li>
                  <li>Selalu konsultasikan dengan dokter berlisensi sebelum memulai pengobatan apapun</li>
                  <li>Untuk obat GLP-1, siapkan pemeriksaan darah dan evaluasi medis sebelum menerima resep</li>
                </ol>
              </div>
              <p className="text-sm">
                <strong className="text-text">Ingin terdaftar?</strong> Jika Anda mengelola klinik yang menawarkan layanan GLP-1, penurunan berat badan, diabetes, atau peptida di Indonesia dan ingin dicantumkan dalam direktori ini, hubungi NadiHealth.id.
              </p>
              <p className="text-sm">
                <strong className="text-text">Koreksi &amp; Pembaruan:</strong> Indeks ini diperbarui secara berkala. Jika Anda menemukan informasi yang tidak akurat, silakan hubungi kami.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#0C5E75] hover:-translate-y-px hover:shadow-md transition-all duration-150"
              >
                Cek Kesesuaian GLP-1 Anda — Gratis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="mt-3 text-sm text-text-secondary">
                Penilaian kesehatan 2 menit oleh dokter berlisensi IDI
              </p>
            </div>

            {/* Copyright */}
            <p className="mt-12 text-xs text-text-secondary text-center italic">
              &copy; 2026 NadiHealth.id — Hak cipta dilindungi. Sumber ini disediakan untuk tujuan informasi saja dan bukan merupakan nasihat medis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
