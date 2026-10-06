"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesHero() {
  const { isRTL } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 border-b border-black/[0.06] dark:border-white/10 transition-colors">
      {/* Background AMS studio visual with sleek gradient blend */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-15 mix-blend-luminosity filter blur-[1px] scale-105"
          style={{ backgroundImage: "url('/assets/images/hero-mama-studio.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/85 via-[#FAF6F0]/95 to-[#FAF6F0] dark:from-[#061516]/85 dark:via-[#061516]/95 dark:to-[#061516]" />

        {/* Ambient Warm Glow */}
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D2392A]/[0.07] dark:bg-[#D2392A]/[0.12] rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 text-xs font-mono font-bold tracking-wider uppercase mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D2392A] animate-pulse" />
          <span>{isRTL ? "خدماتنا الإبداعية" : "OUR SERVICES"}</span>
        </motion.div>

        {/* Main H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[0.96] mb-4 sm:mb-6"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
          }}
        >
          {isRTL ? "ثماني خدمات. منظومة واحدة متكاملة." : "Eight services. One connected system."}
        </motion.h1>

        {/* Strategic Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10"
        >
          {isRTL
            ? "من الاستراتيجية والأفكار الإبداعية إلى الإنتاج، السوشيال، والأداء التسويقي؛ نربط المنظومة بأكملها حول أهداف عملك."
            : "From strategy and creative to production, social, and performance, we connect the work around your business goals."}
        </motion.p>

        {/* Dual Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D2392A] hover:bg-[#b02e20] text-white text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span>{isRTL ? "ابدأ مشروعك" : "Start a project"}</span>
            <ArrowRight size={15} className="rtl:rotate-180" />
          </Link>

          <a
            href="#services-list"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-[#15100C] dark:text-[#F2E6DC] border border-black/10 dark:border-white/10 text-sm font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
          >
            <span>{isRTL ? "استكشف أعمالنا" : "Explore our work"}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
