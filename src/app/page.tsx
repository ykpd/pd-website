"use client";

import Link from "next/link";
import { Section, FadeIn, StaggerChildren, StaggerItem } from "@/components/Section";
import ContactCTA from "@/components/ContactCTA";
import { homeServices } from "@/data/services";
import { processIntro, processSteps } from "@/data/process";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const benefits = [
  { title: "Seamless ERP integration", subtitle: "Real-time data between your ERP and your store." },
  { title: "Custom B2B flows", subtitle: "Workflows built for complex buying needs." },
  { title: "Conversion-first UX", subtitle: "Cleaner journeys, higher order completion." },
  { title: "Efficient code", subtitle: "We optimize for page load speeds and mobile performance." },
  { title: "Actionable insights", subtitle: "Clarity on customers, products, and performance." },
  { title: "End-to-end support", subtitle: "Strategy, launch, and continuous improvement." },
];

const stats = [
  { value: "12+", label: "Happy Clients" },
  { value: "15+", label: "Projects Completed" },
  { value: "99%", label: "Customer Satisfaction" },
];

const features = [
  "Higher Conversion",
  "Custom Permissions",
  "Centralized Data",
  "Error Reduction",
  "Faster Order Processing",
  "Automated Workflows",
  "Real-Time Sync",
  "Unified Dashboard",
  "Personalized Engagement",
  "API-Ready",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-black"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative text-center max-w-4xl mx-auto"
        >
          <p className="text-amber-400/90 text-sm uppercase tracking-widest mb-4">Welcome to Seattle</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Acumatica Summit
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Integrating Acumatica ERP with e-commerce platforms is essential for your clients to streamline operations, enhance customer satisfaction, and access real-time data. At Puget Digital, we&apos;re here to support you, as a trusted partner and extension of your team.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <Section className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Benefits</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              e-Commerce built for how real businesses work
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.subtitle}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 bg-zinc-900/50 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What are our Services
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeServices.map((s) => (
              <StaggerItem key={s.id}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-amber-400/80 text-sm">Service #{s.id}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-1">{s.title}</h3>
                  <p className="text-white/70 text-sm">{s.subtitle}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={2} className="text-center mt-12">
            <Link href="/services" className="text-amber-400 hover:text-amber-300 font-medium">
              View all services →
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* We connect your systems */}
      <Section className="py-20 md:py-28 bg-zinc-900/30 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              We connect your systems into one powerful flow
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              {["Seamless automation", "Real time sync", "Secure & scalable", "Plug & play setup"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Features */}
      <Section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Everything you need to scale your digital operations
            </h2>
          </FadeIn>
          <StaggerChildren className="flex flex-wrap justify-center gap-3">
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <span className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-sm">
                  {f}
                </span>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Projects</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What we Shipped
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((p) => (
              <StaggerItem key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="block group">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-amber-900/20 to-zinc-900 border border-white/10 overflow-hidden mb-4 group-hover:border-amber-500/30 transition-colors">
                    <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                      {p.title}
                    </div>
                  </div>
                  <p className="text-amber-400/80 text-xs uppercase tracking-wider">{p.category}</p>
                  <h3 className="text-xl font-semibold text-white mt-1">{p.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{p.subtitle}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 border border-amber-500/50 text-amber-400 rounded-full hover:bg-amber-500/10 transition-colors"
            >
              More Projects
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* Process */}
      <Section className="py-20 md:py-28 bg-zinc-900/30 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-white/70 text-lg">{processIntro}</p>
          </FadeIn>
          <div className="space-y-8">
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

      {/* Testimonials */}
      <Section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What clients say about us
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  {t.short && <p className="text-amber-400/80 text-sm mb-2">{t.short}</p>}
                  <p className="text-white/90 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-white/60 text-sm mt-4">— {t.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
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
