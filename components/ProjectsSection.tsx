"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "@/components/ui/LiveProjectButton";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectItem {
  num: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  headlineEn: string;
  headlineAr: string;
  descEn: string;
  descAr: string;
  tagsEn: string[];
  tagsAr: string[];
  metricsEn: { label: string; value: string }[];
  metricsAr: { label: string; value: string }[];
  link: string;
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    num: "01",
    nameEn: "3D Modeling",
    nameAr: "النمذجة ثلاثية الأبعاد",
    categoryEn: "Spatial Assets & Geometry",
    categoryAr: "مجسمات وبيئات ثلاثية الأبعاد",
    headlineEn: "High-fidelity 3D assets and procedural worlds engineered for commercial impact.",
    headlineAr: "بناء مجسمات وعوالم ثلاثية الأبعاد بدقة فائقة مخصصة للمنتجات والإعلانات.",
    descEn:
      "From bespoke product geometries to sprawling virtual environments, we build high-precision 3D assets optimized for cinematic lighting, interactive platforms, and scroll-stopping visuals.",
    descAr:
      "نصمم ونبني مجسمات وعوالم ثلاثية الأبعاد متناهية الدقة، مجهزة للإضاءة السينمائية والتطبيقات التفاعلية لترتقي بمظهر المنتجات وتخطف انتباه العملاء من النظرة الأولى.",
    tagsEn: ["Hard-surface Modeling", "Spatial Environments", "Product Geometry", "CGI Assets"],
    tagsAr: ["نمذجة مجسمات", "بيئات ثلاثية الأبعاد", "هندسة منتجات", "أصول سينمائية"],
    metricsEn: [
      { label: "Deliverables", value: "Sub-D Models" },
      { label: "Optimization", value: "Real-time & CGI" },
      { label: "Impact", value: "+300% Engagement" },
    ],
    metricsAr: [
      { label: "المخرجات", value: "مجسمات عالية الدقة" },
      { label: "المعالجة", value: "جاهزة للسينما والويب" },
      { label: "الأثر", value: "+300% تفاعل" },
    ],
    link: "/contact",
    image: "/assets/images/service-1-3d.png",
  },
  {
    num: "02",
    nameEn: "Rendering",
    nameAr: "الرندرة الواقعية",
    categoryEn: "Photorealistic CGI & Lighting",
    categoryAr: "إخراج واقعي ومحاكاة خامات",
    headlineEn: "Hyper-realistic illumination, tactile materials, and studio-grade photography.",
    headlineAr: "إخراج فوتوغرافي واقعي يبرز أدق تفاصيل المواد والخامات والإضاءة.",
    descEn:
      "We replace costly physical production with CGI rendering that looks indistinguishable from reality. Custom shaders, macro lens simulations, and bespoke light setups turn products into pure art.",
    descAr:
      "نبتكر صوراً واقعية تنافس الكاميرات الاحترافية بدقة فائقة. محاكاة ذكية لانعكاسات الزجاج والمعادن والأقمشة تمنح منتجاتك فخامة تليق بأقوى الحملات الإعلانية.",
    tagsEn: ["Ray Tracing", "PBR Materials", "Studio Lighting", "8K Resolution"],
    tagsAr: ["تتبع الأشعة", "خامات فيزيائية", "إضاءة استوديو", "دقة 8K فائقة"],
    metricsEn: [
      { label: "Resolution", value: "8K Ultra-HD" },
      { label: "Turnaround", value: "Zero Studio Friction" },
      { label: "Visual Fidelity", value: "100% Photoreal" },
    ],
    metricsAr: [
      { label: "الدقة", value: "8K فائقة الجودة" },
      { label: "السرعة", value: "بدون مصاريف تصوير" },
      { label: "الواقعية", value: "100% تطابق واقعي" },
    ],
    link: "/contact",
    image: "/assets/images/service-2-render.png",
  },
  {
    num: "03",
    nameEn: "Motion Design",
    nameAr: "تصميم الحركة والأنيميشن",
    categoryEn: "Kinetic Direction & Animation",
    categoryAr: "موشن جرافيك وتحريك سينمائي",
    headlineEn: "Dynamic physics, expressive kinetic type, and commercial promo animation.",
    headlineAr: "تحريك احترافي وموشن جرافيك ديناميكي يضفي طاقة وحيوية للعلامات التجارية.",
    descEn:
      "We turn static concepts into hypnotic motion. High-energy launch videos, kinetic typography, and snappy product loops engineered to hook viewers within the opening two seconds.",
    descAr:
      "نبث الحيوية في أفكار علامتك التجارية من خلال فيديوهات إطلاق حماسية وتحريك تيبوغرافي مصمم لإيقاف التمرير ورفع نسب المشاهدة من أول ثانيتين.",
    tagsEn: ["Kinetic Typography", "Physics Simulation", "Launch Reels", "60 FPS Animation"],
    tagsAr: ["تيبوغرافي حركي", "محاكاة حركة فيزيائية", "ريلز إطلاق", "حركة 60 إطار"],
    metricsEn: [
      { label: "Pacing", value: "60 FPS Fluid" },
      { label: "Hook Rate", value: "< 2s Stop Scroll" },
      { label: "Engagement", value: "+4.2x Retention" },
    ],
    metricsAr: [
      { label: "الانسيابية", value: "60 إطار/ثانية" },
      { label: "الجذب", value: "أقل من ثانيتين" },
      { label: "المشاهدة", value: "+4.2x استبقاء" },
    ],
    link: "/contact",
    image: "/assets/images/service-3-motion.png",
  },
  {
    num: "04",
    nameEn: "Branding",
    nameAr: "الهوية البصرية والبراندينج",
    categoryEn: "Identity Systems & Strategy",
    categoryAr: "أنظمة الهوية والاستراتيجية",
    headlineEn: "Complete brand systems built to stand out, command respect, and scale globally.",
    headlineAr: "صناعة أنظمة بصرية متكاملة وشعارات حركية تضمن حضوراً فريداً ومؤثراً.",
    descEn:
      "Far beyond a logo: we design comprehensive identity universes. From typographic rules and color architectures to digital guidelines, packaging, and brand voice that unifies your entire presence.",
    descAr:
      "أكثر من مجرد شعار: نبني منظومة هوية كاملة تشمل التيبوغرافي، باليت الألوان، تصميم المطبوعات والتغليف، ونبرة الصوت التي تجعل علامتك تفرض هيبتها في أي سوق.",
    tagsEn: ["Identity Systems", "Bespoke Typography", "Packaging", "Brand Guidelines"],
    tagsAr: ["أنظمة الهوية", "خطوط وهوية مخصصة", "تصميم تغليف", "أدلة العلامة"],
    metricsEn: [
      { label: "Scope", value: "Complete System" },
      { label: "Market Reach", value: "Cairo & Dubai" },
      { label: "Equity", value: "+250% Brand Value" },
    ],
    metricsAr: [
      { label: "النطاق", value: "منظومة بصرية شاملة" },
      { label: "الانتشار", value: "القاهرة ودبي" },
      { label: "القيمة", value: "+250% ولاء وقيمة" },
    ],
    link: "/contact",
    image: "/assets/images/service-4-branding.png",
  },
  {
    num: "05",
    nameEn: "Web Design",
    nameAr: "تصميم الويب والتجارب الرقمية",
    categoryEn: "Interactive UX/UI & WebGL",
    categoryAr: "واجهات تفاعلية وتجربة مستخدم",
    headlineEn: "Conversion-engineered digital experiences merging smooth 3D with flawless speed.",
    headlineAr: "تصميم وتطوير مواقع وتطبيقات تفاعلية تجمع بين الإبهار البصري وسرعة الأداء.",
    descEn:
      "We build modern web flagships that look like living works of art and convert like precision machines. Lightning-fast response times, bespoke micro-interactions, and flawless mobile responsiveness.",
    descAr:
      "نبني واجهات وتجارب ويب مبتكرة تجمع بين اللمسات ثلاثية الأبعاد والتنقل الفوري وتجربة المستخدم المصممة لتحويل كل زائر إلى عميل حقيقي.",
    tagsEn: ["Interactive Web", "Fluid Micro-motion", "Mobile-First", "Conversion UX"],
    tagsAr: ["ويب تفاعلي", "حركة ميكرو سلسة", "متوافق مع الموبايل", "تحويل مبيعات"],
    metricsEn: [
      { label: "Speed", value: "99+ Lighthouse" },
      { label: "Conversion", value: "+180% Inquiries" },
      { label: "Experience", value: "Award Grade" },
    ],
    metricsAr: [
      { label: "السرعة", value: "99+ على Lighthouse" },
      { label: "التحويل", value: "+180% استفسارات" },
      { label: "التجربة", value: "مستوى عالمي" },
    ],
    link: "/contact",
    image: "/assets/images/service-5-web.png",
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: CardProps) {
  const { isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.75]);

  return (
    <div
      ref={containerRef}
      className="min-h-[82vh] sm:min-h-[90vh] flex items-start justify-center sticky pb-14"
      style={{
        top: `calc(5rem + ${index * 14}px)`,
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-5xl xl:max-w-6xl rounded-[28px] sm:rounded-[38px] md:rounded-[44px] border border-white/[0.14] bg-[#091516] p-5 sm:p-7 md:p-8 shadow-[0_25px_65px_rgba(0,0,0,0.85)] flex flex-col gap-4 sm:gap-5 text-white"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-3.5 sm:pb-4">
          <div className="flex items-baseline gap-3 sm:gap-4">
            <span
              className="font-black text-[#D2392A] leading-none select-none tracking-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {project.num}
            </span>
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold block">
                {isRTL ? project.categoryAr : project.categoryEn}
              </span>
              <h3
                className="text-base sm:text-xl md:text-2xl font-bold uppercase text-[#F2E6DC] tracking-wide"
                style={{
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {isRTL ? project.nameAr : project.nameEn}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            label={isRTL ? "ابدأ مشروعك" : "Start Project"}
            href="/contact"
            className="!px-5 !py-2 sm:!px-7 sm:!py-2.5 !text-xs sm:!text-sm hover:!bg-[#D2392A] hover:!border-[#D2392A] hover:!text-white transition-all"
          />
        </div>

        {/* Content Row: Single Featured Visual + Editorial Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left: Featured Visual Showcase Frame */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-white/10 h-[220px] sm:h-[260px] lg:h-[310px] bg-black/40 group">
            <img
              src={project.image}
              alt={`${project.nameEn} Visual Showcase`}
              className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-3 start-3 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-black/70 backdrop-blur-md text-white/90 border border-white/10">
              {project.num} · {isRTL ? project.categoryAr : project.categoryEn}
            </span>
          </div>

          {/* Right: Rich Capabilities & Execution Column */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[20px] sm:rounded-[24px] bg-white/[0.03] border border-white/10 p-5 sm:p-6 backdrop-blur-sm">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-3.5 sm:w-4 h-[2px] bg-[#D2392A] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#D2392A]">
                  {isRTL ? "القدرات والتنفيذ الفعلي" : "CAPABILITIES & EXECUTION"}
                </span>
              </div>

              {/* Headline */}
              <h4
                className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug tracking-tight mb-2 sm:mb-2.5"
                style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
              >
                {isRTL ? project.headlineAr : project.headlineEn}
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#D7E2EA]/75 font-normal max-w-xl">
                {isRTL ? project.descAr : project.descEn}
              </p>

              {/* Deliverables / Tags Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 my-3 sm:my-3.5">
                {(isRTL ? project.tagsAr : project.tagsEn).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-white/[0.05] border border-white/10 text-[#D7E2EA]/90 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Impact Stats */}
            <div className="pt-2.5 sm:pt-3 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-3 text-start">
              {(isRTL ? project.metricsAr : project.metricsEn).map((metric, mIdx) => (
                <div key={mIdx}>
                  <span className="block text-[9.5px] sm:text-[10.5px] uppercase tracking-wider text-white/50 font-medium">
                    {metric.label}
                  </span>
                  <span className="block text-xs sm:text-[13px] font-bold text-[#FAF6F0] mt-0.5 truncate">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const { isRTL } = useLanguage();

  return (
    <section
      id="featured-work"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-6 md:px-10 pt-20 sm:pt-28 pb-32 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-18 md:mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                {isRTL ? "خدماتنا بالأرقام والتنفيذ" : "SERVICES IN ACTION"}
              </span>
            </div>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-[#15100C] dark:text-[#F2E6DC]"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 84px)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL ? "خدماتنا على أرض الواقع" : "DISCIPLINES IN ACTION"}
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#15100C]/70 dark:text-[#F2E6DC]/70 max-w-xl font-normal">
              {isRTL
                ? "استكشف كيف نحوّل كل خدمة من خدماتنا الخمس إلى نتائج وحضور استثنائي على أرض الواقع."
                : "Explore how our 5 core disciplines translate into real-world impact, prestige, and growth."}
            </p>
          </div>
        </FadeIn>

        {/* Sticky Stacking Cards */}
        <div className="relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
