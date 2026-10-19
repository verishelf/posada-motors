"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { models } from "@/lib/models";

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
              <Link href={`/models/${model.id}`} className="block">
                <div className="relative h-56 overflow-hidden rounded-t-[1.75rem]">
                  <Image
                    src={model.image}
                    alt={`Posada ${model.name}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
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
                      <span className="text-white font-medium">
                        {model.specs.find((s) => s.label === "Powertrain")?.value.split(" ")[0] ?? "V8 Hybrid"}
                      </span>
                    </span>
                    <span className="chip text-[11px]">
                      <span className="text-white font-medium">
                        {model.performance[0]?.value}
                      </span>
                      <span className="text-muted">0–60</span>
                    </span>
                    <span className="chip text-[11px]">
                      <span className="text-white font-medium">
                        {model.specs.find((s) => s.label === "Combined output")?.value}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm text-muted">{model.price}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white rounded-full px-3 py-1.5 group-hover:bg-white/10 transition-all group-hover:gap-2.5">
                      Explore
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
