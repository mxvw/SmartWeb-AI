import { useState } from "react";
import { SectionHeader } from "./Services";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const telegram = formData.get("telegram");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const text = `
📩 Yangi murojaat

👤 Ism: ${name}
📱 Telegram: ${telegram}
📌 Mavzu: ${subject}

💬 Xabar:
${message}
`;

    try {
      const response = await fetch(
        "https://api.telegram.org/bot8662165803:AAH4gNKqGyZnWmXggf2tExRkureFv5lzdkA/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "7630544918",
            text,
          }),
        }
      );

      const result = await response.json();

      if (!result.ok) {
        throw new Error("Telegram API xatosi");
      }

      toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("❌ Xabar yuborilmadi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Keling <span className="text-gradient">biror narsa yarataylik</span>
            </>
          }
          subtitle="Loyihangiz haqida bizga so‘zlab bering. Biz 24 soat ichida javob beramiz."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value="kinoverce@gmail.com"
              href="mailto:kinoverce@gmail.com"
            />

            <ContactItem
              icon={Phone}
              label="Phone"
              value="+998 90 063 0706"
              href="tel:+998900630706"
            />

            <ContactItem
              icon={Send}
              label="Telegram"
              value="@mxvw_o77"
              href="https://t.me/mxvw_o77"
            />

            <ContactItem
              icon={MapPin}
              label="Location"
              value="Tashkent, Uzbekistan"
            />
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                name="name"
                placeholder="Ismingizni kiriting"
                required
              />

              <Field
                label="Telegram"
                name="telegram"
                placeholder="@username yoki https://t.me/username"
                required
              />
            </div>

            <Field
              label="Subject"
              name="subject"
              placeholder="Bu nima haqida?"
            />

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Loyihangiz haqida bizga so‘zlab bering..."
                className="w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm outline-none focus:border-brand-purple transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary h-12 px-8 font-semibold text-primary-foreground glow-shadow hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {loading ? "Sending..." : <>Jo'natish <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>

      <input
        {...props}
        className="w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm outline-none focus:border-brand-purple transition-colors"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 card-hover">
      <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-semibold truncate">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}