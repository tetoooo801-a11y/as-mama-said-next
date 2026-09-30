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

const ROW_1 = [...CLIPS.slice(0, 8), ...CLIPS.slice(0, 8), ...CLIPS.slice(0, 8)];
const ROW_2 = [...CLIPS.slice(7), ...CLIPS.slice(7), ...CLIPS.slice(7)];

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
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "100px" } // Start loading slightly before visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
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
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#FAF6F0] dark:bg-[#061516] pt-16 sm:pt-24 md:pt-28 pb-14 transition-colors"
      style={{ overflowX: "clip" }}
    >
      <div className="flex flex-col gap-3.5">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3.5"
          style={{
            transform: row1Transform,
            willChange: isVisible ? "transform" : "auto",
            transition: "transform 0.05s linear",
          }}
        >
          {ROW_1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] shrink-0 overflow-hidden rounded-2xl bg-black border border-[#15100C]/10 dark:border-white/10 shadow-[0_12px_28px_rgba(21,16,12,0.08)] group"
            >
              <LazyVideo
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3.5"
          style={{
            transform: row2Transform,
            willChange: isVisible ? "transform" : "auto",
            transition: "transform 0.05s linear",
          }}
        >
          {ROW_2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] shrink-0 overflow-hidden rounded-2xl bg-black border border-[#15100C]/10 dark:border-white/10 shadow-[0_12px_28px_rgba(21,16,12,0.08)] group"
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
