import { Reveal } from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  BowlIcon,
  MapPinIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { siteConfig, whatsappLink } from "@/content/bowls";

const steps = [
  {
    number: "01",
    icon: BowlIcon,
    title: "Elige tu bowl",
    description:
      "Abre la carta, mira los ingredientes y quédate con el que más te llame.",
  },
  {
    number: "02",
    icon: WhatsAppIcon,
    title: "Escríbenos",
    description:
      "Mándanos tu pedido por WhatsApp. Te confirmamos disponibilidad y domicilio.",
  },
  {
    number: "03",
    icon: MapPinIcon,
    title: "Disfrútalo",
    description:
      "Recíbelo en tu casa o recógelo en el local. Así de fácil.",
  },
];

const orderLink = whatsappLink(
  "Hola, quiero pedir un bowl. ¿Me confirmas disponibilidad y domicilio?",
);

const arLink = whatsappLink(
  "Hola, me interesa saber cuándo estará disponible la experiencia 3D/AR de Bowl de la Casa.",
);

export function HowToOrder() {
  return (
    <section id="como-pedir" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-sage/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              Cómo pedir
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.8rem,5.5vw,4.7rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-ink">
              Tres pasos.{" "}
              <em className="font-display italic text-forest">
                Cero complicación.
              </em>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-forest/70 sm:text-base">
              Sin apps, sin registro y sin filas. Solo tú, tu antojo y un
              WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:pb-1">
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-6 py-4"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir ahora
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 80} className="h-full">
                <article className="relative h-full overflow-hidden rounded-[1.75rem] border border-forest/10 bg-paper p-6 shadow-[0_18px_50px_-36px_rgba(23,37,31,.4)]">
                  <span
                    className="pointer-events-none absolute -right-1 -top-3 font-display text-[6.5rem] font-semibold leading-none text-forest/[0.055]"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center rounded-full bg-forest text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="relative mt-6 text-[9px] font-extrabold uppercase tracking-[0.2em] text-terracotta">
                    Paso {step.number}
                  </p>
                  <h3 className="relative mt-2 font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-[12.5px] leading-5 text-forest/70">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-5">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-forest-deep p-6 text-cream sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-cream/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-gold/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-forest-deep">
                <SparklesIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gold">
                  Muy pronto
                </p>
                <h3 className="mt-1.5 font-display text-[1.8rem] font-semibold leading-none tracking-[-0.03em] text-cream sm:text-[2rem]">
                  Mira tu bowl en tu mesa.
                </h3>
                <p className="mt-2 max-w-xl text-[12.5px] leading-5 text-cream/65">
                  Estamos trabajando en una experiencia 3D y de realidad
                  aumentada para que puedas ver cada bowl antes de pedirlo.
                </p>
              </div>
            </div>

            <a
              href={arLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold underline decoration-gold/30 underline-offset-4 transition hover:decoration-gold lg:mt-0 lg:shrink-0"
            >
              Quiero saber más
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <p className="mt-4 text-center text-[10px] font-medium text-forest/45">
          {siteConfig.delivery} · Cobertura según zona
        </p>
      </div>
    </section>
  );
}
