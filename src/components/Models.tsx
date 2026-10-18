"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const models = [
  {
    id: "apex",
    name: "Apex",
    tagline: "Grand Touring Hybrid",
    range: "V8 + e-motors",
    accel: "2.1s",
    power: "1,250 hp",
    price: "From $285,000",
    gradient: "from-neutral-800 via-neutral-900 to-black",
    description:
      "The ultimate expression of Posada. Twin-turbo 4.0L V8 mated to high-output electric motors. Effortless continent-crossing speed with visceral soundtrack.",
  },
  {
    id: "pulse",
    name: "Pulse",
    tagline: "Track-bred intensity",
    range: "V8 Hybrid",
    accel: "1.9s",
    power: "1,480 hp",
    price: "From $365,000",
    gradient: "from-neutral-700 via-neutral-900 to-black",
    description:
      "Carbon-intensive architecture, active aero, and a hybrid system tuned for maximum lap times. Pure kinetic art for the dedicated driver.",
  },
  {
    id: "horizon",
    name: "Horizon",
    tagline: "Open-air presence",
    range: "V8 Hybrid",
    accel: "2.4s",
    power: "1,180 hp",
    price: "From $315,000",
    gradient: "from-neutral-800 via-black to-neutral-950",
    description:
      "Roadster freedom with supercar performance. Retractable hardtop, adaptive chassis, and the same V8 hybrid heart — refined for open skies.",
  },
];

export default function Models() {
  return (
    <section id="models" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-white/50 text-xs font-medium tracking-[0.25em] uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Three expressions of{" "}
            <span className="text-white">V8 hybrid power</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.article
              key={model.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="car-card group relative overflow-hidden bg-surface"
            >
              <div
                className={`h-56 bg-gradient-to-br ${model.gradient} relative flex items-end p-6`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">
                    {model.tagline}
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-white tracking-tight">
                    {model.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-5 border-t border-white/10">
                <p className="text-muted text-sm leading-relaxed">
                  {model.description}
                </p>

                <div className="grid grid-cols-3 gap-3 text-center border-y border-white/8 py-4">
                  <div>
                    <div className="text-white font-semibold text-sm">{model.range}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted mt-1">Powertrain</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{model.accel}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted mt-1">0–60</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{model.power}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted mt-1">Combined</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{model.price}</span>
                  <a
                    href={`#${model.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white uppercase tracking-wider group-hover:gap-3 transition-all"
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
