import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

type BookingDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const COLORS = {
  primary: "var(--color-primary)",
  primaryDark: "var(--color-primary-dark)",
  text: "var(--color-text)",
  textMuted: "var(--color-text-muted)",
  background: "var(--color-background)",
};

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "https://calendly.com/echoloft001/free-website-consultation",
      "_blank"
    );
    onOpenChange(false);
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: COLORS.primary,
    transition: "background-color var(--duration-normal)",
    color: "#fff"
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.primaryDark;
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.primary;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{
          background: COLORS.background,
          color: COLORS.text,
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: COLORS.primary }}>
            Book a free website consultation
          </DialogTitle>
          <DialogDescription style={{ color: COLORS.textMuted }}>
            Choose a convenient time and share a few details so we can prepare tailored ideas for your business.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 mb-2 flex justify-center" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Book via Calendly
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
