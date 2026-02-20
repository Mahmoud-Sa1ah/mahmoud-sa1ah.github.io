"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CustomPre(props: any) {
    const [copied, setCopied] = useState(false);

    // Extract text content from the children (the `code` element)
    const extractText = (node: any): string => {
        if (typeof node === "string") return node;
        if (Array.isArray(node)) return node.map(extractText).join("");
        if (node?.props?.children) return extractText(node.props.children);
        return "";
    };

    const textContent = extractText(props.children);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="relative group rounded-lg overflow-hidden my-6 bg-[#0d1117] border border-border/50">
            <div className="flex items-center justify-between px-4 py-2 bg-[#020617]/50 border-b border-border/50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <button
                    onClick={handleCopy}
                    className="text-foreground/50 hover:text-foreground transition-colors p-1"
                    aria-label="Copy code"
                >
                    {copied ? <Check size={16} className="text-accent-blue" /> : <Copy size={16} />}
                </button>
            </div>
            <pre {...props} className="p-4 overflow-x-auto custom-scrollbar text-sm" />
        </div>
    );
}

