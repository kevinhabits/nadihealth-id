// GLP-1 Pricing Database for NadiHealth.id
// Last updated: 2026-04-16
// Source: Halodoc, K24Klik, Alodokter, Farmaku

export interface PricingEntry {
  drugBrand: string;
  activeIngredient: string;
  dose: string;
  form: string;
  indication: "diabetes" | "weight_management" | "both" | "program";
  pharmacySource: string;
  pharmacyUrl: string;
  priceRp: number;
  priceUnit: string;
  dosesPerUnit: number | null;
  doseFrequency: "weekly" | "daily" | "monthly";
  costPerDoseRp: number | null;
  monthlyCostRp: number | null;
  availabilityStatus: "tersedia" | "stok_habis" | "tidak_tersedia";
  prescriptionRequired: boolean;
  lastVerified: string;
  notes: string;
}

export interface TitrationStep {
  month: number | string;
  dose: string;
  pricePerPenRp: number;
  monthlyCostRp: number;
}

export interface GlobalComparison {
  country: string;
  drug: string;
  priceUsd: number;
  priceLocal: string;
  notes: string;
}

export interface PlatformSummary {
  name: string;
  url: string;
  drugsAvailable: string[];
  drugsNotFound: string[];
  notes: string;
}

export const DISCLAIMER_ID = `PERINGATAN PENTING: Informasi harga dalam halaman ini bersifat informatif dan dapat berubah sewaktu-waktu tanpa pemberitahuan. Harga yang tercantum dikumpulkan dari platform apotek online resmi pada tanggal verifikasi terakhir. Semua obat GLP-1 adalah obat resep (obat keras) yang WAJIB dikonsultasikan dan diresepkan oleh dokter. JANGAN membeli atau menggunakan obat GLP-1 tanpa resep dan pengawasan dokter. NadiHealth tidak menjual obat, tidak memberikan resep, dan tidak bertanggung jawab atas keputusan medis. Selalu konsultasikan dengan dokter Anda sebelum memulai, mengubah, atau menghentikan pengobatan apa pun. Dalam keadaan darurat medis, segera hubungi 119 atau kunjungi IGD terdekat.`;

export const LAST_UPDATED = "2026-04-16";
export const EXCHANGE_RATE_IDR_USD = 16500;

// ============================================================
// CORE PRICING DATA
// ============================================================

