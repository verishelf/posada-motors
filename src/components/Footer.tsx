export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="font-display font-bold text-black text-sm leading-none">P</span>
              </div>
              <span className="font-display text-lg font-medium tracking-tight">Posada</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              V8 Hybrid Supercars. Precision. Presence. Power.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide mb-5 text-white/60">Models</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><a href="#models" className="hover:text-white transition-colors rounded-full px-1">Apex</a></li>
              <li><a href="#models" className="hover:text-white transition-colors rounded-full px-1">Pulse</a></li>
              <li><a href="#models" className="hover:text-white transition-colors rounded-full px-1">Horizon</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide mb-5 text-white/60">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide mb-5 text-white/60">Connect</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-muted">
          <p>© 2026 Posada Motors. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
