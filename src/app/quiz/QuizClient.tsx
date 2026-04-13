"use client";

import { useState, useCallback, useRef } from "react";

// ──────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────
type Screen =
  | "landing"
  | "q1" | "q2" | "q3" | "q4" | "q5" | "q6"
  | "q7" | "q8" | "q9" | "interstitial"
  | "q10" | "q11" | "q12" | "loading" | "result";

interface Answers {
  gender?: string;
  age?: string;
  goal?: string;
  height?: number;
  weight?: number;
  bmi?: number;
  bmiCategory?: string;
  diabetes?: string;
  medications?: string[];
  methods?: string[];
  impact?: string[];
  frustration?: string;
  interest?: string;
  consult?: string;
  name?: string;
  phone?: string;
  email?: string;
}

// ──────────────────────────────────────────────
// CONSTANTS
// ──────────────────────────────────────────────
const QUESTION_SCREENS: Screen[] = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12"];

// ──────────────────────────────────────────────
// SMALL REUSABLE COMPONENTS
// ──────────────────────────────────────────────

function FunFact({ header, text, source, className = "" }: { header: string; text: string; source?: string; className?: string }) {
  return (
    <div className={`border-l-[3px] border-primary bg-primary-light/55 px-4 py-3 rounded-lg ${className}`}>
      <div className="text-xs font-semibold text-primary mb-1.5 flex items-center gap-1">{header}</div>
      <p className="text-[13px] text-text-secondary leading-[1.55] m-0">{text}</p>
      {source && <div className="text-[11px] text-text-secondary italic mt-1.5 opacity-80">{source}</div>}
    </div>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-sm font-medium text-text-secondary mb-6 py-1 hover:text-text transition-colors"
    >
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Kembali
    </button>
  );
}

function TapCard({
  icon, label, onClick, selected = false, column = false,
}: { icon: string; label: string; onClick: () => void; selected?: boolean; column?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all duration-150 text-[15px] font-medium text-text text-left w-full
        ${column ? "flex-col text-center p-6" : ""}
        ${selected
          ? "border-primary bg-primary-light shadow-[0_0_0_1px_#0E7490]"
          : "border-border bg-white hover:border-primary hover:bg-primary-light hover:-translate-y-px hover:shadow-sm"
        }`}
    >
      <span className={`flex items-center justify-center text-xl bg-primary-light rounded-lg flex-shrink-0 transition-colors
        ${column ? "w-14 h-14 text-[28px] rounded-full mx-auto" : "w-10 h-10"}
        ${selected ? "bg-primary" : ""}`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

function MultiCard({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-[14px] border-2 rounded-lg cursor-pointer transition-colors text-sm font-medium text-text w-full text-left
        ${selected ? "border-primary bg-primary-light" : "border-border bg-white hover:border-gray-300"}`}
    >
      <span className={`w-[22px] h-[22px] rounded flex items-center justify-center flex-shrink-0 text-[13px] transition-all border-2
        ${selected ? "bg-primary border-primary text-white" : "border-gray-300 text-transparent"}`}>
        ✓
      </span>
      <span>{label}</span>
    </button>
  );
}

function CtaPrimary({ children, onClick, disabled = false, className = "" }: {
  children: React.ReactNode; onClick?: () => void; disabled?: boolean; className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 bg-primary text-white text-base font-semibold px-8 py-4 rounded-full border-none w-full max-w-xs
        transition-all duration-150 hover:bg-[#0C5E75] hover:-translate-y-px hover:shadow-md
        active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${className}`}
    >
      {children}
    </button>
  );
}

function ProgressBar({ screen }: { screen: Screen }) {
  const qIdx = QUESTION_SCREENS.indexOf(screen);
  const isInterstitial = screen === "interstitial";
  const showBar = qIdx >= 0 || isInterstitial;

  let pct = 0;
  let label = "";
  if (qIdx >= 0) {
    pct = ((qIdx + 1) / 12) * 100;
    label = `Langkah ${qIdx + 1} dari 12`;
  } else if (isInterstitial) {
    pct = 75;
    label = "";
  }

  if (!showBar) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="h-[4px] bg-border w-full">
        <div
          className="h-full bg-primary transition-[width] duration-[400ms] rounded-r-[2px]"
          style={{ width: `${pct}%` }}
        />
      </div>
      {label && (
        <div className="max-w-[480px] mx-auto px-5 py-2 text-xs font-medium text-text-secondary">
          {label}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────
// BMI HELPERS
// ──────────────────────────────────────────────
function calcBMIData(height: number, weight: number): { bmi: number; category: string; cls: string } | null {
  if (height < 100 || height > 250 || weight < 30 || weight > 300) return null;
  const bmi = Math.round((weight / ((height / 100) ** 2)) * 10) / 10;
  let category: string;
  let cls: string;
  if (bmi < 18.5) { category = "Berat Badan Kurang"; cls = "underweight"; }
  else if (bmi < 23) { category = "Normal"; cls = "normal"; }
  else if (bmi < 27.5) { category = "Overweight"; cls = "overweight"; }
  else { category = "Obesitas"; cls = "obese"; }
  return { bmi, category, cls };
}

function BMIBadge({ cls, category }: { cls: string; category: string }) {
  const colors: Record<string, string> = {
    underweight: "bg-blue-100 text-blue-800",
    normal: "bg-green-100 text-green-800",
    overweight: "bg-yellow-100 text-yellow-800",
    obese: "bg-red-100 text-red-800",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[13px] font-semibold mt-2 ${colors[cls] || colors.normal}`}>
      {category}
    </span>
  );
}

