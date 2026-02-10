"use client";

import Link from "next/link";
import { Section, FadeIn, StaggerChildren, StaggerItem } from "@/components/Section";
import ContactCTA from "@/components/ContactCTA";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Project</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              View Our Works
            </h1>
          </FadeIn>
        </div>
      </section>

      <Section className="py-12 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="block group">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-amber-900/20 to-zinc-900 border border-white/10 overflow-hidden mb-4 group-hover:border-amber-500/30 transition-colors">
                    <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                      {p.title}
                    </div>
                  </div>
                  <p className="text-amber-400/80 text-xs uppercase tracking-wider">{p.category}</p>
                  <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-amber-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">{p.subtitle}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
