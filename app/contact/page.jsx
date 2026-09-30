"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import SimpleFooter from "@/components/SimpleFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { isRTL } = useLanguage();

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC]"
      style={{ overflowX: "clip" }}
    >
      <SmoothScroll />
      <Navbar />
      <main className="flex-1 flex flex-col justify-center pt-16 sm:pt-20 lg:pt-24">
        <Contact isPage={true} />
      </main>
      <SimpleFooter />
    </div>
  );
}
