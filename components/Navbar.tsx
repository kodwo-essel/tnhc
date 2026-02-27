"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
    { label: "I'M NEW", href: "/new" },
    { label: "ABOUT", href: "/about" },
    { label: "WATCH", href: "/watch", external: false },
    { label: "START HERE", href: "/starthere" },
    { label: "BAPTISM", href: "/baptism" },
    { label: "KIDS", href: "/kids" },
    { label: "YOUTH", href: "/youth" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileFolder, setMobileFolder] = useState<"root" | "menu">("root");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setMobileFolder("root"); // Reset folder when closing
        }
    }, [mobileMenuOpen]);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="w-full bg-black border-b border-black sticky top-0 z-[100]">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 relative z-[110]">
                {/* Logo */}
                <Link href="/" onClick={closeMobileMenu} className="flex-shrink-0">
                    <Image
                        src="/logo/logo-transparent.png"
                        alt="TNHC"
                        width={100}
                        height={32}
                        className="h-8 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/conf"
                        className="text-sm font-termina font-bold text-white hover:underline transition-colors"
                    >
                        TNHC Conference 2026
                    </Link>

                    {/* MENU Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-sm font-medium text-white transition-colors uppercase"
                            aria-expanded={dropdownOpen}
                        >
                            MENU
                        </button>

                        {dropdownOpen && (
                            <div className="absolute top-full right-[-20px] pt-2 w-56 z-50">
                                <div className="bg-black text-white text-right font-termina font-bold p-4 shadow-2xl border border-white/5">
                                    {menuItems.map((item) =>
                                        item.external ? (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block text-sm py-2 transition-colors hover:text-[var(--font-accent-color)]"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="block text-sm py-2 transition-colors hover:text-[var(--font-accent-color)]"
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/give"
                        style={{ backgroundColor: "var(--font-accent-color)" }}
                        className="text-black text-md font-semibold px-5 py-2 rounded-lg hover:bg-[var(--font-accent-color)] transition-colors"
                    >
                        GIVE
                    </Link>
                </nav>

                {/* Mobile: GIVE + Burger */}
                <div className="flex md:hidden items-center gap-4">
                    <Link
                        href="/give"
                        onClick={closeMobileMenu}
                        style={{ backgroundColor: "var(--font-accent-color)" }}
                        className="text-black text-xs font-bold px-4 py-1.5 rounded transition-colors"
                    >
                        GIVE
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {/* Burger lines */}
                        <span
                            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {/* Full-screen Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black transition-transform duration-300 ease-in-out z-[100] transform ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
                style={{ paddingTop: "64px" }} // Height of the nav bar
            >
                <div className="w-full h-full overflow-y-auto px-8 py-10 flex flex-col items-center">

                    {/* Root Folder View */}
                    <div className={`w-full transition-all duration-300 ${mobileFolder === "root" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute pointer-events-none"}`}>
                        <div className="flex flex-col gap-8 text-center">
                            <Link
                                href="/conf"
                                onClick={closeMobileMenu}
                                className="text-2xl font-bold text-white uppercase tracking-wider"
                            >
                                TNHC Conference 2026
                            </Link>

                            <button
                                onClick={() => setMobileFolder("menu")}
                                className="text-2xl font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2"
                            >
                                MENU
                                <svg viewBox="0 0 22 22" className="w-6 h-6 stroke-white fill-none" strokeWidth="2">
                                    <path d="M7 18l7-7-7-7" />
                                </svg>
                            </button>

                            <Link
                                href="/give"
                                onClick={closeMobileMenu}
                                className="text-2xl font-bold text-black uppercase tracking-wider py-4 rounded-xl inline-block w-full"
                                style={{ backgroundColor: "var(--font-accent-color)" }}
                            >
                                GIVE
                            </Link>
                        </div>
                    </div>

                    {/* MENU Folder View */}
                    <div className={`w-full transition-all duration-300 ${mobileFolder === "menu" ? "opacity-100 translate-x-0" : "opacity-100 translate-x-full absolute pointer-events-none"}`}>
                        <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
                            <button
                                onClick={() => setMobileFolder("root")}
                                className="flex items-center gap-2 text-stone-400 uppercase text-xs font-bold tracking-widest mb-4 transition-colors hover:text-white"
                            >
                                <svg viewBox="0 0 22 22" className="w-4 h-4 stroke-current fill-none" strokeWidth="2">
                                    <path d="M15 18l-7-7 7-7" />
                                </svg>
                                Back
                            </button>

                            <div className="flex flex-col gap-4 text-center">
                                {menuItems.map((item) => (
                                    item.external ? (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-bold text-white uppercase tracking-widest py-2 border-b border-white/10"
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className="text-xl font-bold text-white uppercase tracking-widest py-2 border-b border-white/10"
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
