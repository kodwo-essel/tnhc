'use client'

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const WelcomeSection: React.FC = () => {
    const [showVideo, setShowVideo] = useState(false);
    // Placeholder TNHC Welcome Video ID
    const videoId = "dQw4w9WgXcQ";

    return (
        <section className="w-full bg-[#F2F0EB] md:rounded-t-[4rem] mt-[-4rem]">
            <div className="w-full max-w-7xl mx-auto gap-10 flex flex-col md:flex-row gap-8 py-24 px-6 items-center justify-center">
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-16 md:px-6 items-stretch justify-center">
                    {/* Text column */}
                    <div className="flex-[1.5] flex flex-col justify-start items-start gap-8">
                        <h1 className="text-black text-4xl sm:text-5xl font-bold tracking-tight">WELCOME TO TNHC</h1>
                        <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-stone-800 text-xl sm:text-2xl leading-relaxed text-center sm:text-left">
                            We are a diverse, multi-generational, and energetic church that gathers in Accra, Ghana.
                            We believe God loves Ghana, and we will keep doing all that we can to reach our city -
                            <strong className="block sm:inline ml-1 text-black font-extrabold uppercase tracking-wide">until all of Accra is saved</strong>.
                        </p>

                        <Link
                            href="/starthere"
                            className="bg-black text-white text-md font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 w-max"
                        >
                            START YOUR JOURNEY
                        </Link>
                    </div>

                    {/* Video column - Premium Thumbnail + Modal Trigger */}
                    <div className="flex-1 relative aspect-video group cursor-pointer" onClick={() => setShowVideo(true)}>
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative bg-black">
                            {/* Static Thumbnail Replacement */}
                            <Image
                                src="/welcome.jpg"
                                alt="Welcome to TNHC"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-black backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[var(--font-accent-color)] transition-all duration-500 shadow-xl">
                                    <svg className="w-8 h-8 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover info */}
                            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">Watch Welcome Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                            title="Welcome to The New House Church"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default WelcomeSection;