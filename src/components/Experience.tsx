"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";

const experienceImage =
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=84";

export default function Experience() {
  return (
    <section id="experience" className="bg-sand py-24 text-ink md:py-36">
      <div className="section-wrap">
        <div className="grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-number">03 / The way</div>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Make the route <em className="text-terracotta">yours.</em>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
              Choose the finish, the materials, and the calibration. A Posada specialist will shape the machine around the places you already want to go.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="btn-primary bg-ink text-mineral hover:bg-peat">
                Start your commission
                <ArrowUpRight size={16} />
              </a>
              <a href="#about" className="btn-ghost border-ink/30 text-ink hover:border-ink hover:text-terracotta">
                Book a viewing
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="group relative min-h-[24rem] overflow-hidden bg-peat md:min-h-[31rem]"
          >
            <Image
              src={experienceImage}
              alt="A winding road through a high desert landscape"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peat/95 via-peat/10 to-transparent" />
            <div className="absolute left-6 top-6 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mineral/70">
              <span className="h-px w-8 bg-terracotta" /> Commission / 01
            </div>
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-5">
              <div>
                <div className="eyebrow">Film / Presence</div>
                <p className="mt-3 max-w-xs font-display text-3xl leading-none text-mineral md:text-4xl">
                  The road is part of the design.
                </p>
              </div>
              <button type="button" aria-label="Play the Posada film" className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-mineral/50 bg-ink/30 text-mineral backdrop-blur transition hover:bg-sand hover:text-ink">
                <Play size={19} fill="currentColor" className="ml-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
