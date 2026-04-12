import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                aria-label="Nadi Health"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="8" fill="#0E7490" />
                <path
                  d="M8 22V10L16 20V10"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10V22L24 12"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
              <span className="text-xl font-bold text-white">
                nadi<span className="text-primary-300">health</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-4">
              Platform telehealth terpercaya untuk konsultasi GLP-1, Ozempic, dan
              penurunan berat badan berbasis bukti ilmiah di Indonesia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Kami
              </a>
            </div>
            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Metode Pembayaran</p>
              <div className="flex flex-wrap gap-2">
                {["BCA", "Mandiri", "GoPay", "OVO", "DANA"].map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1.5 bg-gray-800 rounded-md text-xs font-semibold text-gray-300"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Layanan</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Ozempic (Semaglutide)", href: "/ozempic" },
                { label: "GLP-1 & Diabetes", href: "/glp1-diabetes" },
                { label: "Turun Berat Badan", href: "/turun-berat-badan" },
                { label: "Cek Kesesuaian", href: "/quiz" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Perusahaan</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Tentang Kami", href: "/tentang-kami" },
                { label: "FAQ", href: "/faq" },
                { label: "Artikel Kesehatan", href: "/artikel" },
                { label: "Blog & Edukasi", href: "https://nadihealth.org", external: true },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                    {item.external && (
                      <span className="ml-1 text-xs text-gray-600">↗</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Baca Artikel</h4>
              <a
                href="https://nadihealth.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-300 hover:text-white font-medium transition-colors"
              >
                nadihealth.org ↗
              </a>
              <p className="text-xs text-gray-500 mt-1">75+ artikel berbahasa Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Nadi Health. Hak cipta dilindungi.
            </p>
            <div className="flex gap-4">
              <Link href="/kebijakan-privasi" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/syarat-penggunaan" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Syarat Penggunaan
              </Link>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-400">Disclaimer Medis:</span> Informasi di situs ini hanya untuk tujuan edukasi dan tidak menggantikan saran medis profesional. Konsultasikan kondisi kesehatan Anda dengan dokter berlisensi sebelum memulai pengobatan apapun. Nadi Health adalah platform telehealth yang menghubungkan pasien dengan dokter berlisensi IDI. Semua obat yang disediakan telah terdaftar di BPOM RI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
