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
// Giving method icons (SVGs)
// ─────────────────────────────────────────────────────────────
const Icons = {
    Card: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    ),
    Mail: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    Text: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    )
};

// ─────────────────────────────────────────────────────────────
// Giving method card
// ─────────────────────────────────────────────────────────────
interface GivingMethod {
    icon: React.ReactNode;
    title: string;
    desc: string;
    cta: string;
    href: string;
    external?: boolean;
}

const GIVING_METHODS: GivingMethod[] = [
    {
        icon: <Icons.Text />,
        title: "MTN Mobile Money",
        desc: "Number: 0556695437 | Name: The New House Church | Reference: Tithe or Seed",
        cta: "MoMo Instructions",
        href: "#ways-to-give",
    },
    {
        icon: <Icons.Card />,
        title: "Bank (USD)",
        desc: "Acc: 01216124103230 | UBA East Legon 2 | Swift: STBGGHAC",
        cta: "USD Details",
        href: "#ways-to-give",
    },
    {
        icon: <Icons.Card />,
        title: "Bank (GHS)",
        desc: "Acc: 01216124102516 | UBA East Legon 2 | Swift: STBGGHAC",
        cta: "GHS Details",
        href: "#ways-to-give",
    },
    {
        icon: <Icons.Mail />,
        title: "Zelle",
        desc: "Thenewhousechurch@gmail.com",
        cta: "Zelle Email",
        href: "mailto:Thenewhousechurch@gmail.com",
    },
];

