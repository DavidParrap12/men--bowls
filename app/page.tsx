import { FeaturedBowl } from "@/components/FeaturedBowl";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToOrder } from "@/components/HowToOrder";
import { Marquee } from "@/components/Marquee";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { VisitSection } from "@/components/VisitSection";
import { bowls, siteConfig } from "@/content/bowls";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  description:
    "Bowls frescos, porciones honestas y salsas de la casa en Ibagué. Pide por WhatsApp.",
  servesCuisine: ["Bowls", "Comida fresca", "Cocina colombiana"],
  priceRange: "$$",
  currenciesAccepted: "COP",
  areaServed: {
    "@type": "City",
    name: "Ibagué",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ibagué",
    addressRegion: "Tolima",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:30",
      closes: "20:30",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "La carta de Bowl de la Casa",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Bowls de la casa",
      hasMenuItem: bowls.map((bowl) => ({
        "@type": "MenuItem",
        name: bowl.name,
        description: bowl.description,
        offers: {
          "@type": "Offer",
          price: bowl.price,
          priceCurrency: "COP",
        },
      })),
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="contenido">
        <Hero />
        <Marquee />
        <MenuSection />
        <FeaturedBowl />
        <HowToOrder />
        <VisitSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
