"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
      
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-white/10 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 35, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-1/3 right-1/5 w-[28rem] h-[28rem] rounded-full bg-white/8 blur-[140px]"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-white/20 bg-black/60 text-sm text-white mb-8 tracking-widest uppercase"
        >
          <Zap size={14} className="fill-white" />
          <span>V8 Hybrid Supercars — 2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] mb-6"
        >
          <span className="block">Precision.</span>
          <span className="block text-gradient">Presence.</span>
          <span className="block">Power.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-12"
        >
          Posada Motors builds V8 hybrid supercars that deliver thunderous
          mechanical soul with instantaneous electric torque. Handcrafted
          machines for those who demand both emotion and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#models"
            className="btn-shine px-10 py-4 bg-white text-black font-semibold text-base tracking-wide uppercase hover:bg-neutral-200 transition-all glow"
          >
            Explore Models
          </a>
          <a
            href="#experience"
            className="px-10 py-4 border border-white/30 text-white font-medium text-base tracking-wide uppercase hover:border-white hover:bg-white/5 transition-all"
          >
            Watch Film
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12"
        >
          {[
            { value: "0–60", label: "in 2.1s" },
            { value: "1,200+", label: "hp combined" },
            { value: "V8", label: "hybrid powertrain" },
            { value: "A.I.", label: "Chassis OS" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#models"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-muted hover:text-white transition-colors"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
