"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    value: "15",
    suffix: "%",
    label: "Rata-rata Penurunan BB",
    description: "dalam 68 minggu dengan semaglutide (STEP 1 trial)",
  },
  {
    value: "23.4",
    suffix: "%",
    label: "Prevalensi Obesitas Indonesia",
    description: "dari populasi dewasa berdasarkan data Riskesdas 2018",
  },
  {
    value: "153K",
    suffix: "+",
    label: "Pen Ozempic Diimpor",
    description: "ke Indonesia sepanjang tahun 2023",
  },
];

function CountUp({ value, suffix = "" }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericValue = parseFloat(value.replace("K", ""));
          const isDecimal = value.includes(".");
          const duration = 1800;
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, numericValue);
            if (value.includes("K")) {
              setDisplayValue(Math.round(current) + "K");
            } else if (isDecimal) {
              setDisplayValue(current.toFixed(1));
            } else {
              setDisplayValue(Math.round(current).toString());
            }
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {displayValue}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Data & Fakta GLP-1 di Indonesia</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Bukti ilmiah dan data nyata yang mendasari solusi kesehatan Nadi Health
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-card border border-border"
            >
              <CountUp value={stat.value} suffix={stat.suffix || ""} />
              <div className="mt-3 text-lg font-semibold text-text">{stat.label}</div>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
