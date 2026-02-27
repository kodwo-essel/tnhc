"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const SOCIAL_HANDLES = [
  {
    platform: "Instagram",
    handle: "@TNHC",
    href: "https://www.instagram.com/tnhc",
    color: "#E1306C",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    handle: "@tnhcgh",
    href: "https://www.youtube.com/@thenewhousechurchgh",
    color: "#FF0000",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    platform: "Spotify",
    handle: "The New House Church",
    href: "https://open.spotify.com",
    color: "#1DB954",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.558 17.311c-.221.362-.689.479-1.05.258-2.883-1.762-6.511-2.161-10.785-1.185-.411.094-.821-.161-.916-.572-.094-.411.161-.821.572-.916 4.673-1.069 8.675-.615 11.919 1.368.362.221.478.689.259 1.051zm1.481-3.262c-.279.453-.873.593-1.325.314-3.298-2.028-8.327-2.617-12.23-1.429-.511.155-1.054-.131-1.209-.641-.155-.511.131-1.054.641-1.209 4.457-1.353 10.003-.699 13.81 1.64.452.278.592.872.313 1.325zm.126-3.414C15.258 7.828 8.61 7.608 4.776 8.771c-.604.183-1.242-.164-1.425-.768-.183-.604.164-1.242.768-1.425 4.398-1.334 11.724-1.082 16.208 1.579.543.321.72 1.021.399 1.564-.321.543-1.021.72-1.564.399z" />
      </svg>
    ),
  },
  {
    platform: "TikTok",
    handle: "@TNHC",
    href: "https://www.tiktok.com/@tnhc",
    color: "#00f2ea",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3a2.964 2.964 0 0 0-1.28 2.1c-.02.83.21 1.64.67 2.34.46.7 1.16 1.25 1.95 1.5 1.34.45 2.93.08 3.94-.96.53-.55.82-1.28.89-2.04.14-2.8.03-5.6.07-8.41.02-3.13.01-6.26.01-9.39z" />
      </svg>
    ),
  },
  {
    platform: "X",
    handle: "@TNHC",
    href: "https://x.com/tnhc",
    color: "#ffffff",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black px-6 py-24 sm:py-40">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-24">
          <h2
            className={`text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Stay connected. <br /> Follow the journey.
          </h2>
          <div
            className={`w-28 h-1 bg-[var(--font-accent-color)] transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />
        </div>

        {/* Social Handles - Cardless Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-16 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {SOCIAL_HANDLES.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6"
                style={{ color: '#fff' }}
              >
                <div className="transition-colors duration-500 group-hover:text-[var(--font-accent-color)]" style={{ color: 'white' }}>
                  {social.icon}
                </div>
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="text-stone-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                  {social.platform}
                </p>
                <h3 className="text-stone-300 text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 group-hover:text-white">
                  {social.handle}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Quote / Link */}
        <div className="mt-32 text-center">
          <p className="text-stone-300 text-lg sm:text-2xl italic font-medium mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            &ldquo;A reminder that God&rsquo;s house is filled with joy, not just reverence.&rdquo;
          </p>
          <a
            href="https://www.instagram.com/thenewhousechurch"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block border-2 border-stone-800 text-stone-400 hover:text-white hover:border-white text-xs font-black tracking-[0.2em] uppercase px-12 py-5 rounded-full transition-all duration-300 ${visible ? "opacity-100" : "opacity-0"
              }`}
          >
            Not convinced? The feed says it all. →
          </a>
        </div>
      </div>
    </section>
  );
}