"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const models = [
  {
    id: "apex",
    name: "Apex",
    tagline: "The flagship sedan",
    range: "620 mi",
    accel: "1.9s",
    power: "1,100 hp",
    price: "From $128,000",
    color: "from-cyan-500/20 to-teal-600/10",
    description:
      "Sculpted for the open road. Dual-motor all-wheel drive, adaptive air suspension, and a cabin that anticipates every need.",
  },
  {
    id: "horizon",
    name: "Horizon",
    tagline: "Command the landscape",
    range: "580 mi",
    accel: "2.4s",
    power: "980 hp",
    price: "From $142,000",
    color: "from-violet-500/20 to-indigo-600/10",
    description:
      "Elevated presence. Three-row capability without compromise. Intelligent terrain response and panoramic quiet.",
  },
  {
    id: "pulse",
    name: "Pulse",
    tagline: "Pure kinetic art",
    range: "490 mi",
    accel: "1.7s",
    power: "1,250 hp",
    price: "From $165,000",
    color: "from-rose-500/20 to-orange-600/10",
    description:
      "Track-bred intensity meets everyday elegance. Carbon architecture, active aero, and the purest driving connection.",
  },
];

export default function Models() {
  return (
    <section id="models" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Three expressions of{" "}
            <span className="text-accent-gradient">excellence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <motion.article
              key={model.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="car-card group relative rounded-3xl overflow-hidden glass"
            >
              <div
                className={`h-56 bg-gradient-to-br ${model.color} relative flex items-end p-6`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                    {model.tagline}
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-white">
                    {model.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-muted text-sm leading-relaxed">
                  {model.description}
                </p>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-foreground font-semibold">{model.range}</div>
                    <div className="text-xs text-muted">Range</div>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">{model.accel}</div>
                    <div className="text-xs text-muted">0–60</div>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">{model.power}</div>
                    <div className="text-xs text-muted">Power</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-muted">{model.price}</span>
                  <a
                    href={`#${model.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-3 transition-all"
                  >
                    Explore
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
