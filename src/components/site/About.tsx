import { SectionHeader } from "./Services";
import { Target, Eye, ShieldCheck, Zap, Users, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Biz haqimizda" title={<>Biznes kelajagini <span className="text-gradient">barpo etish</span></>}
          subtitle="SmartWeb AI - bu ishlab chiqarishga tayyor raqamli mahsulotlarni yaratadigan muhandislar, dizaynerlar va AI mutaxassislaridan iborat jamoa." />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8">
            <Target className="text-brand-purple mb-4" />
            <h3 className="text-2xl font-bold mb-3">Bizning vazifamiz</h3>
            <p className="text-muted-foreground leading-relaxed">
            Har qanday hajmdagi biznesni aqlli avtomatlashtirish va zamonaviy veb-texnologiyalar bilan kengaytiring — shunda ular texnik qarzga emas, balki o'sishga e'tibor qaratishlari mumkin.
            </p>
          </div>
          <div className="glass rounded-3xl p-8">
            <Eye className="text-brand-blue mb-4" />
            <h3 className="text-2xl font-bold mb-3">Bizning Qarashimiz</h3>
            <p className="text-muted-foreground leading-relaxed">
            Mahalliy do‘konlardan tortib global korxonalargacha bo‘lgan har bir biznes o‘zi chin dildan foydalanishni yoqtiradigan aqlli va maxsus moslashtirilgan dasturiy ta’minot asosida ishlaydigan dunyo.
            </p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: ShieldCheck, title: "Ishonchli sifat", desc: "Ishlab chiqarishga tayyor, auditdan o‘tgan va sinovdan o‘tkazilgan kod." },
            { icon: Zap, title: "Tez yetkazib berish", desc: "Aksariyat loyihalar 2–6 hafta ichida yetkazib beriladi." },
            { icon: Users, title: "Kattalar jamoasi", desc: "Tajribali muhandislar, faqat yosh muhandislar yo'q." },
            { icon: Award, title: "Long-term Support", desc: "Uzoq muddatli qo'llab-quvvatlash" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl p-6 border border-border bg-card/40">
              <f.icon size={20} className="text-brand-purple mb-3" />
              <h4 className="font-semibold mb-1">{f.title}</h4>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
