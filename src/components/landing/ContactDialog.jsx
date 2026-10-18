import { useState } from "react";
import { ArrowUpRight, CheckCheck, MessageCircle, Mail } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

export default function ContactDialog({ open, onOpenChange }) {
  const [draftReady, setDraftReady] = useState(false);
  const [mailto, setMailto] = useState("");
  const [draft, setDraft] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(Object.fromEntries(data));
    const subject = `Website enquiry from ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\n\n${data.get("message")}`;
    const link = `mailto:echoloft001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailto(link);
    setDraftReady(true);
    window.location.href = link;
  }
  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);
        if (!value) {
          setDraftReady(false);
          setDraft({});
        }
      }}
    >
      <DialogContent>
        <div className="modal-icon">
          <MessageCircle size={24} />
        </div>
        <DialogTitle>Tell us what’s on your mind.</DialogTitle>
        <DialogDescription>
          No question is too small. Share a few details and start a conversation
          with our team.
        </DialogDescription>
        {draftReady ? (
          <div className="contact-ready" role="status">
            <CheckCheck size={32} />
            <h3>Your email draft is ready.</h3>
            <p>
              We’ve asked your email app to open your message. You still need to
              press send there—nothing has been sent from this website.
            </p>
            <Button asChild className="action-button">
              <a href={mailto}>
                Open email draft
                <Mail size={17} />
              </a>
            </Button>
            <button className="text-link" onClick={() => setDraftReady(false)}>
              Back to your message
            </button>
            <p>
              Or email us at{" "}
              <a href="mailto:echoloft001@gmail.com">echoloft001@gmail.com</a>.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  defaultValue={draft.name || ""}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  defaultValue={draft.email || ""}
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@business.com"
                  maxLength={150}
                />
              </label>
            </div>
            <label>
              Business name <span>(optional)</span>
              <input
                name="business"
                defaultValue={draft.business || ""}
                autoComplete="organization"
                placeholder="What’s your business called?"
                maxLength={150}
              />
            </label>
            <label>
              How can we help?
              <textarea
                name="message"
                defaultValue={draft.message || ""}
                required
                rows={4}
                placeholder="A little about your business and what you have in mind…"
                maxLength={2500}
              />
            </label>
            <Button type="submit" className="action-button">
              Continue to email
              <ArrowUpRight size={17} />
            </Button>
            <p className="modal-helper">
              This opens your email app with a draft. Your details aren’t stored
              on this website.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
