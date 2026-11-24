"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "models", label: "The collection" },
  { id: "technology", label: "Performance" },
  { id: "experience", label: "Configure" },
  { id: "about", label: "The marque" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] px-4 pt-4 transition-all duration-300 sm:px-6 ${scrolled ? "pt-3" : ""}`}>
        <div className={`mx-auto max-w-[80rem] border border-transparent transition-all duration-300 ${scrolled ? "border-white/15 bg-peat-deep/90 px-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-3" : ""}`}>
          <div className="flex items-center justify-between py-2">
            <Link href="/" onClick={() => setOpen(false)} className="brand-lockup group">
              <span className="brand-mark">P</span>
              <span><small>Est. 2026 / Hyper</small><strong className="transition-colors group-hover:text-sand">Posada</strong></span>
            </Link>
            <nav className="hidden items-center gap-1 lg:flex">
              {sections.map((section) => <Link key={section.id} href={href(section.id)} className="px-3 py-2 text-[0.67rem] font-bold uppercase tracking-[0.13em] text-mineral/65 transition-colors hover:text-sand">{section.label}</Link>)}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <Link href="/suppliers" className="text-[0.67rem] font-bold uppercase tracking-[0.13em] text-mineral/65 transition-colors hover:text-sand">Supplier hub</Link>
              <Link href="/team" className="text-[0.67rem] font-bold uppercase tracking-[0.13em] text-mineral/65 transition-colors hover:text-sand">The team</Link>
              <Link href="/corporate" className="text-[0.67rem] font-bold uppercase tracking-[0.13em] text-mineral/65 transition-colors hover:text-sand">Corporate</Link>
              <Link href={href("experience")} className="text-[0.67rem] font-bold uppercase tracking-[0.13em] text-mineral/65 transition-colors hover:text-sand">Make it yours</Link>
              <Link href={href("experience")} className="btn-primary min-h-0 px-4 py-2.5">Configure <ArrowUpRight size={14} /></Link>
            </div>
            <button type="button" className="rounded-md p-2 text-mineral transition-colors hover:bg-white/10 md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
              {open ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <motion.div id="mobile-menu" key="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-peat-deep px-6 pb-8 pt-28 md:hidden" role="dialog" aria-modal="true">
          <div className="flex h-full flex-col"><div className="eyebrow mb-8">Posada / Extreme by design</div><nav className="flex flex-col">
            {sections.map((section, index) => <motion.div key={section.id} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 + index * 0.05 }} className="border-b border-white/12"><Link href={href(section.id)} onClick={() => setOpen(false)} className="flex items-center justify-between py-5 font-display text-3xl font-black italic uppercase text-mineral">{section.label}<ArrowUpRight className="text-sand" size={20} /></Link></motion.div>)}
            <Link href="/suppliers" onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/12 py-5 font-display text-3xl font-black italic uppercase text-sand">Supplier hub<ArrowUpRight size={20} /></Link>
            <Link href="/team" onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/12 py-5 font-display text-3xl font-black italic uppercase text-sand">Meet the team<ArrowUpRight size={20} /></Link>
            <Link href="/corporate" onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/12 py-5 font-display text-3xl font-black italic uppercase text-sand">Corporate<ArrowUpRight size={20} /></Link>
          </nav><div className="mt-auto"><Link href={href("experience")} onClick={() => setOpen(false)} className="btn-primary w-full">Configure your Posada <ArrowUpRight size={16} /></Link></div></div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
