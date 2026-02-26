"use client";

import Link from "next/link";
import Image from "next/image";

const footerColumns = [
    {
        title: "Explore",
        links: [
            { label: "Home", href: "/", external: false },
            { label: "I'm New", href: "/new", external: false },
            { label: "Watch", href: "https://www.youtube.com/tnhc", external: true },
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
            { label: "My TNHC", href: "https://tnhc.ccbchurch.com/goto/login", external: true },
        ],
    },
    {
        title: "Follow",
        links: [
            { label: "Instagram", href: "https://www.instagram.com/tnhc", external: true },
            { label: "TikTok", href: "https://www.tiktok.com/@tnhc", external: true },
            { label: "YouTube", href: "https://www.youtube.com/tnhc", external: true },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="w-full max-w-7xl mx-auto flex flex-col px-6 py-16 gap-10">
                {/* Top: Logo + Columns + Newsletter */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 mb-12">
                    {/* Link Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {footerColumns.map((col) => (
                            <div key={col.title}>

                                <ul className="flex flex-col gap-2.5">
                                    {col.links.map((link) =>
                                        link.external ? (
                                            <li key={link.label} className="underline hover:ml-4 transition-all duration-500">
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                                    className="text-md md:text-lg font-semibold text-white transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ) : (
                                            <li key={link.label} className="underline hover:ml-4 transition-all duration-500">
                                                <Link
                                                    href={link.href}
                                                    style={{ fontFamily: "var(--font-dm-sans)" }}
                                                    className="text-md md:text-lg text-white font-semibold hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>


                </div>

                {/* Newsletter */}
                    <div className="min-w-full max-w-xs flex flex-row justify-center">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col md:flex-row gap-3 w-auto"
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                autoComplete="email"
                                required
                                className="w-full bg-white border border-white/20 px-6 py-4 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors"
                            />
                            <button
                                type="submit"
                                style={{backgroundColor: "var(--font-accent-color)"}}
                                className="w-auto text-black font-bold text-sm py-4 px-6 rounded-lg transition-colors"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>

                {/* Divider */}
                <div className="pt-10 flex flex-col items-center gap-6">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/logo/logo-transparent.png"
                            alt="T"
                            width={300}
                            height={150}
                            style={{ objectFit: "contain", height: 150, width: "auto" }}
                        />
                    </Link>
                    
                </div>
            </div>
        </footer>
    );
}
