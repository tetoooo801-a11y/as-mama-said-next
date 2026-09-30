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

  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-32 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <FadeIn delay={0.1} y={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left side: Eyebrow + Heading */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                  {isRTL ? "ما نقدمه" : "WHAT WE DO"}
                </span>
              </div>
              <h2
                className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[0.95]"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {isRTL ? "خدماتنا" : "SERVICES"}
              </h2>
            </div>

            {/* Right side: Intro Paragraph */}
            <div className="lg:col-span-6 lg:border-l border-black/10 dark:border-white/10 rtl:lg:border-l-0 rtl:lg:border-r lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10 flex items-center">
              <p className="text-sm sm:text-base md:text-[1.05rem] leading-relaxed text-[#15100C]/80 dark:text-[#F2E6DC]/80 font-normal max-w-lg">
                {isRTL
                  ? "نحوّل الأفكار إلى قصص بصرية ملهمة. من الـ 3D والموشن جرافيك إلى الهوية البصرية وتصميم الويب، نبني تجارب رقمية تأسر الأنظار وتعمل بأعلى كفاءة."
                  : "We turn ideas into visual stories. From 3D and motion to branding and web, we craft digital experiences that look great and work even better."}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 5 Horizontal Editorial Cards */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          {SERVICES.map((item, idx) => (
            <FadeIn key={item.num} delay={idx * 0.08} y={25}>
              <div className="group relative rounded-[22px] sm:rounded-[28px] md:rounded-[32px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border border-black/[0.06] dark:border-white/10 p-5 sm:p-7 md:p-8 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.3)] hover:border-black/15 dark:hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 lg:gap-8">
                  {/* Left: Coral Dash + Large Number */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <span className="w-3.5 sm:w-5 h-[2px] bg-[#D2392A] shrink-0" />
                    <span
                      className="font-black text-4xl sm:text-5xl md:text-6xl text-[#15100C] dark:text-[#F2E6DC] leading-none tracking-tight select-none"
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
                  <div className="shrink-0 self-end md:self-center overflow-hidden rounded-[16px] sm:rounded-[20px] border border-black/5 dark:border-white/10 shadow-sm w-full sm:w-[170px] md:w-[210px] aspect-[16/10] bg-black/5 dark:bg-white/5">
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
