export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center">
                <span className="font-display font-bold text-background text-sm">P</span>
              </div>
              <span className="font-display text-lg font-medium">Posada</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Precision. Presence. Power. The next generation of electric
              performance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Models</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#models" className="hover:text-accent transition-colors">Apex</a></li>
              <li><a href="#models" className="hover:text-accent transition-colors">Horizon</a></li>
              <li><a href="#models" className="hover:text-accent transition-colors">Pulse</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#technology" className="hover:text-accent transition-colors">Technology</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-sm text-muted">
          <p>© 2026 Posada Motors. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
