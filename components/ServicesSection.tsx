"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Box, Check, Cpu, Sparkles, Layers } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_8 } from "@/data/servicesData";

export default function ServicesSection() {
  const { isRTL } = useLanguage();
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-20 md:pb-28 transition-colors"
    >
      {/* =========================================================
          MOBILE VIEW (md:hidden) — Clean single column, no hover dependency
          ========================================================= */}
      <div className="block md:hidden px-5 max-w-lg mx-auto">
        <FadeIn delay={0.1} y={20}>
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D2392A] shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "خدماتنا" : "OUR SERVICES"}
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-2.5 text-balance"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "ثماني خدمات. منظومة واحدة متصلة." : "Eight services. One connected system."}
            </h2>

            <p className="text-xs text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed mb-4 max-w-sm mx-auto text-balance">
              {isRTL
                ? "من الاستراتيجية والمحتوى الإبداعي إلى الإنتاج والسوشيال ميديا والأداء الرقمي، نربط العمل حول أهدافك التجارية."
                : "From strategy and creative to production, social, and performance, we connect the work around your business goals."}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#D2392A] text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95"
              >
                {isRTL ? "ابدأ مشروعك" : "Start a project"}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-black/15 dark:border-white/20 text-[#15100C] dark:text-[#F2E6DC] font-bold text-xs uppercase tracking-wider active:scale-95"
              >
                {isRTL ? "استكشف أعمالنا" : "Explore our work"}
              </Link>
            </div>
          </div>

          {/* Quick Nav Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mb-5">
            {SERVICES_8.map((s) => (
              <button
                key={s.num}
                type="button"
                onClick={() => {
                  setExpandedMobile(s.num);
                  handleScrollTo(`mobile-service-${s.num}`);
                }}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold shrink-0 bg-black/[0.04] dark:bg-white/[0.06] text-[#15100C]/75 dark:text-[#F2E6DC]/75 border border-black/[0.06] dark:border-white/10"
              >
                <span className="text-[#D2392A] me-1">{s.num}</span>
                <span>{isRTL ? s.nameAr : s.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Mobile Accordion List */}
          <div className="flex flex-col border-t border-black/10 dark:border-white/10">
            {SERVICES_8.map((item) => {
              const isOpen = expandedMobile === item.num;
              return (
                <div
                  key={item.num}
                  id={`mobile-service-${item.num}`}
                  className="border-b border-black/10 dark:border-white/10 scroll-mt-24"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedMobile(isOpen ? null : item.num)}
                    className="w-full py-4 flex items-center justify-between text-start focus:outline-none group select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#D2392A] shrink-0">
                        · {item.num}
                      </span>
                      <span
                        className="text-[14px] font-bold uppercase tracking-wider text-[#15100C] dark:text-[#F2E6DC] group-hover:text-[#D2392A] transition-colors"
                        style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                      >
                        {isRTL ? item.nameAr : item.nameEn}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#15100C]/50 dark:text-[#F2E6DC]/50">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expanded Content Panel */}
                  {isOpen && (
                    <div className="pb-5 pt-1 space-y-3.5">
                      {/* Headline */}
                      <p
                        className="text-xs font-black uppercase text-[#D2392A] leading-snug tracking-tight"
                        style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                      >
                        {isRTL ? item.headlineAr : item.headlineEn}
                      </p>

                      {/* Description */}
                      <p className="text-xs leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75">
                        {isRTL ? item.descAr : item.descEn}
                      </p>

                      {/* Image Preview */}
                      <div className="relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 h-36 w-full bg-black/5 dark:bg-white/5">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {item.client && (
                          <span className="absolute bottom-2 start-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-white">
                            {item.client}
                          </span>
                        )}
                      </div>

                      {/* PR & UGC Split on Mobile */}
                      {item.isPrUgcSplit ? (
                        <div className="space-y-3 pt-2">
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D2392A] block mb-1.5">
                              {isRTL ? "العلاقات العامة" : "Public Relations"}
                            </span>
                            <ul className="space-y-1">
                              {(isRTL ? item.prScopeAr : item.prScopeEn)?.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-[#15100C]/80 dark:text-[#F2E6DC]/80">
                                  <span className="w-1 h-1 rounded-full bg-[#D2392A] shrink-0 mt-1.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D2392A] block mb-1.5">
                              {isRTL ? "صناع المحتوى" : "UGC & Creators"}
                            </span>
                            <ul className="space-y-1">
                              {(isRTL ? item.ugcScopeAr : item.ugcScopeEn)?.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-[#15100C]/80 dark:text-[#F2E6DC]/80">
                                  <span className="w-1 h-1 rounded-full bg-[#D2392A] shrink-0 mt-1.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        /* Standard Scope */
                        <div className="pt-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D2392A] block mb-1.5">
                            {isRTL ? "نطاق العمل" : "Scope & Deliverables"}
                          </span>
                          <ul className="space-y-1">
                            {(isRTL ? item.scopeAr : item.scopeEn).map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-[#15100C]/80 dark:text-[#F2E6DC]/80">
                                <span className="w-1 h-1 rounded-full bg-[#D2392A] shrink-0 mt-1.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Production 3D & AI notes on Mobile */}
                      {item.hasAIShowcase && (
                        <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/10 space-y-1 text-[11px]">
                          <span className="font-bold text-[#D2392A] block">
                            REAL PRODUCTION. EXPANDED POSSIBILITIES.
                          </span>
                          <p className="text-[10.5px] text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed">
                            {isRTL
                              ? '"تم التصوير في استوديوهاتنا. البيئة صُممت بالذكاء الاصطناعي. الإخراج بواسطة AMS."'
                              : '"Shot in our studio. Environment created with AI. Directed and finished by AMS."'}
                          </p>
                        </div>
                      )}

                      {/* Start project button */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#D2392A] text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95"
                      >
                        <span>{isRTL ? "ابدأ استفسارك عن هذه الخدمة" : "Start A Project"}</span>
                        <ArrowRight size={13} className="rtl:rotate-180" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          DESKTOP VIEW (hidden md:block) — Rich Layout
          ========================================================= */}
      <div className="hidden md:block max-w-6xl mx-auto px-8 md:px-12">
        {/* Top Header Section from Brief #1 */}
        <FadeIn delay={0.1} y={30}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-[2.5px] bg-[#D2392A] inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "خدماتنا" : "OUR SERVICES"}
              </span>
              <span className="w-6 h-[2.5px] bg-[#D2392A] inline-block" />
            </div>

            {/* Main Heading */}
            <h2
              className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[0.98] mb-4 text-balance"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL ? "ثماني خدمات. منظومة واحدة متصلة." : "Eight services. One connected system."}
            </h2>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base md:text-[1.05rem] leading-relaxed text-[#15100C]/80 dark:text-[#F2E6DC]/80 font-normal max-w-2xl mx-auto mb-6 text-balance">
              &ldquo;
              {isRTL
                ? "من الاستراتيجية والمحتوى الإبداعي إلى الإنتاج، السوشيال، وإعلانات الأداء، نربط العمل حول أهدافك التجارية."
                : "From strategy and creative to production, social, and performance, we connect the work around your business goals."}
              &rdquo;
            </p>

            {/* Two CTA Buttons from Section 1 */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#D2392A] hover:bg-[#b02e20] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>{isRTL ? "ابدأ مشروعك" : "Start a project"}</span>
                <ArrowRight size={13} className="ms-1.5 rtl:rotate-180" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/20 dark:border-white/20 hover:border-[#D2392A] hover:text-[#D2392A] text-[#15100C] dark:text-[#F2E6DC] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>{isRTL ? "استكشف أعمالنا" : "Explore our work"}</span>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Quick Jump Navigation Strip from Section 4 */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-5xl mx-auto px-2">
          {SERVICES_8.map((s) => (
            <button
              key={s.num}
              type="button"
              onClick={() => handleScrollTo(`service-${s.num}`)}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/[0.04] dark:bg-white/[0.05] hover:bg-[#D2392A] hover:text-white hover:border-[#D2392A] text-[#15100C] dark:text-[#F2E6DC] border border-black/[0.08] dark:border-white/10 transition-all cursor-pointer active:scale-95 shadow-2xs hover:shadow-xs"
            >
              <span className="text-[#D2392A] group-hover:text-white font-black">{s.num}</span>
              <span>{isRTL ? s.nameAr : s.nameEn}</span>
            </button>
          ))}
        </div>

        {/* 8 Horizontal Editorial Cards — hover or click opens full brief details */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {SERVICES_8.map((item, idx) => {
            const isHovered = hoveredCard === item.num;
            const isClicked = activeCard === item.num;
            const isExpanded = isHovered || isClicked;
            const scopeList = isRTL ? item.scopeAr : item.scopeEn;

            return (
              <FadeIn key={item.num} delay={idx * 0.05} y={20}>
                <div
                  id={`service-${item.num}`}
                  className={`group relative rounded-[28px] md:rounded-[32px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border transition-all duration-300 p-5 sm:p-7 md:p-8 scroll-mt-24 cursor-pointer ${
                    isExpanded
                      ? "border-[#D2392A]/50 shadow-[0_16px_48px_rgba(210,57,42,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                      : "border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
                  }`}
                  onMouseEnter={() => setHoveredCard(item.num)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveCard(activeCard === item.num ? null : item.num)}
                >
                  {/* ── Main Row (Always Visible) ── */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 lg:gap-8">
                    {/* Left: Dash + Large Number */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                      <span
                        className="w-4 sm:w-6 h-[2.5px] shrink-0 transition-colors duration-300"
                        style={{ backgroundColor: isExpanded ? "#D2392A" : "rgba(21,16,12,0.18)" }}
                      />
                      <span
                        className="font-black text-3xl sm:text-5xl md:text-6xl leading-none tracking-tight select-none transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                          color: isExpanded ? "#D2392A" : undefined,
                        }}
                      >
                        {item.num}
                      </span>
                      {/* Vertical Divider */}
                      <span className="w-px h-10 sm:h-14 bg-black/10 dark:bg-white/10 mx-2 sm:mx-4 hidden md:block" />
                    </div>

                    {/* Center: Title + Headline + Description */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="font-black text-base sm:text-xl md:text-2xl uppercase tracking-wide text-[#15100C] dark:text-[#F2E6DC] transition-colors duration-300 group-hover:text-[#D2392A]"
                          style={{
                            fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                          }}
                        >
                          {isRTL ? item.nameAr : item.nameEn}
                        </h3>
                        <span className="text-[10px] font-mono text-[#D2392A] font-bold px-2 py-0.5 rounded-full bg-[#D2392A]/10 border border-[#D2392A]/20">
                          0{idx + 1} / 08
                        </span>
                      </div>

                      {/* Brief Headline */}
                      <p
                        className="text-xs sm:text-sm font-bold uppercase tracking-tight text-[#D2392A] mb-1.5"
                        style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                      >
                        &ldquo;{isRTL ? item.headlineAr : item.headlineEn}&rdquo;
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-[14px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal max-w-2xl">
                        {isRTL ? item.descAr : item.descEn}
                      </p>
                    </div>

                    {/* Right: Work Sample Image Container */}
                    <div className="shrink-0 self-center relative overflow-hidden rounded-xl sm:rounded-[20px] border border-black/10 dark:border-white/10 shadow-sm w-full sm:w-[180px] md:w-[220px] h-[150px] sm:h-auto sm:aspect-[16/10] bg-black/5 dark:bg-white/5 group">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      {item.client && (
                        <div className="absolute bottom-2 start-2 end-2 text-[10px] font-mono font-medium text-white/90 truncate">
                          {item.client}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── Hover / Click Expand Panel: All Brief Details ── */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isExpanded ? "1200px" : "0px",
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="pt-6 mt-6 border-t border-black/[0.08] dark:border-white/10 space-y-5">
                      {/* Section: PR & UGC Split (Two Visually Distinct Columns) */}
                      {item.isPrUgcSplit ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/10">
                          {/* Column 1: Public Relations */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="w-2 h-2 rounded-full bg-[#D2392A]" />
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D2392A]">
                                {isRTL ? "العلاقات العامة (Public Relations)" : "Public Relations"}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {(isRTL ? item.prScopeAr : item.prScopeEn)?.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-center gap-2 text-xs sm:text-[13px] text-[#15100C]/80 dark:text-[#F2E6DC]/80"
                                >
                                  <Check size={12} className="text-[#D2392A] shrink-0" strokeWidth={3} />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 2: UGC & Creators */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="w-2 h-2 rounded-full bg-[#D2392A]" />
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D2392A]">
                                {isRTL ? "صناع المحتوى (UGC & Creators)" : "UGC & Creators"}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {(isRTL ? item.ugcScopeAr : item.ugcScopeEn)?.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-center gap-2 text-xs sm:text-[13px] text-[#15100C]/80 dark:text-[#F2E6DC]/80"
                                >
                                  <Check size={12} className="text-[#D2392A] shrink-0" strokeWidth={3} />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        /* Standard Scope List */
                        <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/10">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D2392A] block mb-3.5">
                            {isRTL ? "نطاق العمل والمخرجات" : "SCOPE & DELIVERABLES"}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {scopeList.map((scopeItem, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-center gap-2 p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] text-xs sm:text-[12.5px] text-[#15100C]/85 dark:text-[#F2E6DC]/85"
                              >
                                <Check size={13} className="text-[#D2392A] shrink-0" strokeWidth={2.6} />
                                <span className="truncate">{scopeItem}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 04 Media Production: 3D Solutions & AI Production Showcases */}
                      {item.hasAIShowcase && (
                        <div className="space-y-4 pt-1">
                          {/* 3D Solutions Note */}
                          <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2">
                              <Box size={14} className="text-[#D2392A] shrink-0" />
                              <span className="font-bold uppercase tracking-wider text-[#15100C] dark:text-[#F2E6DC]">
                                {isRTL ? "حلول 3D: النمذجة والرندرة و CGI" : "3D Solutions: Modeling, Rendering & CGI"}
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-[#15100C]/60 dark:text-[#F2E6DC]/60">
                              {isRTL ? "مدمجة بالكامل ضمن إنتاج AMS" : "Fully integrated within AMS Production"}
                            </span>
                          </div>

                          {/* AI Showcase Box from Brief */}
                          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#120b09] via-[#0d1516] to-[#081516] text-white border border-[#D2392A]/30 space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Cpu size={14} className="text-[#D2392A]" />
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D2392A]">
                                  REAL PRODUCTION. EXPANDED POSSIBILITIES.
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-white/50">
                                AI-ASSISTED PRODUCTION
                              </span>
                            </div>

                            <p className="text-xs text-white/80 leading-relaxed font-normal">
                              &ldquo;
                              {isRTL
                                ? "ندمج لقطات التصوير الحي والفوتوغرافي مع بيئات وعناصر بصرية مولدة بالذكاء الاصطناعي لخلق صور حملات، وعوالم منتجات جديدة حول علامتك."
                                : "We combine live-action footage and photography with AI-generated environments and visual elements to create campaign imagery, product visuals, and new worlds around your brand."}
                              &rdquo;
                            </p>

                            <p className="text-[11px] font-mono text-white/60 italic pt-1 border-t border-white/10">
                              {isRTL
                                ? '"تم التصوير في استوديوهاتنا. البيئة صُممت بالذكاء الاصطناعي. الإخراج واللمسات النهائية بواسطة AMS."'
                                : '"Shot in our studio. Environment created with AI. Directed and finished by AMS."'}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Footer Row: Client & AMS Role + Start Project Button */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-black/[0.06] dark:border-white/10 text-xs">
                        <div className="flex items-center gap-2 text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-mono text-[11.5px]">
                          <span className="font-bold text-[#15100C] dark:text-[#F2E6DC]">
                            {isRTL ? "العميل:" : "Client:"}
                          </span>
                          <span>{item.client}</span>
                          <span className="text-black/30 dark:text-white/30">·</span>
                          <span className="font-bold text-[#D2392A]">
                            {isRTL ? "دور AMS:" : "AMS Role:"}
                          </span>
                          <span>{isRTL ? item.amsRoleAr : item.amsRoleEn}</span>
                        </div>

                        <Link
                          href="/contact"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D2392A] hover:bg-[#b02e20] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all self-start sm:self-center"
                        >
                          <span>{isRTL ? "ابدأ استفسارك" : "Start Project"}</span>
                          <ArrowRight size={12} className="rtl:rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
