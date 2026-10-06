"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

// ─── Complete Curated Videos & Reels (13 items) ──────────────────────────────
const REELS = [
  // ─── Vimeo Master Films (01 - 02) ──────────────────────────────────────────
  {
    id: "film-01",
    type: "vimeo",
    url: "https://player.vimeo.com/video/1214640310?h=9856ee4711",
    externalUrl: "https://vimeo.com/1214640310/9856ee4711",
    label: "Film 01",
    titleAr: "أغنية As Mama Said الرسمية",
    titleEn: "As Mama Said Official Anthem",
    categoryAr: "إنتاج سينمائي وغنائي",
    categoryEn: "Cinematic & Music Film",
    highlightAr: "عمل سينمائي غنائي متكامل بدقة 4K من إنتاج استوديو As Mama Said.",
    highlightEn: "Master-grade 4K musical film produced entirely in-house.",
    image: "https://i.vimeocdn.com/video/2185624543-02f586506746f89edbf1d12229872990c3f6ee13adffd8924a69cf90779e391d-d_640x360",
  },
  {
    id: "film-02",
    type: "vimeo",
    url: "https://player.vimeo.com/video/1120415956?h=610e4eb925",
    externalUrl: "https://vimeo.com/1120415956/610e4eb925",
    label: "Film 02",
    titleAr: "إعلان تجاري — Rubys 02",
    titleEn: "Commercial Film — Rubys 02",
    categoryAr: "إعلان تجاري وسينمائي",
    categoryEn: "Commercial Film",
    highlightAr: "إعلان تجاري لقطاع الأغذية بتصوير إعلاني وإضاءة سينمائية.",
    highlightEn: "Commercial food & beverage production with cinematic craft.",
    image: "https://i.vimeocdn.com/video/2061166331-2eec3df4973f6d962b5d67d5b15c6a5e84d4eaea6c7c4e0404d38403610dbfde-d_640x360",
  },
  // ─── Instagram Reels (01 - 11) ─────────────────────────────────────────────
  {
    id: "reel-01",
    type: "instagram",
    url: "https://www.instagram.com/reel/Dd6a7GtI3Sk/",
    externalUrl: "https://www.instagram.com/reel/Dd6a7GtI3Sk/",
    label: "Reel 01",
    titleAr: "إنتاج إعلاني ومحتوى مرئي",
    titleEn: "Commercial Campaign & Visual Hook",
    categoryAr: "إنتاج إعلاني",
    categoryEn: "Commercial Reel",
    highlightAr: "سرد قصصي سريع مع تصميم صوتي إيقاعي متزامن لخطف الانتباه.",
    highlightEn: "Fast-paced visual storytelling with bespoke rhythmic sound.",
    image: "/assets/videos/reels/1-poster.jpg",
  },
  {
    id: "reel-02",
    type: "instagram",
    url: "https://www.instagram.com/reel/DYKqlh0oWcS/",
    externalUrl: "https://www.instagram.com/reel/DYKqlh0oWcS/",
    label: "Reel 02",
    titleAr: "سرد قصصي وعلامات تجارية",
    titleEn: "Brand Storytelling & Dynamic Hook",
    categoryAr: "سرد قصصي",
    categoryEn: "Brand Storytelling",
    highlightAr: "كادرات بصرية تنقل الإحساس الحقيقي للعلامة وقيمتها التجارية.",
    highlightEn: "Dynamic narrative framing built for deep viewer retention.",
    image: "/assets/videos/reels/2-poster.jpg",
  },
  {
    id: "reel-03",
    type: "instagram",
    url: "https://www.instagram.com/reel/DdebkCXgnhd/",
    externalUrl: "https://www.instagram.com/reel/DdebkCXgnhd/",
    label: "Reel 03",
    titleAr: "إخراج فني وحملات إطلاق",
    titleEn: "Art Direction & Launch Campaign",
    categoryAr: "إخراج فني",
    categoryEn: "Art Direction",
    highlightAr: "إضاءة مدروسة وتفاصيل ماكرو دقيقة وانتقالات بصرية سلسة.",
    highlightEn: "Cinematic lighting, product details, and punchy transitions.",
    image: "/assets/videos/reels/3-poster.jpg",
  },
  {
    id: "reel-04",
    type: "instagram",
    url: "https://www.instagram.com/reel/Db08zi_AiK0/",
    externalUrl: "https://www.instagram.com/reel/Db08zi_AiK0/",
    label: "Reel 04",
    titleAr: "مؤثرات بصرية وموشن جرافيك",
    titleEn: "Visual Effects & Kinetic Motion",
    categoryAr: "موشن جرافيك",
    categoryEn: "Motion & CGI",
    highlightAr: "أنيميشن تيبوجرافي ومؤثرات بصرية قوية التأثير على السوشيال.",
    highlightEn: "Typographic animation and high-impact visual effects.",
    image: "/assets/videos/reels/4-poster.jpg",
  },
  {
    id: "reel-05",
    type: "instagram",
    url: "https://www.instagram.com/reel/DSsL_MOiMks/",
    externalUrl: "https://www.instagram.com/reel/DSsL_MOiMks/",
    label: "Reel 05",
    titleAr: "صناعة محتوى رقمي تفاعلي",
    titleEn: "Viral Social Content Production",
    categoryAr: "سوشيال ميديا",
    categoryEn: "Viral Content",
    highlightAr: "هندسة المحتوى ليحقق أعلى معدلات انتشار وتفاعل ومشاركة.",
    highlightEn: "High-retention social content engineered for viral reach.",
    image: "/assets/videos/reels/5-poster.jpg",
  },
  {
    id: "reel-06",
    type: "instagram",
    url: "https://www.instagram.com/reel/DRsWdvGCP5_/",
    externalUrl: "https://www.instagram.com/reel/DRsWdvGCP5_/",
    label: "Reel 06",
    titleAr: "إخراج سينمائي وتصوير إعلاني",
    titleEn: "Cinematic Direction & Camera Craft",
    categoryAr: "تصوير سينمائي",
    categoryEn: "Cinematography",
    highlightAr: "كاميرات سينمائية وتوجيه تمثيلي ينقل نبض القصة بحرفية.",
    highlightEn: "Cinematic grade framing that captures genuine human emotion.",
    image: "/assets/images/service-3-motion.png",
  },
  {
    id: "reel-07",
    type: "instagram",
    url: "https://www.instagram.com/reel/DbgXPBhtpLb/",
    externalUrl: "https://www.instagram.com/reel/DbgXPBhtpLb/",
    label: "Reel 07",
    titleAr: "إعلانات أداء وتفاعل تجاري",
    titleEn: "Performance Ads & High Retention",
    categoryAr: "إعلانات أداء",
    categoryEn: "Performance Ads",
    highlightAr: "إعلانات مهندسة لزيادة المبيعات وتحقيق أعلى عائد على الإنفاق.",
    highlightEn: "Conversion-optimized video ads built to maximize ROAS.",
    image: "/assets/images/service-1-3d.png",
  },
  {
    id: "reel-08",
    type: "instagram",
    url: "https://www.instagram.com/reel/DTdRhbECHc-/",
    externalUrl: "https://www.instagram.com/reel/DTdRhbECHc-/",
    label: "Reel 08",
    titleAr: "حملة ترويجية وبناء هوية",
    titleEn: "Visual Identity & Promo Campaign",
    categoryAr: "هوية بصرية",
    categoryEn: "Brand Identity",
    highlightAr: "بناء ثقة ووقار العلامة عبر تصاميم وكادرات استثنائية.",
    highlightEn: "Building instant brand stature through bold aesthetic cues.",
    image: "/assets/images/service-4-branding.png",
  },
  {
    id: "reel-09",
    type: "instagram",
    url: "https://www.instagram.com/reel/DTWC_7GCD-x/",
    externalUrl: "https://www.instagram.com/reel/DTWC_7GCD-x/",
    label: "Reel 09",
    titleAr: "محتوى إبداعي وتجارب تفاعلية",
    titleEn: "Creative Content & Audience Hook",
    categoryAr: "إبداع تسويقي",
    categoryEn: "Creative Hook",
    highlightAr: "ابتكار مفاهيم غير تقليدية تحرك مشاعر الجمهور وتلهمه.",
    highlightEn: "Unconventional conceptual hooks that inspire and connect.",
    image: "/assets/images/service-2-render.png",
  },
  {
    id: "reel-10",
    type: "instagram",
    url: "https://www.instagram.com/reel/DTS6liViGRZ/",
    externalUrl: "https://www.instagram.com/reel/DTS6liViGRZ/",
    label: "Reel 10",
    titleAr: "إعلانات استراتيجية وإنتاج رقمي",
    titleEn: "Strategic Advertising & Digital Film",
    categoryAr: "إنتاج رقمي",
    categoryEn: "Digital Film",
    highlightAr: "مزيج متكامل من الاستراتيجية التجارية والإنتاج الفاخر.",
    highlightEn: "Integration of business strategy and high-fidelity production.",
    image: "/assets/images/service-5-web.png",
  },
  {
    id: "reel-11",
    type: "instagram",
    url: "https://www.instagram.com/reel/DTKzZiMCPs3/",
    externalUrl: "https://www.instagram.com/reel/DTKzZiMCPs3/",
    label: "Reel 11",
    titleAr: "ريل استعراضي وخطف انتباه فوري",
    titleEn: "Showcase Reel & Instant Attention Hook",
    categoryAr: "خطف انتباه",
    categoryEn: "Attention Hook",
    highlightAr: "مؤثرات بصرية ومونتاج ديناميكي سريع يمنع تخطي الفيديو.",
    highlightEn: "Dynamic editing and visual hooks designed to stop the thumb.",
    image: "/assets/images/hero-mama-studio.webp",
  },
];

