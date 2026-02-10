"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
          Business Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Business Email"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
          Your Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Your Phone"
        />
      </div>
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-white/90 mb-2">
          Company Website
        </label>
        <input
          id="website"
          name="website"
          type="url"
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Company Website"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
          More About The Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          placeholder="More About The Project"
        />
      </div>
      {status === "success" && (
        <p className="text-green-400 text-sm">Thank you! We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full md:w-auto px-8 py-4 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 disabled:opacity-50 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </motion.form>
  );
}
