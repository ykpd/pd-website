"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Puget Digital. All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
