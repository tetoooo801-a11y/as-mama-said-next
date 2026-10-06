"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import HowWorkConnects from "@/components/HowWorkConnects";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesPipeline from "@/components/ServicesPipeline";
import ServicesCapabilities from "@/components/ServicesCapabilities";
import ServicesComparison from "@/components/ServicesComparison";
import Collaborations from "@/components/Collaborations";
import ServicesFaq from "@/components/ServicesFaq";
import SharedCta from "@/components/SharedCta";
import ServicesMobileView from "@/components/ServicesMobileView";
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
        {/* ============================================================== */}
        {/* DESKTOP VIEW (lg and above): Full-depth studio view           */}
        {/* ============================================================== */}
        <div className="hidden lg:block">
          {/* 1. Animated PageHero with Centered "SERVICES" & Living Wave */}
          <PageHero
            compact={true}
            title={isRTL ? "خدماتنا" : "SERVICES"}
            curveFill="var(--theme-bg, #FAF6F0)"
          />

          {/* 2. Eight Core Services Editorial Cards with Full Brief Details */}
          <ServicesSection />

          {/* 3. Connected System Flow: How The Work Connects */}
          <HowWorkConnects />

          {/* 4. Disciplines in Action Showcase Cards */}
          <ProjectsSection />

          {/* 5. Production Pipeline & Roadmap */}
          <ServicesPipeline />

          {/* 6. Technical Capabilities Matrix */}
          <ServicesCapabilities />

          {/* 7. The Studio Advantage */}
          <ServicesComparison />

          {/* 8. Brand Collaborations (Sirad Alliance — Preserved) */}
          <Collaborations />

          {/* 9. Frequently Asked Questions Accordion */}
          <ServicesFaq />

          {/* 10. End CTA from Brief: Let's start with the right question */}
          <SharedCta
            title={isRTL ? "فلنبدأ بالسؤال الصحيح." : "Let's start with the right question."}
            subtitle={
              isRTL
                ? "أخبرنا بما تبنيه، تغيره، تطلقه، أو تسعى لحله."
                : "Tell us what you are building, changing, launching, or trying to solve."
            }
            buttonText={isRTL ? "ابدأ مشروعك" : "Start a project"}
            buttonHref="/contact"
          />
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (below lg): Condensed, comprehensive & Collab-focus */}
        {/* ============================================================== */}
        <div className="block lg:hidden">
          <ServicesMobileView />
        </div>
      </main>
      <Footer />
    </div>
  );
}
