import { SectionHeader } from "./Services";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Aisha Karimova", role: "Bosh direktor, Bloom Retaill", text: "SmartWeb AI do‘konimizni qayta ishlab chiqdi va unga chatbotni integratsiya qildi — ikki oy ichida savdo hajmi 40 foizga oshdi. Ular bilan ishlash juda qulay va ishni nihoyatda tez bajarishadi." },
  { name: "Daniel Park", role: "NovaLogix asoschisi", text: "Bizning maxsus CRM tizimimiz jamoamiz o'ylaganidek ishlaydi. Ular tinglashdi, yetkazib berishdi va takomillashtirishda davom etishdi. Har bir dollarga arziydi." },
  { name: "Marina Toschi", role: "Marketing bo‘yicha bosh direktor (CMO), FreshHive", text: "Ular yaratgan Telegram boti buyurtmalarning 80 foizini avtomatik tarzda qayta ishlaydi. Bu faoliyatimizda tub o‘zgarish yasadi." },
  { name: "Umar Yusupov", role: "CTO, FinPath", text: "Yuqori darajadagi muhandislik. Kod toza, infratuzilma juda mustahkam va ular muhim masalalarda o‘z pozitsiyalarini qat’iy himoya qilishdi. Barchaga tavsiya qilaman." },
  { name: "Lena Voss", role: "Director, EduSpark", text: "Ajoyib veb-sayt, hozirda asosiy kalit so'zlarimiz bo'yicha Google'da 1-o'rinda turadi. SEO natijalari bir necha hafta ichida paydo bo'ldi." },
  { name: "Ravshan Jamolov", role: "Owner, AtlasFit", text: "Mobil ilova yuqori sifatlidek tuyuladi va a'zolarimiz uni yaxshi ko'rishadi. Ishga tushirilgandan keyin qo'llab-quvvatlash ajoyib bo'ldi." },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title={<>Dunyo bo'ylab  <span className="text-gradient">jamoalar tomonidan seviladi</span></>}
          subtitle="Mijozlarimiz biz bilan ishlagandan so'ng nima deydilar?" />
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
