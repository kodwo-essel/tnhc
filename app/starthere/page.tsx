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

// ─── Scrolling marquee ticker ────────────────────────────────────────────────
function Marquee({ text }: { text: string }) {
    const items = Array(10).fill(text);
    return (
        <div className="w-full overflow-hidden bg-black border-y border-white/5 py-6">
            <div
                className="flex gap-16 w-max"
                style={{ animation: "marquee 30s linear infinite" }}
            >
                {[...items, ...items].map((t, i) => (
                    <span
                        key={i}
                        className="text-xs font-black tracking-[0.4em] uppercase text-stone-800 whitespace-nowrap"
                    >
                        {t} <span className="mx-4 text-stone-900">•</span>
                    </span>
                ))}
            </div>
            <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}

export default function StartHerePage() {
    const { ref: spotlightRef, visible: spotlightVisible } = useFadeUp();
    const { ref: expectationsRef, visible: expectationsVisible } = useFadeUp();
    const { ref: ctaRef, visible: ctaVisible } = useFadeUp();

    return (
        <div className="flex flex-col bg-black">

            {/* ── 1. CINEMATIC HERO ───────────────────────────────────────────── */}
            <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background with cinematic zoom */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Start Here at TNHC"
                        fill
                        priority
                        className="object-cover opacity-40 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 pt-20">
                    <span
                        className="text-xs font-black tracking-[0.4em] uppercase text-stone-400 mb-6 block animate-fade-in"
                    >
                        The journey begins here
                    </span>
                    <h1 className="text-white text-6xl sm:text-8xl lg:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                        START<br />HERE
                    </h1>
                </div>
            </section>

            {/* ── 2. THE SPOTLIGHT (INTRODUCTION) ────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-48 relative overflow-hidden">
                <div ref={spotlightRef} className="w-full max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">

                        {/* Image Side */}
                        <div
                            className={`w-full lg:w-[45%] relative transition-all duration-1000 ${spotlightVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                }`}
                        >
                            <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/logo/photo_2026-02-26_09-44-11.jpg"
                                    alt="First Steps"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--font-accent-color)]/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white/5 rounded-[3rem] -z-10 rotate-12" />
                        </div>

                        {/* Content Side */}
                        <div
                            className={`w-full lg:w-[55%] flex flex-col gap-10 transition-all duration-1000 delay-200 ${spotlightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                }`}
                        >
                            <div>
                                <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-4 block underline decoration-[var(--font-accent-color)] decoration-4 underline-offset-8">Your Invitation</span>
                                <h2 className="text-white text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
                                    STEP INTO LIFE<br />AT TNHC
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <p
                                    className="text-white text-xl sm:text-2xl leading-relaxed italic font-medium opacity-90"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    Start your journey at The New House Church — meet our pastors, and learn
                                    how you can be a part of what God is doing here!
                                </p>
                                <p
                                    className="text-stone-400 text-lg leading-relaxed"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    <strong>Start Here</strong> takes place every 4th Sunday of the month during our
                                    10:00 AM service. We want to help you find your place in the family and
                                    uncover your purpose. Once you fill out the form, our team will reach out
                                    to guide you through your first steps.
                                </p>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="https://forms.gle/placeholder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[var(--font-accent-color)] text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-[var(--font-accent-color)]/20"
                                >
                                    SIGN UP FOR THE NEXT EVENT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. MARQUEE ───────────────────────────────────────────────── */}
            <Marquee text="STEP INTO LIFE AT THE NEW HOUSE CHURCH" />

            {/* ── 4. WHAT TO EXPECT (EXPECTATIONS GRID) ────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-28 sm:py-48">
                <div ref={expectationsRef} className="w-full max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Sunday Experience</span>
                        <h2 className="text-white text-4xl sm:text-6xl font-black tracking-tighter uppercase">WHAT TO EXPECT</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
                        {[
                            {
                                title: "GATHERING TIME",
                                body: "We gather every Sunday at 10:00 AM. Doors open early for coffee and community. Come as you are — there's a seat for you.",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "OUR LOCATION",
                                body: "Find us at our church home. Parking is reserved for you on site, and our welcome team will be there to guide you inside.",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "START HERE EVENT",
                                body: "Join us on the 4th Sunday of the month. It's the best way to meet Pastors David & Vanessa and learn our heart for the city.",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.998 5.998 0 00-12 0m12 0c0-1.657-1.343-3-3-3m-9 3c0-1.657 1.343-3 3-3m9-3a3 3 0 11-6 0 3 3 0 016 0zm-9 3a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )
                            },
                        ].map((item, i) => (
                            <div
                                key={item.title}
                                className={`group flex flex-col transition-all duration-1000 ${expectationsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="w-16 h-16 flex items-center justify-center text-stone-600 mb-8 border border-white/5 rounded-2xl group-hover:text-[var(--font-accent-color)] group-hover:border-[var(--font-accent-color)]/20 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-white text-2xl font-black tracking-tight uppercase mb-4">
                                    {item.title}
                                </h3>
                                <p
                                    className="text-stone-400 text-base leading-relaxed font-medium"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. FINAL VISUAL ────────────────────────────────────────────── */}
            <section className="w-full h-[60vh] relative overflow-hidden">
                <Image
                    src="/hero.jpeg"
                    alt="TNHC Community"
                    fill
                    className="object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </section>

            {/* ── 6. FINAL CTA ─────────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-40">
                <div
                    ref={ctaRef}
                    className={`w-full max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Ready to start?</span>
                    <h2 className="text-white text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-12">
                        YOUR STORY<br />MATTERS TO US.
                    </h2>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
                        <Link
                            href="/new"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all"
                        >
                            PLAN A VISIT
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all"
                        >
                            DISCOVER OUR DNA
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
