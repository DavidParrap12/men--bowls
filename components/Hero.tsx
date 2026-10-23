import { HeroBowl } from "@/components/HeroBowl";
import {
  ArrowDownIcon,
  ClockIcon,
  MapPinIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { siteConfig, whatsappLink } from "@/content/bowls";

const orderLink = whatsappLink(
  "Hola, quiero pedir un bowl. ¿Me cuentas cuáles tienen hoy?",
);

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div
        className="pointer-events-none absolute -left-28 top-28 h-80 w-80 rounded-full bg-terracotta/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-4 h-[28rem] w-[28rem] rounded-full bg-sage/35 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-forest/[0.06]"
        aria-hidden="true"
      />
      <div
        className="dot-grid pointer-events-none absolute bottom-12 left-4 h-28 w-36 opacity-50 sm:left-8"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper/60 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest shadow-[0_8px_24px_-20px_rgba(23,37,31,.6)] backdrop-blur">
              <SparkleIcon className="h-3.5 w-3.5 text-gold" />
              Cocina fresca · Hecho en Ibagué
            </div>

            <h1 className="mt-6 font-display text-[clamp(3.3rem,7.7vw,6.7rem)] font-semibold leading-[0.91] tracking-[-0.055em] text-ink">
              Un bowl.
              <br />
              <span className="text-forest">Todo lo que</span>
              <br />
              <span className="relative inline-block">
                <em className="relative z-10 font-display italic text-terracotta">
                  necesitas.
                </em>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-gold"
                  viewBox="0 0 240 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8C38 2 76 12 116 6 156 0 194 10 238 4"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[15px] leading-7 text-forest/75 sm:text-[17px] sm:leading-8">
              Ingredientes frescos, porciones honestas y salsas de la casa. Elige
              tu bowl, míralo de cerca y pídelo por WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#carta" className="btn btn-primary px-6 py-4">
                Ver la carta
                <ArrowDownIcon className="h-4 w-4" />
              </a>
              <a
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary px-6 py-4"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Pedir por WhatsApp
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-forest/55 sm:text-[11px]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-terracotta" />
                5 bowls de la casa
              </span>
              <span className="flex items-center gap-2">
                <MapPinIcon className="h-3.5 w-3.5" />
                {siteConfig.city}
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon className="h-3.5 w-3.5" />
                Domicilios y recogida
              </span>
            </div>
          </div>

          <HeroBowl />
        </div>
      </div>
    </section>
  );
}
