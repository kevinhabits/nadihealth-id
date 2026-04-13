import type { Metadata } from "next";
import ArtikelClient from "./ArtikelClient";

export const metadata: Metadata = {
  title: "Artikel Kesehatan — GLP-1, Ozempic, Diabetes di Indonesia",
  description:
    "Kumpulan artikel edukasi kesehatan tentang GLP-1, Ozempic, diabetes, dan penurunan berat badan dalam Bahasa Indonesia. Ditulis oleh tim dokter Nadi Health.",
  keywords: ["artikel glp-1", "ozempic artikel", "diabetes edukasi indonesia", "kesehatan metabolik"],
};

export default function ArtikelPage() {
  return <ArtikelClient />;
}
