"use client";

import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";

export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };
export type FooterSocial = { label: string; href: string; icon: ReactNode };

export type DitheredFooterProps = {
    brand?: ReactNode;
    /** Where the wordmark links to. */
    brandHref?: string;
    tagline?: string;
    watermark?: string;
    columns?: FooterColumn[];
    socials?: FooterSocial[];
    legal?: FooterLink[];
    copyright?: string;
    /** Link to your real status page, shown with a green dot. Off unless you pass one. */
    status?: FooterLink | null;
    /** Colour of the dot field. It is the footer's only colour, so it carries the brand. */
    accent?: string;
    /** Called with the email address. Resolve to show the success message. */
    onSubscribe?: (email: string) => void | Promise<void>;
    subscribeTitle?: string;
    subscribeButton?: string;
    subscribeSuccess?: string;
    subscribeError?: string;
    backToTop?: string;
    madeBy?: {
        text?: string;
        href?: string;
        logoDark?: string;
        logoWhite?: string;
        alt?: string;
    } | null;
};

const toLinks = (labels: string[]): FooterLink[] =>
    labels.map((label) => ({ label, href: "/" + label.toLowerCase().replace(/\s+/g, "-") }));

const icon = (d: string) => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
);

const DEFAULT_SOCIALS: FooterSocial[] = [
    { label: "X", href: "https://x.com", icon: icon("M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z") },
    { label: "GitHub", href: "https://github.com", icon: icon("M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5") },
    { label: "LinkedIn", href: "https://linkedin.com", icon: icon("M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z") },
];

const DEFAULT_COLUMNS: FooterColumn[] = [
    { title: "Product", links: toLinks(["Features", "Pricing", "Changelog", "Roadmap"]) },
    { title: "Resources", links: toLinks(["Docs", "Guides", "Community", "Blog"]) },
    { title: "Company", links: toLinks(["About", "Careers", "Contact", "Press"]) },
];

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--df-accent)]";
const coarse = "[@media(pointer:coarse)]:inline-flex [@media(pointer:coarse)]:min-h-11 [@media(pointer:coarse)]:items-center";

