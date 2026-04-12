import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Cek Kesesuaian GLP-1 untuk Anda | Nadi Health",
  description:
    "Jawab kuesioner kesehatan singkat dan dapatkan rekomendasi personal dari dokter Nadi Health tentang apakah GLP-1 cocok untuk kondisi Anda.",
};

export default function QuizPage() {
  return <QuizClient />;
}
