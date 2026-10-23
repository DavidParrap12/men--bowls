import { BowlArt } from "@/components/BowlArt";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import {
  bowlOrderMessage,
  bowls,
  formatPrice,
  whatsappLink,
} from "@/content/bowls";

const featured = bowls.find((bowl) => bowl.id === "el-de-la-casa") ?? bowls[0];

export function FeaturedBowl() {
  return (
    <section
      id="favorito"
      className="relative overflow-hidden bg-forest-deep py-20 text-cream sm:py-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[10%] h-[28rem] w-[28rem] rounded-full border border-cream/[0.08]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[520px]">
              <div
                className="absolute inset-[5%] rounded-full border border-dashed border-cream/20"
                aria-hidden="true"
              />
              <div
                className="absolute inset-[14%] rounded-full bg-gold/10 blur-2xl"
                aria-hidden="true"
              />
              <BowlArt
                variant={featured.variant}
                idSuffix="featured"
                label={`Ilustración de ${featured.name}`}
                className="relative z-10 h-full w-full drop-shadow-[0_30px_46px_rgba(0,0,0,.28)]"
              />
              <div className="absolute right-0 top-2 z-20 rotate-6 rounded-2xl border border-gold/40 bg-gold px-3.5 py-2.5 text-center text-forest-deep shadow-[0_18px_30px_-16px_rgba(0,0,0,.5)] sm:right-[2%]">
                <p className="text-[8px] font-extrabold uppercase tracking-[0.18em]">
                  Favorito
                </p>
                <p className="mt-0.5 font-display text-xl font-bold leading-none">
                  #1
                </p>
              </div>
              <div className="absolute bottom-[8%] left-0 z-20 flex items-center gap-2 rounded-full border border-cream/15 bg-forest/80 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.14em] text-cream backdrop-blur">
                <StarIcon className="h-3 w-3 text-gold" />
                El más pedido
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="eyebrow text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              El favorito de la casa
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.8rem,5.5vw,4.8rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-cream">
              El de la Casa.{" "}
              <em className="font-display italic text-gold">
                El que pide todo el mundo.
              </em>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-cream/70 sm:text-base">
              {featured.description}
            </p>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {featured.ingredients.map((ingredient) => (
                <div
                  key={ingredient}
                  className="flex items-center gap-2.5 rounded-xl border border-cream/10 bg-cream/[0.04] px-3 py-2.5 text-[11px] font-semibold text-cream/85"
                >
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                    <CheckIcon className="h-2.5 w-2.5" />
                  </span>
                  {ingredient}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-cream/45">
                  Precio
                </p>
                <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-gold">
                  {formatPrice(featured.price)}
                </p>
              </div>
              <a
                href={whatsappLink(bowlOrderMessage(featured.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cream px-6 py-4"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Pedir el de la casa
              </a>
              <a
                href="#carta"
                className="group inline-flex items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cream/70 transition hover:text-cream"
              >
                Ver toda la carta
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
