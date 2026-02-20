"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/config/data";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <FolderGit2 className="text-accent-blue" size={28} />
                    <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                    <div className="h-px bg-border flex-1 ml-4 block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group glass rounded-xl border border-border/50 hover:border-accent-blue/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-300 overflow-hidden flex flex-col h-full"
                        >
                            <Link href={project.github} target="_blank" className="p-6 flex-1 flex flex-col h-full block">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-3 py-1 text-xs font-mono bg-accent-blue/10 text-accent-blue rounded">
                                        {project.category}
                                    </div>
                                    <div className="flex gap-3 text-foreground/50">
                                        <div className="text-foreground/50 group-hover:text-accent-blue transition-colors">
                                            <Github size={20} />
                                        </div>
                                        <div className="text-foreground/50 group-hover:text-accent-blue transition-colors">
                                            <ExternalLink size={20} />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-4 flex gap-2 flex-wrap">
                                    {project.tools.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-xs font-mono text-accent-blue/80">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 glass border border-border/50 hover:border-accent-blue text-foreground hover:text-accent-blue hover:scale-[1.05] transition-all duration-300 rounded-md font-semibold shadow-lg hover:shadow-accent-blue/20"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

