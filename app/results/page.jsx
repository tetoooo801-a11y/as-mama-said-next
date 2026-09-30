"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SharedCta from "@/components/SharedCta";
import SimpleFooter from "@/components/SimpleFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function ResultsPage() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <PageHero
          eyebrow={isRTL ? "أعمالنا" : "Our work"}
          title={t.results.headTitle}
          subtitle={t.results.headDesc}
          curveFill="#F2E6DC"
        />

        <section className="proj-grid-section">
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
      <SimpleFooter />
    </>
  );
}
