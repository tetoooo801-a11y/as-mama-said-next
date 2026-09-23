"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="site-nav" id="siteNav" ref={navRef}>
      <span className="logo small">
        AS MAMA SAID<span className="dot-inline"></span>
      </span>
      <nav className="nav-pill glass">
        <a href="#services">Services</a>
        <a href="#results">Results</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="nav-cta">
        Start a project
      </a>
    </header>
  );
}
