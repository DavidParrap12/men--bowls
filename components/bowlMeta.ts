import type { BowlTag } from "@/content/bowls";

export const tagLabels: Record<BowlTag, string> = {
  popular: "El más pedido",
  veggie: "Veggie",
  picante: "Con picante",
  nuevo: "Nuevo",
};

export const tagStyles: Record<BowlTag, string> = {
  popular:
    "border-terracotta/20 bg-terracotta/10 text-[#a34b2f]",
  veggie: "border-forest/15 bg-forest/10 text-forest",
  picante: "border-gold/30 bg-gold/20 text-[#8a5a12]",
  nuevo: "border-forest/10 bg-sage/30 text-forest",
};
