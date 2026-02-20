"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/data";
import { User, Code, Server, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background/50">
            <div className="container px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <User className="text-accent-blue" size={28} />
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                    <div className="h-px bg-border flex-1 ml-4 block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-foreground/80 leading-relaxed space-y-4"
                    >
                        <p>{siteConfig.about}</p>
                        <p>
                            I specialize in finding vulnerabilities before malicious actors do, turning
                            complex security issues into actionable remediation steps. My ongoing research
                            and writeups actively contribute to the cybersecurity community.
                        </p>
                        <div className="pt-6 pb-2 hidden sm:block">
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden glass border-border/50 rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl shadow-accent-blue/5">
                                <Image
                                    src="/ANOTHER PHOTO FOR ME.jpg"
                                    alt="Mahmoud Salah"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {[
                            { icon: <ShieldCheck size={24} />, title: "Penetration Testing", desc: "Web, API & Network" },
                            { icon: <Server size={24} />, title: "Infrastructure", desc: "VLANs, Routing, Clouds" },
                            { icon: <Code size={24} />, title: "Automation", desc: "Python, Bash Tooling" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-5 rounded-lg border border-border/50 hover:border-accent-blue/50 transition-colors group"
                            >
                                <div className="text-accent-blue mb-3 group-hover:scale-110 transition-transform origin-left">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                <p className="text-sm text-foreground/60">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

