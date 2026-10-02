"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Asterisk, Briefcase, CheckCircle2, Send, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact({ isPage = false }) {
  const { t, isRTL } = useLanguage();
  const [activeCat, setActiveCat] = useState("marketing");
  const [formOpen, setFormOpen] = useState(true);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form input states
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [extraField, setExtraField] = useState("");
  const [message, setMessage] = useState("");

  const handleInquirySelect = (cat) => {
    setActiveCat(cat);
    setFormOpen(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const currentConfig = (activeCat && t.contact?.configs?.[activeCat])
    ? t.contact.configs[activeCat]
    : t.contact.configs.marketing;

  const socialLinks = [
    {
      name: isRTL ? "إنستغرام" : "Instagram",
      href: "https://www.instagram.com/as.mama.said",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: isRTL ? "تيك توك" : "TikTok",
      href: "https://www.tiktok.com/@as.mama.said",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.33a6.33 6.33 0 0 0-.84-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.88 1.6v-3.48a4.85 4.85 0 0 1-1.11-.14z" />
        </svg>
      ),
    },
    {
      name: isRTL ? "فيسبوك" : "Facebook",
      href: "https://www.facebook.com/share/1DfcDiWsnK/",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className={`relative z-10 w-full bg-[#FAF6F0] dark:bg-[#061516] text-[#15100C] dark:text-[#F2E6DC] transition-colors ${
        isPage ? "pt-6 sm:pt-10 md:pt-14 pb-14 sm:pb-20" : "py-12 sm:py-20 md:py-32"
      }`}
    >
      {/* =========================================================
          MOBILE VIEW (md:hidden) — Condensed reference layout
          ========================================================= */}
      <div className="block md:hidden px-6 max-w-lg mx-auto">
        <FadeIn delay={0.1} y={20}>
          {/* Header with Red Dot */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-3 h-3 rounded-full bg-[#D2392A] shrink-0" />
            <h2
              className="text-2xl font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-none"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              {isRTL ? "لنعمل معاً" : "LET'S WORK TOGETHER"}
            </h2>
          </div>

          {/* Short Subtitle */}
          <p className="text-[14px] leading-relaxed text-[#15100C]/75 dark:text-[#F2E6DC]/75 font-normal mb-5">
            {isRTL
              ? "عندك فكرة مشروع أو استفسار؟ نحب نسمع منك ونبدأ العمل."
              : "Have a project in mind? We'd love to hear from you."}
          </p>

          {/* Primary CTA Button */}
          <button
            type="button"
            onClick={() => setMobileFormOpen(!mobileFormOpen)}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#D2392A] text-white font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all select-none"
          >
            <span>
              {mobileFormOpen
                ? (isRTL ? "إغلاق النموذج" : "Close Form")
                : (isRTL ? "أرسل لنا رسالة ←" : "Send Us a Message →")}
            </span>
          </button>

          {/* Expandable Mobile Form */}
          <AnimatePresence>
            {mobileFormOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="rounded-2xl bg-white dark:bg-[#0c1b1c] border border-black/10 dark:border-white/10 p-4 shadow-md">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center mb-2">
                        <CheckCircle2 size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#15100C] dark:text-[#F2E6DC] mb-1">
                        {isRTL ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
                      </h4>
                      <p className="text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70">
                        {t.contact.successNote}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.contact.namePlaceholder}
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#061516] border border-black/10 dark:border-white/10 text-sm text-[#15100C] dark:text-[#F2E6DC] focus:outline-none focus:border-[#D2392A]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder={t.contact.companyPlaceholder}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#061516] border border-black/10 dark:border-white/10 text-sm text-[#15100C] dark:text-[#F2E6DC] focus:outline-none focus:border-[#D2392A]"
                        />
                      </div>
                      <div>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t.contact.tellUsPlaceholder}
                          rows={3}
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#061516] border border-black/10 dark:border-white/10 text-sm text-[#15100C] dark:text-[#F2E6DC] focus:outline-none focus:border-[#D2392A] resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2.5 rounded-xl bg-[#D2392A] text-white font-semibold text-xs tracking-wide shadow active:scale-95 transition-all flex items-center justify-center gap-2"
                      >
                        <span>{isSubmitting ? (isRTL ? "جارِ الإرسال..." : "Sending...") : t.contact.submit}</span>
                        <Send size={13} className="rtl:rotate-180" />
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Direct Regional WhatsApp Desks */}
          <div className="mt-5 p-3.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#0c1b1c]/90 border border-black/[0.06] dark:border-white/10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D2392A] block mb-2">
              {isRTL ? "التعاقدات المباشرة" : "DIRECT BUSINESS ENQUIRIES"}
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#15100C] dark:text-[#F2E6DC]">
              <a
                href="https://wa.me/201092927390"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 hover:border-[#D2392A] transition-colors"
              >
                <span>🇪🇬 +20 109 292 7390</span>
              </a>
              <a
                href="https://wa.me/971557889692"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 hover:border-[#D2392A] transition-colors"
              >
                <span>🇦🇪 +971 55 788 9692</span>
              </a>
            </div>
          </div>

          {/* Quick Social Icons on Mobile */}
          <div className="mt-4 flex items-center justify-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#0c1b1c] border border-black/10 dark:border-white/15 text-[#15100C] dark:text-[#F2E6DC] hover:text-[#D2392A] hover:border-[#D2392A] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          DESKTOP VIEW (hidden md:block) — Form replaces photo on right,
          social media icons only on left.
          ========================================================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-8 md:px-12">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* LEFT SIDE: Content & Interactive Controls */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start">
            <FadeIn delay={0.1} y={20}>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-5 sm:w-6 h-[2.5px] bg-[#D2392A] inline-block shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#15100C]/75 dark:text-[#F2E6DC]/75">
                  {isRTL ? "تواصل معنا" : "GET IN TOUCH"}
                </span>
              </div>

              {/* Large Headline */}
              <h2
                className="font-black tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.06] mb-3 sm:mb-4"
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
                  fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                }}
              >
                {t.contact.title}
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base leading-relaxed text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-normal max-w-xl mb-5 sm:mb-6">
                {t.contact.sub}
              </p>

              {/* Social Media Links — Icons Only */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#15100C]/50 dark:text-[#F2E6DC]/50 me-1">
                  {isRTL ? "تابعنا:" : "Follow:"}
                </span>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border border-black/[0.08] dark:border-white/10 text-[#15100C] dark:text-[#F2E6DC] hover:text-white hover:bg-[#D2392A] hover:border-[#D2392A] transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* 3 Inquiry Category Selection Cards */}
            <FadeIn delay={0.2} y={20}>
              <div className="mb-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#15100C]/60 dark:text-[#F2E6DC]/60 block mb-2.5">
                  {isRTL ? "اختر موضوع الاستفسار" : "SELECT INQUIRY TOPIC"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* 1. Marketing */}
                  <button
                    type="button"
                    onClick={() => handleInquirySelect("marketing")}
                    className={`group relative flex items-center justify-between gap-2 px-3.5 py-3.5 rounded-2xl transition-all duration-300 text-start select-none cursor-pointer border ${
                      activeCat === "marketing" && formOpen
                        ? "bg-white dark:bg-[#0c1b1c] border-[#D2392A] shadow-[0_8px_24px_rgba(210,57,42,0.12)] ring-1 ring-[#D2392A]/40"
                        : "bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                    }`}
                    aria-expanded={activeCat === "marketing" && formOpen}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                          activeCat === "marketing" && formOpen
                            ? "bg-[#D2392A] text-white"
                            : "bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A]"
                        }`}
                      >
                        <Mail size={15} strokeWidth={2} />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                        {t.contact.cats.marketing}
                      </span>
                    </div>
                  </button>

                  {/* 2. Tech / Creative */}
                  <button
                    type="button"
                    onClick={() => handleInquirySelect("tech")}
                    className={`group relative flex items-center justify-between gap-2 px-3.5 py-3.5 rounded-2xl transition-all duration-300 text-start select-none cursor-pointer border ${
                      activeCat === "tech" && formOpen
                        ? "bg-white dark:bg-[#0c1b1c] border-[#D2392A] shadow-[0_8px_24px_rgba(210,57,42,0.12)] ring-1 ring-[#D2392A]/40"
                        : "bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                    }`}
                    aria-expanded={activeCat === "tech" && formOpen}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                          activeCat === "tech" && formOpen
                            ? "bg-[#D2392A] text-white"
                            : "bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A]"
                        }`}
                      >
                        <Asterisk size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                        {t.contact.cats.tech}
                      </span>
                    </div>
                  </button>

                  {/* 3. Business */}
                  <button
                    type="button"
                    onClick={() => handleInquirySelect("business")}
                    className={`group relative flex items-center justify-between gap-2 px-3.5 py-3.5 rounded-2xl transition-all duration-300 text-start select-none cursor-pointer border ${
                      activeCat === "business" && formOpen
                        ? "bg-white dark:bg-[#0c1b1c] border-[#D2392A] shadow-[0_8px_24px_rgba(210,57,42,0.12)] ring-1 ring-[#D2392A]/40"
                        : "bg-[#FAF7F2] dark:bg-[#0c1b1c]/80 border-black/[0.06] dark:border-white/10 hover:border-[#D2392A]/50 hover:bg-white dark:hover:bg-[#0c1b1c] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                    }`}
                    aria-expanded={activeCat === "business" && formOpen}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                          activeCat === "business" && formOpen
                            ? "bg-[#D2392A] text-white"
                            : "bg-[#D2392A]/[0.08] dark:bg-[#D2392A]/[0.16] text-[#D2392A]"
                        }`}
                      >
                        <Briefcase size={15} strokeWidth={2} />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-[#15100C] dark:text-[#F2E6DC] truncate">
                        {t.contact.cats.business}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Direct Business Enquiries & Regional Desks */}
            <FadeIn delay={0.25} y={20}>
              <div className="mt-3 p-4 sm:p-4.5 rounded-[22px] bg-[#FAF7F2] dark:bg-[#0c1b1c]/90 border border-black/[0.06] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-center sm:text-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D2392A] animate-pulse shrink-0 hidden sm:block" />
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#D2392A] block">
                      {isRTL ? "استفسارات الأعمال والتعاقدات المباشرة" : "DIRECT BUSINESS ENQUIRIES"}
                    </span>
                    <span className="text-[11px] text-[#15100C]/65 dark:text-[#F2E6DC]/65 font-medium">
                      EGYPT · DUBAI · SAUDI ARABIA · QATAR
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#15100C] dark:text-[#F2E6DC]">
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
          </div>

          {/* RIGHT SIDE: Interactive Contact Form (replaces the old studio image) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start">
            <FadeIn delay={0.2} y={20}>
              <div className="rounded-[28px] bg-white dark:bg-[#0c1b1c] border border-black/[0.08] dark:border-white/10 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#D2392A]/10 text-[#D2392A] flex items-center justify-center mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-[#15100C] dark:text-[#F2E6DC] mb-1.5">
                      {isRTL ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
                    </h4>
                    <p className="text-sm text-[#15100C]/70 dark:text-[#F2E6DC]/70 max-w-md">
                      {t.contact.successNote}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setCompany("");
                        setExtraField("");
                        setMessage("");
                      }}
                      className="mt-6 px-5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-semibold hover:border-[#D2392A] hover:text-[#D2392A] transition-colors cursor-pointer"
                    >
                      {isRTL ? "إرسال رسالة أخرى" : "Send another inquiry"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Category guidance note */}
                    <div className="flex items-center gap-2.5 p-3 rounded-[14px] bg-[#FAF6F0] dark:bg-[#061516]/60 border border-black/[0.05] dark:border-white/10 text-xs sm:text-[13px] text-[#15100C]/80 dark:text-[#F2E6DC]/80">
                      <span className="w-2 h-2 rounded-full bg-[#D2392A] shrink-0" />
                      <span className="font-medium">{currentConfig.note}</span>
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

                    {/* Submit Button */}
                    <div className="flex items-center justify-end pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[14px] bg-[#D2392A] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:bg-[#b82f22] active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50"
                      >
                        <span>{isSubmitting ? (isRTL ? "جارِ الإرسال..." : "Sending...") : t.contact.submit}</span>
                        <Send size={14} className="rtl:rotate-180" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
