"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Sparkles, Rocket, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

interface PipelineStep {
  step: string;
  durationEn: string;
  durationAr: string;
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  descEn: string;
  descAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  icon: React.ElementType;
}

const STEPS: PipelineStep[] = [
  {
    step: "01",
    durationEn: "Week 01",
    durationAr: "الأسبوع الأول",
    titleEn: "Discovery & Creative Strategy",
    titleAr: "الاستكشاف وبناء الاستراتيجية",
    taglineEn: "Decoding the brand DNA and setting the aesthetic benchmark.",
    taglineAr: "تحليل هوية العلامة وتحديد المعايير الجمالية والفنية.",
    descEn:
      "We begin with a deep exploration of your product mechanics, audience psychological triggers, and market white-spaces. Before crafting a single polygon or sketch, we establish clear visual direction decks, narrative scripts, and technical specifications so the entire team marches toward a unified creative objective.",
    descAr:
      "نبدأ بدراسة متعمقة للمنتج والجمهور المستهدف ونقاط التميز التنافسية. قبل البدء في أي رسم أو نمذجة، نبني لوحات التوجه البصري، ونكتب السيناريو الإبداعي، ونحدد المواصفات الفنية لضمان أن كل فكرة تخدم هدفاً واضحاً ومحسوباً بدقة.",
    deliverablesEn: [
      "Visual Moodboards & Art Direction",
      "Strategic Narrative Script",
      "Technical Scope & Architecture",
      "Timeline & Milestone Roadmap",
    ],
    deliverablesAr: [
      "لوحات الإلهام والتوجه الفني",
      "السيناريو والسرد الإبداعي",
      "المواصفات الفنية للمشروع",
      "الجدول الزمني ومراحل التسليم",
    ],
    icon: Search,
  },
  {
    step: "02",
    durationEn: "Weeks 02–03",
    durationAr: "الأسبوعان 02–03",
    titleEn: "3D Prototyping & Look Dev",
    titleAr: "النمذجة والتطوير البصري (Look Dev)",
    taglineEn: "Giving physical weight and tangible form to abstract visions.",
    taglineAr: "إعطاء وزن وشكل ملموس للأفكار الإبداعية في الفضاء ثلاثي الأبعاد.",
    descEn:
      "We translate ideas into high-precision three-dimensional forms. We build custom geometries, engineer tactile PBR shader materials (glass, metal, fabric, fluids), and test dynamic camera choreography through clay-render animatics to lock pacing and composition before final rendering.",
    descAr:
      "نحوّل الرؤية المعتمدة إلى مجسمات ثلاثية الأبعاد متناهية الدقة. نصمم الخامات الفيزيائية الواقعية (زجاج، معادن، سوائل، أقمشة) ونختبر مسارات الكاميرا والإضاءة من خلال مشاهد تحريك أولية لضبط الإيقاع والتكوين قبل الرندرة النهائية.",
    deliverablesEn: [
      "Sub-D 3D Models & Geometry",
      "Bespoke Material & Shader Swatches",
      "Animatic Pre-visualization (Pre-vis)",
      "Studio Lighting & Camera Schemes",
    ],
    deliverablesAr: [
      "مجسمات ثلاثية الأبعاد عالية الدقة",
      "عينات الخامات وانعكاسات المواد",
      "تحريك تجريبي مبدئي (Animatic)",
      "توزيع الإضاءة وزوايا الكاميرا",
    ],
    icon: Compass,
  },
  {
    step: "03",
    durationEn: "Weeks 03–05",
    durationAr: "الأسابيع 03–05",
    titleEn: "Craft, Motion & 8K Rendering",
    titleAr: "الإنتاج الدقيق، التحريك والرندرة الفائقة",
    taglineEn: "Where cinematic fidelity and technical obsession converge.",
    taglineAr: "حيث تجتمع الدقة السينمائية وشغف التفاصيل في إنتاج يبهر الأبصار.",
    descEn:
      "Our render farms and motion workstations go to work. We run photorealistic ray-tracing, simulate realistic physics dynamics, animate kinetic typography, and conduct precision color grading. Custom audio design and sonic branding are engineered to match every visual beat seamlessly.",
    descAr:
      "تنتقل المشاريع لمحطات الرندرة والتحريك المتقدمة. نقوم برندرة المشاهد بتتبع الأشعة، ومحاكاة الحركة الفيزيائية، وتحريك التيبوغرافي، وتدريج الألوان باحترافية سينمائية، مع تصميم صوتي متناغم يرفع مستوى الإثارة والتأثير.",
    deliverablesEn: [
      "8K Photorealistic Master Renders",
      "Fluid 60 FPS Motion Sequences",
      "Cinematic Color Grade & Conforming",
      "Custom Audio Design & Sound FX",
    ],
    deliverablesAr: [
      "رندرات سينمائية بدقة 8K فائقة",
      "مشاهد موشن جرافيك بانسيابية 60 إطار",
      "تصحيح وتدريج ألوان سينمائي",
      "تصميم ومكساج صوتي مخصص",
    ],
    icon: Sparkles,
  },
  {
    step: "04",
    durationEn: "Week 06",
    durationAr: "الأسبوع 06",
    titleEn: "Multi-Channel Rollout & Delivery",
    titleAr: "الإطلاق وتسليم أصول الحملة الكاملة",
    taglineEn: "Engineered to perform across screens, feeds, and massive billboards.",
    taglineAr: "جاهزة للتألق عبر شاشات الموبايل والإعلانات الضخمة والمواقع الإلكترونية.",
    descEn:
      "We prepare and format every master deliverable across every required global spec: vertical 9:16 for high-converting reels and TikToks, 16:9 for cinema and TVC, anamorphic resolutions for out-of-home 3D billboards, and optimized WebGL/GLB code for immersive interactive websites.",
    descAr:
      "نجهز ونصدر كافة المخرجات بمختلف القياسات والمعايير العالمية: 9:16 عمودي للريلز ومنصات السوشيال، 16:9 للشاشات الكبرى والإعلانات التلفزيونية، دقة خاصة للشاشات ثلاثية الأبعاد (3D Billboards)، وأكواد WebGL تفاعلية للمواقع.",
    deliverablesEn: [
      "Full Aspect Ratio Suite (9:16, 16:9, 1:1, 4:5)",
      "Uncompressed ProRes 4444 Master Files",
      "Web-Optimized Interactive Assets",
      "Brand Guidelines & Implementation Pack",
    ],
    deliverablesAr: [
      "جميع المقاسات (9:16، 16:9، 1:1، 4:5)",
      "ملفات ماستر غير مضغوطة ProRes 4444",
      "أصول تفاعلية محسنة للويب",
      "دليل استخدام الأصول وتطبيق الهوية",
    ],
    icon: Rocket,
  },
];

