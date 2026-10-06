"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_8 } from "@/data/servicesData";

export default function ServicesQuickNav() {
  const { isRTL } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="services-list"
      aria-label="Services Navigation"
      className="sticky top-16 z-30 w-full bg-[#FAF6F0]/90 dark:bg-[#061516]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/10 py-3.5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D2392A] shrink-0 me-2 hidden sm:inline-block">
            {isRTL ? "الخدمات:" : "DISCIPLINES:"}
          </span>
          {SERVICES_8.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleScrollTo(`service-${s.num}`)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-black/[0.03] dark:bg-white/[0.05] hover:bg-[#D2392A] hover:text-white dark:hover:bg-[#D2392A] text-[#15100C]/80 dark:text-[#F2E6DC]/80 border border-black/[0.06] dark:border-white/10 shrink-0 transition-all cursor-pointer active:scale-95"
            >
              <span className="font-bold text-[#D2392A] group-hover:text-white">{s.num}</span>
              <span className="truncate">{isRTL ? s.nameAr : s.nameEn}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
