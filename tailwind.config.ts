import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7490",
          light: "#E0F4F8",
          dark: "#0C5E75",
          50: "#F0FAFD",
          100: "#E0F4F8",
          200: "#BAE8F3",
          300: "#7DD5E8",
          400: "#38BFDB",
          500: "#0E7490",
          600: "#0C5E75",
          700: "#0A4D61",
          800: "#08384A",
          900: "#062630",
        },
        text: {
          DEFAULT: "#1A1A1A",
          secondary: "#6B7280",
          light: "#9CA3AF",
        },
        border: "#EEEEEE",
        success: "#059669",
        error: "#DC2626",
        warning: "#D97706",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 4px 12px 0 rgba(14, 116, 144, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "btn": "0 1px 2px 0 rgba(14, 116, 144, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
