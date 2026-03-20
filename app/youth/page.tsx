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
// Component
// ─────────────────────────────────────────────────────────────
export default function YouthPage() {
    const { ref: heroRef, visible: heroVisible } = useFadeUp(0.02);
    const { ref: introRef, visible: introVisible } = useFadeUp(0.05);
    const { ref: gatheringRef, visible: gatheringVisible } = useFadeUp(0.05);
    const { ref: contactRef, visible: contactVisible } = useFadeUp(0.05);

    return (
        <div className="flex flex-col bg-white">
            {/* ── 1. HERO ──────────────────────────────────────────────────── */}
            <section className="relative w-full h-[60vh] sm:h-[80vh] flex items-end justify-start overflow-hidden bg-stone-900">
                <Image
                    src="/youth-hero.png"
                    alt="TNHC Youth Ministry"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Darker overlay for high energy vibrant look */}
                <div className="absolute inset-0 bg-black/40" />

                <div
                    ref={heroRef}
                    className={`relative z-10 px-8 pb-12 sm:px-16 sm:pb-16 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h1
                        className="font-bold text-white leading-none uppercase"
                        style={{ fontSize: "clamp(3.5rem, 15vw, 12rem)", letterSpacing: "0.08em" }}
                    >
                        YOUTH
                    </h1>
                </div>
            </section>

            {/* ── 2. INTRO SECTION ─────────────────────────────────────────── */}
            <section className="w-full py-24 px-6">
                <div
                    ref={introRef}
                    className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 mb-6">
                        The New House Church
                    </p>
                    <h2 className="text-4xl sm:text-6xl font-bold text-black mb-8 leading-tight uppercase tracking-tighter">
                        We Believe In <br /> The Next Generation
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto mb-10" />
                    <p className="text-xl text-stone-600 leading-relaxed font-dm-sans max-w-2xl mx-auto">
                        TNHC Youth is more than just a gathering; it&apos;s a family. We aim to provide a safe,
                        relational, and engaging environment where students can discover their purpose and grow in their faith.
                    </p>
                </div>
            </section>

            {/* ── 3. GATHERING INFO ────────────────────────────────────────── */}
            <section className="w-full py-20 bg-stone-50 border-y border-stone-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        ref={gatheringRef}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${gatheringVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-2">Sunday Gatherings</h3>
                                <h2 className="text-4xl font-bold text-black uppercase">10:30 AM Service</h2>
                            </div>

                            <div className="space-y-6 text-stone-600 font-dm-sans text-lg">
                                <p>
                                    <strong className="text-black uppercase text-sm tracking-wider block mb-1">Check-In & Worship</strong>
                                    Youth students gather at the Youth Table near the main entrance before service.
                                    We start together in the sanctuary for worship, then transition to the Youth Studio.
                                </p>
                                <p>
                                    <strong className="text-black uppercase text-sm tracking-wider block mb-1">The Experience</strong>
                                    After worship, students head to the Youth Studio for fellowship, relevant teaching, and interactive games designed to build community.
                                </p>
                                <p>
                                    <strong className="text-black uppercase text-sm tracking-wider block mb-1">Pick Up</strong>
                                    Students can be picked up near the Kids Ministry exit area immediately following the service.
                                </p>
                            </div>
                        </div>

                        <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/youth-activities.png"
                                alt="Youth Fellowship"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white text-sm font-bold tracking-widest uppercase">Community & Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. SOCIAL & CONNECTION ───────────────────────────────────── */}
            <section className="w-full py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        ref={contactRef}
                        className={`space-y-10 transition-all duration-1000 ${contactVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <h2 className="text-4xl font-bold text-black uppercase tracking-tight">Stay Connected</h2>
                        <p className="text-lg text-stone-500 font-dm-sans max-w-xl mx-auto">
                            Follow us on Instagram for all the latest updates on special events, midweek connects, and what&apos;s happening in the studio.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href="https://www.instagram.com/tnhcyouth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-[#f0f0f0] px-8 py-5 rounded-full hover:bg-black transition-all duration-300"
                            >
                                <span className="text-black font-bold tracking-widest uppercase group-hover:text-white">@tnhcyouth</span>
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                            </a>

                            <a
                                href="mailto:youth@tnhc.org"
                                className="text-stone-400 font-bold tracking-widest uppercase hover:text-black transition-colors"
                            >
                                youth@tnhc.org
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. FINAL CTA ──────────────────────────────────────────────── */}
            <section className="w-full py-32 px-6 bg-black text-white">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-5xl font-bold uppercase tracking-tighter">Ready to join in?</h2>
                    <p className="text-stone-400 font-dm-sans text-lg">
                        We can&apos;t wait to meet you. If you have any questions about our youth ministry or want to get involved, reach out today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <Link
                            href="/contact-us"
                            className="bg-white text-black font-bold text-sm px-12 py-5 rounded-lg hover:bg-stone-200 transition tracking-widest uppercase"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="/new"
                            className="border-2 border-white text-white font-bold text-sm px-12 py-5 rounded-lg hover:bg-white hover:text-black transition tracking-widest uppercase"
                        >
                            I&apos;m New
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