export const pricingData: PricingEntry[] = [
  // === OZEMPIC (Semaglutide - Diabetes) ===
  {
    drugBrand: "Ozempic",
    activeIngredient: "Semaglutide",
    dose: "0.25mg / 0.5mg",
    form: "Prefilled Pen 1.5ml",
    indication: "diabetes",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/ozempic",
    priceRp: 3057100,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 764275,
    monthlyCostRp: 3310311,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Pen berisi 4 dosis mingguan. Dosis titrasi awal.",
  },
  {
    drugBrand: "Ozempic",
    activeIngredient: "Semaglutide",
    dose: "0.25mg / 0.5mg",
    form: "Prefilled Pen 1.5ml",
    indication: "diabetes",
    pharmacySource: "K24Klik",
    pharmacyUrl: "https://www.k24klik.com/cari?key=ozempic",
    priceRp: 3100942,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 775236,
    monthlyCostRp: 3356870,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Jaringan apotek terbesar (400+ lokasi).",
  },
  {
    drugBrand: "Ozempic",
    activeIngredient: "Semaglutide",
    dose: "0.25mg / 0.5mg",
    form: "Prefilled Pen 1.5ml",
    indication: "diabetes",
    pharmacySource: "Alodokter",
    pharmacyUrl: "https://www.alodokter.com/aloshop/search/ozempic",
    priceRp: 3100942,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 775236,
    monthlyCostRp: 3356870,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Memerlukan Chat Dokter. Tiba dalam 1 jam.",
  },
  {
    drugBrand: "Ozempic",
    activeIngredient: "Semaglutide",
    dose: "0.25mg / 0.5mg",
    form: "Prefilled Pen 1.5ml",
    indication: "diabetes",
    pharmacySource: "Farmaku",
    pharmacyUrl: "https://www.farmaku.com/search?q=ozempic",
    priceRp: 2960000,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 740000,
    monthlyCostRp: 3204200,
    availabilityStatus: "stok_habis",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Harga termurah tapi stok habis (April 2026).",
  },
  {
    drugBrand: "Ozempic",
    activeIngredient: "Semaglutide",
    dose: "1mg",
    form: "Prefilled Pen 3ml",
    indication: "diabetes",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/ozempic",
    priceRp: 2751400,
    priceUnit: "Per Pen (harga terendah)",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 687850,
    monthlyCostRp: 2978390,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Harga berkisar Rp2.751.400 - Rp3.057.100.",
  },
  {
    drugBrand: "Ozempic",
    activeIngredient: "Semaglutide",
    dose: "1mg",
    form: "Prefilled Pen 3ml",
    indication: "diabetes",
    pharmacySource: "K24Klik",
    pharmacyUrl: "https://www.k24klik.com/cari?key=ozempic",
    priceRp: 3100942,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 775236,
    monthlyCostRp: 3356870,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "",
  },

  // === WEGOVY (Semaglutide - Weight Management) ===
  {
    drugBrand: "Wegovy",
    activeIngredient: "Semaglutide",
    dose: "0.25mg",
    form: "Prefilled Pen 1.5ml",
    indication: "weight_management",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/wegovy",
    priceRp: 3139100,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 784775,
    monthlyCostRp: 3398076,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Dosis titrasi bulan ke-1.",
  },
  {
    drugBrand: "Wegovy",
    activeIngredient: "Semaglutide",
    dose: "0.5mg",
    form: "Prefilled Pen 1.5ml",
    indication: "weight_management",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/wegovy",
    priceRp: 3139100,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 784775,
    monthlyCostRp: 3398076,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Dosis titrasi bulan ke-2.",
  },
  {
    drugBrand: "Wegovy",
    activeIngredient: "Semaglutide",
    dose: "1mg",
    form: "Prefilled Pen 3ml",
    indication: "weight_management",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/wegovy",
    priceRp: 3139100,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 784775,
    monthlyCostRp: 3398076,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Dosis titrasi bulan ke-3.",
  },
  {
    drugBrand: "Wegovy",
    activeIngredient: "Semaglutide",
    dose: "1.7mg",
    form: "Prefilled Pen 3ml",
    indication: "weight_management",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/wegovy",
    priceRp: 4802800,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 1200700,
    monthlyCostRp: 5195031,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Dosis titrasi bulan ke-4.",
  },
  {
    drugBrand: "Wegovy",
    activeIngredient: "Semaglutide",
    dose: "2.4mg",
    form: "Prefilled Pen 3ml",
    indication: "weight_management",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/wegovy",
    priceRp: 5574900,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 1393725,
    monthlyCostRp: 6034829,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Dosis pemeliharaan (maintenance). Dosis tertinggi.",
  },
  {
    drugBrand: "Wegovy",
    activeIngredient: "Semaglutide",
    dose: "0.25mg",
    form: "Prefilled Pen 1.5ml",
    indication: "weight_management",
    pharmacySource: "Farmaku",
    pharmacyUrl: "https://www.farmaku.com/search?q=wegovy",
    priceRp: 3139100,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 784775,
    monthlyCostRp: 3398076,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "",
  },
  {
    drugBrand: "Wegovy",
    activeIngredient: "Semaglutide",
    dose: "2.4mg",
    form: "Prefilled Pen 3ml",
    indication: "weight_management",
    pharmacySource: "Farmaku",
    pharmacyUrl: "https://www.farmaku.com/search?q=wegovy",
    priceRp: 5574900,
    priceUnit: "Per Pen",
    dosesPerUnit: 4,
    doseFrequency: "weekly",
    costPerDoseRp: 1393725,
    monthlyCostRp: 6034829,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "",
  },

  // === VICTOZA (Liraglutide - Diabetes) ===
  {
    drugBrand: "Victoza",
    activeIngredient: "Liraglutide",
    dose: "6mg/ml",
    form: "Prefilled Pen 3ml",
    indication: "diabetes",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/victoza",
    priceRp: 1232500,
    priceUnit: "Per Pen",
    dosesPerUnit: 15, // ~15 daily doses at 1.2mg maintenance
    doseFrequency: "daily",
    costPerDoseRp: 82167,
    monthlyCostRp: 2465000, // ~2 pens per month at 1.2mg
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Injeksi harian. 1 pen = 18mg total (cukup 10-30 hari tergantung dosis).",
  },

  // === TRULICITY (Dulaglutide - Diabetes) ===
  {
    drugBrand: "Trulicity",
    activeIngredient: "Dulaglutide",
    dose: "0.75mg / 0.5ml",
    form: "Prefilled Pen",
    indication: "diabetes",
    pharmacySource: "Halodoc",
    pharmacyUrl: "https://www.halodoc.com/obat-dan-vitamin/search/trulicity",
    priceRp: 580650, // midpoint of 522600-638700
    priceUnit: "Per Pen",
    dosesPerUnit: 1,
    doseFrequency: "weekly",
    costPerDoseRp: 580650,
    monthlyCostRp: 2514214,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Harga Rp522.600 - Rp638.700/pen. 1 pen = 1 dosis. GLP-1 termurah per pen.",
  },

  // === HALOFIT PROGRAMS ===
  {
    drugBrand: "Halofit Advanced",
    activeIngredient: "Obat oral (bukan GLP-1 injeksi)",
    dose: "Sesuai resep dokter",
    form: "Program 30 Hari",
    indication: "program",
    pharmacySource: "Halodoc (Halofit)",
    pharmacyUrl: "https://www.halodoc.com/dc/halofit/weight_loss",
    priceRp: 750000,
    priceUnit: "Per Bulan",
    dosesPerUnit: null,
    doseFrequency: "monthly",
    costPerDoseRp: null,
    monthlyCostRp: 750000,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Konsultasi dokter + dietisien + meal plan + obat oral. Tanpa injeksi GLP-1.",
  },
  {
    drugBrand: "Halofit Transform",
    activeIngredient: "Semaglutide (Wegovy)",
    dose: "0.25mg - 2.4mg (titrasi)",
    form: "Program 30 Hari + Injeksi GLP-1",
    indication: "program",
    pharmacySource: "Halodoc (Halofit)",
    pharmacyUrl: "https://www.halodoc.com/dc/halofit/weight_loss",
    priceRp: 3300000,
    priceUnit: "Per Bulan (mulai dari)",
    dosesPerUnit: 4,
    doseFrequency: "monthly",
    costPerDoseRp: null,
    monthlyCostRp: 3300000,
    availabilityStatus: "tersedia",
    prescriptionRequired: true,
    lastVerified: "2026-04-16",
    notes: "Konsultasi + dietisien + meal plan + 4 pen GLP-1/bulan. Harga naik dengan dosis.",
  },
];

