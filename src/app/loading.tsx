import { Terminal } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute inset-0 border-t-2 border-accent-blue rounded-full animate-spin h-16 w-16 -ml-2 -mt-2"></div>
                <Terminal className="text-accent-blue animate-pulse z-10" size={32} />
            </div>
            <p className="font-mono text-sm text-accent-blue/80 mt-6 animate-pulse">Initializing connection...</p>
            <div className="flex gap-1 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
        </div>
    );
}

