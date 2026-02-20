import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import SectionReveal from "@/components/common/SectionReveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Skills />
      </SectionReveal>

      {/* Quick Writeups Preview (Medium integration preview) */}
      <SectionReveal>
        <section className="py-12 bg-accent-blue/5 border-y border-border/50">
          <div className="container px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-blue/10 rounded-lg text-accent-blue border border-accent-blue/20">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Featured on Medium</h3>
                <p className="text-foreground/70 text-sm">Read the latest cybersecurity research and CTF writeups.</p>
              </div>
            </div>
            <Link
              href="/writeups"
              className="shrink-0 px-6 py-3 glass border border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 hover:scale-[1.05] transition-all duration-300 rounded-md font-semibold shadow-lg hover:shadow-accent-blue/20"
            >
              Explore Writeups
            </Link>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <Experience />
      </SectionReveal>
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal>
        <Certifications />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </div>
  );
}

