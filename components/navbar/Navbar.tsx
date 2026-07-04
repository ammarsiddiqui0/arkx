"use client";

import Link from "next/link";
import { useState } from "react";

type NavLinkProps = {
    label : string
    href : string
}

function NavLink(props : NavLinkProps) {
    return (
        <Link href={props.href} className="text-gray-400">
            {props.label}
        </Link>
    )
}



function Navbar() {

    const [isOpen, setIsOpen]= useState(false);

    return (
        <>
            <div className="flex justify-between w-full px-6 py-2 fixed top-0">
            
                <Link href="/" className="font-bold text-white">
                ARKX.
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6">
                        <NavLink label="About" href="/about" />
                        <NavLink label="Projects" href="/projects" />
                        <NavLink label="Contact" href="#contact" />                
                </div>

                {/* Mobile button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰" }
                </button>
            </div>


            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="fixed left-0 top-16 w-full flex flex-col gap-4 px-6 py-4 md:hidden">
                        <NavLink label="About" href="#about" />
                        <NavLink label="Projects" href="#project" />
                        <NavLink label="Contact" href="#contact" />                
                    </div>
                )
            }
        </>
            
    )
}
export default Navbar;