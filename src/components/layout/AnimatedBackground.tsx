import React from "react";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#020617] transition-colors duration-300">
            {/* Background Texture Photo */}
            <div
                className="absolute inset-[-5%] opacity-5 mix-blend-screen animate-pan-bg transition-opacity duration-500"
                style={{
                    backgroundImage: "url('/background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Banner Texture Photo */}
            <div
                className="absolute inset-[-10%] opacity-10 mix-blend-screen animate-pan-banner transition-opacity duration-500"
                style={{
                    backgroundImage: "url('/banner.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Animated Grid */}
            <div className="absolute inset-[-100%] top-[-50%] bg-grid opacity-30 animate-grid-move" />

            {/* Soft Glow Radial Effects (glassmorphism/neon) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>
    );
}

