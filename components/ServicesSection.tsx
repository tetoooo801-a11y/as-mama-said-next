"use client";

import React from "react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceItem {
  num: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  image: string;
  alt: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    nameEn: "3D MODELING",
    nameAr: "النمذجة ثلاثية الأبعاد",
    descEn:
      "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
    descAr:
      "بناء مجسمات وعوالم ثلاثية الأبعاد بدقة فائقة مخصصة لاحتياجات المنتجات والإعلانات والألعاب والعروض السينمائية.",
    image: "/assets/images/service-1-3d.png",
    alt: "3D Modeling Visual",
  },
  {
    num: "02",
    nameEn: "RENDERING",
    nameAr: "الرندرة الواقعية",
    descEn:
      "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
    descAr:
      "معالجة وإخراج فوتوغرافي واقعي يبرز جماليات المواد والخامات والإضاءة المصممة بعناية لإحياء المفاهيم.",
    image: "/assets/images/service-2-render.png",
    alt: "Photorealistic 3D Rendering",
  },
  {
    num: "03",
    nameEn: "MOTION DESIGN",
    nameAr: "تصميم الحركة والأنيميشن",
    descEn:
      "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
    descAr:
      "تحريك احترافي وموشن جرافيك ديناميكي يضفي طاقة وحيوية على قصص العلامات التجارية والمنصات الرقمية.",
    image: "/assets/images/service-3-motion.png",
    alt: "Motion Graphics Animation",
  },
  {
    num: "04",
    nameEn: "BRANDING",
    nameAr: "الهوية البصرية والبراندينج",
    descEn:
      "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
    descAr:
      "صناعة أنظمة بصرية متكاملة — من تصميم الشعار وحتى منظومة الهوية الكاملة التي تضمن حضوراً فريداً ومؤثراً.",
    image: "/assets/images/service-4-branding.png",
    alt: "Brand Identity Design",
  },
  {
    num: "05",
    nameEn: "WEB DESIGN",
    nameAr: "تصميم الويب والتجارب الرقمية",
    descEn:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
    descAr:
      "تصميم مواقع وتطبيقات عصرية وتفاعلية تضع تجربة المستخدم وتناسق الخطوط وتوليد النتائج في المقدمة.",
    image: "/assets/images/service-5-web.png",
    alt: "Modern Web Design Portfolio",
  },
];

