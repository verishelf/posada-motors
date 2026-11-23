"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { models } from "@/lib/models";

export default function Models() {
  return (
    <section id="models" className="site-surface py-24 md:py-36">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col gap-7 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="section-number">01 / The collection</div>
            <h2 className="section-title mt-5 max-w-3xl">
              Machines built to <em>intimidate.</em>
            </h2>
          </div>
          <p className="max-w-[19rem] text-sm leading-relaxed text-muted">
            Three expressions of the same belief: performance should be felt before it is understood.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={index === 0 ? "md:row-span-2" : ""}
            >
              <Link href={`/models/${model.id}`} className={`range-card group ${index === 0 ? "range-card--featured" : ""}`}>
                <Image
                  src={model.image}
                  alt={`Posada ${model.name}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                />
                <div className="range-card-content">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow">{model.tagline}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-sand transition-colors group-hover:border-sand">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3>{model.name}</h3>
                  <p>{model.description}</p>
                  <div className="range-card-meta">
                    <span>{model.price}</span>
                    <span>{model.performance[0]?.value} / 0–60</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
