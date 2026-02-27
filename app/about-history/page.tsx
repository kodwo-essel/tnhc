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

// Simple auto-scrolling gallery reel
function PhotoReel({ photos }: { photos: { src: string; alt: string }[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);
    const CARD_W = 420; // px per card incl gap

    useEffect(() => {
        const total = photos.length * CARD_W;
        const interval = setInterval(() => {
            setOffset((prev) => {
                const next = prev + 1;
                return next >= total ? 0 : next;
            });
        }, 20);
        return () => clearInterval(interval);
    }, [photos.length]);

    // Duplicate for seamless loop
    const doubled = [...photos, ...photos];

    return (
        <div className="w-full overflow-hidden py-10">
            <div
                ref={trackRef}
                className="flex gap-8"
                style={{ transform: `translateX(-${offset}px)`, willChange: "transform" }}
            >
                {doubled.map((p, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[400px] h-[300px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative group"
                    >
                        <Image
                            src={p.src}
                            alt={p.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function AboutHistoryPage() {
    const heroAnim = useFadeUp();
    const storyAnim = useFadeUp();
    const foundingAnim = useFadeUp();
    const reelAnim = useFadeUp();

    const reelPhotos = [
        { src: "/hero.jpg", alt: "TNHC gathering" },
        { src: "/this-week.jpg", alt: "This week at TNHC" },
        { src: "/logo/photo_2026-02-26_09-44-11.jpg", alt: "Pastors" },
        { src: "/hero.jpg", alt: "Church community" },
        { src: "/logo/photo_2026-02-26_09-44-11 (Copy).jpg", alt: "Pastors" },
        { src: "/this-week.jpg", alt: "Community" },
    ];

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
                                className={`text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 ${item.label === "HISTORY"
                                    ? "text-white border-b-2 border-white pb-1"
                                    : "text-stone-500 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <h1 className="text-white text-5xl sm:text-7xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                        OUR<br />HISTORY
                    </h1>
                </div>
            </section>

            {/* ── 2. THE STORY (MISSION) ────────────────────────────────────── */}
            <section className="w-full bg-[#F2F0EB] py-28 sm:py-48 md:rounded-t-[4rem] relative z-20 -mt-10">
                <div ref={storyAnim.ref} className="w-full max-w-4xl mx-auto px-6 text-center">
                    <span
                        className={`inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-black tracking-widest uppercase text-stone-500 mb-8 transition-all duration-1000 ${storyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        Our Roots
                    </span>
                    <h2
                        className={`text-black text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-12 transition-all duration-1000 delay-100 ${storyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        BUILT FOR THE<br className="hidden sm:block" /> CITY OF ACCRA
                    </h2>
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-200 ${storyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <p
                            className="text-black text-xl sm:text-2xl leading-relaxed italic font-medium"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            The New House Church was founded with a singular conviction: putting down
                            deep roots to build something that will last for generations.
                        </p>
                        <div
                            className="flex flex-col gap-6 text-stone-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            <p>
                                Every gathering, every life changed, and every moment of breakthrough is a
                                thread woven into the story of what God has built here.
                            </p>
                            <p>
                                Our mission statement, <span className="text-black font-black uppercase tracking-tight italic">&quot;Until All of Accra is Saved&quot;</span>,
                                is more than a slogan—it&apos;s our compass. It reflects our radical
                                commitment to this city and the people who call it home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. FOUNDING MOMENT ────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-48 relative overflow-hidden border-y border-white/5">
                <div ref={foundingAnim.ref} className="w-full max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">

                        {/* Image Side */}
                        <div
                            className={`w-full lg:w-1/2 transition-all duration-1000 ${foundingAnim.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                                }`}
                        >
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/logo/photo_2026-02-26_09-44-11.jpg"
                                    alt="Founding moment"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <span className="text-white text-5xl sm:text-7xl font-black tracking-tighter opacity-20">EST. 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div
                            className={`w-full lg:w-1/2 transition-all duration-1000 delay-200 ${foundingAnim.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                }`}
                        >
                            <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">The Beginning</span>
                            <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-10">
                                A NEW KIND OF<br />HOUSE IN THE CITY
                            </h2>
                            <div className="space-y-6 text-stone-400 text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                <p>
                                    Founders Kodwo & Akua Essel started with a vision to see Accra encounter the
                                    transformative love of God. Starting as a small gathering of passionate
                                    believers, they dreamed of a church that would feel like home—full of
                                    grace, faith, and generosity.
                                </p>
                                <p>
                                    Today, that dream is a thriving reality, as we continue to create a space
                                    where people from every background can find family and purpose.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-black tracking-widest text-stone-300 uppercase">Watch our story</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. MEMORIES (PHOTO REEL) ──────────────────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-28 sm:py-40">
                <div ref={reelAnim.ref} className="w-full max-w-7xl mx-auto px-6 mb-16">
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-4 block">Archive</span>
                    <h2 className="text-white text-3xl sm:text-5xl font-black tracking-tighter uppercase">MEMORIES OF<br />FAITHFULNESS</h2>
                </div>
                <PhotoReel photos={reelPhotos} />
            </section>

            {/* ── 5. FINAL CTA ─────────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-40 border-t border-white/5">
                <div className="w-full max-w-4xl mx-auto px-6 text-center">
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Ready for the future?</span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-12">
                        THE NEXT CHAPTER<br />INVOLVES YOU.
                    </h2>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
                        <Link
                            href="/about"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all"
                        >
                            BACK TO ABOUT
                        </Link>
                        <Link
                            href="/about-pastors"
                            className="bg-[var(--font-accent-color)] text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-[var(--font-accent-color)]/20"
                        >
                            MEET THE PASTORS
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
