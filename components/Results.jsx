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
  const { t } = useLanguage();
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

  return (
    <section id="results" className="reels-section">

      {/* ══════════════════════════════════════════════════════════════
          MOBILE VIEW  ≤ 767px
          Full-screen reel — no phone mockup, no Instagram UI visible.
          The iframe is wider than the viewport (128vw centred) so the
          9:16 video fills 100dvh.  overflow:hidden on the wrapper
          clips the Instagram header (top) and footer (bottom).
      ══════════════════════════════════════════════════════════════ */}
      <div className="reel-mobile-view" aria-label="Reel mobile view">

        {/* Full-screen video container */}
        <div className={`reel-fs-container ${transitioning ? "reel-fs-out" : "reel-fs-in"}`}>
          {/*
            The iframe is 128vw wide, centred with left:-14vw.
            At 128vw width: video height = 128vw × (16/9) ≈ screen height.
            top:-9%  hides Instagram header.
            height:150%  pushes Instagram footer below the visible area.
          */}
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

      {/* ══════════════════════════════════════════════════════════════
          DESKTOP VIEW  ≥ 768px   (unchanged phone-mockup design)
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
            <div className="results-side">
              <div className="kicker">{t.results.kicker}</div>
              <p>{t.results.sideDesc}</p>
              <a href="https://www.instagram.com/asmamasaid/" target="_blank" rel="noopener noreferrer" className="ig-badge" id="igProfileLink">
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
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
