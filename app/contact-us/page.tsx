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

export default function ContactUsPage() {
    const { ref: contactRef, visible: contactVisible } = useFadeUp();
    const { ref: infoRef, visible: infoVisible } = useFadeUp();
    const { ref: mapRef } = useFadeUp();

    return (
        <div className="flex flex-col bg-black">
            {/* Grain Overlay */}
            <div className="fixed inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/grain.png')] z-50" />

            {/* ── 1. CINEMATIC HERO ───────────────────────────────────────────── */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background with cinematic zoom */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Contact TNHC"
                        fill
                        priority
                        className="object-cover object-bottom opacity-40 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 pt-20">
                    <span
                        className="text-xs font-black tracking-[0.4em] uppercase text-stone-400 mb-6 block animate-fade-in"
                    >
                        We are here for you
                    </span>
                    <h1 className="text-white text-6xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                        CONTACT<br />US
                    </h1>
                </div>
            </section>

            {/* ── 2. CONTACT FLOW (FORM + INFO) ──────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-48 relative z-20">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-start">

                        {/* Left Side: Direct Info */}
                        <div
                            ref={infoRef}
                            className={`w-full lg:w-1/3 flex flex-col gap-16 transition-all duration-1000 ${infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div>
                                <h2 className="text-white text-3xl font-black tracking-tighter uppercase mb-6 underline decoration-[var(--font-accent-color)] decoration-4 underline-offset-8">
                                    GET IN TOUCH
                                </h2>
                                <p className="text-stone-400 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                    Whether you have a question about our gatherings, need prayer, or just want to say hello, we&apos;d love to hear from you.
                                </p>
                            </div>

                            <div className="flex flex-col gap-10">
                                {/* Email */}
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--font-accent-color)] group-hover:text-black transition-all duration-500 border border-white/5">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L3 6.75" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black tracking-widest text-stone-500 uppercase mb-1">Email us</span>
                                        <a href="mailto:hello@tnhc.com" className="text-white font-black tracking-tight hover:text-[var(--font-accent-color)] transition-colors">HELLO@TNHC.COM</a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--font-accent-color)] group-hover:text-black transition-all duration-500 border border-white/5">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black tracking-widest text-stone-500 uppercase mb-1">Call us</span>
                                        <a href="tel:+233000000000" className="text-white font-black tracking-tight hover:text-[var(--font-accent-color)] transition-colors">+233 000 000 000</a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--font-accent-color)] group-hover:text-black transition-all duration-500 border border-white/5">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black tracking-widest text-stone-500 uppercase mb-1">Gathering at</span>
                                        <span className="text-white font-black tracking-tight">HAATSO SUPERMARKET JUNCTION</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div
                            ref={contactRef}
                            className={`w-full lg:w-2/3 transition-all duration-1000 delay-200 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-black tracking-widest text-stone-500 uppercase px-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="EX. JANE DOE"
                                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-2xl text-xs font-black tracking-widest text-white placeholder-stone-700 focus:outline-none focus:border-[var(--font-accent-color)]/30 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-black tracking-widest text-stone-500 uppercase px-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="NAME@EMAIL.COM"
                                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-2xl text-xs font-black tracking-widest text-white placeholder-stone-700 focus:outline-none focus:border-[var(--font-accent-color)]/30 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 md:col-span-2">
                                    <label className="text-[10px] font-black tracking-widest text-stone-500 uppercase px-2">Subject</label>
                                    <select
                                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-2xl text-xs font-black tracking-widest text-white appearance-none focus:outline-none focus:border-[var(--font-accent-color)]/30 transition-all"
                                    >
                                        <option className="bg-black">GENERAL INQUIRY</option>
                                        <option className="bg-black">PRAYER REQUEST</option>
                                        <option className="bg-black">GIVING QUESTIONS</option>
                                        <option className="bg-black">JOINING A TEAM</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-3 md:col-span-2">
                                    <label className="text-[10px] font-black tracking-widest text-stone-500 uppercase px-2">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="HOW CAN WE HELP YOU?"
                                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-2xl text-xs font-black tracking-widest text-white placeholder-stone-700 focus:outline-none focus:border-[var(--font-accent-color)]/30 transition-all resize-none"
                                    />
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button
                                        className="w-full bg-white text-black font-black text-xs tracking-[0.2em] py-6 rounded-full hover:bg-[var(--font-accent-color)] transition-all transform hover:scale-[1.01] shadow-2xl"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 3. LOCATION SPOTLIGHT ──────────────────────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-28 px-6 border-y border-white/5">
                <div ref={mapRef} className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Visit us</span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-20 animate-fade-in">
                        WE GATHER AT<br />HAATSO SUPERMARKET JUNCTION
                    </h2>

                    <div className="w-full aspect-[21/9] relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 group">
                        <Image
                            src="/hero.jpg"
                            alt="The Palms"
                            fill
                            className="object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-1000" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black text-xs tracking-widest px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500"
                            >
                                GET DIRECTIONS →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. FINAL CTA ───────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-40">
                <div className="w-full max-w-4xl mx-auto px-6 text-center">
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Ready for more?</span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-12">
                        COME AS YOU ARE,<br />LEAVE CHANGED.
                    </h2>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
                        <Link
                            href="/new"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all"
                        >
                            I&apos;M NEW
                        </Link>
                        <Link
                            href="/new"
                            className="bg-[var(--font-accent-color)] text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-[var(--font-accent-color)]/20"
                        >
                            START YOUR JOURNEY
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
