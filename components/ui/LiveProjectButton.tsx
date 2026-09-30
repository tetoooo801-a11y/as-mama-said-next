"use client";

import React from "react";

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({
  label = "Live Project",
  href,
  onClick,
  className = "",
}: LiveProjectButtonProps) {
  const content = (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer ${className}`}
    >
      <span>{label}</span>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
