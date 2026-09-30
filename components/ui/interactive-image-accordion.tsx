"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AccordionItemData {
  id: number;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  imageUrl: string;
}

// --- Data for the studio gallery image accordion ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    titleEn: "3D Modeling & CGI",
    titleAr: "النمذجة ثلاثية الأبعاد",
    categoryEn: "Spatial Geometry",
    categoryAr: "مجسمات وبيئات",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    titleEn: "Cinematic Rendering",
    titleAr: "الرندرة الواقعية",
    categoryEn: "Lighting & Materials",
    categoryAr: "إضاءة وخامات",
    imageUrl:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    titleEn: "Motion & Film",
    titleAr: "تصميم الحركة والأنيميشن",
    categoryEn: "Kinetic Direction",
    categoryAr: "إخراج حركي",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    titleEn: "Brand Identity",
    titleAr: "الهوية البصرية",
    categoryEn: "Visual Systems",
    categoryAr: "أنظمة الهوية",
    imageUrl:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    titleEn: "Digital Experiences",
    titleAr: "التجارب الرقمية",
    categoryEn: "Interactive Web",
    categoryAr: "ويب تفاعلي",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  isRTL: boolean;
}

const AccordionItem = ({ item, isActive, onMouseEnter, isRTL }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out select-none shrink-0
        ${isActive ? "w-[220px] sm:w-[280px] md:w-[340px]" : "w-[52px] sm:w-[58px] md:w-[64px]"}
        border border-black/[0.08] dark:border-white/10 shadow-lg group
      `}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={isRTL ? item.titleAr : item.titleEn}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "/assets/images/service-1-3d.png";
        }}
        loading="lazy"
      />

      {/* Dark overlay for text contrast */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive
            ? "bg-gradient-to-t from-black/90 via-black/35 to-transparent"
            : "bg-black/55 group-hover:bg-black/40"
        }`}
      />

      {/* Caption Content */}
      {isActive ? (
        <div className="absolute bottom-5 inset-x-5 z-10 flex flex-col gap-1 transition-all duration-300">
          <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-[#D2392A]">
            {isRTL ? item.categoryAr : item.categoryEn}
          </span>
          <h4
            className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {isRTL ? item.titleAr : item.titleEn}
          </h4>
        </div>
      ) : (
        <span
          className="absolute text-white/80 group-hover:text-white text-xs sm:text-[13px] font-bold tracking-wider whitespace-nowrap bottom-24 left-1/2 -translate-x-1/2 rotate-90 transition-all duration-300 origin-center uppercase"
          style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
        >
          {isRTL ? item.titleAr : item.titleEn}
        </span>
      )}
    </div>
  );
};

// --- Main Interactive Image Accordion Component ---
export function LandingAccordionItem() {
  const { isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors py-12 sm:py-16 md:py-20 border-b border-black/[0.08] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Side: Text Content with "Welcome to our gallery" */}
          <div className="w-full lg:w-5/12 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 mb-4 sm:mb-5">
              <Sparkles size={14} />
              <span>{isRTL ? "استكشف أعمالنا" : "STUDIO SHOWCASE"}</span>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-[1.04] tracking-tight mb-5 sm:mb-6"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "أهلاً بكم في معرض أعمالنا" : "Welcome to our gallery"}
            </h2>

            <p className="text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-7 sm:mb-8">
              {isRTL
                ? "مجموعة مختارة من أبرز مشاريعنا الإبداعية، من الأفلام ثلاثية الأبعاد والرندرة السينمائية إلى أنظمة الهوية البصرية والتطبيقات الرقمية التفاعلية."
                : "A curated showcase of our commercial 3D films, photorealistic renders, brand systems, and interactive digital flagships engineered across Cairo and Dubai."}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D2392A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#b82f22] transition-colors shadow-lg cursor-pointer"
              >
                <span>{isRTL ? "ابدأ مشروعك" : "Start a project"}</span>
                <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
              </Link>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-7/12 flex items-center justify-center overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3 p-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  isRTL={isRTL}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingAccordionItem;
