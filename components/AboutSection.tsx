"use client";

import React from "react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { isRTL } = useLanguage();

  const englishText =
    "We were doing marketing before marketing moved online. As Mama Said is a strategy-led creative, production, and performance agency with more than 20 years of marketing experience — built in traditional media and sharpened through every shift since. We understand marketing as a business discipline first and a platform second — rooted in business, relevant to audiences, and built to perform across Egypt, UAE, Saudi Arabia, and Qatar.";

  const arabicText =
    "بدأنا في عالم التسويق قبل حتى أن ينتقل التسويق إلى الإنترنت. استوديو «As Mama Said» وكالة متكاملة تقودها الاستراتيجية في مجالات الإبداع، الإنتاج الإعلامي، وإدارة الأداء التسويقي، بخبرة تمتد لأكثر من 20 عاماً. نفهم التسويق كعلم تجاري وركيزة أعمال أولاً ثم كمنصة، لنقدم أعمالاً متجذرة في قلب النشاط التجاري ومبنية لتحقيق أعلى أداء ونتائج عبر مصر والإمارات والسعودية وقطر.";

  const approaches = [
    {
      titleEn: "Creative Thinking",
      titleAr: "تفكير إبداعي",
      descEn: "Bold ideas, rooted in culture and built for real impact.",
      descAr: "أفكار جريئة، متجذرة في الثقافة ومبنية لأثر حقيقي وملموس.",
    },
    {
      titleEn: "Crafted Production",
      titleAr: "إنتاج متقن",
      descEn: "From concept to final frame, we obsess over the details.",
      descAr: "من الفكرة حتى الكادر الأخير، ندقق بشغف في كافة التفاصيل.",
    },
    {
      titleEn: "Long-Term Partnerships",
      titleAr: "شراكات طويلة الأمد",
      descEn: "We grow with our clients, not just for a project, but for what's next.",
      descAr: "ننمو مع عملائنا وشركائنا، ليس لمشروع واحد، بل لكل ما هو قادم.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] selection:bg-[#D2392A] selection:text-white px-4 sm:px-8 md:px-12 py-14 sm:py-24 md:py-32 overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <FadeIn delay={0.1} y={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-10 sm:mb-16 md:mb-20">
            {/* Left side: Kicker and Big Title */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-5 sm:w-6 h-[2px] bg-[#D2392A] inline-block" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                  {isRTL ? "من نحن" : "WHO WE ARE"}
                </span>
              </div>
              <h2
                className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[0.95]"
                style={{
                  fontSize: "clamp(2.4rem, 7.5vw, 6.5rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {isRTL ? "من نحن" : "ABOUT US"}
              </h2>
            </div>

            {/* Right side: Paragraph Text separated by subtle border on desktop */}
            <div className="lg:col-span-6 lg:border-l border-black/10 dark:border-white/10 rtl:lg:border-l-0 rtl:lg:border-r lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10 flex items-center mt-2 lg:mt-0">
              <p className="text-sm sm:text-base md:text-[1.05rem] leading-relaxed text-[#15100C]/80 dark:text-[#F2E6DC]/80 font-normal">
                {isRTL ? arabicText : englishText}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Content Grid */}
        <FadeIn delay={0.25} y={40}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* 1. Large Director Photo (Left) */}
            <div className="md:col-span-12 lg:col-span-7 relative overflow-hidden rounded-2xl sm:rounded-[32px] md:rounded-[38px] shadow-[0_12px_36px_rgba(0,0,0,0.06)] h-[250px] sm:min-h-[380px] lg:min-h-[460px] group">
              <img
                src="/assets/images/about-director.webp"
                alt="As Mama Said Studio Director"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* 2. Middle Approach Card */}
            <div className="md:col-span-7 lg:col-span-3 rounded-2xl sm:rounded-[32px] md:rounded-[38px] bg-[#F5EFE8]/75 dark:bg-[#0C1B1C]/80 border border-black/8 dark:border-white/10 p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] gap-5 sm:gap-6">
              {/* Header */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#D2392A] inline-block" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                  {isRTL ? "منهجيتنا" : "OUR APPROACH"}
                </span>
              </div>

              {/* 3 Pillars */}
              <div className="flex flex-col gap-4 sm:gap-6 my-auto">
                {approaches.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h3 className="font-bold text-base sm:text-[17px] text-[#15100C] dark:text-[#F2E6DC] mb-1 tracking-tight">
                      {isRTL ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#15100C]/65 dark:text-[#F2E6DC]/65 leading-relaxed">
                      {isRTL ? item.descAr : item.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Right Sculpture Photo + 5+ Years Stats */}
            <div className="md:col-span-5 lg:col-span-2 flex flex-col justify-between gap-4 sm:gap-6">
              {/* Top: Portrait Sculpture Photo */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px] shadow-[0_8px_25px_rgba(0,0,0,0.06)] h-[190px] sm:h-[260px] lg:h-[290px] group">
                <img
                  src="/assets/images/about-sculpture.webp"
                  alt="Craft and Sculpture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom: Stat Box */}
              <div className="flex flex-col justify-center pt-2 sm:pt-4">
                <div
                  className="font-black text-4xl sm:text-6xl lg:text-[4.2rem] text-[#D2392A] leading-none tracking-tight"
                  style={{
                    fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                  }}
                >
                  20+
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#15100C]/70 dark:text-[#F2E6DC]/70 mt-1.5 sm:mt-2.5 leading-snug">
                  {isRTL ? "عاماً من الخبرة التسويقية" : "YEARS OF MARKETING HERITAGE"}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
