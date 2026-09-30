"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Sparkles, Award, User, Handshake, Send } from "lucide-react";
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const { language, toggleLanguage, t } = useLanguage();

  const isHome = pathname === "/";

  const getActiveFromPath = () => {
    if (pathname === "/services" || pathname === "/collaborations" || pathname === "/collab") return "services";
    if (pathname === "/results") return "results";
    if (pathname === "/about") return "about";
    if (pathname === "/contact") return "contact";
    return "home";
  };

  const [activeSection, setActiveSection] = useState(getActiveFromPath());
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveSection(getActiveFromPath());
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", name: t.nav.home, url: "/", icon: Home },
    { id: "about", name: t.nav.about, url: "/about", icon: User },
    { id: "services", name: t.nav.services, url: "/services", icon: Sparkles },
    { id: "results", name: t.nav.results, url: "/results", icon: Award },
    { id: "contact", name: t.nav.contact, url: "/contact", icon: Send },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isHome) {
      if (navRef.current) {
        navRef.current.classList.add("show");
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#hero-pin",
        start: "top top+=1",
        end: "bottom top",
        onEnter: () => {
          if (navRef.current) navRef.current.classList.add("show");
        },
        onLeaveBack: () => {
          if (navRef.current) navRef.current.classList.remove("show");
        },
      });

      // Synchronize home when inside hero section
      ScrollTrigger.create({
        trigger: "#hero-pin",
        start: "top top",
        end: "bottom 60%",
        onEnter: () => setActiveSection("home"),
        onEnterBack: () => setActiveSection("home"),
      });

      // Synchronize active nav item with page scroll position
      [
        { id: "about", url: "#about" },
        { id: "services", url: "#services" },
        { id: "results", url: "#results" },
        { id: "collab", url: "#collab" },
        { id: "contact", url: "#contact" },
      ].forEach((item) => {
        const el = document.querySelector(item.url);
        if (el) {
          ScrollTrigger.create({
            trigger: el,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => setActiveSection(item.id),
            onEnterBack: () => setActiveSection(item.id),
          });
        }
      });
    });

    return () => ctx.revert();
  }, [isHome]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveSection("home");
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className={`site-nav ${!isHome ? "show" : ""} ${!isHome && isScrolled ? "scrolled" : ""}`}
      id="siteNav"
      ref={navRef}
    >
      <a
        href="/"
        onClick={handleLogoClick}
        className="logo small transition-colors duration-300"
        style={{
          textDecoration: "none",
          color: !isHome && !isScrolled ? "#FAF6F0" : "var(--theme-text)",
        }}
      >
        AS MAMA SAID<span className="dot-inline"></span>
      </a>

      <GlassmorphismNavBar
        items={navItems}
        defaultTheme="light"
        activeItem={activeSection}
        onItemSelect={(item) => setActiveSection(item.id || item.name)}
        language={language}
        onLanguageToggle={toggleLanguage}
      />

      <Link href="/contact" className="nav-cta hidden sm:inline-flex">
        {t.nav.cta}
      </Link>
    </header>
  );
}
