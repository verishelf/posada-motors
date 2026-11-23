import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CircuitBoard, Layers3, MoveUpRight, Target, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const team = [
  { initials: "AS", name: "Ari Stone", role: "Founder / Chief Creative Officer", discipline: "Design direction", bio: "Sets the visual pulse of every Posada — from first silhouette to the final detail the driver notices at 140 mph.", color: "yellow" },
  { initials: "MC", name: "Mia Chen", role: "Chief Engineering Officer", discipline: "Hybrid systems", bio: "Turns electric torque, thermal intelligence, and a very serious V8 into one seamless physical experience.", color: "orange" },
  { initials: "JB", name: "Jon Bell", role: "Director of Vehicle Dynamics", discipline: "Chassis / control", bio: "Believes the best software disappears through the steering wheel. Calibrates every response until it feels inevitable.", color: "white" },
  { initials: "EC", name: "Elena Conti", role: "Head of Materials", discipline: "Surface / texture", bio: "Builds the relationship between light, touch, and speed through materials chosen to get better with time.", color: "red" },
  { initials: "LB", name: "Luca Bianchi", role: "Director of Manufacturing", discipline: "Atelier operations", bio: "Brings obsessive repeatability to a process that still leaves room for the human hand — and its judgment.", color: "blue" },
  { initials: "TK", name: "Theo Kim", role: "Head of Digital Experience", discipline: "Driver interface", bio: "Designs the invisible layer between machine and driver, so the right information arrives before it is requested.", color: "green" },
];

const principles = [
  { icon: Target, number: "01", title: "Make the feeling measurable", body: "We use data to sharpen instinct, not to replace it. Every graph eventually has to make sense in a corner." },
  { icon: Layers3, number: "02", title: "Details carry the drama", body: "The difference is in the last millimeter: the click, the grain, the line that makes a surface feel ready to move." },
  { icon: Zap, number: "03", title: "Move before the obvious", body: "The next expression of performance rarely arrives by following the category. We prefer the sharper turn." },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="team-page">
        <section className="team-hero">
          <div className="team-hero-grid" />
          <div className="section-wrap team-hero-content">
            <div className="team-hero-meta"><span className="eyebrow">Posada / The people behind the pulse</span><span className="team-hero-index">01—06 / 2026</span></div>
            <h1>Meet the<br /><em>extreme.</em></h1>
            <div className="team-hero-bottom"><p>We are a small, exacting group of designers, engineers, makers, and restless optimists building machines that refuse to be background.</p><a href="#team" className="team-scroll-link">Meet the team <ArrowDownRight size={16} /></a></div>
          </div>
        </section>

        <section id="team" className="team-people section-wrap">
          <div className="team-section-heading"><div><span className="section-number">01 / The people</span><h2>Different disciplines.<br /><em>One pulse.</em></h2></div><p>Posada is built by people who care about the invisible line between engineering and emotion.</p></div>
          <div className="team-grid">{team.map((member, index) => <article className="team-card" key={member.name}><div className={`team-card-art team-card-art--${member.color}`}><span className="team-card-number">0{index + 1}</span><span className="team-initials">{member.initials}</span><span className="team-card-shape" /></div><div className="team-card-body"><div className="team-card-discipline">{member.discipline}</div><h3>{member.name}</h3><p className="team-card-role">{member.role}</p><p className="team-card-bio">{member.bio}</p><div className="team-card-link">View profile <ArrowUpRight size={14} /></div></div></article>)}</div>
        </section>

        <section className="team-principles"><div className="section-wrap"><div className="team-section-heading team-section-heading--light"><div><span className="section-number">02 / How we work</span><h2>Pressure makes<br /><em>the shape.</em></h2></div><p>There is no neutral setting here. We bring intent to the room, the sketch, and every test drive.</p></div><div className="team-principles-grid">{principles.map((principle) => <article className="team-principle" key={principle.number}><div className="team-principle-top"><span>{principle.number}</span><principle.icon size={20} /></div><h3>{principle.title}</h3><p>{principle.body}</p></article>)}</div></div></section>

        <section className="team-stats section-wrap"><div className="team-stat"><strong>11</strong><span>disciplines in one atelier</span></div><div className="team-stat"><strong>04</strong><span>continents in the network</span></div><div className="team-stat"><strong>01</strong><span>unreasonable standard</span></div><div className="team-stat team-stat--accent"><CircuitBoard size={26} /><span>Human judgment / amplified</span></div></section>

        <section className="team-join"><div className="team-join-grid" /><div className="section-wrap team-join-content"><div><span className="eyebrow">03 / Join the marque</span><h2>Bring your<br /><em>obsession.</em></h2></div><div><p>We are always looking for the person who sees one more possibility in the system. If that is you, start a conversation.</p><Link href="mailto:careers@posada-motors.com" className="btn-primary">Start a conversation <MoveUpRight size={16} /></Link></div></div></section>
      </main>
      <Footer />
    </>
  );
}
