"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Compass } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=88";

export default function Hero() {
  return (
    <section className="hero-section relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="hero-media absolute inset-0 -z-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(242,238,232,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(242,238,232,0.14)_1px,transparent_1px)] [background-size:84px_84px]" />

      <div className="section-wrap flex min-h-[48rem] flex-col justify-end pb-12 pt-40 md:pb-16">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="eyebrow mb-7"
            >
              All-terrain performance · 2027
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title"
            >
              Go further.
              <br />
              <em>Stay with the feeling.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 max-w-[31rem] text-base leading-relaxed text-mineral/72 md:text-lg"
            >
              Posada builds V8 hybrid machines for the long way home — quiet when you need it, alive whenever the road opens up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.27 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#models" className="btn-primary">
                Explore the range
                <ArrowUpRight size={16} />
              </a>
              <a href="#experience" className="btn-ghost">
                Find your way
                <ArrowDownRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="hero-stats mt-14"
            >
              <div className="hero-stat">
                <strong>1,250</strong>
                <span>hp / combined output</span>
              </div>
              <div className="hero-stat">
                <strong>2.1s</strong>
                <span>0–60 / launch control</span>
              </div>
              <div className="hero-stat">
                <strong>V8 + e</strong>
                <span>hybrid / all-wheel drive</span>
              </div>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden border-l border-white/25 pl-5 lg:block"
          >
            <Compass className="mb-7 text-sand" size={26} strokeWidth={1.3} />
            <p className="font-display text-2xl leading-tight text-mineral">
              A better route is rarely the straight one.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-mineral/55">
              Designed in the atelier. Calibrated for the real world. Built for wherever you decide to turn.
            </p>
          </motion.aside>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/20 pt-4 text-mineral/55">
          <span className="route-rule">Mojave / 36°03′N 116°10′W</span>
          <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.15em] md:inline">Scroll to explore ↓</span>
        </div>
      </div>
    </section>
  );
}
