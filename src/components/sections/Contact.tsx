"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/data";
import { TerminalSquare, Mail, Copy, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(siteConfig.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-6 max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center justify-center p-4 bg-accent-blue/10 rounded-2xl mb-6">
                        <TerminalSquare size={32} className="text-accent-blue" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 hidden">
                        Get In Touch
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Ready to secure your next project?
                    </h2>

                    <p className="text-foreground/70 mb-10 text-lg max-w-xl mx-auto">
                        Whether you have a question, want to discuss a penetration test, or just want to say hi, my inbox is open.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="w-full sm:w-auto px-8 py-4 bg-accent-blue text-[#020617] font-bold rounded-lg hover:bg-accent-blue/90 transition-all flex items-center justify-center gap-3 text-lg"
                        >
                            <Mail size={20} />
                            Say Hello
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            className="w-full sm:w-auto px-6 py-4 glass text-foreground border border-border hover:border-accent-blue hover:text-accent-blue transition-all rounded-lg font-mono flex items-center justify-center gap-3 group"
                        >
                            {copied ? (
                                <>
                                    <CheckCircle2 size={18} className="text-accent-blue" />
                                    <span className="text-accent-blue">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

