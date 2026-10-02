"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SharedCta from "@/components/SharedCta";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users,
  Rocket,
  Globe,
  Heart,
  ArrowRight,
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

  const brands = [
    { name: "Bench>", font: "font-black tracking-tight text-xl" },
    { name: "the glocal", font: "font-bold tracking-tighter text-lg lowercase" },
    { name: "DAS", font: "font-black tracking-widest text-base px-2 py-0.5 border border-current rounded-sm" },
    { name: "S A L T", font: "font-light tracking-[0.35em] text-sm uppercase" },
    { name: "BRGR Burger", font: "font-black tracking-tight text-lg" },
    { name: "Floward", font: "font-semibold tracking-wide text-base" },
    { name: "Peak", font: "font-black tracking-wider text-base uppercase" },
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
                <p className="text-sm sm:text-base md:text-[1.02rem] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal max-w-xl mb-4">
                  {t.about.p1}
                </p>
                <p className="text-sm sm:text-base md:text-[1.02rem] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal max-w-xl mb-7">
                  {t.about.p2}
                </p>

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
          {/* SECTION 2: WHAT WE DO (4 Capabilities)                         */}
          {/* ============================================================== */}
          <section>
            <FadeIn delay={0.1} y={20}>
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                  {t.about.whatWeDoKicker}
                </span>
              </div>
              <h2
                className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-8 sm:mb-12"
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {t.about.whatWeDoTitle}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} y={25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-black/[0.08] dark:lg:divide-white/10 rtl:lg:divide-x-reverse">
                {t.about.services?.map((svc, idx) => (
                  <div
                    key={svc.id || idx}
                    className={`flex flex-col ${
                      idx === 0
                        ? "lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8"
                        : idx === 3
                        ? "lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8"
                        : "lg:px-8"
                    }`}
                  >
                    <h3 className="font-bold text-lg sm:text-xl text-[#15100C] dark:text-[#F2E6DC] mb-2.5">
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70">
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
                        {stat.val}
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
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#D2392A]">
                  {t.about.trustedKicker}
                </span>
              </div>
              <h3
                className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-tight mb-8"
                style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {t.about.trustedTitle}
              </h3>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <div className="w-full py-4 flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-75 dark:opacity-85 grayscale hover:grayscale-0 transition-all duration-300">
                {brands.map((b, idx) => (
                  <div
                    key={idx}
                    className={`text-[#15100C] dark:text-[#F2E6DC] select-none hover:text-[#D2392A] dark:hover:text-[#D2392A] transition-colors ${b.font}`}
                  >
                    {b.name}
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

        </div>
      </div>

      {/* Shared CTA Band (identical to Services page) */}
      <SharedCta />
    </main>

      <Footer />
    </div>
  );
}