export default function DitheredFooter({
    brand = "Acme",
    brandHref = "/",
    tagline = "Tools for teams who ship. Built in the open, one release at a time.",
    watermark: _watermark,
    columns = DEFAULT_COLUMNS,
    socials = DEFAULT_SOCIALS,
    legal = toLinks(["Privacy", "Terms"]),
    copyright = `© ${new Date().getFullYear()} Acme, Inc.`,
    status = null,
    accent = "#ff6a00",
    onSubscribe,
    subscribeTitle = "Get product updates by email",
    subscribeButton = "Subscribe",
    subscribeSuccess = "Thanks. You're on the list.",
    subscribeError = "That didn't go through. Please try again.",
    backToTop = "Back to top",
    madeBy = {
        text: "Made by",
        href: "https://sirad.co",
        logoDark: "/assets/images/sirad-logo-dark.png",
        logoWhite: "/assets/images/sirad-logo-white.png",
        alt: "Sirad Creative Agency",
    },
}: DitheredFooterProps) {
    const [email, setEmail] = useState("");
    const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setState("sending");
        try {
            await onSubscribe?.(email);
            setState("done");
            setEmail("");
        } catch {
            setState("error");
        }
    };

    const toTop = () =>
        window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

    return (
        <footer
            className="overflow-hidden text-[#F2E6DC]"
            style={{
                background: "linear-gradient(150deg, #0c2626 0%, #081f20 55%, #061516 100%)",
                "--df-accent": accent,
            } as CSSProperties}
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-8 px-5 py-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:px-8 sm:py-10 md:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]">
                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                    <a
                        href={brandHref}
                        className={`inline-block transition-opacity hover:opacity-85 ${focus}`}
                        style={{ textDecoration: "none" }}
                    >
                        {brand && typeof brand !== "string" ? (
                            brand
                        ) : (
                            <span className="logo small" style={{ color: "#F2E6DC" }}>
                                {brand || "AS MAMA SAID"}<span className="dot-inline"></span>
                            </span>
                        )}
                    </a>
                    <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-[#F2E6DC]/75">{tagline}</p>

                    <form className="mt-5 max-w-sm" onSubmit={submit}>
                        <label htmlFor="df-email" className="block text-xs font-semibold uppercase tracking-wider text-[#F2E6DC]/80">{subscribeTitle}</label>
                        <div className="mt-2 flex gap-2">
                            <input
                                id="df-email"
                                type="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
                                className="h-9 min-w-0 flex-1 rounded-md border border-white/20 bg-white/5 px-3 text-sm text-[#F2E6DC] placeholder:text-[#F2E6DC]/40 transition-colors focus:border-[var(--df-accent)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--df-accent)]"
                            />
                            <button
                                disabled={state === "sending"}
                                className={`h-9 shrink-0 rounded-md bg-[#D2392A] px-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#b82f22] active:scale-[0.97] disabled:opacity-60 ${focus}`}
                            >
                                {state === "sending" ? "..." : subscribeButton}
                            </button>
                        </div>
                        <p role="status" className="mt-1.5 min-h-4 text-xs text-[#F2E6DC]/70">
                            {state === "done" && subscribeSuccess}
                            {state === "error" && subscribeError}
                        </p>
                    </form>
                </div>

                {columns.map((col) => (
                    <nav key={col.title} aria-label={col.title}>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#F2E6DC]">{col.title}</p>
                        <ul className="mt-3 space-y-2">
                            {col.links.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className={`rounded-sm text-sm text-[#F2E6DC]/65 transition-colors hover:text-white ${focus} ${coarse}`}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 text-xs text-[#F2E6DC]/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                        <span className="m-0 leading-none whitespace-nowrap">{copyright}</span>
                        {legal.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className={`m-0 leading-none whitespace-nowrap rounded-sm transition-colors hover:text-white ${focus}`}
                            >
                                {l.label}
                            </a>
                        ))}
                        {status && (
                            <a
                                href={status.href}
                                className={`m-0 inline-flex items-center gap-1.5 leading-none whitespace-nowrap rounded-sm transition-colors hover:text-white ${focus}`}
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                                <span>{status.label}</span>
                            </a>
                        )}
                        {madeBy && (
                            <a
                                href={madeBy.href || "https://sirad.co"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`m-0 inline-flex items-center gap-2 leading-none whitespace-nowrap rounded-sm transition-opacity hover:opacity-80 ${focus}`}
                                aria-label={`${madeBy.text || "Made by"} ${madeBy.alt || "Sirad Creative Agency"}`}
                            >
                                <span className="text-[11px] uppercase tracking-wider text-[#F2E6DC]/60 font-medium">
                                    {madeBy.text || "Made by"}
                                </span>
                                {madeBy.logoWhite && (
                                    <img
                                        src={madeBy.logoWhite}
                                        alt={madeBy.alt || "Sirad"}
                                        className="h-3.5 w-auto object-contain inline-block"
                                    />
                                )}
                            </a>
                        )}
                    </div>
                    <div className="-mr-2 flex items-center gap-1 rtl:-mr-0 rtl:-ml-2">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                target={s.href.startsWith("http") ? "_blank" : undefined}
                                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`grid h-8 w-8 place-items-center rounded-md text-[#F2E6DC]/75 transition-colors hover:bg-white/10 hover:text-white ${focus} [@media(pointer:coarse)]:h-10 [@media(pointer:coarse)]:w-10`}
                            >
                                {s.icon}
                            </a>
                        ))}
                        <span className="mx-2 h-4 w-px bg-white/10" aria-hidden="true" />
                        <button type="button" onClick={toTop} className={`inline-flex items-center gap-1.5 rounded-sm px-1 text-xs text-[#F2E6DC]/75 transition-colors hover:text-white ${focus} ${coarse}`}>
                            {backToTop}
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { DitheredFooter };
