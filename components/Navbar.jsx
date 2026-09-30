"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Sparkles, Images, User, Send } from "lucide-react";
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
    if (path.startsWith("/results") || path.startsWith("/gallery")) return "gallery";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/contact")) return "contact";
    return "home";
  };

  const activeSection = getActiveFromPath(pathname);

  const navItems = [
    { id: "home", name: t.nav.home, url: "/", icon: Home },
    { id: "about", name: t.nav.about, url: "/about", icon: User },
    { id: "services", name: t.nav.services, url: "/services", icon: Sparkles },
    { id: "gallery", name: t.nav.results, url: "/gallery", icon: Images },
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

  const hasDarkHero =
    pathname === "/about" ||
    pathname === "/services" ||
    pathname === "/results" ||
    pathname === "/gallery" ||
    pathname === "/contact";
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="site-nav show" id="siteNav">
      <Link
        href="/"
        onClick={handleLogoClick}
        className="flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
        aria-label="As Mama Said"
      >
        <img
          src="/assets/images/ams-logo-darkbg.webp"
          alt="As Mama Said"
          width={54}
          height={48}
          className={`h-11 sm:h-12 w-auto object-contain transition-opacity duration-300 ${
            hasDarkHero && !isScrolledPastHero ? "block" : "hidden dark:block"
          }`}
        />
        <img
          src="/assets/images/ams-logo-lightbg.webp"
          alt="As Mama Said"
          width={54}
          height={48}
          className={`h-11 sm:h-12 w-auto object-contain transition-opacity duration-300 ${
            hasDarkHero && !isScrolledPastHero ? "hidden" : "block dark:hidden"
          }`}
        />
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
