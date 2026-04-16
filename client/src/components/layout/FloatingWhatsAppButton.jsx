import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../../utils/constants";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105 sm:bottom-5 sm:right-5 sm:px-5"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  );
}
