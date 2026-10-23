import { Reveal } from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { siteConfig, whatsappLink } from "@/content/bowls";

const orderLink = whatsappLink(
  "Hola, quiero pedir a domicilio. ¿Me confirmas cobertura y tiempo de entrega?",
);

export function VisitSection() {
  return (
    <section
      id="visitanos"
      className="relative overflow-hidden border-y border-forest/10 bg-sage-light/40 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Visítanos
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,5.5vw,4.7rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-ink">
            Ven a la casa.{" "}
            <em className="font-display italic text-forest">
              O te la llevamos.
            </em>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-forest/70 sm:text-base">
            Estamos en Ibagué y llevamos tu bowl hasta la puerta. Si prefieres
            comer aquí, te guardamos el mejor puesto.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-forest/10 bg-paper/80 p-4">
              <ClockIcon className="h-5 w-5 text-terracotta" />
              <p className="mt-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-forest/45">
                Horario
              </p>
              <p className="mt-1 text-[12px] font-semibold leading-5 text-forest">
                {siteConfig.hours}
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-paper/80 p-4">
              <MapPinIcon className="h-5 w-5 text-terracotta" />
              <p className="mt-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-forest/45">
                Dónde estamos
              </p>
              <p className="mt-1 text-[12px] font-semibold leading-5 text-forest">
                {siteConfig.city}
                <span className="block text-[11px] font-medium text-forest/55">
                  Dirección exacta por WhatsApp
                </span>
              </p>
            </div>
          </div>

          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-6 px-6 py-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir a domicilio
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-forest/15 bg-forest-deep shadow-[0_30px_70px_-34px_rgba(16,43,34,.5)]">
            <div className="map-grid absolute inset-0 opacity-70" aria-hidden="true" />

            <div
              className="absolute left-[-10%] top-[18%] h-[3px] w-[130%] -rotate-6 bg-sage/30"
              aria-hidden="true"
            />
            <div
              className="absolute left-[-10%] top-[58%] h-[2px] w-[130%] rotate-3 bg-sage/20"
              aria-hidden="true"
            />
            <div
              className="absolute left-[24%] top-[-10%] h-[130%] w-[2px] -rotate-12 bg-sage/20"
              aria-hidden="true"
            />
            <div
              className="absolute left-[68%] top-[-10%] h-[130%] w-[2px] rotate-6 bg-gold/25"
              aria-hidden="true"
            />

            <div
              className="absolute left-[12%] top-[12%] font-display text-[clamp(3.2rem,7vw,5rem)] font-semibold leading-none tracking-[-0.07em] text-cream/[0.07]"
              aria-hidden="true"
            >
              IBG
            </div>

            <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/25" />
              <span className="relative grid h-16 w-16 place-items-center rounded-full border-4 border-forest-deep bg-gold text-forest-deep shadow-[0_14px_30px_-10px_rgba(0,0,0,.55)]">
                <MapPinIcon className="h-7 w-7" />
              </span>
            </div>
            <div className="absolute left-1/2 top-[61%] -translate-x-1/2 whitespace-nowrap rounded-full border border-cream/15 bg-forest/80 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-cream backdrop-blur">
              Ibagué · Tolima
            </div>

            <div className="absolute left-4 top-4 rounded-full border border-cream/15 bg-forest/70 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.18em] text-cream/80 backdrop-blur">
              Mapa de la casa
            </div>
            <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-cream/15 bg-forest/70 text-cream/70 backdrop-blur">
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-2xl border border-cream/15 bg-forest/80 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-gold">
                  Domicilios y recogida
                </p>
                <p className="mt-1 text-[12px] font-medium text-cream/80">
                  Escríbenos y te contamos cómo llegar.
                </p>
              </div>
              <a
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-cream underline decoration-cream/25 underline-offset-4 transition hover:decoration-cream"
              >
                Escribir
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
