"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, SunMedium, Film, Layers, Monitor, Cpu, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

interface DisciplineDetail {
  id: string;
  num: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  taglineEn: string;
  taglineAr: string;
  summaryEn: string;
  summaryAr: string;
  capabilitiesEn: string[];
  capabilitiesAr: string[];
  software: string[];
  icon: React.ElementType;
}

const DISCIPLINES: DisciplineDetail[] = [
  {
    id: "3d",
    num: "01",
    nameEn: "3D Modeling & CGI",
    nameAr: "النمذجة والبيئات ثلاثية الأبعاد",
    categoryEn: "Geometry & Spatial Design",
    categoryAr: "هندسة المجسمات والبيئات",
    taglineEn: "Sub-millimeter precision for products, characters, and architectural worlds.",
    taglineAr: "دقة متناهية للمنتجات والشخصيات والعوالم المعمارية الافتراضية.",
    summaryEn:
      "We build production-ready 3D geometry from sketches, industrial CAD blueprints, or creative concept art. Every asset is topologically optimized for ray-traced rendering, fluid dynamic simulation, and interactive web engines.",
    summaryAr:
      "نبني مجسمات وأصول ثلاثية الأبعاد متوافقة مع أحدث معايير الإنتاج السينمائي والويب. من مخططات CAD الصناعية إلى الشخصيات والبيئات الخيالية، نحرص على هندسة أسطح نظيفة تسهل التحريك والرندرة الواقعية.",
    capabilitiesEn: [
      "Hard-Surface Industrial Product CAD",
      "Organic Creature & Character Sculpting",
      "Architectural Visualization & Interiors",
      "Procedural World & Terrain Building",
      "Game-Ready Low/High Poly Optimization",
      "Physics Collision & Dynamic Simulation",
    ],
    capabilitiesAr: [
      "نمذجة المنتجات والأجهزة الصناعية (CAD)",
      "نحت الشخصيات والكائنات الحيوية",
      "التصميم والافتراضي المعماري والديكورات",
      "بناء العوالم والتضاريس الإجرائية (Procedural)",
      "تحسين المجسمات للألعاب والمحاكاة",
      "محاكاة التصادم والحركة الفيزيائية",
    ],
    software: ["Blender", "Cinema 4D", "Houdini", "ZBrush", "Unreal Engine 5"],
    icon: Box,
  },
  {
    id: "rendering",
    num: "02",
    nameEn: "Photorealistic Rendering",
    nameAr: "الرندرة والإخراج الفوتوغرافي",
    categoryEn: "Materiality & Illumination",
    categoryAr: "محاكاة المواد وتوزيع الإضاءة",
    taglineEn: "Studio-grade photography without the logistical constraints of physical shoots.",
    taglineAr: "جلسات تصوير واقعية مذهلة بدون مصاريف استوديوهات التصوير التقليدية.",
    summaryEn:
      "Using cutting-edge spectral ray-tracing engines, we replicate the physics of light passing through glass, scattering across human skin, or reflecting off brushed aluminum. The results rival and often surpass physical commercial photography.",
    summaryAr:
      "باستخدام محركات تتبع الأشعة الضوئية المتقدمة، نحاكي سلوك الضوء الفيزيائي بدقة متناهية: انكسار الضوء في الزجاج، تشتت الإضاءة في الخامات الشفافة، وانعكاسات المعادن الفاخرة لإنتاج صور تسحر العيون بدقة تصل لـ 8K.",
    capabilitiesEn: [
      "Custom PBR Material & Shader Engineering",
      "Studio Light Rigs & HDRI Environments",
      "Microscopic & Macro Texture Close-ups",
      "Multi-angle Commercial Product Catalogs",
      "Volumetric Mist, Atmosphere & Caustics",
      "Photorealistic Multi-pass Compositing",
    ],
    capabilitiesAr: [
      "صناعة الخامات الفيزيائية الواقعية (PBR)",
      "محاكاة إضاءة الاستوديوهات الاحترافية و HDRI",
      "لقطات ماكرو فائقة الدقة لأدق تفاصيل الخامات",
      "كتالوجات المنتجات متعددة الزوايا للحملات",
      "محاكاة الضباب والدخان وتأثيرات الإضاءة الحجمية",
      "معالجة وتجميع طبقات الرندرة (Compositing)",
    ],
    software: ["Octane Render", "Redshift", "Karma", "Substance Painter", "Photoshop"],
    icon: SunMedium,
  },
  {
    id: "motion",
    num: "03",
    nameEn: "Motion & Film Direction",
    nameAr: "تصميم الحركة والإخراج السينمائي",
    categoryEn: "Kinetic Energy & Story",
    categoryAr: "الطاقة الحركية والسرد الإبداعي",
    taglineEn: "Hypnotic animations that command attention within the critical first two seconds.",
    taglineAr: "حركة تخطف الأبصار وتوقف التمرير من أول ثانيتين لرفع نسب المشاهدة.",
    summaryEn:
      "Modern audiences decide whether to scroll or watch in under two seconds. We design motion films engineered around rhythmic hooks, expressive kinetic typography, dynamic camera transitions, and synchronized sonic design that keep viewers locked to the screen.",
    summaryAr:
      "الجمهور يقرر الاستمرار في المشاهدة أو التمرير خلال ثانيتين فقط. لذلك نصمم فيديوهاتنا بإيقاع حركي مدروس، وتيبوغرافي تفاعلي، وزوايا كاميرا ديناميكية، مع مؤثرات صوتية متزامنة تضمن أعلى معدلات الاحتفاظ بالجمهور.",
    capabilitiesEn: [
      "3D Product Launch Reveal Videos",
      "Kinetic Typography & Editorial Motion",
      "Social-First High-Retention Reels & TikToks",
      "Anamorphic 3D Billboard Experiences",
      "UI & App Interaction Motion Design",
      "Original Sound Design & Audio Mastering",
    ],
    capabilitiesAr: [
      "فيديوهات الكشف عن المنتجات الجديدة (Launch)",
      "تحريك الخطوط والنصوص الحركية (Kinetic Type)",
      "ريلز مصممة لرفع التفاعل والانتشار على السوشيال",
      "عروض الشاشات ثلاثية الأبعاد الخارجية (3D Billboards)",
      "تحريك واجهات التطبيقات والمواقع التفاعلية",
      "تصميم ومكساج المؤثرات الصوتية والموسيقى",
    ],
    software: ["After Effects", "Cinema 4D", "DaVinci Resolve", "Premiere Pro", "Ableton"],
    icon: Film,
  },
  {
    id: "branding",
    num: "04",
    nameEn: "Brand Systems & Strategy",
    nameAr: "الهوية البصرية والبراندينج",
    categoryEn: "Identity Architecture & Voice",
    categoryAr: "بناء العلامة واستراتيجية الصوت",
    taglineEn: "Holistic visual systems built to scale across global physical and digital touchpoints.",
    taglineAr: "منظومات بصرية متكاملة مصممة للنمو والتألق محلياً ودولياً.",
    summaryEn:
      "We craft cohesive brand universes with cultural gravitas. From distinct naming and typography to bespoke packaging and comprehensive digital brand books, our identity systems give ambitious businesses an unmistakable, authoritative presence.",
    summaryAr:
      "نبني علامات تجارية متكاملة الهيبة والأثر. من اختيار الاسم وتصميم الشعار الفريد إلى أدلة استخدام الخطوط، وتصميم العبوات الفاخرة، وأنظمة الهوية الرقمية التي تمنح مشروعك صوتاً وحضوراً يعلق في أذهان الجميع.",
    capabilitiesEn: [
      "Brand Positioning & Naming Systems",
      "Logotype, Wordmark & Icon Architecture",
      "Custom Typographic Systems & Pairing",
      "Luxury Packaging & Print Engineering",
      "Comprehensive Digital Brand Book Guidelines",
      "Multi-Market Arabic & Latin Localization",
    ],
    capabilitiesAr: [
      "بناء استراتيجية التموضع والاسم التجاري",
      "تصميم الشعارات والرموز والعلامات المائية",
      "أنظمة الخطوط وتناسق التيبوغرافي العربي واللاتيني",
      "تصميم التغليف الفاخر والمطبوعات الإبداعية",
      "دليل شامل ومتكامل للهوية البصرية والديجيتال",
      "مواءمة العلامة بين السوقين المصري والخليجي",
    ],
    software: ["Illustrator", "Figma", "InDesign", "FontLab", "Photoshop"],
    icon: Layers,
  },
  {
    id: "web",
    num: "05",
    nameEn: "Interactive Web & Tech",
    nameAr: "تصميم الويب والتجارب الرقمية",
    categoryEn: "Creative Code & Conversion UX",
    categoryAr: "البرمجة الإبداعية وتجربة المستخدم",
    taglineEn: "Award-winning digital platforms that convert visitors into dedicated brand advocates.",
    taglineAr: "منصات ومواقع رقمية تفاعلية تجمع بين سرعة الاستجابة وجماليات 3D.",
    summaryEn:
      "We design and develop high-performance web experiences with smooth kinetic interactions and WebGL 3D canvas integrations. Built on modern Next.js architecture, our platforms load instantly, achieve 99+ Lighthouse scores, and drive measurable client inquiries.",
    summaryAr:
      "نصمم ونطور مواقع وتطبيقات ويب سريعة وخاطفة للأنظار، مدعومة بمحركات 3D التفاعلية (WebGL) ومبنية بأحدث تقنيات Next.js. مواقعنا تحقق تقييمات تفوق 99+ في السرعة والأداء، وتضمن تجربة مستخدم تزيد من طلبات المبيعات.",
    capabilitiesEn: [
      "Custom Next.js & React Web Flagships",
      "WebGL & Three.js 3D Interactive Canvas",
      "Smooth Kinetic Micro-Interactions",
      "Conversion-Focused UX Architecture",
      "Headless CMS & API Architecture",
      "99+ Performance & SEO Optimization",
    ],
    capabilitiesAr: [
      "مواقع ويب مخصصة بأحدث تقنيات Next.js و React",
      "تجارب 3D تفاعلية ومحركات WebGL و Three.js",
      "حركة تفاعلية سلسة وتأثيرات ميكرو-أنيميشن",
      "هندسة تجربة مستخدم مصممة لزيادة المبيعات",
      "أنظمة إدارة محتوى سريعة (Headless CMS)",
      "تحسين محركات البحث SEO وسرعة 99+ على Lighthouse",
    ],
    software: ["Next.js", "React", "Three.js / WebGL", "Tailwind CSS", "Framer Motion"],
    icon: Monitor,
  },
];

