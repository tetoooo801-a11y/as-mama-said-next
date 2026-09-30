"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SharedCta from "@/components/SharedCta";
import SimpleFooter from "@/components/SimpleFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <PageHero
          eyebrow={isRTL ? "عن الاستوديو" : "About the studio"}
          title={t.about.title}
          subtitle={
            isRTL
              ? "كما قالت ماما — استوديو إبداعي متكامل يعمل بين القاهرة ودبي: هوية بصرية، محتوى، فيديو، وحملات ممولة."
              : "As Mama Said is a creative studio working out of Cairo and Dubai — brand identity, content, film, and paid media for businesses that would rather be understood than shouted about."
          }
          curveFill="#F2E6DC"
        />

        <section id="about" style={{ background: "var(--cream)", padding: "70px 0 100px" }}>
          <div className="wrap">
            <div className="about-grid">
              <div className="about-copy">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
              <div className="team">
                <div className="team-card">
                  <div className="role">{t.about.cairoRole}</div>
                  <div className="name">{t.about.cairoStudio}</div>
                </div>
                <div className="team-card">
                  <div className="role">{t.about.dubaiRole}</div>
                  <div className="name">{t.about.dubaiStudio}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SharedCta />
      </main>
      <SimpleFooter />
    </>
  );
}