// ============================================================
// WEGOVY TITRATION SCHEDULE
// ============================================================

export const wegovyTitrationSchedule: TitrationStep[] = [
  { month: 1, dose: "0.25mg", pricePerPenRp: 3139100, monthlyCostRp: 3139100 },
  { month: 2, dose: "0.5mg", pricePerPenRp: 3139100, monthlyCostRp: 3139100 },
  { month: 3, dose: "1mg", pricePerPenRp: 3139100, monthlyCostRp: 3139100 },
  { month: 4, dose: "1.7mg", pricePerPenRp: 4802800, monthlyCostRp: 4802800 },
  { month: "5+", dose: "2.4mg (pemeliharaan)", pricePerPenRp: 5574900, monthlyCostRp: 5574900 },
];

export const WEGOVY_6_MONTH_COST_RP = 25369900; // 4 months titration + 2 months maintenance
export const WEGOVY_12_MONTH_COST_RP = 58819300; // 4 months titration + 8 months maintenance

// ============================================================
// GLOBAL PRICE COMPARISON
// ============================================================

export const globalComparison: GlobalComparison[] = [
  { country: "Indonesia", drug: "Ozempic 1mg (4 dosis)", priceUsd: 179.39, priceLocal: "Rp2.960.000", notes: "Harga termurah (Farmaku)" },
  { country: "Indonesia", drug: "Wegovy 2.4mg (4 dosis)", priceUsd: 337.87, priceLocal: "Rp5.574.900", notes: "Dosis pemeliharaan" },
  { country: "Amerika Serikat", drug: "Ozempic 1mg (4 dosis)", priceUsd: 936, priceLocal: "$936", notes: "Tanpa asuransi" },
  { country: "Amerika Serikat", drug: "Wegovy 2.4mg (4 dosis)", priceUsd: 1349, priceLocal: "$1,349", notes: "Tanpa asuransi" },
  { country: "Singapura", drug: "Ozempic 1mg", priceUsd: 1121.14, priceLocal: "SGD 1,515", notes: "DoctorOnCall" },
  { country: "India", drug: "Semaglutide (generik)", priceUsd: 14, priceLocal: "~$14", notes: "Generik baru (Maret 2026)" },
  { country: "India", drug: "Wegovy (branded)", priceUsd: 180, priceLocal: "$180", notes: "Novo Nordisk" },
  { country: "Kanada", drug: "Ozempic 1mg", priceUsd: 155, priceLocal: "CAD 155", notes: "" },
  { country: "Jerman", drug: "Wegovy 2.4mg", priceUsd: 328, priceLocal: "€296", notes: "" },
  { country: "Inggris", drug: "Wegovy 2.4mg", priceUsd: 82, priceLocal: "£65", notes: "Harga subsidi NHS" },
  { country: "Prancis", drug: "Ozempic 1mg", priceUsd: 71, priceLocal: "€64", notes: "Harga pemerintah" },
];

