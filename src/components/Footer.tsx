export default function Footer() {
  return (
    <footer className="footer-shell pt-16 pb-8 md:pt-24">
      <div className="section-wrap">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr] md:gap-8">
          <div>
            <div className="brand-lockup">
              <span className="brand-mark">P</span>
              <span>
                <small>V8 hybrid / all terrain</small>
                <strong>Posada</strong>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Machines for the moment before the launch. Precision, presence, and power at full volume.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-5">The range</h3>
            <ul className="space-y-3">
              <li><a className="footer-link" href="#models">Apex</a></li>
              <li><a className="footer-link" href="#models">Pulse</a></li>
              <li><a className="footer-link" href="#models">Horizon</a></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Explore</h3>
            <ul className="space-y-3">
              <li><a className="footer-link" href="#technology">Engineering</a></li>
              <li><a className="footer-link" href="#experience">Commission</a></li>
              <li><a className="footer-link" href="#about">Our story</a></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Connect</h3>
            <ul className="space-y-3">
              <li><a className="footer-link" href="#">Instagram</a></li>
              <li><a className="footer-link" href="#">Journal</a></li>
              <li><a className="footer-link" href="#">Press enquiries</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 text-[0.62rem] uppercase tracking-[0.13em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Posada Motors / Crafted for the extreme</p>
          <div className="flex gap-5">
            <a className="footer-link text-[0.62rem] uppercase tracking-[0.13em]" href="#">Privacy</a>
            <a className="footer-link text-[0.62rem] uppercase tracking-[0.13em]" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
