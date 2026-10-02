"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Cpu,
  CheckCircle2,
  ChevronDown,
  Layers,
  Search,
  Box,
  Compass,
  Zap,
  Globe2,
  ShieldCheck,
  Target,
  Code2,
  Send,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

/* -------------------------------------------------------------------------- */
/* 1. CORE SERVICES DATA                                                     */
/* -------------------------------------------------------------------------- */
const MOBILE_SERVICES = [
  {
    num: "01",
    nameEn: "3D Modeling",
    nameAr: "النمذجة ثلاثية الأبعاد",
    taglineEn: "Spatial Geometry & Assets",
    taglineAr: "هندسة المجسمات والبيئات",
    descEn:
      "Creation of detailed objects, characters, or environments tailored for commercial ads, games, and cinematic visuals.",
    descAr:
      "بناء مجسمات وعوالم ثلاثية الأبعاد بدقة فائقة مخصصة للمنتجات والإعلانات والألعاب والعروض السينمائية.",
    image: "/assets/images/service-1-3d.png",
    tagsEn: ["CAD Precision", "Sub-D Surfaces", "CGI Assets"],
    tagsAr: ["دقة متناهية", "أصول سينمائية", "نمذجة منتجات"],
  },
  {
    num: "02",
    nameEn: "Photoreal Rendering",
    nameAr: "الرندرة الواقعية",
    taglineEn: "Light & Material Choreography",
    taglineAr: "إضاءة وخامات سينمائية",
    descEn:
      "Photorealistic renders showcasing designs with custom lighting, tactile materials, and ray-traced accuracy.",
    descAr:
      "معالجة وإخراج فوتوغرافي واقعي يبرز جماليات المواد والخامات والإضاءة المصممة بعناية لإحياء المفاهيم.",
    image: "/assets/images/service-2-render.png",
    tagsEn: ["Ray-Tracing", "PBR Materials", "8K Output"],
    tagsAr: ["محاكاة ضوئية", "خامات فيزيائية", "جودة 8K"],
  },
  {
    num: "03",
    nameEn: "Motion Design",
    nameAr: "تصميم الحركة والأنيميشن",
    taglineEn: "Viral Social & Cinematic Hooks",
    taglineAr: "موشن يخطف الانتباه فوراً",
    descEn:
      "Dynamic animations and kinetic graphics that stop the scroll, add energy, and tell compelling brand stories.",
    descAr:
      "تحريك احترافي وموشن جرافيك ديناميكي يضفي طاقة وحيوية ويوقف التمرير على منصات التواصل الاجتماعي.",
    image: "/assets/images/service-3-motion.png",
    tagsEn: ["Kinetic Motion", "Viral Hooks", "Social Reels"],
    tagsAr: ["تحريك سينمائي", "ريلز فيروسية", "موشن جرافيك"],
  },
  {
    num: "04",
    nameEn: "Brand Identity",
    nameAr: "الهوية البصرية والبراندينج",
    taglineEn: "Cohesive Visual Ecosystems",
    taglineAr: "أنظمة هوية متكاملة",
    descEn:
      "Full brand systems — from distinctive logos to packaging and guidelines — that establish market authority.",
    descAr:
      "صناعة أنظمة بصرية متكاملة — من تصميم الشعار وحتى منظومة الهوية الكاملة التي تضمن حضوراً فريداً ومؤثراً.",
    image: "/assets/images/service-4-branding.png",
    tagsEn: ["Identity Systems", "Guidelines", "Packaging"],
    tagsAr: ["أنظمة هوية", "أدلة بصرية", "تغليف منتجات"],
  },
  {
    num: "05",
    nameEn: "Interactive Web",
    nameAr: "تصميم الويب والتجارب الرقمية",
    taglineEn: "High-Converting Flagships",
    taglineAr: "منصات ومواقع تفاعلية",
    descEn:
      "Modern, conversion-focused websites engineered with 3D canvas, smooth motion, and sub-second performance.",
    descAr:
      "تصميم مواقع وتطبيقات عصرية وتفاعلية تضع تجربة المستخدم وتناسق الخطوط وتوليد المبيعات في المقدمة.",
    image: "/assets/images/service-5-web.png",
    tagsEn: ["Next.js & WebGL", "Responsive UX", "Lighthouse 99+"],
    tagsAr: ["تقنيات WebGL", "تجربة مستخدم", "سرعة استجابة"],
  },
];

