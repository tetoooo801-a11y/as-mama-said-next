"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SharedCta() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="wrap">
      <div className="cta-band">
        <h2>
          {isRTL
            ? "عندك فكرة تستحق تتقال وتتعمل صح؟"
            : "Got something worth saying properly?"}
        </h2>
        <Link href="/contact" className="btn">
          {t.nav.cta}
        </Link>
      </div>
    </section>
  );
}
