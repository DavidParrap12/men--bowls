# Bowl de la Casa — pendientes y plan 3D/AR

> Documento vivo. Última actualización: 23 de octubre de 2026.
>
> Estado corto: la landing ya tiene una dirección visual y funciona en local, pero **todavía no está lista para publicar** porque faltan datos reales, assets, configuración de despliegue y la experiencia 3D/AR. Este archivo concentra todo lo que falta y la forma más realista de incorporar el modelado 3D sin presupuesto.

---

## 1. Resumen ejecutivo

### Lo que ya existe

- Landing de una sola página con secciones: hero, marquee, carta, bowl favorito, cómo pedir, visita y footer.
- Identidad visual cálida y editorial: crema, verde bosque, terracota, dorado y salvia; tipografías Fraunces + Manrope.
- Carta editable con 5 bowls en `content/bowls.ts`.
- Ilustraciones SVG propias para los 5 bowls, sin depender de fotos ni modelos 3D.
- Filtros de carta, modal de detalle, enlaces a WhatsApp y CTA flotante.
- SEO básico: metadata, `lang="es"`, JSON-LD de restaurante/menú, favicon de marca.
- Build y lint pasan; el hydration mismatch de las ilustraciones ya se corrigió.

### Lo que falta para publicar

1. Reemplazar todos los datos placeholder: WhatsApp, dirección, horarios, precios, ingredientes, alérgenos y zonas de domicilio.
2. Validar la carta con el negocio y decidir si los 5 bowls son definitivos.
3. Tener fotos reales de los bowls y una imagen para compartir en redes (OG image).
4. Configurar el dominio, el hosting estático y los encabezados de caché.
5. Añadir páginas legales mínimas y datos del responsable.
6. Hacer QA real en móvil, iOS y Android, incluyendo el modal y los enlaces de WhatsApp.
7. Implementar la experiencia 3D/AR (hoy solo existe el teaser “Muy pronto”).

### Decisión recomendada para 3D

**No modelar los 5 bowls en 3D de entrada.** Hacer un solo bowl hero —idealmente **El de la Casa**— en 3D estilizado, integrarlo con `<model-viewer>` y dejar los otros cuatro con fotos reales o las ilustraciones actuales. Cuando el hero demuestre que la gente interactúa y que no baja la conversión, se evalúa ampliar.

La razón es simple: modelar comida realista es la parte más difícil y costosa de todo el proyecto. Un bowl estilizado, coherente con la identidad actual, se puede producir gratis y se ve bien; cinco bowls fotorrealistas requieren mucho más tiempo, assets y pruebas de rendimiento.

---

## 2. Estado actual del proyecto

### Implementado

| Área | Estado | Archivo(s) |
|---|---|---|
| Estructura Next.js | Funcionando | `app/` |
| Tema y estilos | Implementado | `app/globals.css` |
| Fuentes y metadata | Implementado | `app/layout.tsx` |
| Composición de la landing | Implementado | `app/page.tsx` |
| Datos de la carta | Placeholder editable | `content/bowls.ts` |
| Ilustraciones SVG | Implementado | `components/BowlArt.tsx` |
| Hero interactivo | Implementado | `components/Hero.tsx`, `components/HeroBowl.tsx` |
| Carta y filtros | Implementado | `components/MenuSection.tsx` |
| Modal de bowl | Implementado | `components/BowlDialog.tsx` |
| Sección favorita | Implementado | `components/FeaturedBowl.tsx` |
| Cómo pedir | Implementado | `components/HowToOrder.tsx` |
| Visita y mapa estilizado | Implementado | `components/VisitSection.tsx` |
| Footer y WhatsApp flotante | Implementado | `components/Footer.tsx`, `components/FloatingWhatsApp.tsx` |
| Favicon | Implementado | `app/icon.svg` |
| Build / lint | Pasan | — |

### No implementado o incompleto

- No hay fotos reales.
- No hay modelos 3D, GLB, USDZ ni texturas.
- No existe el componente `Bowl3D` ni la integración de `<model-viewer>`.
- No hay carpeta `public/models/`.
- No hay despliegue en Cloudflare Pages ni dominio configurado.
- No hay `sitemap.xml`, `robots.txt`, imagen OG ni página 404 de marca.
- El `README.md` sigue siendo el texto por defecto de `create-next-app`.
- Hay assets por defecto de Next.js que no se usan: `app/favicon.ico`, `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`.
- El año del footer está fijo en `2026`; hay que actualizarlo manualmente cada año o resolverlo sin romper el prerender.
- El aviso 3D/AR dice “Muy pronto” y no tiene fecha ni una experiencia real detrás.
- Los enlaces de WhatsApp apuntan a un número de prueba.

