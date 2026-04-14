"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Ozempic", href: "/ozempic" },
  { label: "GLP-1 & Diabetes", href: "/glp1-diabetes" },
  { label: "Turun Berat Badan", href: "/turun-berat-badan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

const resourceLinks = [
  { label: "Direktori Klinik", href: "/direktori-klinik", desc: "RS, klinik & apotek GLP-1 di Indonesia" },
  { label: "Panduan Peptida", href: "/panduan-peptida", desc: "Database 40+ peptida berbasis riset" },
  { label: "Alat Kesehatan", href: "/tools", desc: "Kalkulator BMI, biaya & jadwal dosis" },
  { label: "FAQ", href: "/faq", desc: "Pertanyaan yang sering diajukan" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-label="Nadi Health logo mark"
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
            <span className="text-xl font-bold text-text">
              nadi<span className="text-primary">health</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}

            {/* Sumber Daya Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors duration-150"
              >
                Sumber Daya
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${resourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-1 w-72 bg-white rounded-xl border border-border shadow-lg py-2 z-50">
                  {resourceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setResourcesOpen(false)}
                      className="block px-4 py-2.5 hover:bg-primary-light transition-colors"
                    >
                      <span className="block text-sm font-medium text-text">{item.label}</span>
                      <span className="block text-xs text-text-secondary mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link href="/quiz" className="btn-primary text-sm px-5 py-2.5">
              Cek Kesesuaian →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile: Sumber Daya section */}
              <div className="px-4 pt-3 pb-1">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Sumber Daya</span>
              </div>
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 px-4">
                <Link
                  href="/quiz"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center text-sm"
                >
                  Cek Kesesuaian →
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
