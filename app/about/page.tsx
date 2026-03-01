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

export default function AboutPage() {
    // Animation refs
    const { ref: welcomeRef, visible: welcomeVisible } = useFadeUp();
    const { ref: visionRef, visible: visionVisible } = useFadeUp();
    const { ref: valuesRef, visible: valuesVisible } = useFadeUp();
    const { ref: creedRef, visible: creedVisible } = useFadeUp();
    const { ref: ctaRef, visible: ctaVisible } = useFadeUp();

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
                        className="object-cover object-bottom opacity-40 animate-slow-zoom"
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
                <div ref={welcomeRef} className="w-full max-w-4xl mx-auto px-6 text-center">
                    <span
                        className={`inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-black tracking-widest uppercase text-stone-500 mb-8 transition-all duration-1000 ${welcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        A note for you
                    </span>
                    <h2
                        className={`text-black text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter uppercase mb-12 transition-all duration-1000 delay-100 ${welcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        WE ARE A DIVERSE,<br className="hidden sm:block" /> MULTI-GENERATIONAL<br className="hidden sm:block" /> FAMILY.
                    </h2>
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-200 ${welcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                            We believe God loves Ghana, and we will keep doing all that we can — raising the people to become like Christ.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 3. VISION ────────────────────────────────────────────────────── */}
            <section id="vision" className="w-full bg-black py-28 sm:py-48 relative overflow-hidden border-y border-white/5">
                {/* Background Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--font-accent-color)]/5 rounded-full blur-[120px] pointer-events-none" />

                <div ref={visionRef} className="w-full max-w-5xl mx-auto px-6 text-center relative z-10">
                    <div
                        className={`transition-all duration-1000 ${visionVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Our Vision</span>
                        <h2 className="text-white text-5xl sm:text-7xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter uppercase mb-4">
                            RAISING<br />THE PEOPLE
                        </h2>
                        <div className="w-24 h-1 bg-[var(--font-accent-color)] mx-auto mt-8" />
                    </div>
                </div>
            </section>

            {/* ── 4. VALUES ────────────────────────────────────────────────────── */}
            <section id="values" className="w-full bg-[#0A0A0A] py-28 sm:py-40">
                <div ref={valuesRef} className="w-full max-w-7xl mx-auto px-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. The Word",
                                body: "We honor and uphold the authority and integrity of Scripture as the ultimate standard for faith and life. The Word of God is living, powerful, and relevant.",
                                quote: "“All Scripture is inspired by God and is useful to teach us what is true.” – 2 Timothy 3:16",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                                    </svg>
                                )
                            },
                            {
                                title: "2. Agape Love",
                                body: "We believe in demonstrating unconditional love, a love that mirrors God’s heart for humanity. We strive to create an environment where everyone feels accepted.",
                                quote: "“Let all that you do be done in love.” – 1 Corinthians 16:14",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                )
                            },
                            {
                                title: "3. Fellowship",
                                body: "We value community and connection among believers. Church is not just a place to attend but a family to belong to.",
                                quote: "“They devoted themselves to the apostles’ teaching and to fellowship...” – Acts 2:42",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.998 5.998 0 00-4.032-5.658m4.032 5.658a18.835 18.835 0 00-12 0m12 0a5.998 5.998 0 00-4.032-5.658m0 0a5.998 5.998 0 00-4.032 5.658m0 0a5.998 5.998 0 014.032-5.658m0 0a5.998 5.998 0 014.032 5.658M9 10.5a3 3 0 116 0 3 3 0 01-6 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "4. Prayer",
                                body: "Prayer is the lifeline of our faith and the heartbeat of our relationship with God. We are devoted to building a strong prayer culture.",
                                quote: "“Pray without ceasing.” – 1 Thessalonians 5:17",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3m0 18l-3-3m3 3l3-3M12 3L9 6m3-3l3 3" />
                                    </svg>
                                )
                            },
                            {
                                title: "5. Worship",
                                body: "We were created to worship, and we do so with all our heart, soul, and strength. Worship is a lifestyle that glorifies God in all we do.",
                                quote: "“Worship the Lord your God, and serve Him only.” – Matthew 4:10",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-3.605 0l-1.32-.377A2.25 2.25 0 019.75 14.89V8.574m0 0a2.25 2.25 0 011.632-2.163l1.32-.377a1.803 1.803 0 113.605 0l1.32.377a2.25 2.25 0 011.632 2.163" />
                                    </svg>
                                )
                            },
                            {
                                title: "6. Service",
                                body: "As followers of Christ, we are called to serve others with humility and love. We seek to be the hands and feet of Jesus.",
                                quote: "“For the love of Christ compels us...” – 2 Corinthians 5:14-15",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 006.16 11.79a14.98 14.98 0 01-6.16 12.12 14.98 14.98 0 016.16-11.79" />
                                    </svg>
                                )
                            },
                            {
                                title: "7. Excellence",
                                body: "We pursue excellence in all we do because we serve an excellent God. It’s giving our best with integrity, diligence, and passion.",
                                quote: "“Work willingly at whatever you do...” – Colossians 3:23",
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                )
                            },
                        ].map((item, i) => (
                            <div
                                key={item.title}
                                className={`group bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 flex flex-col items-start ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center text-white/40 mb-8 group-hover:text-[var(--font-accent-color)] transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-white text-2xl font-black tracking-tight uppercase mb-4">
                                    {item.title}
                                </h3>
                                <p
                                    className="text-stone-400 text-base leading-relaxed font-medium mb-6"
                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                >
                                    {item.body}
                                </p>
                                <p className="text-[var(--font-accent-color)] text-xs font-black tracking-widest uppercase mt-auto border-l border-[var(--font-accent-color)]/30 pl-4 py-1">
                                    {item.quote}
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

                <div ref={creedRef} className="w-full max-w-4xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 animate-fade-in">
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Our Heartbeat</span>
                        <h2 className="text-white text-4xl sm:text-5xl font-black tracking-tighter uppercase">The TNHC Creed</h2>
                        <div className="w-16 h-1 bg-[var(--font-accent-color)] mx-auto mt-6" />
                    </div>

                    <div
                        className={`flex flex-col gap-8 transition-all duration-1000 ${creedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                            "Raising the people to become like christ.",
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
                    ref={ctaRef}
                    className={`w-full max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

