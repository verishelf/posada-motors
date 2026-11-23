import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getModel, getAllModelSlugs, models } from "@/lib/models";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllModelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) return { title: "Model | Posada Motors" };
  return {
    title: `${model.name} | Posada Motors`,
    description: model.description,
    openGraph: {
      title: `Posada ${model.name} — ${model.tagline}`,
      description: model.headline,
    },
  };
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  const others = models.filter((item) => item.id !== model.id);

  return (
    <>
      <Navbar />
      <main className="detail-page">
        <section className="detail-hero">
          <div className="absolute inset-0">
            <Image src={model.image} alt={`Posada ${model.name}`} fill priority className="object-cover object-center" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-peat-deep/20" />
          <div className="relative z-10 section-wrap w-full pb-14 pt-40 md:pb-20">
            <Link href="/#models" className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-mineral/70 transition-colors hover:text-sand">
              <ArrowLeft size={15} /> All models
            </Link>
            <div className="eyebrow">{model.tagline}</div>
            <h1 className="mt-5 font-display text-7xl font-medium leading-[0.86] tracking-[-0.07em] text-mineral md:text-[9rem]">{model.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mineral/75 md:text-xl">{model.headline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#configure" className="btn-primary">Reserve {model.name}<ArrowUpRight size={16} /></a>
              <a href="#specs" className="btn-ghost">Full specifications</a>
            </div>
          </div>
        </section>

        <section className="detail-surface border-y border-white/10">
          <div className="section-wrap grid grid-cols-2 gap-6 py-7 md:grid-cols-4 md:gap-8 md:py-9">
            {model.performance.map((performance) => (
              <div key={performance.label}>
                <p className="font-display text-3xl tracking-[-0.05em] text-mineral md:text-4xl">{performance.value}</p>
                <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">{performance.label}</p>
                {performance.note && <p className="mt-1 text-xs text-mineral/45">{performance.note}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 md:py-36">
          <div className="section-wrap grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="section-number">01 / Overview</div>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl">Built without <em className="text-sand">compromise.</em></h2>
              <p className="mt-7 text-base leading-relaxed text-muted md:text-lg">{model.longDescription}</p>
              <p className="mt-5 text-sm leading-relaxed text-mineral/65">{model.description}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-surface">
              <Image src={model.image} alt={`Posada ${model.name} detail`} fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-peat-deep/75 to-transparent" />
              <div className="absolute bottom-5 left-5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-sand">Posada / {model.name} / 01</div>
            </div>
          </div>
        </section>

        <section className="detail-surface py-24 md:py-36">
          <div className="section-wrap">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <div className="section-number">02 / Highlights</div>
                <h2 className="mt-5 font-display text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl">What defines <em className="text-sand">{model.name}.</em></h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {model.highlights.map((highlight, index) => (
                <div key={highlight.title} className="detail-card p-7 md:p-8">
                  <div className="mb-10 flex items-center justify-between"><span className="font-mono text-[0.62rem] tracking-[0.14em] text-terracotta">0{index + 1}</span><ArrowUpRight size={17} className="text-sand" /></div>
                  <h3 className="font-display text-3xl tracking-[-0.04em] text-mineral">{highlight.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{highlight.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specs" className="detail-light py-24 md:py-36">
          <div className="section-wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="section-number">03 / Specifications</div>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-7xl">The details <em className="text-terracotta">matter.</em></h2>
            </div>
            <div className="border-t border-ink/20">
              {model.specs.map((spec, index) => (
                <div key={spec.label} className={`flex flex-col gap-1 border-b border-ink/15 py-4 sm:flex-row sm:items-center sm:justify-between ${index % 2 === 0 ? "bg-ink/[0.03]" : ""}`}>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink/55">{spec.label}</span>
                  <span className="text-sm font-medium text-ink sm:text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-36">
          <div className="section-wrap grid gap-4 md:grid-cols-3">
            {[
              { title: "Powertrain", body: model.powertrain },
              { title: "Chassis", body: model.chassis },
              { title: "Interior", body: model.interior },
            ].map((block, index) => (
              <div key={block.title} className="detail-card p-7 md:p-8">
                <span className="font-mono text-[0.62rem] tracking-[0.14em] text-terracotta">0{index + 1}</span>
                <h3 className="mt-9 font-display text-3xl tracking-[-0.04em] text-mineral">{block.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{block.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="configure" className="bg-sand py-24 text-ink md:py-36">
          <div className="section-wrap text-center">
            <div className="section-number">04 / Commission</div>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-6xl font-medium leading-[0.88] tracking-[-0.07em] md:text-8xl">Make {model.name} <em className="text-terracotta">yours.</em></h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">Choose finishes, materials, and hybrid calibrations. A Posada specialist will guide your commission from first sketch to first departure.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/#experience" className="btn-primary bg-ink text-mineral hover:bg-peat">Start configuring<ArrowUpRight size={16} /></Link>
              <Link href="/#about" className="btn-ghost border-ink/30 text-ink hover:border-ink hover:text-terracotta">Book a viewing</Link>
            </div>
            <p className="mt-7 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/50">{model.price}</p>
          </div>
        </section>

        <section className="border-t border-white/12 py-24 md:py-32">
          <div className="section-wrap">
            <h2 className="mb-10 text-center font-display text-4xl tracking-[-0.05em] text-mineral md:text-5xl">Explore the collection</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {others.map((other) => (
                <Link key={other.id} href={`/models/${other.id}`} className="range-card group min-h-[20rem]">
                  <Image src={other.image} alt={`Posada ${other.name}`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="range-card-content flex items-end justify-between gap-4">
                    <div><span className="eyebrow">{other.tagline}</span><h3>{other.name}</h3></div>
                    <ArrowRight className="mb-2 text-sand transition-transform group-hover:translate-x-1" size={19} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
