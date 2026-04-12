"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Ozempic", href: "/ozempic" },
  { label: "GLP-1 & Diabetes", href: "/glp1-diabetes" },
  { label: "Turun Berat Badan", href: "/turun-berat-badan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Artikel", href: "/artikel" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
