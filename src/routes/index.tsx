import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Process, Stats } from "@/components/site/Process";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartWeb AI — zamonaviy korxonalar uchun aqlli yechimlar" },
      {
        name: "description",
        content:
          "SmartWeb AI sizning biznesingizni rivojlantiradigan AI chatbotlari, zamonaviy veb-saytlar, elektron tijorat, Telegram botlari, CRMlar, mobil ilovalar va avtomatlashtirishni yaratadi.",
      },
      { property: "og:title", content: "SmartWeb AI — AI & Web Development Agency" },
      {
        property: "og:description",
        content:
          "Biznes rivojlanishi uchun sun'iy intellektga asoslangan raqamli yechimlar: chat-botlar, veb-saytlar, avtomatlashtirish, CRM tizimlari, mobil ilovalar va boshqalar.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "SmartWeb AI" },
      {
        name: "twitter:description",
        content: "Zamonaviy bizneslar uchun aqlli yechimlar — sunʼiy intellekt, veb va avtomatlashtirish.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SmartWeb AI",
          slogan: "Zamonaviy bizneslar uchun aqlli yechimlar",
          url: "/",
          sameAs: [],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Process />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