export default function GivePage() {
    const { ref: heroRef, visible: heroVisible } = useFadeUp(0.02);
    const { ref: methodsRef, visible: methodsVisible } = useFadeUp(0.05);
    const { ref: whyRef, visible: whyVisible } = useFadeUp(0.05);
    const { ref: legacyRef, visible: legacyVisible } = useFadeUp(0.05);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handle = requestAnimationFrame(() => {
            setMounted(true);
        });
        return () => cancelAnimationFrame(handle);
    }, []);

    return (
        <div className="flex flex-col bg-[var(--font-secondary-color)]">

            {/* ── 1. HERO ────────────────────────────────────────────────────── */}
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Cinematic Background Image with Zoom */}
                <div className="absolute inset-0">
                    <Image
                        src="/hero.jpg"
                        alt="Give to The New House Church"
                        fill
                        priority
                        className={`object-cover transition-transform duration-[20000ms] ease-out ${mounted ? "scale-110" : "scale-100"
                            }`}
                    />
                    {/* Overlay: Slightly heavier gradient for the give page */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
                </div>

                {/* Hero Content */}
                <div
                    ref={heroRef}
                    className={`relative z-10 flex flex-col items-center gap-6 px-6 text-center transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <p className="text-xs font-bold tracking-[0.4em] uppercase text-[var(--font-accent-color)]">
                        Generosity
                    </p>
                    <h1
                        className="font-black text-white leading-[0.9] tracking-tighter"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
                    >
                        Partnering<br />with the Vision
                    </h1>
                    <p
                        className="text-stone-300 text-lg sm:text-xl max-w-3xl leading-relaxed mx-auto font-medium"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        &ldquo;Bring the whole tithe into the storehouse...&rdquo; — Malachi 3:10.
                        Your generosity fuels the mission of TNHC to reach our community and the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link
                            href="#ways-to-give"
                            className="bg-white text-black font-extrabold text-sm tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
                        >
                            Ways to Give
                        </Link>
                        <Link
                            href="#ways-to-give"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-extrabold text-sm tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            More Ways
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── 2. SCRIPTURE BANNER ─────────────────────────────────────────── */}
            <div className="w-full bg-black py-10 px-6 text-center border-y border-white/5">
                <p
                    className="text-stone-400 text-lg sm:text-xl italic max-w-3xl mx-auto font-medium"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                    &ldquo;Each of you should give what you have decided in your heart to give,
                    not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
                </p>
                <div className="w-12 h-px bg-[var(--font-accent-color)] mx-auto mt-6" />
                <p className="text-white/40 text-xs mt-4 tracking-[0.3em] font-bold uppercase">
                    2 Corinthians 9:7
                </p>
            </div>

            {/* ── 3. GIVING METHODS ───────────────────────────────────────────── */}
            <section id="ways-to-give" className="w-full bg-[#0A0A0A] py-24 sm:py-32 border-y border-white/5">
                <div className="w-full max-w-6xl mx-auto px-6">
                    <div
                        ref={methodsRef}
                        className={`transition-all duration-1000 ${methodsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="text-center mb-20">
                            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-4">
                                Ways to Give
                            </h2>
                            <div className="w-20 h-1 bg-[var(--font-accent-color)] mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
                            {GIVING_METHODS.map((method, i) => (
                                <div
                                    key={i}
                                    className="group flex flex-col items-start gap-6 transition-all duration-500"
                                >
                                    {/* Modern Icon Holder - Dark Style */}
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[var(--font-accent-color)] group-hover:text-black group-hover:-translate-y-2 group-hover:rotate-3 shadow-lg group-hover:shadow-[0_0_30px_-10px_rgba(0,222,230,0.4)]">
                                        {method.icon}
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="font-black text-white text-lg tracking-tight uppercase">
                                            {method.title}
                                        </h3>
                                        <p
                                            className="text-stone-400 text-base leading-relaxed font-medium"
                                            style={{ fontFamily: "var(--font-dm-sans)" }}
                                        >
                                            {method.desc}
                                        </p>
                                    </div>

                                    <div className="mt-2">
                                        {method.external ? (
                                            <a
                                                href={method.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-stone-300 border-b-2 border-white/10 transition-all duration-300 hover:border-[var(--font-accent-color)] hover:text-white hover:gap-4"
                                            >
                                                {method.cta} <span className="text-lg">→</span>
                                            </a>
                                        ) : (
                                            <Link
                                                href={method.href}
                                                className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-stone-300 border-b-2 border-white/10 transition-all duration-300 hover:border-[var(--font-accent-color)] hover:text-white hover:gap-4"
                                            >
                                                {method.cta} <span className="text-lg">→</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. OUR COMMITMENT ───────────────────────────────────────────── */}
            <section className="w-full bg-[#F2F0EB] py-24 sm:py-32">
                <div ref={whyRef} className="w-full max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span
                            className={`inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-medium tracking-widest uppercase text-stone-500 mb-8 transition-all duration-700 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            Our Commitment
                        </span>
                        <h2
                            className={`text-black text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tighter uppercase mb-6 transition-all duration-700 delay-100 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            Investing in the Kingdom
                        </h2>
                        <div
                            className={`space-y-6 transition-all duration-700 delay-200 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            <p
                                className="text-black text-xl sm:text-2xl leading-relaxed italic font-medium max-w-4xl mx-auto"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                At TNHC, every aspect of the ministry is supported by the faithful tithes and offerings of our
                                members and partners. We believe that tithing is a personal responsibility to God that ensures
                                the &ldquo;maintenance, operating expenses, and construction&rdquo; of His house are provided for.
                            </p>
                            <p
                                className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                When you give, you are directly investing in souls, missions, and the growth of the Kingdom.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        <div className="bg-white/40 backdrop-blur-sm border border-black/5 p-8 rounded-2xl group hover:bg-white transition-all duration-500">
                            <h3 className="font-black text-xl mb-4 tracking-tight uppercase">Tithes & Offerings</h3>
                            <p className="text-stone-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Supports daily operations, employee compensation, and utilities.
                            </p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-sm border border-black/5 p-8 rounded-2xl group hover:bg-white transition-all duration-500">
                            <h3 className="font-black text-xl mb-4 tracking-tight uppercase">Building & Construction</h3>
                            <p className="text-stone-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Dedicated to the physical growth and maintenance of our sanctuary.
                            </p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-sm border border-black/5 p-8 rounded-2xl group hover:bg-white transition-all duration-500">
                            <h3 className="font-black text-xl mb-4 tracking-tight uppercase">Missions & Outreach</h3>
                            <p className="text-stone-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Funding our community projects and spreading the Gospel abroad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. LEGACY GIVING ─────────────────────────────────────────────── */}
            <section
                className="relative w-full py-28 sm:py-40 overflow-hidden bg-black"
            >
                {/* Cinematic Texture */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)",
                    }}
                />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
                    <div
                        ref={legacyRef}
                        className={`text-center space-y-8 transition-all duration-1000 ${legacyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="space-y-4">
                            <p className="text-xs font-black tracking-[0.4em] uppercase text-[var(--font-accent-color)]">
                                Impact for Generations
                            </p>
                            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter uppercase">
                                Legacy<br />Giving
                            </h2>
                        </div>

                        <p
                            className="text-stone-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            Leave a lasting mark on the church. Through a planned gift, you can ensure
                            The New House Church reaches Accra for years to come.
                        </p>

                        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="#"
                                className="w-full sm:w-auto bg-white text-black font-extrabold text-sm tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform duration-300"
                            >
                                Make a Commitment
                            </a>
                            <Link
                                href="/contact-us"
                                className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white font-extrabold text-sm tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:border-white transition-all duration-300"
                            >
                                Contact our team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. FOOTER CTA ────────────────────────────────────────────────── */}
            <section className="w-full bg-black py-20 border-t border-white/5">
                <div className="w-full max-w-3xl mx-auto px-6 text-center space-y-8">
                    <p
                        className="text-stone-400 text-lg font-medium"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        Have questions about where your gifts go? <br className="hidden sm:block" />
                        We&apos;re here to help.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact-us"
                            className="bg-white text-black font-black text-xs tracking-[0.2em] px-10 py-4 rounded-full hover:opacity-90 transition shadow-lg"
                        >
                            MESSAGE US
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
