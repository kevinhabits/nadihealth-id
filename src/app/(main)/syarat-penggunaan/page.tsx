import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat Penggunaan | Nadi Health",
  description: "Syarat dan ketentuan penggunaan layanan Nadi Health.",
};

export default function SyaratPenggunaanPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl font-bold text-text mb-8">Syarat Penggunaan</h1>
        <div className="prose prose-sm text-text-secondary space-y-6 leading-relaxed">
          <p className="text-sm text-text-secondary">Terakhir diperbarui: 1 Januari 2025</p>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Penerimaan Syarat</h2>
            <p>Dengan menggunakan layanan Nadi Health, Anda menyetujui syarat dan ketentuan ini. Jika Anda tidak setuju, mohon tidak menggunakan layanan kami.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Layanan Medis</h2>
            <p>Nadi Health adalah platform telehealth yang menghubungkan pasien dengan dokter berlisensi IDI. Layanan kami bukan pengganti perawatan medis darurat. Untuk kondisi darurat, segera hubungi 119 atau kunjungi IGD terdekat.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Batasan Layanan</h2>
            <p>Konsultasi melalui Nadi Health terbatas pada kondisi yang dapat ditangani secara telemedicine sesuai regulasi Kemenkes RI. Dokter berhak menolak memberikan resep jika secara klinis tidak sesuai.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Hubungi Kami</h2>
            <p>Untuk pertanyaan tentang syarat penggunaan, hubungi kami di legal@nadihealth.id</p>
          </section>
        </div>
      </div>
    </div>
  );
}
