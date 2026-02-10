"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Section, FadeIn } from "@/components/Section";
import ContactCTA from "@/components/ContactCTA";
import { getProjectBySlug, projects } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project not found</h1>
          <Link href="/projects" className="text-amber-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-20 md:py-28 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-amber-400/80 text-sm uppercase tracking-widest mb-4">
              {project.category}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.description}
            </h1>
            <p className="text-white/70 text-lg">{project.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <FadeIn>
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
              Banner / Hero image
            </div>
          </FadeIn>

          <FadeIn delay={1}>
            <div>
              <h2 className="text-amber-400 text-sm uppercase tracking-widest mb-4">
                Project Overview
              </h2>
              <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-white/80 leading-relaxed">{project.challenge}</p>
            </div>
          </FadeIn>

          <FadeIn delay={2}>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={3}>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {project.highlights[0] || "Key Work"}
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">{project.solution}</p>
              {project.highlights.length > 1 && (
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  {project.highlights.slice(1).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={4}>
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
              Detail image
            </div>
          </FadeIn>

          <FadeIn delay={5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <p className="text-amber-400/80 text-sm uppercase tracking-wider mb-1">Client</p>
                <p className="text-white font-medium">{project.client}</p>
                <p className="text-white/70 text-sm mt-1">{project.clientDescription}</p>
              </div>
              <div>
                <p className="text-amber-400/80 text-sm uppercase tracking-wider mb-1">Category</p>
                <p className="text-white/90 text-sm">{project.category}</p>
                <p className="text-amber-400/80 text-sm uppercase tracking-wider mt-4 mb-1">Timeline</p>
                <p className="text-white/90">{project.timeline}</p>
                {project.liveUrl && (
                  <>
                    <p className="text-amber-400/80 text-sm uppercase tracking-wider mt-4 mb-1">Live Project</p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-medium"
                    >
                      {project.liveLabel || "View Website"}
                    </a>
                  </>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap gap-4 justify-between items-center">
          <Link
            href="/projects"
            className="text-white/70 hover:text-amber-400 transition-colors"
          >
            ← All Projects
          </Link>
          {projects.findIndex((p) => p.slug === slug) > 0 && (
            <Link
              href={`/projects/${projects[projects.findIndex((p) => p.slug === slug) - 1].slug}`}
              className="text-amber-400 hover:text-amber-300"
            >
              Previous project
            </Link>
          )}
          {projects.findIndex((p) => p.slug === slug) < projects.length - 1 && projects.findIndex((p) => p.slug === slug) >= 0 && (
            <Link
              href={`/projects/${projects[projects.findIndex((p) => p.slug === slug) + 1].slug}`}
              className="text-amber-400 hover:text-amber-300"
            >
              Next project →
            </Link>
          )}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
