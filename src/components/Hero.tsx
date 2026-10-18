"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10" />
      
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/20 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/15 blur-[120px]"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent mb-8"
        >
          <Zap size={14} className="fill-accent" />
          <span>Now accepting reservations for 2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6"
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
          Posada Motors redefines electric performance. Handcrafted vehicles that
          move with intention, feel with intelligence, and leave presence in every
          moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#models"
            className="btn-shine px-8 py-4 rounded-full bg-accent text-background font-semibold text-base hover:bg-accent-dim transition-all glow"
          >
            Explore Models
          </a>
          <a
            href="#experience"
            className="px-8 py-4 rounded-full glass text-foreground font-medium text-base hover:border-accent/40 transition-all"
          >
            Watch Film
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "0–60", label: "in 1.9s" },
            { value: "620", label: "mi range" },
            { value: "1,100", label: "hp dual motor" },
            { value: "A.I.", label: "Drive OS" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#models"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-muted hover:text-accent transition-colors"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
