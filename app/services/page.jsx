"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesPipeline from "@/components/ServicesPipeline";
import ServicesCapabilities from "@/components/ServicesCapabilities";
import ServicesComparison from "@/components/ServicesComparison";
import Collaborations from "@/components/Collaborations";
import ServicesFaq from "@/components/ServicesFaq";
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
        {/* 1. Compact Animated PageHero with Centered "SERVICES" & Living Wave */}
        <PageHero
          compact={true}
          title={isRTL ? "خدماتنا" : "SERVICES"}
          curveFill="var(--theme-bg, #FAF6F0)"
        />

        {/* 2. Five Core Creative Disciplines Editorial Cards */}
        <ServicesSection />

        {/* 3. Five Stacking Project Showcase Cards in Action */}
        <ProjectsSection />

        {/* 4. Four-Stage Production Pipeline & Roadmap */}
        <ServicesPipeline />

        {/* 5. Deep Technical Capabilities & Software Matrix */}
        <ServicesCapabilities />

        {/* 6. The Studio Advantage: Why As Mama Said */}
        <ServicesComparison />

        {/* 7. Brand Collaborations & Regional Metrics */}
        <Collaborations />

        {/* 8. Frequently Asked Questions Accordion */}
        <ServicesFaq />

        {/* 9. Final High-Impact Project CTA */}
        <SharedCta />
      </main>
      <Footer />
    </div>
  );
}
