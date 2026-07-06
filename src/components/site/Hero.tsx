import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <img
        src={heroImg}
        alt=""
        width={1536}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <Sparkles size={14} className="text-brand-purple" />
            Zamonaviy bizneslar uchun aqlli yechimlar
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
          Sun'iy intellektga asoslangan<span className="text-gradient">Raqamli yechimlar</span> Biznesni rivojlantirish uchun
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
          Biz biznesga sun'iy intellektni avtomatlashtirish, zamonaviy veb-saytlar, chatbotlar, Telegram botlari va maxsus dasturiy ta'minot yechimlari bilan o'sishga yordam beramiz.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary h-12 px-7 font-semibold text-primary-foreground glow-shadow hover:scale-105 transition-transform"
            >
              Bepul Maslahat Oling <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-full glass h-12 px-7 font-semibold hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "100+", l: "Projects" },
              { v: "70+", l: "Clients" },
              { v: "2+", l: "Years" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 bg-gradient-radial animate-glow" />
          <div className="relative glass rounded-3xl p-6 animate-float">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="text-brand-purple">&gt; smartweb.ai ishga tushirish</div>
              <div className="text-muted-foreground">AI modullari yuklanmoqda...</div>
              <div className="text-brand-blue">✓ Neyron tarmoq tayyor</div>
              <div className="text-brand-blue">✓ Chat-bot dvigateli onlayn</div>
              <div className="text-brand-blue">✓ Avtomatlashtirish quvurlari</div>
              <div className="h-px bg-border my-3" />
              <div className="text-foreground">Holat: <span className="text-green-400">Joylashtirildi</span></div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-10 rounded-lg bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
