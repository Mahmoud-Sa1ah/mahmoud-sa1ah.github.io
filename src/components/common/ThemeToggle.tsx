"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a placeholder to avoid layout shift before hydration
        return <div className="w-9 h-9" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-background border border-border/50 hover:border-accent-blue/50 text-foreground transition-colors overflow-hidden glass"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    y: isDark ? 0 : -30,
                    opacity: isDark ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Moon size={18} className="text-accent-blue" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    y: isDark ? 30 : 0,
                    opacity: isDark ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Sun size={18} className="text-orange-400" />
            </motion.div>
        </button>
    );
}

