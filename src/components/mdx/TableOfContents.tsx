"use client";

import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

type Heading = {
    id: string;
    text: string;
    level: number;
};

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Select all h2, h3, h4 elements in the prose container
        const elements = Array.from(document.querySelectorAll(".prose h2, .prose h3, .prose h4"))
            .map((elem, index) => {
                let id = elem.id;
                const text = (elem as HTMLElement).innerText || "";
                if (!id) {
                    // Generate a slug from text if ID is missing
                    id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                    if (!id) id = `heading-${index}`;
                    elem.id = id; // Apply it to the DOM so anchor links work
                }
                return {
                    id,
                    text,
                    level: Number(elem.nodeName.charAt(1)),
                };
            });
        setHeadings(elements);

        // Intersection Observer to highlight active section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        elements.forEach((heading) => {
            const el = document.getElementById(heading.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) return null;

    return (
        <div className="hidden xl:block fixed right-8 top-32 w-64 p-6 glass rounded-xl border border-border/50">
            <div className="flex items-center gap-2 mb-4 text-foreground font-semibold">
                <Link2 size={18} className="text-accent-blue" />
                Table of Contents
            </div>
            <nav className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`text-sm transition-colors block ${activeId === heading.id
                            ? "text-accent-blue font-medium"
                            : "text-foreground/60 hover:text-accent-blue"
                            }`}
                        // Add indent based on heading level (h2 -> 0, h3 -> 12px, etc)
                        style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
                    >
                        {heading.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}

