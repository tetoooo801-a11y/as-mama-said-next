"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".svc-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: i * 0.06,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef}>
      <div className="wrap">
        <div className="head">
          <h2>Four ways we get a business talked about.</h2>
          <p>
            Every project runs through the same room: strategy first, then the craft that
            makes people stop scrolling.
          </p>
        </div>
        <div className="services-grid">
          <div className="svc-card">
            <div className="svc-num">Brand identity</div>
            <h3>Names, marks, and the voice behind them</h3>
            <p>
              Positioning, logotype systems, and a tone of voice a whole team can write in
              without sounding like a manual.
            </p>
          </div>
          <div className="svc-card">
            <div className="svc-num">Social & content</div>
            <h3>A feed people actually follow</h3>
            <p>
              Editorial calendars, community management, and content built to be shared,
              not just posted.
            </p>
          </div>
          <div className="svc-card">
            <div className="svc-num">Cinematic video</div>
            <h3>Films, not filler</h3>
            <p>
              Direction, production, and edit for brand films, product launches, and
              reels shot to hold attention.
            </p>
          </div>
          <div className="svc-card">
            <div className="svc-num">Paid campaigns</div>
            <h3>Media that pays for itself</h3>
            <p>
              Cross-platform buying and creative testing built around numbers, not vibes —
              reported plainly, every week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
