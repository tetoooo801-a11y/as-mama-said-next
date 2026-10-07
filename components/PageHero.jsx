"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  compact = false,
  curveFill = "#FAF6F0",
}) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      {/* Ambient Moving Blobs (Motion inside Hero) */}
      <motion.span
        animate={{
          x: [0, 8, -4, 0],
          y: [0, -8, 8, 0],
          scale: [1, 1.04, 0.96, 1],
          opacity: [0.22, 0.32, 0.25, 0.22],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="blob blob-a"
      />
      <motion.span
        animate={{
          x: [0, -8, 6, 0],
          y: [0, 8, -8, 0],
          scale: [1, 0.96, 1.04, 1],
          opacity: [0.32, 0.44, 0.34, 0.32],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="blob blob-b"
      />

      <div className="wrap relative z-10 w-full flex flex-col items-center justify-center text-center">
        {eyebrow && !compact && (
          <span className="eyebrow-dot">
            <i></i>
            {eyebrow}
          </span>
        )}

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={compact ? "uppercase tracking-[0.08em]" : ""}
          style={{
            fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
            fontSize: compact ? "clamp(2.6rem, 5.8vw, 4.5rem)" : undefined,
          }}
        >
          {title}
        </motion.h1>

        {subtitle && !compact && <p className="sub">{subtitle}</p>}
      </div>

      {/* Living Animated Undulating Wave (Wave Motion) */}
      <svg
        className="curve-divider"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "-1px",
          height: compact ? "72px" : "96px",
          width: "100%",
          pointerEvents: "none",
        }}
      >
        {/* Secondary subtle wave layer for depth & parallax */}
        <motion.path
          animate={{
            d: [
              "M0,90 L0,55 C240,80 480,88 720,40 C960,10 1200,45 1440,60 L1440,90 Z",
              "M0,90 L0,35 C240,90 480,55 720,65 C960,45 1200,25 1440,40 L1440,90 Z",
              "M0,90 L0,60 C240,60 480,85 720,35 C960,20 1200,50 1440,65 L1440,90 Z",
              "M0,90 L0,55 C240,80 480,88 720,40 C960,10 1200,45 1440,60 L1440,90 Z",
            ],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill={curveFill}
          opacity={0.38}
        />

        {/* Primary living organic wave - fast & clearly visible */}
        <motion.path
          animate={{
            d: [
              "M0,90 L0,35 C240,90 480,95 720,45 C960,10 1200,20 1440,55 L1440,90 Z",
              "M0,90 L0,58 C240,50 480,70 720,65 C960,40 1200,35 1440,32 L1440,90 Z",
              "M0,90 L0,25 C240,85 480,60 720,30 C960,15 1200,45 1440,65 L1440,90 Z",
              "M0,90 L0,35 C240,90 480,95 720,45 C960,10 1200,20 1440,55 L1440,90 Z",
            ],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill={curveFill}
        />
      </svg>
    </section>
  );
}
