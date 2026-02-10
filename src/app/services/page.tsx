"use client";

import Link from "next/link";
import { Section, FadeIn } from "@/components/Section";
import ContactCTA from "@/components/ContactCTA";
import { servicesPageItems } from "@/data/services";
import { faqItems } from "@/data/faq";

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              What&apos;s our Services
            </h1>
          </FadeIn>
        </div>
      </section>

      <Section className="py-12 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesPageItems.map((service, i) => (
            <FadeIn key={service.id} delay={i}>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="text-amber-400/80 text-sm">Service #{service.id}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-sm mb-6">{service.subtitle}</p>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                  <p className="text-white/50 text-sm mt-4">{service.tech}</p>
                  <Link
                    href="/contact"
                    className="inline-block mt-6 px-6 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors"
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
                  Service visual
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-28 bg-zinc-900/30 border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Answers to Your Queries
            </h2>
          </FadeIn>
          <ul className="space-y-4">
            {faqItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <li className="py-4 border-b border-white/10 text-white/90 font-medium">
                  {item.question}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
