"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

interface FaqItem {
  qEn: string;
  qAr: string;
  aEn: string;
  aAr: string;
}

const FAQS: FaqItem[] = [
  {
    qEn: "What is the typical turnaround time for a complete project?",
    qAr: "كم يستغرق تنفيذ المشروع من البداية وحتى التسليم النهائي؟",
    aEn: "Project timelines depend on technical scope and scale. A focused 3D product reel or commercial CGI package typically takes 2 to 3 weeks. A comprehensive brand identity system, including naming, packaging, and digital guidelines, usually spans 4 to 6 weeks. High-performance interactive websites take between 4 to 8 weeks. We always agree on guaranteed sprint milestones before kick-off.",
    aAr: "تعتمد المدة الزمنية على حجم ونطاق العمل الفني. الفيديوهات ثلاثية الأبعاد وريلز الإطلاق تستغرق عادة من أسبوعين إلى 3 أسابيع. تطوير الهوية البصرية المتكاملة وتصميم التغليف يستغرق من 4 إلى 6 أسابيع، بينما تستغرق المواقع التفاعلية من 4 إلى 8 أسابيع. نلتزم دائماً بجدول زمني واضح ومواعيد تسليم دقيقة متفق عليها مسبقاً.",
  },
  {
    qEn: "Can we hire As Mama Said for a single service or only full packages?",
    qAr: "هل يمكن التعاقد معكم لخدمة واحدة محددة أم باقات متكاملة فقط؟",
    aEn: "Both. While many of our partners trust us with end-to-end ecosystems (from brand identity to 3D launch films and web platforms), we frequently collaborate on standalone high-impact briefs — such as an anamorphic 3D billboard, a series of high-converting social motion hooks, or a bespoke CGI product campaign.",
    aAr: "نعم، يمكنك طلب خدمة واحدة محددة تماماً. على الرغم من أن العديد من عملائنا يفضلون العمل معنا في باقات متكاملة (من الهوية للرندرة وتصميم الموقع)، إلا أننا نتعاقد بانتظام على مشاريع مركزة ومستقلة — مثل تصميم فيديو إطلاق 3D، أو حملة رندرة منتجات، أو تصميم موقع ويب تفاعلي.",
  },
  {
    qEn: "How do you price projects — fixed fee, sprint retainers, or custom quotes?",
    qAr: "كيف يتم تسعير المشاريع في استوديو ماما؟",
    aEn: "Every engagement is transparently priced based on scope, deliverables, and production fidelity. We work primarily on a fixed project-fee basis with clear milestones, so you never encounter surprise invoices. For brands requiring continuous creative output, we also offer dedicated monthly studio retainers with guaranteed production capacity.",
    aAr: "تعتمد خطط التسعير على الشفافية والوضوح التام. نعمل بنظام القيمة المحددة للمشروع (Fixed Project Fee) مقسمة على مراحل تسليم واضحة، حتى لا تواجه أي تكاليف غير متوقعة. كما نوفر باقات تعاون شهري (Retainers) للشركات التي تحتاج لإنتاج بصري وموشن مستمر كل شهر بطاقة إنتاجية محجوزة.",
  },
  {
    qEn: "What rights and source files do we own after project completion?",
    qAr: "ما هي حقوق الملكية والملفات التي نستلمها بعد الانتهاء؟",
    aEn: "Upon final payment, you own 100% of the commercial intellectual property and worldwide broadcast rights for all approved deliverables. We deliver uncompressed master files across all required aspect ratios (ProRes 4444, 8K PNG/EXR, vector SVG, Figma files, and web-ready code).",
    aAr: "بمجرد اعتماد المشروع وسداد الدفعة النهائية، تنتقل إليكم الملكية الفكرية الكاملة بنسبة 100% وحقوق النشر والاستخدام التجاري في جميع أنحاء العالم. كما نسلمكم ملفات الماستر الأصلية بأعلى جودة بجميع المقاسات (ProRes 4444، صور 8K، ملفات فيجما، والأكواد المصدرية للمواقع).",
  },
  {
    qEn: "How do your Cairo and Dubai teams coordinate on client projects?",
    qAr: "كيف ينسق فريقا القاهرة ودبي لإنجاز المشاريع؟",
    aEn: "We operate as one unified, cloud-synchronized studio with shared render farms and design infrastructure. Our Cairo directors lead deep conceptual strategy, character sculpting, and motion direction, while our Dubai presence ensures seamless regional liaison, luxury market alignment, and rapid stakeholder communication.",
    aAr: "نعمل كاستوديو واحد سحابي متكامل يمتلك بنية تحتية مشتركة لمزارع الرندرة والخوادم. يتولى فريق القاهرة التطوير المفاهيمي الدقيق وتفاصيل النمذجة والحركة، بينما يقود فريق دبي التنسيق الإقليمي المباشر ومراعاة أعلى معايير الأسواق الخليجية الفاخرة وسرعة التواصل.",
  },
  {
    qEn: "What do you need from our team to kick off a project?",
    qAr: "ما هي المتطلبات والمعلومات التي تحتاجونها للبدء؟",
    aEn: "Simply reach out via our contact page with a brief summary of your product, target audience, ideal timeline, and reference benchmarks if available. We will schedule a 30-minute discovery call within 24 hours, followed by a detailed visual proposal and production roadmap.",
    aAr: "كل ما نحتاجه هو التواصل معنا عبر صفحة التواصل وتزويدنا بنبذة عن منتجك، جمهورك المستهدف، والموعد التقريبي المطلوب للإطلاق، وأي مراجع بصرية تعجبك. نقوم خلال 24 ساعة بعقد جلسة استكشافية سريعة، تليها خطة عمل وعرض فني ومالي مفصل.",
  },
];