---

## 3. Pendientes bloqueantes para publicar

### 3.1 Contenido y datos del negocio

| # | Tarea | Dónde se edita | Criterio de aceptación |
|---|---|---|---|
| 1 | Reemplazar el WhatsApp real | `content/bowls.ts` → `siteConfig.whatsapp` y `whatsappDisplay` | `wa.me` abre el chat correcto desde un celular real |
| 2 | Confirmar los 5 bowls definitivos | `content/bowls.ts` | Nombres, descripciones, precios e ingredientes aprobados por el negocio |
| 3 | Confirmar precios en COP | `content/bowls.ts` | Precio visible y precio del JSON-LD coinciden |
| 4 | Revisar alérgenos | `content/bowls.ts` → `allergens` | Cada bowl tiene alérgenos verificados; se aclara que pueden existir trazas |
| 5 | Definir dirección exacta | `content/bowls.ts` → `siteConfig.address` | Aparece en la sección de visita, el footer y el JSON-LD |
| 6 | Definir horarios reales | `content/bowls.ts` → `siteConfig.hours` | Horario y días coinciden con Google Business/Instagram |
| 7 | Definir zonas, tarifas y tiempos de domicilio | `content/bowls.ts` y copys | El cliente sabe si llega a su zona antes de escribir |
| 8 | Definir medios de pago | Copy de “Cómo pedir” / FAQ | Efectivo, transferencia, Nequi, etc. sin inventar opciones |
| 9 | Añadir redes sociales reales | Footer / JSON-LD `sameAs` | Enlaces funcionando |
| 10 | Aprobar el tono de voz | Textos de toda la página | El negocio se siente representado |

### 3.2 Assets visuales

| # | Tarea | Entregable | Nota |
|---|---|---|---|
| 11 | Fotos reales de los 5 bowls | 1 foto horizontal o cuadrada por bowl | Luz natural, fondo limpio, porción real |
| 12 | Foto del local o del equipo | 1–3 fotos | Genera confianza; no es obligatoria para el MVP |
| 13 | Imagen OG para compartir | `public/og.jpg` de 1200×630 px | Título legible, logo y foto de un bowl |
| 14 | Favicon definitivo | `app/icon.svg` y apple-touch-icon | Ya hay un favicon base; validar en iOS |
| 15 | Reemplazar ilustraciones por fotos cuando existan | `MenuSection`, `BowlDialog`, `FeaturedBowl` | Las ilustraciones pueden quedarse como textura de marca, pero la foto vende mejor |
| 16 | Optimizar fotos | WebP/AVIF, máximo ~250 KB por card | Sin fotos de 5 MB |

### 3.3 Legal y confianza

| # | Tarea | Criterio |
|---|---|---|
| 17 | Página de privacidad | Explicar qué pasa con los datos que llegan por WhatsApp y analítica |
| 18 | Términos y condiciones básicos | Precios, disponibilidad, domicilios, cambios y cancelaciones |
| 19 | Datos del responsable | Nombre o razón social, ciudad y canal de contacto |
| 20 | Aviso de alérgenos | Visible antes de pedir, no solo en el modal |
| 21 | Política de cookies | Solo si se añade analítica con cookies; preferir analítica sin cookies |

### 3.4 Técnico y despliegue

| # | Tarea | Criterio |
|---|---|---|
| 22 | Configurar export estático | `output: "export"` y build genera `out/` |
| 23 | Probar el `out/` en local | `npx serve out` funciona y no hay rutas roscas |
| 24 | Configurar Cloudflare Pages | Build `npm run build`, output `out`, Node 22 o superior |
| 25 | Configurar dominio y HTTPS | Dominio propio con certificado |
| 26 | Añadir `sitemap.xml` y `robots.txt` | Generados estáticamente |
| 27 | Añadir imagen OG a metadata | `openGraph.images` y `twitter.images` |
| 28 | Añadir `metadataBase` | URLs absolutas correctas |
| 29 | Añadir página 404 de marca | `app/not-found.tsx` |
| 30 | Añadir `manifest.ts` | Nombre, iconos y color de tema |
| 31 | Añadir headers de caché | Assets y modelos con cache largo |
| 32 | Limpiar assets por defecto | Eliminar favicon y SVGs de Next.js no usados |
| 33 | Actualizar `README.md` | Instalación, contenido editable y despliegue |
| 34 | Resolver warning de Turbopack | `turbopack.root` o quitar el `package-lock.json` padre |
| 35 | QA de enlaces | Ningún enlace vacío, `#` o número falso |
| 36 | QA de accesibilidad | Teclado, foco, contraste, modal, `prefers-reduced-motion` |
| 37 | QA de rendimiento | Lighthouse móvil; LCP aceptable; sin layout shift |
| 38 | QA en dispositivos | iPhone Safari y Android Chrome reales |

