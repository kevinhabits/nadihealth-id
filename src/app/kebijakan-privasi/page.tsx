import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Nadi Health",
  description: "Kebijakan privasi Nadi Health menjelaskan cara kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl font-bold text-text mb-8">Kebijakan Privasi</h1>
        <div className="prose prose-sm text-text-secondary space-y-6 leading-relaxed">
          <p className="text-sm text-text-secondary">Terakhir diperbarui: 1 Januari 2025</p>
          
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p>Nadi Health mengumpulkan informasi yang Anda berikan secara langsung, termasuk nama, nomor WhatsApp, email, dan data kesehatan yang relevan untuk keperluan konsultasi medis.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Penggunaan Data</h2>
            <p>Data Anda digunakan semata-mata untuk menyediakan layanan konsultasi medis, menghubungkan Anda dengan dokter, dan mengirimkan informasi relevan tentang layanan kami.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Keamanan Data</h2>
            <p>Semua data medis dienkripsi menggunakan standar keamanan industri. Kami tidak menjual atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan eksplisit Anda.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Hubungi Kami</h2>
            <p>Untuk pertanyaan tentang kebijakan privasi, hubungi kami di privacy@nadihealth.id</p>
          </section>
        </div>
      </div>
    </div>
  );
}
