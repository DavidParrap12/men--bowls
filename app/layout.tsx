import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Bowl de la Casa | Bowls frescos en Ibagué",
    template: "%s | Bowl de la Casa",
  },
  description:
    "Bowls frescos, porciones honestas y salsas de la casa en Ibagué. Elige tu favorito, mira sus ingredientes y pídelo por WhatsApp.",
  applicationName: "Bowl de la Casa",
  category: "restaurant",
  keywords: [
    "bowls Ibagué",
    "comida fresca Ibagué",
    "restaurante Ibagué",
    "domicilios Ibagué",
    "Bowl de la Casa",
    "bowls saludables",
  ],
  authors: [{ name: "Bowl de la Casa" }],
  creator: "Bowl de la Casa",
  publisher: "Bowl de la Casa",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Bowl de la Casa",
    title: "Bowl de la Casa | Bowls frescos en Ibagué",
    description:
      "Ingredientes frescos, porciones honestas y salsas de la casa. Pide tu bowl favorito por WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bowl de la Casa | Bowls frescos en Ibagué",
    description:
      "Ingredientes frescos, porciones honestas y salsas de la casa. Pide tu bowl favorito por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f1e6",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full bg-cream font-sans text-ink antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
        <div className="grain-overlay" aria-hidden="true" />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
