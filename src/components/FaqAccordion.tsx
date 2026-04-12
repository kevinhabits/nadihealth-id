"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export default function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-border rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-text text-sm md:text-base pr-4">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center transition-transform duration-200 ${
                openIndex === i ? "rotate-45 bg-primary" : ""
              }`}
            >
              <svg
                className={`w-3 h-3 ${openIndex === i ? "text-white" : "text-primary"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 pt-0">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
