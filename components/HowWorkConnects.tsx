"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Workflow } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { HOW_WORK_CONNECTS } from "@/data/servicesData";

export default function HowWorkConnects() {
  const { isRTL } = useLanguage();

  return (
    <section className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] py-16 sm:py-24 border-t border-black/[0.06] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Workflow size={13} />
              <span>{isRTL ? "منظومة عمل متصلة" : "INTEGRATED ECOSYSTEM"}</span>
            </div>

            <h2
              className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-3 text-balance"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL ? HOW_WORK_CONNECTS.titleAr : HOW_WORK_CONNECTS.titleEn}
            </h2>

            {/* Connected Sequence from Brief */}
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 text-xs sm:text-sm font-mono font-bold text-[#D2392A] mb-4">
              <span>{isRTL ? "الاستراتيجية" : "Strategy"}</span>
              <span className="text-black/30 dark:text-white/30 rtl:rotate-180">→</span>
              <span>{isRTL ? "الإبداع" : "Creative"}</span>
              <span className="text-black/30 dark:text-white/30 rtl:rotate-180">→</span>
              <span>{isRTL ? "الإنتاج" : "Production"}</span>
              <span className="text-black/30 dark:text-white/30 rtl:rotate-180">→</span>
              <span>{isRTL ? "النشر والإعلانات الممولة" : "Publishing & Paid Media"}</span>
              <span className="text-black/30 dark:text-white/30 rtl:rotate-180">→</span>
              <span>{isRTL ? "التحليل والتطوير" : "Reporting & Optimization"}</span>
            </div>

            <p className="text-base sm:text-lg text-[#15100C]/80 dark:text-[#F2E6DC]/80 font-medium leading-relaxed italic max-w-2xl mx-auto text-balance">
              &ldquo;{isRTL ? HOW_WORK_CONNECTS.quoteAr : HOW_WORK_CONNECTS.quoteEn}&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* 5-Step Connected Flow (Desktop Horizontal Pipeline / Mobile Vertical Chain) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 lg:gap-4 relative mb-12">
          {HOW_WORK_CONNECTS.steps.map((s, idx) => (
            <FadeIn key={s.step} delay={idx * 0.08} y={20}>
              <div className="relative rounded-2xl bg-white dark:bg-[#0c1b1c] border border-black/[0.08] dark:border-white/10 p-5 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between group hover:border-[#D2392A]/40">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-xl bg-[#D2392A]/10 text-[#D2392A] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {s.step}
                    </span>
                    {idx < HOW_WORK_CONNECTS.steps.length - 1 && (
                      <span className="hidden md:block text-[#15100C]/25 dark:text-[#F2E6DC]/25 font-bold text-lg">
                        →
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-base font-bold uppercase text-[#15100C] dark:text-[#F2E6DC] mb-2 leading-snug group-hover:text-[#D2392A] transition-colors"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {isRTL ? s.nameAr : s.nameEn}
                  </h3>
                  <p className="text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 leading-relaxed font-normal">
                    {isRTL ? s.descAr : s.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/[0.04] dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-[#D2392A]">
                  <CheckCircle2 size={12} />
                  <span>{isRTL ? "مرحلة معتمدة" : "Verified Phase"}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15100C] dark:bg-white text-white dark:text-[#15100C] font-bold text-xs uppercase tracking-wider hover:bg-[#D2392A] dark:hover:bg-[#D2392A] dark:hover:text-white transition-all shadow-sm active:scale-95"
          >
            <span>{isRTL ? "استشرنا حول مشروعك" : "Consult On Your Project"}</span>
            <ArrowRight size={13} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
