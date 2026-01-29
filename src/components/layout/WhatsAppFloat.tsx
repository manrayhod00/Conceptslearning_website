import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/919810695338?text=Hi%20Concepts%20Learning,%20I%20want%20to%20book%20a%20demo%20class.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
