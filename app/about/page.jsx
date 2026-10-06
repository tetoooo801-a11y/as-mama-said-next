"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SharedCta from "@/components/SharedCta";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users,
  Rocket,
  Globe,
  Heart,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();


  const getStatIcon = (iconName) => {
    switch (iconName) {
      case "users":
        return <Users size={24} strokeWidth={1.75} className="text-white/60" />;
      case "rocket":
        return <Rocket size={24} strokeWidth={1.75} className="text-white/60" />;
      case "globe":
        return <Globe size={24} strokeWidth={1.75} className="text-white/60" />;
      case "heart":
      default:
        return <Heart size={24} strokeWidth={1.75} className="text-white/60" />;
    }
  };

  const realClientLogos = [
    { name: "Cadbury", logo: "/assets/images/clients/27_Cadbury.png" },
    { name: "Hyde Park", logo: "/assets/images/clients/31_Hyde_Park_Development.png" },
    { name: "KIKO Milano", logo: "/assets/images/clients/18_KIKO_Milano.png" },
    { name: "Kenwood", logo: "/assets/images/clients/16_Kenwood.png" },
    { name: "L'azurde", logo: "/assets/images/clients/28_LAzurde.png" },
    { name: "Hyper One", logo: "/assets/images/clients/17_Hyper_1.png" },
    { name: "Zewail City", logo: "/assets/images/clients/23_Zewail_City.png" },
    { name: "Tie House", logo: "/assets/images/clients/01_Tie_House.png" },
  ];

  return (
    <div
      className="relative w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors"
      style={{ overflowX: "clip" }}
    >
      <SmoothScroll />
      <Navbar />

      <main>
        {/* Compact Animated PageHero with Centered "ABOUT" & Living Wave Motion */}
        <PageHero
          compact={true}
          title={isRTL ? "عن الاستوديو" : "ABOUT"}
          curveFill="var(--theme-bg, #FAF6F0)"
        />

        <div className="pt-8 sm:pt-14 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col gap-20 sm:gap-28 md:gap-32">
          {/* ============================================================== */}
          {/* SECTION 1: HERO / WHO WE ARE                                   */}
          {/* ============================================================== */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <FadeIn delay={0.1} y={20}>
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                  <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                    {t.about.heroKicker}
                  </span>
                </div>

                {/* Big Headline */}
                <h1
                  className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.05] sm:leading-[1.03] mb-5 sm:mb-6"
                  style={{
                    fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                    fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                  }}
                >
                  {t.about.heroTitle1}{" "}
                  <span className="text-[#D2392A] block">{t.about.heroTitle2}</span>
                </h1>

                {/* Paragraphs */}
                <p className="text-sm sm:text-base md:text-[1.02rem] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal max-w-xl mb-3.5">
                  {t.about.p1}
                </p>
                <p className="text-sm sm:text-base md:text-[1.02rem] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal max-w-xl mb-3.5">
                  {t.about.p2}
                </p>
                {t.about.p3 && (
                  <p className="text-sm sm:text-base md:text-[1.02rem] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal max-w-xl mb-6">
                    {t.about.p3}
                  </p>
                )}

                {/* Signature */}
                <div
                  className="font-serif italic text-2xl sm:text-3xl text-[#15100C]/85 dark:text-[#F2E6DC]/85 tracking-wide select-none"
                  style={{ fontFamily: "'Brush Script MT', cursive, Georgia, serif" }}
                >
                  {t.about.sign}
                </div>
              </FadeIn>
            </div>

            {/* Right Artwork Container */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <FadeIn delay={0.2} y={30}>
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-[26px] sm:rounded-[32px] md:rounded-[36px] border border-black/[0.08] dark:border-white/10 bg-[#0C0C0C]/5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group">
                  <img
                    src="/assets/images/about-clarity-hd.webp"
                    alt="Clarity Creates Connection - As Mama Said Creative Studio"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ============================================================== */}
          {/* NEW SECTION: THE STORY BEHIND OUR NAME                         */}
          {/* ============================================================== */}
          {t.about.nameStory && (
            <section className="rounded-[28px] sm:rounded-[36px] bg-[#FAF7F2] dark:bg-[#0C1B1C]/80 border border-black/8 dark:border-white/10 p-7 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
              <FadeIn delay={0.1} y={20}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-5 sm:w-6 h-[2px] bg-[#D2392A] inline-block shrink-0" />
                      <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                        {t.about.nameStory.kicker}
                      </span>
                    </div>

                    <h2
                      className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-4 text-balance"
                      style={{
                        fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                        fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                      }}
                    >
                      {t.about.nameStory.title}
                    </h2>

                    <p className="text-base sm:text-lg font-semibold text-[#D2392A] mb-4 leading-relaxed">
                      {t.about.nameStory.lead}
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 mb-3.5">
                      {t.about.nameStory.p1}
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75">
                      {t.about.nameStory.p2}
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="rounded-[24px] bg-[#07191a] text-white p-7 sm:p-8 border border-white/10 shadow-lg relative overflow-hidden">
                      <div className="w-10 h-10 rounded-full bg-[#D2392A]/15 text-[#D2392A] flex items-center justify-center mb-4">
                        <Quote size={20} className="rotate-180" />
                      </div>
                      <blockquote className="text-base sm:text-lg font-serif italic text-white/90 leading-relaxed mb-6">
                        {t.about.nameStory.quote}
                      </blockquote>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono uppercase tracking-wider">
                        <span>AS MAMA SAID</span>
                        <span className="text-[#D2392A] font-bold">EST. 2004</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </section>
          )}

          {/* ============================================================== */}
          {/* SECTION 2: WHAT WE DO (4 Capabilities)                         */}
          {/* ============================================================== */}
          <section>
            <FadeIn delay={0.1} y={20}>
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                <div className="flex items-center justify-center gap-2.5 mb-3 sm:mb-4">
                  <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                    {t.about.whatWeDoKicker}
                  </span>
                  <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                </div>
                <h2
                  className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight text-balance"
                  style={{
                    fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                    fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                  }}
                >
                  {t.about.whatWeDoTitle}
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.about.services?.map((svc, idx) => (
                  <div
                    key={svc.id || idx}
                    className="flex flex-col p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/10"
                  >
                    <span className="text-xs font-mono font-bold text-[#D2392A] mb-1.5">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-[#15100C] dark:text-[#F2E6DC] mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                      {svc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* ============================================================== */}
          {/* SECTION 3: KEY METRICS / STATS (Dark Card)                     */}
          {/* ============================================================== */}
          <section>
            <FadeIn delay={0.15} y={30}>
              <div className="rounded-[24px] sm:rounded-[32px] bg-[#07191a] text-white p-7 sm:p-10 lg:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 rtl:lg:divide-x-reverse">
                  {t.about.stats?.map((stat, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col items-center text-center ${
                        idx === 0
                          ? "lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8"
                          : idx === 3
                          ? "lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8"
                          : "lg:px-8"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-center">
                        {getStatIcon(stat.icon)}
                      </div>
                      <span
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D2392A] tracking-tight my-1.5"
                        style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                      >
                        <AnimatedCounter value={stat.val} delay={idx * 0.15} />
                      </span>
                      <span className="text-xs sm:text-sm text-white/70 font-medium">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </section>

          {/* ============================================================== */}
          {/* NEW SECTION: CORE OPERATING DNA / PILLARS                      */}
          {/* ============================================================== */}
          {t.about.valuesList && (
            <section>
              <FadeIn delay={0.1} y={20}>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="w-5 sm:w-6 h-[2px] bg-[#D2392A] inline-block shrink-0" />
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                      {t.about.valuesKicker}
                    </span>
                    <span className="w-5 sm:w-6 h-[2px] bg-[#D2392A] inline-block shrink-0" />
                  </div>
                  <h2
                    className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight text-balance"
                    style={{
                      fontSize: "clamp(2rem, 3.6vw, 3rem)",
                      fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                    }}
                  >
                    {t.about.valuesTitle}
                  </h2>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} y={25}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.about.valuesList.map((val, idx) => (
                    <div
                      key={idx}
                      className="p-7 sm:p-8 rounded-[26px] bg-white dark:bg-[#0C1B1C]/90 border border-black/8 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#D2392A]/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-sm font-bold text-[#D2392A] px-2.5 py-0.5 rounded-full bg-[#D2392A]/10">
                            {val.num}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#D2392A] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="font-black text-xl sm:text-2xl text-[#15100C] dark:text-[#F2E6DC] mb-3 tracking-tight">
                          {val.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </section>
          )}

          {/* ============================================================== */}
          {/* NEW SECTION: REGIONAL PRESENCE (Cairo & Dubai)                 */}
          {/* ============================================================== */}
          {t.about.presenceTitle && (
            <section className="rounded-[28px] sm:rounded-[36px] bg-[#07191a] text-white p-7 sm:p-10 lg:p-14 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <FadeIn delay={0.1} y={20}>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-5 sm:w-6 h-[2px] bg-[#D2392A] inline-block shrink-0" />
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                      {t.about.presenceKicker}
                    </span>
                    <span className="w-5 sm:w-6 h-[2px] bg-[#D2392A] inline-block shrink-0" />
                  </div>
                  <h2
                    className="font-black tracking-tight text-white leading-tight text-balance"
                    style={{
                      fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                      fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                    }}
                  >
                    {t.about.presenceTitle}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Cairo Hub Card */}
                  <div className="p-7 sm:p-8 rounded-[24px] bg-white/[0.04] border border-white/10 flex flex-col justify-between hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="text-2xl">🇪🇬</span>
                        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D2392A]">
                          HQ &amp; PRODUCTIONS
                        </span>
                      </div>
                      <h3 className="font-black text-xl sm:text-2xl text-white mb-3">
                        {t.about.presenceCairoTitle}
                      </h3>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-white/75 font-normal">
                        {t.about.presenceCairoDesc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/50 font-mono">
                      CAIRO · STUDIO &amp; POST-PRODUCTION HOUSE
                    </div>
                  </div>

                  {/* Dubai Gateway Card */}
                  <div className="p-7 sm:p-8 rounded-[24px] bg-white/[0.04] border border-white/10 flex flex-col justify-between hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="text-2xl">🇦🇪</span>
                        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D2392A]">
                          REGIONAL GROWTH
                        </span>
                      </div>
                      <h3 className="font-black text-xl sm:text-2xl text-white mb-3">
                        {t.about.presenceDubaiTitle}
                      </h3>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-white/75 font-normal">
                        {t.about.presenceDubaiDesc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/50 font-mono">
                      DUBAI · CLIENT CONSULTING &amp; ENTERPRISE DESK
                    </div>
                  </div>
                </div>
              </FadeIn>
            </section>
          )}

          {/* ============================================================== */}
          {/* SECTION 4: OUR APPROACH & PROCESS                              */}
          {/* ============================================================== */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <FadeIn delay={0.1} y={20}>
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                  <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                    {t.about.approachKicker}
                  </span>
                </div>

                <h2
                  className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-4"
                  style={{
                    fontSize: "clamp(2rem, 3.6vw, 3rem)",
                    fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                  }}
                >
                  {t.about.approachTitle}
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-normal max-w-md mb-6 sm:mb-8">
                  {t.about.approachDesc}
                </p>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D2392A] text-white font-bold text-sm tracking-wide shadow-md hover:bg-[#b82f22] active:scale-95 transition-all duration-200"
                  >
                    <span>{t.about.approachCta}</span>
                    <ArrowRight size={15} className="rtl:rotate-180" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Process Steps */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2} y={25}>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
                  {/* Connecting dashed line on desktop */}
                  <div className="hidden lg:block absolute top-5 left-8 right-8 h-px border-t border-dashed border-black/20 dark:border-white/20 -z-0" />

                  {t.about.steps?.map((step, idx) => (
                    <div key={step.num || idx} className="relative z-10 flex flex-col">
                      {/* Step Number Circle */}
                      <div className="w-10 h-10 rounded-full bg-[#0c1b1c] text-white font-bold text-xs sm:text-sm flex items-center justify-center mb-4 shadow-sm border border-white/10 shrink-0">
                        {step.num}
                      </div>
                      <h4 className="font-bold text-base sm:text-lg text-[#15100C] dark:text-[#F2E6DC] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ============================================================== */}
          {/* SECTION 5: TRUSTED BY (Client Logos)                           */}
          {/* ============================================================== */}
          <section className="flex flex-col">
            <FadeIn delay={0.1} y={20}>
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
                <div className="flex items-center justify-center gap-2.5 mb-2">
                  <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                    {t.about.trustedKicker}
                  </span>
                  <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                </div>
                <h3
                  className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight text-balance"
                  style={{
                    fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                    fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                  }}
                >
                  {t.about.trustedTitle}
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <div className="w-full py-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
                {realClientLogos.map((client, idx) => (
                  <div
                    key={idx}
                    title={client.name}
                    className="group relative h-14 sm:h-16 rounded-xl bg-white border border-black/[0.08] dark:border-white/10 shadow-[0_2px_8px_rgba(21,16,12,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_20px_rgba(210,57,42,0.12)] hover:border-[#D2392A]/50 transition-all duration-300 flex items-center justify-center p-2.5 select-none cursor-pointer overflow-hidden hover:-translate-y-0.5"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

        </div>
      </div>

      {/* Shared CTA Band */}
      <SharedCta
        title={t.about.ctaTitle}
        subtitle={t.about.ctaSub}
        buttonText={t.about.ctaBtn}
      />
    </main>

      <Footer />
    </div>
  );
}
