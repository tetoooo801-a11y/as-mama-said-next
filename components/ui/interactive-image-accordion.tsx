"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AccordionItemData {
  id: number;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  videoUrl: string;
}

// --- Data for the studio gallery video accordion (from Downloads/Reals) ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    titleEn: "3D Modeling & CGI",
    titleAr: "النمذجة ثلاثية الأبعاد",
    categoryEn: "Reel 01 • Spatial Geometry",
    categoryAr: "ريل 01 • مجسمات وبيئات",
    videoUrl: "/assets/videos/reels/1.mp4",
  },
  {
    id: 2,
    titleEn: "Cinematic Rendering",
    titleAr: "الرندرة الواقعية",
    categoryEn: "Reel 02 • Lighting & Visuals",
    categoryAr: "ريل 02 • إضاءة وخامات",
    videoUrl: "/assets/videos/reels/2.mp4",
  },
  {
    id: 3,
    titleEn: "Motion & Film",
    titleAr: "تصميم الحركة والأنيميشن",
    categoryEn: "Reel 03 • Kinetic Direction",
    categoryAr: "ريل 03 • إخراج حركي",
    videoUrl: "/assets/videos/reels/3.mp4",
  },
  {
    id: 4,
    titleEn: "Brand Identity",
    titleAr: "الهوية البصرية",
    categoryEn: "Reel 04 • Visual Systems",
    categoryAr: "ريل 04 • أنظمة الهوية",
    videoUrl: "/assets/videos/reels/4.mp4",
  },
  {
    id: 5,
    titleEn: "Digital Experiences",
    titleAr: "التجارب الرقمية",
    categoryEn: "Reel 05 • Interactive & Web",
    categoryAr: "ريل 05 • ويب وتطبيقات",
    videoUrl: "/assets/videos/reels/5.mp4",
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  isRTL: boolean;
}

const AccordionItem = ({ item, isActive, onMouseEnter, isRTL }: AccordionItemProps) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  React.useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policy fallback
          });
        }
      } else {
        // When collapsed, maintain muted playback
        setIsMuted(true);
      }
    }
  }, [isActive]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div
      className={`
        relative h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out select-none shrink-0 bg-black
        ${isActive ? "w-[220px] sm:w-[280px] md:w-[340px]" : "w-[52px] sm:w-[58px] md:w-[64px]"}
        border border-black/[0.08] dark:border-white/10 shadow-lg group
      `}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
    >
      {/* Background Reel Video */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay for text contrast */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isActive
            ? "bg-gradient-to-t from-black/90 via-black/25 to-transparent"
            : "bg-black/55 group-hover:bg-black/35"
        }`}
      />

      {/* Sound toggle button on active card */}
      {isActive && (
        <button
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute reel" : "Mute reel"}
          className="absolute top-3.5 end-3.5 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200"
        >
          {isMuted ? (
            <VolumeX size={14} className="opacity-80" />
          ) : (
            <Volume2 size={14} className="text-[#D2392A]" />
          )}
        </button>
      )}

      {/* Caption Content */}
      {isActive ? (
        <div className="absolute bottom-5 inset-x-5 z-10 flex flex-col gap-1 transition-all duration-300 pointer-events-none">
          <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-[#D2392A]">
            {isRTL ? item.categoryAr : item.categoryEn}
          </span>
          <h4
            className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {isRTL ? item.titleAr : item.titleEn}
          </h4>
        </div>
      ) : (
        <span
          className="absolute text-white/80 group-hover:text-white text-xs sm:text-[13px] font-bold tracking-wider whitespace-nowrap bottom-24 left-1/2 -translate-x-1/2 rotate-90 transition-all duration-300 origin-center uppercase pointer-events-none"
          style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
        >
          {isRTL ? item.titleAr : item.titleEn}
        </span>
      )}
    </div>
  );
};

// --- Main Interactive Image Accordion Component ---
export function LandingAccordionItem() {
  const { isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors py-12 sm:py-16 md:py-20 border-b border-black/[0.08] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Side: Text Content with "Welcome to our gallery" */}
          <div className="w-full lg:w-5/12 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 mb-4 sm:mb-5">
              <Sparkles size={14} />
              <span>{isRTL ? "استكشف أعمالنا" : "STUDIO SHOWCASE"}</span>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-[1.04] tracking-tight mb-5 sm:mb-6"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "أهلاً بكم في معرض أعمالنا" : "Welcome to our gallery"}
            </h2>

            <p className="text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-7 sm:mb-8">
              {isRTL
                ? "مجموعة مختارة من أبرز مشاريعنا الإبداعية، من الأفلام ثلاثية الأبعاد والرندرة السينمائية إلى أنظمة الهوية البصرية والتطبيقات الرقمية التفاعلية."
                : "A curated showcase of our commercial 3D films, photorealistic renders, brand systems, and interactive digital flagships engineered across Cairo and Dubai."}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D2392A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#b82f22] transition-colors shadow-lg cursor-pointer"
              >
                <span>{isRTL ? "ابدأ مشروعك" : "Start a project"}</span>
                <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
              </Link>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-7/12 flex items-center justify-center overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3 p-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  isRTL={isRTL}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingAccordionItem;
