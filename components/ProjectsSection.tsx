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
    nameEn: "Strategy",
    nameAr: "الاستراتيجية وبناء العلامة",
    categoryEn: "Research & Market Positioning",
    categoryAr: "أبحاث السوق والتموضع الاستراتيجي",
    headlineEn: "Before we speak, we listen.",
    headlineAr: "قبل أن نتحدث، ننصت بعمق.",
    descEn:
      "We start with your business, market, and audience to give every message and execution a clear purpose.",
    descAr:
      "نبدأ بفهم أهداف عملك، دراسة السوق، وتحليل الجمهور المستهدف لنمنح كل رسالة وتنفيذ هدفاً تجارياً واضحاً ومؤثراً.",
    tagsEn: [
      "Market & competitor research",
      "Brand & communication strategy",
      "Content & social strategy",
      "Campaign & go-to-market planning",
      "Objectives & KPI frameworks",
    ],
    tagsAr: [
      "أبحاث السوق والمنافسين",
      "استراتيجية العلامة والاتصال",
      "استراتيجية المحتوى والتواجد",
      "تخطيط الحملات ودخول السوق",
      "تحديد الأهداف وأطر قياس الأداء",
    ],
    metricsEn: [
      { label: "Approach", value: "Insight-First" },
      { label: "Framework", value: "KPI Aligned" },
      { label: "Focus", value: "Commercial Purpose" },
    ],
    metricsAr: [
      { label: "المنهجية", value: "مبنية على الرؤى" },
      { label: "الإطار", value: "محدد المؤشرات" },
      { label: "الهدف", value: "أثر تجاري واضح" },
    ],
    link: "/contact",
    image: "/assets/images/about-director.webp",
  },
  {
    num: "02",
    nameEn: "Creative Content",
    nameAr: "المحتوى الإبداعي والسرد",
    categoryEn: "Concepts & Storytelling",
    categoryAr: "المفاهيم الإبداعية والسرد القصصي",
    headlineEn: "The right thing, said differently.",
    headlineAr: "الفكرة الصحيحة، بطريقة استثنائية.",
    descEn:
      "We turn business objectives and audience insight into distinctive campaign ideas, stories, and content formats.",
    descAr:
      "نحوّل أهدافك التجارية ورؤى الجمهور إلى أفكار حملات ملهمة، وسرد قصصي مبتكر، وقوالب محتوى تفرض حضورها.",
    tagsEn: [
      "Creative concepts & campaigns",
      "Scriptwriting & storytelling",
      "Arabic & English copywriting",
      "Content concepts & formats",
      "Creative & art direction",
    ],
    tagsAr: [
      "تطوير المفاهيم الإبداعية",
      "كتابة السيناريو والسرد",
      "صناعة النصوص الإعلانية",
      "قوالب المحتوى المبتكرة",
      "الإخراج الإبداعي والفني",
    ],
    metricsEn: [
      { label: "Format", value: "Social & Cinematic" },
      { label: "Language", value: "Arabic & English" },
      { label: "Impact", value: "Distinctive Hooks" },
    ],
    metricsAr: [
      { label: "القوالب", value: "رقمية وسينمائية" },
      { label: "اللغات", value: "عربي وإنجليزي" },
      { label: "الأثر", value: "أفكار ملهمة تعلق" },
    ],
    link: "/contact",
    image: "/assets/images/service-3-motion.png",
  },
  {
    num: "03",
    nameEn: "Social Media Management",
    nameAr: "إدارة منصات التواصل",
    categoryEn: "Channel Stewardship & Publishing",
    categoryAr: "إدارة القنوات والتفاعل المستمر",
    headlineEn: "We run the channel, not just the posts.",
    headlineAr: "ندير القناة كمنظومة، وليس مجرد منشورات.",
    descEn:
      "We manage your social presence from planning and publishing to community management and monthly reporting.",
    descAr:
      "ندير حضورك على منصات التواصل من التخطيط المسبق والجدولة وحتى إدارة المجتمع والردود والتقارير الشهرية التحليلية.",
    tagsEn: [
      "Platform & channel planning",
      "Monthly content calendars",
      "Publishing & scheduling",
      "Community moderation",
      "Performance reporting",
    ],
    tagsAr: [
      "تخطيط القنوات والمنصات",
      "تقويم المحتوى الشهري",
      "النشر والجدولة الذكية",
      "إدارة وتفاعل المجتمع",
      "تقارير الأداء الشهرية",
    ],
    metricsEn: [
      { label: "Pacing", value: "Always-On" },
      { label: "Cadence", value: "Monthly Sprints" },
      { label: "Community", value: "Active Moderation" },
    ],
    metricsAr: [
      { label: "التواجد", value: "مستمر وفعّال" },
      { label: "الجدولة", value: "سبرنتات شهرية" },
      { label: "المجتمع", value: "تفاعل حقيقي" },
    ],
    link: "/contact",
    image: "/assets/images/contact-studio.webp",
  },
  {
    num: "04",
    nameEn: "Media Production House",
    nameAr: "بيت الإنتاج الإعلامي والسينمائي",
    categoryEn: "Film, 3D Solutions & AI Craft",
    categoryAr: "الإنتاج السينمائي والـ 3D والذكاء الاصطناعي",
    headlineEn: "A good idea deserves to be well made.",
    headlineAr: "الفكرة العظيمة تستحق تنفيذاً فائق الإتقان.",
    descEn:
      "Our production team brings the creative direction to life through film, photography, 3D visualization, AI-assisted production, and post-production.",
    descAr:
      "فريق الإنتاج لدينا يحوّل الرؤية الإبداعية إلى واقع من خلال الأفلام، التصوير الفوتوغرافي، الرؤية ثلاثية الأبعاد (3D)، الإنتاج المدعوم بالذكاء الاصطناعي (AI)، وعمليات ما بعد الإنتاج.",
    tagsEn: [
      "Commercial & campaign films",
      "Social-first video & Reels",
      "Product photography & video",
      "3D Modeling, Rendering & CGI",
      "AI-Assisted Production",
      "Editing, color grading & retouching",
    ],
    tagsAr: [
      "أفلام الحملات والإعلانات",
      "فيديوهات السوشيال والريلز",
      "تصوير المنتجات الاحترافي",
      "حلول 3D: نمذجة ورندرة و CGI",
      "الإنتاج المدعوم بالذكاء الاصطناعي",
      "المونتاج، تصحيح الألوان والريتاتش",
    ],
    metricsEn: [
      { label: "3D Solutions", value: "CGI & Sub-D" },
      { label: "AI Hybrid", value: "Expanded Possibilities" },
      { label: "Mastering", value: "8K & ProRes Output" },
    ],
    metricsAr: [
      { label: "حلول 3D", value: "CGI ورندرة واقعية" },
      { label: "الذكاء الاصطناعي", value: "إمكانيات إنتاج موسعة" },
      { label: "الجودة", value: "ماستر 8K وسينمائي" },
    ],
    link: "/contact",
    image: "/assets/images/hero-mama-studio.webp",
  },
  {
    num: "05",
    nameEn: "PR & UGC",
    nameAr: "العلاقات العامة وصناع المحتوى",
    categoryEn: "Earned Credibility & Creator Voices",
    categoryAr: "بناء السمعة وصناع المحتوى",
    headlineEn: "Reputation is earned. So is a recommendation.",
    headlineAr: "السمعة تُبنى بالجدارة، والتوصية كذلك.",
    descEn:
      "We connect media relations and creator-led content to build credibility, communicate launches, and bring real voices into the brand story.",
    descAr:
      "نربط بين العلاقات الإعلامية والمحتوى الذي يقوده المبدعون لبناء المصداقية، إطلاق الحملات، وإشراك أصوات حقيقية في قصة علامتك.",
    tagsEn: [
      "Press & media relations",
      "Launch & event communication",
      "Reputation management",
      "Creator sourcing & briefing",
      "UGC content production",
      "Influencer campaigns & seeding",
    ],
    tagsAr: [
      "العلاقات الإعلامية والصحفية",
      "تغطية الإطلاقات والفعاليات",
      "إدارة السمعة المؤسسية",
      "اختيار المبدعين وتوجيههم",
      "إنتاج محتوى UGC الأصيل",
      "حملات المؤثرين وتفعيل المنتجات",
    ],
    metricsEn: [
      { label: "Relations", value: "Top Media Outlets" },
      { label: "Creators", value: "Authentic UGC" },
      { label: "Credibility", value: "Earned Trust" },
    ],
    metricsAr: [
      { label: "الصحافة", value: "تغطيات واسعة" },
      { label: "المبدعون", value: "محتوى UGC حقيقي" },
      { label: "الأثر", value: "مصداقية وثقة" },
    ],
    link: "/contact",
    image: "/assets/images/about-clarity-hd.webp",
  },
  {
    num: "06",
    nameEn: "Design",
    nameAr: "التصميم الفني والتطبيقات البصرية",
    categoryEn: "Visual Assets & Campaign Systems",
    categoryAr: "الأصول والتطبيقات البصرية",
    headlineEn: "Craft is part of the idea.",
    headlineAr: "الإتقان جزء لا يتجزأ من الفكرة.",
    descEn:
      "We create visual assets that carry your brand consistently across campaigns, platforms, and everyday communication.",
    descAr:
      "نبتكر أصولاً وتطبيقات بصرية تحمل هوية علامتك بتناسق تام عبر الحملات والمنصات الرقمية والتواصل اليومي.",
    tagsEn: [
      "Graphic design & art direction",
      "Key visuals & campaign assets",
      "Social & digital design",
      "Packaging, print & collateral",
      "Presentations & brand documents",
    ],
    tagsAr: [
      "التصميم الجرافيكي والإخراج الفني",
      "المفاهيم البصرية الرئيسية (Key Visuals)",
      "تصاميم السوشيال والديجيتال",
      "تصميم التغليف والمطبوعات",
      "العروض التقديمية والوثائق",
    ],
    metricsEn: [
      { label: "Consistency", value: "Multi-Platform" },
      { label: "Output", value: "Print & Screen" },
      { label: "Execution", value: "Pixel-Perfect" },
    ],
    metricsAr: [
      { label: "التناسق", value: "عبر كافة المنصات" },
      { label: "المخرجات", value: "مطبوعات ورقمي" },
      { label: "الدقة", value: "إتقان فني فائق" },
    ],
    link: "/contact",
    image: "/assets/images/service-4-branding.png",
  },
  {
    num: "07",
    nameEn: "Branding",
    nameAr: "استراتيجية وبناء الهوية التجارية",
    categoryEn: "Identity Systems & Positioning",
    categoryAr: "بناء العلامة واستراتيجية التموضع",
    headlineEn: "Make your brand unmistakable.",
    headlineAr: "اجعل علامتك التجارية فريدة لا تُنسى.",
    descEn:
      "We define how your brand is positioned, expressed, and recognised through a connected verbal and visual identity.",
    descAr:
      "نحدد تموضع علامتك وصوتها وحضورها في السوق من خلال هوية بصرية ولفظية متكاملة تفرض هيبتها وتخلق صلة عميقة مع العملاء.",
    tagsEn: [
      "Brand naming & story",
      "Brand positioning",
      "Brand identity & visual systems",
      "Messaging frameworks",
      "Brand guidelines & rebrands",
    ],
    tagsAr: [
      "تسمية العلامة وصياغة قصتها",
      "استراتيجية التموضع في السوق",
      "تصميم أنظمة الهوية البصرية",
      "أطر الرسائل ونبرة الصوت",
      "أدلة استخدام الهوية وتحديثها",
    ],
    metricsEn: [
      { label: "Scope", value: "Holistic Identity" },
      { label: "System", value: "Verbal & Visual" },
      { label: "Authority", value: "Unmistakable" },
    ],
    metricsAr: [
      { label: "النطاق", value: "منظومة هوية كاملة" },
      { label: "النظام", value: "بصري ولفظي متناسق" },
      { label: "الأثر", value: "حضور سوقي راسخ" },
    ],
    link: "/contact",
    image: "/assets/images/ams-mama-house-logo.jpg",
  },
  {
    num: "08",
    nameEn: "Media Buying & Performance",
    nameAr: "الإعلانات الممولة وإدارة الأداء",
    categoryEn: "Paid Growth & Conversion Optimization",
    categoryAr: "الحملات الممولة وتحسين العائد",
    headlineEn: "Attention only matters when it moves something.",
    headlineAr: "الوصول لا قيمة له إلا إذا حقق أثراً ملموساً.",
    descEn:
      "We plan, test, and optimize paid campaigns around clear business objectives, with reporting that helps guide the next decision.",
    descAr:
      "نخطط، نختبر، ونحسّن الحملات الإعلانية الممولة بناءً على أهداف تجارية دقيقة، مع تقارير واضحة توجه القرارات القادمة.",
    tagsEn: [
      "Media planning & budget allocation",
      "Paid ads on Meta, Google, TikTok, LinkedIn",
      "Audience & creative testing",
      "Lead-generation & conversions",
      "Monitoring & optimization",
      "Reporting & recommendations",
    ],
    tagsAr: [
      "التخطيط وتوزيع الميزانيات الذكي",
      "حملات Meta و Google و TikTok و LinkedIn",
      "اختبار الجماهير والتصاميم (A/B Testing)",
      "حملات استقطاب المبيعات والعملاء",
      "المراقبة اللحظية والتحسين المستمر",
      "التقارير التحليلية والتوصيات",
    ],
    metricsEn: [
      { label: "Channels", value: "Meta / Google / TikTok" },
      { label: "Approach", value: "Data & KPI Driven" },
      { label: "Focus", value: "Commercial Growth" },
    ],
    metricsAr: [
      { label: "المنصات", value: "Meta / Google / TikTok" },
      { label: "المنهجية", value: "مبنية على الأرقام" },
      { label: "الهدف", value: "عائد ونمو تجاري حقيقي" },
    ],
    link: "/contact",
    image: "/assets/images/about-sculpture.webp",
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

  const isLast = index === totalCards - 1;
  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.75]);

  return (
    <div
      ref={containerRef}
      className={`flex items-start justify-center sticky ${
        isLast
          ? "min-h-0 pb-4 sm:pb-6"
          : "min-h-[75vh] sm:min-h-[82vh] pb-8 sm:pb-10"
      }`}
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
            className="!px-5 !py-2 sm:!px-7 sm:!py-2.5 !text-xs sm:!text-sm hover:!bg-[#D2392A] hover:!border-[#D2392A] hover:!text-white transition-all cursor-pointer"
          />
        </div>

        {/* Content Row: Single Featured Visual + Editorial Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left: Featured Visual Showcase Frame */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-white/10 h-[220px] sm:h-[260px] lg:h-[310px] bg-black/40 group">
            <img
              src={project.image}
              alt={`${project.nameEn} Visual Showcase`}
              className="w-full h-full object-cover p-2 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-3 start-3 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-black/70 backdrop-blur-md text-white/90 border border-white/10">
              {project.num} · {isRTL ? project.nameAr : project.nameEn}
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
                &ldquo;{isRTL ? project.headlineAr : project.headlineEn}&rdquo;
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
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-6 md:px-10 pt-20 sm:pt-28 pb-6 sm:pb-8 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-18 md:mb-20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                {isRTL ? "خدماتنا بالأرقام والتنفيذ" : "SERVICES IN ACTION"}
              </span>
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block" />
            </div>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-[#15100C] dark:text-[#F2E6DC] text-balance"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 84px)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL ? "خدماتنا على أرض الواقع" : "DISCIPLINES IN ACTION"}
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#15100C]/70 dark:text-[#F2E6DC]/70 max-w-xl mx-auto font-normal text-balance">
              {isRTL
                ? "استكشف كيف نحوّل خدماتنا الثمانية إلى نتائج وحضور استثنائي على أرض الواقع."
                : "Explore how our 8 connected services translate into real-world impact, prestige, and growth."}
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
