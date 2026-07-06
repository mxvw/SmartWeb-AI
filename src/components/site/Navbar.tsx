import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="h-8 w-8 rounded-lg bg-gradient-vivid grid place-items-center text-sm">S</span>
          <span>SmartWeb<span className="text-gradient">AI</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex h-10 items-center rounded-full bg-gradient-primary px-5 text-sm font-semibold text-primary-foreground glow-shadow hover:scale-105 transition-transform"
        >
          Get Started
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gradient-primary font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
