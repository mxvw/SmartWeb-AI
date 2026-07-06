import { SectionHeader } from "./Services";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Aisha Karimova", role: "CEO, Bloom Retail", text: "SmartWeb AI rebuilt our store and integrated a chatbot — sales jumped 40% in two months. Easy to work with and crazy fast." },
  { name: "Daniel Park", role: "Founder, NovaLogix", text: "Our custom CRM works exactly the way our team thinks. They listened, shipped, and kept improving. Worth every dollar." },
  { name: "Marina Toschi", role: "CMO, FreshHive", text: "The Telegram bot they built handles 80% of orders automatically. Game changer for our operations." },
  { name: "Omar Yusupov", role: "CTO, FinPath", text: "World-class engineering. Code is clean, infrastructure is rock solid, and they pushed back where it mattered. Highly recommend." },
  { name: "Lena Voss", role: "Director, EduSpark", text: "Beautiful website, ranks #1 on Google for our main keywords now. SEO results showed up within weeks." },
  { name: "Jasper Cole", role: "Owner, AtlasFit", text: "Mobile app feels premium and our members love it. Support after launch has been outstanding." },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title={<>Loved by <span className="text-gradient">teams worldwide</span></>}
          subtitle="What our clients say after working with us." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="glass rounded-2xl p-6 card-hover">
              <div className="flex gap-0.5 mb-3 text-brand-purple">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-vivid grid place-items-center font-semibold">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
