"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Scroll-animation hook ──────────────────────────────────────────────────
function useFadeUp<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
    const ref = useRef<T>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

export default function AboutPastorsPage() {
    const { ref: mainRef, visible: mainVisible } = useFadeUp();
    const { ref: secondaryRef, visible: secondaryVisible } = useFadeUp();

    return (
        <div className="flex flex-col bg-black">

            {/* ── 1. CINEMATIC HERO ───────────────────────────────────────────── */}
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background with cinematic zoom */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="TNHC Church"
                        fill
                        priority
                        className="object-cover object-bottom opacity-40 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 pt-20">
                    {/* Sub-nav breadcrumb */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12 animate-fade-in">
                        {[
                            { label: "ABOUT", href: "/about" },
                            { label: "PASTORS", href: "/about-pastors" },
                            { label: "HISTORY", href: "/about-history" },
                            { label: "ELDERS", href: "/about-elders" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 ${item.label === "PASTORS"
                                    ? "text-white border-b-2 border-white pb-1"
                                    : "text-stone-500 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <h1 className="text-white text-5xl sm:text-7xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                        OUR<br />PASTORS
                    </h1>
                </div>
            </section>

            {/* ── 2. THE SPOTLIGHT (LEAD PASTORS) ────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-48 relative overflow-hidden">
                <div ref={mainRef} className="w-full max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">

                        {/* Portrait Container */}
                        <div
                            className={`w-full lg:w-1/2 relative transition-all duration-1000 ${mainVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                }`}
                        >
                            <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                                <Image
                                    src="/pastorandwife.jpg"
                                    alt="Pastor David & Vanessa King"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Accent */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--font-accent-color)]/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-[2.5rem] -z-10 rotate-12" />
                        </div>

                        {/* Text Content */}
                        <div
                            className={`w-full lg:w-1/2 flex flex-col gap-10 transition-all duration-1000 delay-200 ${mainVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                }`}
                        >
                            <div>
                                <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-4 block underline decoration-[var(--font-accent-color)] decoration-4 underline-offset-8">Lead Pastors</span>
                                <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.9] tracking-tighter uppercase">
                                    DAVID R. &<br />VANESSA KING
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p
                                    className="text-white text-xl sm:text-2xl leading-relaxed italic font-medium opacity-90"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    David and Vanessa are passionate about reaching the city of Accra, and for our
                                    church to be a true family.
                                </p>
                                <p
                                    className="text-stone-400 text-lg leading-relaxed"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    David is a passionate teacher of God&apos;s Word who believes deeply in the
                                    power of the local church to transform communities. Vanessa brings warmth,
                                    creativity, and a fierce love for people to everything she does.
                                    Together they lead The New House Church with vision, faith, and a whole lot of joy.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6 pt-6">
                                <a
                                    href="https://www.instagram.com/tnhc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                                >
                                    <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--font-accent-color)] transition-colors">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </span>
                                    <span className="text-xs font-black tracking-widest uppercase">@DAVIDRKING</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/tnhc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                                >
                                    <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--font-accent-color)] transition-colors">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </span>
                                    <span className="text-xs font-black tracking-widest uppercase">@VANESSAKING</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. VISUAL BREAK SECTION ────────────────────────────────────── */}
            <section className="w-full h-[50vh] bg-black overflow-hidden relative">
                <Image
                    src="/this-week.jpg"
                    alt="Community"
                    fill
                    className="object-cover opacity-60 scale-110 grayscale"
                />
                <div className="absolute inset-0 bg-black/40" />
            </section>

            {/* ── 4. FINAL CTA ─────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-40 border-t border-white/5">
                <div
                    ref={secondaryRef}
                    className={`w-full max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${secondaryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Take your next step</span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-12">
                        WANT TO LEARN<br />MORE ABOUT US?
                    </h2>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
                        <Link
                            href="/about"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all"
                        >
                            BACK TO ABOUT
                        </Link>
                        <Link
                            href="/about-elders"
                            className="bg-[var(--font-accent-color)] text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-[var(--font-accent-color)]/20"
                        >
                            MEET THE ELDERS
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