export default function ServicesCapabilities() {
  const { isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const active = DISCIPLINES[activeTab];
  const Icon = active.icon;

  return (
    <section
      id="capabilities"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-32 border-t border-black/[0.08] dark:border-white/10 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} y={25}>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-18 md:mb-20">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "القدرات الفنية والتنفيذية" : "FULL CAPABILITIES MATRIX"}
              </span>
            </div>
            <h2
              className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.02] max-w-3xl"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL
                ? "عمق فني وأدوات عالمية لكل خدمة"
                : "Deep Technical Craft & Tooling"}
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-2xl font-normal leading-relaxed">
              {isRTL
                ? "لا نقدم خدمات سطحية أو قوالب جاهزة. استكشف التفاصيل الدقيقة والمخرجات والأدوات البرمجية المتطورة التي نعتمد عليها في كل تخصص."
                : "We do not deal in templates or shallow executions. Explore the sub-disciplines, production deliverables, and world-class software that power every discipline."}
            </p>
          </div>
        </FadeIn>

        {/* Desktop / Tablet Tab Selector Pills */}
        <div className="relative">
          {/* Fade masks for mobile scroll hint */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-[#FAF6F0] dark:from-[#061516] to-transparent z-10 sm:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#FAF6F0] dark:from-[#061516] to-transparent z-10 sm:hidden" />
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 sm:pb-6 mb-8 sm:mb-12 no-scrollbar">
            {DISCIPLINES.map((item, idx) => {
              const ItemIcon = item.icon;
              const isCurrent = activeTab === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer select-none ${
                    isCurrent
                      ? "bg-[#D2392A] text-white shadow-[0_8px_24px_rgba(210,57,42,0.3)]"
                      : "bg-[#FAF7F2] dark:bg-[#0c1b1c] text-[#15100C]/80 dark:text-[#F2E6DC]/80 border border-black/[0.08] dark:border-white/10 hover:border-[#D2392A]/50"
                  }`}
                >
                  <ItemIcon size={15} strokeWidth={2.3} />
                  <span>{isRTL ? item.nameAr : item.nameEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Discipline Deep-Dive Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-[28px] sm:rounded-[36px] md:rounded-[42px] border border-black/[0.08] dark:border-white/10 bg-[#FAF7F2] dark:bg-[#0A1617] p-6 sm:p-9 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Scope Overview & Software Badges */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20">
                      DISCIPLINE {active.num}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#15100C]/60 dark:text-white/60">
                      {isRTL ? active.categoryAr : active.categoryEn}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-3"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {isRTL ? active.nameAr : active.nameEn}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-[#D2392A] mb-4">
                    {isRTL ? active.taglineAr : active.taglineEn}
                  </p>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal mb-8">
                    {isRTL ? active.summaryAr : active.summaryEn}
                  </p>
                </div>

                {/* Software Stack Pills */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu size={15} className="text-[#D2392A]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#15100C]/70 dark:text-white/70">
                      {isRTL ? "حزمة البرمجيات ومحركات الإنتاج" : "Production Engines & Software"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.software.map((sw, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 text-[#15100C] dark:text-[#F2E6DC] shadow-sm"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Capabilities & Deliverables Checklist */}
              <div className="lg:col-span-6 rounded-[24px] sm:rounded-[30px] bg-white dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10 p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2392A] block mb-5">
                  {isRTL ? "نطاق العمل والمخرجات المشمولة" : "TECHNICAL SCOPE & DELIVERABLES"}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {(isRTL ? active.capabilitiesAr : active.capabilitiesEn).map(
                    (cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 p-3 rounded-[16px] bg-[#FAF7F2] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/5"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={13} strokeWidth={2.8} />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#15100C]/85 dark:text-[#F2E6DC]/85 leading-snug">
                          {cap}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between text-xs font-semibold text-[#15100C]/70 dark:text-white/70">
                  <span>{isRTL ? "حقوق الملكية الفكرية" : "Intellectual Property"}</span>
                  <span className="text-[#D2392A] font-bold">100% Commercial Ownership</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
