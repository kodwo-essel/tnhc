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
interface AgeGroup {
    title: string;
    age: string;
    description: string;
    image?: string;
}

const AGE_GROUPS: AgeGroup[] = [
    {
        title: "Nursery",
        age: "Birth - 18 months",
        image: "/kids-nursery.png",
        description: "Your child will experience fun learning activities, play with others their age and receive focused love and attention from our leaders. Every baby is prayed over before they leave our classroom.",
    },
    {
        title: "Toddlers",
        age: "18 months - 2 years",
        description: "Your child will experience age-appropriate worship, a Bible Storybook or puppet show, games and crafts that teach about how much God loves them.",
    },
    {
        title: "Preschool",
        age: "3 years - Kindergarten",
        description: "Children have time to play, make friends, watch fun videos about the Bible, and engage in age-appropriate learning activities in a safe environment.",
    },
    {
        title: "Elementary",
        age: "Grades 1 - 6",
        image: "/kids-elementary.png",
        description: "We teach the Bible in a way that addresses real issues children face. They'll engage in games and activities with peers and have focused time with leaders who make sure every child knows they are loved by God.",
    },
];

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
                        Connect, Grow, and Thrive
                    </h2>
                    <div className="w-16 h-1 bg-black/10 mx-auto mb-8" />
                    <p className="text-lg text-stone-600 leading-relaxed font-dm-sans">
                        Families are what make up TNHC — and we know your kids are going to love it here.
                        Our goal at TNHC Kids is to connect kids to God and to each other through fun and
                        interactive programming for all ages.
                    </p>
                </div>
            </section>

            {/* ── 3. VALUES ────────────────────────────────────────────────── */}
            <section className="w-full py-20 bg-stone-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        ref={valuesRef}
                        className={`grid grid-cols-2 lg:grid-cols-5 gap-8 transition-all duration-1000 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        {["Discover", "Connect", "Grow", "Serve", "Share"].map((v, i) => (
                            <div key={v} className="flex flex-col items-center gap-4 text-center">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-stone-300 border border-stone-100">
                                    0{i + 1}
                                </div>
                                <h3 className="font-bold text-sm tracking-widest uppercase text-stone-800">{v}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. AGE GROUPS ────────────────────────────────────────────── */}
            <section className="w-full py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div
                        ref={ageGroupsRef}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${ageGroupsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        {AGE_GROUPS.map((group) => (
                            <div key={group.title} className="flex flex-col gap-6 group">
                                {group.image && (
                                    <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden bg-stone-100 shadow-md">
                                        <Image
                                            src={group.image}
                                            alt={group.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )}
                                <div className="space-y-3">
                                    <div className="flex items-baseline gap-3">
                                        <h3 className="text-2xl font-bold text-black uppercase tracking-tight">{group.title}</h3>
                                        <span className="text-sm font-bold text-stone-400 font-dm-sans">{group.age}</span>
                                    </div>
                                    <p className="text-stone-600 leading-relaxed font-dm-sans">
                                        {group.description}
                                    </p>
                                </div>
                            </div>
                        ))}
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
