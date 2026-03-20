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
// Types & Data
// ─────────────────────────────────────────────────────────────
const POLICIES = [
    {
        title: "Snack Policy",
        content: "We are a Nut Free facility. We ask that you avoid packing any snacks that contain nuts. If your child has allergies, please let their teacher know at drop off.",
    },
    {
        title: "Sick Policy",
        content: "We request children stay home if they have fever, cough, runny nose, rash, vomiting, or diarrhea. Children should be symptom-free for at least 5 days before attending.",
    },
    {
        title: "Diaper / Potty",
        content: "We provide diaper-changing services for Nursery and Toddlers. Kids attending our preschool classroom must be fully potty trained.",
    },
    {
        title: "Parent Policy",
        content: "To ensure the safety and focused learning environment for all children, TNHC does not allow parents to enter classrooms during programming.",
    },
];

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export default function KidsPage() {
    const { ref: heroRef, visible: heroVisible } = useFadeUp(0.02);
    const { ref: introRef, visible: introVisible } = useFadeUp(0.05);
    const { ref: valuesRef, visible: valuesVisible } = useFadeUp(0.05);
    const { ref: groupsRef, visible: groupsVisible } = useFadeUp(0.05);
    const { ref: galleryRef, visible: galleryVisible } = useFadeUp(0.05);
    const { ref: parentRef, visible: parentVisible } = useFadeUp(0.05);
    const { ref: policiesRef, visible: policiesVisible } = useFadeUp(0.05);

    return (
        <div className="flex flex-col bg-black overflow-hidden selection:bg-[rgb(0,222,230)] selection:text-black">
            {/* ── 1. HERO (GRID) ────────────────────────────────────────────── */}
            <section className="relative w-full h-[80vh] sm:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 grid grid-cols-2 gap-1 animate-slow-zoom opacity-40">
                    <div className="relative h-full">
                        <Image src="/kid1.jpg" alt="TNHC Kids 1" fill className="object-cover" priority />
                    </div>
                    <div className="relative h-full">
                        <Image src="/kid2.jpg" alt="TNHC Kids 2" fill className="object-cover" priority />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-0" />

                <div
                    ref={heroRef}
                    className={`relative z-10 text-center transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <span className="text-[rgb(0,222,230)] text-[10px] font-black tracking-[0.6em] uppercase mb-6 block">The New House Church</span>
                    <h1
                        className="font-black text-white leading-[0.8] uppercase mb-8"
                        style={{ fontSize: "clamp(4.5rem, 20vw, 15rem)", letterSpacing: "-0.04em" }}
                    >
                        TNHC<br /><span className="text-stone-500">SEEDS</span>
                    </h1>
                    <div className="w-16 h-1 bg-white mx-auto rounded-full opacity-20" />
                </div>
            </section>

            {/* ── 2. MISSION & PURPOSE (DARK) ─────────────────────────────────── */}
            <section className="w-full py-24 sm:py-40 px-6 bg-black relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div ref={introRef} className={`max-w-6xl mx-auto transition-all duration-1000 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <span className="text-stone-500 text-[10px] font-black tracking-[0.4em] uppercase">The Vision</span>
                            <h2 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                                A GENUINE<br />WALK WITH<br /><span className="text-[rgb(0,222,230)]">JESUS</span>
                            </h2>
                            <p className="text-xl text-stone-400 leading-relaxed font-medium max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                The purpose of TNHC Kids is to minister to the needs of children between 3 to 13 years old, enabling them to have a genuine walk and experience with Jesus.
                            </p>
                        </div>
                        <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                            <Image src="/kid1.jpg" alt="Kids Ministry" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. CORE FOCUS (REFRACTED DARK) ───────────────────────────────── */}
            <section className="w-full py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div ref={valuesRef} className={`grid grid-cols-1 md:grid-cols-2 gap-1 transition-all duration-1000 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="bg-white/[0.02] p-16 border border-white/5 hover:bg-white/[0.04] transition-colors duration-500">
                            <span className="text-[rgb(0,222,230)] font-black text-xs tracking-widest uppercase mb-8 block">01</span>
                            <h3 className="text-3xl font-black tracking-tight uppercase mb-8 text-white">Heart Connection</h3>
                            <p className="text-stone-500 text-lg leading-relaxed font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Touching children&apos;s hearts with the good news of who Jesus is and what He has done for us, helping them get to know their Best Friend for life.
                            </p>
                        </div>
                        <div className="bg-white/[0.02] p-16 border border-white/5 hover:bg-white/[0.04] transition-colors duration-500">
                            <span className="text-white font-black text-xs tracking-widest uppercase mb-8 block">02</span>
                            <h3 className="text-3xl font-black tracking-tight uppercase mb-8 text-white">Part of the Body</h3>
                            <p className="text-stone-500 text-lg leading-relaxed font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Children are not merely a resource for the future but are part of the church in this generation. They are a major part of the body of Christ now, <span className="text-white font-bold">TODAY!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. CLASSES (DARK GRID) ───────────────────────────────────────── */}
            <section className="w-full py-32 sm:py-48 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div ref={groupsRef} className={`text-left mb-24 transition-all duration-1000 ${groupsVisible ? "opacity-100" : "opacity-0"}`}>
                        <span className="text-[rgb(0,222,230)] text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">Our Classes</span>
                        <h2 className="text-5xl sm:text-8xl font-black tracking-tighter uppercase text-white leading-[0.8]">GROWING<br />TOGETHER</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {/* Nursery & Toddlers */}
                        <div className="space-y-10 group">
                            <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image src="/kid3.jpg" alt="Nursery & Toddlers" fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-white text-3xl font-black tracking-tight uppercase">Nursery & Toddlers</h3>
                                <div className="w-12 h-1 bg-[rgb(0,222,230)]" />
                                <p className="text-stone-500 font-medium text-lg leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>Safe and loving environments for our youngest seeds to sprout.</p>
                            </div>
                        </div>
                        {/* Elementary */}
                        <div className="space-y-10 group md:mt-32">
                            <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image src="/kid4.jpg" alt="Elementary" fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-white text-3xl font-black tracking-tight uppercase">Elementary</h3>
                                <div className="w-12 h-1 bg-white" />
                                <p className="text-stone-500 font-medium text-lg leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>Dynamic teaching, worship, and fun for kids ages 6 to 13.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. PHOTO GALLERY (INFINITY SCROLL) ────────────────────────────── */}
            <section className="w-full py-24 bg-[#050505] overflow-hidden">
                <div ref={galleryRef} className={`transition-all duration-1000 ${galleryVisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex animate-scroll-left hover:[animation-play-state:paused] gap-1 px-4">
                        {[1, 2, 3, 4, 1, 2, 3, 4].map((num, i) => (
                            <div key={i} className="flex-none w-[300px] sm:w-[450px] aspect-[4/5] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                <Image src={`/kid${num}.jpg`} alt={`Kids at TNHC ${num}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. PARENT PARTNERSHIP (MINIMAL DARK) ─────────────────────────── */}
            <section className="w-full py-32 sm:py-48 bg-black relative">
                <div ref={parentRef} className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${parentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <h2 className="text-5xl sm:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-12">
                        CHURCH & HOME<br /><span className="text-stone-700 italic">UNITED</span>
                    </h2>
                    <div className="space-y-10 text-xl text-stone-400 font-medium leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <p>
                            While the church provides valuable teaching, it is essential that parents take an active role in reinforcing these lessons at home.
                        </p>
                        <div className="h-px w-24 bg-white/10 mx-auto my-12" />
                        <p className="text-white font-bold tracking-tight">
                            &quot;Parents should create an atmosphere of prayer, Bible study, and worship, allowing their children to see faith in action.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 7. POLICIES & SAFETY (GRID DARK) ─────────────────────────────── */}
            <section className="w-full py-32 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div ref={policiesRef} className={`transition-all duration-1000 ${policiesVisible ? "opacity-100" : "opacity-0"}`}>
                        <div className="flex justify-between items-end mb-24">
                            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white">POLICIES<br />& SAFETY</h2>
                            <span className="text-[rgb(0,222,230)] text-[10px] font-black tracking-[0.4em] uppercase hidden sm:block">Priority One</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                            {[
                                { title: "Health & Wellness", desc: "To keep our environment healthy, children who are unwell or symptomatic should remain with their parents.", border: "border-[rgb(0,222,230)]" },
                                { title: "Allergies & Alerts", desc: "Notify our tutors of any allergic reactions or medical needs. Your child's safety is our total priority.", border: "border-white" },
                                { title: "Nursing Mothers", desc: "We provide a quiet, private Nursing Suite—a dedicated space to care for and live-stream the service.", border: "border-red-500" }
                            ].map((item, i) => (
                                <div key={i} className="bg-black p-12 space-y-8">
                                    <h4 className={`text-xl font-black uppercase tracking-tight text-white border-l-4 ${item.border} pl-6`}>{item.title}</h4>
                                    <p className="text-stone-500 font-medium leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 8. FINAL CTA (BOLD DARK) ─────────────────────────────────────── */}
            <section className="w-full py-32 sm:py-48 px-6 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-6xl sm:text-8xl font-black text-white uppercase tracking-tighter mb-12">HAVE A<br />QUESTION?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact-us"
                            className="bg-white text-black font-black text-[10px] tracking-[0.4em] uppercase px-14 py-7 rounded-full hover:bg-[rgb(0,222,230)] transition-all shadow-2xl"
                        >
                            Contact Us
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

