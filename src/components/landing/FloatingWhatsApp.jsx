import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { WHATSAPP } from "./content";

export default function FloatingWhatsApp() {
  return (
    <Button asChild size="icon" className="floating-whatsapp">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (opens in a new tab)"
      >
        <FaWhatsapp aria-hidden="true" />
        <span className="floating-whatsapp-label" aria-hidden="true">
          Chat on WhatsApp
        </span>
      </a>
    </Button>
  );
}
