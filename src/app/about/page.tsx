"use client";

import { Section, FadeIn } from "@/components/Section";
import ContactCTA from "@/components/ContactCTA";
import { processIntro, processSteps } from "@/data/process";

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-black" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">
              Accelerate your digital transformation
            </p>
            <p className="text-amber-400/80 text-sm uppercase tracking-widest mb-6">
              Driven by Passion
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              e-Commerce Connected
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Puget Digital is a leading e-commerce agency specializing in providing design, development, and implementation solutions for B2B clients. With our expertise in integrating e-commerce with the Acumatica ERP platform and offering data migration services, we help businesses in the automotive, B2B/wholesale, beauty, and publishing industries thrive in the digital marketplace.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-white/70 text-lg">{processIntro}</p>
          </FadeIn>
          <div className="space-y-8 mt-16">
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i}>
                <div className="flex gap-6">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-semibold text-sm">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-white/70 mt-1">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
