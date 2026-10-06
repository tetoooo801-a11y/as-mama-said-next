"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AccordionItemData {
  id: number;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  videoUrl: string;
  posterUrl?: string;
}

// --- Data for the studio gallery video accordion (from Downloads/wep) ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    titleEn: "1650 Dirty Espresso",
    titleAr: "1650 كافيه — ذا ديرتي إسبريسو",
    categoryEn: "Reel 01 • Campaign Production",
    categoryAr: "ريل 01 • إنتاج إعلاني",
    videoUrl: "/assets/videos/wep/dirty-espresso-1650.webm",
  },
  {
    id: 2,
    titleEn: "Rabbit Rapid Delivery",
    titleAr: "رابيت — سرعة التوصيل",
    categoryEn: "Reel 02 • High-Paced Commercial",
    categoryAr: "ريل 02 • إعلان تجاري سريع",
    videoUrl: "/assets/videos/wep/rabbit.webm",
  },
  {
    id: 3,
    titleEn: "Woods Living & Design",
    titleAr: "وودز — هوية وتصميم مساحات",
    categoryEn: "Reel 03 • Brand & Space Direction",
    categoryAr: "ريل 03 • علامة وتصميم مساحات",
    videoUrl: "/assets/videos/wep/woods.webm",
  },
  {
    id: 4,
    titleEn: "Summer Campaign Launch",
    titleAr: "حملة الصيف — إطلاق تجاري",
    categoryEn: "Reel 04 • Seasonal Campaign",
    categoryAr: "ريل 04 • إطلاق موسمي",
    videoUrl: "/assets/videos/wep/summer-campaign.webm",
  },
  {
    id: 5,
    titleEn: "90s Spotlight Nostalgia",
    titleAr: "خطف الأضواء — نوستالجيا التسعينات",
    categoryEn: "Reel 05 • Viral Storytelling",
    categoryAr: "ريل 05 • سرد قصصي فيروسي",
    videoUrl: "/assets/videos/wep/spotlight-90s.webm",
  },
];

// --- Accordion Item Component (Desktop) ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onActivate: () => void;
  isRTL: boolean;
  sectionVisible: boolean;
}

