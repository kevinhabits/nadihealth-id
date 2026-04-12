# Nadi Health ID — nadihealth.id

Conversion/product site for Nadi Health, an Indonesian-language GLP-1/weight loss/diabetes telehealth brand.

**Built with:** Next.js 14 · TypeScript · Tailwind CSS · Plus Jakarta Sans

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Font:** Plus Jakarta Sans via `next/font/google`
- **Deployment:** Vercel (auto-detected)

## Design System

| Token | Value |
|-------|-------|
| Primary | `#0E7490` (teal) |
| Primary Light | `#E0F4F8` |
| Primary Dark | `#0C5E75` |
| Background | `#FFFFFF` |
| Text | `#1A1A1A` |
| Text Secondary | `#6B7280` |
| Border | `#EEEEEE` |
| Error | `#DC2626` |
| Success | `#059669` |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, treatments, stats, how-it-works, testimonials, FAQ |
| `/ozempic` | Ozempic treatment page — BPOM, dosing, STEP trial data |
| `/glp1-diabetes` | GLP-1 & Diabetes overview — all available drugs, comparison |
| `/turun-berat-badan` | Weight loss — STEP trial data, qualification criteria |
| `/tentang-kami` | About — mission, medical advisory board, editorial standards |
| `/artikel` | Article grid (bridges to nadihealth.org blog) |
| `/faq` | Comprehensive FAQ with FAQPage JSON-LD schema |
| `/quiz` | Coming soon — lead capture form |
| `/kebijakan-privasi` | Privacy policy |
| `/syarat-penggunaan` | Terms of use |

## Components

```
src/components/
├── Navbar.tsx          — Sticky top nav with mobile hamburger
├── Footer.tsx          — Full footer with payment methods
├── TrustMarquee.tsx    — Scrolling trust signals ticker
├── FloatingWhatsApp.tsx — Fixed WhatsApp button (bottom-right)
├── StickyCtaBar.tsx    — Mobile sticky CTA bar (hidden on /quiz)
├── FaqAccordion.tsx    — Reusable accordion component
└── StatsSection.tsx    — Animated count-up statistics
```

## Data Files

```
src/data/
├── articles.ts  — 15 representative articles from nadihealth.org
└── faqs.ts      — 30+ FAQ items in 7 topic groups + homepage FAQs
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deployment

Deploy to Vercel:

```bash
npx vercel --prod
```

Or connect GitHub repo to Vercel — Next.js is auto-detected.

## SEO

- Metadata exported on every page
- Open Graph + Twitter Card meta tags
- Organization + MedicalBusiness JSON-LD in root layout
- FAQPage JSON-LD on `/faq`
- All content in Bahasa Indonesia (lang="id")

## Related

- **nadihealth.org** — Ghost blog (top-of-funnel content/SEO, 75+ Bahasa Indonesia articles)
- **nadihealth.id** — This site (conversion/product)

## License

Proprietary — Nadi Health © 2025
