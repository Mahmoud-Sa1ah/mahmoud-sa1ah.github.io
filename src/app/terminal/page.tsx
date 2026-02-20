"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/config/data";
import { Terminal as TerminalIcon } from "lucide-react";
import Link from "next/link";

type CommandOutput = {
    command: string;
    output: React.ReactNode;
};

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandOutput[]>([
        {
            command: "welcome",
            output: (
                <div>
                    <p className="text-accent-blue">Welcome to m0xsa1ah interactive terminal v1.0.0</p>
                    <p>Type <span className="text-accent-blue">'help'</span> for a list of available commands.</p>
                </div>
            )
        }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        let output: React.ReactNode = "";

        switch (cmd) {
            case "help":
                output = (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        <li><span className="text-accent-blue">about</span>    - Who is m0xsa1ah?</li>
                        <li><span className="text-accent-blue">skills</span>   - List technical skills</li>
                        <li><span className="text-accent-blue">projects</span> - Link to projects</li>
                        <li><span className="text-accent-blue">contact</span>  - Show contact info</li>
                        <li><span className="text-accent-blue">whoami</span>   - Print current user</li>
                        <li><span className="text-accent-blue">clear</span>    - Clear terminal</li>
                        <li><span className="text-accent-blue">github</span>   - Open GitHub profile</li>
                        <li><span className="text-accent-blue">linkedin</span> - Open LinkedIn profile</li>
                        <li><span className="text-accent-blue">medium</span>   - Open Medium blog</li>
                        <li><span className="text-accent-blue">cv</span>       - Download resume (PDF)</li>
                    </ul>
                );
                break;
            case "about":
                output = <p className="mt-2 text-foreground/80">{siteConfig.about}</p>;
                break;
            case "skills":
                output = (
                    <div className="mt-2 space-y-2">
                        <p>Scanning registry...</p>
                        <p className="text-accent-blue">[Web Security] XSS, SQLi, CSRF, SSRF, IDOR, RCE</p>
                        <p className="text-accent-blue">[Networking] VLANs, OSPF, NAT/PAT, Firewalls, VPN</p>
                        <p className="text-accent-blue">[Tools] Burp Suite, Nmap, Metasploit, Wireshark, Kali</p>
                    </div>
                );
                break;
            case "projects":
                output = <p className="mt-2">Redirecting... Use <Link href="/projects" className="text-accent-blue underline">this link</Link> if auto-redirect fails.</p>;
                setTimeout(() => window.location.href = "/projects", 1000);
                break;
            case "contact":
                output = (
                    <div className="mt-2">
                        <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-accent-blue hover:underline">{siteConfig.email}</a></p>
                        <p>LinkedIn: <a href={siteConfig.links.linkedin} target="_blank" className="text-accent-blue hover:underline">Profile</a></p>
                    </div>
                );
                break;
            case "whoami":
                output = <p className="mt-2 font-bold text-accent-blue">m0xsa1ah – Cybersecurity Engineer from Egypt.</p>;
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            case "github":
                output = <p className="mt-2">Opening GitHub...</p>;
                setTimeout(() => window.open(siteConfig.links.github, "_blank"), 500);
                break;
            case "linkedin":
                output = <p className="mt-2 text-accent-blue">Opening LinkedIn...</p>;
                setTimeout(() => window.open(siteConfig.links.linkedin, "_blank"), 500);
                break;
            case "medium":
                output = <p className="mt-2 text-foreground/80">Opening Medium...</p>;
                setTimeout(() => window.open(siteConfig.links.medium, "_blank"), 500);
                break;
            case "cv":
                output = <p className="mt-2 text-accent-blue">Initiating download sequence... (Ensure CV.pdf exists in public folder)</p>;
                // Assuming the file is at /CV.pdf in the public folder
                setTimeout(() => {
                    const link = document.createElement("a");
                    link.href = "/CV.pdf";
                    link.download = "Mahmoud_Salah_CV.pdf";
                    link.click();
                }, 1000);
                break;
            case "sudo":
                output = <p className="mt-2 text-red-500">Nice try. This incident will be reported.</p>;
                break;
            default:
                output = <p className="mt-2 text-red-400">Command not found: {cmd}. Type 'help' for a list of commands.</p>;
        }

        setHistory((prev) => [...prev, { command: input, output }]);
        setInput("");
    };

    return (
        <div className="container px-4 md:px-6 max-w-4xl mx-auto py-12 min-h-[80vh] flex flex-col">
            <div className="flex items-center gap-4 mb-6">
                <TerminalIcon className="text-accent-blue" size={32} />
                <h1 className="text-4xl font-bold tracking-tight">Terminal</h1>
            </div>

            <div
                className="flex-1 w-full glass border border-border/50 rounded-xl overflow-hidden flex flex-col font-mono text-sm md:text-base shadow-2xl relative"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Terminal Header */}
                <div className="bg-[#0f172a] px-4 py-2 border-b border-border/50 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="ml-4 text-xs text-foreground/50">m0xsa1ah@cyber-portfolio:~</span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar">
                    {history.map((item, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="flex items-start gap-2 text-accent-blue">
                                <span className="shrink-0">guest@m0xsa1ah:~$</span>
                                <span>{item.command}</span>
                            </div>
                            <div className="text-foreground/90 ml-4 md:ml-0 md:pl-[140px]">
                                {item.output}
                            </div>
                        </div>
                    ))}

                    <form onSubmit={handleCommand} className="flex items-start gap-2 text-accent-blue mt-4">
                        <span className="shrink-0">guest@m0xsa1ah:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-foreground caret-accent-blue placeholder:text-foreground/30"
                            spellCheck="false"
                            autoComplete="off"
                            autoFocus
                        />
                    </form>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
}

