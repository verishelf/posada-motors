"use client";

import { motion } from "framer-motion";
import { Brain, Battery, Shield, Cpu, Wind, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Posada Drive OS",
    description:
      "A neural driving architecture that learns your patterns, predicts intent, and elevates every journey into effortless flow.",
  },
  {
    icon: Battery,
    title: "Solid-State Core",
    description:
      "Next-generation solid-state cells deliver industry-leading energy density, 15-minute ultra-fast charging, and decade-long longevity.",
  },
  {
    icon: Shield,
    title: "Guardian Suite",
    description:
      "360° predictive safety with lidar-fusion, structural battery protection, and proactive intervention that feels invisible.",
  },
  {
    icon: Cpu,
    title: "Quantum Compute",
    description:
      "Onboard high-performance computing powering real-time rendering, adaptive chassis, and over-the-air intelligence.",
  },
  {
    icon: Wind,
    title: "Active Aero",
    description:
      "Micro-actuators and continuous airflow optimization for maximum efficiency and high-speed stability.",
  },
  {
    icon: Sparkles,
    title: "Sensory Cabin",
    description:
      "Haptic surfaces, spatial audio, adaptive lighting, and materials that respond to touch and presence.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Technology
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Intelligence that{" "}
            <span className="text-accent-gradient">feels human</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Every system is designed around one principle: technology should
            disappear into the experience. What remains is pure connection
            between driver, machine, and road.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 rounded-2xl glass hover:border-accent/30 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
