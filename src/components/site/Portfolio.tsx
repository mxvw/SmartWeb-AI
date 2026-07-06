import { SectionHeader } from "./Services";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";

const PROJECTS = [
  { img: p1, tag: "Elektron tijorat", title: "Crestoll bozori", desc: "Sun'iy intellekt tavsiyalari va 30% konversiya ko'rsatkichiga ega ko'p sotuvchili bozor." },
  { img: p2, tag: "AI Chatbot", title: "SwiftSupport AI", desc: "Mijozlarni qo'llab-quvvatlash chatboti SaaS kompaniyasi uchun chiptalarni 62% ga arzonlashtirdi." },
  { img: p3, tag: "Mobile Ilova", title: "Pulsli moliya", desc: "Real vaqt rejimida tahlil imkoniyatiga ega fintech mobil ilovasi, App Store'da 4,8 yulduzli baho." },
  { img: p4, tag: "CRM", title: "OrbitCRM", desc: "Logistika kompaniyasi uchun maxsus CRM — 12 ta jamoa, 100 mingdan ortiq yozuv, uzluksiz ishlash." },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Portfolio" title={<>Biz faxrlanadigan <span className="text-gradient">Ishlar</span></>}
          subtitle="Turli sohalardagi so‘nggi loyihalar tanlovi." />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl glass card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-brand-purple mb-2">{p.tag}</div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
