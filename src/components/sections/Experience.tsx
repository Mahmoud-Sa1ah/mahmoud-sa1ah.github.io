"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/config/data";
import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background/50">
            <div className="container px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <Briefcase className="text-accent-blue" size={28} />
                    <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
                    <div className="h-px bg-border flex-1 ml-4 block" />
                </div>

                <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[5px] top-1.5 w-[10px] h-[10px] rounded-full bg-accent-blue shadow-[0_0_10px_#10b981]" />

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {exp.role} <span className="text-accent-blue">@ {exp.company}</span>
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/50 font-mono whitespace-nowrap bg-background/50 px-3 py-1 rounded-full border border-border w-fit">
                                    <Calendar size={14} />
                                    <span>{exp.date}</span>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="space-y-4 text-foreground/70 flex-1">
                                    <ul className="list-disc list-inside space-y-2">
                                        {exp.responsibilities.map((req, rIdx) => (
                                            <li key={rIdx}>{req}</li>
                                        ))}
                                    </ul>

                                    <div className="pt-2">
                                        <h4 className="text-sm font-semibold text-foreground/90 mb-2">Impact:</h4>
                                        <p className="text-sm italic border-l-2 border-accent-blue/50 pl-4">{exp.impact}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.tools.map((tool, tIdx) => (
                                            <span key={tIdx} className="text-xs font-mono bg-border/50 px-2 py-1 rounded text-accent-blue">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {exp.image && (
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="relative w-full lg:w-1/3 shrink-0 aspect-[4/3] rounded-lg overflow-hidden border border-border/50 shadow-sm opacity-90 hover:opacity-100 transition-opacity bg-black/20"
                                    >
                                        <Image
                                            src={exp.image}
                                            alt={`${exp.company} visual`}
                                            fill
                                            className="object-contain p-2"
                                            unoptimized
                                        />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

