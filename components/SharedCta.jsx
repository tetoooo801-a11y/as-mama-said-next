"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/ui/FadeIn";

export default function SharedCta({
  title,
  subtitle,
  buttonText,
  buttonHref = "/contact",
}) {
  const { t, isRTL } = useLanguage();

  const finalTitle =
    title ||
    (isRTL
      ? "عندك فكرة تستحق تتقال وتتعمل صح؟"
      : "Got something worth saying properly?");

  const finalButtonText = buttonText || t.nav.cta;

  return (
    <section className="w-full px-5 sm:px-8 md:px-12 py-10 sm:py-14">
      <FadeIn delay={0.1} y={20}>
        <div className="w-full max-w-5xl mx-auto rounded-[28px] sm:rounded-[36px] md:rounded-[40px] bg-[#071818] border border-white/10 text-center py-12 sm:py-14 md:py-16 px-6 sm:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)] relative overflow-hidden flex flex-col items-center justify-center">
          <h2
            className="text-[#F2E6DC] font-black leading-[1.12] sm:leading-[1.1] tracking-tight max-w-[22ch] mx-auto text-center"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
            }}
          >
            {finalTitle}
          </h2>

          {subtitle && (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[17px] text-[#F2E6DC]/75 max-w-xl mx-auto font-normal leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="mt-6 sm:mt-7">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#D2392A] hover:bg-[#b82f22] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md active:scale-95 transition-all duration-200 select-none cursor-pointer"
            >
              {finalButtonText}
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
