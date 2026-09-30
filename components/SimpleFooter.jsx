"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SimpleFooter() {
  const { isRTL } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="simple-footer">
      <div className="wrap">
        <Link href="/" className="logo small" style={{ color: "var(--cream)", textDecoration: "none" }}>
          AS MAMA SAID<span className="dot-inline"></span>
        </Link>
        <p>
          © {year} As Mama Said. {isRTL ? "القاهرة · دبي" : "Cairo · Dubai"}.
        </p>
      </div>
    </footer>
  );
}
