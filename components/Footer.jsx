"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import DitheredFooter from "@/components/ui/dithered-footer";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: t.footer.site,
      links: [
        { label: t.nav.home, href: "/" },
        { label: t.nav.services, href: "/services" },
        { label: t.nav.results, href: "/gallery" },
        { label: t.nav.about, href: "/about" },
        { label: t.nav.collab, href: "/services#collab" },
        { label: t.nav.contact, href: "/contact" },
      ],
    },
    {
      title: t.footer.social,
      links: [
        { label: "Instagram", href: "https://www.instagram.com/as.mama.said" },
        { label: "TikTok", href: "https://www.tiktok.com/@as.mama.said" },
        { label: "Vimeo", href: "https://vimeo.com/asmamasaideg?fl=pp&fe=sh" },
        { label: "Facebook", href: "https://www.facebook.com/share/1DfcDiWsnK/" },
      ],
    },
    {
      title: t.footer.contact,
      links: [
        {
          label: "info@as-mama-said.com",
          href: "mailto:info@as-mama-said.com",
          icon: <Mail className="w-4 h-4 text-[#D2392A] shrink-0" strokeWidth={2} />,
        },
        {
          label: t.footer.location || (isRTL ? "القاهرة · دبي" : "Cairo · Dubai"),
          href: "/contact",
        },
      ],
    },
  ];

  const socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/as.mama.said",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@as.mama.said",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      label: "Vimeo",
      href: "https://vimeo.com/asmamasaideg?fl=pp&fe=sh",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.135L0 7.197c1.185-1.044 2.351-2.083 3.501-3.123 1.577-1.418 2.766-2.158 3.567-2.222 1.88-.156 3.037.979 3.475 3.407.472 2.607.8 4.246.983 4.917.55 2.484 1.15 3.727 1.802 3.727.495 0 1.233-.655 2.213-1.966.979-1.309 1.503-2.309 1.57-2.999.123-1.171-.341-1.758-1.393-1.758-.517 0-1.054.12-1.611.359 1.066-3.486 3.102-5.181 6.108-5.084 2.226.07 3.327 1.341 3.303 3.811z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1DfcDiWsnK/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  const legal = [
    {
      label: t.footer.tagline || "Mama said it. We made it.",
      href: "/",
    },
  ];

  return (
    <>
      {/* =========================================================
          LIVING ANIMATED UNDULATING WAVE (Inverted & Facing Upwards)
          - Placed above the footer
          - Flipped vertically (scaleY(-1)) so the organic wave arches upwards into the cream page
          - Sits seamlessly atop the dark pine gradient footer
          ========================================================= */}
      <div
        className="relative w-full overflow-hidden leading-none pointer-events-none select-none z-10"
        style={{
          background: "linear-gradient(150deg, #0c2626 0%, #081f20 55%, #061516 100%)",
          marginBottom: "-1px",
        }}
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full block"
          style={{
            height: "clamp(48px, 5.5vw, 76px)",
            transform: "scaleY(-1)",
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
            fill="var(--theme-bg, #FAF6F0)"
            opacity={0.38}
          />

          {/* Primary living organic wave */}
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
            fill="var(--theme-bg, #FAF6F0)"
          />
        </svg>
      </div>

      {/* =========================================================
          MOBILE VIEW (md:hidden) — Compact reference footer
          - Studio Logo
          - Clean Socials row
          - Copyright & Made by
          - Consistent px-6 padding
          ========================================================= */}
      <footer
        className="block md:hidden w-full text-[#F2E6DC] px-6 py-8 transition-colors"
        style={{ background: "linear-gradient(150deg, #0c2626 0%, #081f20 55%, #061516 100%)" }}
      >
        <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-4">
          {/* Logo */}
          <a href="/" className="inline-block" style={{ textDecoration: "none" }}>
            <span
              className="font-black text-lg tracking-tight uppercase text-[#F2E6DC]"
              style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
            >
              AS MAMA SAID<span className="text-[#D2392A]">.</span>
            </span>
          </a>

          {/* Email Link */}
          <a
            href="mailto:info@as-mama-said.com"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#F2E6DC]/85 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D2392A] shrink-0" strokeWidth={2} />
            <span>info@as-mama-said.com</span>
          </a>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#F2E6DC]/85 hover:text-white hover:bg-[#D2392A] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Made By */}
          <div className="flex flex-col items-center gap-1.5 text-xs text-[#F2E6DC]/60 pt-2 border-t border-white/10 w-full">
            <span>© {currentYear} {t.footer.rights}</span>
            <a
              href="https://sirad.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-[#F2E6DC]/50 hover:text-[#D2392A] transition-colors"
            >
              <span>Made by Sirad</span>
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================
          DESKTOP VIEW (hidden md:block) — Full rich DitheredFooter
          ========================================================= */}
      <div className="hidden md:block">
        <DitheredFooter
          brand={
            <span className="logo small" style={{ color: "#F2E6DC" }}>
              AS MAMA SAID<span className="dot-inline"></span>
            </span>
          }
          brandHref="/"
          watermark="AS MAMA SAID"
          tagline={t.footer.desc}
          columns={columns}
          socials={socials}
          legal={legal}
          copyright={`© ${currentYear} ${t.footer.rights}`}
          status={{
            label: t.footer.location || (isRTL ? "القاهرة · دبي" : "Cairo · Dubai"),
            href: "/contact",
          }}
          madeBy={{
            text: "Made by",
            href: "https://sirad.co",
            logoDark: "/assets/images/sirad-logo-dark.png",
            logoWhite: "/assets/images/sirad-logo-white.png",
            alt: "Sirad Creative Agency",
          }}
          accent="#D2392A"
          subscribeTitle={
            isRTL ? "اشترك في نشرتنا البريدية" : "Get studio updates by email"
          }
          subscribeButton={isRTL ? "اشتراك" : "Subscribe"}
          subscribeSuccess={
            isRTL
              ? "شكراً لك. تم تسجيل بريدك الإلكتروني بنجاح."
              : "Thanks. You're on the list."
          }
          subscribeError={
            isRTL
              ? "حدث خطأ. يرجى المحاولة مرة أخرى."
              : "That didn't go through. Please try again."
          }
          backToTop={isRTL ? "العودة للأعلى" : "Back to top"}
          onSubscribe={async (email) => {
            await new Promise((resolve) => setTimeout(resolve, 600));
          }}
        />
      </div>
    </>
  );
}
