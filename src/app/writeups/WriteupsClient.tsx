"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Filter, BookOpen } from "lucide-react";
import { WriteupMetadata } from "@/utils/mdx";
import { siteConfig } from "@/config/data";

interface WriteupsClientProps {
    writeups: { slug: string; metadata: WriteupMetadata }[];
    categories: string[];
}

export default function WriteupsClient({ writeups, categories }: WriteupsClientProps) {
    const [filter, setFilter] = useState("All");

    const filterOptions = ["All", ...categories];
    const filteredWriteups = filter === "All"
        ? writeups
        : writeups.filter(w => w.metadata.category === filter);

    return (
        <div className="container px-6 max-w-7xl mx-auto py-12 min-h-screen border-t border-border/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <BookOpen className="text-accent-blue" size={32} />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Writeups</h1>
                    </div>
                    <p className="text-foreground/70 max-w-2xl">
                        My personal archive of CTF writeups, vulnerability research, and deep dives into offensive security.
                        Check out my <a href={siteConfig.links.medium} target="_blank" className="text-accent-blue hover:underline">Medium</a> for more.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    <Filter size={16} className="text-foreground/50 mr-2 shrink-0" />
                    {filterOptions.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shrink-0 ${filter === cat
                                ? "bg-accent-blue text-[#020617]"
                                : "bg-background/50 text-foreground/70 border border-border hover:border-accent-blue/50 hover:text-accent-blue"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredWriteups.map(({ slug, metadata }, idx) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            key={slug}
                        >
                            <Link
                                href={`/writeups/${slug}`}
                                className="group relative block glass rounded-xl border border-border/50 hover:border-accent-blue/50 transition-all overflow-hidden h-full p-6 flex flex-col"
                            >
                                <div className="flex flex-col md:flex-row gap-6 h-full">
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="px-3 py-1 text-xs font-mono bg-accent-blue/10 text-accent-blue rounded border border-accent-blue/20">
                                                    {metadata.category}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-blue transition-colors">
                                                {metadata.title}
                                            </h3>

                                            <p className="text-foreground/70 text-sm mb-6 line-clamp-3">
                                                {metadata.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50 text-xs text-foreground/50 font-mono">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                <span>{metadata.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} />
                                                <span>{metadata.readingTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {metadata.image && (
                                        <div className="w-full md:w-32 h-40 md:h-auto shrink-0 overflow-hidden rounded-lg border border-border/50 group-hover:border-accent-blue/30 transition-colors flex items-center justify-center bg-background/50">
                                            <div
                                                className="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${metadata.image}')` }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

