import { Github, Linkedin, Twitter, Send, Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border pt-16 pb-8 mt-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="h-8 w-8 rounded-lg bg-gradient-vivid grid place-items-center text-sm">S</span>
            <span>SmartWeb<span className="text-gradient">AI</span></span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
          Zamonaviy biznes uchun aqlli yechimlar. Biz sun'iy intellektga asoslangan veb-saytlar, ilovalar va avtomatlashtirishni yaratamiz.
          </p>
          <div className="flex gap-3 mt-5">
            {[Twitter, Linkedin, Github, Instagram, Send].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full glass grid place-items-center hover:bg-white/10 transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
            <li><a href="#process" className="hover:text-foreground">Process</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">AI Chatbots</a></li>
            <li><a href="#services" className="hover:text-foreground">Veb sayt</a></li>
            <li><a href="#services" className="hover:text-foreground">Mobile Ilova</a></li>
            <li><a href="#services" className="hover:text-foreground">SEO & Marketing</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {year} SmartWeb AI. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Maxfiylik</a>
          <a href="#" className="hover:text-foreground">Shartlar</a>
        </div>
      </div>
    </footer>
  );
}
