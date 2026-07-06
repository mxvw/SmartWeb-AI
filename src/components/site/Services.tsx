import {
  Bot, Globe, ShoppingCart, Send, Workflow, Database, Smartphone, Search,
} from "lucide-react";

const SERVICES = [
  { icon: Bot, title: "AI Chatbot rivojlanishi", desc: "Ma'lumotlaringiz bo'yicha o'qitilgan aqlli suhbat agentlari, 24/7 mavjud." },
  { icon: Globe, title: "Veb-sayt yaratish", desc: "Zamonaviy freymvorklar yordamida yaratilgan, chaqmoqdek tez va SEOga tayyor veb-saytlar." },
  { icon: ShoppingCart, title: "Elektron tijorat yechimlari", desc: "To'lov va inventarizatsiyani uzluksiz amalga oshirish imkonini beruvchi kengaytiriladigan onlayn-do'konlar." },
  { icon: Send, title: "Telegram botlarini ishlab chiqish", desc: "Qo'llab-quvvatlash, savdo va avtomatlashtirish uchun maxsus Telegram botlari." },
  { icon: Workflow, title: "Biznesni avtomatlashtirish", desc: "Ish jarayonlarini avtomatlashtiring, soatlarni tejang va qo'lda xatolarni bartaraf eting." },
  { icon: Database, title: "CRM Systems", desc: "Mijozlarni boshqarish va savdoni oshirishga mo‘ljallangan maxsus CRM-platformalar." },
  { icon: Smartphone, title: "Mobil ilovalar ishlab chiqish", desc: "Foydalanuvchilar yaxshi ko‘radigan nativ va kross-platformali mobil ilovalar." },
  { icon: Search, title: "SEO va Raqamli Marketing", desc: "Yuqori o'rinlarni egallang, ko'proq konvertatsiya qiling va raqamli mavjudligingizni oshiring." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Biz nima qilamiz" title={<>Xizmatlar <span className="text-gradient">Natijalarga Erishish</span></>}
          subtitle="Biznes maqsadlaringizga moslashtirilgan to'liq stack AI va veb-ishlab chiqish." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="group glass rounded-2xl p-6 card-hover">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, subtitle, center = true,
}: { eyebrow: string; title: React.ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
