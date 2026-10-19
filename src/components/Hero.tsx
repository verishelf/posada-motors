"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
      
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-white/10 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 35, 0], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-1/3 right-1/5 w-[28rem] h-[28rem] rounded-full bg-white/8 blur-[140px]"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="chip inline-flex items-center gap-2 text-white mb-8"
        >
          <Zap size={13} className="fill-white" />
          <span>V8 Hybrid Supercars — 2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] mb-6"
        >
          <span className="block">Precision.</span>
          <span className="block text-gradient">Presence.</span>
          <span className="block">Power.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-12"
        >
          Posada Motors builds V8 hybrid supercars that deliver thunderous
          mechanical soul with instantaneous electric torque. Handcrafted
          machines for those who demand both emotion and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#models"
            className="btn-shine px-9 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-all glow"
          >
            Explore Models
          </a>
          <a
            href="#experience"
            className="px-9 py-3.5 rounded-full border border-white/25 text-white font-medium text-sm tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
          >
            Watch Film
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto"
        >
          {[
            { value: "0–60", label: "2.1s" },
            { value: "1,200+", label: "hp" },
            { value: "V8", label: "Hybrid" },
            { value: "A.I.", label: "Chassis OS" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="chip px-5 py-2.5 gap-2"
            >
              <span className="font-display text-base font-semibold text-white">{stat.value}</span>
              <span className="text-muted text-xs">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#models"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-muted hover:text-white transition-colors"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
