import * as React from "react"

type DialogContextValue = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextValue | null>(null)

function useDialogContext() {
  const ctx = React.useContext(DialogContext)
  if (!ctx) {
    throw new Error("Dialog components must be used within <Dialog>")
  }
  return ctx
}

export type DialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  )
}

export type DialogContentProps = React.HTMLAttributes<HTMLDivElement>

export function DialogContent({ className = "", children, ...props }: DialogContentProps) {
  const { open, onOpenChange } = useDialogContext()
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={() => onOpenChange(false)}
    >
      <div
        className={`w-full max-w-lg rounded-2xl bg-white shadow-xl border border-gray-200 p-6 relative ${className}`}
        onClick={e => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export function DialogHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`mb-4 ${className}`} {...props} />
}

export function DialogTitle({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={`text-xl font-semibold text-gray-900 ${className}`} {...props} />
}

export function DialogDescription({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`mt-1 text-sm text-gray-600 ${className}`} {...props} />
}

export function DialogFooter({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`mt-6 flex flex-col sm:flex-row sm:justify-end gap-3 ${className}`} {...props} />
}

