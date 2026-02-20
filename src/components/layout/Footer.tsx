import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/data";

export default function Footer() {
    return (
        <footer className="w-full border-t border-border/50 bg-background/80 backdrop-blur-sm mt-auto">
            <div className="container mx-auto px-6 py-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm text-foreground/70 font-mono">
                        © {new Date().getFullYear()} {siteConfig.alias}. All rights reserved.
                    </p>
                    <p className="text-xs text-foreground/50 mt-1">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent-blue transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent-blue transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href={`mailto:${siteConfig.email}`}
                        className="text-foreground/70 hover:text-accent-blue transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

