"use client";

export default function PageHero({ eyebrow, title, subtitle, curveFill = "#F2E6DC" }) {
  return (
    <section className="page-hero">
      <span className="blob blob-a"></span>
      <span className="blob blob-b"></span>
      <div className="wrap">
        <span className="eyebrow-dot">
          <i></i>
          {eyebrow}
        </span>
        <h1>{title}</h1>
        <p className="sub">{subtitle}</p>
      </div>
      <svg
        className="curve-divider"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,90 L0,40 C240,90 480,90 720,55 C960,20 1200,20 1440,55 L1440,90 Z"
          fill={curveFill}
        ></path>
      </svg>
    </section>
  );
}
