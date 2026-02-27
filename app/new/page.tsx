"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Scroll-animation hook ──────────────────────────────────────────────────
function useFadeUp(threshold = 0.15) {
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

// ─── Highlight card ─────────────────────────────────────────────────────────
function HighlightCard({
    number,
    title,
    body,
    delay = "delay-0",
    visible,
}: {
    number: string;
    title: string;
    body: string;
    delay?: string;
    visible: boolean;
}) {
    return (
        <div
            className={`flex flex-col gap-4 border-t border-stone-200 pt-6 transition-all duration-700 ease-out ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">
                {number}
            </span>
            <h3 className="text-xl font-bold text-black leading-snug">{title}</h3>
            <p
                className="text-stone-600 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
            >
                {body}
            </p>
        </div>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function NewPage() {
    // Section refs
    const welcome = useFadeUp();
    const highlights = useFadeUp();
    const gather = useFadeUp();
    const cta = useFadeUp();

    const [showVideo, setShowVideo] = useState(false);
    const videoId = "dQw4w9WgXcQ"; // Using the same ID as welcome for now

    return (
        <div className="flex flex-col">

            {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
            <section className="relative w-full min-h-[70vh] flex items-end bg-black overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/hero.jpg"
                        alt="TNHC Church"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Text */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-48">
                    <p
                        className="text-xs uppercase tracking-[0.25em] mb-4"
                        style={{ color: "var(--font-accent-color)" }}
                    >
                        Welcome
                    </p>
                    <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-bold leading-none mb-4">
                        I&apos;M NEW
                    </h1>
                    <p
                        className="text-stone-300 text-lg sm:text-xl max-w-xl"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        We&apos;re so glad you&apos;re here. Seriously.
                    </p>
                </div>
            </section>

            {/* ── 2. WELCOME TEXT ──────────────────────────────────────────────── */}
            <section className="w-full bg-[#F2F0EB] md:rounded-t-[4rem] mt-[-4rem] relative z-10">
                <div ref={welcome.ref} className="w-full max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
                    <span
                        className={`inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-medium tracking-widest uppercase text-stone-500 mb-8 transition-all duration-700 ${welcome.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        A note for you
                    </span>
                    <p
                        className={`text-black text-xl sm:text-2xl lg:text-3xl leading-relaxed transition-all duration-700 delay-100 ${welcome.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        We believe the simple fact that you&apos;re here is not a coincidence.
                        TNHC is a{" "}
                        <strong>diverse, multi-generational, and energetic church</strong>{" "}
                        gathering in Accra. We&apos;re not about putting on a show — we&apos;re
                        about connecting people to{" "}
                        <strong>Jesus and to each other.</strong>
                    </p>
                    <p
                        className={`mt-6 text-stone-500 text-lg transition-all duration-700 delay-200 ${welcome.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        Take a scroll. We think you&apos;ll feel right at home.
                    </p>
                </div>
            </section>

            {/* ── 3. VIDEO SECTION ─────────────────────────────────────────────── */}
            <section className="w-full bg-black py-20 sm:py-28">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        {/* Text */}
                        <div className="flex-1">
                            <p
                                className="text-xs uppercase tracking-[0.25em] mb-4"
                                style={{ color: "var(--font-accent-color)" }}
                            >
                                Start here
                            </p>
                            <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
                                OK NEW BESTIE.
                                <br />
                                WATCH THIS FIRST.
                            </h2>
                            <p
                                className="text-stone-400 text-lg leading-relaxed max-w-md"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                We promise you&apos;ll like it. This short video tells you
                                everything you need to know about who we are before you
                                walk through the doors.
                            </p>
                        </div>

                        {/* Video - Premium Thumbnail + Modal Trigger */}
                        <div
                            className="flex-[1.4] w-full aspect-video relative group cursor-pointer"
                            onClick={() => setShowVideo(true)}
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative bg-stone-900 border border-white/5">
                                <Image
                                    src="/welcome.jpg"
                                    alt="Watch TNHC Welcome"
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[var(--font-accent-color)] transition-all duration-500 shadow-xl">
                                        <svg className="w-8 h-8 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Hover info */}
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-white text-xs font-black tracking-[0.2em] uppercase">Watch our story</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. HIGHLIGHTS ────────────────────────────────────────────────── */}
            <section className="w-full bg-stone-100 py-20 sm:py-28">
                <div ref={highlights.ref} className="w-full max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div
                        className={`mb-16 transition-all duration-700 ${highlights.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        <span className="inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-medium tracking-widest uppercase text-stone-500 mb-6">
                            In case you didn&apos;t watch
                        </span>
                        <h2 className="text-black text-4xl sm:text-5xl font-bold leading-tight">
                            HERE&apos;S THE
                            <br />
                            HIGHLIGHTS.
                        </h2>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        <HighlightCard
                            number="01"
                            title="A Community You'll Actually Love"
                            body="TNHC is an amazing, diverse, and energetic community of people following Jesus together. Come as you are — you'll fit right in."
                            delay="delay-75"
                            visible={highlights.visible}
                        />
                        <HighlightCard
                            number="02"
                            title="Real Teaching, Real Life"
                            body="Every Sunday we dig into Scripture in a way that's relevant, practical, and honest. No fluff. Just truth that actually helps."
                            delay="delay-150"
                            visible={highlights.visible}
                        />
                        <HighlightCard
                            number="03"
                            title="Kids Who Can't Wait to Come Back"
                            body="Our kids program is full of adventure and exploration of God's love. Our team genuinely loves children — and it shows."
                            delay="delay-200"
                            visible={highlights.visible}
                        />
                        <HighlightCard
                            number="04"
                            title="Youth That Goes Deep"
                            body="Our youth ministry is a safe, exciting space for teenagers to wrestle with faith, belong, and grow into who God made them to be."
                            delay="delay-300"
                            visible={highlights.visible}
                        />
                        <HighlightCard
                            number="05"
                            title="Worship That Moves You"
                            body="Our worship experience is live, full-band, and designed to help you encounter God — not just as a spectator but as a participant."
                            delay="delay-400"
                            visible={highlights.visible}
                        />
                        <HighlightCard
                            number="06"
                            title="A Church on Mission"
                            body="We believe God loves Accra and we're serious about reaching our city. When you join TNHC, you join a movement — not just a meeting."
                            delay="delay-500"
                            visible={highlights.visible}
                        />
                    </div>
                </div>
            </section>

            {/* ── 5. SERVICE TIMES ─────────────────────────────────────────────── */}
            <section className="w-full bg-black py-20 sm:py-28">
                <div ref={gather.ref} className="w-full max-w-7xl mx-auto px-6">
                    <div
                        className={`bg-stone-900 md:rounded-3xl px-8 sm:px-14 py-14 transition-all duration-700 ${gather.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        <span className="inline-block border border-stone-600 rounded-lg px-3 py-1 text-xs font-medium tracking-widest uppercase text-stone-400 mb-7">
                            Gatherings
                        </span>

                        <h2 className="text-4xl text-white font-bold leading-tight mb-10">
                            WE&apos;D LOVE FOR YOU
                            <br />
                            TO JOIN US!
                        </h2>

                        <hr className="my-7 border-stone-700" />

                        <div className="flex flex-col gap-4">
                            <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1">
                                Service Times
                            </p>
                            <p
                                className="text-base text-stone-400 leading-relaxed"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                Our Sunday services are at{" "}
                                <strong className="text-stone-100 font-semibold">
                                    8:45am, 10:30am, &amp; 12:15pm
                                </strong>
                            </p>
                        </div>

                        <hr className="my-7 border-stone-700" />

                        <div className="flex flex-col gap-4">
                            <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1">
                                Location
                            </p>
                            <p
                                className="text-base text-stone-400 leading-relaxed"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                TNHC meets in a historic building in Accra.
                                <br />
                                <strong className="text-stone-100 font-semibold">
                                    634 S Normandie Ave, Accra, Ghana
                                </strong>
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/contact-us"
                                className="inline-block bg-white px-6 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition"
                            >
                                PLAN YOUR VISIT
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. FINAL CTA ─────────────────────────────────────────────────── */}
            <section className="w-full bg-[#F2F0EB] py-20 sm:py-28">
                <div
                    ref={cta.ref}
                    className={`w-full max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <p
                        className="text-xs uppercase tracking-[0.25em] mb-4 text-stone-500"
                    >
                        Next step
                    </p>
                    <h2 className="text-black text-4xl sm:text-5xl font-bold leading-tight mb-6">
                        READY TO TAKE
                        <br />
                        THE NEXT STEP?
                    </h2>
                    <p
                        className="text-stone-600 text-lg mb-10 max-w-lg mx-auto"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        Whether you&apos;re just curious or ready to dive in — we have a
                        path for you. Start Here is the best place to begin your
                        journey with TNHC.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/starthere"
                            className="bg-black text-white font-bold text-sm px-8 py-4 rounded-lg hover:opacity-80 transition"
                        >
                            START HERE
                        </Link>
                        <Link
                            href="/contact-us"
                            className="border-2 border-black text-black font-bold text-sm px-8 py-4 rounded-lg hover:bg-black hover:text-white transition"
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Modal Overlay */}
            {showVideo && (
                <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 sm:p-10">
                    <button
                        onClick={() => setShowVideo(false)}
                        className="absolute top-6 right-6 text-white hover:text-[var(--font-accent-color)] transition-colors p-2"
                        aria-label="Close video"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title="Welcome to TNHC"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
