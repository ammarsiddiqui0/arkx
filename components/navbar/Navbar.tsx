"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavLinkProps = {
    label: string;
    href: string;
    onClick?: () => void;
};

function NavLink({ label, href, onClick }: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-sm font-medium font-mono text-zinc-400 transition-colors duration-200 hover:text-rose-400"
        >
            {label}
        </Link>
    );
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 w-full max-w-full box-border z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 w-full min-w-0 max-w-7xl box-border items-center justify-between px-6 md:px-10">
                {/* Logo and brand */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex min-w-0 items-center gap-2.5 md:pl-14"
                    aria-label="ARKX home"
                >
                    <Image
                        src="/logo.png"
                        alt=""
                        width={250}
                        height={250}
                        priority
                        className="h-8 w-8 object-contain"
                    />

                    <span className="font-mono text-lg font-bold tracking-tight text-white hover:text-rose-400">
                        ARKX.
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-8  pr-14 md:flex">
                    <NavLink label="About" href="/about" />
                    <NavLink label="Projects" href="/projects" />
                    <NavLink label="Resume" href="#resume" />
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="ml-auto mr-0 shrink-0 rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                            <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-white/5 bg-black/90 px-6 py-5 backdrop-blur-xl md:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-5">
                        <NavLink label="About" href="/about" onClick={closeMenu} />
                        <NavLink label="Projects" href="/projects" onClick={closeMenu} />
                        <NavLink label="Resume" href="#resume" onClick={closeMenu} />
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;