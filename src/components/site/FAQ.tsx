import { SectionHeader } from "./Services";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  { q: "Odatiy loyiha qancha vaqtni oladi?", a: "Aksariyat veb-saytlar 2–4 hafta ichida tayyor bo‘ladi. Maxsus ilovalar va CRM tizimlarini ishlab chiqish esa, ko‘lamiga qarab, odatda 6–12 hafta vaqt oladi." },
  { q: "Xalqaro mijozlar bilan ishlaysizmi?", a: "Ha. Biz butun dunyo bo‘ylab mijozlar bilan ishlaymiz hamda ingliz, rus va o‘zbek tillarida muloqot qilamiz." },
  { q: "Ishga tushirilgandan keyin kod menga tegishli bo'ladimi?", a: "Albatta. Kod, dizayn elementlari va infratuzilma 100% sizga tegishli bo‘ladi. Ishni topshirish chog‘ida biz sizga ularga to‘liq kirish huquqini taqdim etamiz." },
  { q: "Siz doimiy yordam ko'rsatasizmi?", a: "Ha. Har bir reja ishga tushirilgandan keyingi qo'llab-quvvatlashni o'z ichiga oladi va biz uzoq muddatli hamkorlik uchun oylik texnik xizmat ko'rsatish bo'yicha ta'minotchilarni taklif qilamiz." },
  { q: "Mening mavjud veb-saytimga sun'iy intellektni integratsiya qila olasizmi?", a: "Ha — biz har qanday zamonaviy sayt yoki ilovaga chatbotlar, avtomatlashtirish, kontent vositalari va AI ish oqimlarini qo'shishimiz mumkin." },
  { q: "Maxsus loyiha qancha turadi?", a: "Bu ko‘lamga bog‘liq. Bizning boshlang‘ich darajadagi loyihalarimiz narxi 199$ boshlanadi; yirik korporativ loyihalar narxi esa bepul maslahatlashuvdan so‘ng belgilanadi." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title={<>Ko‘p beriladigan  <span className="text-gradient">savollar</span></>} />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass rounded-2xl px-5 border-0">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
