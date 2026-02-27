"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// Fade-up animation hook
// ─────────────────────────────────────────────────────────────
function useFadeUp<T extends HTMLElement = HTMLDivElement>(threshold = 0.05) {
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

// ─────────────────────────────────────────────────────────────
// Page component
// ─────────────────────────────────────────────────────────────
export default function BaptismPage() {
    const { ref: heroRef, visible: heroVisible } = useFadeUp(0.02);
    const { ref: photoRef, visible: photoVisible } = useFadeUp(0.05);
    const { ref: textRef, visible: textVisible } = useFadeUp(0.05);

    return (
        <div className="flex flex-col bg-white">

            {/* ── 1. HERO ──────────────────────────────────────────────────── */}
            <section className="relative w-full h-[60vh] sm:h-[70vh] flex items-end justify-start overflow-hidden">
                {/* Background photo */}
                <Image
                    src="/hero.jpg"
                    alt="Baptism at The New House Church"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Very light overlay — mirrors the 0.14 opacity from Squarespace */}
                <div className="absolute inset-0 bg-black/40" />

                {/* "BAPTISM" heading — bottom-left aligned like the original */}
                <div
                    ref={heroRef}
                    className={`relative z-10 px-8 pb-12 sm:px-16 sm:pb-16 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <h1
                        className="font-bold text-white leading-none"
                        style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "0.06em" }}
                    >
                        BAPTISM
                    </h1>
                </div>
            </section>

            {/* ── 2. CONTENT SECTION ───────────────────────────────────────── */}
            {/*
        Layout mirrors the Squarespace grid:
          Left col  — portrait photo (baptisms-59)
          Center    — heading + description + CTA
          Right col — two stacked photos (baptisms-32 portrait + baptismsunday-82 landscape)
      */}
            <section className="w-full bg-white py-20 sm:py-28">
                <div className="w-full max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-8 items-center">

                        {/* ── Left photo ──────────────────────────────────────────── */}
                        <div
                            ref={photoRef}
                            className={`hidden lg:block transition-all duration-700 delay-0 ${photoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md bg-stone-100">
                                <Image
                                    src="/speaker.jpg"
                                    alt="Baptism moment"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* ── Center text ─────────────────────────────────────────── */}
                        <div
                            ref={textRef}
                            className={`flex flex-col gap-6 items-center text-center transition-all duration-700 delay-100 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            {/* Eyebrow */}
                            <p className="text-xs font-bold tracking-[0.25em] uppercase text-stone-400">
                                The New House Church
                            </p>

                            {/* Heading — "Raised to Life in Jesus" */}
                            <h2
                                className="font-bold text-black leading-tight"
                                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
                            >
                                Raised to<br />Life in Jesus
                            </h2>

                            {/* Divider */}
                            <div className="w-12 h-0.5 bg-black opacity-20 mx-auto" />

                            {/* Description — from the Squarespace HTML */}
                            <div
                                className="text-stone-600 text-base leading-relaxed max-w-sm"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                <p>
                                    Baptism is a beautiful moment of public declaration of your
                                    relationship with Jesus!
                                </p>
                                <p className="mt-3">
                                    We&apos;re excited that you&apos;re considering taking this
                                    amazing step in your journey.
                                </p>
                                <p className="mt-3">
                                    To learn more and to sign up, click below.
                                </p>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://tnhc.ccbchurch.com/goto/forms/419/responses/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block bg-black text-white font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-lg hover:opacity-70 transition"
                            >
                                Sign Up
                            </a>
                        </div>

                        {/* ── Right photos (stacked) ───────────────────────────────── */}
                        <div
                            className={`hidden lg:flex flex-col gap-5 transition-all duration-700 delay-200 ${photoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            {/* Tall portrait */}
                            <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md bg-stone-100">
                                <Image
                                    src="/prayer.jpg"
                                    alt="Baptism community"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Landscape */}
                            <div className="w-full aspect-[3/2] relative rounded-2xl overflow-hidden shadow-md bg-stone-100">
                                <Image
                                    src="/hero.jpg"
                                    alt="Baptism Sunday"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Mobile: single photo below text */}
                    <div className="lg:hidden mt-10 w-full aspect-video relative rounded-2xl overflow-hidden shadow-md bg-stone-100">
                        <Image
                            src="/speaker.jpg"
                            alt="Baptism at TNHC"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ── 3. SCRIPTURE BANNER ──────────────────────────────────────── */}
            <div className="w-full bg-[#F9F8F5] py-10 px-6 text-center">
                <p
                    className="text-stone-600 text-sm sm:text-base italic max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                    &ldquo;We were therefore buried with him through baptism into death in order that,
                    just as Christ was raised from the dead through the glory of the Father,
                    we too may live a new life.&rdquo;
                </p>
                <p className="text-stone-400 text-xs mt-2 tracking-wider uppercase">
                    Romans 6:4
                </p>
            </div>

            {/* ── 4. FOOTER CTA ────────────────────────────────────────────── */}
            <section className="w-full bg-black py-14">
                <div className="w-full max-w-3xl mx-auto px-6 text-center">
                    <p
                        className="text-stone-400 text-sm mb-6"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        Ready to take the next step?
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://tnhc.ccbchurch.com/goto/forms/419/responses/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black font-bold text-sm px-8 py-4 rounded-lg hover:opacity-80 transition"
                        >
                            SIGN UP FOR BAPTISM
                        </a>
                        <Link
                            href="/starthere"
                            className="border-2 border-white text-white font-bold text-sm px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
                        >
                            START HERE
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