export default function ServicesFaq() {
  const { isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-32 border-t border-black/[0.08] dark:border-white/10 transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} y={25}>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-18 md:mb-20">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                {isRTL ? "إجابات واضحة وصريحة" : "FREQUENTLY ASKED QUESTIONS"}
              </span>
            </div>
            <h2
              className="font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.02]"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
              }}
            >
              {isRTL
                ? "كل ما تحتاج معرفته عن العمل معنا"
                : "Everything You Need to Know"}
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-xl font-normal leading-relaxed">
              {isRTL
                ? "إجابات مباشرة على أكثر الأسئلة التي يطرحها شركاؤنا قبل بدء العمل، لضمان أعلى درجات الشفافية والراحة."
                : "Straight answers to the most common questions our partners ask before starting a collaboration."}
            </p>
          </div>
        </FadeIn>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.05} y={15}>
                <div
                  className={`rounded-[22px] sm:rounded-[26px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#FAF7F2] dark:bg-[#0A1617] border-[#D2392A]/50 shadow-[0_12px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                      : "bg-[#FAF7F2]/80 dark:bg-[#0c1b1c]/50 border-black/[0.07] dark:border-white/10 hover:border-[#D2392A]/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <span
                      className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isOpen ? "text-[#D2392A]" : "text-[#15100C] dark:text-[#F2E6DC]"
                      }`}
                      style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                    >
                      {isRTL ? faq.qAr : faq.qEn}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#D2392A] text-white"
                          : "bg-black/5 dark:bg-white/5 text-[#15100C]/70 dark:text-white/70"
                      }`}
                    >
                      {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal border-t border-black/[0.04] dark:border-white/5">
                          {isRTL ? faq.aAr : faq.aEn}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Quick Contact Prompt Footer */}
        <FadeIn delay={0.3} y={20}>
          <div className="mt-12 sm:mt-16 text-center p-6 sm:p-8 rounded-[24px] sm:rounded-[30px] bg-[#FAF7F2] dark:bg-[#0A1617] border border-black/[0.08] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-start">
              <span className="text-sm sm:text-base font-bold text-[#15100C] dark:text-[#F2E6DC] block">
                {isRTL ? "عندك سؤال إضافي مش موجود هنا؟" : "Have a question not answered here?"}
              </span>
              <span className="text-xs sm:text-sm text-[#15100C]/60 dark:text-white/60">
                {isRTL ? "فريقنا الإبداعي جاهز للرد عليك خلال ساعات." : "Our creative directors are ready to discuss your specific brief."}
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D2392A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#b82f22] transition-colors shrink-0 shadow-md"
            >
              <MessageSquare size={16} />
              <span>{isRTL ? "تحدث معنا الآن" : "Ask Our Team"}</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
