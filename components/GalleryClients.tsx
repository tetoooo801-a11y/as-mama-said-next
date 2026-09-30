"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, ArrowUpRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryClients() {
  const { t, isRTL } = useLanguage();
  const section = t.results.clientsSection;

  if (!section) return null;

  return (
    <section className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-[#FAF6F0] dark:bg-[#061516] transition-colors border-t border-black/[0.06] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/25 mb-4 sm:mb-5">
            <Building2 size={14} className="shrink-0" />
            <span>{section.badge}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.08] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {section.title}
          </h2>

          <p className="text-base sm:text-lg font-bold text-[#D2392A] mb-3">
            {section.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed font-normal">
            {section.sub}
          </p>

          {/* Quick Credibility Trust Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 w-full max-w-2xl pt-6 border-t border-black/[0.08] dark:border-white/10">
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#D2392A]" style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}>
                {section.stat1Num}
              </span>
              <span className="text-[11px] sm:text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-semibold mt-1">
                {section.stat1Label}
              </span>
            </div>
            <div className="flex flex-col items-center text-center border-x border-black/[0.08] dark:border-white/10 px-2">
              <span className="text-2xl sm:text-3xl font-black text-[#15100C] dark:text-[#F2E6DC]" style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}>
                {section.stat2Num}
              </span>
              <span className="text-[11px] sm:text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-semibold mt-1">
                {section.stat2Label}
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#D2392A]" style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}>
                {section.stat3Num}
              </span>
              <span className="text-[11px] sm:text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-semibold mt-1">
                {section.stat3Label}
              </span>
            </div>
          </div>
        </div>

        {/* Brands & Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {section.items.map((client: any, idx: number) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-white dark:bg-[#0c1c1e] border border-black/[0.08] dark:border-white/10 shadow-[0_8px_24px_rgba(21,16,12,0.04)] hover:shadow-[0_16px_36px_rgba(210,57,42,0.12)] hover:border-[#D2392A]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top: Monogram Avatar & Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 flex items-center justify-center font-black text-sm tracking-wider group-hover:scale-105 group-hover:bg-[#D2392A] group-hover:text-white transition-all duration-300">
                    {client.initials}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[#15100C]/70 dark:text-[#F2E6DC]/70 border border-black/[0.06] dark:border-white/10">
                    {client.tag}
                  </span>
                </div>

                {/* Client Name */}
                <h3
                  className="text-lg sm:text-xl font-bold text-[#15100C] dark:text-[#F2E6DC] group-hover:text-[#D2392A] transition-colors mb-1.5"
                  style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                >
                  {client.name}
                </h3>

                {/* Location & Industry */}
                <div className="flex items-center gap-1.5 text-xs text-[#15100C]/60 dark:text-[#F2E6DC]/60 mb-3.5 font-medium">
                  <MapPin size={12} className="text-[#D2392A] shrink-0" />
                  <span>{client.location}</span>
                  <span className="opacity-40">•</span>
                  <span>{client.industry}</span>
                </div>

                {/* Deliverable Narrative */}
                <p className="text-xs sm:text-[13px] text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed font-normal">
                  {client.deliverable}
                </p>
              </div>

              {/* Card Bottom: Year & Verified Partnership Indicator */}
              <div className="pt-4 mt-5 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between text-[11px] text-[#15100C]/50 dark:text-[#F2E6DC]/50 font-semibold">
                <span className="flex items-center gap-1 text-[#D2392A]">
                  <CheckCircle2 size={12} />
                  <span>{isRTL ? "شراكة موثقة" : "Verified Partner"}</span>
                </span>
                <span>{client.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* All Verified Clients Tags Cloud */}
        {section.allClients && section.allClients.length > 0 && (
          <div className="mt-14 sm:mt-18 pt-10 border-t border-black/[0.08] dark:border-white/10">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2392A] block mb-1">
                {isRTL ? "شبكة الشراكات الموسعة عبر مصر والخليج" : "FURTHER PARTNERSHIPS ACROSS EGYPT AND THE GULF"}
              </span>
              <p className="text-xs sm:text-sm text-[#15100C]/60 dark:text-[#F2E6DC]/60">
                {isRTL
                  ? "مؤسسات تعليمية، شركات مساهمة، براندات عالمية، وشخصيات عامة"
                  : "Multinationals, public figures, universities, and leading regional enterprises"}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
              {section.allClients.map((cName: string, cIdx: number) => (
                <span
                  key={cIdx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#0c1c1e] border border-black/[0.06] dark:border-white/10 text-[#15100C]/80 dark:text-[#F2E6DC]/80 hover:border-[#D2392A]/50 hover:text-[#D2392A] shadow-sm transition-all select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2392A]" />
                  <span>{cName}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#D2392A]/[0.04] dark:bg-[#D2392A]/[0.08] border border-[#D2392A]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#15100C] dark:text-[#F2E6DC] mb-1" style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}>
              {isRTL ? "هل ترغب في انضمام علامتك التجارية لشركائنا؟" : "Want to see your brand in our client portfolio?"}
            </h4>
            <p className="text-xs sm:text-sm text-[#15100C]/70 dark:text-[#F2E6DC]/70">
              {isRTL
                ? "دعنا نبدأ بالسؤال الصحيح ونبني حضوراً واستراتيجية تسويقية تقود السوق."
                : "Let's start with the right question and build work that performs."}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D2392A] hover:bg-[#b82f22] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md shrink-0 cursor-pointer"
          >
            <span>{isRTL ? "ابدأ مشروعك معنا" : "Start Your Project"}</span>
            <ArrowUpRight size={16} className={isRTL ? "rotate-[-90deg]" : ""} />
          </Link>
        </div>

      </div>
    </section>
  );
}
