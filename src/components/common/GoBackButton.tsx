"use client";

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GoBackButton() {
    const router = useRouter();
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === "/") return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-24 left-4 md:top-32 md:left-8 z-40"
            >
                <button
                    onClick={() => router.back()}
                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full glass text-foreground/70 hover:text-accent-blue border-border/50 hover:border-accent-blue/50 transition-all shadow-lg hover:shadow-accent-blue/20"
                    title="Go Back"
                    aria-label="Go back to previous page"
                >
                    <ArrowLeft size={20} className="md:w-6 md:h-6" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
