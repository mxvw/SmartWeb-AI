import { SectionHeader } from "./Services";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter", price: "$199", desc: "Onlayn faoliyat boshlayotgan kichik bizneslar uchun.",
    features: ["5 sahifali zamonaviy veb-sayt", "Mobile responsive", "Asosiy SEO sozlamalari", "Bog‘lanish shakli", "2 haftada yetkazib berish", "30 kunlik qo‘llab-quvvatlash"],
  },
  {
    name: "Business", price: "$99", desc: "Ko'proq ehtiyoj sezadigan rivojlanayotgan kompaniyalar uchun.", featured: true,
    features: ["Maxsus veb-ilova yoki do‘kon", "AI chatbot integratsiyasi", "Chuqurlashtirilgan SEO", "CMS va blog", "Tahliliy boshqaruv paneli", "90 kunlik qo‘llab-quvvatlash"],
  },
  {
    name: "Korxona", price: "Maxsus", desc: "Keng ko‘lamda moslashtirilgan yechimlar.",
    features: ["Maxsus dasturiy ta'minot / CRM", "AI ni avtomatlashtirish ish jarayonlari", "Fidoyi jamoa", "Mobile ilovalar", "SLA va ustuvor qo‘llab-quvvatlash", "Cheksiz ko‘lam"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Pricing" title={<>Siz bilan birga  <span className="text-gradient">kengayadigan rejalar</span></>}
          subtitle="Transparent pricing. No hidden fees. Cancel anytime." />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 ${p.featured ? "bg-gradient-vivid text-primary-foreground glow-shadow scale-[1.02]" : "glass"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background border border-border px-3 py-1 text-xs font-semibold">
                  Eng ommabop
                </div>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`text-sm mt-1 ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                {p.price !== "Custom" && <span className="text-sm opacity-70">/project</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check size={18} className={p.featured ? "" : "text-brand-purple"} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full h-11 items-center justify-center rounded-full font-semibold transition-colors ${
                  p.featured ? "bg-background text-foreground hover:bg-background/90" : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Boshlash
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
