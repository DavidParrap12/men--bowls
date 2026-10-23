import {
  ArrowUpRightIcon,
  BowlIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { siteConfig, whatsappLink } from "@/content/bowls";

const links = [
  { href: "#carta", label: "La carta" },
  { href: "#favorito", label: "El favorito" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#visitanos", label: "Visítanos" },
];

const orderLink = whatsappLink(
  "Hola, quiero pedir un bowl. ¿Me ayudas con el menú?",
);

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-forest-deep pt-16 text-cream">
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid gap-10 border-b border-cream/10 pb-12 md:grid-cols-[1.2fr_0.7fr_0.9fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5"
              aria-label={`${siteConfig.name}, volver al inicio`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-forest-deep">
                <BowlIcon className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.35rem] font-semibold tracking-tight text-cream">
                  Bowl de la Casa
                </span>
                <span className="mt-1 text-[8px] font-extrabold uppercase tracking-[0.28em] text-cream/45">
                  Hecho en Ibagué
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[12.5px] leading-6 text-cream/60">
              Comida real, hecha en casa. Bowls frescos, porciones honestas y
              salsas que se quedan en la memoria.
            </p>
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold underline decoration-gold/30 underline-offset-4 transition hover:decoration-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir por WhatsApp
            </a>
          </div>

          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-cream/35">
              Explora
            </p>
            <nav aria-label="Navegación del pie de página" className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-semibold text-cream/70 transition hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-cream/35">
              La casa
            </p>
            <div className="mt-4 space-y-3 text-[12px] leading-5 text-cream/70">
              <p className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {siteConfig.city}
                <span className="block text-cream/40">
                  Dirección exacta por WhatsApp
                </span>
              </p>
              <p>
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-cream/35">
                  Horario
                </span>
                {siteConfig.hours}
              </p>
              <p>
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-cream/35">
                  WhatsApp
                </span>
                {siteConfig.whatsappDisplay}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[9px] font-bold uppercase tracking-[0.12em] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Bowl de la Casa · Todos los derechos reservados.</p>
          <p>Ilustraciones de la casa · Precios en COP</p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-1.5 text-cream/50 transition hover:text-cream"
          >
            Volver arriba
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>

        <div className="pointer-events-none select-none overflow-hidden">
          <p
            className="translate-y-[12%] font-display text-[clamp(6rem,20vw,16rem)] font-semibold leading-[0.65] tracking-[-0.08em] text-cream/[0.04]"
            aria-hidden="true"
          >
            BOWL
          </p>
        </div>
      </div>
    </footer>
  );
}
