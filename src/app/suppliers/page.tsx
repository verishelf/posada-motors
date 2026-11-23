"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Box,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  ExternalLink,
  Factory,
  Filter,
  Gauge,
  Menu,
  Search,
  Settings2,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

type Supplier = {
  name: string;
  code: string;
  category: string;
  location: string;
  owner: string;
  status: "Approved" | "In review" | "Action required";
  score: number;
  next: string;
  accent: string;
};

const suppliers: Supplier[] = [
  { name: "Apex Carbon Works", code: "SUP-1048", category: "Carbon structures", location: "Modena, IT", owner: "Luca Bianchi", status: "Approved", score: 98, next: "Q3 capacity review", accent: "carbon" },
  { name: "VoltEdge Systems", code: "SUP-1082", category: "Hybrid electronics", location: "Stuttgart, DE", owner: "Mara Klein", status: "Approved", score: 94, next: "Cell audit · Aug 14", accent: "yellow" },
  { name: "Northline Precision", code: "SUP-1107", category: "CNC & machining", location: "Sheffield, UK", owner: "Jon Bell", status: "In review", score: 87, next: "Submit ISO 14001", accent: "orange" },
  { name: "Atelier Rosso", code: "SUP-1126", category: "Interior materials", location: "Turin, IT", owner: "Elena Conti", status: "Action required", score: 76, next: "Insurance certificate", accent: "red" },
  { name: "Kinetic Brake Co.", code: "SUP-1141", category: "Brake systems", location: "Birmingham, UK", owner: "Theo James", status: "Approved", score: 92, next: "Annual revalidation", accent: "blue" },
];

const programs = [
  { label: "Apex", detail: "Grand touring hybrid", value: "38 suppliers", progress: 78, color: "yellow" },
  { label: "Pulse", detail: "Track-bred intensity", value: "24 suppliers", progress: 61, color: "orange" },
  { label: "Horizon", detail: "Open-air performance", value: "19 suppliers", progress: 46, color: "white" },
];

function StatusBadge({ status }: { status: Supplier["status"] }) {
  return <span className={`supplier-status supplier-status--${status.toLowerCase().replaceAll(" ", "-")}`}><span />{status}</span>;
}

