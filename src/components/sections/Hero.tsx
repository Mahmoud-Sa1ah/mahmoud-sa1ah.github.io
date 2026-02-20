"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/data";
import { Terminal, Shield, ChevronRight, FileText, Github, Linkedin, Mail, BookOpen } from "lucide-react";

export default function Hero() {
    useEffect(() => {
        console.log(
            "%cInterested in security? Try finding the hidden endpoint. 👀",
            "color: #10b981; font-size: 16px; font-weight: bold; background: #020617; padding: 10px; border-radius: 5px;"
        );
    }, []);

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center py-20 relative overflow-hidden">
            {/* Decorative gradient background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 mb-6 font-mono text-sm">
                        <Shield size={16} />
                        <span>{siteConfig.role}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">
                        {siteConfig.professionalName}
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg font-mono">
                        {siteConfig.headline}
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <Link
                            href="/projects"
                            className="px-6 py-3 bg-accent-blue text-[#020617] font-semibold rounded-md hover:bg-accent-blue/90 hover:scale-[1.05] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-accent-blue/20"
                        >
                            View Projects <ChevronRight size={18} />
                        </Link>
                        <Link
                            href="/writeups"
                            className="px-6 py-3 glass text-foreground border border-border/50 hover:border-accent-blue/50 hover:text-accent-blue hover:scale-[1.05] transition-all duration-300 rounded-md font-semibold shadow-lg hover:shadow-accent-blue/10"
                        >
                            Read Writeups
                        </Link>
                        <Link
                            href="/terminal"
                            className="px-4 py-3 text-foreground/70 hover:text-accent-blue transition-colors flex items-center gap-2 font-mono group"
                        >
                            <Terminal size={18} className="group-hover:animate-pulse" /> _terminal
                        </Link>
                        <a
                            href="/CV.pdf"
                            download="Mahmoud_Salah_CV.pdf"
                            className="px-6 py-3 glass text-foreground border border-accent-blue/30 hover:border-accent-blue hover:text-accent-blue hover:scale-[1.05] transition-all duration-300 rounded-md font-semibold shadow-lg hover:shadow-accent-blue/10 flex items-center gap-2"
                        >
                            <FileText size={18} /> Download CV
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-8 pt-6 border-t border-border/50">
                        <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border/50 glass text-foreground/70 hover:text-accent-blue hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all hover:scale-110" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border/50 glass text-foreground/70 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all hover:scale-110" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href={siteConfig.links.medium} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border/50 glass text-foreground/70 hover:text-foreground hover:border-foreground/50 hover:bg-foreground/10 transition-all hover:scale-110" aria-label="Medium">
                            <BookOpen size={20} />
                        </a>
                        <a href={`mailto:${siteConfig.email}`} className="p-2 rounded-full border border-border/50 glass text-foreground/70 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all hover:scale-110" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 shrink-0"
                >
                    <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-2xl mix-blend-screen animate-pulse"></div>
                    <div className="absolute inset-0 border border-accent-blue/40 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute -inset-4 border border-accent-blue/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-background relative z-10 glass">
                        <Image
                            src="/profile.jpeg"
                            alt={siteConfig.professionalName}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                            priority
                            unoptimized
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

