"use client";

import { useState } from "react";

const categoryConfig = {
  marketing: {
    note: "Brand name, budget range, and what you're launching.",
    label: "Budget range",
    placeholder: "e.g. EGP 50,000–100,000",
  },
  tech: {
    note: "What you're building, current stack, and rough timeline.",
    label: "Current stack",
    placeholder: "e.g. Next.js, Supabase",
  },
  business: {
    note: "A short line on what you need — we'll route it to the right person.",
    label: "What you need",
    placeholder: "e.g. partnership, press, other",
  },
};

export default function Contact() {
  const [activeCat, setActiveCat] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCategorySelect = (cat) => {
    setActiveCat(cat);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentConfig = activeCat ? categoryConfig[activeCat] : categoryConfig.marketing;

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Tell us what you're building.</h2>
        <p className="sub">
          Pick what fits closest — we'll route it to the right person and reply within
          two working days.
        </p>

        <div className="socials">
          <a
            className="social-chip glass"
            href="https://www.instagram.com/as.mama.said"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="social-chip glass"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            className="social-chip glass"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <div className="cats" id="cats">
          <button
            type="button"
            className={`cat-btn glass ${activeCat === "marketing" ? "active" : ""}`}
            onClick={() => handleCategorySelect("marketing")}
          >
            Marketing
          </button>
          <button
            type="button"
            className={`cat-btn glass ${activeCat === "tech" ? "active" : ""}`}
            onClick={() => handleCategorySelect("tech")}
          >
            Tech
          </button>
          <button
            type="button"
            className={`cat-btn glass ${activeCat === "business" ? "active" : ""}`}
            onClick={() => handleCategorySelect("business")}
          >
            Business / Other
          </button>
        </div>

        <div
          className={`contact-form ${activeCat ? "open" : ""}`}
          id="contactForm"
        >
          <div className="inner glass">
            <div className="form-note" id="formNote">
              {submitted
                ? "Thanks — we'll be in touch within two working days."
                : currentConfig.note}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Company</label>
                <input type="text" placeholder="Company or brand" />
              </div>
              <div className="field" id="extraField">
                <label>{currentConfig.label}</label>
                <input type="text" placeholder={currentConfig.placeholder} />
              </div>
              <div className="field">
                <label>Tell us about it</label>
                <textarea placeholder="What are you launching, and when?"></textarea>
              </div>
              <button className="btn btn-primary submit-btn" type="submit">
                Send it over
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