// ============================================================
// PLATFORM AVAILABILITY SUMMARY
// ============================================================

export const platformSummary: PlatformSummary[] = [
  {
    name: "Halodoc",
    url: "https://www.halodoc.com",
    drugsAvailable: ["Ozempic", "Wegovy", "Victoza", "Trulicity"],
    drugsNotFound: ["Saxenda", "Rybelsus"],
    notes: "Platform terlengkap. Juga menawarkan program Halofit.",
  },
  {
    name: "K24Klik (Apotek K-24)",
    url: "https://www.k24klik.com",
    drugsAvailable: ["Ozempic"],
    drugsNotFound: ["Wegovy", "Victoza", "Trulicity", "Saxenda", "Rybelsus"],
    notes: "Jaringan apotek fisik terbesar (400+ lokasi).",
  },
  {
    name: "Alodokter (AloShop)",
    url: "https://www.alodokter.com",
    drugsAvailable: ["Ozempic"],
    drugsNotFound: ["Wegovy", "Victoza", "Trulicity", "Saxenda", "Rybelsus"],
    notes: "Memerlukan Chat Dokter. Pengiriman cepat (1 jam).",
  },
  {
    name: "Farmaku",
    url: "https://www.farmaku.com",
    drugsAvailable: ["Wegovy", "Ozempic (stok habis)"],
    drugsNotFound: ["Victoza", "Trulicity", "Saxenda", "Rybelsus"],
    notes: "Ozempic terdaftar tapi stok habis.",
  },
  {
    name: "GoApotik",
    url: "https://www.goapotik.com",
    drugsAvailable: [],
    drugsNotFound: ["Semua GLP-1"],
    notes: "Tidak ada obat GLP-1 yang ditemukan.",
  },
];

// ============================================================
// HELPER: Format Rupiah
// ============================================================

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// ============================================================
// HELPER: Get unique drugs with best prices
// ============================================================

export function getBestPriceByDrug(): Record<string, PricingEntry> {
  const best: Record<string, PricingEntry> = {};
  for (const entry of pricingData) {
    if (!entry.priceRp || entry.availabilityStatus !== "tersedia") continue;
    const key = `${entry.drugBrand}-${entry.dose}`;
    if (!best[key] || entry.priceRp < best[key].priceRp) {
      best[key] = entry;
    }
  }
  return best;
}
