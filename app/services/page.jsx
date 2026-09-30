"use client";

import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Collaborations from "@/components/Collaborations";
import SharedCta from "@/components/SharedCta";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { isRTL } = useLanguage();

  return (
    <div className="relative w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC]" style={{ overflowX: "clip" }}>
      <SmoothScroll />
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <ServicesSection />
        <ProjectsSection />
        <Collaborations />
        <SharedCta />
      </main>
      <Footer />
    </div>
  );
}
