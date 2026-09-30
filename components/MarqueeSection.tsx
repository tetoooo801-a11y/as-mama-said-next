"use client";

import React, { useEffect, useRef, useState } from "react";

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW_1 = [...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11)];
const ROW_2 = [...IMAGES.slice(11), ...IMAGES.slice(11), ...IMAGES.slice(11)];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

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
      className="relative w-full overflow-hidden bg-[#FAF6F0] pt-16 sm:pt-24 md:pt-28 pb-14"
      style={{ overflowX: "clip" }}
    >
      <div className="flex flex-col gap-3.5">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3.5"
          style={{
            transform: row1Transform,
            willChange: "transform",
            transition: "transform 0.05s linear",
          }}
        >
          {ROW_1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] shrink-0 overflow-hidden rounded-2xl bg-[#F2E6DC] border border-[#15100C]/10 shadow-[0_12px_28px_rgba(21,16,12,0.08)]"
            >
              <img
                src={src}
                alt="3D Creative Project Preview"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3.5"
          style={{
            transform: row2Transform,
            willChange: "transform",
            transition: "transform 0.05s linear",
          }}
        >
          {ROW_2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] shrink-0 overflow-hidden rounded-2xl bg-[#F2E6DC] border border-[#15100C]/10 shadow-[0_12px_28px_rgba(21,16,12,0.08)]"
            >
              <img
                src={src}
                alt="3D Creative Project Preview"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
