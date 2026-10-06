"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";
import { Users, Rocket, Globe, Heart, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const { t, isRTL } = useLanguage();

  const getStatIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case "users":
        return <Users size={size} strokeWidth={1.75} />;
      case "rocket":
        return <Rocket size={size} strokeWidth={1.75} />;
      case "globe":
        return <Globe size={size} strokeWidth={1.75} />;
      case "heart":
      default:
        return <Heart size={size} strokeWidth={1.75} />;
    }
  };

  const defaultStats = [
    {
      val: isRTL ? "+20" : "20+",
      label: isRTL ? "عاماً من الخبرة التسويقية المتراكمة" : "Years of marketing experience",
      icon: "users",
    },
    {
      val: "2",
      label: isRTL ? "أسواق رئيسية: مصر والإمارات" : "Markets: Egypt & UAE",
      icon: "globe",
    },
    {
      val: "8",
      label: isRTL ? "خطوط خدمات متصلة تحت سقف واحد" : "Connected service lines under one roof",
      icon: "rocket",
    },
    {
      val: isRTL ? "+30" : "30+",
      label: isRTL ? "شريك نجاح وعلامة تجارية رائدة" : "Top-tier enterprise & brand partners",
      icon: "heart",
    },
  ];

  const statsList = t?.about?.stats || defaultStats;

  const englishTextFull =
    "We were doing marketing before marketing moved online. As Mama Said is a strategy-led creative, production, and performance agency with more than 20 years of marketing experience — built in traditional media and sharpened through every shift since. We understand marketing as a business discipline first and a platform second — rooted in business, relevant to audiences, and built to perform across Egypt and the UAE.";

  const arabicTextFull =
    "بدأنا في عالم التسويق قبل حتى أن ينتقل التسويق إلى الإنترنت. استوديو «As Mama Said» وكالة متكاملة تقودها الاستراتيجية في مجالات الإبداع، الإنتاج الإعلامي، وإدارة الأداء التسويقي، بخبرة تمتد لأكثر من 20 عاماً. نفهم التسويق كعلم تجاري وركيزة أعمال أولاً ثم كمنصة، لنقدم أعمالاً متجذرة في قلب النشاط التجاري ومبنية لتحقيق أعلى أداء ونتائج عبر مصر والإمارات.";

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
      className="relative w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] selection:bg-[#D2392A] selection:text-white pt-12 sm:pt-18 md:pt-24 pb-4 sm:pb-6 md:pb-8 overflow-hidden transition-colors"
    >
      {/* =========================================================
          MOBILE VIEW (md:hidden) — Condensed reference layout:
          - Red dot + ABOUT US
          - Big Readable Story Card (replaces director photo)
          - 4 Stat Counters Card
          ========================================================= */}
      <div className="block md:hidden px-6 max-w-lg mx-auto">
        <FadeIn delay={0.1} y={20}>
          {/* Header with Red Dot */}
          <div className="flex flex-col items-center text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D2392A] shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "من نحن" : "WHO WE ARE"}
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-none mb-1 text-balance"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "عن الاستوديو" : "ABOUT US"}
            </h2>
          </div>

          {/* Mobile Story Card (Replaces the director photo with large readable text) */}
          <div className="rounded-[24px] bg-white dark:bg-[#0C1B1C]/90 border border-black/8 dark:border-white/10 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#D2392A] inline-block" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D2392A]">
                {isRTL ? "فلسفتنا وتاريخنا" : "OUR HERITAGE"}
              </span>
            </div>
            <h3
              className="font-black text-lg sm:text-xl text-[#15100C] dark:text-[#F2E6DC] leading-snug mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL
                ? "بدأنا في عالم التسويق قبل حتى أن ينتقل التسويق إلى الإنترنت."
                : "We were doing marketing before marketing moved online."}
            </h3>
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#15100C]/85 dark:text-[#F2E6DC]/85 font-normal">
              {isRTL ? arabicTextFull : englishTextFull}
            </p>

            <div className="mt-4 pt-4 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between text-[11px] font-semibold text-[#15100C]/60 dark:text-[#F2E6DC]/60 uppercase tracking-wider">
              <span className="font-bold tracking-widest">{isRTL ? "مصر · الإمارات" : "Cairo · Dubai"}</span>
              <span className="text-[#D2392A] font-bold font-mono inline-flex items-center gap-1">
                <AnimatedCounter value={isRTL ? "+20" : "20+"} />
                <span>{isRTL ? "عاماً من الخبرة" : "YEARS"}</span>
              </span>
            </div>

            <div className="mt-3 pt-3 border-t border-black/[0.05] dark:border-white/5 flex items-center justify-end">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D2392A] hover:opacity-80 transition-opacity"
              >
                <span>{isRTL ? "عن الاستوديو وفلسفتنا بالتفصيل" : "Read our full story & philosophy"}</span>
                <ArrowRight size={13} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Mobile 4 Stat Counters Card */}
          <div className="mt-5 rounded-[22px] bg-[#07191a] text-white p-5 border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-2 gap-y-5 gap-x-3">
              {statsList.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="mb-1 flex items-center justify-center text-white/60">
                    {getStatIcon(stat.icon, 20)}
                  </div>
                  <span
                    className="text-2xl sm:text-3xl font-black text-[#D2392A] tracking-tight my-0.5"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    <AnimatedCounter value={stat.val} delay={idx * 0.15} />
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/70 font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          DESKTOP VIEW (hidden md:block) — Centered section heading
          ========================================================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-8 md:px-12">
        <FadeIn delay={0.1} y={30}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#D2392A] inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                {isRTL ? "من نحن" : "WHO WE ARE"}
              </span>
              <span className="w-6 h-[2px] bg-[#D2392A] inline-block" />
            </div>
            <h2
              className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[0.95] text-balance"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL ? "من نحن" : "ABOUT US"}
            </h2>
          </div>
        </FadeIn>

        {/* 3-Column Visual Grid */}
        <FadeIn delay={0.25} y={40}>
          <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* 1. Large Readable Story Card (Replaces Director Image) */}
            <div className="col-span-12 lg:col-span-7 rounded-[32px] md:rounded-[38px] bg-white dark:bg-[#0C1B1C]/90 border border-black/8 dark:border-white/10 p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-5 h-[2.5px] bg-[#D2392A] inline-block" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                    {isRTL ? "فلسفتنا وتاريخنا" : "OUR HERITAGE & PHILOSOPHY"}
                  </span>
                </div>

                <h3
                  className="font-black text-2xl sm:text-3xl lg:text-[2.1rem] leading-[1.2] text-[#15100C] dark:text-[#F2E6DC] tracking-tight mb-5"
                  style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                >
                  {isRTL
                    ? "بدأنا في عالم التسويق قبل حتى أن ينتقل التسويق إلى الإنترنت."
                    : "We were doing marketing before marketing moved online."}
                </h3>

                <p className="text-base sm:text-lg lg:text-[1.22rem] leading-[1.7] text-[#15100C]/85 dark:text-[#F2E6DC]/85 font-normal text-pretty">
                  {isRTL ? arabicTextFull : englishTextFull}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.08] dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-xs font-semibold text-[#15100C]/60 dark:text-[#F2E6DC]/60 uppercase tracking-wider">
                  <span className="font-bold tracking-widest">{isRTL ? "مصر · الإمارات" : "Cairo · Dubai"}</span>
                  <span className="text-[#D2392A] font-bold font-mono inline-flex items-center gap-1">
                    <AnimatedCounter value={isRTL ? "+20" : "20+"} />
                    <span>{isRTL ? "عاماً من الخبرة" : "YEARS HERITAGE"}</span>
                  </span>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D2392A] hover:text-[#b82f22] transition-colors group"
                >
                  <span>{isRTL ? "اقرأ قصتنا وفلسفتنا بالتفصيل" : "Explore our full story & philosophy"}</span>
                  <ArrowRight size={14} className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
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

            {/* 3. Right Sculpture Photo (Full Height, Matching Grid) */}
            <div className="col-span-5 lg:col-span-2 relative overflow-hidden rounded-[32px] md:rounded-[38px] shadow-[0_12px_36px_rgba(0,0,0,0.06)] min-h-[380px] lg:min-h-[460px] group">
              <img
                src="/assets/images/about-sculpture.webp"
                alt="Craft and Sculpture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </FadeIn>

        {/* 4. Stats Counter Card (Dark Pill Underneath About Section) */}
        <FadeIn delay={0.05} y={15}>
          <div className="mt-8 sm:mt-10 md:mt-12 rounded-[28px] sm:rounded-[36px] bg-[#07191a] text-white p-7 sm:p-9 lg:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 rtl:lg:divide-x-reverse">
              {statsList.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center ${
                    idx === 0
                      ? "lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8"
                      : idx === 3
                      ? "lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8"
                      : "lg:px-8"
                  }`}
                >
                  <div className="mb-2.5 flex items-center justify-center text-white/60">
                    {getStatIcon(stat.icon)}
                  </div>
                  <span
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D2392A] tracking-tight my-1.5"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    <AnimatedCounter value={stat.val} delay={idx * 0.1} />
                  </span>
                  <span className="text-xs sm:text-sm text-white/70 font-medium max-w-[200px] leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
