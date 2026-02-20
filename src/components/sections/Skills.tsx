"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/config/data";
import { Cpu, ShieldAlert, Wrench, Network, Code2, Cloud } from "lucide-react";

export default function Skills() {
    // Mapping categories to specific semantic icons and glow colors
    const categoryConfig: Record<string, { icon: any, color: string, glow: string }> = {
        "Web Security": { icon: ShieldAlert, color: "text-red-400", glow: "from-red-400/20" },
        "Security Tools": { icon: Wrench, color: "text-accent-blue", glow: "from-accent-blue/20" },
        "Networking": { icon: Network, color: "text-purple-400", glow: "from-purple-400/20" },
        "Programming": { icon: Code2, color: "text-accent-blue", glow: "from-accent-blue/20" },
        "Cloud & Virtualization": { icon: Cloud, color: "text-orange-400", glow: "from-orange-400/20" }
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container px-6 max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-3 bg-accent-blue/10 rounded-2xl border border-accent-blue/20 mb-6"
                    >
                        <Cpu className="text-accent-blue" size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-foreground/60 max-w-2xl text-lg"
                    >
                        A comprehensive overview of my core competencies, distributed across specialized domains to ensure robust and full-spectrum security posture.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Background glow for the grid */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

                    {skillsData.map((skillGroup, idx) => {
                        const config = categoryConfig[skillGroup.category] || { icon: Cpu, color: "text-accent-blue", glow: "from-accent-blue/20" };
                        const Icon = config.icon;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`group relative h-full flex flex-col p-8 rounded-3xl bg-background/40 backdrop-blur-xl border border-border/50 hover:border-${config.color.split('-')[1]}-${config.color.split('-')[2]}/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-xl`}
                            >
                                {/* Subtle radial gradient hover background */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${config.glow} to-transparent rounded-full blur-3xl -mx-20 -my-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                <div className="flex items-center gap-5 mb-8 relative z-10">
                                    <div className={`p-4 rounded-2xl bg-background/80 border border-border shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${config.color}`}>
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2.5 mt-auto relative z-10">
                                    {skillGroup.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-4 py-2 text-sm font-medium bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-xl text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-default shadow-sm backdrop-blur-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

