"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative bg-surface border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display text-7xl md:text-8xl font-semibold text-white mb-2 tracking-tight">
                    2027
                  </div>
                  <span className="chip text-xs">First deliveries</span>
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
            <span className="chip mb-5">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 mt-4">
              Built for those who{" "}
              <span className="text-white">feel the road</span>
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Posada Motors was founded on a clear conviction: the purest
                driving experiences still need the soul of a great V8 — elevated
                by the precision and instant response only hybrid technology can
                provide.
              </p>
              <p>
                We unite engine specialists, chassis engineers, and materials
                scientists who refuse to choose between emotion and performance.
                Every decision is measured against one standard: does this make
                the driver feel more alive?
              </p>
              <p>
                From our design atelier to the advanced hybrid manufacturing
                campus, we craft limited-series V8 hybrid supercars that define
                the next chapter of high performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