function getEmbedInfo(url, type) {
  if (!url) return { type: "empty", src: "" };

  // Vimeo
  if (type === "vimeo" || url.includes("vimeo.com")) {
    if (url.includes("player.vimeo.com/video/")) {
      const separator = url.includes("?") ? "&" : "?";
      return {
        type: "vimeo",
        src: `${url}${separator}autoplay=1&loop=1&muted=1&autopause=0&background=0`,
      };
    }
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?/);
    if (match) {
      const vimeoId = match[1];
      const hash = match[2] ? `?h=${match[2]}&` : "?";
      return {
        type: "vimeo",
        src: `https://player.vimeo.com/video/${vimeoId}${hash}autoplay=1&loop=1&muted=1&autopause=0&background=0`,
      };
    }
  }

  // Instagram Reel
  if (type === "instagram" || url.includes("instagram.com")) {
    const cleanUrl = url.replace(/\/$/, "");
    return {
      type: "instagram",
      src: `${cleanUrl}/embed/`,
    };
  }

  // Fallback
  return {
    type: "iframe",
    src: url,
  };
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
  const embed = getEmbedInfo(current.url, current.type);

  const [showDetails, setShowDetails] = useState(false);
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);

  // Multi-click detection
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef(null);

  const openExternal = () => {
    const destination = current.externalUrl || current.url;
    if (typeof window !== "undefined") {
      window.open(destination, "_blank", "noopener,noreferrer");
    }
  };

  const handleInteractiveClick = () => {
    clickCountRef.current += 1;
    if (clickCountRef.current >= 2) {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      clickCountRef.current = 0;
      openExternal();
    } else {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 550);
    }
  };

  // ─── Shared Player ────────────────────────────────────────────────────────
  const ReelFrame = ({ className }) => (
    <iframe
      key={`${current.id}-${index}`}
      src={embed.src}
      title={current.label}
      allowFullScreen
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
      scrolling="no"
      frameBorder="0"
      className={className}
      style={{ background: "#000" }}
    />
  );

  // ─── Rich Content Panel (Desktop and Mobile expandable) ────────────────────
  const ContentSide = () => (
    <div className="results-side">
      {/* Eyebrow & Live Reel indicator */}
      <div className="results-side-header">
        <div className="results-eyebrow">
          <span className="results-eyebrow-dot" />
          <span>{t.results.eyebrow}</span>
        </div>
        <div className="active-reel-badge">
          <span className="pulse-indicator" />
          <span className="active-reel-name">
            {isRTL ? current.categoryAr : current.categoryEn}: {isRTL ? current.titleAr : current.titleEn}
          </span>
        </div>
      </div>

      <div className="kicker">{t.results.kicker}</div>

      <p className="results-lead">{t.results.sideDesc}</p>

      {/* Reel context note */}
      <div className="reel-highlight-box">
        <span className="reel-highlight-tag">{isRTL ? "ملاحظة إنتاجية" : "Production Note"}</span>
        <p className="reel-highlight-text">
          {isRTL ? current.highlightAr : current.highlightEn}
        </p>
      </div>

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
          href={current.externalUrl || current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-badge"
          id="reelsExternalProfileLink"
        >
          {current.type === "vimeo" ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="shrink-0">
              <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.135L0 7.197c1.185-1.044 2.351-2.083 3.501-3.123 1.577-1.418 2.766-2.158 3.567-2.222 1.88-.156 3.037.979 3.475 3.407.472 2.607.8 4.246.983 4.917.55 2.484 1.15 3.727 1.802 3.727.495 0 1.233-.655 2.213-1.966.979-1.309 1.503-2.309 1.57-2.999.123-1.171-.341-1.758-1.393-1.758-.517 0-1.054.12-1.611.359 1.066-3.486 3.102-5.181 6.108-5.084 2.226.07 3.327 1.341 3.303 3.811z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          )}
          <span>{current.type === "vimeo" ? (isRTL ? "شاهد على فيميو ↗" : "Watch on Vimeo ↗") : "@asmamasaid ↗"}</span>
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
      ══════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden px-5 py-10 max-w-lg mx-auto">
        <div className="rounded-2xl sm:rounded-[24px] bg-[#0c1b1c] text-[#F2E6DC] border border-white/10 p-4 sm:p-5 shadow-lg overflow-hidden">
          
          {/* Media frame */}
          <div
            className="relative aspect-[16/10] sm:aspect-[9/16] w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-4 group cursor-pointer"
            onClick={handleInteractiveClick}
            onDoubleClick={openExternal}
            title={isRTL ? "انقر مرتين للفتح في المنصة" : "Double-tap to open externally"}
          >
            {isPlayingMobile ? (
              <ReelFrame className={current.type === "vimeo" ? "reel-iframe-vimeo" : "w-full h-full border-none"} />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center bg-black/40">
                <img
                  src={current.image}
                  alt={current.label}
                  className="w-full h-full object-cover opacity-75"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlayingMobile(true);
                  }}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#D2392A] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                  aria-label="Play video"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
                <div className="absolute top-3 start-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-[11px] font-bold tracking-wider text-white border border-white/15 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D2392A] animate-pulse" />
                  <span>{current.label}: {isRTL ? current.titleAr : current.titleEn}</span>
                </div>
              </div>
            )}

            {/* Quick External Jump Button */}
            <a
              href={current.externalUrl || current.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                openExternal();
              }}
              className="absolute bottom-2.5 end-2.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 border border-white/20 hover:bg-[#D2392A] transition-colors z-20"
            >
              <span>{current.type === "vimeo" ? (isRTL ? "فتح في فيميو ↗" : "Vimeo ↗") : (isRTL ? "فتح في إنستغرام ↗" : "Instagram ↗")}</span>
            </a>
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

          {/* Reel Switcher Buttons (All 13 items) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/10 mb-3.5 scrollbar-none">
            {REELS.map((r, i) => (
              <button
                key={r.id || i}
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
              href={current.externalUrl || current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-[#D2392A] transition-colors"
            >
              {current.type === "vimeo" ? (
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.135L0 7.197c1.185-1.044 2.351-2.083 3.501-3.123 1.577-1.418 2.766-2.158 3.567-2.222 1.88-.156 3.037.979 3.475 3.407.472 2.607.8 4.246.983 4.917.55 2.484 1.15 3.727 1.802 3.727.495 0 1.233-.655 2.213-1.966.979-1.309 1.503-2.309 1.57-2.999.123-1.171-.341-1.758-1.393-1.758-.517 0-1.054.12-1.611.359 1.066-3.486 3.102-5.181 6.108-5.084 2.226.07 3.327 1.341 3.303 3.811z" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              )}
              <span>{current.type === "vimeo" ? "Vimeo Video ↗" : "@asmamasaid ↗"}</span>
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
              <p className="leading-relaxed">{isRTL ? current.highlightAr : current.highlightEn}</p>
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

                  <div
                    className={`phone-screen ${transitioning ? "phone-fade-out" : "phone-fade-in"} cursor-pointer group`}
                    onClick={handleInteractiveClick}
                    onDoubleClick={openExternal}
                    title={isRTL ? "انقر مرتين للفتح في المنصة" : "Double-click to open externally"}
                  >
                    <div className="reel-clip-wrap">
                      <ReelFrame className={current.type === "vimeo" ? "reel-iframe-vimeo" : "reel-iframe"} />
                    </div>

                    {/* Quick External Jump Pill Badge */}
                    <a
                      href={current.externalUrl || current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openExternal();
                      }}
                      className="phone-quick-external-badge"
                    >
                      {current.type === "vimeo" ? (
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.135L0 7.197c1.185-1.044 2.351-2.083 3.501-3.123 1.577-1.418 2.766-2.158 3.567-2.222 1.88-.156 3.037.979 3.475 3.407.472 2.607.8 4.246.983 4.917.55 2.484 1.15 3.727 1.802 3.727.495 0 1.233-.655 2.213-1.966.979-1.309 1.503-2.309 1.57-2.999.123-1.171-.341-1.758-1.393-1.758-.517 0-1.054.12-1.611.359 1.066-3.486 3.102-5.181 6.108-5.084 2.226.07 3.327 1.341 3.303 3.811z" />
                        </svg>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      )}
                      <span>
                        {current.type === "vimeo"
                          ? (isRTL ? "فتح في فيميو ↗" : "Vimeo ↗")
                          : (isRTL ? "فتح في إنستغرام ↗" : "Instagram ↗")}
                      </span>
                    </a>
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

              {/* Nav controls */}
              <div className="reel-nav">
                <NavArrow dir="prev" onClick={() => go(-1)} id="reelDesktopPrev" />
                <div className="reel-dots">
                  {REELS.map((_, i) => (
                    <button
                      key={i}
                      className={`reel-dot ${i === index ? "reel-dot--active" : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={`Video ${i + 1}`}
                    />
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
