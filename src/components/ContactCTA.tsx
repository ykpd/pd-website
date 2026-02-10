"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 md:py-28 bg-gradient-to-b from-zinc-900 to-black border-y border-white/10"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Let&apos;s Discuss Your
          <br />
          <span className="text-amber-400">Next Project</span>
        </h2>
        <p className="text-white/70 text-lg mb-10">
          We dive into your business goals and technical requirements to design a solution that aligns with your vision.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </motion.section>
  );
}
