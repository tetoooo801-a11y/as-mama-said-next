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
  Code2,
  Terminal,
  Activity,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function Collaborations() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="collab"
      className="relative z-10 w-full min-h-screen bg-[#050B08] text-white overflow-hidden py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-y border-[#A3E635]/20 selection:bg-[#A3E635] selection:text-black"
    >
      {/* Background Ambient Grid & Glowing Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e63507_1px,transparent_1px),linear-gradient(to_bottom,#a3e63507_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Central Glowing Sirad S Dither Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] lg:w-[920px] aspect-square flex items-center justify-center opacity-15 sm:opacity-20 pointer-events-none filter drop-shadow-[0_0_80px_rgba(163,230,53,0.3)]">
          <img
            src="/assets/images/sirad-dither-s.webp"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Radial ambient glow orbs */}
        <div className="absolute -top-32 -end-32 w-[450px] h-[450px] bg-[#A3E635]/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -start-32 w-[450px] h-[450px] bg-[#0c2626]/40 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
        {/* ============================================================== */}
        {/* 1. SECTION HERO HEADER (Sirad Theme & Alliance)                */}
        {/* ============================================================== */}
        <FadeIn delay={0.1} y={25}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-20">
            {/* Top Pill with glowing pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-[#A3E635]/10 text-[#A3E635] border border-[#A3E635]/30 shadow-[0_0_20px_rgba(163,230,53,0.15)] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse shrink-0" />
              <span>{isRTL ? "تحالف استراتيجي · تسويق وهندسة رقمية" : "STRATEGIC ALLIANCE · MARKETING & TECH"}</span>
            </div>

            {/* Main Headline */}
            <h2
              className="font-black uppercase tracking-tight text-white leading-[1.04] mb-5"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              AS MAMA SAID <span className="text-[#A3E635]">×</span> SIRAD
            </h2>

            {/* Powerful Sub-tagline */}
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#A3E635] max-w-3xl mb-4 leading-snug">
              {t.collab.tagline}
            </p>

            <p className="text-sm sm:text-base md:text-[1.05rem] text-[#D7E2EA]/80 leading-relaxed max-w-3xl font-normal">
              {t.collab.sub}
            </p>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 2. THE DUAL-POWER ENGINE (Full-screen unified showcase)        */}
        {/* ============================================================== */}
        <FadeIn delay={0.2} y={30}>
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#09140F]/90 via-[#060D0A]/95 to-[#040806] border border-[#A3E635]/25 p-7 sm:p-10 lg:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.85)] mb-14 sm:mb-20 backdrop-blur-xl">
            {/* Top Bar with Status and Live Alliance indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635] animate-ping" />
                <span className="text-[#A3E635] font-bold tracking-wider uppercase">
                  {isRTL ? "منظومة عمل متكاملة نشطة" : "ACTIVE JOINT WAR ROOM"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[11px] uppercase tracking-wider">
                <span>CAIRO · DUBAI · RIYADH</span>
                <span>•</span>
                <span>NEXT.JS · WEBGL 3D · 8K CGI</span>
              </div>
            </div>

            {/* Two Integrated Wings: Creative vs Tech */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative">
              {/* Left Wing: As Mama Said */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-white/[0.03] border border-white/10 hover:border-[#D2392A]/50 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D2392A]/15 text-[#D2392A] border border-[#D2392A]/30">
                      <Megaphone size={13} />
                      {t.collab.asMamaSaidRole.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/40">PARTNER 01</span>
                  </div>

                  <div className="mb-4">
                    <h3
                      className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      AS MAMA SAID<span className="text-[#D2392A]">.</span>
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-white/60 block mt-0.5">
                      Creative Studio · Cairo & Dubai
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#D7E2EA]/75 font-normal mb-6">
                    {t.collab.asMamaSaidRole.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {t.collab.asMamaSaidRole.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-white/90">
                        <CheckCircle2 size={16} className="text-[#D2392A] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/70">
                  <span>{isRTL ? "الدور الرئيسي" : "Core Role"}</span>
                  <span className="text-[#D2392A] font-extrabold">
                    {isRTL ? "التسويق والاستراتيجية الإبداعية" : "Creative Marketing & Direction"}
                  </span>
                </div>
              </div>

              {/* Center Synergy Connector on Desktop */}
              <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center relative">
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#A3E635]/40 to-transparent absolute" />
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#050B08] border-2 border-[#A3E635] text-[#A3E635] font-black text-xl flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.4)]">
                  ×
                </div>
                <span className="mt-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#A3E635] font-bold text-center">
                  ZERO<br />FRICTION
                </span>
              </div>

              {/* Right Wing: Sirad Creative Agency */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-[#A3E635]/[0.04] border border-[#A3E635]/35 hover:border-[#A3E635] hover:shadow-[0_0_35px_rgba(163,230,53,0.18)] transition-all duration-300 relative overflow-hidden">
                {/* Background Dither watermark inside the wing */}
                <div className="absolute -bottom-10 -end-10 w-60 h-60 opacity-20 pointer-events-none">
                  <img
                    src="/assets/images/sirad-dither-s.webp"
                    alt=""
                    className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(163,230,53,0.4)]"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#A3E635]/20 text-[#A3E635] border border-[#A3E635]/40">
                      <Cpu size={13} className="text-[#A3E635]" />
                      {t.collab.siradRole.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#A3E635]">PARTNER 02</span>
                  </div>

                  <div className="mb-4">
                    {/* Sirad Logo with CREATIVE AGENCY badge */}
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src="/assets/images/sirad-logo-white.png"
                        alt="Sirad Creative Agency"
                        className="h-7 sm:h-8 md:h-9 object-contain"
                        loading="lazy"
                      />
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-white/70 border-s border-white/20 ps-2.5 leading-tight py-0.5">
                        CREATIVE<br />AGENCY
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black tracking-wide">
                      <span className="text-white">Digital</span>
                      <span className="text-[#A3E635]">Done Right.</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#D7E2EA]/85 font-normal mb-6">
                    {t.collab.siradRole.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {t.collab.siradRole.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-white/95">
                        <CheckCircle2 size={16} className="text-[#A3E635] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/70">
                  <span>{isRTL ? "الدور الرئيسي" : "Core Role"}</span>
                  <span className="text-[#A3E635] font-extrabold">
                    {isRTL ? "التكنولوجيا المتقدمة والحلول الرقمية" : "Technology & Digital Architecture"}
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Philosophy Banner underneath */}
            <div className="mt-8 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
              <p className="text-xs sm:text-sm text-[#D7E2EA]/85 max-w-3xl leading-relaxed">
                <span className="text-[#A3E635] font-bold me-1.5">
                  {isRTL ? "فلسفة التحالف:" : "The Strategic Advantage:"}
                </span>
                {t.collab.allianceIntro}
              </p>
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="https://sirad.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#A3E635] hover:text-black border border-white/15 hover:border-[#A3E635] text-xs font-bold transition-all duration-200"
                >
                  <span>sirad.co</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 3. FOUR SYNERGY PILLARS (Clean high-tech cards)               */}
        {/* ============================================================== */}
        <FadeIn delay={0.25} y={25}>
          <div className="mb-14 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A3E635] block mb-2">
                {isRTL ? "مزايا التحالف للعملاء" : "PARTNERSHIP ADVANTAGES"}
              </span>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white leading-tight"
                style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
              >
                {t.collab.synergyTitle}
              </h3>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-[#D7E2EA]/70">
                {t.collab.synergyDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {t.collab.synergies.map((syn, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-[22px] sm:rounded-[26px] bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-between hover:border-[#A3E635]/60 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div>
                    <span
                      className="font-black text-[#A3E635] text-xl sm:text-2xl block mb-2.5 transition-transform duration-300 group-hover:scale-105"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {syn.num}
                    </span>
                    <h4
                      className="text-base sm:text-lg font-bold uppercase text-white mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {syn.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#D7E2EA]/75 font-normal">
                      {syn.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 4. LIVE STRATEGIC STATS & ACTION CTA                           */}
        {/* ============================================================== */}
        <FadeIn delay={0.3} y={20}>
          <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#081510] via-[#050B08] to-[#081510] border border-[#A3E635]/25 p-7 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            {/* 4 Key Alliance Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto flex-1">
              {t.collab.stats?.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-start">
                  <span
                    className="block text-2xl sm:text-3xl lg:text-4xl font-black text-[#A3E635] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/70 font-semibold block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct CTA Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto justify-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(163,230,53,0.35)] active:scale-95 transition-all duration-200"
              >
                <span>{t.collab.ctaBtn}</span>
                <ArrowRight size={15} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
