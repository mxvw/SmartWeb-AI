import { SectionHeader } from "./Services";
import { MessageSquare, ClipboardList, Palette, Code2, FlaskConical, Rocket } from "lucide-react";

const STEPS = [
  { icon: MessageSquare, title: "Maslahat", desc: "Biz maqsadlaringizni tinglaymiz va to‘g‘ri yechimni belgilaymiz." },
  { icon: ClipboardList, title: "Rejalashtirish", desc: "Aniq ko‘lam, muddatlar va topshiriladigan natijalar — kutilmagan holatlarsiz." },
  { icon: Palette, title: "Dizayn", desc: "Foydalanuvchilarni o'zgartirish va xursand qilish uchun yaratilgan Premium UI/UX." },
  { icon: Code2, title: "Rivojlanish", desc: "Sanoatning ilg‘or tajribalari asosida yozilgan toza va zamonaviy kod." },
  { icon: FlaskConical, title: "Sinov", desc: "Qurilmalar, brauzerlar va chekka holatlarda qat'iy sifat nazorati." },
  { icon: Rocket, title: "Ishga tushirish & qo‘llab-quvvatlash", desc: "Silliq joylashtirish, shuningdek, doimiy parvarish va yangilanishlar." },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Process" title={<>Qanday hamkorlik  <span className="text-gradient">qilamiz</span></>}
          subtitle="G‘oyadan ishga tushirishgacha bo‘lgan, o‘zini oqlagan 6 bosqichli jarayon." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative glass rounded-2xl p-6 card-hover">
              <div className="absolute top-4 right-5 text-5xl font-bold text-gradient opacity-30">
                0{i + 1}
              </div>
              <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center mb-4">
                <s.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const items = [
    { v: "250+", l: "Projects Completed" },
    { v: "180+", l: "Happy Clients" },
    { v: "7+", l: "Years of Experience" },
    { v: "120+", l: "AI Solutions Delivered" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass rounded-3xl p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {items.map((it) => (
            <div key={it.l}>
              <div className="text-4xl sm:text-5xl font-bold text-gradient">{it.v}</div>
              <div className="text-sm text-muted-foreground mt-2">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
