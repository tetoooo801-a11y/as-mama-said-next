"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
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
    <div className="relative w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors" style={{ overflowX: "clip" }}>
      <SmoothScroll />
      <Navbar />
      <main>
        <PageHero
          compact={true}
          title={isRTL ? "خدماتنا" : "SERVICES"}
          curveFill="var(--theme-bg, #FAF6F0)"
        />
        <ServicesSection />
        <ProjectsSection />
        <Collaborations />
        <SharedCta />
      </main>
      <Footer />
    </div>
  );
}
