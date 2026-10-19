"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "models", label: "Models" },
  { id: "technology", label: "Technology" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

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
          scrolled ? "py-3" : "py-5 bg-transparent"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 ${
            scrolled ? "glass-strong rounded-2xl mx-4 sm:mx-6 mt-2" : ""
          }`}
        >
          <div className="flex items-center justify-between py-2 px-2 sm:px-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <span className="font-display font-bold text-black text-lg leading-none">
                  P
                </span>
              </div>
              <span className="font-display text-xl tracking-tight font-medium text-white group-hover:opacity-80 transition-opacity">
                Posada
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={href(s.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all"
                >
                  {s.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href={href("experience")}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all"
              >
                Configure
              </Link>
              <Link
                href={href("models")}
                className="btn-shine px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
              >
                Reserve
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={href(s.id)}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display font-medium text-white py-3 px-4 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
              <Link
                href={href("models")}
                onClick={() => setOpen(false)}
                className="mt-6 mx-4 py-3.5 rounded-full bg-white text-black text-center font-semibold"
              >
                Reserve Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
