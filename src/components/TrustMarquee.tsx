"use client";

const trustItems = [
  "✓ Dokter Berlisensi IDI",
  "✓ Berbasis Bukti Ilmiah",
  "✓ Obat BPOM Resmi",
  "✓ Privasi Terjamin",
  "✓ Konsultasi dari Rumah",
  "✓ Resep Digital",
  "✓ Pengiriman ke Seluruh Indonesia",
  "✓ Dokter Berlisensi IDI",
  "✓ Berbasis Bukti Ilmiah",
  "✓ Obat BPOM Resmi",
  "✓ Privasi Terjamin",
  "✓ Konsultasi dari Rumah",
  "✓ Resep Digital",
  "✓ Pengiriman ke Seluruh Indonesia",
];

interface TrustMarqueeProps {
  className?: string;
  dark?: boolean;
}

export default function TrustMarquee({ className = "", dark = false }: TrustMarqueeProps) {
  return (
    <div
      className={`overflow-hidden ${dark ? "bg-primary-dark" : "bg-primary"} ${className}`}
    >
      <div className="marquee-container py-3">
        <div className="marquee-track">
          {trustItems.map((item, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 px-6 text-sm font-semibold whitespace-nowrap ${dark ? "text-white/90" : "text-white"}`}
            >
              {item}
              <span className="text-white/30 mx-2">•</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {trustItems.map((item, i) => (
            <span
              key={`dup-${i}`}
              className={`inline-flex items-center gap-2 px-6 text-sm font-semibold whitespace-nowrap ${dark ? "text-white/90" : "text-white"}`}
            >
              {item}
              <span className="text-white/30 mx-2">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