---

## 4. Estrategia 3D/AR

### 4.1 Principio de producto

La experiencia 3D/AR debe ser una **mejora progresiva**, no un requisito para pedir.

- La carta debe seguir funcionando sin JavaScript, sin WebGL y sin AR.
- La primera carga no debe descargar un modelo 3D.
- El botón “Ver en 3D” se muestra solo cuando el modelo existe y carga.
- Si AR no está disponible, se muestra el visor 3D o el poster.
- El CTA de WhatsApp siempre está visible y no depende del 3D.
- El 3D no reemplaza la foto: la complementa.

### 4.2 Flujo recomendado

1. El usuario ve la tarjeta del bowl con foto o ilustración.
2. Abre el detalle del bowl.
3. Ve un botón **“Ver en 3D”** (o una pestaña “Foto / 3D”).
4. Al pulsarlo, se carga el visor `<model-viewer>` con el GLB.
5. Si el dispositivo soporta AR, aparece **“Ver en mi mesa”**.
6. En iOS se abre Quick Look con el USDZ; en Android, Scene Viewer o WebXR.
7. Si algo falla, se muestra el poster y el botón de WhatsApp.
8. Se registra el evento (si hay analítica) para saber si vale la pena producir más modelos.

### 4.3 Stack técnico propuesto

