"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const models = [
  {
    id: "apex",
    name: "Apex",
    tagline: "Grand Touring Hybrid",
    range: "V8 + e-motors",
    accel: "2.1s",
    power: "1,250 hp",
    price: "From $285,000",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
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
          className="text-center mb-16"
        >
          <span className="chip mb-5">The Collection</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mt-4">
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
              className="car-card group relative bg-surface"
            >
              <div className="relative h-56 overflow-hidden rounded-t-[1.75rem]">
                <Image
                  src={model.image}
                  alt={`Posada ${model.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="chip text-[10px] mb-1.5 opacity-90">
                    {model.tagline}
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-white tracking-tight">
                    {model.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-muted text-sm leading-relaxed">
                  {model.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="chip text-[11px]">
                    <span className="text-white font-medium">{model.range}</span>
                  </span>
                  <span className="chip text-[11px]">
                    <span className="text-white font-medium">{model.accel}</span>
                    <span className="text-muted">0–60</span>
                  </span>
                  <span className="chip text-[11px]">
                    <span className="text-white font-medium">{model.power}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm text-muted">{model.price}</span>
                  <a
                    href={`#${model.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white rounded-full px-3 py-1.5 hover:bg-white/10 transition-all group-hover:gap-2.5"
                  >
                    Explore
                    <ArrowRight size={15} />
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
