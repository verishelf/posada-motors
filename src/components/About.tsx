"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="site-surface py-24 md:py-36">
      <div className="section-wrap">
        <div className="mb-14 flex items-end justify-between gap-6 md:mb-20">
          <div>
            <div className="section-number">04 / Our story</div>
            <h2 className="section-title mt-5 max-w-3xl">
              Built for those who <em>feel the road.</em>
            </h2>
          </div>
          <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted md:block">Posada / Field notes 01</span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="story-panel flex flex-col justify-between p-7 md:p-10"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="eyebrow">From the atelier</span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-sand/35 text-sand"><MapPin size={16} /></span>
            </div>
            <div className="relative z-10 max-w-lg">
              <span className="quote-mark">“</span>
              <p className="mt-1 font-display text-3xl leading-[1.05] text-mineral md:text-5xl">
                The purest driving experiences still need a soul — just one that knows when to be quiet.
              </p>
              <div className="mt-8 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-sand/65">
                <span className="h-px w-8 bg-terracotta" /> Posada / 2026
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex flex-col justify-between border border-white/15 bg-surface/55 p-7 md:p-10"
          >
            <div className="space-y-5 text-sm leading-relaxed text-muted md:text-base">
              <p>
                Posada was founded on a simple conviction: technology should make the road feel more alive, not less human.
              </p>
              <p>
                We bring together engine specialists, chassis engineers, and material makers who refuse to choose between emotion and capability. Every decision is measured against one question: does this make the driver feel more present?
              </p>
              <p>
                From our design atelier to the advanced hybrid line, every machine is made to reward the miles that were never on the original plan.
              </p>
            </div>
            <div className="mt-12 border-t border-white/14 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <span className="eyebrow">First deliveries</span>
                  <p className="mt-3 font-display text-5xl text-mineral md:text-6xl">2027</p>
                </div>
                <ArrowUpRight className="mb-2 text-terracotta" size={22} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
