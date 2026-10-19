"use client";

import { motion } from "framer-motion";
import { Cog, BatteryCharging, Shield, Cpu, Wind, Sparkles } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Twin-Turbo V8 Hybrid",
    description:
      "A hand-built 4.0-liter twin-turbo V8 paired with high-output electric motors delivers seamless power and an unmistakable mechanical soundtrack.",
  },
  {
    icon: BatteryCharging,
    title: "Intelligent Energy Recovery",
    description:
      "Advanced regenerative systems harvest energy under braking and coasting, feeding it back for launch torque and short electric-only bursts.",
  },
  {
    icon: Shield,
    title: "Carbon Core Chassis",
    description:
      "Monocoque carbon structure with integrated hybrid battery packaging for extreme rigidity, low weight, and exceptional safety.",
  },
  {
    icon: Cpu,
    title: "Posada Chassis OS",
    description:
      "Real-time torque vectoring, adaptive damping, and predictive hybrid management that anticipates the road and the driver’s intent.",
  },
  {
    icon: Wind,
    title: "Active Aerodynamics",
    description:
      "Multi-element active aero continuously balances downforce and efficiency from city streets to high-speed circuits.",
  },
  {
    icon: Sparkles,
    title: "Sensory Cabin",
    description:
      "Driver-focused cockpit with haptic feedback, configurable V8 sound profiles, and materials chosen for both lightness and presence.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-16"
        >
          <span className="chip mb-5">Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 mt-4">
            Mechanical soul.{" "}
            <span className="text-white">Electric precision.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Every Posada hybrid system is engineered so the V8 remains the
            emotional center while electric torque fills every gap — creating
            power delivery that feels both organic and instantaneous.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group p-7 rounded-3xl bg-surface border border-white/8 hover:border-white/20 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white group-hover:border-white transition-colors">
                <feature.icon className="text-white group-hover:text-black transition-colors" size={20} />
              </div>
              <h3 className="font-display text-xl font-medium mb-3 tracking-tight">
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
