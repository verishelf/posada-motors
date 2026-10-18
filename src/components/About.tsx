"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square rounded-3xl glass overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display text-7xl md:text-8xl font-semibold text-gradient mb-2">
                    2027
                  </div>
                  <p className="text-muted text-lg">First deliveries</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Built for those who{" "}
              <span className="text-accent-gradient">demand more</span>
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Posada Motors was founded on a simple conviction: the next era
                of mobility must be as emotionally resonant as it is
                technologically advanced.
              </p>
              <p>
                We gather engineers, designers, and materials scientists who
                refuse compromise. Every surface, every algorithm, every
                decision is measured against a single standard — does this make
                the driver feel more alive?
              </p>
              <p>
                From our design atelier to the advanced manufacturing campus,
                we are crafting vehicles that will define the next decade of
                performance luxury.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
