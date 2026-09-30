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
          x: [0, 30, -25, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.18, 0.94, 1],
          opacity: [0.3, 0.48, 0.32, 0.3],
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
          x: [0, -25, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.92, 1.15, 1],
          opacity: [0.4, 0.6, 0.42, 0.4],
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
          height: compact ? "65px" : "90px",
          width: "100%",
          pointerEvents: "none",
        }}
      >
        {/* Secondary subtle wave layer for depth & parallax */}
        <motion.path
          animate={{
            d: [
              "M0,90 L0,55 C240,75 480,85 720,45 C960,15 1200,45 1440,55 L1440,90 Z",
              "M0,90 L0,40 C240,85 480,65 720,55 C960,35 1200,30 1440,45 L1440,90 Z",
              "M0,90 L0,50 C240,65 480,80 720,40 C960,25 1200,40 1440,60 L1440,90 Z",
              "M0,90 L0,55 C240,75 480,85 720,45 C960,15 1200,45 1440,55 L1440,90 Z",
            ],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill={curveFill}
          opacity={0.3}
        />

        {/* Primary living organic wave */}
        <motion.path
          animate={{
            d: [
              "M0,90 L0,40 C240,90 480,90 720,55 C960,20 1200,20 1440,55 L1440,90 Z",
              "M0,90 L0,48 C240,70 480,85 720,42 C960,30 1200,35 1440,48 L1440,90 Z",
              "M0,90 L0,32 C240,85 480,75 720,62 C960,18 1200,25 1440,58 L1440,90 Z",
              "M0,90 L0,40 C240,90 480,90 720,55 C960,20 1200,20 1440,55 L1440,90 Z",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill={curveFill}
        />
      </svg>
    </section>
  );
}
