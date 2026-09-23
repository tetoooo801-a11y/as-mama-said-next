"use client";

import { useState } from "react";

const projects = [
  {
    tag: "Food & beverage",
    title: "Sundown Foods — Launch film",
    desc: "A 45-second brand film that opened a new product line across three markets.",
  },
  {
    tag: "Logistics",
    title: "Nile Freight — Full rebrand",
    desc: "Identity, fleet livery, and a site rebuilt around one promise: on time, every time.",
  },
  {
    tag: "Real estate",
    title: "Verde Living — Campaign",
    desc: "A launch campaign for a new development, from teaser films to sales-floor screens.",
  },
  {
    tag: "Hospitality",
    title: "Sette Café — Social system",
    desc: "A content system that took a single café from neighbourhood spot to city-wide name.",
  },
];

export default function Results() {
  const [index, setIndex] = useState(0);
  const [flickering, setFlickering] = useState(false);

  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

  const handleSlide = (dir) => {
    setFlickering(true);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + projects.length) % projects.length);
    }, 90);
    setTimeout(() => {
      setFlickering(false);
    }, 320);
  };

  const current = projects[index];

  return (
    <section id="results">
      <div className="wrap">
        <div className="head">
          <h2>This is what we made.</h2>
          <p>A handful of the briefs that turned into work we're proud to show.</p>
        </div>
        <div className="results-tv">
          <div>
            <div className="tv-shell">
              <div
                className={`screen2 ${flickering ? "flicker" : ""}`}
                id="projScreen"
              >
                <div className="proj-tag" id="projTag">
                  {current.tag}
                </div>
                <div className="proj-title" id="projTitle">
                  {current.title}
                </div>
                <div className="proj-desc" id="projDesc">
                  {current.desc}
                </div>
              </div>
            </div>
            <div className="tv-controls">
              <button
                className="tv-arrow"
                id="prevBtn"
                aria-label="Previous project"
                onClick={() => handleSlide(-1)}
              >
                &#8592;
              </button>
              <button
                className="tv-arrow"
                id="nextBtn"
                aria-label="Next project"
                onClick={() => handleSlide(1)}
              >
                &#8594;
              </button>
              <span className="tv-count" id="tvCount">
                {pad(index + 1)} / {pad(projects.length)}
              </span>
            </div>
          </div>
          <div className="results-side">
            <div className="kicker">Cairo and Dubai, on screen.</div>
            <p>
              From a single reel to a full rebrand, every project here started the same
              way — a client with a story worth telling properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
