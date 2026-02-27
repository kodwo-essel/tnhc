"use client";

import React, { useEffect, useRef, useState } from "react";
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

// ─── Speaker Card ──────────────────────────────────────────────────────────
function SpeakerCard({ name, role, image, delay }: { name: string; role: string; image: string; delay: string }) {
    const { ref, visible } = useFadeUp<HTMLDivElement>();
    return (
        <div
            ref={ref}
            className={`group flex flex-col items-center text-center transition-all duration-1000 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
            <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-white/10 group-hover:border-[var(--font-accent-color)]/50">
                <Image src={image} alt={name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2">{name}</h3>
            <p className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase">{role}</p>
        </div>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ConferencePage() {
    const { ref: visionRef, visible: visionVisible } = useFadeUp();
    const { ref: speakersRef, visible: speakersVisible } = useFadeUp();
    const { ref: scheduleRef, visible: scheduleVisible } = useFadeUp();
    const { ref: footerRef, visible: footerVisible } = useFadeUp();

    return (
        <div className="flex flex-col bg-black">
            {/* Grain Overlay */}
            <div className="fixed inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/grain.png')] z-50" />

            {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
            <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="T Conference 2026"
                        fill
                        priority
                        className="object-cover opacity-50 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-400 mb-6 block animate-fade-in">
                        The New House Church Presents
                    </span>
                    <h1 className="text-white text-[12vw] sm:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-6 animate-fade-in-up">
                        T CONF<br />2026
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-8 items-center justify-center mt-12 animate-fade-in delay-1000">
                        <div className="text-left border-l-2 border-[var(--font-accent-color)] pl-6">
                            <p className="text-white text-xl font-black uppercase italic">May 15-17</p>
                            <p className="text-stone-500 text-xs font-bold tracking-widest uppercase mt-1">Accra, Ghana</p>
                        </div>
                        <a
                            href="#register"
                            className="bg-[var(--font-accent-color)] text-black font-black text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-[var(--font-accent-color)]/20"
                        >
                            Secure Your Seat
                        </a>
                    </div>
                </div>
            </section>

            {/* ── 2. VISION SECTION ────────────────────────────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-32 px-6 border-y border-white/5">
                <div ref={visionRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className={`flex-1 transition-all duration-1000 ${visionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-8 block underline decoration-[var(--font-accent-color)] decoration-4 underline-offset-8 w-max">The Vision</span>
                        <h2 className="text-white text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-10">
                            THE FUTURE<br /><span className="text-stone-500">IS UNWRITTEN</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-white text-xl sm:text-2xl leading-relaxed italic font-medium opacity-90" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                T Conference is not just a meeting. It&apos;s a gathering of minds, hearts, and spirits determined to reshape the landscape of our city.
                            </p>
                            <p className="text-stone-400 text-lg leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Join us for three days of deep worship, revolutionary teaching, and strategic conversations. We are gathering leaders, creatives, and dreamers from across the nation to ask one question: How do we walk into what God is already doing?
                            </p>
                        </div>
                    </div>
                    <div className={`flex-1 relative aspect-square transition-all duration-1000 delay-300 ${visionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                        <div className="w-full h-full rounded-[4rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                            <Image src="/prayer.jpg" alt="Conference Vision" fill className="object-cover" />
                        </div>
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[var(--font-accent-color)]/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </section>

            {/* ── 3. SPEAKERS ──────────────────────────────────────────────────── */}
            <section ref={speakersRef} className="w-full bg-black py-32 px-6">
                <div className={`max-w-7xl mx-auto transition-all duration-1000 ${speakersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="text-center mb-24">
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Voice of the generation</span>
                        <h2 className="text-white text-5xl sm:text-[7rem] font-black leading-[0.8] tracking-tighter uppercase">SPEAKERS</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                        <SpeakerCard name="Pastor David R. King" role="Host & Senior Pastor" image="/pastor.jpg" delay="delay-0" />
                        <SpeakerCard name="Pastor Vanessa King" role="Host & Lead Pastor" image="/lady-pastor.jpg" delay="delay-200" />
                        <SpeakerCard name="Guest Speaker" role="Visionary Leader" image="/speaker.jpg" delay="delay-400" />
                    </div>
                </div>
            </section>

            {/* ── 4. SCHEDULE ──────────────────────────────────────────────────── */}
            <section className="w-full bg-[#0A0A0A] py-32 px-6">
                <div ref={scheduleRef} className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className={`lg:w-1/3 transition-all duration-1000 ${scheduleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                            <h2 className="text-white text-6xl font-black tracking-tighter uppercase sticky top-32">THE<br />SYLLABUS</h2>
                        </div>
                        <div className="lg:w-2/3 flex flex-col gap-1">
                            {[
                                { day: "Day 01", title: "THE AWAKENING", time: "Friday, 6pm - 9pm" },
                                { day: "Day 02", title: "THE EQUIPPING", time: "Saturday, 9am - 4pm" },
                                { day: "Day 03", title: "THE SENDING", time: "Sunday, 10am - 1pm" },
                            ].map((item, i) => (
                                <div key={i} className={`group py-12 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 transition-all duration-1000 ${scheduleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div>
                                        <p className="text-[var(--font-accent-color)] text-xs font-bold tracking-[0.4em] uppercase mb-2">{item.day}</p>
                                        <h3 className="text-white text-4xl sm:text-5xl font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{item.title}</h3>
                                    </div>
                                    <p className="text-stone-500 text-sm font-bold tracking-widest uppercase">{item.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. FINAL CTA ─────────────────────────────────────────────────── */}
            <section id="register" className="relative w-full py-40 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/prayer.jpg" alt="Register" fill className="object-cover grayscale brightness-[0.2]" />
                </div>
                <div ref={footerRef} className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <h2 className="text-white text-6xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-12">DON&apos;T MISS<br />YOUR MOMENT.</h2>
                    <a
                        href="https://forms.gle/placeholder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black font-black text-sm tracking-[0.2em] uppercase px-16 py-6 rounded-full hover:scale-105 transition-all shadow-2xl"
                    >
                        Register Now
                    </a>
                    <p className="text-stone-500 text-xs font-bold tracking-[0.4em] uppercase mt-12">Early bird pricing ends April 1st.</p>
                </div>
            </section>
        </div>
    );
}
