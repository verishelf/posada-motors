"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#models", label: "Models" },
  { href: "#technology", label: "Technology" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center glow-sm">
              <span className="font-display font-bold text-background text-lg">P</span>
            </div>
            <span className="font-display text-xl tracking-tight font-medium group-hover:text-accent transition-colors">
              Posada
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#experience"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Configure
            </a>
            <a
              href="#models"
              className="btn-shine px-5 py-2.5 rounded-full bg-accent text-background text-sm font-semibold hover:bg-accent-dim transition-colors glow-sm"
            >
              Reserve
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#models"
                onClick={() => setOpen(false)}
                className="mt-4 inline-block px-6 py-3 rounded-full bg-accent text-background text-center font-semibold"
              >
                Reserve Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
