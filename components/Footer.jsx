"use client";

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
        { label: t.nav.results, href: "/results" },
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
        { label: "Facebook", href: "https://www.facebook.com/as.mama.said" },
      ],
    },
    {
      title: t.footer.contact,
      links: [
        { label: "hello@asmamasaid.com", href: "mailto:hello@asmamasaid.com" },
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
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.33a6.33 6.33 0 0 0-.84-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.88 1.6v-3.48a4.85 4.85 0 0 1-1.11-.14z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/as.mama.said",
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
    <DitheredFooter
      brand={
        <span className="logo small" style={{ color: "var(--theme-text)" }}>
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
  );
}
