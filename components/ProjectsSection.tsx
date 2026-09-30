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
  images: {
    img1: string;
    img2: string;
  };
}

const PROJECTS: ProjectItem[] = [
  {
    num: "01",
    nameEn: "Nextlevel Studio",
    nameAr: "استوديو نيكست ليفل",
    categoryEn: "3D & Web Experience",
    categoryAr: "ويب وتجارب ثلاثية الأبعاد",
    headlineEn: "An immersive web universe merging real-time 3D shaders with fluid storytelling.",
    headlineAr: "بيئة ويب تفاعلية تدمج الشيدرز ثلاثية الأبعاد بالسرد القصصي السلس.",
    descEn:
      "We engineered a spatial digital experience tailored for Nextlevel Studio's international rollout. By combining procedural 3D environments, physics-based motion, and conversion-engineered interactions, the platform elevated brand authority and multiplied user engagement.",
    descAr:
      "صممنا وبنينا تجربة رقمية تفاعلية تمزج بين البيئات ثلاثية الأبعاد والحركة الفيزيائية وواجهات الاستخدام الذكية، مما ساهم في مضاعفة متوسط مدة تفاعل الزوار وترسيخ ريادة الاستوديو عالمياً.",
    tagsEn: ["3D Environment", "WebGL Shaders", "Fluid Motion", "Interactive UI"],
    tagsAr: ["بيئات ثلاثية الأبعاد", "شيدرز WebGL", "حركة سلسة", "واجهات تفاعلية"],
    metricsEn: [
      { label: "Deliverables", value: "3D Web & Shaders" },
      { label: "Client Sector", value: "Digital Studio" },
      { label: "Impact", value: "+320% Dwell Time" },
    ],
    metricsAr: [
      { label: "المخرجات", value: "موقع ويب ثلاثي الأبعاد" },
      { label: "القطاع", value: "استوديو رقمي" },
      { label: "الأثر", value: "+320% تفاعل" },
    ],
    link: "https://asmamasaid.com",
    images: {
      img1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      img2: "/assets/images/service-5-web.png",
    },
  },
  {
    num: "02",
    nameEn: "Aura Brand Identity",
    nameAr: "هوية علامة أورا",
    categoryEn: "Brand System & Motion",
    categoryAr: "أنظمة الهوية والموشن جرافيك",
    headlineEn: "Crafting an authoritative, living visual identity engineered to withstand market shifts.",
    headlineAr: "هندسة هوية بصرية حية ذات حضور استثنائي تدوم وتواكب تطور الأسواق.",
    descEn:
      "Aura required an unmistakable identity capable of scaling across global physical and digital touchpoints. We designed a kinetic typographic system, sculptural 3D brand marks, and comprehensive design guidelines that empowered their internal teams to communicate with absolute clarity.",
    descAr:
      "صممنا لأورا منظومة هوية بصرية كاملة تمتد من الشعارات الحركية والتيبوغرافي المخصص إلى الأصول ثلاثية الأبعاد وأدلة التطبيق الدقيقة، لتمنح العلامة صوتاً مميزاً وحضوراً مؤثراً على جميع المنصات.",
    tagsEn: ["Kinetic Identity", "Custom Type", "3D Brand Assets", "Design System"],
    tagsAr: ["هوية حركية", "خطوط مخصصة", "مجسمات ثلاثية الأبعاد", "نظام التصميم"],
    metricsEn: [
      { label: "Deliverables", value: "Identity System" },
      { label: "Client Sector", value: "Fintech & Lifestyle" },
      { label: "Impact", value: "Global Rollout" },
    ],
    metricsAr: [
      { label: "المخرجات", value: "منظومة هوية متكاملة" },
      { label: "القطاع", value: "تكنولوجيا مالية ونمط حياة" },
      { label: "الأثر", value: "إطلاق عالمي" },
    ],
    link: "https://asmamasaid.com",
    images: {
      img1: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80",
      img2: "/assets/images/service-4-branding.png",
    },
  },
  {
    num: "03",
    nameEn: "Solaris Digital",
    nameAr: "سولاريس ديجيتال",
    categoryEn: "Photorealistic CGI & Film",
    categoryAr: "رندرة سينمائية وإنتاج CGI",
    headlineEn: "Photorealistic product simulations with cinematic lighting and tactile precision.",
    headlineAr: "محاكاة منتجات واقعية بإضاءة سينمائية ودقة متناهية في تفاصيل الخامات.",
    descEn:
      "To unveil Solaris' flagship hardware, we generated high-end CGI commercial keyframes, microscopic texture close-ups, and macro lighting simulations. The resulting visual assets became the cornerstone of their global launch campaign, achieving widespread acclaim and record pre-orders.",
    descAr:
      "لإطلاق منتج سولاريس الرائد، أنشأنا حملة إعلانية سينمائية ثلاثية الأبعاد تعتمد على محاكاة الإضاءة الدقيقة والتفاصيل المجهرية للمواد، محققة أرقام طلب مسبق قياسية واستحساناً واسعاً في السوق.",
    tagsEn: ["Photorealistic CGI", "Lighting Simulation", "4K Animation", "Commercial Film"],
    tagsAr: ["رندرة CGI واقعية", "محاكاة الإضاءة", "أنيميشن 4K", "فيلم تجاري"],
    metricsEn: [
      { label: "Deliverables", value: "CGI Launch Assets" },
      { label: "Client Sector", value: "Next-gen Hardware" },
      { label: "Impact", value: "+180% Pre-orders" },
    ],
    metricsAr: [
      { label: "المخرجات", value: "أصول إطلاق CGI" },
      { label: "القطاع", value: "أجهزة متطورة" },
      { label: "الأثر", value: "+180% طلبات مسبقة" },
    ],
    link: "https://asmamasaid.com",
    images: {
      img1: "/assets/images/service-1-3d.png",
      img2: "/assets/images/service-2-render.png",
    },
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

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[700px] sm:min-h-[760px] md:min-h-[85vh] flex items-start justify-center sticky pb-10"
      style={{
        top: `calc(5.5rem + ${index * 30}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col gap-5 sm:gap-6 text-white"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 sm:pb-5">
          <div className="flex items-baseline gap-3 sm:gap-5">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {project.num}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold block">
                {isRTL ? project.categoryAr : project.categoryEn}
              </span>
              <h3
                className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-[#D7E2EA] tracking-wide"
                style={{
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {isRTL ? project.nameAr : project.nameEn}
              </h3>
            </div>
          </div>

          <LiveProjectButton label={isRTL ? "زيارة المشروع" : "Live Project"} href={project.link} />
        </div>

        {/* Bottom row: 2 Small Images + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left: 2 Small Images Column */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col gap-4 sm:gap-5">
            <div className="flex-1 relative overflow-hidden rounded-[20px] sm:rounded-[26px] border border-white/10 h-[140px] sm:h-[180px] lg:h-[200px] bg-white/[0.03] group">
              <img
                src={project.images.img1}
                alt={`${project.nameEn} View 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute bottom-2.5 start-2.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
                01 / {isRTL ? "معاينة بصرية" : "Visual Frame"}
              </span>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-[20px] sm:rounded-[26px] border border-white/10 h-[140px] sm:h-[180px] lg:h-[200px] bg-white/[0.03] group">
              <img
                src={project.images.img2}
                alt={`${project.nameEn} View 2`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute bottom-2.5 start-2.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
                02 / {isRTL ? "تفاصيل التنفيذ" : "Execution"}
              </span>
            </div>
          </div>

          {/* Right: Rich Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[20px] sm:rounded-[26px] bg-white/[0.03] border border-white/10 p-5 sm:p-7 md:p-8 backdrop-blur-sm">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-3.5 sm:w-4 h-[2px] bg-[#D2392A] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#D2392A]">
                  {isRTL ? "دراسة حالة وتنفيذ" : "CASE STUDY & EXECUTION"}
                </span>
              </div>

              {/* Headline */}
              <h4
                className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug tracking-tight mb-3"
                style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
              >
                {isRTL ? project.headlineAr : project.headlineEn}
              </h4>

              {/* Description paragraph */}
              <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#D7E2EA]/75 font-normal max-w-xl">
                {isRTL ? project.descAr : project.descEn}
              </p>

              {/* Deliverables / Tags Pills */}
              <div className="flex flex-wrap gap-2 my-4 sm:my-5">
                {(isRTL ? project.tagsAr : project.tagsEn).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-white/[0.05] border border-white/10 text-[#D7E2EA]/90 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Impact Stats */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-start">
              {(isRTL ? project.metricsAr : project.metricsEn).map((metric, mIdx) => (
                <div key={mIdx}>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 font-medium">
                    {metric.label}
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-[#FAF6F0] mt-0.5 truncate">
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
                {isRTL ? "مشاريع وتطبيقات" : "SELECTED WORK IN ACTION"}
              </span>
            </div>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-[#15100C] dark:text-[#F2E6DC]"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 90px)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL ? "أعمالنا على أرض الواقع" : "WORK IN ACTION"}
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#15100C]/70 dark:text-[#F2E6DC]/70 max-w-xl font-normal">
              {isRTL
                ? "نماذج واقعية لكيفية تحويل خدماتنا إلى تجارب بصرية استثنائية وقيمة ملموسة لعملائنا."
                : "Real-world examples of how our 3D, branding, and motion services transform client visions into standout market presence."}
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
