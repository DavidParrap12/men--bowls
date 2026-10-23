"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import type { Bowl } from "@/content/bowls";
import {
  bowlOrderMessage,
  formatPrice,
  whatsappLink,
} from "@/content/bowls";
import { BowlArt } from "@/components/BowlArt";
import { tagLabels, tagStyles } from "@/components/bowlMeta";
import {
  CheckIcon,
  CloseIcon,
  WhatsAppIcon,
} from "@/components/Icons";

type BowlDialogProps = {
  bowl: Bowl | null;
  onClose: () => void;
};

export function BowlDialog({ bowl, onClose }: BowlDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (bowl && !dialog.open) {
      dialog.showModal();
    }

    if (!bowl && dialog.open) {
      dialog.close();
    }
  }, [bowl]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="bowl-dialog"
      aria-label="Detalle del bowl"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {bowl ? (
        <div className="relative max-h-[90svh] overflow-hidden rounded-[1.75rem] border border-forest/10 bg-paper shadow-[0_40px_120px_-30px_rgba(16,43,34,.55)]">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Cerrar detalle del bowl"
            className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-forest/10 bg-paper/90 text-forest shadow-sm backdrop-blur transition hover:bg-cream"
          >
            <CloseIcon className="h-4 w-4" />
          </button>

          <div className="max-h-[90svh] overflow-y-auto">
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div
                className="relative flex min-h-[270px] items-center justify-center overflow-hidden p-6 sm:p-10 md:min-h-full"
                style={{
                  background: `radial-gradient(circle at 50% 38%, ${bowl.soft}, #f7f1e6 78%)`,
                }}
              >
                <div
                  className="absolute inset-[10%] rounded-full border border-dashed border-forest/15"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-5 top-5 rounded-full border border-forest/10 bg-paper/70 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-forest backdrop-blur"
                  aria-hidden="true"
                >
                  {tagLabels[bowl.tags[0]]}
                </div>
                <BowlArt
                  variant={bowl.variant}
                  idSuffix={`dialog-${bowl.id}`}
                  label={`Ilustración de ${bowl.name}`}
                  className="relative z-10 h-full w-full max-w-[360px] drop-shadow-[0_24px_36px_rgba(23,37,31,.16)]"
                />
              </div>

              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-wrap gap-2">
                  {bowl.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] ${tagStyles[tag]}`}
                    >
                      {tagLabels[tag]}
                    </span>
                  ))}
                </div>

                <h2
                  id="bowl-dialog-title"
                  className="mt-4 font-display text-[clamp(2.25rem,5vw,3.15rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink"
                >
                  {bowl.name}
                </h2>
                <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-terracotta">
                  {bowl.tagline}
                </p>
                <p className="mt-4 text-sm leading-6 text-forest/75">
                  {bowl.description}
                </p>

                <div className="mt-6 flex items-end justify-between gap-4 border-y border-forest/10 py-4">
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-forest/50">
                      Precio
                    </p>
                    <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-forest">
                      {formatPrice(bowl.price)}
                    </p>
                  </div>
                  <span className="pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-forest/45">
                    COP · por bowl
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-forest/55">
                    Lo que trae
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {bowl.ingredients.map((ingredient) => (
                      <li
                        key={ingredient}
                        className="flex items-start gap-2 text-[12px] font-medium leading-5 text-forest/80"
                      >
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                          <CheckIcon className="h-2.5 w-2.5" />
                        </span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-gold/25 bg-gold/10 p-3.5 text-[11px] leading-5 text-forest/70">
                  <strong className="font-extrabold text-forest">
                    Alérgenos:
                  </strong>{" "}
                  {bowl.allergens.join(", ")}. Si tienes alguna alergia o
                  restricción, escríbenos antes de pedir.
                </div>

                <a
                  href={whatsappLink(bowlOrderMessage(bowl.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-5 w-full py-4"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Pedir {bowl.name}
                </a>
                <p className="mt-3 text-center text-[10px] font-medium text-forest/45">
                  Precios en COP · Sujeto a disponibilidad
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
