"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/data";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Writeups", href: "/writeups" },
    { name: "Terminal", href: "/terminal", icon: <Terminal size={16} className="ml-1" /> },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass border-b border-border/50 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
                    <span className="text-accent-blue group-hover:text-accent-blue transition-colors">{"{"}</span>
                    <span>{siteConfig.alias}</span>
                    <span className="text-accent-blue group-hover:text-accent-blue transition-colors">{"}"}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center text-sm font-medium transition-colors hover:text-accent-blue ${isActive ? "text-accent-blue" : "text-foreground/80"
                                    }`}
                            >
                                {link.name}
                                {link.icon}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        className="text-foreground hover:text-accent-blue transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-b border-border w-full flex flex-col px-6 py-4 overflow-hidden"
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center py-3 text-sm font-medium transition-colors border-b border-border/50 last:border-0 ${isActive ? "text-accent-blue" : "text-foreground/80"
                                        }`}
                                >
                                    {link.name}
                                    {link.icon}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

