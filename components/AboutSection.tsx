"use client";

import React from "react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { isRTL } = useLanguage();

  const englishTextFull =
    "We were doing marketing before marketing moved online. As Mama Said is a strategy-led creative, production, and performance agency with more than 20 years of marketing experience — built in traditional media and sharpened through every shift since. We understand marketing as a business discipline first and a platform second — rooted in business, relevant to audiences, and built to perform across Egypt, UAE, Saudi Arabia, and Qatar.";

  const arabicTextFull =
    "بدأنا في عالم التسويق قبل حتى أن ينتقل التسويق إلى الإنترنت. استوديو «As Mama Said» وكالة متكاملة تقودها الاستراتيجية في مجالات الإبداع، الإنتاج الإعلامي، وإدارة الأداء التسويقي، بخبرة تمتد لأكثر من 20 عاماً. نفهم التسويق كعلم تجاري وركيزة أعمال أولاً ثم كمنصة، لنقدم أعمالاً متجذرة في قلب النشاط التجاري ومبنية لتحقيق أعلى أداء ونتائج عبر مصر والإمارات والسعودية وقطر.";

  // Concise short mobile description matching the visual reference
  const englishTextShort =
    "We're a strategy-led creative production studio based in Cairo & Dubai, specializing in film, CGI, commercials, and branded content. Built on 20+ years of marketing heritage and driven by storytelling that performs.";

  const arabicTextShort =
    "استوديو إبداعي تقوده الاستراتيجية في القاهرة ودبي، متخصص في الإنتاج الإعلامي، الـ 3D، وتصميم الهويات التجارية. نرتكز على خبرة تمتد لأكثر من 20 عاماً لنصنع أعمالاً تخطف الأنظار وتحقق نتائج ملموسة.";

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
      className="relative w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] selection:bg-[#D2392A] selection:text-white py-12 sm:py-20 md:py-32 overflow-hidden transition-colors"
    >
      {/* =========================================================
          MOBILE VIEW (md:hidden) — Condensed reference layout:
          - Red dot + ABOUT US
          - Short concise description
          - One single director photo with balanced proportions
          - Generous px-6 horizontal padding (never touches edges!)
          ========================================================= */}
      <div className="block md:hidden px-6 max-w-lg mx-auto">
        <FadeIn delay={0.1} y={20}>
          {/* Header with Red Dot */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#D2392A] shrink-0" />
            <h2
              className="text-2xl font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-none"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "عن الاستوديو" : "ABOUT US"}
            </h2>
          </div>

          {/* Concise Mobile Description */}
          <p className="text-[14px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal mb-5">
            {isRTL ? arabicTextShort : englishTextShort}
          </p>

          {/* Single Primary Image with Rounded Corners */}
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-black/5 dark:border-white/10 h-[200px] w-full">
            <img
              src="/assets/images/about-director.webp"
              alt="As Mama Said Studio Director"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          DESKTOP VIEW (hidden md:block) — Full rich layout untouched
          ========================================================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-8 md:px-12">
        <FadeIn delay={0.1} y={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#D2392A] inline-block" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                  {isRTL ? "من نحن" : "WHO WE ARE"}
                </span>
              </div>
              <h2
                className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[0.95]"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {isRTL ? "من نحن" : "ABOUT US"}
              </h2>
            </div>

            <div className="lg:col-span-6 lg:border-l border-black/10 dark:border-white/10 rtl:lg:border-l-0 rtl:lg:border-r lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10 flex items-center">
              <p className="text-base md:text-[1.05rem] leading-relaxed text-[#15100C]/80 dark:text-[#F2E6DC]/80 font-normal">
                {isRTL ? arabicTextFull : englishTextFull}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={40}>
          <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* 1. Large Director Photo */}
            <div className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-[32px] md:rounded-[38px] shadow-[0_12px_36px_rgba(0,0,0,0.06)] min-h-[380px] lg:min-h-[460px] group">
              <img
                src="/assets/images/about-director.webp"
                alt="As Mama Said Studio Director"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* 2. Middle Approach Card */}
            <div className="col-span-7 lg:col-span-3 rounded-[32px] md:rounded-[38px] bg-[#F5EFE8]/75 dark:bg-[#0C1B1C]/80 border border-black/8 dark:border-white/10 p-7 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] gap-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#D2392A] inline-block" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                  {isRTL ? "منهجيتنا" : "OUR APPROACH"}
                </span>
              </div>

              <div className="flex flex-col gap-6 my-auto">
                {approaches.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h3 className="font-bold text-[17px] text-[#15100C] dark:text-[#F2E6DC] mb-1 tracking-tight">
                      {isRTL ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-[13px] text-[#15100C]/65 dark:text-[#F2E6DC]/65 leading-relaxed">
                      {isRTL ? item.descAr : item.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Right Sculpture Photo + Stats */}
            <div className="col-span-5 lg:col-span-2 flex flex-col justify-between gap-6">
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_8px_25px_rgba(0,0,0,0.06)] h-[260px] lg:h-[290px] group">
                <img
                  src="/assets/images/about-sculpture.webp"
                  alt="Craft and Sculpture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center pt-4">
                <div
                  className="font-black text-5xl lg:text-[4.2rem] text-[#D2392A] leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                >
                  20+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#15100C]/70 dark:text-[#F2E6DC]/70 mt-2.5 leading-snug">
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
