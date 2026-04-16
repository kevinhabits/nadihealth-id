# GLP-1 Pricing Data — NadiHealth.id Export

## Files

### `glp1-pricing-data.ts`
TypeScript data file with full typing. Drop into your Next.js app.

Contains:
- `pricingData` — All 18 pricing entries across 4 drugs × 4 platforms
- `wegovyTitrationSchedule` — Month-by-month titration costs
- `WEGOVY_6_MONTH_COST_RP` / `WEGOVY_12_MONTH_COST_RP` — Pre-calculated totals
- `globalComparison` — 11-country price comparison
- `platformSummary` — Which drugs are on which platforms
- `formatRupiah()` — Helper to format IDR currency
- `getBestPriceByDrug()` — Helper to find cheapest option per drug

### `glp1-pricing-data.json`
Same data as JSON (for API routes or CMS).

## Suggested page: `/harga-glp1`

Recommended sections:
1. Disclaimer banner (use `DISCLAIMER_ID` constant)
2. Drug comparison table (sortable by price, drug, platform)
3. Wegovy titration cost calculator
4. Platform availability matrix
5. Global price comparison chart
6. "Terakhir diperbarui: 16 April 2026" footer

## Update process
Monthly on the 1st — a reminder is set up. Regenerate this data by re-running the collection sweep.
