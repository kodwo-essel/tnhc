"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
const CHANNEL_ID = "UCqP5VOW2U3feuG4239gXU7w";
const CHANNEL_URL = "https://www.youtube.com/@thenewhousechurch";

interface Sermon {
    id: string;
    title: string;
    series?: string;
    date: string;
    thumbnail?: string;
}

const RECENT_SERMONS: Sermon[] = [
    {
        id: "cT1nEaWIEiU",
        title: "THE BASICS - Christianity 101",
        series: "The Basics",
        date: "2 weeks ago"
    },
    {
        id: "spN1ATuPlDU",
        title: "Day 1 of 21 Days Ahava Fasting and Prayer",
        series: "Ahava",
        date: "1 month ago"
    },
    {
        id: "koDH2kMsFms",
        title: "And Yet He Did | Pastor David King",
        series: "Sunday Message",
        date: "1 month ago"
    },
    {
        id: "eJspNqxWu7M",
        title: "NO CONDEMNATION (II) | Pastor David King",
        series: "No Condemnation",
        date: "1 month ago"
    },
    {
        id: "tWFGDQPJ9hA",
        title: "NO CONDEMNATION | Pastor David R. King",
        series: "No Condemnation",
        date: "2 months ago"
    },
    {
        id: "t45LI7Mh59Q",
        title: "RESONANCE 2025",
        series: "Special Event",
        date: "2 months ago"
    },
];

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

function LiveBadge() {
    return (
        <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            LIVE
        </span>
    );
}

function SermonCard({ sermon, index }: { sermon: Sermon; index: number }) {
    const thumb = sermon.thumbnail ?? `https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`;
    const { ref, visible } = useFadeUp<HTMLAnchorElement>();

    return (
        <a
            ref={ref}
            href={`https://www.youtube.com/watch?v=${sermon.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col gap-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Thumbnail */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <Image
                    src={thumb}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all duration-500">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[var(--font-accent-color)] group-hover:border-transparent transition-all duration-500 shadow-xl">
                        <svg className="w-6 h-6 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Meta */}
            <div className="px-2">
                {sermon.series && (
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-500 mb-2 block underline decoration-[var(--font-accent-color)] decoration-2 underline-offset-4">
                        {sermon.series}
                    </span>
                )}
                <h3 className="text-white text-xl font-black leading-[1.1] tracking-tighter uppercase group-hover:text-[var(--font-accent-color)] transition-colors mb-2">
                    {sermon.title}
                </h3>
                <p className="text-xs text-stone-500 font-bold tracking-widest uppercase">
                    {sermon.date}
                </p>
            </div>
        </a>
    );
}

export default function WatchPage() {
    const { ref: streamRef, visible: streamVisible } = useFadeUp();
    const { ref: recentRef, visible: recentVisible } = useFadeUp();

    const liveEmbedSrc = `https://www.youtube-nocookie.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=0&rel=0`;

    return (
        <div className="flex flex-col bg-black min-h-screen">
            {/* Grain Overlay */}
            <div className="fixed inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/grain.png')] z-50" />

            {/* ── 1. CINEMATIC HERO ───────────────────────────────────────────── */}
            <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background with cinematic zoom */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Watch TNHC"
                        fill
                        priority
                        className="object-cover opacity-40 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 pt-20">
                    <div className="flex justify-center mb-8">
                        <LiveBadge />
                    </div>
                    <h1 className="text-white text-6xl sm:text-8xl lg:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                        WATCH<br />LIVE
                    </h1>
                    <p
                        className="text-stone-400 text-sm sm:text-base font-black tracking-[0.2em] uppercase max-w-lg mx-auto leading-relaxed animate-fade-in"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        Join us for our Sunday gatherings — or catch up on recent messages anytime.
                    </p>
                </div>
            </section>

            {/* ── 2. LIVE STREAM EMBED ──────────────────────────────────────────── */}
            <section className="w-full bg-black pb-28 sm:pb-48 -mt-10 overflow-hidden relative z-20">
                <div
                    ref={streamRef}
                    className={`w-full max-w-6xl mx-auto px-6 transition-all duration-1000 ${streamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    {/* Stream container */}
                    <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden bg-stone-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 group">
                        <iframe
                            src={liveEmbedSrc}
                            title="TNHC Live Stream"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        {/* Shadow decoration inside */}
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[3rem]" />
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 px-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                                <span className="w-2h-2 rounded-full bg-red-600 animate-pulse" />
                            </div>
                            <p className="text-stone-400 text-xs font-black tracking-[0.2em] uppercase">
                                Live every Sunday @ 10AM
                            </p>
                        </div>
                        <a
                            href={CHANNEL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 border border-white/10 text-white font-black text-[10px] tracking-[0.3em] uppercase px-10 py-5 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                        >
                            Open on YouTube →
                        </a>
                    </div>
                </div>
            </section>

            {/* ── 3. RECENT SERMONS ─────────────────────────────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-28 sm:py-48 border-y border-white/5">
                <div
                    ref={recentRef}
                    className={`w-full max-w-7xl mx-auto px-6 transition-all duration-1000 ${recentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12 text-center md:text-left">
                        <div className="flex-1">
                            <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Archive</span>
                            <h2 className="text-white text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                                RECENT<br />MESSAGES
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-stone-500 text-sm max-w-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Dive deeper into the teachings that guide our house. Explore our full library of messages.
                            </p>
                            <a
                                href={CHANNEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--font-accent-color)] hover:opacity-70 transition-opacity flex items-center gap-2"
                            >
                                VIEW ALL SERMONS <span className="text-lg">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {RECENT_SERMONS.map((sermon, i) => (
                            <SermonCard key={sermon.id} sermon={sermon} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. NOTIFY CTA ─────────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-48">
                <div className="w-full max-w-4xl mx-auto px-6 text-center">
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Stay Connected</span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-12">
                        NEVER MISS<br />A MOMENT.
                    </h2>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
                        <a
                            href={CHANNEL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-red-700 hover:scale-105 transition-all shadow-xl shadow-red-600/20 flex items-center gap-3 justify-center"
                        >
                            {/* YouTube icon */}
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            SUBSCRIBE ON YOUTUBE
                        </a>
                        <Link
                            href="/contact-us"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all"
                        >
                            GET NOTIFIED
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
