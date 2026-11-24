import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Building2, Globe2, Leaf, MoveUpRight, ShieldCheck, Sparkles, TrendingUp, UsersRound, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const pillars = [
  { icon: Zap, number: "01", title: "Performance without apology", body: "We build machines that make advanced hybrid technology feel visceral, immediate, and unmistakably human." },
  { icon: Leaf, number: "02", title: "Progress with intent", body: "Every watt, gram, and process is measured against a better outcome for the road and the world around it." },
  { icon: UsersRound, number: "03", title: "People make the difference", body: "Our advantage is a network of experts who move quickly, challenge the expected, and care about the last detail." },
  { icon: Globe2, number: "04", title: "Born local. Built global.", body: "From our design atelier to a worldwide supplier network, Posada operates with a distinctly international point of view." },
];

const milestones = [
  { year: "2021", title: "The first sketch", body: "Posada begins with a simple question: what if hybrid performance felt more alive?" },
  { year: "2023", title: "The prototype", body: "Our first rolling mule puts the V8 hybrid architecture through its earliest road tests." },
  { year: "2025", title: "The atelier", body: "Design, engineering, and materials teams come together under one roof." },
  { year: "2027", title: "The collection", body: "Apex, Pulse, and Horizon enter production for the first customers." },
];

export default function CorporatePage() {
  return (
    <>
      <Navbar />
      <main className="corporate-page">
        <section className="corporate-hero">
          <div className="corporate-hero-grid" />
          <div className="section-wrap corporate-hero-content">
            <div className="corporate-hero-top"><span className="eyebrow">Posada Motors / Corporate</span><span className="corporate-hero-code">HQ / Modena — 44°38′N</span></div>
            <div className="corporate-hero-copy"><span className="corporate-hero-kicker">The company behind the feeling</span><h1>Built to<br /><em>move people.</em></h1><p>Posada Motors is an independent performance company bringing together combustion character, electric intelligence, and the belief that a car can still make the heart move faster.</p></div>
            <div className="corporate-hero-bottom"><span className="corporate-scroll-label"><ArrowDownRight size={15} /> Scroll to explore</span><span className="corporate-hero-stat"><strong>01</strong><span>Independent performance marque</span></span></div>
          </div>
        </section>

        <section className="corporate-intro section-wrap"><div className="corporate-intro-mark">P<span>/</span></div><div><span className="section-number">01 / Our position</span><h2>Not just a car company.<br /><em>A point of view.</em></h2></div><div className="corporate-intro-copy"><p>We believe the next generation of performance should not ask drivers to choose between emotion and responsibility. It should make both more compelling.</p><p>Posada exists at that intersection — designing a new kind of machine, a new kind of ownership, and a company culture that never confuses complexity with progress.</p><Link href="/team" className="corporate-inline-link">Meet the people behind it <ArrowUpRight size={15} /></Link></div></section>

        <section className="corporate-pillars"><div className="section-wrap"><div className="corporate-section-heading"><div><span className="section-number">02 / What drives us</span><h2>Four ways of<br /><em>moving forward.</em></h2></div><p>Our corporate strategy is simple to say and difficult to fake: create desire, earn trust, and leave the system better than we found it.</p></div><div className="corporate-pillar-grid">{pillars.map((pillar) => <article className="corporate-pillar" key={pillar.number}><div className="corporate-pillar-top"><span>{pillar.number}</span><pillar.icon size={22} /></div><h3>{pillar.title}</h3><p>{pillar.body}</p><ArrowUpRight className="corporate-pillar-arrow" size={18} /></article>)}</div></div></section>

        <section className="corporate-timeline section-wrap"><div className="corporate-section-heading"><div><span className="section-number">03 / The road so far</span><h2>Built in<br /><em>chapters.</em></h2></div><p>From a question on paper to a collection with a pulse. We take the long view — and move with urgency.</p></div><div className="corporate-milestones">{milestones.map((milestone, index) => <article className="corporate-milestone" key={milestone.year}><div className="corporate-milestone-year">{milestone.year}</div><div className="corporate-milestone-line"><span /><i /></div><div className="corporate-milestone-copy"><span>0{index + 1} / milestone</span><h3>{milestone.title}</h3><p>{milestone.body}</p></div></article>)}</div></section>

        <section className="corporate-operations"><div className="section-wrap corporate-operations-grid"><div><span className="eyebrow">04 / The operating system</span><h2>Ambition needs<br /><em>structure.</em></h2><p>Posada is designed to stay small enough to decide quickly and strong enough to deliver at scale.</p><Link href="/suppliers" className="btn-primary">Explore supplier hub <ArrowUpRight size={16} /></Link></div><div className="corporate-operating-cards"><article><Building2 size={21} /><strong>Independent</strong><span>Founder-led / focused ownership</span></article><article><ShieldCheck size={21} /><strong>Accountable</strong><span>Clear standards / open reporting</span></article><article><TrendingUp size={21} /><strong>Built to last</strong><span>Long-term value / durable systems</span></article><article><Sparkles size={21} /><strong>Distinctive</strong><span>Original thinking / exacting craft</span></article></div></div></section>

        <section className="corporate-contact"><div className="section-wrap corporate-contact-content"><div><span className="eyebrow">05 / Corporate enquiries</span><h2>Let’s make<br /><em>something move.</em></h2></div><div><p>For press, partnerships, investor relations, or corporate enquiries, our team is ready to start the right conversation.</p><Link href="mailto:hello@posada-motors.com" className="btn-primary">Contact Posada <MoveUpRight size={16} /></Link></div></div></section>
      </main>
      <Footer />
    </>
  );
}
