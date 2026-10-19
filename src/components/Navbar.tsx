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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "py-2" : "py-4 bg-transparent"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 ${
            scrolled ? "glass-strong rounded-2xl mx-3 sm:mx-6 mt-1" : ""
          }`}
        >
          <div className="flex items-center justify-between py-2 px-2 sm:px-4">
            <Link
              href="/"
              onClick={close}
              className="flex items-center gap-2.5 group relative z-[110]"
            >
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
              className="md:hidden relative z-[110] p-2.5 rounded-full text-white hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
              onClick={toggle}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] md:hidden bg-black"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col h-full pt-24 pb-10 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={href(s.id)}
                      onClick={close}
                      className="block text-2xl font-display font-medium text-white py-3.5 px-4 rounded-2xl active:bg-white/10 transition-colors"
                    >
                      {s.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="mt-auto pt-8"
              >
                <Link
                  href={href("models")}
                  onClick={close}
                  className="block w-full py-4 rounded-full bg-white text-black text-center font-semibold text-base active:bg-neutral-200"
                >
                  Reserve Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