/* -------------------------------------------------------------------------- */
/* 2. PIPELINE ROADMAP DATA                                                  */
/* -------------------------------------------------------------------------- */
const MOBILE_STEPS = [
  {
    step: "01",
    titleEn: "Discovery & Strategy",
    titleAr: "الاستكشاف وبناء الاستراتيجية",
    descEn: "Decoding brand DNA, narrative scripting, and technical specifications.",
    descAr: "تحليل هوية العلامة، كتابة السيناريو الإبداعي، وتحديد المواصفات الفنية.",
    icon: Search,
  },
  {
    step: "02",
    titleEn: "3D Prototyping & Look Dev",
    titleAr: "النمذجة والتطوير البصري",
    descEn: "Sub-D geometry, physical PBR materials, and camera animatics.",
    descAr: "بناء المجسمات ثلاثية الأبعاد، تصميم الخامات الفيزيائية، ومسارات الكاميرا.",
    icon: Box,
  },
  {
    step: "03",
    titleEn: "Production & Motion",
    titleAr: "الإنتاج والتحريك والموشن",
    descEn: "Kinetic animation, lighting choreography, and high-fidelity rendering.",
    descAr: "تحريك العناصر بديناميكية عالية، هندسة الإضاءة، والرندرة فائقة الدقة.",
    icon: Sparkles,
  },
  {
    step: "04",
    titleEn: "Launch & Commercial Scale",
    titleAr: "التسليم النهائي والأثر التجاري",
    descEn: "Final 8K/ProRes delivery, cross-platform export, and rollout launch.",
    descAr: "تسليم ملفات الماستر الأصلية بجميع المقاسات والبدء في نشر الحملة بنجاح.",
    icon: Zap,
  },
];

/* -------------------------------------------------------------------------- */
/* 3. STUDIO ADVANTAGES DATA                                                 */
/* -------------------------------------------------------------------------- */
const MOBILE_ADVANTAGES = [
  {
    num: "01",
    titleEn: "Direct Director Access",
    titleAr: "تواصل مباشر مع المخرجين",
    descEn: "No middlemen or account managers — speak directly with the creators.",
    descAr: "تواصل مباشر مع صناع القرار الإبداعي ومصممي 3D دون وسطاء.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    titleEn: "Cairo Soul · Dubai Momentum",
    titleAr: "إبداع القاهرة · سرعة دبي",
    descEn: "Cultural storytelling depth coupled with commercial regional pace.",
    descAr: "عمق فني وسرد قصصي مقترن بالحداثة والمعايير العالمية الرفيعة.",
    icon: Globe2,
  },
  {
    num: "03",
    titleEn: "Built for Revenue & Authority",
    titleAr: "تصميم مدروس لزيادة المبيعات",
    descEn: "Aesthetics engineered to stop the scroll and drive commercial conversion.",
    descAr: "جماليات محسوبة بدقة لإيقاف التمرير وبناء هيبة تجارية راسخة.",
    icon: Target,
  },
  {
    num: "04",
    titleEn: "Unified End-to-End Craft",
    titleAr: "تنفيذ متكامل من الألف إلى الياء",
    descEn: "From brand identity to 3D films, motion, and digital flagships.",
    descAr: "من الفكرة الاستراتيجية والهوية البصرية وحتى الأفواج الإعلانية وبرمجة الويب.",
    icon: Layers,
  },
];

/* -------------------------------------------------------------------------- */
/* 4. MOBILE FAQ DATA                                                        */
/* -------------------------------------------------------------------------- */
const MOBILE_FAQS = [
  {
    qEn: "What is the typical turnaround time for a project?",
    qAr: "كم يستغرق تنفيذ المشروع من البداية وحتى التسليم؟",
    aEn: "A focused 3D reel takes 2–3 weeks. A full brand identity spans 4–6 weeks. High-performance interactive websites take 4–8 weeks with clear milestone sprints.",
    aAr: "الفيديوهات ثلاثية الأبعاد وريلز الإطلاق تستغرق من أسبوعين إلى 3 أسابيع. الهوية المتكاملة تستغرق 4 إلى 6 أسابيع، بينما تستغرق المواقع التفاعلية من 4 إلى 8 أسابيع.",
  },
  {
    qEn: "Can we hire As Mama Said for a single service?",
    qAr: "هل يمكن التعاقد معكم لخدمة واحدة محددة؟",
    aEn: "Absolutely. We regularly deliver standalone projects like 3D product launches, CGI reels, or custom WebGL websites.",
    aAr: "نعم تماماً. نتعاقد بانتظام على مشاريع مركزة ومستقلة مثل فيديو إطلاق 3D، أو حملة رندرة منتجات، أو تصميم موقع ويب تفاعلي.",
  },
  {
    qEn: "What commercial rights and files do we own?",
    qAr: "ما هي حقوق الملكية والملفات التي نستلمها؟",
    aEn: "You own 100% of worldwide commercial IP upon final delivery, including uncompressed master files (ProRes, 8K PNGs, vector SVG, and source code).",
    aAr: "تمتلكون حقوق الملكية الفكرية الكاملة بنسبة 100% مع تسليم جميع ملفات الماستر الأصلية بأعلى جودة بجميع المقاسات.",
  },
];

