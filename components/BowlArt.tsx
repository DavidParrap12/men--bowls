import type { BowlVariant } from "@/content/bowls";

type BowlArtProps = {
  variant: BowlVariant;
  idSuffix: string;
  className?: string;
  label?: string;
  decorative?: boolean;
};

type ShapeProps = {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
};

const palettes: Record<
  BowlVariant,
  { base: string; light: string; sauce: string; center: string }
> = {
  casa: {
    base: "#edd9b4",
    light: "#f8ecd6",
    sauce: "#c85c3f",
    center: "#f1d9a8",
  },
  teriyaki: {
    base: "#eddcbc",
    light: "#f8ecd6",
    sauce: "#6b3a2a",
    center: "#e8c58f",
  },
  salmon: {
    base: "#f0e2c6",
    light: "#fbf1dc",
    sauce: "#d9a441",
    center: "#f3e0bd",
  },
  criollo: {
    base: "#ead7b5",
    light: "#f7ead2",
    sauce: "#b94e3a",
    center: "#e8c994",
  },
  veggie: {
    base: "#e8d8b8",
    light: "#f7edd8",
    sauce: "#e6d3a3",
    center: "#d8c49c",
  },
};

function round(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function polar(
  index: number,
  total: number,
  radius: number,
  start = -90,
  jitter = 0,
) {
  const angle = start + (index / total) * 360 + jitter;
  const radians = (angle * Math.PI) / 180;
  return {
    x: round(200 + Math.cos(radians) * radius),
    y: round(198 + Math.sin(radians) * radius),
    angle: round(angle),
  };
}

function Avocado({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M-30 -7C-20 -28 12 -30 27 -11 42 8 26 31 2 29-19 27-34 13-30-7Z"
        fill="#5d8a43"
      />
      <path
        d="M-21 -6C-13 -21 10 -22 21 -7 31 5 19 21 0 21-14 21-26 9-21 -6Z"
        fill="#a8c56a"
      />
      <path
        d="M-13 -2C-6 -11 7 -11 13 -4"
        fill="none"
        stroke="#e2edbf"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".8"
      />
      <circle cx="-12" cy="8" r="2" fill="#f4f7dd" opacity=".55" />
    </g>
  );
}

function Chicken({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <rect x="-24" y="-18" width="48" height="36" rx="10" fill="#cf8c43" />
      <rect
        x="-19"
        y="-13"
        width="38"
        height="26"
        rx="7"
        fill="#dda255"
        opacity=".65"
      />
      <path
        d="M-15 -6 13 8M-15 4 13 18"
        stroke="#985b27"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".55"
      />
    </g>
  );
}

function Salmon({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <rect x="-26" y="-20" width="52" height="40" rx="10" fill="#df7d63" />
      <path
        d="M-20 -9H20M-20 2H20M-20 13H20"
        stroke="#f7c0ad"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".8"
      />
      <path
        d="M-16 -14 18 12"
        stroke="#f2a58c"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".4"
      />
    </g>
  );
}

function Tomato({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <circle r="17" fill="#d95f4b" />
      <circle cx="-5" cy="-6" r="5" fill="#f18d75" opacity=".75" />
      <path
        d="M-5 -16 0 -22 5 -16"
        fill="none"
        stroke="#4f7a4a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Corn({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <ellipse rx="6" ry="8" fill="#e8b45a" />
      <ellipse cx="-1.5" cy="-2" rx="2" ry="3" fill="#f7d488" opacity=".7" />
    </g>
  );
}

function Broccoli({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <circle cx="-8" cy="-7" r="9" fill="#4d7945" />
      <circle cx="7" cy="-8" r="10" fill="#5f8a45" />
      <circle cx="0" cy="4" r="9" fill="#4d7945" />
      <rect x="-3" y="8" width="6" height="11" rx="3" fill="#88a869" />
    </g>
  );
}

function Carrot({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <rect x="-4" y="-18" width="8" height="34" rx="4" fill="#e28a3d" />
      <path
        d="M-8 -8H8M-8 1H8M-8 10H8"
        stroke="#f3b36d"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".7"
      />
    </g>
  );
}

function Cucumber({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <circle r="11" fill="#a8c58a" />
      <circle r="7" fill="#d9e9bd" />
      <circle r="3" fill="#a8c58a" opacity=".6" />
    </g>
  );
}

function Seaweed({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <rect x="-20" y="-7" width="40" height="14" rx="4" fill="#2f4a3a" />
      <path
        d="M-14 0H14"
        stroke="#496b57"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".7"
      />
    </g>
  );
}

function Lime({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path d="M0 0-15 7A17 17 0 0 1 15 7Z" fill="#c7d46a" />
      <path
        d="M-15 7A17 17 0 0 1 15 7"
        fill="none"
        stroke="#eef3b0"
        strokeWidth="2"
      />
    </g>
  );
}

function Beef({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M-25 -4C-18 -17 0 -17 8 -8 18 -18 32 -10 28 4 24 16 8 18 0 10-10 18-24 12-25 -4Z"
        fill="#8b5a3c"
      />
      <path
        d="M-16 -2C-8 -8 4 -8 12 -2M-10 8C-2 2 10 2 18 8"
        fill="none"
        stroke="#b07a56"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".7"
      />
    </g>
  );
}

function Plantain({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M-28 8C-18 -18 10 -26 28 -12 16 10-6 24-28 8Z"
        fill="#e3b04b"
      />
      <path
        d="M-20 6C-12 -8 8 -16 20 -8"
        fill="none"
        stroke="#f2cf7a"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".8"
      />
    </g>
  );
}

function Bean({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <ellipse rx="10" ry="6" fill="#7a3e2e" />
      <path
        d="M-7 0C-4 -4 4 -4 7 0"
        fill="none"
        stroke="#a76a54"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".7"
      />
    </g>
  );
}

function Chickpea({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <circle r="10" fill="#d9b77a" />
      <circle cx="2" cy="-2" r="3" fill="#efd7a8" opacity=".8" />
    </g>
  );
}

function Pumpkin({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <rect x="-14" y="-14" width="28" height="28" rx="8" fill="#e08a3c" />
      <path
        d="M-6 -12V12M4 -12V12"
        stroke="#c96d28"
        strokeWidth="2"
        opacity=".6"
      />
    </g>
  );
}

function Kale({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path d="M0 0C-16 -6-16 -24 0 -28 16 -24 16 -6 0 0Z" fill="#3f6b45" />
      <path
        d="M0 0V-26M0 -8C-6 -12-8 -16-8 -20M0 -12C6 -16 8 -20 8 -24"
        fill="none"
        stroke="#7fa66f"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".7"
      />
    </g>
  );
}

function Egg({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M-30 -4C-34 -22-18 -36 0 -34 20 -32 34 -16 28 2 22 20 4 28-12 20-24 14-27 8-30 -4Z"
        fill="#fff8ea"
      />
      <circle cx="0" cy="-6" r="12" fill="#e8b45a" />
      <circle cx="-4" cy="-9" r="3" fill="#f7d488" opacity=".7" />
    </g>
  );
}

function Herb({ x, y, rotate = 0, scale = 1 }: ShapeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M0 0C-7 -10-3 -20 6 -22 14 -22 17 -12 12 -5 8 1 4 2 0 0Z"
        fill="#3f6b45"
      />
      <path
        d="M0 0C3 -8 7 -12 12 -15"
        fill="none"
        stroke="#8fb07a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}

function Sauce({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <g transform={flip ? "scale(-1 1) translate(-400 0)" : undefined}>
      <path
        d="M92 232C124 204 150 248 180 220c28-26 52 18 84-4 18-12 34-10 48 2"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        opacity=".92"
      />
      <path
        d="M110 250c30-20 52 14 78-8 26-22 48 10 74-2"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity=".45"
      />
    </g>
  );
}

function SesameSeeds() {
  const jitters = [0, 4, -3, 5, -5, 2];

  return (
    <g>
      {Array.from({ length: 14 }).map((_, index) => {
        const point = polar(index, 14, 120, -80, jitters[index % jitters.length]);
        return (
          <ellipse
            key={index}
            cx={point.x}
            cy={point.y}
            rx="2.1"
            ry="1.2"
            fill="#f7ebd3"
            transform={`rotate(${point.angle} ${point.x} ${point.y})`}
          />
        );
      })}
    </g>
  );
}

function CenterBase({ color }: { color: string }) {
  return <circle cx="200" cy="198" r="47" fill={color} opacity=".55" />;
}

function Toppings({ variant }: { variant: BowlVariant }) {
  const palette = palettes[variant];

  switch (variant) {
    case "casa":
      return (
        <>
          <CenterBase color={palette.center} />
          <Egg x={200} y={198} scale={1.02} />
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 96, -55, [0, 6, -4, 3][index]);
            return (
              <Avocado
                key={`avo-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1, 2, 3, 4].map((index) => {
            const point = polar(index, 5, 72, 10, [0, 5, -3, 4, -5][index]);
            return (
              <Chicken
                key={`chicken-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle * 0.25}
              />
            );
          })}
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const point = polar(index, 6, 120, -80, [0, 4, -4, 3, -3, 5][index]);
            return (
              <Tomato
                key={`tomato-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle}
              />
            );
          })}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            const point = polar(
              index,
              8,
              130,
              -70,
              [0, 3, -2, 4, -3, 2, -4, 3][index],
            );
            return <Corn key={`corn-${index}`} x={point.x} y={point.y} />;
          })}
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 110, 30, [0, 8, -5, 4][index]);
            return (
              <Herb
                key={`herb-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 60}
              />
            );
          })}
          <Sauce color={palette.sauce} />
          <SesameSeeds />
        </>
      );

    case "teriyaki":
      return (
        <>
          <CenterBase color={palette.center} />
          <Chicken x={200} y={198} scale={1.15} rotate={-8} />
          {[0, 1].map((index) => {
            const point = polar(index, 2, 96, -70, [0, 6][index]);
            return (
              <Avocado
                key={`avo-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1, 2, 3, 4].map((index) => {
            const point = polar(index, 5, 72, 20, [0, 4, -3, 5, -4][index]);
            return (
              <Chicken
                key={`chicken-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle * 0.3}
              />
            );
          })}
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 112, -45, [0, 6, -4, 4][index]);
            return (
              <Broccoli
                key={`broccoli-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle}
              />
            );
          })}
          {[0, 1, 2, 3, 4].map((index) => {
            const point = polar(index, 5, 128, -90, [0, 4, -3, 5, -4][index]);
            return (
              <Carrot
                key={`carrot-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1].map((index) => {
            const point = polar(index, 2, 112, 130, [0, 10][index]);
            return (
              <Herb
                key={`herb-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 60}
              />
            );
          })}
          <Sauce color={palette.sauce} flip />
          <SesameSeeds />
        </>
      );

    case "salmon":
      return (
        <>
          <CenterBase color={palette.center} />
          <Salmon x={200} y={198} scale={1.08} rotate={-6} />
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 74, 15, [0, 5, -4, 3][index]);
            return (
              <Salmon
                key={`salmon-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle * 0.3}
              />
            );
          })}
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 102, -60, [0, 7, -5, 4][index]);
            return (
              <Avocado
                key={`avo-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1, 2, 3, 4].map((index) => {
            const point = polar(index, 5, 120, -90, [0, 4, -3, 4, -4][index]);
            return (
              <Cucumber
                key={`cucumber-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle}
              />
            );
          })}
          {[0, 1, 2].map((index) => {
            const point = polar(index, 3, 108, 60, [0, 8, -5][index]);
            return (
              <Seaweed
                key={`seaweed-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1].map((index) => {
            const point = polar(index, 2, 86, 140, [0, 12][index]);
            return (
              <Lime
                key={`lime-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 130}
              />
            );
          })}
          {[0, 1, 2].map((index) => {
            const point = polar(index, 3, 116, 170, [0, 8, -6][index]);
            return (
              <Herb
                key={`herb-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 60}
              />
            );
          })}
          <Sauce color={palette.sauce} />
          <SesameSeeds />
        </>
      );

    case "criollo":
      return (
        <>
          <CenterBase color={palette.center} />
          <Beef x={200} y={198} scale={1.1} rotate={-5} />
          {[0, 1, 2, 3, 4].map((index) => {
            const point = polar(index, 5, 74, 10, [0, 5, -3, 4, -4][index]);
            return (
              <Beef
                key={`beef-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle * 0.4}
              />
            );
          })}
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 108, -50, [0, 6, -4, 5][index]);
            return (
              <Plantain
                key={`plantain-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1, 2, 3, 4, 5, 6].map((index) => {
            const point = polar(index, 7, 126, -95, [0, 4, -3, 5, -4, 3, -2][index]);
            return (
              <Bean
                key={`bean-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 70}
              />
            );
          })}
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 96, 110, [0, 7, -4, 4][index]);
            return (
              <Avocado
                key={`avo-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1, 2].map((index) => {
            const point = polar(index, 3, 84, -160, [0, 9, -5][index]);
            return (
              <Tomato
                key={`tomato-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle}
              />
            );
          })}
          {[0, 1].map((index) => {
            const point = polar(index, 2, 118, 40, [0, 10][index]);
            return (
              <Herb
                key={`herb-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 60}
              />
            );
          })}
          <Sauce color={palette.sauce} />
        </>
      );

    case "veggie":
      return (
        <>
          <CenterBase color={palette.center} />
          <Avocado x={200} y={198} scale={1.12} rotate={-10} />
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const point = polar(index, 6, 74, 0, [0, 4, -3, 5, -4, 3][index]);
            return (
              <Chickpea
                key={`chickpea-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle}
              />
            );
          })}
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 108, -55, [0, 7, -5, 4][index]);
            return (
              <Pumpkin
                key={`pumpkin-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle}
              />
            );
          })}
          {[0, 1, 2, 3, 4].map((index) => {
            const point = polar(index, 5, 126, -90, [0, 4, -3, 5, -4][index]);
            return (
              <Broccoli
                key={`broccoli-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle}
              />
            );
          })}
          {[0, 1, 2, 3].map((index) => {
            const point = polar(index, 4, 98, 130, [0, 8, -6, 4][index]);
            return (
              <Kale
                key={`kale-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 90}
              />
            );
          })}
          {[0, 1, 2].map((index) => {
            const point = polar(index, 3, 116, 200, [0, 8, -5][index]);
            return (
              <Herb
                key={`herb-${index}`}
                x={point.x}
                y={point.y}
                rotate={point.angle + 60}
              />
            );
          })}
          <Sauce color={palette.sauce} flip />
          <SesameSeeds />
        </>
      );
  }
}

export function BowlArt({
  variant,
  idSuffix,
  className = "h-full w-full",
  label,
  decorative = false,
}: BowlArtProps) {
  const palette = palettes[variant];
  const uid = `${variant}-${idSuffix}`.replace(/[^a-zA-Z0-9_-]/g, "-");

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
    >
      <defs>
        <filter
          id={`bowl-shadow-${uid}`}
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <radialGradient id={`plate-${uid}`} cx="40%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#fffdf8" />
          <stop offset="62%" stopColor="#f1e6d3" />
          <stop offset="100%" stopColor="#d9c8ad" />
        </radialGradient>
        <radialGradient id={`rim-${uid}`} cx="48%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fffdf8" />
          <stop offset="70%" stopColor="#f4ead9" />
          <stop offset="100%" stopColor="#dfcfb5" />
        </radialGradient>
        <radialGradient id={`base-${uid}`} cx="42%" cy="35%" r="72%">
          <stop offset="0%" stopColor={palette.light} />
          <stop offset="100%" stopColor={palette.base} />
        </radialGradient>
        <radialGradient id={`vignette-${uid}`} cx="50%" cy="48%" r="50%">
          <stop offset="70%" stopColor="#17251f" stopOpacity="0" />
          <stop offset="100%" stopColor="#17251f" stopOpacity=".2" />
        </radialGradient>
        <pattern
          id={`grain-${uid}`}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="3" r="1" fill="#8a6a3f" opacity=".16" />
          <circle cx="11" cy="8" r="1.2" fill="#8a6a3f" opacity=".12" />
          <circle cx="15" cy="2" r=".8" fill="#8a6a3f" opacity=".1" />
          <circle cx="7" cy="14" r=".9" fill="#8a6a3f" opacity=".11" />
        </pattern>
        <clipPath id={`inner-${uid}`}>
          <circle cx="200" cy="198" r="142" />
        </clipPath>
      </defs>

      <ellipse
        cx="200"
        cy="344"
        rx="128"
        ry="21"
        fill="#17251f"
        opacity=".18"
        filter={`url(#bowl-shadow-${uid})`}
      />

      <circle cx="200" cy="198" r="184" fill={`url(#plate-${uid})`} />
      <circle
        cx="200"
        cy="198"
        r="184"
        fill="none"
        stroke="#c9b99f"
        strokeWidth="2"
      />
      <circle cx="200" cy="198" r="170" fill={`url(#rim-${uid})`} />
      <circle
        cx="200"
        cy="198"
        r="170"
        fill="none"
        stroke="#ffffff"
        strokeOpacity=".35"
        strokeWidth="2"
      />
      <circle cx="200" cy="198" r="142" fill={`url(#base-${uid})`} />
      <circle cx="200" cy="198" r="142" fill={`url(#grain-${uid})`} opacity=".7" />

      <g clipPath={`url(#inner-${uid})`}>
        <Toppings variant={variant} />
        <circle cx="200" cy="198" r="142" fill={`url(#vignette-${uid})`} />
      </g>

      <circle
        cx="200"
        cy="198"
        r="142"
        fill="none"
        stroke="#a78f6d"
        strokeOpacity=".3"
        strokeWidth="2"
      />
      <path
        d="M56 115A166 166 0 0 1 171 34"
        fill="none"
        stroke="#ffffff"
        strokeOpacity=".42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="145"
        cy="108"
        rx="52"
        ry="17"
        fill="#ffffff"
        opacity=".13"
        transform="rotate(-32 145 108)"
      />
    </svg>
  );
}
