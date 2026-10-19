import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  const others = models.filter((m) => m.id !== model.id);

  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={model.image}
              alt={`Posada ${model.name}`}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full mx-auto max-w-7xl px-6 pb-16 pt-32">
            <Link
              href="/#models"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-8 transition-colors rounded-full px-3 py-1.5 hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              All models
            </Link>

            <span className="chip mb-4">{model.tagline}</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mt-3">
              {model.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
              {model.headline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-sm text-muted">{model.price}</span>
              <a
                href="#configure"
                className="btn-shine px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                Reserve {model.name}
              </a>
              <a
                href="#specs"
                className="px-6 py-3 rounded-full border border-white/25 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Full specs
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-surface/50">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {model.performance.map((p) => (
                <div key={p.label} className="text-center md:text-left">
                  <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    {p.value}
                  </p>
                  <p className="text-sm text-muted mt-1">{p.label}</p>
                  {p.note && (
                    <p className="text-xs text-white/40 mt-0.5">{p.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="chip mb-5">Overview</span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-6">
                  Built without compromise
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  {model.longDescription}
                </p>
                <p className="text-white/70 leading-relaxed">{model.description}</p>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-surface">
                <Image
                  src={model.image}
                  alt={`Posada ${model.name} detail`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <span className="chip mb-5">Highlights</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-4">
                What defines {model.name}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {model.highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-3xl border border-white/10 bg-black/60 p-8 hover:border-white/20 transition-colors"
                >
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {h.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specs" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <span className="chip mb-5">Specifications</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-4">
                Technical details
              </h2>
            </div>
            <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 overflow-hidden">
              {model.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-6 py-4 ${
                    i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
                  } border-b border-white/5 last:border-0`}
                >
                  <span className="text-muted text-sm">{s.label}</span>
                  <span className="font-medium text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Powertrain", body: model.powertrain },
                { title: "Chassis", body: model.chassis },
                { title: "Interior", body: model.interior },
              ].map((block) => (
                <div
                  key={block.title}
                  className="rounded-3xl border border-white/10 bg-black/50 p-8"
                >
                  <h3 className="font-display text-xl font-semibold mb-4">
                    {block.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="configure" className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="chip mb-5">Configure</span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-6">
              Make {model.name} yours
            </h2>
            <p className="text-muted text-lg mb-10">
              Choose finishes, packages, and hybrid calibrations. A Posada
              specialist will guide your commission from configuration to
              delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#experience"
                className="btn-shine px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                Start configuring
              </a>
              <a
                href="/#about"
                className="px-8 py-3.5 rounded-full border border-white/25 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Book a viewing
              </a>
            </div>
            <p className="mt-8 text-sm text-muted">{model.price}</p>
          </div>
        </section>

        <section className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-10 text-center">
              Explore the collection
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((m) => (
                <Link
                  key={m.id}
                  href={`/models/${m.id}`}
                  className="group car-card relative bg-surface overflow-hidden"
                >
                  <div className="relative h-48 md:h-56">
                    <Image
                      src={m.image}
                      alt={`Posada ${m.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                      <div>
                        <span className="chip text-[10px] mb-1.5">{m.tagline}</span>
                        <h3 className="font-display text-2xl font-semibold">
                          {m.name}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-white/80 group-hover:gap-2.5 transition-all">
                        View
                        <ArrowRight size={16} />
                      </span>
                    </div>
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