export default function SupplierDashboard() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All suppliers" | Supplier["status"]>("All suppliers");
  const [mobileNav, setMobileNav] = useState(false);

  const filteredSuppliers = useMemo(() => suppliers.filter((supplier) => {
    const matchesQuery = `${supplier.name} ${supplier.code} ${supplier.category} ${supplier.location}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "All suppliers" || supplier.status === filter;
    return matchesQuery && matchesFilter;
  }), [filter, query]);

  return (
    <main className="supplier-portal">
      <aside className={`supplier-sidebar ${mobileNav ? "supplier-sidebar--open" : ""}`}>
        <div className="supplier-sidebar-top">
          <Link href="/" className="brand-lockup supplier-brand" onClick={() => setMobileNav(false)}>
            <span className="brand-mark">P</span>
            <span><small>Posada / Portal</small><strong>Supplier Hub</strong></span>
          </Link>
          <button className="supplier-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X size={20} /></button>
        </div>
        <div className="supplier-workspace"><span className="supplier-avatar">PM</span><span><small>Workspace</small><strong>Posada Motors</strong></span><ChevronDown size={15} /></div>
        <nav className="supplier-nav" aria-label="Supplier portal navigation">
          <span className="supplier-nav-label">Workspace</span>
          <a className="supplier-nav-item supplier-nav-item--active" href="#overview"><Gauge size={17} /> Overview <span className="supplier-nav-count">01</span></a>
          <a className="supplier-nav-item" href="#suppliers"><Factory size={17} /> Suppliers <span className="supplier-nav-count">24</span></a>
          <a className="supplier-nav-item" href="#programs"><Box size={17} /> Programs</a>
          <a className="supplier-nav-item" href="#compliance"><ShieldCheck size={17} /> Compliance <span className="supplier-nav-dot" /></a>
          <span className="supplier-nav-label supplier-nav-label--spaced">Operations</span>
          <a className="supplier-nav-item" href="#activity"><Activity size={17} /> Activity</a>
          <a className="supplier-nav-item" href="#settings"><Settings2 size={17} /> Settings</a>
        </nav>
        <div className="supplier-sidebar-bottom"><div className="supplier-help"><CircleHelp size={17} /><span><strong>Need a hand?</strong><small>Open support desk</small></span><ArrowUpRight size={14} /></div><Link href="/" className="supplier-backlink">← Return to Posada Motors</Link></div>
      </aside>

      <section className="supplier-main">
        <header className="supplier-topbar"><div className="supplier-topbar-left"><button className="supplier-menu" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={21} /></button><div><span className="supplier-kicker">Supplier operations / 07:42 CET</span><h1>Good morning, Alex.</h1></div></div><div className="supplier-topbar-actions"><button className="supplier-icon-button" aria-label="Notifications"><Bell size={18} /><span className="supplier-notification-dot" /></button><div className="supplier-user"><span className="supplier-user-avatar">AS</span><span><strong>Alex Stone</strong><small>Procurement lead</small></span><ChevronDown size={14} /></div></div></header>

        <div className="supplier-content">
          <section id="overview" className="supplier-welcome"><div><span className="supplier-kicker supplier-kicker--yellow">Monday / 23 June 2026</span><h2>Supplier command center.</h2><p>One place to see what is moving, what needs attention, and what keeps the next Posada on the road.</p></div><button className="supplier-primary-button">Invite supplier <ArrowUpRight size={15} /></button></section>

          <section className="supplier-kpi-grid" aria-label="Supplier metrics">
            <article className="supplier-kpi-card"><div className="supplier-kpi-top"><span>Active suppliers</span><Factory size={17} /></div><strong>24</strong><div className="supplier-kpi-foot supplier-kpi-foot--up"><ArrowUpRight size={13} /> 8.3% <span>vs last quarter</span></div></article>
            <article className="supplier-kpi-card supplier-kpi-card--yellow"><div className="supplier-kpi-top"><span>Onboarding pipeline</span><ClipboardCheck size={17} /></div><strong>07</strong><div className="supplier-kpi-foot"><span>3 ready for approval</span></div></article>
            <article className="supplier-kpi-card"><div className="supplier-kpi-top"><span>Avg. performance</span><Gauge size={17} /></div><strong>91.4<small>/100</small></strong><div className="supplier-kpi-foot supplier-kpi-foot--up"><ArrowUpRight size={13} /> 2.1% <span>quality index</span></div></article>
            <article className="supplier-kpi-card supplier-kpi-card--alert"><div className="supplier-kpi-top"><span>Needs attention</span><Bell size={17} /></div><strong>03</strong><div className="supplier-kpi-foot supplier-kpi-foot--alert"><ArrowDownRight size={13} /> 2 expiring docs <span>1 score drop</span></div></article>
          </section>

          <section className="supplier-grid supplier-grid--primary">
            <article id="programs" className="supplier-panel supplier-program-panel"><div className="supplier-panel-heading"><div><span className="supplier-kicker">Program allocation</span><h3>Built for the collection.</h3></div><button className="supplier-text-button">View programs <ArrowUpRight size={14} /></button></div><div className="supplier-programs">{programs.map((program) => <div className="supplier-program" key={program.label}><div className="supplier-program-top"><div><strong>{program.label}</strong><span>{program.detail}</span></div><span>{program.value}</span></div><div className="supplier-progress"><span className={`supplier-progress-fill supplier-progress-fill--${program.color}`} style={{ width: `${program.progress}%` }} /></div><div className="supplier-program-foot"><span>{program.progress}% of sourcing plan</span><ArrowUpRight size={13} /></div></div>)}</div></article>
            <article id="compliance" className="supplier-panel supplier-compliance-panel"><div className="supplier-panel-heading"><div><span className="supplier-kicker">Compliance pulse</span><h3>Clean data. Clear road.</h3></div><ShieldCheck className="supplier-panel-icon" size={22} /></div><div className="supplier-ring"><div className="supplier-ring-inner"><strong>94%</strong><span>complete</span></div></div><div className="supplier-compliance-list"><div><span className="supplier-compliance-dot supplier-compliance-dot--green" />Approved documents <strong>142</strong></div><div><span className="supplier-compliance-dot supplier-compliance-dot--yellow" />Expiring this month <strong>08</strong></div><div><span className="supplier-compliance-dot supplier-compliance-dot--orange" />Needs review <strong>03</strong></div></div></article>
          </section>

          <section id="suppliers" className="supplier-panel supplier-table-panel"><div className="supplier-panel-heading supplier-panel-heading--table"><div><span className="supplier-kicker">Supplier directory</span><h3>Your network, at a glance.</h3></div><button className="supplier-secondary-button"><ExternalLink size={14} /> Export</button></div><div className="supplier-toolbar"><label className="supplier-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search supplier, code, category..." /></label><div className="supplier-filters"><Filter size={15} /><select value={filter} onChange={(event) => setFilter(event.target.value as typeof filter)} aria-label="Filter suppliers"><option>All suppliers</option><option>Approved</option><option>In review</option><option>Action required</option></select></div></div><div className="supplier-table-wrap"><table className="supplier-table"><thead><tr><th>Supplier</th><th>Category</th><th>Location</th><th>Owner</th><th>Status</th><th>Score</th><th>Next action</th><th /></tr></thead><tbody>{filteredSuppliers.map((supplier) => <tr key={supplier.code}><td><div className="supplier-name-cell"><span className={`supplier-row-mark supplier-row-mark--${supplier.accent}`}><Factory size={15} /></span><span><strong>{supplier.name}</strong><small>{supplier.code}</small></span></div></td><td>{supplier.category}</td><td>{supplier.location}</td><td>{supplier.owner}</td><td><StatusBadge status={supplier.status} /></td><td><span className={`supplier-score supplier-score--${supplier.score >= 90 ? "high" : supplier.score >= 80 ? "mid" : "low"}`}>{supplier.score}</span></td><td className="supplier-next-action">{supplier.next}</td><td><button className="supplier-row-action" aria-label={`Open ${supplier.name}`}><ArrowUpRight size={15} /></button></td></tr>)}</tbody></table>{filteredSuppliers.length === 0 && <div className="supplier-empty">No suppliers match that search.</div>}</div></section>

          <section id="activity" className="supplier-grid supplier-grid--bottom"><article className="supplier-panel supplier-activity-panel"><div className="supplier-panel-heading"><div><span className="supplier-kicker">Recent activity</span><h3>Latest moves.</h3></div><button className="supplier-icon-button"><ArrowUpRight size={16} /></button></div><div className="supplier-activity-list"><div><span className="supplier-activity-icon supplier-activity-icon--yellow"><Check size={15} /></span><p><strong>VoltEdge Systems</strong> was approved for Apex hybrid.<small>18 min ago / by Mia Chen</small></p></div><div><span className="supplier-activity-icon supplier-activity-icon--orange"><Truck size={15} /></span><p><strong>Kinetic Brake Co.</strong> updated delivery schedule.<small>2 hrs ago / by Theo James</small></p></div><div><span className="supplier-activity-icon supplier-activity-icon--white"><ClipboardCheck size={15} /></span><p><strong>Northline Precision</strong> submitted new certification.<small>Yesterday / by Jon Bell</small></p></div></div></article><article className="supplier-panel supplier-readiness-panel"><div className="supplier-panel-heading"><div><span className="supplier-kicker">Next milestone</span><h3>Pulse launch readiness.</h3></div><span className="supplier-milestone-label">T−42 days</span></div><div className="supplier-readiness-bar"><span style={{ width: "72%" }} /></div><div className="supplier-readiness-foot"><span><strong>72%</strong> supplier readiness</span><span>14 / 19 cleared</span></div><button className="supplier-primary-button supplier-primary-button--full">Open readiness plan <ArrowUpRight size={15} /></button></article></section>
        </div>
      </section>
    </main>
  );
}
