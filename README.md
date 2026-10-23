# Bowl de la Casa

Landing y carta digital de **Bowl de la Casa**, un restaurante de bowls en Ibagué, Colombia. El sitio está pensado para móvil, con pedidos por WhatsApp y una identidad visual cálida y editorial.

> Estado: UI/UX implementada en local. Faltan datos reales, fotos, configuración de despliegue y la experiencia 3D/AR. El plan completo está en [`PLAN.md`](./PLAN.md).

## Stack

- Next.js 16.4.2 (App Router, Turbopack)
- React 19.3.0
- Tailwind CSS 4
- TypeScript
- Fuentes Fraunces + Manrope con `next/font`
- Ilustraciones SVG propias (sin dependencias 3D por ahora)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Dónde editar el contenido

| Qué | Archivo |
|---|---|
| Bowls, precios, ingredientes, alérgenos | `content/bowls.ts` |
| WhatsApp, dirección, horarios, domicilios | `content/bowls.ts` → `siteConfig` |
| Composición de la landing | `app/page.tsx` |
| Metadata y fuentes | `app/layout.tsx` |
| Tema, colores, animaciones | `app/globals.css` |
| Ilustraciones de los bowls | `components/BowlArt.tsx` |
| Carta, filtros y modal | `components/MenuSection.tsx`, `components/BowlDialog.tsx` |
| Hero y bowl interactivo | `components/Hero.tsx`, `components/HeroBowl.tsx` |
| Secciones de contenido | `components/FeaturedBowl.tsx`, `components/HowToOrder.tsx`, `components/VisitSection.tsx` |
| Footer y WhatsApp flotante | `components/Footer.tsx`, `components/FloatingWhatsApp.tsx` |

## Placeholders que deben reemplazarse antes de publicar

- Número de WhatsApp: `573000000000` / `+57 300 000 0000`.
- Dirección, horarios y zonas de domicilio.
- Precios, ingredientes y alérgenos de los 5 bowls.
- Año del footer (está fijo en `2026`).
- Fotos reales e imagen OG.
- Datos legales y redes sociales.

## Experiencia 3D/AR

La estrategia recomendada es **un bowl hero en 3D**, no los cinco de entrada:

1. Producir **El de la Casa** en 3D estilizado o fotorrealista.
2. Exportar GLB + USDZ + poster.
3. Integrar `<model-viewer>` con carga diferida y fallback.
4. Probar Quick Look en iOS y Scene Viewer/WebXR en Android.
5. Ampliar a más bowls solo si hay uso y buenas métricas.

El detalle técnico, las rutas de producción, los costos, los riesgos y el checklist están en [`PLAN.md`](./PLAN.md).

## Despliegue

La intención es publicar como sitio estático en Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `out`
- Node: 22 o superior

Para habilitar el export estático, añadir `output: "export"` en `next.config.ts` y probar `npm run build` + `npx serve out`. Esto todavía está pendiente de validación.
