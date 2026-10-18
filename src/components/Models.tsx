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
    color: "from-cyan-500/20 to-teal-600/10",
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
    color: "from-rose-500/20 to-orange-600/10",
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
    color: "from-violet-500/20 to-indigo-600/10",
    description:
      "Roadster freedom with supercar performance. Retractable hardtop, adaptive chassis, and the same V8 hybrid heart — refined for open skies.",
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
            <span className="text-accent-gradient">V8 hybrid power</span>
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
                    <div className="text-foreground font-semibold text-sm">{model.range}</div>
                    <div className="text-xs text-muted">Powertrain</div>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">{model.accel}</div>
                    <div className="text-xs text-muted">0–60</div>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">{model.power}</div>
                    <div className="text-xs text-muted">Combined</div>
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
