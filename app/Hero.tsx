"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 1. Cinematic Background Image with Zoom */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="The New House Church"
          fill
          priority
          className={`object-cover object-bottom transition-transform duration-[20000ms] ease-out scale-100 ${mounted ? "scale-110" : "scale-100"
            }`}
        />
        {/* Visual Overlay: Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/90" />
      </div>

      {/* 2. Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <div
          className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-4">
            THE NEW HOUSE <span className="block sm:inline">CHURCH</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-stone-300 text-lg sm:text-2xl font-medium tracking-wide max-w-2xl mx-auto mb-10"
          >
            Truth. Fellowship. Revival.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/new"
              // style={{ backgroundColor: "var(--font-accent-color)" }}
              className="w-full sm:w-auto text-black bg-white font-extrabold text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Plan a Visit
            </Link>
            <Link
              href="/watch"
              className="w-full sm:w-auto bg-red-600 backdrop-blur-md text-white font-extrabold text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full border border-white/20 transition-all duration-300 shadow-xl"
            >
              Watch Online
            </Link>
          </div>
        </div>

        {/* Scroll Indicator (Optional) */}
        <div className="absolute bottom-10 animate-bounce transition-opacity duration-1000 delay-1000 opacity-60">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}