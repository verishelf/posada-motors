"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BatteryCharging, Cog, Cpu, Shield, Sparkles, Wind } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Twin-turbo V8 hybrid",
    description: "A hand-built 4.0-liter V8 keeps the mechanical soul intact while electric motors add instant, intelligent torque.",
  },
  {
    icon: BatteryCharging,
    title: "Energy, returned",
    description: "Regenerative systems turn braking and coasting into forward momentum, ready for the next opening in the road.",
  },
  {
    icon: Shield,
    title: "Carbon core chassis",
    description: "A rigid, light structure with integrated battery packaging keeps every response precise and every mile composed.",
  },
  {
    icon: Cpu,
    title: "Posada chassis OS",
    description: "Torque vectoring, adaptive damping, and predictive hybrid management read the road before you do.",
  },
  {
    icon: Wind,
    title: "Active aerodynamics",
    description: "The shape changes with the conditions — balancing stability, efficiency, and a sense of effortless speed.",
  },
  {
    icon: Sparkles,
    title: "A considered cabin",
    description: "Materials chosen for touch and time, with a driver-focused interface that disappears when the road takes over.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="tech-band py-24 md:py-36">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-9 pb-14 md:grid-cols-[0.72fr_1fr] md:items-end md:pb-20"
        >
          <div>
            <div className="section-number">02 / Engineering</div>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl">
              Built for the <span className="text-terracotta">long way.</span>
            </h2>
          </div>
          <div className="max-w-xl md:justify-self-end">
            <p className="text-lg leading-relaxed text-ink/70">
              Every Posada system has one job: make the machine feel more natural, more capable, and more connected to the road beneath it.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/55">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/20 text-terracotta"><ArrowUpRight size={14} /></span>
              Quiet intelligence / visceral response
            </div>
          </div>
        </motion.div>

        <div>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="tech-row"
            >
              <span className="tech-row-index">0{index + 1}</span>
              <div className="flex items-center gap-3">
                <feature.icon size={18} strokeWidth={1.45} className="text-terracotta" />
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
              <ArrowUpRight size={17} className="text-terracotta" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
