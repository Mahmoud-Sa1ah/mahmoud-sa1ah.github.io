"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/config/data";
import { Award, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20">
            <div className="container px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Award className="text-accent-blue" size={28} />
                    <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
                    <div className="h-px bg-border flex-1 ml-4 block" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certificationsData.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="glass p-5 rounded-lg border border-border/50 hover:border-accent-blue/30 transition-all flex flex-col sm:flex-row items-center sm:items-center gap-4 group hover:scale-[1.02]"
                        >
                            {!cert.image && (
                                <CheckCircle className="text-accent-blue/50 group-hover:text-accent-blue transition-colors shrink-0 hidden sm:block" size={20} />
                            )}
                            {cert.image && (
                                <div className="shrink-0 relative w-16 h-16 rounded overflow-hidden bg-white/90 border border-border/50 p-1">
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        fill
                                        className="object-contain p-1"
                                        unoptimized
                                    />
                                </div>
                            )}
                            <span className="font-medium text-foreground/90 group-hover:text-accent-blue text-center sm:text-left transition-colors">
                                {cert.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