export default function ServicesSection() {
  const { isRTL } = useLanguage();
  const [expandedService, setExpandedService] = React.useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] py-12 sm:py-20 md:py-32 transition-colors"
    >
      {/* =========================================================
          MOBILE VIEW (md:hidden) — Condensed reference layout:
          - Red dot + SERVICES
          - Short concise subtitle
          - Clean numbered hairline list (· 01 3D MODELING, etc.)
          - Expandable on tap for concise preview & image
          - Consistent px-6 padding (never touches edges!)
          ========================================================= */}
      <div className="block md:hidden px-6 max-w-lg mx-auto">
        <FadeIn delay={0.1} y={20}>
          {/* Header with Red Dot */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-3 h-3 rounded-full bg-[#D2392A] shrink-0" />
            <h2
              className="text-2xl font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-none"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "خدماتنا" : "SERVICES"}
            </h2>
          </div>

          {/* Short Subtitle */}
          <p className="text-[14px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal mb-5">
            {isRTL
              ? "من الفكرة حتى التسليم النهائي، نبني تجارب بصرية ورقمية تترك أثراً حقيقياً."
              : "From concept to final cut, we craft digital experiences that look great and perform."}
          </p>

          {/* Compact Numbered Hairline List */}
          <div className="flex flex-col border-t border-black/10 dark:border-white/10">
            {SERVICES.map((item) => {
              const isExpanded = expandedService === item.num;
              return (
                <div
                  key={item.num}
                  className="border-b border-black/10 dark:border-white/10 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedService(isExpanded ? null : item.num)}
                    className="w-full py-3.5 flex items-center justify-between text-start focus:outline-none group select-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-bold text-[#D2392A] tracking-wider shrink-0">
                        · {item.num}
                      </span>
                      <span
                        className="text-[14px] font-bold uppercase tracking-wider text-[#15100C] dark:text-[#F2E6DC] group-hover:text-[#D2392A] transition-colors"
                        style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                      >
                        {isRTL ? item.nameAr : item.nameEn}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-[#15100C]/40 dark:text-[#F2E6DC]/40 group-hover:text-[#D2392A] transition-transform duration-200">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {/* Optional concise expanded preview */}
                  {isExpanded && (
                    <div className="pb-3.5 pt-0.5 space-y-2.5 animate-fadeIn">
                      <p className="text-xs leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                        {isRTL ? item.descAr : item.descEn}
                      </p>
                      <div className="relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 h-32 w-full bg-black/5 dark:bg-white/5">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          DESKTOP VIEW (hidden md:block) — Full rich layout untouched
          ========================================================= */}
      <div className="hidden md:block max-w-6xl mx-auto px-8 md:px-12">
        {/* Top Header Section */}
        <FadeIn delay={0.1} y={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-10 sm:mb-16 md:mb-20">
            {/* Left side: Eyebrow + Heading */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                  {isRTL ? "ما نقدمه" : "WHAT WE DO"}
                </span>
              </div>
              <h2
                className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[0.95]"
                style={{
                  fontSize: "clamp(2.4rem, 7.5vw, 6.5rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {isRTL ? "خدماتنا" : "SERVICES"}
              </h2>
            </div>

            {/* Right side: Intro Paragraph */}
            <div className="lg:col-span-6 lg:border-l border-black/10 dark:border-white/10 rtl:lg:border-l-0 rtl:lg:border-r lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10 flex items-center mt-2 lg:mt-0">
              <p className="text-sm sm:text-base md:text-[1.05rem] leading-relaxed text-[#15100C]/80 dark:text-[#F2E6DC]/80 font-normal max-w-lg">
                {isRTL
                  ? "نحوّل الأفكار إلى قصص بصرية ملهمة. من الـ 3D والموشن جرافيك إلى الهوية البصرية وتصميم الويب، نبني تجارب رقمية تأسر الأنظار وتعمل بأعلى كفاءة."
                  : "We turn ideas into visual stories. From 3D and motion to branding and web, we craft digital experiences that look great and work even better."}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 5 Horizontal Editorial Cards */}
        <div className="flex flex-col gap-3.5 sm:gap-5 md:gap-6">
          {SERVICES.map((item, idx) => (
            <FadeIn key={item.num} delay={idx * 0.08} y={25}>
              <div className="group relative rounded-2xl sm:rounded-[28px] md:rounded-[32px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border border-black/[0.06] dark:border-white/10 p-4 sm:p-7 md:p-8 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.3)] hover:border-black/15 dark:hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                  {/* Left: Coral Dash + Large Number */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <span className="w-3 sm:w-5 h-[2px] bg-[#D2392A] shrink-0" />
                    <span
                      className="font-black text-3xl sm:text-5xl md:text-6xl text-[#15100C] dark:text-[#F2E6DC] leading-none tracking-tight select-none"
                      style={{
                        fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                      }}
                    >
                      {item.num}
                    </span>
                    {/* Vertical Divider Line */}
                    <span className="w-px h-10 sm:h-14 bg-black/10 dark:bg-white/10 mx-2 sm:mx-4 hidden md:block" />
                  </div>

                  {/* Center: Title & Description */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h3
                      className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide text-[#15100C] dark:text-[#F2E6DC] mb-1.5"
                      style={{
                        fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                      }}
                    >
                      {isRTL ? item.nameAr : item.nameEn}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-normal max-w-2xl">
                      {isRTL ? item.descAr : item.descEn}
                    </p>
                  </div>

                  {/* Right: Visual Image Container */}
                  <div className="shrink-0 self-center overflow-hidden rounded-xl sm:rounded-[20px] border border-black/5 dark:border-white/10 shadow-sm w-full sm:w-[170px] md:w-[210px] h-[160px] sm:h-auto sm:aspect-[16/10] bg-black/5 dark:bg-white/5">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
