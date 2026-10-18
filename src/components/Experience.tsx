"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Configure your{" "}
              <span className="text-accent-gradient">supercar</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Choose exterior finishes, interior materials, performance packages,
              and hybrid system calibrations. Every Posada is a personal statement
              of power and presence. Start designing yours today.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#models"
                className="btn-shine px-7 py-3.5 rounded-full bg-accent text-background font-semibold hover:bg-accent-dim transition-colors glow-sm"
              >
                Start Configuring
              </a>
              <a
                href="#about"
                className="px-7 py-3.5 rounded-full glass font-medium hover:border-accent/40 transition-all"
              >
                Book a Private Viewing
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden glass group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,212,0.15),transparent_60%)]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-1/3 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-400 glow-sm">
                <Play className="text-accent fill-accent ml-1" size={28} />
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-white/70">Watch the 2027 Film</p>
              <p className="font-display text-xl font-medium">Presence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
