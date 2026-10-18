"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chip mb-5">Experience</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 mt-4">
              Configure your{" "}
              <span className="text-white">supercar</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Choose exterior finishes, interior materials, performance packages,
              and hybrid system calibrations. Every Posada is a personal statement
              of power and presence. Start designing yours today.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#models"
                className="btn-shine px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                Start Configuring
              </a>
              <a
                href="#about"
                className="px-7 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Book a Viewing
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface border border-white/10 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-black to-neutral-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-full border border-white/25 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-400">
                <Play className="text-white group-hover:text-black fill-current ml-0.5 transition-colors" size={24} />
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="chip text-[10px] mb-2">Film</span>
              <p className="font-display text-xl font-medium text-white mt-1">Presence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
