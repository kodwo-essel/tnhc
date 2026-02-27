"use client";

import Link from "next/link";
import Image from "next/image";

const footerColumns = [
    {
        title: "Explore",
        links: [
            { label: "Home", href: "/", external: false },
            { label: "I'm New", href: "/new", external: false },
            { label: "Watch", href: "/watch", external: false },
            { label: "Give", href: "/give", external: false },
            { label: "Contact", href: "/contact-us", external: false },
        ],
    },
    {
        title: "About",
        links: [
            { label: "About", href: "/about", external: false },
            { label: "Pastors", href: "/about-pastors", external: false },
            { label: "History", href: "/about-history", external: false },
            { label: "Elders", href: "/about-elders", external: false },
        ],
    },
    {
        title: "Connect",
        links: [
            { label: "Start Here", href: "/starthere", external: false },
            { label: "Baptism", href: "/baptism", external: false },
            { label: "Kids", href: "/kids", external: false },
            { label: "Youth", href: "/youth", external: false },
        ],
    },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/tnhcaccra/",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/tnhc",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
        )
    }
];

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] text-white pt-28 pb-14 overflow-hidden">
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/grain.png')]" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. TOP: LARGE BRANDING & NEWSLETTER */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-28">
                    <div className="max-w-xl">
                        <Link href="/" className="inline-block mb-10">
                            <Image
                                src="/logo/logo-transparent.png"
                                alt="TNHC"
                                width={180}
                                height={90}
                                className="object-contain brightness-0 invert opacity-90"
                            />
                        </Link>
                        <h2 className="text-4xl sm:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                            UNTIL ALL OF<br />ACCRA IS SAVED.
                        </h2>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:max-w-md">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-500 mb-6 block">Join the heartbeat</span>
                        <p className="text-stone-400 text-sm mb-8 font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                            Stay updated with our weekly gatherings, community events, and stories of what God is doing in our city.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col gap-4"
                        >
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-2xl text-xs font-black tracking-widest text-white placeholder-stone-600 focus:outline-none focus:border-[var(--font-accent-color)]/30 transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-black text-xs tracking-[0.2em] py-5 rounded-2xl hover:bg-[var(--font-accent-color)] transition-all transform hover:scale-[1.02] shadow-2xl"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>

                {/* 2. MIDDLE: LINK COLUMNS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-20 pb-28">
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-500 mb-8 underline decoration-[var(--font-accent-color)] decoration-2 underline-offset-8">
                                {col.title}
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-stone-400 text-sm font-medium hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                                                style={{ fontFamily: "var(--font-dm-sans)" }}
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-stone-400 text-sm font-medium hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                                                style={{ fontFamily: "var(--font-dm-sans)" }}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Location Info */}
                    <div>
                        <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-500 mb-8 underline decoration-[var(--font-accent-color)] decoration-2 underline-offset-8">
                            Gatherings
                        </h3>
                        <div className="flex flex-col gap-6">
                            <div className="space-y-1">
                                <p className="text-white text-sm font-black tracking-tighter uppercase">Sundays @ 10AM</p>
                                <p className="text-stone-400 text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>The Palms, Accra</p>
                            </div>
                            <Link
                                href="/new"
                                className="text-[10px] font-black tracking-widest uppercase text-[var(--font-accent-color)] hover:opacity-70 transition-opacity"
                            >
                                PLAN A VISIT →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 3. BOTTOM: SIGNATURE */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
                    <p className="text-stone-600 text-[10px] font-black tracking-[0.3em] uppercase">
                        © {new Date().getFullYear()} THE NEW HOUSE CHURCH. ALL RIGHTS RESERVED.
                    </p>
                    <div className="text-center md:text-right">
                        <p className="text-stone-700 text-[10px] uppercase tracking-[0.3em] font-black">
                            CRAFTED WITH SPIRIT BY{" "}
                            <a
                                href="https://jimmyessel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-500 hover:text-[var(--font-accent-color)] transition-colors cursor-pointer"
                            >
                                JIMMY ESSEL
                            </a>
                        </p>
                    </div>
                </div>

            </div>

            {/* Faded background type for texture */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none select-none overflow-hidden">
                <span className="text-white/[0.02] text-[20rem] font-black tracking-tighter leading-none block transform rotate-12">
                    TNHC
                </span>
            </div>
        </footer>
    );
}
