"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import { BowlArt } from "@/components/BowlArt";
import { SparkleIcon } from "@/components/Icons";

type IngredientChipProps = {
  label: string;
  color: string;
  className: string;
  delay: number;
  rotate: number;
};

function IngredientChip({
  label,
  color,
  className,
  delay,
  rotate,
}: IngredientChipProps) {
  return (
    <div
      className={`animate-float absolute z-20 flex items-center gap-2 rounded-full border border-forest/10 bg-paper/92 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-forest shadow-[0_14px_30px_-18px_rgba(23,37,31,.6)] backdrop-blur-md sm:text-[11px] ${className}`}
      style={
        {
          animationDelay: `${delay}ms`,
          "--chip-rotate": `${rotate}deg`,
        } as CSSProperties
      }
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {label}
    </div>
  );
}

export function HeroBowl() {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;

    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    stage.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    stage.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
    stage.style.setProperty("--mx", `${(x * 12).toFixed(2)}px`);
    stage.style.setProperty("--my", `${(y * 12).toFixed(2)}px`);
  }

  function handlePointerLeave() {
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.setProperty("--rx", "0deg");
    stage.style.setProperty("--ry", "0deg");
    stage.style.setProperty("--mx", "0px");
    stage.style.setProperty("--my", "0px");
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[580px] px-5 py-6 sm:px-9 sm:py-8"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="pointer-events-none absolute inset-[12%] rounded-full bg-sage/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={stageRef}
        className="hero-bowl-stage relative aspect-square w-full"
      >
        <div
          className="absolute inset-[1%] rounded-full border border-dashed border-forest/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[6%] rounded-full border border-forest/[0.06]"
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 400 400"
          className="animate-spin-slow absolute inset-0 h-full w-full text-forest/45"
          aria-hidden="true"
        >
          <defs>
            <path
              id="hero-ring-path"
              d="M200,200 m-188,0 a188,188 0 1,1 376,0 a188,188 0 1,1 -376,0"
            />
          </defs>
          <text
            fill="currentColor"
            fontSize="9"
            fontWeight="700"
            letterSpacing="3.4"
          >
            <textPath href="#hero-ring-path" startOffset="0%">
              INGREDIENTES REALES · HECHO EN CASA · IBAGUÉ · INGREDIENTES
              REALES · HECHO EN CASA ·
            </textPath>
          </text>
        </svg>

        <div className="hero-bowl-art absolute inset-[8%]">
          <BowlArt
            variant="casa"
            idSuffix="hero"
            label="Ilustración del Bowl de la Casa con pollo, aguacate, maíz, tomate y salsa de la casa"
            className="h-full w-full drop-shadow-[0_28px_42px_rgba(23,37,31,.2)]"
          />
        </div>

        <SparkleIcon
          className="absolute right-[13%] top-[8%] h-5 w-5 text-gold"
          aria-hidden="true"
        />
        <SparkleIcon
          className="absolute bottom-[18%] left-[6%] h-3.5 w-3.5 text-terracotta/80"
          aria-hidden="true"
        />

        <IngredientChip
          label="Pollo marinado"
          color="#cf8c43"
          className="left-[-2%] top-[12%]"
          delay={0}
          rotate={-4}
        />
        <IngredientChip
          label="Aguacate"
          color="#7fa65a"
          className="right-[-2%] top-[28%]"
          delay={900}
          rotate={3}
        />
        <IngredientChip
          label="Salsa de la casa"
          color="#d96c4a"
          className="bottom-[16%] left-[-1%] hidden sm:flex"
          delay={1600}
          rotate={2}
        />
        <IngredientChip
          label="Arroz jazmín"
          color="#e8b45a"
          className="bottom-[6%] right-[1%] hidden sm:flex"
          delay={2400}
          rotate={-3}
        />

        <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-forest/10 bg-cream/80 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-forest/55 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          <span className="hidden sm:inline">Mueve el cursor para explorar</span>
          <span className="sm:hidden">Toca para explorar</span>
        </div>
      </div>
    </div>
  );
}
