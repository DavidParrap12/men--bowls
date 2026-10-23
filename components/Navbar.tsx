"use client";

import { useEffect, useState } from "react";
import { siteConfig, whatsappLink } from "@/content/bowls";
import {
  BowlIcon,
  CloseIcon,
  MenuIcon,
  WhatsAppIcon,
} from "@/components/Icons";

const links = [
  { href: "#carta", label: "La carta" },
  { href: "#favorito", label: "El favorito" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#visitanos", label: "Visítanos" },
];

const orderLink = whatsappLink(
  "Hola, quiero pedir un bowl. ¿Me ayudas con el menú y la disponibilidad?",
);

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/85 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <a
          href="#inicio"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={`${siteConfig.name}, ir al inicio`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-cream shadow-[0_10px_24px_-12px_rgba(30,77,59,.9)] transition-transform duration-300 group-hover:-rotate-6">
            <BowlIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.18rem] font-semibold tracking-tight text-ink">
              Bowl de la Casa
            </span>
            <span className="mt-1 text-[8px] font-extrabold uppercase tracking-[0.3em] text-forest/55">
              Hecho en Ibagué
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-0.5 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-forest/75 transition-colors hover:bg-forest/[0.06] hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2 px-4 py-2.5 text-[13px]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir ahora
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest/[0.06] md:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="animate-menu-in border-t border-forest/10 bg-cream/98 px-4 pb-5 pt-3 md:hidden"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-forest/10 py-3.5 text-[15px] font-semibold text-forest"
              >
                {link.label}
                <span aria-hidden="true" className="text-forest/35">
                  ↗
                </span>
              </a>
            ))}
          </nav>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir por WhatsApp
          </a>
          <p className="mt-3 text-center text-[11px] font-medium text-forest/60">
            {siteConfig.hours} · {siteConfig.city}
          </p>
        </div>
      ) : null}
    </header>
  );
}
