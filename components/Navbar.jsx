"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Sparkles, Award, User, Send } from "lucide-react";
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, toggleLanguage, t } = useLanguage();

  // Purely URL-driven active item - does not move on scroll
  const getActiveFromPath = (path) => {
    if (!path || path === "/") return "home";
    if (path.startsWith("/services") || path.startsWith("/collab")) return "services";
    if (path.startsWith("/results")) return "results";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/contact")) return "contact";
    return "home";
  };

  const activeSection = getActiveFromPath(pathname);

  const navItems = [
    { id: "home", name: t.nav.home, url: "/", icon: Home },
    { id: "about", name: t.nav.about, url: "/about", icon: User },
    { id: "services", name: t.nav.services, url: "/services", icon: Sparkles },
    { id: "results", name: t.nav.results, url: "/results", icon: Award },
    { id: "contact", name: t.nav.contact, url: "/contact", icon: Send },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
  };

  return (
    <header className="site-nav show" id="siteNav">
      <Link
        href="/"
        onClick={handleLogoClick}
        className="logo small transition-colors duration-300"
        style={{
          textDecoration: "none",
          color: "var(--theme-text)",
        }}
      >
        AS MAMA SAID<span className="dot-inline"></span>
      </Link>

      <GlassmorphismNavBar
        items={navItems}
        defaultTheme="light"
        activeItem={activeSection}
        onItemSelect={(item) => {
          if (item.url) {
            if (item.url === "/" && pathname === "/") {
              if (typeof window !== "undefined" && window.__lenis) {
                window.__lenis.scrollTo(0, { duration: 1.2 });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            } else {
              router.push(item.url);
            }
          }
        }}
        language={language}
        onLanguageToggle={toggleLanguage}
      />

      <Link href="/contact" className="nav-cta hidden sm:inline-flex">
        {t.nav.cta}
      </Link>
    </header>
  );
}
