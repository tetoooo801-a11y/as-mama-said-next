"use client";

import React from "react";
import Link from "next/link";
import {
  Handshake,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Megaphone,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Flame,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function Collaborations() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="collab" className="collab-section relative z-10 w-full overflow-hidden transition-colors">
      <div className="wrap max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ============================================================== */}
        {/* 1. SECTION HEADER                                              */}
        {/* ============================================================== */}
        <FadeIn delay={0.1} y={25}>
          <div className="collab-header flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <span className="collab-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/25 mb-4 sm:mb-5">
              <Handshake size={15} className="shrink-0" />
              {t.collab.kicker}
            </span>

            <h2
              className="collab-title font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.04] mb-3 sm:mb-4"
              style={{
                fontSize: "clamp(2.3rem, 5.2vw, 4.4rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {t.collab.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-bold text-[#D2392A] max-w-2xl mb-3 sm:mb-4">
              {t.collab.tagline}
            </p>

            <p className="collab-sub text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed max-w-3xl font-normal">
              {t.collab.sub}
            </p>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 2. DUAL BRAND SHOWCASE: AS MAMA SAID × SIRAD                   */}
        {/* ============================================================== */}
        <FadeIn delay={0.2} y={30}>
          <div className="relative mb-14 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Card: As Mama Said (Marketing & Creative Strategy) */}
              <div className="lg:col-span-6 rounded-[28px] sm:rounded-[36px] bg-[#FAF7F2] dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:border-[#D2392A]/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20">
                      <Megaphone size={14} />
                      {t.collab.asMamaSaidRole.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#15100C]/40 dark:text-white/40">
                      PARTNER 01
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3
                      className="text-2xl sm:text-3xl font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] uppercase"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      AS MAMA SAID<span className="text-[#D2392A]">.</span>
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-[#15100C]/60 dark:text-[#F2E6DC]/60 block mt-0.5">
                      Creative Studio · Cairo & Dubai
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal mb-6">
                    {t.collab.asMamaSaidRole.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/[0.06] dark:border-white/10">
                    {t.collab.asMamaSaidRole.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-[#15100C]/85 dark:text-[#F2E6DC]/85">
                        <CheckCircle2 size={16} className="text-[#D2392A] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#15100C]/70 dark:text-white/70">
                  <span>{isRTL ? "الدور في الشراكة" : "Role"}</span>
                  <span className="text-[#D2392A]">{isRTL ? "التسويق والاستراتيجية الإبداعية" : "Creative Marketing & Direction"}</span>
                </div>
              </div>

              {/* Right Card: Sirad Creative Agency (Advanced Tech & Digital Engineering) */}
              <div className="relative overflow-hidden lg:col-span-6 rounded-[28px] sm:rounded-[36px] bg-[#070D0A] text-white border border-[#A3E635]/25 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#A3E635]/60 hover:shadow-[0_24px_60px_rgba(163,230,53,0.14)] transition-all duration-300">
                
                {/* Background Dithered S Logo behind the text (خلفية الكلام جوا الكرت) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                  <img
                    src="/assets/images/sirad-dither-s.png"
                    alt=""
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500 filter drop-shadow-[0_0_35px_rgba(163,230,53,0.35)] translate-y-6"
                  />
                </div>

                {/* Subtle Ambient Radial Glow */}
                <div className="absolute top-0 end-0 w-72 h-72 bg-[#A3E635]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#A3E635]/15 text-[#A3E635] border border-[#A3E635]/30">
                      <Cpu size={14} className="text-[#A3E635]" />
                      {t.collab.siradRole.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#A3E635]/70">
                      PARTNER 02
                    </span>
                  </div>

                  <div className="mb-5">
                    {/* Sirad Official White Wordmark & Sub-label */}
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src="/assets/images/sirad-logo-white.png"
                        alt="Sirad"
                        className="h-7 sm:h-8 md:h-9 object-contain"
                        loading="lazy"
                      />
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-white/60 border-s border-white/20 ps-2.5 leading-tight py-0.5">
                        CREATIVE<br />AGENCY
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black tracking-wide">
                      <span className="text-white">Digital</span>
                      <span className="text-[#A3E635]">Done Right.</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#D7E2EA]/85 font-normal mb-6">
                    {t.collab.siradRole.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {t.collab.siradRole.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-white/95">
                        <CheckCircle2 size={16} className="text-[#A3E635] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/70">
                  <span>{isRTL ? "الدور في الشراكة" : "Role"}</span>
                  <span className="text-[#A3E635] font-extrabold">{isRTL ? "التكنولوجيا المتقدمة والحلول الرقمية" : "Technology & Digital Architecture"}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 3. EDITORIAL CALLOUT: WHY THIS ALLIANCE MATTERS                */}
        {/* ============================================================== */}
        <FadeIn delay={0.25} y={25}>
          <div className="rounded-[26px] sm:rounded-[32px] bg-[#FAF7F2] dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 p-6 sm:p-8 md:p-10 mb-14 sm:mb-20 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "فلسفة التحالف والهدف المشترك" : "THE STRATEGIC PHILOSOPHY"}
              </span>
            </div>

            <h3
              className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-snug mb-3.5"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL
                ? "إنهاء الصراع القديم بين شركات التسويق ومطوري البرمجيات"
                : "Eliminating the Historical Friction Between Marketing & Engineering"}
            </h3>

            <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-[#15100C]/80 dark:text-[#F2E6DC]/80 font-normal max-w-4xl">
              {t.collab.allianceIntro}
            </p>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 4. THE 4 SYNERGY PILLARS                                       */}
        {/* ============================================================== */}
        <FadeIn delay={0.3} y={25}>
          <div className="mb-14 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#D2392A] block mb-2">
                {isRTL ? "مزايا التحالف للعملاء" : "PARTNERSHIP ADVANTAGES"}
              </span>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-tight"
                style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
              >
                {t.collab.synergyTitle}
              </h3>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                {t.collab.synergyDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {t.collab.synergies.map((syn, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-[22px] sm:rounded-[28px] bg-[#FAF7F2] dark:bg-[#0A1617] border border-black/[0.07] dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#D2392A]/40 transition-all duration-300"
                >
                  <div>
                    <span
                      className="font-black text-[#D2392A] text-xl sm:text-2xl block mb-2"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {syn.num}
                    </span>
                    <h4
                      className="text-base sm:text-lg md:text-xl font-bold uppercase text-[#15100C] dark:text-[#F2E6DC] mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {syn.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal">
                      {syn.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 5. STRATEGIC METRICS & STATS GRID                              */}
        {/* ============================================================== */}
        <FadeIn delay={0.35} y={25}>
          <div className="collab-stats-grid grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20">
            {t.collab.stats?.map((stat, idx) => (
              <div
                key={idx}
                className="collab-stat-card p-5 sm:p-6 rounded-[22px] sm:rounded-[26px] bg-[#FAF7F2] dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 text-center shadow-sm hover:border-[#D2392A]/40 transition-all"
              >
                <span
                  className="collab-stat-val block text-2xl sm:text-3xl md:text-4xl font-black text-[#D2392A] leading-tight mb-1.5"
                  style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="collab-stat-label text-xs sm:text-sm font-semibold text-[#15100C]/70 dark:text-[#F2E6DC]/70 block leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 6. FEATURED CLIENTS & ECOSYSTEM ROSTER                         */}
        {/* ============================================================== */}
        <FadeIn delay={0.4} y={20}>
          <div className="mb-14 sm:mb-20">
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#15100C]/50 dark:text-white/50 block">
                {isRTL ? "شبكة الشركاء والعلامات التي خدمتهم المنظومة" : "ESTEEMED CLIENT NETWORK & PARTNERS"}
              </span>
            </div>
            <div className="collab-partners-grid grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              {t.collab.partners?.map((partner, idx) => (
                <div
                  key={idx}
                  className="collab-partner-chip p-3.5 sm:p-4 rounded-[18px] bg-[#FAF7F2] dark:bg-[#0A1617] border border-black/[0.06] dark:border-white/10 flex items-center gap-2.5 hover:border-[#D2392A]/40 transition-all select-none"
                >
                  <span className="collab-partner-dot w-2 h-2 rounded-full bg-[#D2392A] shrink-0" />
                  <div className="collab-partner-info min-w-0">
                    <span className="collab-partner-name text-xs sm:text-sm font-bold text-[#15100C] dark:text-[#F2E6DC] block truncate">
                      {partner.name}
                    </span>
                    <span className="collab-partner-cat text-[10.5px] sm:text-xs text-[#15100C]/50 dark:text-white/50 block truncate">
                      {partner.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
