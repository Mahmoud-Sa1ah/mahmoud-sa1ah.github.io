import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center px-4">
            <div className="flex items-center gap-4 text-accent-blue">
                <Terminal size={48} />
                <h1 className="text-6xl font-bold tracking-tighter">404</h1>
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Endpoint Not Found</h2>
                <p className="text-foreground/70 max-w-md mx-auto">
                    The requested resource could not be located on this server. It may have been moved, deleted, or never existed.
                </p>
            </div>

            <div className="p-4 border border-border glass rounded-md font-mono text-sm text-left w-full max-w-md mt-4">
                <p className="text-accent-blue">$ status --check</p>
                <p className="text-red-500">Error: Resource unavailable</p>
                <p className="text-accent-blue mt-2">$ redirect --target home</p>
                <p className="text-foreground/70">Executing redirect...</p>
            </div>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-accent-blue/10 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/20 hover:border-accent-blue/50 transition-all rounded-md font-semibold flex items-center gap-2"
            >
                Return to Base
            </Link>
        </div>
    );
}

