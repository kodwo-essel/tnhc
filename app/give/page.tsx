"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// Fade-up animation hook
// ─────────────────────────────────────────────────────────────
function useFadeUp(threshold = 0.05) {
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
        icon: <Icons.Card />,
        title: "Give Online",
        desc: "The easiest way to give — securely online via debit, credit, or bank transfer. Set up a one-time or recurring gift in minutes.",
        cta: "Give Now",
        href: "https://pushpay.com/g/thenewhousechurch",
        external: true,
    },
    {
        icon: <Icons.Mail />,
        title: "Give by Mail",
        desc: "Make checks payable to \"The New House Church\" and mail to our church office address below.",
        cta: "Get Details",
        href: "/contact-us",
    },
    {
        icon: <Icons.Text />,
        title: "Give by Text",
        desc: "Text any amount to our secure short code. You'll be guided through a simple, secure one-time setup process.",
        cta: "Learn More",
        href: "/give#text-giving",
    },
];

export default function GivePage() {
    const heroAnim = useFadeUp(0.02);
    const methodsAnim = useFadeUp(0.05);
    const whyAnim = useFadeUp(0.05);
    const legacyAnim = useFadeUp(0.05);
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
                    ref={heroAnim.ref}
                    className={`relative z-10 flex flex-col items-center gap-6 px-6 text-center transition-all duration-1000 ${heroAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <p className="text-xs font-bold tracking-[0.4em] uppercase text-[var(--font-accent-color)]">
                        Generosity
                    </p>
                    <h1
                        className="font-black text-white leading-none tracking-tighter"
                        style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
                    >
                        GIVE
                    </h1>
                    <p
                        className="text-stone-300 text-lg sm:text-xl max-w-2xl leading-relaxed mx-auto font-medium"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        Your generosity fuels the mission. We believe every gift reflects
                        the heart of a giving God and impacts lives in Accra and beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <a
                            href="https://pushpay.com/g/thenewhousechurch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black font-extrabold text-sm tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
                        >
                            Give Now
                        </a>
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
                        ref={methodsAnim.ref}
                        className={`transition-all duration-1000 ${methodsAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="text-center mb-20">
                            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-4">
                                Ways to Give
                            </h2>
                            <div className="w-20 h-1 bg-[var(--font-accent-color)] mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14">
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
                                        <h3 className="font-black text-white text-2xl tracking-tight uppercase">
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

            {/* ── 4. WHY WE GIVE ──────────────────────────────────────────────── */}
            <section className="w-full bg-[#F2F0EB] py-24 sm:py-32">
                <div ref={whyAnim.ref} className="w-full max-w-4xl mx-auto px-6 text-center">
                    <span
                        className={`inline-block border border-stone-400 rounded-lg px-3 py-1 text-xs font-medium tracking-widest uppercase text-stone-500 mb-8 transition-all duration-700 ${whyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        Our Philosophy
                    </span>
                    <h2
                        className={`text-black text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tighter uppercase mb-10 transition-all duration-700 delay-100 ${whyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        Giving is an act<br className="hidden sm:block" /> of worship
                    </h2>
                    <div
                        className={`space-y-8 transition-all duration-700 delay-200 ${whyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <p
                            className="text-black text-xl sm:text-2xl leading-relaxed italic font-medium"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            At The New House Church, we believe that generosity is a spiritual discipline.
                            When we give, we reflect the heart of a God who gave His Son for us.
                        </p>
                        <p
                            className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            Your gifts fuel everything we do: from local outreach and building community
                            to investing in the next generation through our Kids and Youth ministries.
                            We are committed to faithful stewardship of every gift entrusted to us.
                        </p>
                    </div>
                    <div
                        className={`pt-12 transition-all duration-700 delay-300 ${whyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <Link
                            href="/about"
                            className="text-xs font-black tracking-[0.2em] uppercase text-black border-b-2 border-black pb-1 hover:text-[var(--font-accent-color)] hover:border-[var(--font-accent-color)] transition-all"
                        >
                            Learn more about our mission
                        </Link>
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
                        ref={legacyAnim.ref}
                        className={`text-center space-y-8 transition-all duration-1000 ${legacyAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
