"use client";

import { useState } from "react";
import type { Bowl, BowlTag } from "@/content/bowls";
import {
  bowlOrderMessage,
  bowls,
  formatPrice,
  whatsappLink,
} from "@/content/bowls";
import { BowlArt } from "@/components/BowlArt";
import { BowlDialog } from "@/components/BowlDialog";
import { Reveal } from "@/components/Reveal";
import { tagLabels, tagStyles } from "@/components/bowlMeta";
import {
  ArrowUpRightIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/Icons";

type Filter = "todos" | BowlTag;

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "popular", label: "Los más pedidos" },
  { id: "veggie", label: "Veggie" },
  { id: "picante", label: "Picante" },
];

export function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("todos");
  const [selectedBowl, setSelectedBowl] = useState<Bowl | null>(null);

  const filteredBowls =
    activeFilter === "todos"
      ? bowls
      : bowls.filter((bowl) => bowl.tags.includes(activeFilter));

  return (
    <section
      id="carta"
      className="relative overflow-hidden border-y border-forest/10 bg-paper py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -right-48 top-0 h-[34rem] w-[34rem] rounded-full bg-sage/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 bottom-0 h-[30rem] w-[30rem] rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              La carta
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.8rem,5.6vw,4.9rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-ink">
              Cinco bowls.{" "}
              <em className="font-display italic text-terracotta">
                Cero dudas.
              </em>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-forest/70 sm:text-base">
              Los más pedidos de la casa, en un solo lugar. Abre cada bowl para
              ver sus ingredientes, alérgenos y pedirlo directo por WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:pb-1">
            <div className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-cream/60 px-4 py-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-cream">
                <SparklesIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-forest">
                  Hechos al momento
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-forest/60">
                  Elige, abre y pide.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar la carta"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.08em] transition duration-200 ${
                  isActive
                    ? "border-forest bg-forest text-cream shadow-[0_10px_24px_-16px_rgba(30,77,59,.9)]"
                    : "border-forest/15 bg-transparent text-forest/70 hover:border-forest/30 hover:bg-forest/[0.04] hover:text-forest"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
          <span className="ml-auto hidden items-center text-[10px] font-bold uppercase tracking-[0.14em] text-forest/45 sm:flex">
            {filteredBowls.length} de {bowls.length} bowls
          </span>
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrando {filteredBowls.length} bowls
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredBowls.map((bowl, index) => (
            <Reveal key={bowl.id} delay={index * 70} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-forest/10 bg-cream/50 shadow-[0_18px_50px_-32px_rgba(23,37,31,.4)] transition duration-300 hover:-translate-y-1 hover:border-forest/20 hover:shadow-[0_28px_60px_-30px_rgba(23,37,31,.38)]">
                <button
                  type="button"
                  onClick={() => setSelectedBowl(bowl)}
                  aria-label={`Ver ingredientes de ${bowl.name}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden text-left"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 42%, ${bowl.soft}, #f7f1e6 76%)`,
                    }}
                  />
                  <div
                    className="absolute inset-[12%] rounded-full border border-dashed border-forest/15"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6">
                    <BowlArt
                      variant={bowl.variant}
                      idSuffix={`card-${bowl.id}`}
                      decorative
                      className="h-full w-full max-h-[260px] transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-rotate-2"
                    />
                  </div>

                  <span
                    className={`absolute left-4 top-4 z-10 inline-flex items-center rounded-full border px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-[0.14em] shadow-sm backdrop-blur-sm ${tagStyles[bowl.tags[0]]}`}
                  >
                    {tagLabels[bowl.tags[0]]}
                  </span>

                  <span
                    className="absolute bottom-4 right-4 z-10 grid h-9 w-9 translate-y-1 place-items-center rounded-full border border-forest/10 bg-paper/80 text-forest opacity-0 shadow-sm backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-terracotta">
                        {bowl.tagline}
                      </p>
                      <h3 className="mt-1.5 font-display text-[1.7rem] font-semibold leading-none tracking-[-0.035em] text-ink">
                        {bowl.name}
                      </h3>
                    </div>
                    <p className="shrink-0 pt-0.5 font-display text-xl font-semibold tracking-tight text-forest">
                      {formatPrice(bowl.price)}
                    </p>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[12.5px] leading-5 text-forest/70">
                    {bowl.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedBowl(bowl)}
                      className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-forest underline decoration-forest/25 underline-offset-4 transition hover:decoration-forest"
                    >
                      Ver bowl
                    </button>
                    <a
                      href={whatsappLink(bowlOrderMessage(bowl.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-forest/15 bg-paper px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.1em] text-forest transition hover:border-forest hover:bg-forest hover:text-cream"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Pedir
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-forest/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] font-medium leading-5 text-forest/60">
            ¿Alergias o quieres armar algo distinto? También se puede.
          </p>
          <a
            href={whatsappLink(
              "Hola, tengo una alergia o quiero personalizar mi bowl. ¿Me ayudas?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-forest underline decoration-forest/25 underline-offset-4 transition hover:decoration-forest"
          >
            Escríbenos
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <BowlDialog
        bowl={selectedBowl}
        onClose={() => setSelectedBowl(null)}
      />
    </section>
  );
}
