import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"

type BookingDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Helper variables for App.css design tokens (makes code clear)
const COLORS = {
  primary: "var(--color-primary)",
  primaryDark: "var(--color-primary-dark)",
  text: "var(--color-text)",
  textMuted: "var(--color-text-muted)",
  border: "var(--color-border)",
  backgroundMuted: "var(--color-background-muted)",
  background: "var(--color-background)",
};

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Redirect to Calendly
    window.open(
      "https://calendly.com/echoloft/free-consultation",
      "_blank"
    )

    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{
          background: COLORS.background,
          color: COLORS.text,
        }}
      >
        <DialogHeader>
          <DialogTitle
            style={{
              color: COLORS.primary,
            }}
          >
            Book a free website consultation
          </DialogTitle>
          <DialogDescription
            style={{
              color: COLORS.textMuted,
            }}
          >
            Choose a convenient time and share a few details so we can prepare tailored ideas for your business.
          </DialogDescription>
        </DialogHeader>

        {/* Simple button that triggers Calendly in new tab */}
        <form className="mt-4 mb-2 flex justify-center" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
            style={{
              backgroundColor: COLORS.primary,
              transition: "background-color var(--duration-normal)"
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = COLORS.primaryDark)}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = COLORS.primary)}
          >
            Book via Calendly
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
