"use client";

import React from "react";
import { ShieldCheck, Zap, Globe2, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

interface AdvantageItem {
  num: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descEn: string;
  descAr: string;
  statEn: string;
  statAr: string;
  icon: React.ElementType;
}

const ADVANTAGES: AdvantageItem[] = [
  {
    num: "01",
    titleEn: "Direct Director Access",
    titleAr: "تواصل مباشر مع صناع القرار الإبداعي",
    subtitleEn: "No Middlemen. No Chinese Whispers.",
    subtitleAr: "بدون وسطاء أو مدراء حسابات ينقلون الكلام.",
    descEn:
      "At traditional agencies, your brief gets handed down through three layers of account managers before reaching an artist. At As Mama Said, you collaborate directly with senior 3D artists, brand directors, and motion supervisors who actually craft every pixel.",
    descAr:
      "في الوكالات التقليدية، يمر كلامك عبر عدة طبقات من موظفي خدمة العملاء قبل أن يصل للمصمم. في استوديو ماما، أنت تجلس وتتواصل مباشرة مع المخرجين الفنيين ومصممي 3D الذين ينفذون مشروعك بأنفسهم.",
    statEn: "100% Direct Creative Alignment",
    statAr: "100% توافق إبداعي مباشر",
    icon: ShieldCheck,
  },
  {
    num: "02",
    titleEn: "Cairo Soul · Dubai Momentum",
    titleAr: "روح وإبداع القاهرة · سرعة وحداثة دبي",
    subtitleEn: "Cultural Depth Meets Commercial Pace.",
    subtitleAr: "عمق ثقافي وفني مقترن بإيقاع عالمي سريع.",
    descEn:
      "We operate as one synchronized studio across two cultural powerhouses. We bring the rich storytelling heritage and cinematic craft of Cairo together with the forward-looking velocity, tech innovation, and luxury standards of Dubai.",
    descAr:
      "نعمل كفريق متكامل بين عاصمتين إبداعيتين. نجمع بين السرد القصصي والعمق الفني الذي تشتهر به القاهرة، مع الحداثة والسرعة الفائقة والمعايير العالمية الرفيعة التي تقودها دبي.",
    statEn: "2 Key Regional Hubs",
    statAr: "استوديو متكامل في عاصمتين",
    icon: Globe2,
  },
  {
    num: "03",
    titleEn: "Built for Revenue & Authority",
    titleAr: "تصميم يبني هيبة ويحقق أرقاماً ملموسة",
    subtitleEn: "Aesthetics Engineered to Convert.",
    subtitleAr: "جماليات مدروسة بدقة لإيقاف التمرير وزيادة المبيعات.",
    descEn:
      "We do not design pretty pictures in a bubble. Every 3D shader, kinetic hook, and typography pairing is strategically engineered to establish instant brand authority, stop user scrolling, and drive tangible commercial conversions.",
    descAr:
      "لا نصنع لوحات فنية معزولة عن الواقع التجاري. كل انعكاس ضوئي، وكل حركة موشن، وكل تفصيلة في الخطوط مصممة عمداً لفرض هيبة علامتك، وإيقاف التمرير على السوشيال، وتحويل المشاهد إلى عميل دائم.",
    statEn: "+320% Average Audience Retention",
    statAr: "+320% متوسط استبقاء المشاهدين",
    icon: Target,
  },
  {
    num: "04",
    titleEn: "Agile Sprints & Rapid Turnaround",
    titleAr: "مرونة عالية وسرعة إنجاز قياسية",
    subtitleEn: "High Craft Without Agency Bureaucracy.",
    subtitleAr: "أعلى درجات الإتقان بدون روتين الوكالات البطيء.",
    descEn:
      "Big legacy agencies take months just to schedule internal meetings. We run high-velocity production sprints with modern render pipelines, delivering broadcast-grade CGI and web platforms at speeds that keep you ahead of fast-moving market moments.",
    descAr:
      "الشركات القديمة تستهلك شهوراً في الاجتماعات والروتين المكتبي. نحن نعتمد على محطات رندرة فائقة السرعة وفريق مرن يسلّم مخرجات سينمائية جاهزة للبث في فترات قياسية تواكب متطلبات إطلاقاتك السريعة.",
    statEn: "2x Faster Than Legacy Agencies",
    statAr: "أسرع بمرتين من الشركات التقليدية",
    icon: Zap,
  },
];

export default function ServicesComparison() {
  const { isRTL } = useLanguage();

  return (
    <section
      id="difference"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-32 border-t border-black/[0.08] dark:border-white/10 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} y={25}>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-18 md:mb-20">
            <div className="flex items-center justify-center gap-2.5 mb-3.5">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "الفارق الحقيقي" : "THE STUDIO ADVANTAGE"}
              </span>
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
            </div>
            <h2
              className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.02] max-w-3xl text-balance"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL ? "لماذا تختارنا؟" : "Why Choose Us"}
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
              {isRTL
                ? "ابتعدنا عن الروتين البيروقراطي والأسعار المبالغ فيها بلا عائد، وبنينا استوديو إبداعي يركز على أعلى معايير الحرفة الفنية والسرعة والأثر الحقيقي."
                : "We stripped away agency overhead, endless account managers, and cookie-cutter templates to deliver unmatched craftsmanship, velocity, and measurable brand stature."}
            </p>
          </div>
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <FadeIn key={adv.num} delay={idx * 0.1} y={25}>
                <div className="h-full rounded-[26px] sm:rounded-[32px] md:rounded-[36px] border border-black/[0.08] dark:border-white/10 bg-[#FAF7F2] dark:bg-[#0A1617] p-6 sm:p-8 md:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:border-[#D2392A]/50 transition-all duration-300 group">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                      <div className="w-12 h-12 rounded-[18px] bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <span
                        className="font-black text-[#15100C]/30 dark:text-white/30 text-2xl sm:text-3xl"
                        style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                      >
                        {adv.num}
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-snug mb-1.5"
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {isRTL ? adv.titleAr : adv.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm font-bold text-[#D2392A] uppercase tracking-wider mb-4">
                      {isRTL ? adv.subtitleAr : adv.subtitleEn}
                    </p>

                    <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal">
                      {isRTL ? adv.descAr : adv.descEn}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#15100C] dark:text-[#FAF6F0]">
                      {isRTL ? adv.statAr : adv.statEn}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D2392A]" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
