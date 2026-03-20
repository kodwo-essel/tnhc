"use client";

import React from "react";
import Image from "next/image";

const FLOW_STEPS = [
    {
        title: "ARRIVE",
        description: "When you pull up, our team will be there to welcome you. Parking is easy and clearly marked.",
        image: "/plan1.jpg",
    },
    {
        title: "WELCOME",
        description: "Head to the Welcome Center. We have a special gift for you and can help you find your way around.",
        image: "/plan2.jpg",
    },
    {
        title: "KIDS & YOUTH",
        description: "If you have kids, we'll help you get them checked into our safe and fun TNHC Kids program.",
        image: "/plan3.jpg",
    },
    {
        title: "CONNECTION CARD",
        description: "During the service, fill out a connection card. It's the best way for us to get to know you.",
        image: "/plan4-connectioncardfront.jpg",
    },
    {
        title: "STAY IN TOUCH",
        description: "Drop your card at the Welcome Center on your way out for a special 'First Time' gift!",
        image: "/plan5-connectioncardback.jpg",
    },
    {
        title: "COMMUNITY",
        description: "After service, stick around for fellowship. We'd love to meet you and hear your story.",
        image: "/plan6.jpg",
    },
];

export default function PlanVisitFlow() {
    return (
        <section className="w-full bg-stone-100 py-24 sm:py-32 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">The Sunday Flow</span>
                    <h2 className="text-black text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-6">WHAT TO EXPECT</h2>
                    <p className="text-stone-600 text-lg max-w-2xl mx-auto font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        We've designed every step of your visit to be simple, welcoming, and meaningful. Here's how it goes.
                    </p>
                </div>

                <div className="relative">
                    {/* Progress Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[150px] left-0 right-0 h-0.5 bg-stone-200 -z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
                        {FLOW_STEPS.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                {/* Step Number */}
                                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-sm mb-8 z-10 transition-transform duration-500 group-hover:scale-110">
                                    {index + 1}
                                </div>

                                {/* Image Container */}
                                <div className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                {/* Text */}
                                <h3 className="text-2xl font-black tracking-tight uppercase mb-4 text-black">{step.title}</h3>
                                <p className="text-stone-600 text-base leading-relaxed font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
