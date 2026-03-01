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

// ─── Care Section ───────────────────────────────────────────────────────────
function CareSection({
    title,
    subtitle,
    body,
    image,
    reversed = false,
    visible,
}: {
    title: string;
    subtitle: string;
    body: string;
    image: string;
    reversed?: boolean;
    visible: boolean;
}) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 last:mb-0`}>
            {/* Image Side */}
            <div className={`relative transition-all duration-1000 ${reversed ? "lg:order-2" : ""} ${visible ? "opacity-100 translate-x-0" : reversed ? "opacity-0 translate-x-12" : "opacity-0 -translate-x-12"}`}>
                <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--font-accent-color)]/10 rounded-full blur-3xl -z-10" />
            </div>

            {/* Content Side */}
            <div className={`flex flex-col gap-6 transition-all duration-1000 delay-200 ${reversed ? "lg:order-1" : ""} ${visible ? "opacity-100 translate-x-0" : reversed ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"}`}>
                <div>
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-4 block underline decoration-[var(--font-accent-color)] decoration-4 underline-offset-8">
                        {subtitle}
                    </span>
                    <h2 className="text-white text-4xl sm:text-6xl font-black leading-[0.9] tracking-tighter uppercase">
                        {title}
                    </h2>
                </div>
                <p
                    className="text-stone-400 text-lg leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                    {body}
                </p>
                <div className="pt-4">
                    <Link
                        href="/contact-us"
                        className="inline-block border-2 border-white/20 text-white font-black text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        GET IN TOUCH
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function CarePage() {
    const { ref: introRef, visible: introVisible } = useFadeUp();
    const { ref: section1Ref, visible: section1Visible } = useFadeUp();
    const { ref: section2Ref, visible: section2Visible } = useFadeUp();
    const { ref: section3Ref, visible: section3Visible } = useFadeUp();
    const { ref: ctaRef, visible: ctaVisible } = useFadeUp();

    return (
        <div className="flex flex-col bg-black">
            {/* ── 1. CINEMATIC HERO ───────────────────────────────────────────── */}
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Care at TNHC"
                        fill
                        priority
                        className="object-cover object-bottom opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
                </div>

                <div className="relative z-10 text-center px-6 pt-20">
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-400 mb-6 block animate-fade-in">
                        You are not alone
                    </span>
                    <h1 className="text-white text-6xl sm:text-8xl lg:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                        WE CARE<br />FOR YOU
                    </h1>
                </div>
            </section>

            {/* ── 2. INTRO ─────────────────────────────────────────────────── */}
            <section className="w-full bg-black py-28 sm:py-48">
                <div ref={introRef} className="w-full max-w-4xl mx-auto px-6 text-center">
                    <p
                        className={`text-stone-400 text-xl sm:text-3xl leading-relaxed italic transition-all duration-1000 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        At The New House Church, we believe that carrying one another&apos;s burdens is at the heart of our community. Whether you are navigating a difficult season, celebrating a new beginning, or simply need someone to pray with, we are here for you.
                    </p>
                </div>
            </section>

            {/* ── 3. CARE SECTIONS ───────────────────────────────────────────── */}
            <section className="w-full bg-black pb-48">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div ref={section1Ref}>
                        <CareSection
                            title="PASTORAL CARE"
                            subtitle="Guidance & Support"
                            body="Our pastoral team is available to offer spiritual guidance, biblical counsel, and support during life's transitions. We provide a safe and confidential space for you to share your journey."
                            image="/pastor.jpg"
                            visible={section1Visible}
                        />
                    </div>

                    <div ref={section2Ref}>
                        <CareSection
                            title="PRACTICAL HELP"
                            subtitle="Community Action"
                            body="From providing meals during recovery to offering a helping hand with local needs, our care ministry is dedicated to being the hands and feet of Jesus in our city."
                            image="/this-week.png"
                            reversed
                            visible={section2Visible}
                        />
                    </div>

                    <div ref={section3Ref}>
                        <CareSection
                            title="PRAYER SUPPORT"
                            subtitle="Standing with You"
                            body="Prayer is our first response, not our last resort. Our prayer team is committed to standing with you in faith for every situation, believing for God's breakthrough in your life."
                            image="/prayer.jpg"
                            visible={section3Visible}
                        />
                    </div>
                </div>
            </section>

            {/* ── 4. FINAL CTA ────────────────────────────────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-28 sm:py-48 border-t border-white/5">
                <div ref={ctaRef} className={`w-full max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">How can we help?</span>
                    <h2 className="text-white text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-12">
                        REACH OUT TO OUR<br />CARE TEAM TODAY
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact-us"
                            className="bg-white text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-[var(--font-accent-color)] transition-all shadow-xl"
                        >
                            SUBMIT A REQUEST
                        </Link>
                        <Link
                            href="/give"
                            className="bg-white/5 backdrop-blur-md text-white border border-white/10 font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-white/10 transition-all font-bold"
                        >
                            SUPPORT THE MISSION
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