// ──────────────────────────────────────────────
// MAIN QUIZ COMPONENT
// ──────────────────────────────────────────────
export default function QuizClient() {
  const [current, setCurrent] = useState<Screen>("landing");
  const [historyStack, setHistoryStack] = useState<Screen[]>(["landing"]);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animKey, setAnimKey] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  // Multi-select state
  const [selectedMeds, setSelectedMeds] = useState<Set<string>>(new Set());
  const [selectedMethods, setSelectedMethods] = useState<Set<string>>(new Set());
  const [selectedImpact, setSelectedImpact] = useState<Set<string>>(new Set());

  // Q4 BMI state
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const bmiData = height && weight ? calcBMIData(Number(height), Number(weight)) : null;

  // Q12 form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  // Q5 expandable
  const [expandWhy, setExpandWhy] = useState(false);

  // Loading animation
  const [loadStep1, setLoadStep1] = useState(false);
  const [loadStep2, setLoadStep2] = useState(false);
  const [loadStep3, setLoadStep3] = useState(false);
  const [loadStep1Done, setLoadStep1Done] = useState(false);
  const [loadStep2Done, setLoadStep2Done] = useState(false);
  const [loadStep3Done, setLoadStep3Done] = useState(false);
  const loadTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const goToScreen = useCallback((id: Screen, isBack = false) => {
    setDirection(isBack ? "back" : "forward");
    setAnimKey((k) => k + 1);
    setCurrent(id);
    if (!isBack) {
      setHistoryStack((h) => [...h, id]);
    }
    window.scrollTo(0, 0);
  }, []);

  const goBack = useCallback(() => {
    if (historyStack.length > 1) {
      const newHistory = [...historyStack];
      newHistory.pop();
      const prev = newHistory[newHistory.length - 1];
      setHistoryStack(newHistory);
      goToScreen(prev, true);
    }
  }, [historyStack, goToScreen]);

  const autoAdvance = useCallback((next: Screen) => {
    setTimeout(() => goToScreen(next), 250);
  }, [goToScreen]);

  const setAnswer = useCallback((key: keyof Answers, value: string | number) => {
    setAnswers((a) => ({ ...a, [key]: value }));
  }, []);

  // Toggle exclusive multi-select
  const toggleMulti = (
    value: string,
    isExclusive: boolean,
    set: Set<string>,
    setter: React.Dispatch<React.SetStateAction<Set<string>>>
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      if (isExclusive) {
        if (next.has(value)) { next.clear(); } else { next.clear(); next.add(value); }
      } else {
        // Remove exclusive "none" option if selecting something else
        next.delete("none");
        if (next.has(value)) { next.delete(value); } else { next.add(value); }
      }
      return next;
    });
  };

  // Run loading animation and then show result
  const runLoadingAnimation = useCallback(() => {
    // Clear any previous timers
    loadTimersRef.current.forEach(clearTimeout);
    loadTimersRef.current = [];
    setLoadStep1(false); setLoadStep2(false); setLoadStep3(false);
    setLoadStep1Done(false); setLoadStep2Done(false); setLoadStep3Done(false);

    const t1 = setTimeout(() => setLoadStep1(true), 800);
    const t2 = setTimeout(() => setLoadStep1Done(true), 1300);
    const t3 = setTimeout(() => setLoadStep2(true), 1600);
    const t4 = setTimeout(() => setLoadStep2Done(true), 2100);
    const t5 = setTimeout(() => setLoadStep3(true), 2400);
    const t6 = setTimeout(() => setLoadStep3Done(true), 2900);
    const t7 = setTimeout(() => goToScreen("result"), 4000);
    loadTimersRef.current = [t1, t2, t3, t4, t5, t6, t7];
  }, [goToScreen]);

  const submitForm = useCallback(() => {
    const validName = name.trim();
    const validPhone = phone.trim();
    let valid = true;

    setNameError(false);
    setPhoneError(false);

    if (!validName) { setNameError(true); valid = false; }
    if (!validPhone || validPhone.length < 8) { setPhoneError(true); valid = false; }

    if (!valid) return;

    setAnswers((a) => ({
      ...a,
      name: validName,
      phone: "+62" + validPhone,
      email: email.trim(),
      medications: Array.from(selectedMeds),
      methods: Array.from(selectedMethods),
      impact: Array.from(selectedImpact),
    }));

    goToScreen("loading");
    setTimeout(runLoadingAnimation, 100);
  }, [name, phone, email, selectedMeds, selectedMethods, selectedImpact, goToScreen, runLoadingAnimation]);

  // Determine result variant
  const resultVariant = (): "weight_loss" | "diabetes" | "informational" => {
    const goal = answers.goal;
    const bmi = answers.bmi || (bmiData?.bmi);
    if (goal === "diabetes") return "diabetes";
    if (goal === "weight_loss" || goal === "both") {
      if (!bmi || bmi >= 23) return "weight_loss";
    }
    return "informational";
  };

  const displayBMI = answers.bmi || bmiData?.bmi;
  const displayBMICategory = answers.bmiCategory || bmiData?.category || "Normal";
  const displayBMICls = (() => {
    const b = displayBMI;
    if (!b) return "normal";
    if (b < 18.5) return "underweight";
    if (b < 23) return "normal";
    if (b < 27.5) return "overweight";
    return "obese";
  })();

  // Animation classes
  const slideClass = direction === "forward"
    ? "animate-quiz-slide-in"
    : "animate-quiz-slide-in-left";

  return (
    <div className="quiz-funnel-root min-h-dvh bg-white overflow-x-hidden">
      <style>{`
        @keyframes quizSlideIn {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes quizSlideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes quizFadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes quizSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes quizPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        .animate-quiz-slide-in {
          animation: quizSlideIn 350ms cubic-bezier(0.16,1,0.3,1) both;
        }
        .animate-quiz-slide-in-left {
          animation: quizSlideInLeft 350ms cubic-bezier(0.16,1,0.3,1) both;
        }
        .quiz-fade-in { animation: quizFadeInUp 400ms cubic-bezier(0.16,1,0.3,1) both; }
        .quiz-delay-1 { animation-delay: 100ms; }
        .quiz-delay-2 { animation-delay: 200ms; }
        .quiz-delay-3 { animation-delay: 300ms; }
        .quiz-delay-4 { animation-delay: 400ms; }
        .quiz-spinner {
          width: 48px; height: 48px;
          border: 3px solid #E0F4F8;
          border-top-color: #0E7490;
          border-radius: 50%;
          animation: quizSpin 0.8s linear infinite;
          margin: 0 auto 24px;
        }
        .quiz-hero-illustration {
          width: 200px; height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E0F4F8 0%, #b2ebf2 50%, #E0F4F8 100%);
          margin: 0 auto 32px;
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          font-size: 64px;
        }
        .quiz-hero-illustration::before {
          content: '';
          position: absolute;
          width: 120px; height: 120px;
          border-radius: 50%;
          background: rgba(14,116,144,0.1);
          animation: quizPulse 3s ease-in-out infinite;
        }
        .quiz-loading-step {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 0; font-size: 14px;
          color: #6B7280;
          opacity: 0; transform: translateY(8px);
          transition: opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1), color 300ms;
        }
        .quiz-loading-step.visible { opacity: 1; transform: translateY(0); }
        .quiz-loading-step.done { color: #059669; }
        .quiz-step-check {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #EEEEEE; font-size: 12px; flex-shrink: 0;
          transition: background 300ms, color 300ms;
        }
        .quiz-loading-step.done .quiz-step-check { background: #059669; color: #fff; }
        .quiz-bmi-display {
          margin-top: 16px; padding: 16px; background: #f9fafb;
          border-radius: 8px; text-align: center;
          opacity: 0; transform: translateY(8px);
          transition: opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1);
        }
        .quiz-bmi-display.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Progress bar */}
      <ProgressBar screen={current} />

      {/* ── SCREEN: LANDING ── */}
      {current === "landing" && (
        <div key={`landing-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-12 flex flex-col items-center text-center`}>
          <div className="text-[20px] font-bold text-primary tracking-[-0.5px] mb-6">nadihealth</div>
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {[["🏥","Dokter Berlisensi IDI"],["🔒","Data Anda Dilindungi"],["✓","Gratis, Tanpa Komitmen"]].map(([icon, label]) => (
              <span key={label} className="flex items-center gap-1 text-[11px] font-medium text-[#0C5E75] bg-primary-light px-[10px] py-[5px] rounded-full whitespace-nowrap">
                <span className="text-xs">{icon}</span> {label}
              </span>
            ))}
          </div>
          <h1 className="text-[clamp(24px,6vw,32px)] font-bold leading-[1.2] text-text mb-3">
            Apakah Terapi GLP-1 Cocok untuk Anda?
          </h1>
          <p className="text-[15px] text-text-secondary mb-8 max-w-xs">
            Penilaian kesehatan 2 menit oleh tim medis Nadi Health
          </p>
          <div className="quiz-hero-illustration">⚕️</div>
          <CtaPrimary onClick={() => goToScreen("q1")}>Mulai Penilaian →</CtaPrimary>
          <p className="mt-4 text-[13px] text-text-secondary">Dipercaya oleh 2.500+ orang Indonesia</p>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Indonesia memiliki jumlah penderita diabetes terbanyak ke-5 di dunia, dengan 20,4 juta orang dewasa — dan 73% di antaranya belum terdiagnosis."
            source="IDF Diabetes Atlas 2024; Riskesdas 2018"
            className="mt-6 text-left max-w-[380px] w-full"
          />
        </div>
      )}

      {/* ── SCREEN: Q1 — GENDER ── */}
      {current === "q1" && (
        <div key={`q1-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Jenis kelamin Anda?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 1 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex gap-3">
            <TapCard icon="👨" label="Pria" column onClick={() => { setAnswer("gender","Pria"); autoAdvance("q2"); }} />
            <TapCard icon="👩" label="Wanita" column onClick={() => { setAnswer("gender","Wanita"); autoAdvance("q2"); }} />
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Prevalensi obesitas pada wanita Indonesia (32,9%) hampir 3x lebih tinggi dari pria (11,3%). Namun, tingkat diabetes hampir sama: wanita 13,0% vs pria 13,4%."
            source="Kemenkes RI, Riskesdas 2018; BMJ Open 2019"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
        </div>
      )}

      {/* ── SCREEN: Q2 — AGE ── */}
      {current === "q2" && (
        <div key={`q2-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Berapa usia Anda?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 2 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[["🔹","18–29 tahun","18-29"],["🔹","30–39 tahun","30-39"],["🔹","40–49 tahun","40-49"],["🔹","50–59 tahun","50-59"],["🔹","60+ tahun","60+"]].map(([icon, label, val]) => (
              <TapCard key={val} icon={icon} label={label} onClick={() => { setAnswer("age", val); autoAdvance("q3"); }} />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="80% kasus diabetes di Indonesia terjadi pada usia di atas 35 tahun — namun 98,4% penderita diabetes usia 15-29 tahun tidak menyadari kondisinya."
            source="Riskesdas 2018; J ASEAN Fed Endocrine Soc 2025"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
        </div>
      )}

      {/* ── SCREEN: Q3 — GOAL ── */}
      {current === "q3" && (
        <div key={`q3-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Apa tujuan utama kesehatan Anda?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 3 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[
              ["🎯","Menurunkan berat badan","weight_loss"],
              ["💉","Mengelola diabetes tipe 2","diabetes"],
              ["✅","Keduanya","both"],
              ["❓","Belum yakin, ingin tahu lebih lanjut","unsure"],
            ].map(([icon, label, val]) => (
              <TapCard key={val} icon={icon} label={label} onClick={() => { setAnswer("goal", val); autoAdvance("q4"); }} />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Dalam uji klinis STEP 1, pasien yang menggunakan semaglutide (Ozempic) kehilangan rata-rata 14,9% berat badan — dan 86,4% berhasil menurunkan minimal 5%."
            source="NEJM 2021, STEP 1 Clinical Trial"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
        </div>
      )}

      {/* ── SCREEN: Q4 — HEIGHT & WEIGHT (BMI) ── */}
      {current === "q4" && (
        <div key={`q4-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Masukkan tinggi dan berat badan Anda</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 4 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-text mb-1.5">Tinggi (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="165"
                  min={100} max={250}
                  inputMode="numeric"
                  className="w-full px-4 py-[14px] border-2 border-border rounded-lg text-base bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,116,144,0.1)] transition-all [-webkit-appearance:none] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-text mb-1.5">Berat (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  min={30} max={300}
                  inputMode="numeric"
                  className="w-full px-4 py-[14px] border-2 border-border rounded-lg text-base bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,116,144,0.1)] transition-all [-webkit-appearance:none] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
            <div className={`quiz-bmi-display ${bmiData ? "visible" : ""}`}>
              <div className="text-xs text-text-secondary mb-1">BMI Anda</div>
              <div className="text-[32px] font-bold text-text leading-none">{bmiData?.bmi ?? "—"}</div>
              {bmiData && <BMIBadge cls={bmiData.cls} category={bmiData.category} />}
              <div className="text-[11px] text-text-secondary mt-2">Menggunakan standar BMI Asia (WHO Asia-Pasifik)</div>
            </div>
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Standar BMI untuk orang Asia berbeda dari standar Barat. WHO Asia-Pasifik menetapkan overweight mulai BMI ≥23 (bukan ≥25), karena risiko kesehatan sudah meningkat pada BMI yang lebih rendah untuk populasi Asia."
            source="WHO Expert Consultation, Asia-Pacific BMI Classification"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
          <div className="quiz-fade-in quiz-delay-4 mt-6">
            <CtaPrimary
              disabled={!bmiData}
              onClick={() => {
                if (bmiData) {
                  setAnswers((a) => ({ ...a, height: Number(height), weight: Number(weight), bmi: bmiData.bmi, bmiCategory: bmiData.category }));
                  goToScreen("q5");
                }
              }}
            >
              Lanjutkan →
            </CtaPrimary>
          </div>
        </div>
      )}

      {/* ── SCREEN: Q5 — DIABETES STATUS ── */}
      {current === "q5" && (
        <div key={`q5-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Apakah Anda pernah didiagnosis diabetes?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 5 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[["💉","Ya, diabetes tipe 2","type2"],["⚠️","Ya, prediabetes","prediabetes"],["❌","Tidak","no"],["🤷","Tidak yakin","unsure"]].map(([icon,label,val]) => (
              <TapCard key={val} icon={icon} label={label} onClick={() => { setAnswer("diabetes", val); autoAdvance("q6"); }} />
            ))}
          </div>
          {/* Expandable */}
          <div className="quiz-fade-in quiz-delay-3 mt-5 border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandWhy((v) => !v)}
              className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold text-primary bg-primary-light cursor-pointer border-none"
            >
              Mengapa kami bertanya?
              <svg className={`w-4 h-4 transition-transform duration-200 ${expandWhy ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {expandWhy && (
              <div className="px-4 py-3 text-[13px] text-text-secondary leading-[1.6]">
                Obat GLP-1 awalnya dikembangkan untuk diabetes tipe 2 dan memiliki manfaat ganda untuk gula darah dan berat badan.
              </div>
            )}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Indonesia menghabiskan $3,9 miliar per tahun untuk perawatan diabetes — dan angka ini diperkirakan akan naik 40% pada tahun 2050 seiring jumlah penderita mencapai 28,6 juta orang."
            source="IDF Diabetes Atlas 2024"
            className="quiz-fade-in quiz-delay-4 mt-6"
          />
        </div>
      )}

      {/* ── SCREEN: Q6 — MEDICATIONS (multi-select) ── */}
      {current === "q6" && (
        <div key={`q6-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Untuk keselamatan Anda — apakah Anda sedang mengonsumsi obat-obatan berikut?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Pilih semua yang sesuai · Langkah 6 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[
              ["Metformin",false],["Insulin",false],["Obat tekanan darah",false],["Obat tiroid",false],["Tidak ada di atas",true],
            ].map(([label, isEx]) => (
              <MultiCard
                key={label as string}
                label={label as string}
                selected={selectedMeds.has(label as string)}
                onClick={() => toggleMulti(label as string, isEx as boolean, selectedMeds, setSelectedMeds)}
              />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Obat GLP-1 awalnya dikembangkan dari air liur kadal Gila Monster! Ilmuwan menemukan bahwa hormon dalam air liur reptil ini membantu mengatur gula darah — dan menjadi dasar Ozempic."
            source="Dr. John Eng, Exendin-4 Discovery, 1992"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
          <div className="quiz-fade-in quiz-delay-4 mt-6">
            <CtaPrimary onClick={() => {
              setAnswers((a) => ({ ...a, medications: Array.from(selectedMeds) }));
              goToScreen("q7");
            }}>
              Lanjutkan →
            </CtaPrimary>
          </div>
        </div>
      )}

      {/* ── SCREEN: Q7 — PRIOR WEIGHT LOSS (multi-select) ── */}
      {current === "q7" && (
        <div key={`q7-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Metode penurunan berat badan apa yang pernah Anda coba?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Pilih semua yang sesuai · Langkah 7 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[
              ["Diet ketat",false],["Olahraga rutin",false],["Suplemen pelangsing",false],["Obat pelangsing",false],["Puasa",false],["Belum pernah mencoba",true],
            ].map(([label, isEx]) => (
              <MultiCard
                key={label as string}
                label={label as string}
                selected={selectedMethods.has(label as string)}
                onClick={() => toggleMulti(label as string, isEx as boolean, selectedMethods, setSelectedMethods)}
              />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Penelitian menunjukkan yo-yo dieting (berat naik-turun berulang) justru memperlambat metabolisme dan mengganggu hormon lapar — membuat penurunan berat badan semakin sulit di kemudian hari."
            source="Obesity Reviews; The Straits Times/SGH 2024"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
          <div className="quiz-fade-in quiz-delay-4 mt-6">
            <CtaPrimary onClick={() => {
              setAnswers((a) => ({ ...a, methods: Array.from(selectedMethods) }));
              goToScreen("q8");
            }}>
              Lanjutkan →
            </CtaPrimary>
          </div>
        </div>
      )}

      {/* ── SCREEN: Q8 — LIFE IMPACT (multi-select) ── */}
      {current === "q8" && (
        <div key={`q8-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Bagaimana berat badan atau diabetes memengaruhi kehidupan Anda?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Pilih semua yang sesuai · Langkah 8 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[
              ["🏃 Sulit beraktivitas sehari-hari","Sulit beraktivitas",false],
              ["😔 Kurang percaya diri","Kurang percaya diri",false],
              ["💭 Khawatir tentang kesehatan jangka panjang","Khawatir kesehatan",false],
              ["👥 Membatasi kehidupan sosial","Membatasi sosial",false],
              ["😴 Sulit tidur nyenyak","Sulit tidur",false],
              ["👍 Tidak terlalu memengaruhi","none",true],
            ].map(([displayLabel, val, isEx]) => (
              <MultiCard
                key={val as string}
                label={displayLabel as string}
                selected={selectedImpact.has(val as string)}
                onClick={() => toggleMulti(val as string, isEx as boolean, selectedImpact, setSelectedImpact)}
              />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="87% pengguna internet Indonesia aktif menggunakan WhatsApp setiap bulan — menjadikannya jalur komunikasi kesehatan paling efektif di Indonesia."
            source="We Are Social / Rasayel 2025"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
          <div className="quiz-fade-in quiz-delay-4 mt-6">
            <CtaPrimary onClick={() => {
              setAnswers((a) => ({ ...a, impact: Array.from(selectedImpact) }));
              goToScreen("q9");
            }}>
              Lanjutkan →
            </CtaPrimary>
          </div>
        </div>
      )}

      {/* ── SCREEN: Q9 — FRUSTRATION ── */}
      {current === "q9" && (
        <div key={`q9-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Seberapa frustasi Anda dengan upaya penurunan berat badan sebelumnya?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 9 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[
              ["😤","Sangat frustasi — sudah mencoba segalanya","very"],
              ["😕","Cukup frustasi","moderate"],
              ["🤔","Sedikit frustasi","slight"],
              ["🆕","Baru pertama kali mencari solusi","first"],
            ].map(([icon,label,val]) => (
              <TapCard key={val} icon={icon} label={label} onClick={() => { setAnswer("frustration", val); autoAdvance("interstitial"); }} />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Setelah 2 tahun penggunaan, 61,8% pasien semaglutide berhasil menurunkan berat badan ≥10% — dan sepertiga bahkan mencapai penurunan ≥20%."
            source="Nature Medicine 2022, STEP 5 Extension Trial"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
        </div>
      )}

      {/* ── SCREEN: INTERSTITIAL ── */}
      {current === "interstitial" && (
        <div key={`interstitial-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}
          style={{ background: "linear-gradient(180deg, #E0F4F8 0%, #fff 100%)" }}>
          <div>
            <BackBtn onClick={goBack} />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <span className="quiz-fade-in inline-flex px-[14px] py-1.5 rounded-full bg-primary/10 text-[13px] font-semibold text-primary mb-6">
              💡 Tahukah Anda?
            </span>
            <p className="quiz-fade-in quiz-delay-1 text-[clamp(18px,4.5vw,22px)] font-semibold leading-[1.4] text-text mb-4 max-w-sm">
              Obat GLP-1 seperti Ozempic terbukti menurunkan berat badan rata-rata 15% dalam uji klinis — dan sudah terdaftar di BPOM Indonesia.
            </p>
            <p className="quiz-fade-in quiz-delay-2 text-xs text-text-secondary mb-8">
              Sumber: NEJM, STEP Clinical Trials; BPOM RI
            </p>
            <CtaPrimary className="quiz-fade-in quiz-delay-3 max-w-[280px]" onClick={() => goToScreen("q10")}>
              Lanjutkan →
            </CtaPrimary>
          </div>
        </div>
      )}

      {/* ── SCREEN: Q10 — TREATMENT INTEREST ── */}
      {current === "q10" && (
        <div key={`q10-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Seberapa tertarik Anda mencoba terapi GLP-1 dengan bimbingan dokter?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 10 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[
              ["🔥","Sangat tertarik","very"],
              ["👀","Tertarik, tapi masih ingin tahu lebih lanjut","interested"],
              ["🤷","Belum yakin","unsure"],
              ["📋","Hanya ingin informasi","info"],
            ].map(([icon,label,val]) => (
              <TapCard key={val} icon={icon} label={label} onClick={() => { setAnswer("interest", val); autoAdvance("q11"); }} />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Adopsi telemedicine di Indonesia melonjak dari 2 juta pengguna (2019) menjadi 20 juta (2020) — dan terus tumbuh hingga 58% populasi menggunakannya di 2023."
            source="Thinkwell 2025; McKinsey Health Institute"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
        </div>
      )}

      {/* ── SCREEN: Q11 — CONSULTATION PREFERENCE ── */}
      {current === "q11" && (
        <div key={`q11-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <h2 className="quiz-fade-in text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Bagaimana Anda lebih suka berkonsultasi dengan dokter?</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-6">Langkah 11 dari 12</p>
          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-[10px]">
            {[["📱","Video call online","video"],["💬","Chat WhatsApp","whatsapp"],["🏥","Kunjungan langsung ke klinik","clinic"],["🤔","Belum yakin","unsure"]].map(([icon,label,val]) => (
              <TapCard key={val} icon={icon} label={label} onClick={() => { setAnswer("consult", val); autoAdvance("q12"); }} />
            ))}
          </div>
          <FunFact
            header="💡 Tahukah Anda?"
            text="Di Singapura, platform telehealth seperti andSons melaporkan bahwa 40% konsultasi GLP-1 tidak berujung pada resep — bukti bahwa dokter benar-benar mengevaluasi setiap pasien."
            source="The Straits Times / Ora Group 2024"
            className="quiz-fade-in quiz-delay-3 mt-6"
          />
        </div>
      )}

      {/* ── SCREEN: Q12 — CONTACT CAPTURE ── */}
      {current === "q12" && (
        <div key={`q12-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-[60px] flex flex-col`}>
          <BackBtn onClick={goBack} />
          <span className="quiz-fade-in inline-flex px-[14px] py-1.5 rounded-full bg-primary-light text-[13px] font-semibold text-primary mb-3 self-start">
            ✨ Langkah 12 dari 12
          </span>
          <h2 className="quiz-fade-in quiz-delay-1 text-[clamp(20px,5vw,24px)] font-bold leading-[1.25] text-text mb-2">Hasil penilaian Anda sudah siap!</h2>
          <p className="quiz-fade-in quiz-delay-1 text-sm text-text-secondary mb-5">Masukkan data Anda untuk melihat rekomendasi personal dari tim medis kami</p>

          <div className="quiz-fade-in quiz-delay-2 flex flex-col gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-text mb-1.5">Nama lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                autoComplete="name"
                className={`w-full px-4 py-[14px] border-2 rounded-lg text-base bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,116,144,0.1)] transition-all
                  ${nameError ? "border-error" : "border-border"}`}
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-text mb-1.5">Nomor WhatsApp</label>
              <div className={`flex items-center border-2 rounded-lg overflow-hidden focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(14,116,144,0.1)] transition-all
                ${phoneError ? "border-error" : "border-border"}`}>
                <span className="px-3 py-[14px] bg-gray-50 text-[15px] font-medium text-text-secondary border-r border-border whitespace-nowrap">+62</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="812 3456 7890"
                  inputMode="tel"
                  autoComplete="tel"
                  className="flex-1 px-4 py-[14px] text-base bg-white focus:outline-none border-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-text mb-1.5">
                Email <span className="font-normal text-text-secondary">(Opsional)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@contoh.com"
                autoComplete="email"
                className="w-full px-4 py-[14px] border-2 border-border rounded-lg text-base bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(14,116,144,0.1)] transition-all"
              />
            </div>
            <div className="flex items-start gap-1.5 text-xs text-text-secondary">
              <span>🔒</span>
              <span>Data Anda dilindungi dan tidak akan dibagikan ke pihak ketiga</span>
            </div>
          </div>

          <FunFact
            header="🔒 Jaminan Privasi"
            text="Data kesehatan Anda terenkripsi dan dilindungi sesuai standar keamanan internasional. Kami tidak pernah menjual data ke pihak ketiga."
            className="quiz-fade-in quiz-delay-3 mt-6"
          />

          <div className="quiz-fade-in quiz-delay-4 mt-6">
            <CtaPrimary onClick={submitForm}>Lihat Hasil Saya →</CtaPrimary>
          </div>
        </div>
      )}

      {/* ── SCREEN: LOADING ── */}
      {current === "loading" && (
        <div key={`loading-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 flex flex-col items-center justify-center text-center`}>
          <div className="quiz-spinner" />
          <div className="text-lg font-semibold text-text mb-6">Menganalisis jawaban Anda...</div>
          <div className="text-left max-w-[300px] w-full">
            {[
              [loadStep1, loadStep1Done, "Menghitung BMI dan risiko kesehatan..."],
              [loadStep2, loadStep2Done, "Mengevaluasi riwayat kesehatan..."],
              [loadStep3, loadStep3Done, "Menyiapkan rekomendasi personal..."],
            ].map(([visible, done, text], i) => (
              <div key={i} className={`quiz-loading-step ${visible ? "visible" : ""} ${done ? "done" : ""}`}>
                <span className="quiz-step-check">✓</span>
                <span>{text as string}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── SCREEN: RESULT ── */}
      {current === "result" && (
        <div key={`result-${animKey}`} className={`${slideClass} max-w-[480px] mx-auto min-h-dvh px-5 pb-10 pt-8 flex flex-col`}>
          <span className="quiz-fade-in inline-flex px-[14px] py-1.5 rounded-full bg-primary-light text-[13px] font-semibold text-primary mb-5 self-start">
            📊 Hasil Penilaian Anda
          </span>

          {/* Result card */}
          <div className="quiz-fade-in quiz-delay-1 border-2 border-border rounded-lg p-5 mb-6">
            <h3 className="text-[17px] font-semibold leading-[1.35] text-text mb-4">
              {resultVariant() === "diabetes"
                ? "Berdasarkan penilaian Anda, terapi GLP-1 sangat relevan untuk manajemen diabetes Anda"
                : resultVariant() === "weight_loss"
                ? "Berdasarkan penilaian Anda, terapi GLP-1 mungkin cocok untuk mendukung penurunan berat badan Anda"
                : "Berdasarkan penilaian Anda, konsultasi dengan dokter kami dapat membantu Anda memahami pilihan terbaik"}
            </h3>
            <div className="flex gap-4">
              <div className="flex-1 text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-[24px] font-bold text-text">{displayBMI ?? "—"}</div>
                <div className="text-[11px] text-text-secondary mt-0.5">BMI Anda</div>
                {displayBMI && <BMIBadge cls={displayBMICls} category={displayBMICategory} />}
              </div>
              <div className="flex-1 text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-[24px] font-bold text-text">Sedang</div>
                <div className="text-[11px] text-text-secondary mt-0.5">Tingkat Risiko</div>
                <span className="inline-flex px-[10px] py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold mt-1">Perlu Perhatian</span>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="quiz-fade-in quiz-delay-2">
            <div className="text-[17px] font-bold text-text mb-3">💊 Rekomendasi Tim Medis</div>
            <p className="text-sm text-text-secondary leading-[1.6] mb-6">
              {resultVariant() === "diabetes"
                ? "GLP-1 seperti Ozempic terbukti efektif menurunkan HbA1c dan berat badan secara bersamaan. Konsultasi dengan dokter kami untuk mendapatkan rencana perawatan diabetes yang personal."
                : resultVariant() === "weight_loss"
                ? "Dengan BMI Anda dan tujuan penurunan berat badan, terapi GLP-1 berpotensi memberikan hasil signifikan. Konsultasi dengan dokter kami untuk evaluasi kelayakan dan rencana program yang tepat."
                : "Tim dokter kami dapat membantu mengevaluasi apakah terapi GLP-1 sesuai untuk kondisi dan tujuan kesehatan Anda secara menyeluruh."}
            </p>
          </div>

          {/* Next steps */}
          <div className="quiz-fade-in quiz-delay-2">
            <div className="text-[17px] font-bold text-text mb-3">📋 Langkah Selanjutnya</div>
            <div className="mb-6">
              {[
                ["Konsultasi dokter online (gratis)","Bicara langsung dengan dokter berlisensi kami"],
                ["Evaluasi kesehatan lengkap","Pemeriksaan lab dan riwayat medis menyeluruh"],
                ["Rencana perawatan personal","Program yang disesuaikan dengan kebutuhan Anda"],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-[14px] py-[14px] border-b border-border last:border-0">
                  <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-text mb-0.5">{title}</strong>
                    <span className="text-[13px] text-text-secondary">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="quiz-fade-in quiz-delay-3">
            <div className="text-[17px] font-bold text-text mb-3">📖 Artikel yang Relevan untuk Anda</div>
            <div className="flex flex-col gap-[10px] mb-6">
              {[
                ["💊","Panduan Lengkap Ozempic di Indonesia"],
                ["📉","Menurunkan Berat Badan dengan GLP-1"],
                ["⚠️","Efek Samping Ozempic: Yang Perlu Anda Ketahui"],
              ].map(([icon, title]) => (
                <a
                  key={title as string}
                  href="https://nadihealth.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-[14px] border border-border rounded-lg text-text no-underline hover:border-primary hover:shadow-sm hover:-translate-y-px transition-all"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-[18px] flex-shrink-0">{icon}</span>
                  <span className="text-sm font-semibold leading-[1.3]">{title}</span>
                  <span className="ml-auto text-text-secondary text-lg flex-shrink-0">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Medical team trust card */}
          <FunFact
            header="✅ Tim Medis Kami"
            text="Nadi Health bekerja sama dengan dokter spesialis yang berlisensi IDI dan berpengalaman dalam terapi GLP-1 untuk pasien Indonesia."
            className="quiz-fade-in quiz-delay-4"
          />

          {/* CTAs */}
          <div className="quiz-fade-in quiz-delay-4 mt-6 flex flex-col gap-3">
            <CtaPrimary>Daftar Konsultasi Gratis →</CtaPrimary>
            <button className="inline-flex items-center justify-center gap-2 bg-transparent text-primary text-[15px] font-semibold px-6 py-[14px] rounded-full border-2 border-primary w-full hover:bg-primary-light transition-colors">
              💬 Bagikan via WhatsApp
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-[11px] text-text-secondary leading-[1.6]">
            <strong>Disclaimer:</strong> Penilaian ini bukan diagnosis medis. Hasil ini berdasarkan jawaban yang Anda berikan dan hanya bersifat informatif. Konsultasikan dengan dokter untuk diagnosis dan penanganan yang tepat. Nadi Health menyediakan layanan telehealth dan tidak menggantikan konsultasi medis langsung.
          </div>
        </div>
      )}
    </div>
  );
}
