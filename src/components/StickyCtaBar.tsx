"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCtaBar() {
  const pathname = usePathname();

  // Hide on quiz page
  if (pathname === "/quiz") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        <div>
          <p className="text-xs font-semibold text-text">Mulai Hari Ini</p>
          <p className="text-xs text-text-secondary">Konsultasi dokter online</p>
        </div>
        <Link
          href="/quiz"
          className="btn-primary whitespace-nowrap text-sm px-5 py-2.5 flex-shrink-0"
        >
          Mulai Konsultasi Gratis →
        </Link>
      </div>
    </div>
  );
}
