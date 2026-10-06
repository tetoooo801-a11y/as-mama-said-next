"use client";

import React, { useState } from "react";
import { Sparkles, Layers, Box, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductionShowcase() {
  const { isRTL } = useLanguage();
  const [aiViewMode, setAiViewMode] = useState<"final" | "original">("final");

  return (
    <div className="mt-8 space-y-6">
      {/* ------------------------------------------------------------------ */}
      {/* 1. 3D SOLUTIONS SHOWCASE: Wireframe vs Final Render               */}
      {/* ------------------------------------------------------------------ */}
      <div className="rounded-2xl sm:rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/10 p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center shrink-0">
              <Box size={14} />
            </span>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#15100C] dark:text-[#F2E6DC]">
                {isRTL ? "حلول الـ 3D — النمذجة والرندرة و CGI" : "3D Solutions — Modeling, Rendering & CGI"}
              </h4>
              <p className="text-xs text-[#15100C]/60 dark:text-[#F2E6DC]/60">
                {isRTL
                  ? "مجسمات هندسية متطورة مدمجة داخل منظومة الإنتاج"
                  : "Production-grade Sub-D geometry and ray-traced lighting"}
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[#15100C]/80 dark:text-[#F2E6DC]/80 self-start sm:self-center">
            {isRTL ? "العميل: Pure Living · دور AMS: النمذجة والرندرة 3D" : "Client: Pure Living · Role: 3D CAD Modeling & Photoreal Rendering by AMS"}
          </div>
        </div>

        {/* Side-by-Side 3D Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Wireframe / Model Preview */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 group">
            <img
              src="/assets/images/service-1-3d.png"
              alt="3D CAD Geometry Wireframe"
              className="w-full h-full object-cover filter contrast-125 grayscale"
              loading="lazy"
            />
            <div className="absolute top-2.5 start-2.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-bold">
              {isRTL ? "المجسم / Wireframe CAD" : "Wireframe CAD Geometry"}
            </div>
          </div>

          {/* Final Photoreal Render */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 group">
            <img
              src="/assets/images/service-2-render.png"
              alt="Final 8K Photoreal Render"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-2.5 start-2.5 px-2.5 py-1 rounded-md bg-[#D2392A] text-white text-[11px] font-mono font-bold shadow-md">
              {isRTL ? "الرندر النهائي الفاخر" : "Final Photoreal Render"}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. AI-ASSISTED PRODUCTION BLOCK                                    */}
      {/* ------------------------------------------------------------------ */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#120b09] via-[#0d1516] to-[#081516] text-white border border-[#D2392A]/30 p-5 sm:p-7 shadow-lg relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-16 -end-16 w-56 h-56 bg-[#D2392A]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D2392A]/20 text-[#D2392A] border border-[#D2392A]/40 text-xs font-mono font-bold uppercase tracking-wider">
              <Cpu size={13} />
              <span>{isRTL ? "تطوير إنتاجي بالذكاء الاصطناعي" : "AI-ASSISTED PRODUCTION"}</span>
            </div>
            <span className="text-xs font-mono text-white/50">
              AMS STUDIO HYBRID PIPELINE
            </span>
          </div>

          <h3
            className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-2"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            REAL PRODUCTION. EXPANDED POSSIBILITIES.
          </h3>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-3xl mb-5 font-normal">
            {isRTL
              ? "ندمج لقطات التصوير الواقعي والفوتوغرافي مع بيئات وعناصر بصرية مطورة بالذكاء الاصطناعي لخلق صور حملات سينمائية، وعوالم منتجات فريدة بدون قيود لوجستية."
              : "We combine live-action footage and photography with AI-generated environments and visual elements to create campaign imagery, product visuals, and new worlds around your brand."}
          </p>

          {/* Toggle buttons for Mobile and interactive comparison */}
          <div className="flex items-center gap-2 mb-3">
            <button
              type="button"
              onClick={() => setAiViewMode("final")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                aiViewMode === "final"
                  ? "bg-[#D2392A] text-white shadow-sm"
                  : "bg-white/10 text-white/70 hover:bg-white/15"
              }`}
            >
              {isRTL ? "النتيجة النهائية (Visual Final)" : "Visual Final"}
            </button>
            <button
              type="button"
              onClick={() => setAiViewMode("original")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                aiViewMode === "original"
                  ? "bg-[#D2392A] text-white shadow-sm"
                  : "bg-white/10 text-white/70 hover:bg-white/15"
              }`}
            >
              {isRTL ? "التصوير الأصلي (Capture Original)" : "Capture Original"}
            </button>
          </div>

          {/* Comparison Cards: Side-by-side on desktop, toggled or stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className={`relative rounded-xl overflow-hidden aspect-[16/10] bg-black/60 border border-white/10 ${
                aiViewMode === "final" ? "block" : "hidden sm:block"
              }`}
            >
              <img
                src="/assets/images/about-clarity-hd.webp"
                alt="AI-Generated Visual Final Composite"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-2.5 start-2.5 px-2.5 py-1 rounded-md bg-[#D2392A] text-white text-[11px] font-mono font-bold">
                {isRTL ? "النتيجة النهائية (Visual Final)" : "Visual Final"}
              </span>
            </div>

            <div
              className={`relative rounded-xl overflow-hidden aspect-[16/10] bg-black/60 border border-white/10 ${
                aiViewMode === "original" ? "block" : "hidden sm:block"
              }`}
            >
              <img
                src="/assets/images/hero-mama-studio.webp"
                alt="Studio Original Capture"
                className="w-full h-full object-cover filter brightness-90"
                loading="lazy"
              />
              <span className="absolute top-2.5 start-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                {isRTL ? "اللقطة الأصلية (Capture Original)" : "Capture Original"}
              </span>
            </div>
          </div>

          {/* Official Mandated Description from Brief */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-white/70">
            <p className="italic">
              {isRTL
                ? '"تم التصوير في استوديوهاتنا. البيئة صُممت بالذكاء الاصطناعي. الإخراج واللمسات النهائية بواسطة AMS."'
                : '"Shot in our studio. Environment created with AI. Directed and finished by AMS."'}
            </p>
            <span className="text-[11px] text-[#D2392A] font-bold">
              100% Client Detail Integrity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
