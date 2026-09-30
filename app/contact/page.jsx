"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { isRTL } = useLanguage();

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors"
      style={{ overflowX: "clip" }}
    >
      <SmoothScroll />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <PageHero
          compact={true}
          title={isRTL ? "تواصل معنا" : "CONTACT"}
          curveFill="var(--theme-bg, #FAF6F0)"
        />
        <Contact isPage={true} />
      </main>
      <Footer />
    </div>
  );
}
