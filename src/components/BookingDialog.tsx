import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
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
    // For now we just close the dialog.
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
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium"
                style={{ color: COLORS.text }}
              >
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                  background: COLORS.background,
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium"
                style={{ color: COLORS.text }}
              >
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                  background: COLORS.background,
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium"
                style={{ color: COLORS.text }}
              >
                Preferred date
              </label>
              <input
                type="date"
                required
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                  background: COLORS.background,
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium"
                style={{ color: COLORS.text }}
              >
                Preferred time
              </label>
              <input
                type="time"
                required
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                  background: COLORS.background,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm font-medium"
              style={{ color: COLORS.text }}
            >
              Business type / notes
            </label>
            <textarea
              rows={3}
              placeholder="Tell us a bit about your business and what you need from your website."
              className="w-full rounded-lg border px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
              style={{
                borderColor: COLORS.border,
                color: COLORS.text,
                background: COLORS.background,
              }}
            />
          </div>
          <DialogFooter>
            <button
              type="button"
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors"
              style={{
                borderColor: COLORS.border,
                color: COLORS.text,
                background: "transparent",
                transition: "background-color var(--duration-normal)",
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = COLORS.backgroundMuted;
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                color: "#fff",
                backgroundColor: COLORS.primary,
                transition: "background-color var(--duration-normal)",
              }}
              onMouseOver={e =>
                (e.currentTarget.style.backgroundColor = COLORS.primaryDark)
              }
              onMouseOut={e =>
                (e.currentTarget.style.backgroundColor = COLORS.primary)
              }
            >
              Confirm schedule
            </button>
          </DialogFooter>
          <p
            className="mt-2 text-xs"
            style={{ color: COLORS.textMuted }}
          >
            After submitting, we&apos;ll send you a confirmation email with your meeting details.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