const AccordionItem = ({
  item,
  isActive,
  onActivate,
  isRTL,
  sectionVisible,
}: AccordionItemProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [srcLoaded, setSrcLoaded] = useState(false);

  // Load src once the section is in view
  useEffect(() => {
    if (sectionVisible && !srcLoaded) {
      setSrcLoaded(true);
    }
  }, [sectionVisible, srcLoaded]);

  // Play active video, pause inactive ones
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !srcLoaded) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      video.pause();
      setIsPlaying(false);
      setIsMuted(true);
    }
  }, [isActive, srcLoaded]);

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
        relative h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out select-none shrink-0 bg-[#0C1B1C]
        ${isActive ? "w-[240px] sm:w-[280px] md:w-[320px]" : "w-[60px] sm:w-[68px] md:w-[74px]"}
        border border-black/[0.08] dark:border-white/10 shadow-lg group
      `}
      onMouseEnter={onActivate}
      onClick={onActivate}
    >
      {/* Reel Video — natively displays first frame at t=0.001 */}
      <video
        ref={videoRef}
        src={srcLoaded ? `${item.videoUrl}#t=0.001` : undefined}
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isActive
            ? "bg-gradient-to-t from-black/90 via-black/25 to-transparent"
            : "bg-gradient-to-b from-black/55 via-black/20 to-black/75 group-hover:from-black/35 group-hover:via-black/10 group-hover:to-black/55"
        }`}
      />

      {/* Sound toggle button on active card */}
      {isActive && (
        <button
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute reel" : "Mute reel"}
          className="absolute top-3.5 end-3.5 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
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
          className="absolute text-white/95 group-hover:text-white text-xs sm:text-[13px] font-bold tracking-wider whitespace-nowrap bottom-24 left-1/2 -translate-x-1/2 rotate-90 transition-all duration-300 origin-center uppercase pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
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
  const [sectionVisible, setSectionVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Mobile player state
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobileMuted, setIsMobileMuted] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Observe when the section enters the viewport to trigger video loading
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleItemActivate = (index: number) => {
    setActiveIndex(index);
  };

  const toggleMobileSound = () => {
    if (mobileVideoRef.current) {
      const nextMuted = !isMobileMuted;
      mobileVideoRef.current.muted = nextMuted;
      setIsMobileMuted(nextMuted);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left
        if (isRTL) {
          setActiveIndex((prev) => (prev - 1 + accordionItems.length) % accordionItems.length);
        } else {
          setActiveIndex((prev) => (prev + 1) % accordionItems.length);
        }
      } else {
        // Swiped right
        if (isRTL) {
          setActiveIndex((prev) => (prev + 1) % accordionItems.length);
        } else {
          setActiveIndex((prev) => (prev - 1 + accordionItems.length) % accordionItems.length);
        }
      }
    }
    setTouchStartX(null);
  };

  const activeItem = accordionItems[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors py-10 sm:py-16 md:py-20 border-b border-black/[0.08] dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-14">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/20 mb-4 sm:mb-5">
              <Sparkles size={14} />
              <span>{isRTL ? "استكشف أعمالنا" : "STUDIO SHOWCASE"}</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#15100C] dark:text-[#F2E6DC] leading-[1.04] tracking-tight mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "أهلاً بكم في معرض أعمالنا" : "Welcome to our gallery"}
            </h2>

            <p className="text-sm sm:text-base md:text-[1.05rem] text-[#15100C]/75 dark:text-[#F2E6DC]/75 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-6 sm:mb-8">
              {isRTL
                ? "مجموعة مختارة من أبرز مشاريعنا الإبداعية، من الأفلام ثلاثية الأبعاد والرندرة السينمائية إلى أنظمة الهوية البصرية والتطبيقات الرقمية التفاعلية."
                : "A curated showcase of our commercial 3D films, photorealistic renders, brand systems, and interactive digital flagships engineered across Cairo and Dubai."}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D2392A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#b82f22] transition-colors shadow-lg cursor-pointer active:scale-95"
              >
                <span>{isRTL ? "ابدأ مشروعك" : "Start a project"}</span>
                <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
              </Link>
            </div>
          </div>

          {/* Right Side DESKTOP (lg and above): Expanding Horizontal Accordion */}
          <div className="hidden lg:flex lg:w-7/12 items-center justify-center overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3 p-2 min-w-max">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onActivate={() => handleItemActivate(index)}
                  isRTL={isRTL}
                  sectionVisible={sectionVisible}
                />
              ))}
            </div>
          </div>

          {/* Right Side MOBILE & TABLET (below lg): Cinematic Touch-Friendly Reel Viewer */}
          <div className="w-full lg:hidden flex flex-col gap-3.5 max-w-lg mx-auto">
            {/* Featured Active Reel Card */}
            <div
              className="relative w-full aspect-[4/5] sm:aspect-[16/10] max-h-[460px] rounded-[24px] overflow-hidden bg-[#0C1B1C] border border-black/10 dark:border-white/10 shadow-2xl select-none group"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Active Video Player */}
              <video
                key={activeItem.id}
                ref={mobileVideoRef}
                src={`${activeItem.videoUrl}#t=0.001`}
                autoPlay
                loop
                muted={isMobileMuted}
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

              {/* Top Controls: Reel Counter & Sound Toggle */}
              <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20 pointer-events-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#D2392A] animate-ping" />
                  <span>REEL 0{activeItem.id} / 05</span>
                </span>

                <button
                  type="button"
                  onClick={toggleMobileSound}
                  aria-label={isMobileMuted ? "Unmute reel" : "Mute reel"}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                >
                  {isMobileMuted ? (
                    <VolumeX size={15} className="opacity-80" />
                  ) : (
                    <Volume2 size={15} className="text-[#D2392A]" />
                  )}
                </button>
              </div>

              {/* Navigation Chevrons on sides */}
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (prev) => (prev - 1 + accordionItems.length) % accordionItems.length
                  )
                }
                aria-label="Previous reel"
                className="absolute start-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronLeft size={18} className={isRTL ? "rotate-180" : ""} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % accordionItems.length)
                }
                aria-label="Next reel"
                className="absolute end-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronRight size={18} className={isRTL ? "rotate-180" : ""} />
              </button>

              {/* Bottom Caption Information */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex flex-col gap-1 pointer-events-none">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D2392A]">
                  {isRTL ? activeItem.categoryAr : activeItem.categoryEn}
                </span>
                <h4
                  className="text-white text-xl sm:text-2xl font-black leading-tight drop-shadow-md"
                  style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
                >
                  {isRTL ? activeItem.titleAr : activeItem.titleEn}
                </h4>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar w-full">
              {accordionItems.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-2 p-1.5 pe-2.5 rounded-xl border transition-all duration-200 shrink-0 text-start cursor-pointer select-none ${
                      isActive
                        ? "bg-[#D2392A]/15 border-[#D2392A] text-[#15100C] dark:text-white shadow-md scale-102"
                        : "bg-white dark:bg-[#0A1617] border-black/[0.08] dark:border-white/10 text-[#15100C]/70 dark:text-[#F2E6DC]/70 hover:bg-black/[0.04]"
                    }`}
                  >
                    <div className="relative w-9 h-11 rounded-lg overflow-hidden shrink-0 bg-black/40">
                      <video
                        src={`${item.videoUrl}#t=0.001`}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-[#D2392A]/25 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D2392A]" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9.5px] font-mono font-bold text-[#D2392A]">
                        REEL 0{item.id}
                      </span>
                      <span className="text-xs font-bold leading-none line-clamp-1">
                        {isRTL ? item.titleAr : item.titleEn}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingAccordionItem;
