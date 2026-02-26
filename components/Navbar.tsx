"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
    { label: "I'M NEW", href: "/new" },
    { label: "ABOUT", href: "/about" },
    { label: "WATCH", href: "https://www.youtube.com/tnhc", external: true },
    { label: "START HERE", href: "/starthere" },
    { label: "LEGACY GIVING", href: "/legacy" },
    { label: "BAPTISM", href: "/baptism" },
    { label: "KIDS", href: "/kids" },
    { label: "YOUTH", href: "/youth" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="w-full bg-black border-b border-black sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logo/logo-transparent.png"
                        alt="TNHC"
                        width={100}
                        height={32}
                        style={{ objectFit: "contain", height: 32, width: "auto" }}
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
                            <div className="absolute top-full right-[-20px] mt-1 w-50 bg-black text-white text-right font-termina font-bold p-2 z-50">
                                {menuItems.map((item) =>
                                    item.external ? (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-sm transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="block text-sm transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/give"
                        style={{ backgroundColor: "var(--font-accent-color)" }}
                        className="text-black text-md font-semibold px-5 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                        GIVE
                    </Link>
                </nav>

                {/* Mobile: GIVE + Burger */}
                <div className="flex md:hidden items-center gap-3">
                    <Link
                        href="/give"
                        style={{ backgroundColor: "var(--font-accent-color)" }}
                        className="text-black text-xs font-semibold px-4 py-1.5 rounded hover:bg-blue-600 transition-colors"
                    >
                        GIVE
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                        aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
                    <Link
                        href="/conf"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2 text-sm font-medium text-gray-700 hover:text-blue-600 border-b border-gray-100"
                    >
                        TNHC Conference 2026
                    </Link>

                    {/* Mobile MENU label */}
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center justify-between py-2 text-sm font-medium text-gray-700 border-b border-gray-100 uppercase"
                    >
                        MENU
                        <svg
                            className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {dropdownOpen && (
                        <div className="pl-4 flex flex-col gap-1">
                            {menuItems.map((item) =>
                                item.external ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-2 text-sm text-gray-600 hover:text-blue-600 border-b border-gray-50"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="py-2 text-sm text-gray-600 hover:text-blue-600 border-b border-gray-50"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
