import {
  ArrowUpRight,
  Check,
  CalendarDays,
  Clock3,
  ExternalLink,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { WHATSAPP, BOOKING } from "./content";
import { SectionLabel } from "./shared";

export default function ConsultationDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="consultation-dialog">
        <div className="modal-icon">
          <CalendarDays size={25} />
        </div>
        <SectionLabel>LET’S MAKE SOMETHING GREAT</SectionLabel>
        <DialogTitle>
          Your next chapter starts
          <br />
          with a conversation.
        </DialogTitle>
        <DialogDescription>
          Tell us a little about your business. We’ll talk through your ideas,
          answer your questions, and find the right next step together.
        </DialogDescription>
        <div className="consultation-details">
          <span>
            <Clock3 size={16} /> Pick a time that works for you
          </span>
          <span>
            <Check size={16} /> Free consultation. No obligation.
          </span>
        </div>
        <Button asChild className="action-button">
          <a href={BOOKING} target="_blank" rel="noopener noreferrer">
            Choose a time on Calendly
            <ExternalLink size={17} />
          </a>
        </Button>
        <p className="modal-helper">Opens Calendly in a new tab.</p>
        <div className="modal-alternative">
          More of a WhatsApp person?
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Let’s chat
            <ArrowUpRight size={15} />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
