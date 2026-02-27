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

interface Elder {
    name: string;
    title: string;
    description: string;
    photo: string;
}

const ELDERS: Elder[] = [
    {
        name: "ELDER NAME",
        title: "Chairman of the Board",
        description: "Leading with wisdom and a deep commitment to the spiritual health of our community.",
        photo: "/logo/photo_2026-02-26_09-44-11.jpg",
    },
    {
        name: "ELDER NAME",
        title: "Board Member",
        description: "Visionary leadership with a heart for stewardship and organizational excellence.",
        photo: "/logo/photo_2026-02-26_09-44-11 (Copy).jpg",
    },
    {
        name: "ELDER NAME",
        title: "Board Member",
        description: "Dedicated to prayerful oversight and supporting the growth of our local church.",
        photo: "/logo/photo_2026-02-26_09-44-11.jpg",
    },
    {
        name: "ELDER NAME",
        title: "Board Member",
        description: "Bringing decades of experience and a passion for disciple-making to the board.",
        photo: "/logo/photo_2026-02-26_09-44-11 (Copy).jpg",
    },
];

export default function AboutEldersPage() {
    const heroAnim = useFadeUp();
    const introAnim = useFadeUp();
    const gridAnim = useFadeUp();

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
                        className="object-cover opacity-40 animate-slow-zoom"
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
                                className={`text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 ${item.label === "ELDERS"
                                    ? "text-white border-b-2 border-white pb-1"
                                    : "text-stone-500 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <h1 className="text-white text-5xl sm:text-7xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                        MEET OUR<br />ELDERS
                    </h1>
                </div>
            </section>

            {/* ── 2. INTRO (THE ROLE) ───────────────────────────────────────── */}
            <section className="w-full bg-[#F2F0EB] py-28 sm:py-40 md:rounded-t-[4rem] relative z-20 -mt-10 text-center">
                <div ref={introAnim.ref} className="w-full max-w-4xl mx-auto px-6">
                    <span
                        className={`inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-black tracking-widest uppercase text-stone-500 mb-8 transition-all duration-1000 ${introAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        Spiritual Oversight
                    </span>
                    <h2
                        className={`text-black text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-12 transition-all duration-1000 delay-100 ${introAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        Wisdom & Stewardship
                    </h2>
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-200 ${introAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <p
                            className="text-black text-xl sm:text-2xl leading-relaxed italic font-medium max-w-3xl mx-auto"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            The Elder Board at The New House Church serves in support of Lead Pastors
                            Kodwo & Akua Essel, providing spiritual guidance and organizational wisdom.
                        </p>
                        <p
                            className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            Guided by the example set in Scripture, our elders are called to shepherd
                            God&apos;s people with humility, prayer, and selfless service. They ensure
                            the church remains focused on its mission while maintaining structural integrity.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 3. ELDERS GRID ────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-48 relative overflow-hidden">
                <div ref={gridAnim.ref} className="w-full max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {ELDERS.map((elder, i) => (
                            <div
                                key={i}
                                className={`group flex flex-col gap-8 transition-all duration-1000 ${gridAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                {/* Photo Container */}
                                <div className="aspect-[3/4] relative rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                                    <Image
                                        src={elder.photo}
                                        alt={elder.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Text content */}
                                <div className="flex flex-col gap-3 px-2">
                                    <div>
                                        <h3 className="text-white text-2xl font-black tracking-tighter uppercase leading-none">
                                            {elder.name}
                                        </h3>
                                        <span className="text-[var(--font-accent-color)] text-[10px] font-black tracking-[0.2em] uppercase mt-2 block">
                                            {elder.title}
                                        </span>
                                    </div>
                                    <p
                                        className="text-stone-400 text-sm leading-relaxed"
                                        style={{ fontFamily: "var(--font-dm-sans)" }}
                                    >
                                        {elder.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. FINAL CTA ─────────────────────────────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-28 sm:py-40 border-t border-white/5">
                <div
                    className="w-full max-w-4xl mx-auto px-6 text-center"
                >
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Continue the journey</span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-12">
                        DISCOVER OUR<br />HISTORIC ROOTS
                    </h2>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
                        <Link
                            href="/about"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all"
                        >
                            BACK TO ABOUT
                        </Link>
                        <Link
                            href="/about-history"
                            className="bg-[var(--font-accent-color)] text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-[var(--font-accent-color)]/20"
                        >
                            OUR HISTORY
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
