"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Asterisk, Briefcase, CheckCircle2, Send, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact({ isPage = false }) {
  const { t, isRTL } = useLanguage();
  const [activeCat, setActiveCat] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form input states
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [extraField, setExtraField] = useState("");
  const [message, setMessage] = useState("");

  const handleInquirySelect = (cat) => {
    if (activeCat === cat && formOpen) {
      // Toggle if clicking same
      setFormOpen(false);
      setActiveCat(null);
    } else {
      setActiveCat(cat);
      setFormOpen(true);
      setSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const currentConfig = activeCat
    ? t.contact.configs[activeCat]
    : t.contact.configs.marketing;

  return (
    <section
      id="contact"
      className={`relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors ${
        isPage ? "pt-6 sm:pt-10 md:pt-14 pb-14 sm:pb-20" : "py-20 sm:py-28 md:py-32"
      } px-5 sm:px-8 md:px-12`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* LEFT SIDE: Content & Interactive Cards */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            <FadeIn delay={0.1} y={20}>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#15100C]/75 dark:text-[#F2E6DC]/75">
                  {isRTL ? "تواصل معنا" : "GET IN TOUCH"}
                </span>
              </div>

              {/* Large Headline */}
              <h2
                className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.04] sm:leading-[1.02] mb-3 sm:mb-4"
                style={{
                  fontSize: "clamp(2.5rem, 5.2vw, 4.5rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {t.contact.title}
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base md:text-[1.02rem] leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-normal max-w-xl mb-7 sm:mb-9">
                {t.contact.sub}
              </p>
            </FadeIn>

            {/* 6 Contact Option Cards Grid */}
            <FadeIn delay={0.2} y={25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
                {/* 1. Instagram */}
                <a
                  href="https://www.instagram.com/asmamasaid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-[20px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 select-none"
                  aria-label="Instagram Profile"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                      {isRTL ? "إنستغرام" : "Instagram"}
                    </span>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-[#15100C]/35 dark:text-[#F2E6DC]/35 group-hover:text-[#D2392A] transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 shrink-0"
                  />
                </a>

                {/* 2. TikTok */}
                <a
                  href="https://www.tiktok.com/@as.mama.said"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-[20px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 select-none"
                  aria-label="TikTok Profile"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.33a6.33 6.33 0 0 0-.84-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.88 1.6v-3.48a4.85 4.85 0 0 1-1.11-.14z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                      {isRTL ? "تيك توك" : "TikTok"}
                    </span>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-[#15100C]/35 dark:text-[#F2E6DC]/35 group-hover:text-[#D2392A] transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 shrink-0"
                  />
                </a>

                {/* 3. Facebook */}
                <a
                  href="https://www.facebook.com/share/1DfcDiWsnK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-[20px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 select-none"
                  aria-label="Facebook Profile"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                      {isRTL ? "فيسبوك" : "Facebook"}
                    </span>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-[#15100C]/35 dark:text-[#F2E6DC]/35 group-hover:text-[#D2392A] transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 shrink-0"
                  />
                </a>

                {/* 4. Marketing */}
                <button
                  type="button"
                  onClick={() => handleInquirySelect("marketing")}
                  className={`group relative flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-[20px] transition-all duration-300 text-start select-none cursor-pointer border ${
                    activeCat === "marketing" && formOpen
                      ? "bg-white dark:bg-[#0c1b1c] border-[#D2392A] shadow-[0_8px_24px_rgba(210,57,42,0.12)] ring-1 ring-[#D2392A]/40"
                      : "bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                  }`}
                  aria-expanded={activeCat === "marketing" && formOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Mail size={17} strokeWidth={2} />
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                      {t.contact.cats.marketing}
                    </span>
                  </div>
                  <ArrowRight
                    size={15}
                    className={`transition-all duration-300 shrink-0 rtl:rotate-180 ${
                      activeCat === "marketing" && formOpen
                        ? "text-[#D2392A] translate-x-1 rtl:-translate-x-1"
                        : "text-[#15100C]/35 dark:text-[#F2E6DC]/35 group-hover:text-[#D2392A] group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    }`}
                  />
                </button>

                {/* 5. Tech */}
                <button
                  type="button"
                  onClick={() => handleInquirySelect("tech")}
                  className={`group relative flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-[20px] transition-all duration-300 text-start select-none cursor-pointer border ${
                    activeCat === "tech" && formOpen
                      ? "bg-white dark:bg-[#0c1b1c] border-[#D2392A] shadow-[0_8px_24px_rgba(210,57,42,0.12)] ring-1 ring-[#D2392A]/40"
                      : "bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                  }`}
                  aria-expanded={activeCat === "tech" && formOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Asterisk size={19} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                      {t.contact.cats.tech}
                    </span>
                  </div>
                  <ArrowRight
                    size={15}
                    className={`transition-all duration-300 shrink-0 rtl:rotate-180 ${
                      activeCat === "tech" && formOpen
                        ? "text-[#D2392A] translate-x-1 rtl:-translate-x-1"
                        : "text-[#15100C]/35 dark:text-[#F2E6DC]/35 group-hover:text-[#D2392A] group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    }`}
                  />
                </button>

                {/* 6. Business / Other */}
                <button
                  type="button"
                  onClick={() => handleInquirySelect("business")}
                  className={`group relative flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-[20px] transition-all duration-300 text-start select-none cursor-pointer border ${
                    activeCat === "business" && formOpen
                      ? "bg-white dark:bg-[#0c1b1c] border-[#D2392A] shadow-[0_8px_24px_rgba(210,57,42,0.12)] ring-1 ring-[#D2392A]/40"
                      : "bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                  }`}
                  aria-expanded={activeCat === "business" && formOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Briefcase size={17} strokeWidth={2} />
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                      {t.contact.cats.business}
                    </span>
                  </div>
                  <ArrowRight
                    size={15}
                    className={`transition-all duration-300 shrink-0 rtl:rotate-180 ${
                      activeCat === "business" && formOpen
                        ? "text-[#D2392A] translate-x-1 rtl:-translate-x-1"
                        : "text-[#15100C]/35 dark:text-[#F2E6DC]/35 group-hover:text-[#D2392A] group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </FadeIn>

            {/* Direct Business Enquiries & Regional Desks (Official Profile 2026) */}
            <FadeIn delay={0.25} y={20}>
              <div className="mt-4 p-4 sm:p-5 rounded-[22px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/90 border border-black/[0.06] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center sm:text-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D2392A] animate-pulse shrink-0 hidden sm:block" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D2392A] block">
                      {isRTL ? "استفسارات الأعمال والتعاقدات المباشرة" : "DIRECT BUSINESS ENQUIRIES"}
                    </span>
                    <span className="text-[11.5px] text-[#15100C]/65 dark:text-[#F2E6DC]/65 font-medium">
                      EGYPT · DUBAI · SAUDI ARABIA · QATAR
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#15100C] dark:text-[#F2E6DC]">
                  <a
                    href="https://wa.me/201092927390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 hover:border-[#D2392A] hover:text-[#D2392A] transition-colors"
                  >
                    <span>🇪🇬 +20 109 292 7390</span>
                  </a>
                  <a
                    href="https://wa.me/971557889692"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 hover:border-[#D2392A] hover:text-[#D2392A] transition-colors"
                  >
                    <span>🇦🇪 +971 55 788 9692</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Seamless Interactive Form Accordion */}
            <AnimatePresence>
              {formOpen && activeCat && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="rounded-[24px] bg-white dark:bg-[#0c1b1c] border border-black/[0.08] dark:border-white/10 p-5 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center mb-3">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="text-lg font-bold text-[#15100C] dark:text-[#F2E6DC] mb-1">
                          {isRTL ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
                        </h4>
                        <p className="text-sm text-[#15100C]/70 dark:text-[#F2E6DC]/70 max-w-md">
                          {t.contact.successNote}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Category guidance note */}
                        <div className="flex items-center gap-2 p-3 rounded-[14px] bg-[#FAF6F0] dark:bg-[#061516]/60 border border-black/[0.05] dark:border-white/10 text-xs sm:text-[13px] text-[#15100C]/80 dark:text-[#F2E6DC]/80">
                          <span className="w-2 h-2 rounded-full bg-[#D2392A] shrink-0" />
                          <span>{currentConfig.note}</span>
                        </div>

                        {/* Fields 2-Col Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#15100C]/70 dark:text-[#F2E6DC]/70 mb-1.5">
                              {t.contact.name}
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder={t.contact.namePlaceholder}
                              required
                              className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#FAF7F2] dark:bg-[#061516] border border-black/10 dark:border-white/10 text-sm text-[#15100C] dark:text-[#F2E6DC] placeholder-[#15100C]/40 dark:placeholder-[#F2E6DC]/40 focus:outline-none focus:border-[#D2392A] focus:ring-1 focus:ring-[#D2392A] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#15100C]/70 dark:text-[#F2E6DC]/70 mb-1.5">
                              {t.contact.company}
                            </label>
                            <input
                              type="text"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder={t.contact.companyPlaceholder}
                              className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#FAF7F2] dark:bg-[#061516] border border-black/10 dark:border-white/10 text-sm text-[#15100C] dark:text-[#F2E6DC] placeholder-[#15100C]/40 dark:placeholder-[#F2E6DC]/40 focus:outline-none focus:border-[#D2392A] focus:ring-1 focus:ring-[#D2392A] transition-colors"
                            />
                          </div>
                        </div>

                        {/* Dynamic Field */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#15100C]/70 dark:text-[#F2E6DC]/70 mb-1.5">
                            {currentConfig.label}
                          </label>
                          <input
                            type="text"
                            value={extraField}
                            onChange={(e) => setExtraField(e.target.value)}
                            placeholder={currentConfig.placeholder}
                            className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#FAF7F2] dark:bg-[#061516] border border-black/10 dark:border-white/10 text-sm text-[#15100C] dark:text-[#F2E6DC] placeholder-[#15100C]/40 dark:placeholder-[#F2E6DC]/40 focus:outline-none focus:border-[#D2392A] focus:ring-1 focus:ring-[#D2392A] transition-colors"
                          />
                        </div>

                        {/* Textarea */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#15100C]/70 dark:text-[#F2E6DC]/70 mb-1.5">
                            {t.contact.tellUs}
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t.contact.tellUsPlaceholder}
                            rows={3}
                            required
                            className="w-full px-3.5 py-2.5 rounded-[12px] bg-[#FAF7F2] dark:bg-[#061516] border border-black/10 dark:border-white/10 text-sm text-[#15100C] dark:text-[#F2E6DC] placeholder-[#15100C]/40 dark:placeholder-[#F2E6DC]/40 focus:outline-none focus:border-[#D2392A] focus:ring-1 focus:ring-[#D2392A] transition-colors resize-none"
                          />
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            type="button"
                            onClick={() => setFormOpen(false)}
                            className="text-xs font-medium text-[#15100C]/60 dark:text-[#F2E6DC]/60 hover:text-[#D2392A] transition-colors"
                          >
                            {isRTL ? "إغلاق النموذج" : "Close form"}
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#D2392A] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:bg-[#b82f22] active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50"
                          >
                            <span>{isSubmitting ? (isRTL ? "جارِ الإرسال..." : "Sending...") : t.contact.submit}</span>
                            <Send size={14} className="rtl:rotate-180" />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Large Creative Studio Visual Container */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <FadeIn delay={0.25} y={30}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-[26px] sm:rounded-[32px] md:rounded-[36px] border border-black/[0.06] dark:border-white/10 bg-[#0C0C0C]/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group">
                <img
                  src="/assets/images/contact-studio.png"
                  alt="As Mama Said Creative Studio Workspace"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle bottom gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
