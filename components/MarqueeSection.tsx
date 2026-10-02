"use client";

import React, { useEffect, useRef, useState } from "react";

const CLIPS = [
  "/assets/videos/clips/clip-1.mp4",
  "/assets/videos/clips/clip-2.mp4",
  "/assets/videos/clips/clip-3.mp4",
  "/assets/videos/clips/clip-4.mp4",
  "/assets/videos/clips/clip-5.mp4",
  "/assets/videos/clips/clip-6.mp4",
  "/assets/videos/clips/clip-7.mp4",
  "/assets/videos/clips/clip-8.mp4",
  "/assets/videos/clips/clip-9.mp4",
  "/assets/videos/clips/clip-10.mp4",
  "/assets/videos/clips/clip-11.mp4",
  "/assets/videos/clips/clip-12.mp4",
  "/assets/videos/clips/clip-13.mp4",
  "/assets/videos/clips/clip-14.mp4",
  "/assets/videos/clips/clip-15.mp4",
];

const ROW_1 = [
  ...CLIPS.slice(0, 8),
  ...CLIPS.slice(0, 8),
  ...CLIPS.slice(0, 8),
  ...CLIPS.slice(0, 8),
];
const ROW_2 = [
  ...CLIPS.slice(7),
  ...CLIPS.slice(7),
  ...CLIPS.slice(7),
  ...CLIPS.slice(7),
];

// Lazy video: loads + plays only when in viewport, pauses when out
function LazyVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (video.src) {
              video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "150px" } // Start loading slightly before visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop (>= 1024px) for scroll-driven parallax vs mobile auto-scroll
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Track visibility to apply willChange only when in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const row1Transform = isDesktop ? `translateX(${offset - 200}px)` : undefined;
  const row2Transform = isDesktop ? `translateX(${-(offset - 200)}px)` : undefined;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#FAF6F0] dark:bg-[#061516] py-8 sm:py-12 lg:pt-28 lg:pb-14 transition-colors"
      style={{ overflowX: "clip" }}
    >
      <div className="flex flex-col gap-2.5 sm:gap-3.5">
        {/* Row 1: Desktop moves on scroll; Mobile moves left continuously via CSS */}
        <div
          className="marquee-track-mobile-1 flex gap-2.5 sm:gap-3.5"
          style={{
            transform: row1Transform,
            willChange: isVisible ? "transform" : "auto",
            transition: isDesktop ? "transform 0.05s linear" : undefined,
          }}
        >
          {ROW_1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-[160px] h-[102px] sm:w-[240px] sm:h-[150px] lg:w-[420px] lg:h-[270px] shrink-0 overflow-hidden rounded-xl lg:rounded-2xl bg-black border border-[#15100C]/10 dark:border-white/10 shadow-[0_6px_18px_rgba(21,16,12,0.06)] lg:shadow-[0_12px_28px_rgba(21,16,12,0.08)] group"
            >
              <LazyVideo
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Desktop moves on scroll; Mobile moves right continuously via CSS */}
        <div
          className="marquee-track-mobile-2 flex gap-2.5 sm:gap-3.5"
          style={{
            transform: row2Transform,
            willChange: isVisible ? "transform" : "auto",
            transition: isDesktop ? "transform 0.05s linear" : undefined,
          }}
        >
          {ROW_2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-[160px] h-[102px] sm:w-[240px] sm:h-[150px] lg:w-[420px] lg:h-[270px] shrink-0 overflow-hidden rounded-xl lg:rounded-2xl bg-black border border-[#15100C]/10 dark:border-white/10 shadow-[0_6px_18px_rgba(21,16,12,0.06)] lg:shadow-[0_12px_28px_rgba(21,16,12,0.08)] group"
            >
              <LazyVideo
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
