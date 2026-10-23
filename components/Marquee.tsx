import { SparkleIcon } from "@/components/Icons";

const items = [
  "Ingredientes frescos",
  "Porciones honestas",
  "Salsas de la casa",
  "Hecho en Ibagué",
  "Domicilios y recogida",
];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-7 pr-7 sm:gap-10 sm:pr-10"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-7 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.24em] text-cream/90 sm:gap-10 sm:text-[11px]"
        >
          {item}
          <SparkleIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-y border-forest-deep/30 bg-forest-deep py-3.5 text-cream"
      aria-label="Ingredientes frescos, porciones honestas, salsas de la casa, hecho en Ibagué"
    >
      <div className="animate-marquee flex w-max items-center">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
