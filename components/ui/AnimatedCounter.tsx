"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  delay?: number;
  className?: string;
}

function parseValue(raw: string | number) {
  const str = String(raw).trim();
  // Match prefix (e.g. "+", "$"), number (integers or decimals e.g. "45", "3.4", "99.9"), and suffix (e.g. "M", "x", "%", "+")
  const match = str.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: "", num: 0, suffix: str, decimals: 0 };
  }
  const prefix = match[1] || "";
  const num = parseFloat(match[2]);
  const suffix = match[3] || "";
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix, num, suffix, decimals };
}

function formatNumber(n: number, decimals: number) {
  const fixed = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
  const parts = fixed.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export default function AnimatedCounter({
  value,
  duration,
  delay = 0,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { prefix, num, suffix, decimals } = parseValue(value);

  // Dynamic optimal duration: responsive for small integers (2, 8) and smooth for larger numbers (20, 30, 45)
  const effectiveDuration =
    duration ?? (num <= 5 ? 1.0 : num <= 10 ? 1.3 : 1.8);

  const [currentText, setCurrentText] = useState<string>(() =>
    formatNumber(0, decimals)
  );

  useEffect(() => {
    if (!isInView) {
      setCurrentText(formatNumber(0, decimals));
      return;
    }

    // Check for prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCurrentText(formatNumber(num, decimals));
      return;
    }

    const timeout = setTimeout(() => {
      const controls = animate(0, num, {
        duration: effectiveDuration,
        ease: [0.16, 1, 0.3, 1], // Smooth luxury deceleration curve
        onUpdate(latest) {
          setCurrentText(formatNumber(latest, decimals));
        },
      });

      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, num, effectiveDuration, delay, decimals]);

  return (
    <span
      ref={ref}
      suppressHydrationWarning
      className={`inline-block tabular-nums ${className}`}
    >
      {prefix}
      {currentText}
      {suffix}
    </span>
  );
}
