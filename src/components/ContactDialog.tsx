import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog"

type ContactDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const COLORS = {
  primary: "var(--color-primary)",
  primaryDark: "var(--color-primary-dark)",
  text: "var(--color-text)",
  textMuted: "var(--color-text-muted)",
  border: "var(--color-border)",
  backgroundMuted: "var(--color-background-muted)",
  background: "var(--color-background)",
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [name, setName] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const subject = `New website enquiry from ${name || "prospect"}`
    const bodyLines = [
      `Name: ${name}`,
      `Business name: ${businessName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ]

    const mailto = `mailto:echoloft001@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`

    window.location.href = mailto
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
            Contact our team
          </DialogTitle>
          <DialogDescription
            style={{
              color: COLORS.textMuted,
            }}
          >
            Send us a quick message about your business and we&apos;ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" style={{ color: COLORS.text }}>
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
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
              <label className="text-sm font-medium" style={{ color: COLORS.text }}>
                Business name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder="Your business name"
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
              <label className="text-sm font-medium" style={{ color: COLORS.text }}>
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                  background: COLORS.background,
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" style={{ color: COLORS.text }}>
                Phone number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+234..."
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
            <label className="text-sm font-medium" style={{ color: COLORS.text }}>
              Message
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Tell us what you need help with."
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
                e.currentTarget.style.backgroundColor = COLORS.backgroundMuted
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = "transparent"
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
              Send message
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

