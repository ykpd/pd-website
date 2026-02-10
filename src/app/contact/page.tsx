"use client";

import { Section, FadeIn } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import ContactCTA from "@/components/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-4">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">
              Contact Form
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Get in Touch With Puget Digital
            </h1>
          </FadeIn>
          <FadeIn delay={1} className="flex justify-center mt-16">
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
