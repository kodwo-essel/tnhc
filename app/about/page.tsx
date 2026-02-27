"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Scroll-animation hook ──────────────────────────────────────────────────
function useFadeUp(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
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

export default function AboutPage() {
    // Animation refs
    const welcomeAnim = useFadeUp();
    const visionAnim = useFadeUp();
    const valuesAnim = useFadeUp();
    const creedAnim = useFadeUp();
    const ctaAnim = useFadeUp();

    return (
        <div className="flex flex-col bg-black">

            {/* ── 1. CINEMATIC HERO ───────────────────────────────────────────── */}
            <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background with cinematic zoom */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="TNHC Church"
                        fill
                        priority
                        className="object-cover opacity-40 animate-slow-zoom"
                    />
                    {/* Gradient Overlay for moody feel */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 pt-20">
                    <span
                        className="text-xs sm:text-sm font-black tracking-[0.4em] uppercase text-stone-400 mb-6 block animate-fade-in"
                    >
                        Learn our story
                    </span>
                    <h1 className="text-white text-6xl sm:text-8xl lg:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase mb-12">
                        ABOUT<br />TNHC
                    </h1>

                    {/* Quick navigation */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-12 animate-fade-in delay-500">
                        {[
                            { label: "Our Story", href: "#story" },
                            { label: "Vision", href: "#vision" },
                            { label: "Values", href: "#values" },
                            { label: "Pastors", href: "/about-pastors" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-stone-400 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase hover:text-[var(--font-accent-color)] transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>


            </section>

            {/* ── 2. THE NOTE (INTRO) ─────────────────────────────────────────── */}
            <section id="story" className="w-full bg-[#F2F0EB] py-28 sm:py-40 md:rounded-t-[4rem] relative z-20 -mt-10">
                <div ref={welcomeAnim.ref} className="w-full max-w-4xl mx-auto px-6 text-center">
                    <span
                        className={`inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-black tracking-widest uppercase text-stone-500 mb-8 transition-all duration-1000 ${welcomeAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        A note for you
                    </span>
                    <h2
                        className={`text-black text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter uppercase mb-12 transition-all duration-1000 delay-100 ${welcomeAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        WE ARE A DIVERSE,<br className="hidden sm:block" /> MULTI-GENERATIONAL<br className="hidden sm:block" /> FAMILY.
                    </h2>
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-200 ${welcomeAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <p
                            className="text-black text-xl sm:text-2xl leading-relaxed italic font-medium"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            TNHC isn&apos;t just a building or a meeting. It&apos;s a gathering of people
                            from all walks of life, united by one goal: connecting people to Jesus and to each other.
                        </p>
                        <p
                            className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            We gather in Accra, Ghana, with a passion for our city that never ends.
                            We believe God loves Ghana, and we will keep doing all that we can to share
                            His love — until all of Accra is saved.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 3. VISION ────────────────────────────────────────────────────── */}
            <section id="vision" className="w-full bg-black py-28 sm:py-48 relative overflow-hidden border-y border-white/5">
                {/* Background Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--font-accent-color)]/5 rounded-full blur-[120px] pointer-events-none" />

                <div ref={visionAnim.ref} className="w-full max-w-5xl mx-auto px-6 text-center relative z-10">
                    <div
                        className={`transition-all duration-1000 ${visionAnim.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Our Vision</span>
                        <h2 className="text-white text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase mb-4">
                            ACCRA<br />IS SAVED
                        </h2>
                        <div className="w-24 h-1 bg-[var(--font-accent-color)] mx-auto mt-8" />
                    </div>
                </div>
            </section>

            {/* ── 4. VALUES ────────────────────────────────────────────────────── */}
            <section id="values" className="w-full bg-[#0A0A0A] py-28 sm:py-40">
                <div ref={valuesAnim.ref} className="w-full max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 transition-all duration-1000">
                        <div className="max-w-xl">
                            <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-4 block">Our DNA</span>
                            <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.9] tracking-tighter uppercase">
                                VALUES WE<br />LIVE BY
                            </h2>
                        </div>
                        <p className="text-stone-400 text-lg max-w-md font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                            These are the pillars that hold up the house. They guide how we serve, how we lead, and how we love.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "BUILD THE HOUSE",
                                body: "We are committed to building a healthy, thriving local church — one where people encounter God and grow together in community.",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                )
                            },
                            {
                                title: "CARRY THE VISION",
                                body: "Every member carries the vision of the house. We're not passengers — we're participants in reaching our city with the gospel.",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-1.333-2.6 3.75 3.75 0 002.763 6.52z" />
                                    </svg>
                                )
                            },
                            {
                                title: "MAKE DISCIPLES",
                                body: "Our mission doesn't end at salvation. We're called to walk alongside people and help them grow into mature followers of Jesus.",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 006.16 11.79a14.98 14.98 0 01-6.16 12.12 14.98 14.98 0 016.16-11.79" />
                                    </svg>
                                )
                            },
                        ].map((item, i) => (
                            <div
                                key={item.title}
                                className={`group bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 ${valuesAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center text-white/40 mb-8 group-hover:text-[var(--font-accent-color)] transition-colors duration-500">
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

            {/* ── 5. CREED ─────────────────────────────────────────────────────── */}
            <section className="w-full bg-[#111111] py-28 sm:py-48 relative overflow-hidden">
                {/* Background texture/grain overlay */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('/grain.png')]" />

                <div ref={creedAnim.ref} className="w-full max-w-4xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 animate-fade-in">
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Our Heartbeat</span>
                        <h2 className="text-white text-4xl sm:text-5xl font-black tracking-tighter uppercase">The TNHC Creed</h2>
                        <div className="w-16 h-1 bg-[var(--font-accent-color)] mx-auto mt-6" />
                    </div>

                    <div
                        className={`flex flex-col gap-8 transition-all duration-1000 ${creedAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        {[
                            "We see a city in revival. Where the lost are found and the found are discipled.",
                            "We see fear, anxiety, and depression bowing to King Jesus, the name above every other name.",
                            "God fill us before you use us. Anoint us before you bless us. Humble us so you can raise us up.",
                            "We are who you say we are. We're your sons and daughters.",
                            "We are your burning ones. We are the righteousness of God.",
                            "You're not done with Accra — So neither are we.",
                            "Our vision is clear and God is with us.",
                            "Until all of Accra is saved.",
                        ].map((line, i) => (
                            <p
                                key={i}
                                className={`text-center transition-all duration-700 ${i === 7
                                    ? "text-white font-black uppercase tracking-tighter text-3xl sm:text-5xl lg:text-7xl mt-12"
                                    : "text-stone-300 text-lg sm:text-2xl italic font-medium opacity-70"
                                    }`}
                                style={i !== 7 ? { fontFamily: "var(--font-dm-sans)" } : {}}
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. FINAL CTA ─────────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-40">
                <div
                    ref={ctaAnim.ref}
                    className={`w-full max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${ctaAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Next steps</span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-12">
                        READY TO BE PART<br />OF THE STORY?
                    </h2>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
                        <Link
                            href="/starthere"
                            className="text-stone-400 font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            START HERE
                        </Link>
                        <Link
                            href="/new"
                            className="text-stone-400 font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            PLAN A VISIT
                        </Link>
                        <Link
                            href="/about-pastors"
                            className="text-stone-400 font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            MEET THE PASTORS <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

