import { WhatsAppIcon } from "@/components/Icons";
import { whatsappLink } from "@/content/bowls";

const orderLink = whatsappLink(
  "Hola, quiero pedir un bowl. ¿Me cuentas qué hay hoy?",
);

export function FloatingWhatsApp() {
  return (
    <a
      href={orderLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full border border-white/20 bg-[#1fa855] p-3.5 text-white shadow-[0_18px_40px_-14px_rgba(23,37,31,.55)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#188f47] sm:pr-5"
    >
      <span
        className="absolute inset-0 -z-10 rounded-full bg-[#25d366] opacity-25 blur-md"
        aria-hidden="true"
      />
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden text-[10px] font-extrabold uppercase tracking-[0.12em] sm:inline">
        Pide tu bowl
      </span>
    </a>
  );
}
