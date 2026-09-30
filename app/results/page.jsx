"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import LandingAccordionItem from "@/components/ui/interactive-image-accordion";
import SharedCta from "@/components/SharedCta";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function ResultsPage() {
  const { t, isRTL } = useLanguage();

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
          title={isRTL ? "المعرض" : "GALLERY"}
          curveFill="var(--theme-bg, #FAF6F0)"
        />

        {/* Interactive Image Accordion - Welcome to our gallery */}
        <LandingAccordionItem />

        <section className="proj-grid-section flex-1">
          <div className="wrap proj-grid">
            {t.results.projects.map((proj, idx) => (
              <article className="proj-card" key={idx}>
                <span className="proj-tag">{proj.tag}</span>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <SharedCta />
      </main>
      <Footer />
    </div>
  );
}