export default function ServicesPipeline() {
  const { isRTL } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="pipeline"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-32 border-t border-black/[0.08] dark:border-white/10 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} y={25}>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-18 md:mb-20">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "منهجية الإنتاج والإبداع" : "PRODUCTION PIPELINE"}
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
                ? "من أول فكرة.. وحتى الانتشار العالمي"
                : "From First Spark to Global Rollout"}
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-2xl font-normal leading-relaxed">
              {isRTL
                ? "بدون عشوائية أو تعديلات لا تنتهي. إطار عمل مدروس من 4 مراحل يضمن خروج كل مشروع بأعلى درجات الإتقان الفني والالتزام الدقيق بالمواعيد."
                : "No guesswork or infinite revision loops. A disciplined 4-phase creative framework engineered to turn ambitious briefs into market-defining assets on schedule."}
            </p>
          </div>
        </FadeIn>

        {/* 4 Steps Interactive Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`relative text-start p-4 sm:p-5 rounded-[22px] sm:rounded-[26px] border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between min-h-[110px] sm:min-h-[130px] ${
                  isActive
                    ? "bg-[#0A1617] text-white border-[#D2392A] shadow-[0_12px_32px_rgba(210,57,42,0.18)]"
                    : "bg-[#FAF7F2] dark:bg-[#0c1b1c]/60 text-[#15100C] dark:text-[#F2E6DC] border-black/[0.08] dark:border-white/10 hover:border-[#D2392A]/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2 w-full mb-2">
                  <span
                    className={`font-black tracking-tight leading-none text-xl sm:text-2xl ${
                      isActive ? "text-[#D2392A]" : "text-[#15100C]/40 dark:text-white/40"
                    }`}
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {s.step}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? "bg-[#D2392A] text-white" : "bg-black/5 dark:bg-white/5 text-current opacity-70"
                    }`}
                  >
                    <Icon size={15} strokeWidth={2.2} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider block opacity-60 mb-0.5">
                    {isRTL ? s.durationAr : s.durationEn}
                  </span>
                  <span className="text-xs sm:text-sm font-bold block leading-snug line-clamp-1">
                    {isRTL ? s.titleAr : s.titleEn}
                  </span>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="pipeline-active-indicator"
                    className="absolute bottom-0 inset-x-6 h-[2.5px] bg-[#D2392A] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Phase Details Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-[28px] sm:rounded-[36px] md:rounded-[42px] border border-black/[0.08] dark:border-white/10 bg-[#FAF7F2] dark:bg-[#0A1617] p-6 sm:p-9 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Summary & Explanation */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D2392A] text-white">
                      {isRTL ? STEPS[activeStep].durationAr : STEPS[activeStep].durationEn}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#15100C]/60 dark:text-white/60">
                      Phase {STEPS[activeStep].step} of 04
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-3"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {isRTL ? STEPS[activeStep].titleAr : STEPS[activeStep].titleEn}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-[#D2392A] mb-4">
                    {isRTL ? STEPS[activeStep].taglineAr : STEPS[activeStep].taglineEn}
                  </p>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal">
                    {isRTL ? STEPS[activeStep].descAr : STEPS[activeStep].descEn}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Deliverables Card */}
              <div className="lg:col-span-5 rounded-[22px] sm:rounded-[28px] bg-white dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10 p-5 sm:p-7 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2392A] block mb-4">
                  {isRTL ? "المخرجات المعتمدة للتسليم" : "KEY DELIVERABLES"}
                </span>

                <ul className="flex flex-col gap-3">
                  {(isRTL
                    ? STEPS[activeStep].deliverablesAr
                    : STEPS[activeStep].deliverablesEn
                  ).map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#15100C]/85 dark:text-[#F2E6DC]/85">
                      <CheckCircle2
                        size={17}
                        className="text-[#D2392A] shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#15100C]/70 dark:text-white/70">
                  <span>{isRTL ? "دقة التسليم" : "Production Standard"}</span>
                  <span className="text-[#D2392A]">100% Broadcast Ready</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
