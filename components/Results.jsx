"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

// ─── Reel URLs ────────────────────────────────────────────────────────────────
const REELS = [
  {
    url: "https://www.instagram.com/reel/DctKRD0sJaT/",
    label: "Reel 01",
    image: "/assets/images/service-3-motion.png",
  },
  {
    url: "https://www.instagram.com/reel/DcRXXRosQdE/",
    label: "Reel 02",
    image: "/assets/images/service-1-3d.png",
  },
  {
    url: "https://www.instagram.com/reel/DcJ3MLYqgJq/",
    label: "Reel 03",
    image: "/assets/images/service-2-render.png",
  },
  {
    url: "https://www.instagram.com/reel/Davqu8NxqJk/",
    label: "Reel 04",
    image: "/assets/images/service-4-branding.png",
  },
];

function toEmbedUrl(url) {
  return url.replace(/\/$/, "") + "/embed/";
}

// ─── Shared navigation arrows ─────────────────────────────────────────────────
function NavArrow({ dir, onClick, id }) {
  return (
    <button className="reel-arrow" id={id} aria-label={`${dir} reel`} onClick={onClick}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === "prev"
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

export default function Results() {
  const { t, isRTL } = useLanguage();
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const total = REELS.length;
  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;
  const prevReel = REELS[prevIndex];
  const nextReel = REELS[nextIndex];

  const go = (dir) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => { setIndex((p) => (p + dir + total) % total); setTransitioning(false); }, 260);
  };

  const goTo = (i) => {
    if (i === index || transitioning) return;
    setTransitioning(true);
    setTimeout(() => { setIndex(i); setTransitioning(false); }, 260);
  };

  const current = REELS[index];
  const embedUrl = toEmbedUrl(current.url);

  const [showDetails, setShowDetails] = useState(false);
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);

  // ─── Shared iframe (re-mounts on index change to load new reel) ───────────
  const ReelFrame = ({ className }) => (
    <iframe
      key={index}
      src={embedUrl}
      title={current.label}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      scrolling="no"
      frameBorder="0"
      className={className}
      style={{ background: "#000" }}
    />
  );

  // ─── Rich Content Panel (used on desktop and below mobile reel) ───────────
  const ContentSide = () => (
    <div className="results-side">
      {/* Eyebrow & Live Reel indicator */}
      <div className="results-side-header">
        <div className="results-eyebrow">
          <span className="results-eyebrow-dot" />
          <span>{t.results.eyebrow}</span>
        </div>
        {t.results.reelsList?.[index] && (
          <div className="active-reel-badge">
            <span className="pulse-indicator" />
            <span className="active-reel-name">
              {t.results.reelsList[index].category}: {t.results.reelsList[index].title}
            </span>
          </div>
        )}
      </div>

      <div className="kicker">{t.results.kicker}</div>

      <p className="results-lead">{t.results.sideDesc}</p>

      {/* Reel context note */}
      {t.results.reelsList?.[index]?.highlight && (
        <div className="reel-highlight-box">
          <span className="reel-highlight-tag">{isRTL ? "ملاحظة إنتاجية" : "Production Note"}</span>
          <p className="reel-highlight-text">{t.results.reelsList[index].highlight}</p>
        </div>
      )}

      {/* Stats Row */}
      {t.results.stats && (
        <div className="results-stats-grid">
          {t.results.stats.map((stat, sIdx) => (
            <div key={sIdx} className="results-stat-card">
              <span className="results-stat-num">
                <AnimatedCounter value={stat.num} delay={sIdx * 0.15} />
              </span>
              <span className="results-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="results-actions">
        <a
          href="https://www.instagram.com/as.mama.said"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-badge"
          id="igProfileLink"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span>@asmamasaid</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>

        <a
          href="#contact"
          className="results-cta-contact"
          id="reelsContactBtn"
        >
          <span>{t.results.ctaContact}</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isRTL ? "rotate-180" : ""}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section id="results" className="reels-section">

      {/* ══════════════════════════════════════════════════════════════
          MOBILE VIEW  < 768px (Condensed visual reference layout)
          - Single-column flow with consistent px-6 padding
          - Dark highlight card with visual media & 20+ projects stat
          - Reel switcher controls (Reel 01, 02, etc.)
          - Expandable production details without trapping scroll
      ══════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden px-6 py-10 max-w-lg mx-auto">
        <div className="rounded-2xl sm:rounded-[24px] bg-[#0c1b1c] text-[#F2E6DC] border border-white/10 p-4 sm:p-5 shadow-lg overflow-hidden">
          {/* Media frame */}
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-4 group">
            {isPlayingMobile ? (
              <ReelFrame className="w-full h-full border-none" />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center bg-black/40">
                <img
                  src="/assets/images/service-3-motion.png"
                  alt="Reel highlight visual"
                  className="w-full h-full object-cover opacity-60"
                />
                <button
                  type="button"
                  onClick={() => setIsPlayingMobile(true)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#D2392A] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                  aria-label="Play reel"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[11px] font-bold tracking-wider text-white border border-white/15">
                  {current.label}: {t.results.reelsList?.[index]?.category || "Featured Reel"}
                </div>
              </div>
            )}
          </div>

          {/* Red Stat & Short Highlight Text */}
          <div className="mb-4">
            <span
              className="block font-black text-3xl sm:text-4xl text-[#D2392A] leading-tight"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              20+
            </span>
            <p className="text-xs sm:text-sm text-[#F2E6DC]/80 font-normal leading-relaxed mt-0.5">
              {isRTL
                ? "مشاريع وعلامات تجارية وقصص صنعناها بإتقان لتترك أثراً حقيقياً."
                : "Projects, brands, and stories we've brought to life on screen."}
            </p>
          </div>

          {/* Reel Switcher Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/10 mb-3.5 scrollbar-none">
            {REELS.map((r, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  goTo(i);
                  setIsPlayingMobile(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  i === index
                    ? "bg-[#D2392A] text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/70"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-2">
            <a
              href="https://www.instagram.com/as.mama.said"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-[#D2392A] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>@asmamasaid</span>
            </a>

            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs text-[#D2392A] hover:underline font-medium"
            >
              {showDetails ? (isRTL ? "إخفاء التفاصيل" : "Hide details") : (isRTL ? "تفاصيل الإنتاج +" : "Production details +")}
            </button>
          </div>

          {/* Expandable Secondary Details */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/70 space-y-3 animate-fadeIn">
              <p className="leading-relaxed">{t.results.sideDesc}</p>
              {t.results.stats && (
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  {t.results.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-sm font-bold text-[#D2392A]">
                        <AnimatedCounter value={stat.num} delay={sIdx * 0.1} />
                      </div>
                      <div className="text-[10px] text-white/60 truncate">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DESKTOP VIEW  ≥ 768px   (phone-mockup design)
      ══════════════════════════════════════════════════════════════ */}
      <div className="reel-desktop-view">
        <div className="wrap">
          <div className="head flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-balance">{t.results.headTitle}</h2>
            <p className="text-balance">{t.results.headDesc}</p>
          </div>

          <div className="reel-layout">
            {/* Phone mockup with left and right peek cards */}
            <div className="phone-mockup-wrap">
              <div className="phone-carousel-stage">
                {/* Left Peek (Previous Reel Image) */}
                <div
                  className="phone-peek-card phone-peek--left"
                  onClick={() => go(-1)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Previous reel: ${prevReel.label}`}
                  title={prevReel.label}
                >
                  <img
                    src={prevReel.image}
                    alt={prevReel.label}
                    className="phone-peek-img"
                  />
                  <div className="phone-peek-overlay">
                    <span className="phone-peek-tag">{prevReel.label}</span>
                    <div className="phone-peek-play">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Center Phone Shell */}
                <div className="phone-shell">
                  <div className="phone-notch"><div className="phone-notch-pill" /></div>

                  <div className={`phone-screen ${transitioning ? "phone-fade-out" : "phone-fade-in"}`}>
                    <div className="reel-clip-wrap">
                      <ReelFrame className="reel-iframe" />
                    </div>
                  </div>

                  <div className="phone-home-bar" />
                </div>

                {/* Right Peek (Next Reel Image) */}
                <div
                  className="phone-peek-card phone-peek--right"
                  onClick={() => go(1)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Next reel: ${nextReel.label}`}
                  title={nextReel.label}
                >
                  <img
                    src={nextReel.image}
                    alt={nextReel.label}
                    className="phone-peek-img"
                  />
                  <div className="phone-peek-overlay">
                    <span className="phone-peek-tag">{nextReel.label}</span>
                    <div className="phone-peek-play">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nav */}
              <div className="reel-nav">
                <NavArrow dir="prev" onClick={() => go(-1)} id="reelDesktopPrev" />
                <div className="reel-dots">
                  {REELS.map((_, i) => (
                    <button key={i} className={`reel-dot ${i === index ? "reel-dot--active" : ""}`} onClick={() => goTo(i)} aria-label={`Reel ${i + 1}`} />
                  ))}
                </div>
                <NavArrow dir="next" onClick={() => go(1)} id="reelDesktopNext" />
              </div>
              <p className="reel-count">{pad(index + 1)} / {pad(total)}</p>
            </div>

            {/* Side copy */}
            <ContentSide />
          </div>
        </div>
      </div>

    </section>
  );
}
