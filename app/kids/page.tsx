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
    const { ref: ageGroupsRef, visible: ageGroupsVisible } = useFadeUp(0.05);
    const { ref: policiesRef, visible: policiesVisible } = useFadeUp(0.05);

    return (
        <div className="flex flex-col bg-white">
            {/* ── 1. HERO ──────────────────────────────────────────────────── */}
            <section className="relative w-full h-[60vh] sm:h-[80vh] flex items-end justify-start overflow-hidden bg-stone-900">
                <Image
                    src="/kids-hero.png"
                    alt="Tnhc Kids Ministry"
                    fill
                    className="object-cover object-center scale-105 active:scale-100 transition-transform duration-[10s]"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />

                <div
                    ref={heroRef}
                    className={`relative z-10 px-8 pb-12 sm:px-16 sm:pb-16 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h1
                        className="font-bold text-white leading-none uppercase"
                        style={{ fontSize: "clamp(3.5rem, 15vw, 12rem)", letterSpacing: "0.08em" }}
                    >
                        KIDS
                    </h1>
                </div>
            </section>

            {/* ── 2. INTRO SECTION ─────────────────────────────────────────── */}
            <section className="w-full py-24 px-6 border-b border-stone-100">
                <div
                    ref={introRef}
                    className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 mb-6">
                        The New House Church
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 leading-tight">
                        A Genuine Walk With Jesus
                    </h2>
                    <div className="w-16 h-1 bg-black/10 mx-auto mb-8" />
                    <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-dm-sans text-left max-w-3xl mx-auto">
                        <p>
                            The purpose of The New House Church Children’s Ministry is to minister to the needs of
                            children between the ages of 3 to 13 years old enabling them to have a genuine walk and
                            experience with Jesus.
                        </p>
                        <p>
                            Our children are taught that the presence and the power of the Holy
                            Spirit resides in them at all times. They are taught to engage in The Word, prayer, praise and
                            worship, and testimonies.
                        </p>
                        <p>
                            The Word is ministered at their level through modern, creative and
                            strategic, yet uncompromising methods. Our children are taught reverence and obedience to
                            God, His House and His Word as well as honor for parents and authority.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 3. VALUES ────────────────────────────────────────────────── */}
            <section className="w-full py-20 bg-stone-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        ref={valuesRef}
                        className={`transition-all duration-1000 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-8 text-left">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-black uppercase tracking-tight">TNHC Kids is focused on…</h3>
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-auto bg-[rgb(0,222,230)] shrink-0" />
                                        <p className="text-stone-600 font-dm-sans text-lg">
                                            Touching children’s hearts with the good news of who Jesus is and what He has done for them and
                                            helping them to get to know their Best Friend for life.
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-auto bg-black shrink-0" />
                                        <p className="text-stone-600 font-dm-sans text-lg">
                                            We often say our children are the future of the church. Children are not merely a resource for
                                            the future but are part of the church in this generation. They are a major part of the body of
                                            Christ now, TODAY!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. PARENT PARTNERSHIP ────────────────────────────────────────── */}
            <section className="w-full py-24 px-6 bg-[#0A0A0A] text-white">
                <div
                    ref={ageGroupsRef}
                    className={`max-w-4xl mx-auto transition-all duration-1000 ${ageGroupsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-8 block underline decoration-[rgb(0,222,230)] decoration-4 underline-offset-8 w-max">Parent Partnership</span>
                    <h2 className="text-4xl sm:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-12">
                        CHURCH & HOME<br /><span className="text-stone-500">UNITED</span>
                    </h2>

                    <div className="space-y-8 text-lg font-dm-sans leading-relaxed text-stone-300">
                        <p>
                            While the church provides valuable teaching and guidance, it is essential that parents take an
                            active role in reinforcing these lessons within the home environment. By integrating the Word of
                            God into daily life, parents have the unique opportunity to shape their child’s faith journey,
                            cultivating a deeper understanding and personal relationship with God.
                        </p>
                        <p>
                            Parents should create an atmosphere of prayer, Bible study, and worship, allowing their children to see faith in action.
                            This partnership between the church and the home ensures that children grow up with a solid
                            foundation in God&apos;s Word, making their spiritual growth an ongoing and natural part of their
                            lives.
                        </p>
                        <p className="text-white italic font-bold">
                            To achieve the mission of training our children in the way they should go, the participation of all parents is
                            required. Thank you for your co-operation and support!
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 5. POLICIES ──────────────────────────────────────────────── */}
            <section className="w-full py-24 bg-stone-900 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        ref={policiesRef}
                        className={`space-y-16 transition-all duration-1000 ${policiesVisible ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-4">Policies</h2>
                            <div className="w-12 h-0.5 bg-white/20" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {POLICIES.map((p) => (
                                <div key={p.title} className="space-y-4">
                                    <h4 className="text-white font-bold text-sm tracking-widest uppercase border-l-2 border-stone-500 pl-4">
                                        {p.title}
                                    </h4>
                                    <p className="text-stone-400 text-sm leading-relaxed font-dm-sans pl-4">
                                        {p.content}
                                    </p>
                                </div>
                            ))}
                            <div className="space-y-4">
                                <h4 className="text-[rgb(0,222,230)] font-bold text-sm tracking-widest uppercase border-l-2 border-[rgb(0,222,230)] pl-4">
                                    NB
                                </h4>
                                <p className="text-white text-sm leading-relaxed font-dm-sans pl-4 italic">
                                    Nursing mother will take care of infants at the nursing mothers section.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. FOOTER CTA ────────────────────────────────────────────── */}
            <section className="w-full py-24 px-6 bg-white border-t border-stone-100">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold text-black uppercase tracking-tight">Wait, I Have A Question!</h2>
                    <p className="text-stone-600 font-dm-sans">
                        Our kids team would love to help. Click below to reach out, or pre-register your family
                        to save time on Sunday morning.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact-us"
                            className="bg-black text-white font-bold text-sm px-10 py-4 rounded-lg hover:opacity-80 transition tracking-widest uppercase"
                        >
                            Ask A Question
                        </Link>
                        <a
                            href="https://tnhc.ccbchurch.com/goto/forms/373/responses/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-black text-black font-bold text-sm px-10 py-4 rounded-lg hover:bg-black hover:text-white transition tracking-widest uppercase"
                        >
                            Register Family
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
