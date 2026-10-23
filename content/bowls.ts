export type BowlTag = "popular" | "veggie" | "picante" | "nuevo";

export type BowlVariant = "casa" | "teriyaki" | "salmon" | "criollo" | "veggie";

export type Bowl = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  variant: BowlVariant;
  tags: BowlTag[];
  ingredients: string[];
  allergens: string[];
  accent: string;
  soft: string;
};

/**
 * Datos de la carta.
 *
 * Reemplaza nombres, precios, ingredientes y alérgenos por los reales.
 * Los precios están en COP.
 */
export const bowls: Bowl[] = [
  {
    id: "el-de-la-casa",
    name: "El de la Casa",
    tagline: "El que nunca falla",
    description:
      "Pollo marinado, arroz jazmín, aguacate, maíz dulce y pico de gallo. Todo bañado en nuestra salsa de la casa.",
    price: 29900,
    variant: "casa",
    tags: ["popular"],
    ingredients: [
      "Pollo marinado",
      "Arroz jazmín",
      "Aguacate",
      "Maíz dulce",
      "Pico de gallo",
      "Salsa de la casa",
      "Cilantro",
    ],
    allergens: ["Soya", "Ajonjolí"],
    accent: "#d96c4a",
    soft: "#f6e3d8",
  },
  {
    id: "teriyaki-crunch",
    name: "Teriyaki Crunch",
    tagline: "Dulce, salado y crujiente",
    description:
      "Pollo glaseado en teriyaki, arroz jazmín, brócoli, zanahoria y cebolla crispy. Terminado con ajonjolí tostado.",
    price: 31900,
    variant: "teriyaki",
    tags: ["popular"],
    ingredients: [
      "Pollo teriyaki",
      "Arroz jazmín",
      "Brócoli",
      "Zanahoria",
      "Cebolla crispy",
      "Ajonjolí tostado",
      "Salsa teriyaki",
    ],
    allergens: ["Soya", "Gluten", "Ajonjolí"],
    accent: "#b96a3c",
    soft: "#f3e1cf",
  },
  {
    id: "salmon-aguacate",
    name: "Salmón & Aguacate",
    tagline: "Fresco, cítrico, ligero",
    description:
      "Salmón, arroz jazmín, aguacate, pepino, alga nori y un toque de limón. Con salsa cítrica de la casa.",
    price: 36900,
    variant: "salmon",
    tags: ["nuevo"],
    ingredients: [
      "Salmón",
      "Arroz jazmín",
      "Aguacate",
      "Pepino",
      "Alga nori",
      "Limón",
      "Salsa cítrica",
    ],
    allergens: ["Pescado", "Soya"],
    accent: "#e08066",
    soft: "#f6e1db",
  },
  {
    id: "criollo",
    name: "Criollo",
    tagline: "Sabor de casa, bien local",
    description:
      "Carne desmechada, arroz, frijol, plátano maduro y aguacate. Con hogao de la casa y un toque de picante.",
    price: 29900,
    variant: "criollo",
    tags: ["picante"],
    ingredients: [
      "Carne desmechada",
      "Arroz",
      "Frijol",
      "Plátano maduro",
      "Aguacate",
      "Hogao",
      "Ají de la casa",
    ],
    allergens: ["Soya"],
    accent: "#c25a3f",
    soft: "#f2dfd1",
  },
  {
    id: "veggie-power",
    name: "Veggie Power",
    tagline: "Verde, completo, sin culpa",
    description:
      "Quinoa, garbanzo, calabaza asada, kale, aguacate y tahini. Un bowl que llena de verdad.",
    price: 27900,
    variant: "veggie",
    tags: ["veggie"],
    ingredients: [
      "Quinoa",
      "Garbanzo",
      "Calabaza asada",
      "Kale",
      "Aguacate",
      "Tahini",
      "Semillas",
    ],
    allergens: ["Ajonjolí"],
    accent: "#6f9950",
    soft: "#e4edda",
  },
];

export const siteConfig = {
  name: "Bowl de la Casa",
  tagline: "Comida real, hecha en casa.",
  city: "Ibagué, Tolima",
  whatsapp: "573000000000", // Reemplazar por el número real (sin + ni espacios).
  whatsappDisplay: "+57 300 000 0000",
  hours: "Lun – Sáb · 11:30 a.m. – 8:30 p.m.",
  delivery: "Domicilios y recogida en Ibagué",
  address: "Ibagué, Tolima",
};

export function formatPrice(price: number) {
  return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function bowlOrderMessage(bowlName: string) {
  return `Hola, quiero pedir el bowl "${bowlName}". ¿Me confirmas disponibilidad y domicilio?`;
}
