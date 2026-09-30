"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

// ─── Reel URLs ────────────────────────────────────────────────────────────────
const REELS = [
  { url: "https://www.instagram.com/reel/DctKRD0sJaT/", label: "Reel 01" },
  { url: "https://www.instagram.com/reel/DcRXXRosQdE/", label: "Reel 02" },
  { url: "https://www.instagram.com/reel/DcJ3MLYqgJq/", label: "Reel 03" },
  { url: "https://www.instagram.com/reel/Davqu8NxqJk/", label: "Reel 04" },
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
      {t.results.paragraph2 && (
        <p className="results-subtext">{t.results.paragraph2}</p>
      )}

      {/* Reel context note */}
      {t.results.reelsList?.[index]?.highlight && (
        <div className="reel-highlight-box">
          <span className="reel-highlight-tag">{isRTL ? "ملاحظة إنتاجية" : "Production Note"}</span>
          <p className="reel-highlight-text">{t.results.reelsList[index].highlight}</p>
        </div>
      )}

      {/* Production features */}
      {t.results.features && (
        <div className="results-features">
          {t.results.features.map((feat, fIdx) => (
            <div key={fIdx} className="results-feature-item">
              <div className="results-feature-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="results-feature-text">
                <strong>{feat.title}</strong>
                <span>{feat.desc}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats Row */}
      {t.results.stats && (
        <div className="results-stats-grid">
          {t.results.stats.map((stat, sIdx) => (
            <div key={sIdx} className="results-stat-card">
              <span className="results-stat-num">{stat.num}</span>
              <span className="results-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {t.results.tags && (
        <div className="results-tags-wrap">
          {t.results.tags.map((tag, tIdx) => (
            <span key={tIdx} className="results-tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="results-actions">
        <a
          href="https://www.instagram.com/asmamasaid/"
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
          MOBILE VIEW  ≤ 767px
          Full-screen video — no phone mockup, no Instagram UI visible.
          The iframe is wider than the viewport (128vw centred) so the
          9:16 video fills 100dvh.  overflow:hidden on the wrapper
          clips the Instagram header (top) and footer (bottom).
      ══════════════════════════════════════════════════════════════ */}
      <div className="reel-mobile-view" aria-label="Reel mobile view">

        {/* Full-screen video container */}
        <div className={`reel-fs-container ${transitioning ? "reel-fs-out" : "reel-fs-in"}`}>
          <ReelFrame className="reel-fs-iframe" />
        </div>

        {/* Overlay controls (tap-safe zones on left/right) */}
        <div className="reel-fs-controls">
          <button className="reel-fs-zone reel-fs-zone--left"  onClick={() => go(-1)} aria-label="Previous reel" id="reelMobilePrev" />
          <button className="reel-fs-zone reel-fs-zone--right" onClick={() => go(1)}  aria-label="Next reel"     id="reelMobileNext" />
        </div>

        {/* Dots */}
        <div className="reel-fs-dots" role="tablist">
          {REELS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              className={`reel-fs-dot ${i === index ? "reel-fs-dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Reel ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="reel-fs-counter">{pad(index + 1)} / {pad(total)}</span>

        {/* Instagram link */}
        <a
          href="https://www.instagram.com/asmamasaid/"
          target="_blank"
          rel="noopener noreferrer"
          className="reel-fs-ig"
          id="igLinkMobile"
          aria-label="View on Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>

      {/* Mobile info panel below the full-screen reel */}
      <div className="reel-mobile-info">
        <div className="wrap">
          <ContentSide />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DESKTOP VIEW  ≥ 768px   (phone-mockup design)
      ══════════════════════════════════════════════════════════════ */}
      <div className="reel-desktop-view">
        <div className="wrap">
          <div className="head">
            <h2>{t.results.headTitle}</h2>
            <p>{t.results.headDesc}</p>
          </div>

          <div className="reel-layout">
            {/* Phone mockup */}
            <div className="phone-mockup-wrap">
              <div className="phone-shell">
                <div className="phone-notch"><div className="phone-notch-pill" /></div>

                <div className={`phone-screen ${transitioning ? "phone-fade-out" : "phone-fade-in"}`}>
                  <div className="reel-clip-wrap">
                    <ReelFrame className="reel-iframe" />
                  </div>
                </div>

                <div className="phone-home-bar" />
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