export default function ServicesMobileView() {
  const { isRTL, t } = useLanguage();
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC]">
      {/* -------------------------------------------------------------------- */}
      {/* M1: COMPACT PAGE HERO                                                */}
      {/* -------------------------------------------------------------------- */}
      <PageHero
        compact={true}
        eyebrow=""
        subtitle=""
        title={isRTL ? "خدماتنا" : "SERVICES"}
        curveFill="var(--theme-bg, #FAF6F0)"
      />

      {/* -------------------------------------------------------------------- */}
      {/* M2: CORE SERVICES (Fluid Mobile Swiper & Quick Tabs)                 */}
      {/* -------------------------------------------------------------------- */}
      <section className="px-4 py-8 sm:py-10">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 mb-2.5">
            <span>{isRTL ? "مجالات الإبداع" : "CORE DISCIPLINES"}</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-tight"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {isRTL ? "ما نبنيه ونبدع فيه" : "What We Craft"}
          </h2>
          <p className="mt-1 text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 max-w-xs">
            {isRTL
              ? "5 مجالات إبداعية متكاملة تحت سقف استوديو واحد"
              : "5 integrated disciplines engineered under one creative roof"}
          </p>
        </div>

        {/* Quick Number Tabs */}
        <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-1">
          {MOBILE_SERVICES.map((s, idx) => {
            const isActive = activeServiceIdx === idx;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveServiceIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-[#D2392A] text-white shadow-md scale-105"
                    : "bg-black/[0.05] dark:bg-white/[0.06] text-[#15100C]/70 dark:text-[#F2E6DC]/70 hover:bg-black/[0.08]"
                }`}
              >
                <span>{s.num}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        {(() => {
          const s = MOBILE_SERVICES[activeServiceIdx];
          return (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-[24px] bg-white dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 p-5 shadow-lg overflow-hidden flex flex-col justify-between"
            >
              {/* Service Visual Preview */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 dark:bg-black/40 mb-4 border border-black/5">
                <img
                  src={s.image}
                  alt={isRTL ? s.nameAr : s.nameEn}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 start-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                  {s.num} / 05
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D2392A] block mb-1">
                  {isRTL ? s.taglineAr : s.taglineEn}
                </span>
                <h3
                  className="text-xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-snug mb-2"
                  style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                >
                  {isRTL ? s.nameAr : s.nameEn}
                </h3>
                <p className="text-xs text-[#15100C]/80 dark:text-[#F2E6DC]/80 leading-relaxed mb-4">
                  {isRTL ? s.descAr : s.descEn}
                </p>

                {/* Deliverable Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/[0.06] dark:border-white/10">
                  {(isRTL ? s.tagsAr : s.tagsEn).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-[10.5px] font-mono font-semibold text-[#15100C]/80 dark:text-[#F2E6DC]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })()}
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* M3: FEATURED ALLIANCE: SIRAD × AS MAMA SAID (Condensed & High-Impact) */}
      {/* -------------------------------------------------------------------- */}
      <section
        id="collab"
        style={{ backgroundColor: "#050B08", color: "#ffffff" }}
        className="relative z-10 w-full bg-[#050B08] text-white px-4 py-8 border-y border-[#A3E635]/30 overflow-hidden"
      >
        {/* Subtle Cyber Grid & Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e6350a_1px,transparent_1px),linear-gradient(to_bottom,#a3e6350a_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-15 pointer-events-none">
            <img
              src="/assets/images/sirad-dither-s.webp"
              alt=""
              className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]"
            />
          </div>
          <div className="absolute -top-16 -end-16 w-48 h-48 bg-[#A3E635]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-lg mx-auto flex flex-col gap-4">
          {/* 1. Header (Compact Alliance Status) */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#A3E635]/20 text-[10.5px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-ping" />
              <span className="text-[#A3E635] font-bold tracking-wider uppercase">
                {isRTL ? "تحالف استراتيجي" : "STRATEGIC ALLIANCE"}
              </span>
            </div>
            <span className="text-white/60 font-semibold tracking-wider">
              CAIRO · DUBAI
            </span>
          </div>

          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight tracking-tight mb-1"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              AS MAMA SAID <span className="text-[#A3E635]">×</span> SIRAD
            </h2>
            <p className="text-xs text-[#A3E635] font-bold">
              {isRTL
                ? "الإخراج الإبداعي والإنتاج البصري مقترناً بالهندسة الرقمية المتقدمة"
                : "Creative Direction & 3D Visuals Powered by Advanced Digital Tech"}
            </p>
          </div>

          {/* 2. Unified High-Tech Partner Card */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0c2419] via-[#07140e] to-[#040806] border border-[#A3E635]/40 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/images/sirad-logo-white.png"
                  alt="Sirad Creative Agency"
                  className="h-6 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/80 border-s border-white/20 ps-2 leading-tight">
                  CREATIVE<br />AGENCY
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#A3E635]/15 border border-[#A3E635]/40 text-[#A3E635] text-[10px] font-mono font-bold">
                EST. CREATIVE TECH
              </span>
            </div>

            <p className="text-xs text-[#D7E2EA]/90 leading-relaxed mb-3 font-normal">
              {isRTL
                ? "الشريك التقني والهندسي الحصري لتطوير المنصات الرقمية والتجارب التفاعلية ثلاثية الأبعاد بأعلى معايير السرعة والأداء."
                : t.collab.siradRole.desc}
            </p>

            {/* 4 Compact Tech Pills */}
            <div className="grid grid-cols-2 gap-1.5 mb-3.5">
              {[
                { en: "WebGL & 3D Canvas", ar: "تجارب 3D تفاعلية" },
                { en: "Sub-Second Velocity", ar: "سرعة استجابة فائقة" },
                { en: "Custom Architecture", ar: "أنظمة برمجية مخصصة" },
                { en: "Lighthouse 99+ Standard", ar: "أداء عالمي 99+" },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="p-1.5 px-2 rounded-lg bg-[#081510] border border-[#A3E635]/25 flex items-center gap-1.5"
                >
                  <Zap size={11} className="text-[#A3E635] shrink-0" />
                  <span className="text-[10px] text-white font-medium truncate">
                    {isRTL ? pill.ar : pill.en}
                  </span>
                </div>
              ))}
            </div>

            {/* Link to Sirad */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://sirad.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(163,230,53,0.3)] active:scale-95 transition-all"
              >
                <span>{isRTL ? "موقع sirad.co" : "sirad.co"}</span>
                <ArrowUpRight size={13} />
              </a>
              <span className="text-[10px] font-mono text-white/50">
                {isRTL ? "شريك تقني معتمد" : "Official Tech Partner"}
              </span>
            </div>
          </div>

          {/* 3. Horizontal Swiper for Synergy Advantages (Takes minimal height, fast to swipe) */}
          <div>
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#A3E635] font-bold">
                {isRTL ? "مزايا التحالف للعملاء" : "ALLIANCE ADVANTAGES"}
              </span>
              <span className="text-[9.5px] font-mono text-white/40">
                {isRTL ? "اسحب للتمرير ←" : "Swipe →"}
              </span>
            </div>

            <div className="flex items-stretch gap-2 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
              {t.collab.synergies.map((syn, idx) => (
                <div
                  key={idx}
                  className="snap-start shrink-0 w-[200px] p-3 rounded-xl bg-gradient-to-b from-[#0c2419] to-[#040906] border border-[#A3E635]/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-5 h-5 rounded bg-[#A3E635]/20 text-[#A3E635] text-[10.5px] font-mono font-bold flex items-center justify-center border border-[#A3E635]/40">
                        {syn.num}
                      </span>
                      <span className="text-[9px] font-mono text-[#A3E635]/70 uppercase">
                        SYNERGY
                      </span>
                    </div>
                    <h4
                      className="text-xs font-black uppercase text-white mb-1 leading-snug line-clamp-1"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {syn.title}
                    </h4>
                    <p className="text-[10px] text-[#D7E2EA]/80 leading-relaxed line-clamp-2 font-normal">
                      {syn.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Compact 4-Stat Strip + Contact CTA */}
          <div className="rounded-xl bg-gradient-to-r from-[#0a2016] via-[#050e09] to-[#0a2016] border border-[#A3E635]/30 p-3 flex flex-col gap-3">
            <div className="grid grid-cols-4 gap-1 text-center divide-x rtl:divide-x-reverse divide-[#A3E635]/20">
              {t.collab.stats?.map((stat, idx) => (
                <div key={idx} className="px-1">
                  <span
                    className="block text-lg font-black text-[#A3E635] leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[8.5px] text-white/70 font-semibold block leading-tight truncate">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(163,230,53,0.3)] active:scale-98 transition-all"
            >
              <span>{t.collab.ctaBtn || (isRTL ? "ابدأ مشروعك مع التحالف" : "Start a Joint Project")}</span>
              <ArrowRight size={13} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* M4: PRODUCTION ROADMAP (4 Connected Steps)                           */}
      {/* -------------------------------------------------------------------- */}
      <section className="px-4 py-8 sm:py-10 bg-[#FAF6F0] dark:bg-[#061516]">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 mb-2">
            <span>{isRTL ? "مراحل الإنتاج" : "WORKFLOW ROADMAP"}</span>
          </div>
          <h2
            className="text-2xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-tight"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {isRTL ? "من الفكرة إلى الإطلاق" : "How We Deliver"}
          </h2>
        </div>

        {/* Vertical Connected Stepper */}
        <div className="flex flex-col gap-3 relative max-w-lg mx-auto">
          {MOBILE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="rounded-2xl bg-white dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 p-4 shadow-sm flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center shrink-0 font-mono font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h4
                    className="text-sm font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {isRTL ? step.titleAr : step.titleEn}
                  </h4>
                  <p className="text-xs text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed">
                    {isRTL ? step.descAr : step.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* M5: STUDIO ADVANTAGES (Why Choose Us Quick 2x2 Grid)                  */}
      {/* -------------------------------------------------------------------- */}
      <section className="px-4 py-8 bg-black/[0.02] dark:bg-black/20 border-y border-black/[0.06] dark:border-white/10">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D2392A] block mb-1">
            {isRTL ? "لماذا تختارنا" : "THE STUDIO ADVANTAGE"}
          </span>
          <h2
            className="text-2xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC]"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {isRTL ? "لماذا As Mama Said؟" : "Why Choose Us"}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2.5 max-w-lg mx-auto">
          {MOBILE_ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.num}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center mb-2">
                    <Icon size={16} />
                  </div>
                  <h4
                    className="text-xs font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-snug mb-1"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {isRTL ? adv.titleAr : adv.titleEn}
                  </h4>
                  <p className="text-[10.5px] text-[#15100C]/70 dark:text-[#F2E6DC]/70 leading-relaxed">
                    {isRTL ? adv.descAr : adv.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* M6: MOBILE FAQ ACCORDION                                             */}
      {/* -------------------------------------------------------------------- */}
      <section className="px-4 py-8 sm:py-10 max-w-lg mx-auto w-full">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D2392A] block mb-1">
            {isRTL ? "إجابات سريعة" : "QUICK ANSWERS"}
          </span>
          <h2
            className="text-2xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC]"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {isRTL ? "الأسئلة الشائعة" : "FAQ"}
          </h2>
        </div>

        <div className="flex flex-col gap-2.5">
          {MOBILE_FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-start select-none"
                >
                  <span
                    className="text-xs font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-snug"
                    style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                  >
                    {isRTL ? faq.qAr : faq.qEn}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#D2392A] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 pb-4 pt-1 text-xs text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed border-t border-black/[0.04] dark:border-white/5"
                    >
                      {isRTL ? faq.aAr : faq.aEn}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* M7: MOBILE PROJECT CTA BANNER                                        */}
      {/* -------------------------------------------------------------------- */}
      <section className="px-4 pb-12 pt-4 max-w-lg mx-auto w-full">
        <div className="rounded-[24px] bg-[#15100C] dark:bg-[#07130e] text-white p-6 text-center border border-white/10 shadow-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D2392A] text-white text-[11px] font-bold uppercase tracking-wider mb-3">
            {isRTL ? "جاهزون للبدء" : "READY TO LAUNCH"}
          </span>
          <h3
            className="text-xl sm:text-2xl font-black uppercase text-white mb-2 leading-tight"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {isRTL ? "دعنا نبني مشروعك القادم" : "Let's Build Something Iconic"}
          </h3>
          <p className="text-xs text-white/75 mb-5 max-w-xs mx-auto leading-relaxed">
            {isRTL
              ? "فريقنا الإبداعي والتقني جاهز لتحويل فكرتك إلى واقع حي يفرض سيطرته في السوق."
              : "Our creative and technical war room is ready to transform your vision into commercial authority."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#D2392A] hover:bg-[#b02e20] text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
          >
            <span>{isRTL ? "ابدأ مشروعك الآن" : "Start Your Project"}</span>
            <Send size={14} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
