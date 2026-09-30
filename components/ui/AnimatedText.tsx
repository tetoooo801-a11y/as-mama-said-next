"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  let globalCharIndex = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split("");
        const elements = (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIndex) => {
              const start = (globalCharIndex + charIndex) / totalChars;
              const end = start + (1 / totalChars) * 1.5;
              const safeEnd = Math.min(1, end);

              return (
                <Char
                  key={charIndex}
                  progress={scrollYProgress}
                  range={[start, safeEnd]}
                >
                  {char}
                </Char>
              );
            })}
          </span>
        );
        globalCharIndex += wordChars.length + 1; // +1 for the space

        return (
          <React.Fragment key={wordIndex}>
            {elements}
            {wordIndex < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </p>
  );
}
