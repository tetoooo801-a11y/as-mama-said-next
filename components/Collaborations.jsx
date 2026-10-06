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
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";

export default function Collaborations() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="collab"
      style={{ backgroundColor: "#050B08", color: "#ffffff" }}
      className="relative z-10 w-full min-h-screen bg-[#050B08] text-white overflow-hidden py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-y border-[#A3E635]/30 selection:bg-[#A3E635] selection:text-black"
    >
      {/* Background Ambient Grid & Glowing Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e6350c_1px,transparent_1px),linear-gradient(to_bottom,#a3e6350c_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Central Glowing Sirad S Dither Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] lg:w-[920px] aspect-square flex items-center justify-center opacity-20 sm:opacity-25 pointer-events-none filter drop-shadow-[0_0_80px_rgba(163,230,53,0.35)]">
          <img
            src="/assets/images/sirad-dither-s.webp"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Radial ambient glow orbs */}
        <div className="absolute -top-32 -end-32 w-[500px] h-[500px] bg-[#A3E635]/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -start-32 w-[500px] h-[500px] bg-[#0c2626]/50 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
        {/* ============================================================== */}
        {/* 1. SECTION HERO HEADER (Sirad Theme & Alliance)                */}
        {/* ============================================================== */}
        <FadeIn delay={0.1} y={25}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-20">
            {/* Top Pill with glowing pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-[#A3E635]/15 text-[#A3E635] border border-[#A3E635]/40 shadow-[0_0_20px_rgba(163,230,53,0.2)] mb-5">
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

            <p className="text-sm sm:text-base md:text-[1.05rem] text-[#D7E2EA]/90 leading-relaxed max-w-3xl font-normal">
              {t.collab.sub}
            </p>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 2. EXCLUSIVE TECHNOLOGY PARTNER: SIRAD & THE ALLIANCE         */}
        {/* ============================================================== */}
        <FadeIn delay={0.2} y={30}>
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#091b12]/95 via-[#06120c]/95 to-[#040806] border-2 border-[#A3E635]/40 p-7 sm:p-10 lg:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.95)] mb-14 sm:mb-20 backdrop-blur-xl relative overflow-hidden">
            {/* Ambient Background Glow and Sirad Dither Watermark */}
            <div className="absolute -bottom-24 -end-24 w-[480px] h-[480px] opacity-25 pointer-events-none select-none">
              <img
                src="/assets/images/sirad-dither-s.webp"
                alt=""
                className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(163,230,53,0.4)]"
              />
            </div>
            <div className="absolute top-0 end-1/3 w-96 h-96 bg-[#A3E635]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar with Live Joint Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#A3E635]/25 text-xs font-mono relative z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635] animate-ping" />
                <span className="text-[#A3E635] font-bold tracking-wider uppercase">
                  {isRTL ? "الشريك التقني والهندسي الحصري" : "EXCLUSIVE CREATIVE TECHNOLOGY PARTNER"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                <span>CAIRO · DUBAI · RIYADH</span>
                <span className="text-[#A3E635]">•</span>
                <span>NEXT.JS · WEBGL 3D · CLOUD SYSTEMS</span>
              </div>
            </div>

            {/* Main Content Grid: Sirad Profile & Collaboration Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Sirad Identity & What the Collab Achieves */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Partner Badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#A3E635]/20 text-[#A3E635] border border-[#A3E635]/50 shadow-[0_0_15px_rgba(163,230,53,0.2)]">
                      <Cpu size={14} className="text-[#A3E635]" />
                      <span>{t.collab.siradRole.badge}</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-white/50">
                      EST. CREATIVE TECH
                    </span>
                  </div>

                  {/* Sirad Logo & Brand Mark */}
                  <div className="mb-5">
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        src="/assets/images/sirad-logo-white.png"
                        alt="Sirad Creative Agency"
                        className="h-9 sm:h-10 md:h-12 w-auto object-contain"
                        loading="lazy"
                      />
                      <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-white/80 border-s border-white/20 ps-3 leading-tight py-1">
                        CREATIVE<br />AGENCY
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base font-black tracking-wide mt-2">
                      <span className="text-white">Digital</span>
                      <span className="text-[#A3E635]">Done Right.</span>
                    </div>
                  </div>

                  {/* Detailed Description of Sirad */}
                  <p className="text-sm sm:text-base leading-relaxed text-[#D7E2EA] font-normal mb-6">
                    {t.collab.siradRole.desc}
                  </p>

                  {/* About the Collaboration Narrative Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#030805]/70 border border-[#A3E635]/30 mb-6 shadow-inner">
                    <p className="text-xs sm:text-[13.5px] text-[#D7E2EA] leading-relaxed font-normal">
                      <span className="text-[#A3E635] font-bold me-1.5">
                        {isRTL ? "عن هذا التحالف:" : "About The Collaboration:"}
                      </span>
                      {t.collab.allianceIntro}
                    </p>
                  </div>
                </div>

                {/* Visit Sirad Website Link */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://sirad.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(163,230,53,0.3)] active:scale-95 transition-all duration-200"
                  >
                    <span>{isRTL ? "زيارة موقع sirad.co" : "Explore sirad.co"}</span>
                    <ArrowUpRight size={15} />
                  </a>
                  <span className="text-xs font-mono text-white/60">
                    {isRTL ? "التنفيذ التقني والهندسي الحصري" : "Exclusive Technical Execution"}
                  </span>
                </div>
              </div>

              {/* Right Column: Sirad Core Capabilities & Engineering Matrix */}
              <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
                <div className="mb-2">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3E635] font-bold block mb-1">
                    {isRTL ? "القدرات الهندسية والبرمجية" : "ENGINEERING & TECH CAPABILITIES"}
                  </span>
                  <h4
                    className="text-lg sm:text-xl font-black uppercase text-white"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {isRTL ? "ما تقدمه سيراد لمشروعك" : "What Sirad Engineers For You"}
                  </h4>
                </div>

                {t.collab.siradRole.points.map((pt, pIdx) => {
                  const icons = [Sparkles, Code2, Layers, Zap];
                  const Icon = icons[pIdx % icons.length];
                  return (
                    <div
                      key={pIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#081510] border border-[#A3E635]/30 hover:border-[#A3E635] hover:bg-[#0b1f15] shadow-md transition-all duration-300 flex items-start gap-3.5 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#A3E635]/15 border border-[#A3E635]/40 text-[#A3E635] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#A3E635] group-hover:text-black transition-colors">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-bold text-white block mb-0.5 leading-snug group-hover:text-[#A3E635] transition-colors">
                          {pt}
                        </span>
                        <span className="text-xs text-white/60 font-mono">
                          {pIdx === 0
                            ? isRTL
                              ? "تجارب ثلاثية الأبعاد تفاعلية"
                              : "Interactive 3D WebGL Experiences"
                            : pIdx === 1
                            ? isRTL
                              ? "سرعة استجابة وأداء فائق"
                              : "Sub-Second Velocity & Scalability"
                            : pIdx === 2
                            ? isRTL
                              ? "أنظمة موثوقة ومخصصة"
                              : "Bespoke Enterprise Grade"
                            : isRTL
                            ? "أداء عالمي واستقرار كامل"
                            : "Lighthouse 99+ Standard"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================================================== */}
        {/* 3. FOUR SYNERGY PILLARS (Sirad High-Tech Cards)               */}
        {/* ============================================================== */}
        <FadeIn delay={0.25} y={25}>
          <div className="mb-14 sm:mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A3E635]/15 border border-[#A3E635]/40 text-[#A3E635] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(163,230,53,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
                <span>{isRTL ? "مزايا التحالف للعملاء" : "PARTNERSHIP ADVANTAGES"}</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-tight"
                style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
              >
                {t.collab.synergyTitle}
              </h3>
              <p className="mt-3.5 text-xs sm:text-sm md:text-base text-[#D7E2EA]/90 max-w-2xl mx-auto leading-relaxed">
                {t.collab.synergyDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {t.collab.synergies.map((syn, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#0e2419] via-[#081510] to-[#040906] border border-[#A3E635]/35 hover:border-[#A3E635] p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_16px_50px_rgba(163,230,53,0.25)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Subtle top corner ambient glow */}
                  <div className="absolute -top-10 -end-10 w-28 h-28 bg-[#A3E635]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#A3E635]/25 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#A3E635]/20 border border-[#A3E635]/50 text-[#A3E635] font-black text-xl font-mono shadow-[0_0_15px_rgba(163,230,53,0.25)] group-hover:bg-[#A3E635] group-hover:text-black group-hover:scale-105 transition-all duration-300"
                        style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                      >
                        {syn.num}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A3E635] bg-[#A3E635]/15 px-3 py-1 rounded-full border border-[#A3E635]/30">
                        SIRAD TECH
                      </span>
                    </div>

                    <h4
                      className="text-base sm:text-lg font-black uppercase text-white mb-2.5 leading-snug group-hover:text-[#A3E635] transition-colors"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {syn.title}
                    </h4>
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#D7E2EA]/90 font-normal">
                      {syn.desc}
                    </p>
                  </div>

                  {/* Card bottom tech footer indicator */}
                  <div className="mt-5 pt-3.5 border-t border-[#A3E635]/20 flex items-center justify-between text-[11px] font-mono font-bold text-[#A3E635] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-pulse" />
                      {sIdx === 0
                        ? isRTL
                          ? "إخراج وهندسة موحدة"
                          : "Unified Direction"
                        : sIdx === 1
                        ? isRTL
                          ? "سرعة إطلاق مضاعفة"
                          : "2x Launch Velocity"
                        : sIdx === 2
                        ? isRTL
                          ? "تحويل مبيعات وأرقام"
                          : "Built To Convert"
                        : isRTL
                        ? "توسع ونمو إقليمي"
                        : "Regional Scale"}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-[#A3E635]/70 group-hover:text-[#A3E635] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
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
          <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#0a2016] via-[#050e09] to-[#0a2016] border-2 border-[#A3E635]/40 p-7 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
            {/* 4 Key Alliance Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto flex-1">
              {t.collab.stats?.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-start">
                  <span
                    className="block text-2xl sm:text-3xl lg:text-4xl font-black text-[#A3E635] leading-tight mb-1 drop-shadow-[0_0_20px_rgba(163,230,53,0.35)]"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    <AnimatedCounter value={stat.value} delay={idx * 0.15} />
                  </span>
                  <span className="text-xs text-white/80 font-semibold block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct CTA Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto justify-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(163,230,53,0.4)] active:scale-95 transition-all duration-200"
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