- **Visualizador:** [`@google/model-viewer`](https://modelviewer.dev/) como web component.
- **Formato web:** glTF 2.0 binario (`.glb`).
- **Formato iOS:** USDZ (`.usdz`) para Quick Look.
- **Poster:** imagen WebP/JPG/AVIF de 1200×1200 px.
- **Framework:** Next.js 16 con React 19; componente cliente cargado de forma diferida.
- **Hosting:** Cloudflare Pages (estático), HTTPS obligatorio para AR.
- **Fallback:** ilustración SVG actual o foto.
- **Analítica:** evento `model_view`, `ar_launch`, `model_error`, `fallback_view`.

#### Soporte esperado

| Plataforma | Navegador | Experiencia |
|---|---|---|
| Android con ARCore | Chrome | Scene Viewer o WebXR |
| iPhone/iPad con ARKit | Safari | Quick Look con USDZ |
| Desktop | Chrome/Edge/Firefox/Safari | Visor 3D con órbita, sin AR |
| Móvil sin AR | Cualquiera | Visor 3D o poster |
| Sin WebGL / datos lentos | Cualquiera | Poster + CTA WhatsApp |

> AR requiere HTTPS, permisos de cámara y un dispositivo compatible. No se debe prometer AR en todos los celulares.

### 4.4 Especificación de los assets 3D

| Atributo | Recomendación |
|---|---|
| Formato principal | GLB (glTF 2.0) |
| Formato iOS | USDZ |
| Unidad | Metros reales |
| Escala | Bowl de ~0.18 m de diámetro y ~0.07–0.08 m de alto; medir el real |
| Orientación | Y arriba, frente hacia +Z |
| Origen | Centro de la base, apoyado en el suelo (y = 0) |
| Triángulos | 25.000–60.000 por bowl; no hace falta más |
| Materiales | PBR metallic-roughness; sin animaciones para el MVP |
| Texturas | 1K o 2K, JPEG/PNG/WebP; evitar muchas texturas pequeñas |
| Peso objetivo | GLB ≤ 5 MB; ideal ≤ 3 MB |
| Nombres | `public/models/el-de-la-casa.glb`, `.usdz`, `el-de-la-casa-poster.webp` |
| Iluminación | Preferir materiales simples y un entorno neutral; no hornear luces del local |
| AR | `ar-scale="fixed"` para tamaño real; probar también `auto` |
| Accesibilidad | `alt` descriptivo, botón de pausa de rotación, respetar `prefers-reduced-motion` |

### 4.5 Rutas de producción posibles

#### Ruta A — Bowl estilizado hecho en Blender (recomendada para el MVP)

**Ventajas:** control total, coincide con la identidad ilustrada, assets livianos, no depende de licencias de terceros, se puede reutilizar el mismo bowl y cambiar toppings.
**Desventajas:** requiere aprender o tener a alguien que modele; la comida realista no queda perfecta.

Proceso:

1. Medir un bowl real.
2. Modelar el bowl con un perfil girado (lathe) en Blender: cerámica, borde, base.
3. Modelar los toppings con primitivas: cubos de pollo, medias lunas de aguacate, granos de maíz, tomate, hojas, salsa.
4. Usar materiales simples con color y rugosidad; evitar texturas fotorrealistas que envejezcan mal.
5. Exportar GLB con `+Y up`, escala 1:1 y origen en la base.
6. Renderizar un poster desde la misma cámara.
7. Optimizar y probar en `<model-viewer>`.

Nivel de esfuerzo: si alguien ya sabe Blender, 4–8 h para el hero. Si se aprende desde cero, 15–30 h. El equipo tiene un Ryzen 3 3250U con Vega 3: Blender funciona para low-poly, pero hay que evitar escenas pesadas, subdivisiones altas y render fotorrealista.

#### Ruta B — Fotogrametría del bowl vacío + comida modelada

**Ventajas:** el bowl cerámico se ve real; la comida se controla por separado.
**Desventajas:** la comida es la parte difícil; el escaneo de ingredientes sueltos queda con textura “derretida”.

Proceso:

1. Escanear solo el bowl vacío con Polycam, KIRI Engine, RealityScan o similar.
2. Limpiar la malla en Blender: decimar, cerrar agujeros, hornear textura.
3. Modelar la comida con primitivas y texturas fotográficas simples.
4. Exportar GLB y USDZ.
5. Probar que la escala y el apoyo en el suelo sean correctos.

Alternativa: escanear el bowl **con** comida y aceptar un look más artístico; suele requerir más limpieza y no siempre vale la pena.

#### Ruta C — Generación con IA 3D

Herramientas posibles: Tripo, Meshy, Luma Genie, Rodin u otras similares.

**Ventajas:** rapidez; se parte de una foto o un prompt.
**Desventajas:** topología sucia, texturas inconsistentes, manos/objetos deformes, licencias comerciales variables, límites de planes gratuitos y resultados que hay que limpiar igual.

Recomendación: usar IA solo para una **base** o una exploración visual, y limpiar en Blender. Antes de publicar, revisar que la licencia permita uso comercial y que no haya watermark. No usar IA 3D para los 5 bowls finales sin validación.

#### Ruta D — Encargar el modelo a un artista 3D

**Ventajas:** mejor calidad y menos tiempo del equipo.
**Desventajas:** cuesta dinero; no es opción hoy si no hay presupuesto.

Si más adelante hay presupuesto, pedir: GLB + USDZ + poster, escala real, ≤ 60k triángulos, texturas 2K, derechos de uso comercial y una ronda de cambios.

#### Ruta E — Mantener 2.5D / ilustraciones

Es la opción actual. No es AR, pero es liviana, coherente y no bloquea el lanzamiento. Se puede complementar con parallax, video corto o una foto 360°.

### 4.6 Pipeline recomendado para este equipo

1. **Elegir un solo bowl hero:** El de la Casa.
2. **Conseguir el bowl físico** y medirlo.
3. **Decidir el estilo:** estilizado (recomendado) o fotorrealista.
4. **Producir el modelo** por la ruta A, B o C.
5. **Exportar GLB** y validar en el visor.
6. **Crear el poster** desde Blender o con una captura del visor.
7. **Generar USDZ** para iOS.
8. **Integrar `<Bowl3D>`** de forma diferida.
9. **Probar AR** en un Android compatible y un iPhone compatible.
10. **Medir**: si el 3D se usa, ampliar a 2–3 bowls; si no, dejar el hero y priorizar fotos/conversión.

### 4.7 Integración técnica en Next.js

La idea es no cargar el visor hasta que el usuario lo pida. Un componente cliente puede importar el web component y renderizarlo con `React.createElement` para evitar problemas de tipos con JSX.

```tsx
// components/Bowl3D.tsx
"use client";

import { useEffect, useRef } from "react";
import { createElement } from "react";

type Bowl3DProps = {
  src: string;
  iosSrc?: string;
  poster: string;
  alt: string;
};

export function Bowl3D({ src, iosSrc, poster, alt }: Bowl3DProps) {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    // El paquete registra <model-viewer> como custom element.
    void import("@google/model-viewer");
  }, []);

  return createElement("model-viewer", {
    src,
    "ios-src": iosSrc,
    poster,
    alt,
    ar: true,
    "ar-modes": "webxr scene-viewer quick-look",
    "ar-scale": "fixed",
    "ar-placement": "floor",
    "camera-controls": true,
    "touch-action": "pan-y",
    "environment-image": "neutral",
    "shadow-intensity": "0.8",
    exposure: "1",
    "auto-rotate": true,
    "auto-rotate-delay": "2000",
    "rotation-per-second": "18deg",
    "interaction-prompt": "auto",
    loading: "lazy",
    reveal: "auto",
    className: "h-full w-full",
    style: { width: "100%", height: "100%", backgroundColor: "transparent" },
  });
}
```

Y se monta solo cuando el usuario abre la pestaña 3D:

```tsx
{show3D ? (
  <Bowl3D
    src="/models/el-de-la-casa.glb"
    iosSrc="/models/el-de-la-casa.usdz"
    poster="/models/el-de-la-casa-poster.webp"
    alt="Bowl de la Casa en 3D: pollo, arroz, aguacate, maíz y salsa"
  />
) : (
  <button type="button" onClick={() => setShow3D(true)}>
    Ver en 3D
  </button>
)}
```

Consideraciones:

- Instalar `@google/model-viewer` con `npm install @google/model-viewer`.
- No renderizar el visor en el servidor.
- Mejor cargarlo al hacer clic o al acercarse al viewport, no en la primera carga.
- El poster debe existir antes de cargar el GLB.
- Si el navegador no soporta WebGL, mostrar el poster.
- En iOS, probar que el USDZ abra Quick Look. En Android, probar Scene Viewer y WebXR.
- Añadir un botón para detener la rotación automática y respetar `prefers-reduced-motion`.
- No usar `auto-rotate` en la primera carga si el usuario tiene datos ahorro o movimiento reducido.

### 4.8 Generación de USDZ en Windows

Este es uno de los puntos más incómodos del pipeline:

- `usdzconvert` y Reality Converter son de macOS.
- En Windows se puede usar `usd_from_gltf` (Google) o un conversor online, verificando privacidad y licencia.
- Alternativa: pedir a alguien con Mac que abra el GLB en Reality Converter y exporte el USDZ.
- Probar siempre el USDZ en un iPhone real; no basta con que el archivo exista.
- Guardar el archivo fuente (`.blend`) y el GLB; el USDZ es un derivado.

### 4.9 AR: qué probar y qué no prometer

**Probar en dispositivos reales:**

- Android con ARCore: Chrome → Scene Viewer → colocar en el piso.
- iPhone con ARKit: Safari → Quick Look → escalar y mover.
- Desktop: órbita, zoom, foco, poster.
- Móvil sin AR: visor 3D o fallback.
- Modo avión / 4G lenta: poster primero; el modelo no debe bloquear el pedido.
- `prefers-reduced-motion`: sin rotación automática.
- Teclado: el botón 3D y el cierre del modal deben ser accesibles.

**No prometer:**

- “Se ve exactamente igual a la foto” si es estilizado.
- “Funciona en todos los celulares”.
- “AR instantáneo” si el GLB pesa 20 MB.
- Medidas exactas si el modelo no está a escala.

### 4.10 Rendimiento y accesibilidad del 3D

- Presupuesto: GLB ≤ 5 MB, ideal ≤ 3 MB; poster ≤ 200 KB.
- Cargar el modelo solo por intención, no en el hero inicial.
- Cachear `/models/*` por un año con hash o nombre versionado.
- Usar `loading="lazy"` y `reveal="auto"`.
- Reservar espacio con aspect ratio para evitar layout shift.
- Añadir texto alternativo descriptivo.
- Añadir un botón “Ver foto” / “Cerrar 3D”.
- No depender de WebXR para el CTA de WhatsApp.
- Medir con Lighthouse móvil y con red limitada.
- Si el 3D baja la conversión, mantenerlo como contenido secundario.

### 4.11 Costos, tiempos y realidad

| Escenario | Tiempo estimado | Costo | Riesgo |
|---|---:|---:|---|
| Landing 2D actual + fotos | 1–3 días de contenido/QA | $0 | Bajo |
| Hero 3D estilizado + visor | 10–30 h según habilidad | $0 en herramientas | Medio |
| Hero 3D + AR iOS/Android | +1–2 semanas de pruebas | $0–hosting | Medio |
| 5 bowls estilizados | 3–5× el hero | $0 si se hace interno | Alto por tiempo |
| 5 bowls fotorrealistas | Semanas de producción | Alto si se terceriza | Muy alto |
| Escaneo fotogramétrico de comida | 2–6 h por bowl + limpieza | $0–apps | Alto, resultados variables |

**Regla de inversión:** no producir los 5 modelos hasta tener métricas del hero. El 3D es un diferenciador, pero la prioridad del negocio es que la gente pida.

---

## 5. Roadmap por fases

### Fase 0 — Publicar la landing 2D (ahora)

- [ ] Reemplazar WhatsApp real.
- [ ] Validar carta, precios, alérgenos e ingredientes.
- [ ] Definir dirección, horarios, domicilios y medios de pago.
- [ ] Añadir fotos reales y OG image.
- [ ] Añadir privacidad y términos.
- [ ] Configurar `output: "export"` y Cloudflare Pages.
- [ ] Añadir sitemap, robots, 404, manifest y `metadataBase`.
- [ ] Limpiar assets por defecto y actualizar README.
- [ ] QA móvil, teclado, enlaces y Lighthouse.
- [ ] Publicar con dominio y HTTPS.

**Definición de terminado:** una persona puede entrar desde Instagram, ver la carta, abrir un bowl, entender alérgenos y pedir por WhatsApp sin encontrar un placeholder.

### Fase 1 — Hero 3D sin AR

- [ ] Decidir estilo: estilizado o fotorrealista.
- [ ] Producir El de la Casa en Blender o con la ruta elegida.
- [ ] Exportar GLB, poster y USDZ.
- [ ] Integrar `Bowl3D` con carga diferida.
- [ ] Añadir botón “Ver en 3D” en el modal o en la sección favorita.
- [ ] Probar en desktop y móvil.
- [ ] Añadir fallback y evento de error.
- [ ] Medir peso, LCP y uso.

**Definición de terminado:** el usuario puede girar el bowl en 3D, entiende que es una representación y puede pedir sin fricción.

### Fase 2 — AR del hero

- [ ] Probar Quick Look en iPhone real.
- [ ] Probar Scene Viewer/WebXR en Android real.
- [ ] Ajustar escala, posición, luz y sombra.
- [ ] Añadir copy “Ver en mi mesa” y ayuda contextual.
- [ ] Añadir fallback claro para dispositivos sin AR.
- [ ] Medir lanzamientos de AR y errores.

**Definición de terminado:** el botón AR funciona en al menos un iPhone y un Android compatibles, y el fallback también funciona.

### Fase 3 — Escalar solo si hay señal

- [ ] Evaluar si el 3D aumentó el tiempo en carta, los clics a WhatsApp o la conversión.
- [ ] Si funciona, producir 2–3 bowls más, empezando por los más vendidos.
- [ ] Si no funciona, mantener un hero 3D y priorizar fotos, contenido y velocidad.
- [ ] Explorar fotos 360° o video corto como alternativa más barata.

---

## 6. Archivos y lugares que hay que tocar

| Archivo | Qué falta |
|---|---|
| `content/bowls.ts` | WhatsApp, dirección, horarios, precios, ingredientes, alérgenos, zonas |
| `app/layout.tsx` | `metadataBase`, OG image, Twitter image, canonical, manifest |
| `app/page.tsx` | JSON-LD con teléfono/dirección/URL reales; enlaces sociales |
| `components/FeaturedBowl.tsx` | Integrar el futuro visor 3D del hero |
| `components/BowlDialog.tsx` | Pestaña o botón “Ver en 3D” |
| `components/HowToOrder.tsx` | Quitar o ajustar el teaser “Muy pronto” cuando exista fecha/realidad |
| `components/Footer.tsx` | Año, enlaces sociales, datos reales |
| `app/globals.css` | Estilos del visor 3D, focus, reduced motion, botón AR |
| `next.config.ts` | `output: "export"`, `turbopack.root`, imágenes si se usan |
| `public/models/` | GLB, USDZ y posters (no existe todavía) |
| `public/og.jpg` | Imagen para compartir (no existe) |
| `app/not-found.tsx` | 404 de marca (no existe) |
| `app/sitemap.ts` | Sitemap estático (no existe) |
| `app/robots.ts` | Robots estático (no existe) |
| `app/manifest.ts` | Manifest PWA básico (no existe) |
| `README.md` | Instrucciones reales del proyecto (sigue el scaffold) |
| `app/favicon.ico` | Es el favicon por defecto de Next.js; eliminar |
| `public/*.svg` | Assets de ejemplo de Next.js; eliminar si no se usan |

---

## 7. Placeholders actuales que deben desaparecer

| Placeholder | Valor actual | Reemplazo |
|---|---|---|
| WhatsApp | `573000000000` | Número real con indicativo Colombia |
| WhatsApp visible | `+57 300 000 0000` | Número real formateado |
| Dirección | “Ibagué, Tolima” | Dirección exacta o “dirección por WhatsApp” aprobada |
| Horario | Lun–Sáb 11:30–20:30 | Horario real, incluyendo festivos |
| Precios | $27.900–$36.900 | Precios aprobados |
| Ingredientes | Ejemplos | Receta real |
| Alérgenos | Ejemplos | Alérgenos verificados |
| Zonas de domicilio | No definidas | Zonas, tarifas y tiempos |
| Redes sociales | No incluidas | Instagram/TikTok reales, si existen |
| Año footer | 2026 fijo | Actualización anual o cálculo seguro |
| Modelo 3D | No existe | GLB/USDZ del hero |

---

## 8. Decisiones que necesita tomar el negocio

1. ¿Los 5 bowls son definitivos o cambia la carta con frecuencia?
2. ¿El WhatsApp es el único canal de pedidos o también hay Rappi/DiDi/llamadas?
3. ¿Se ofrece domicilio propio? ¿A qué zonas, con qué costo y en cuánto tiempo?
4. ¿Se aceptan pagos electrónicos? ¿Nequi, transferencia, tarjeta?
5. ¿Cuál es la dirección exacta y el horario real?
6. ¿Hay fotos reales disponibles o hay que producirlas?
7. ¿El 3D debe ser estilizado (coherente con la marca) o fotorrealista (más costoso)?
8. ¿Hay alguien con Blender o un iPhone/Mac para producir/probar los assets?
9. ¿Se puede invertir en un artista 3D si el hero funciona?
10. ¿Quién aprueba los textos legales y de alérgenos?

Si estas respuestas no están, la landing puede publicarse como demo, pero no como canal oficial de pedidos.

---

## 9. QA final antes de publicar

### Contenido

- [ ] Todos los enlaces de WhatsApp abren el número correcto con el mensaje correcto.
- [ ] No queda ningún `573000000000`, `300 000 0000` ni texto de ejemplo.
- [ ] Los precios coinciden entre tarjeta, modal y JSON-LD.
- [ ] Los alérgenos son visibles y están validados.
- [ ] La dirección y el horario coinciden con las redes y Google Business.
- [ ] No hay promesas de 3D/AR con fechas que no se puedan cumplir.

### UI/UX

- [ ] Hero legible a 360, 390, 430, 768, 1024, 1440 y 1920 px.
- [ ] No hay scroll horizontal.
- [ ] Los chips del hero no se salen de la pantalla.
- [ ] Los filtros funcionan y el estado vacío tiene sentido.
- [ ] El modal abre, cierra con Escape, con backdrop y con el botón.
- [ ] El foco vuelve al botón que abrió el modal.
- [ ] El menú móvil cierra al navegar y con Escape.
- [ ] `prefers-reduced-motion` desactiva parallax, marquee y rotación.
- [ ] Contraste de textos y botones cumple AA en lo posible.
- [ ] La página funciona con teclado.

### Rendimiento

- [ ] LCP móvil aceptable (ideal < 2.5 s en 4G).
- [ ] Sin layout shift por fuentes o imágenes.
- [ ] Fotos optimizadas y con dimensiones explícitas.
- [ ] El modelo 3D no se carga en la primera visita.
- [ ] GLB ≤ 5 MB; poster ≤ 200 KB.
- [ ] Lighthouse móvil sin errores graves.

### Despliegue

- [ ] `npm run lint` pasa.
- [ ] `npx tsc --noEmit` pasa.
- [ ] `npm run build` genera `out/`.
- [ ] `npx serve out` sirve la landing correctamente.
- [ ] Cloudflare Pages tiene el dominio y HTTPS.
- [ ] `sitemap.xml`, `robots.txt` y OG image responden.
- [ ] Cache de `/models/*` configurado.
- [ ] 404 funciona.
- [ ] Se probó en iPhone Safari y Android Chrome reales.

### 3D/AR

- [ ] El GLB abre en `<model-viewer>` en desktop y móvil.
- [ ] El USDZ abre Quick Look en iPhone.
- [ ] Android abre Scene Viewer o WebXR.
- [ ] La escala es realista.
- [ ] El botón AR solo aparece cuando hay soporte.
- [ ] El fallback se ve bien sin WebGL.
- [ ] El modelo no bloquea el CTA de WhatsApp.
- [ ] Se probó con datos móviles lentos.
- [ ] Se registran eventos de uso y error (si hay analítica).

---

## 10. Comandos útiles

```bash
# Desarrollo
npm run dev

# Calidad
npm run lint
npx tsc --noEmit
npm run build

# Probar el export estático (cuando se configure output: "export")
npx serve out

# Inspeccionar un GLB
npx @gltf-transform/cli inspect public/models/el-de-la-casa.glb

# Copiar/optimizar (verificar que model-viewer pueda decodificar el formato)
npx @gltf-transform/cli optimize entrada.glb public/models/el-de-la-casa.glb
```

Configuración de Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `out`
- Node version: 22 o superior (variable `NODE_VERSION`)
- Framework preset: Next.js (static HTML export) o None
- Dominio: configurar en Pages → Custom domains
- HTTPS: automático

Headers sugeridos para `public/_headers`:

```txt
/models/*.glb
  Cache-Control: public, max-age=31536000, immutable
  Content-Type: model/gltf-binary

/models/*.usdz
  Cache-Control: public, max-age=31536000, immutable
  Content-Type: model/vnd.usdz+zip

/models/*.webp
  Cache-Control: public, max-age=31536000, immutable
```

> Verificar la sintaxis de `_headers` en Cloudflare Pages y que el tipo MIME se conserve. Si se cambia el nombre de un modelo, usar versionado (`el-de-la-casa-v1.glb`) para que el cache inmutable sea seguro.

---

## 11. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| La comida realista se ve rara en 3D | Alta | Empezar estilizado; validar con clientes |
| El modelo pesa demasiado | Alto | Presupuesto de 3–5 MB; optimizar y medir |
| iOS no abre el USDZ | Alto | Probar en iPhone real; tener fallback |
| Android sin ARCore | Medio | Mostrar visor 3D o poster |
| La IA 3D tiene licencia limitada | Alto | Revisar licencia comercial; usar Blender |
| Falta presupuesto para artista | Medio | Hero estilizado interno; no 5 bowls |
| El equipo no tiene Mac | Medio | `usd_from_gltf`, conversor online o apoyo externo |
| El 3D distrae del pedido | Alto | CTA WhatsApp siempre visible; medir |
| La carta cambia y el modelo queda viejo | Medio | Empezar con el bowl más estable; versionar |
| Fotos/3D no coinciden con la porción real | Alto | Medir, pesar y validar con el negocio |
| El hosting gratuito tiene límites | Bajo | Cloudflare Pages; revisar límites vigentes |

---

## 12. Referencias y herramientas

- [model-viewer](https://modelviewer.dev/) — visor y AR web.
- [glTF 2.0](https://www.khronos.org/gltf/) — formato estándar.
- [Blender](https://www.blender.org/) — modelado, UV, exportación.
- [gltf-transform](https://gltf-transform.dev/) — inspección y optimización.
- [Polycam](https://poly.cam/), [KIRI Engine](https://www.kiriengine.app/), [RealityScan](https://www.realityscan.com/) — escaneo 3D con teléfono; revisar planes y licencias.
- [Meshroom](https://alicevision.org/) — fotogrametría; requiere GPU NVIDIA, no es viable en el equipo actual.
- [usd_from_gltf](https://github.com/google/usd_from_gltf) — conversión GLB → USDZ en Windows/Linux (verificar build).
- [Cloudflare Pages](https://pages.cloudflare.com/) — hosting estático gratuito.
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports) — documentación oficial.
- [Google Business Profile](https://www.google.com/business/) — ficha local gratuita.

> Los planes gratuitos, límites de exportación y licencias comerciales cambian. Verificar cada herramienta antes de usarla para el negocio.

---

## 13. Siguiente acción concreta

1. El negocio entrega WhatsApp, dirección, horarios, precios, ingredientes, alérgenos, zonas y fotos.
2. Se reemplazan los placeholders de `content/bowls.ts`.
3. Se publica la landing 2D en Cloudflare Pages.
4. En paralelo, se elige el estilo del hero 3D y se produce **solo El de la Casa**.
5. Se integra el visor con fallback y se prueba en dispositivos reales.
6. Solo si hay uso y buenas métricas, se producen los otros bowls.

**No se necesita un modelo 3D para lanzar.** Se necesita que la carta, el WhatsApp y la confianza estén impecables. El 3D es la siguiente capa, no la base.
