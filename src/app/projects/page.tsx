"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/config/data";
import { FolderGit2, Github, ExternalLink, Filter } from "lucide-react";

export default function ProjectsPage() {
    const [filter, setFilter] = useState<string>("All");

    // Extract unique categories
    const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <div className="container px-6 max-w-7xl mx-auto py-12 min-h-screen">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <FolderGit2 className="text-accent-blue" size={32} />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All Projects</h1>
                    </div>
                    <p className="text-foreground/70 max-w-2xl">
                        A comprehensive list of my tools, automation scripts, and network infrastructure designs.
                        Filtered by domain to help you find relevant deployments quickly.
                    </p>
                </div>

                {/* Filter Navigation */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    <Filter size={16} className="text-foreground/50 mr-2 shrink-0" />
                    {categories.map(cat => (
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

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.title}
                            className="group glass rounded-xl border border-border/50 hover:border-accent-blue/50 transition-all flex flex-col h-full overflow-hidden"
                        >
                            <Link href={project.github} target="_blank" className="p-6 flex-1 flex flex-col h-full block">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-3 py-1 text-xs font-mono bg-accent-blue/10 text-accent-blue rounded border border-accent-blue/20">
                                        {project.category}
                                    </div>
                                    <div className="flex gap-3 text-foreground/50">
                                        <div className="hover:text-accent-blue transition-colors">
                                            <Github size={20} />
                                        </div>
                                        <div className="hover:text-accent-blue transition-colors">
                                            <ExternalLink size={20} />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-foreground/70 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="mt-4 pt-4 border-t border-border/50">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tag, tIdx) => (
                                            <span key={tIdx} className="text-xs font-mono text-accent-blue/80 px-2 py-1 bg-background/50 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

