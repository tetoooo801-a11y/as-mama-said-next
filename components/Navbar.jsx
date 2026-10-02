"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Sparkles, Images, User, Send, X, Globe } from "lucide-react";
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
    setMobileMenuOpen(false);
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
    pathname === "/" ||
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

  const isOverDarkHero = !isScrolledPastHero || hasDarkHero;

  return (
    <header className="site-nav show" id="siteNav">
      <div className="w-full flex items-center justify-between" dir="ltr">
        {/* LEFT: Logo (always on the left as requested) */}
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
              isOverDarkHero ? "block" : "hidden dark:block"
            }`}
          />
          <img
            src="/assets/images/ams-logo-lightbg.webp"
            alt="As Mama Said"
            width={54}
            height={48}
            className={`h-11 sm:h-12 w-auto object-contain transition-opacity duration-300 ${
              isOverDarkHero ? "hidden" : "block dark:hidden"
            }`}
          />
        </Link>

        {/* CENTER: Desktop Glassmorphism Navbar (hidden on mobile) */}
        <div className="hidden md:flex">
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
        </div>

        {/* RIGHT: Desktop CTA (hidden on mobile) */}
        <Link href="/contact" className="nav-cta hidden md:inline-flex">
          {t.nav.cta}
        </Link>

        {/* RIGHT: Mobile Hamburger Menu Button (visible on mobile only, matching visual reference) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 focus:outline-none cursor-pointer z-50 active:scale-95 transition-transform"
          aria-label="Open menu"
        >
          <span
            className={`w-6 h-[2.5px] rounded-full transition-colors duration-300 ${
              isOverDarkHero ? "bg-white" : "bg-[#15100C] dark:bg-[#F2E6DC]"
            }`}
          />
          <span
            className={`w-6 h-[2.5px] rounded-full transition-colors duration-300 ${
              isOverDarkHero ? "bg-white" : "bg-[#15100C] dark:bg-[#F2E6DC]"
            }`}
          />
          <span
            className={`w-6 h-[2.5px] rounded-full transition-colors duration-300 ${
              isOverDarkHero ? "bg-white" : "bg-[#15100C] dark:bg-[#F2E6DC]"
            }`}
          />
        </button>
      </div>

      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed inset-0 z-[999] bg-[#061516]/98 backdrop-blur-2xl text-[#F2E6DC] flex flex-col justify-between p-6 sm:p-8 pointer-events-auto"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between w-full pb-6 border-b border-white/10">
              <Link
                href="/"
                onClick={handleLogoClick}
                className="flex items-center"
                aria-label="As Mama Said"
              >
                <img
                  src="/assets/images/ams-logo-darkbg.webp"
                  alt="As Mama Said"
                  width={48}
                  height={42}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-3 py-6 my-auto">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (item.url === "/" && pathname === "/") {
                        if (typeof window !== "undefined" && window.__lenis) {
                          window.__lenis.scrollTo(0, { duration: 1.2 });
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      } else {
                        router.push(item.url);
                      }
                    }}
                    className={`flex items-center justify-between text-start py-2.5 px-3 rounded-xl transition-colors select-none ${
                      isActive
                        ? "text-[#D2392A] bg-white/5 font-bold"
                        : "text-[#F2E6DC]/85 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#D2392A] shrink-0" />
                      )}
                      <span
                        className="text-2xl font-black uppercase tracking-tight"
                        style={{
                          fontFamily: "var(--font-kanit), 'Kanit', sans-serif",
                        }}
                      >
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-white/35 font-mono">
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 transition-colors"
              >
                <Globe size={15} />
                <span>{language === "en" ? "العربية" : "English"}</span>
              </button>

              {/* Main Contact CTA Button */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-[#D2392A] text-white font-bold text-sm tracking-wide text-center shadow-lg active:scale-95 transition-transform"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
