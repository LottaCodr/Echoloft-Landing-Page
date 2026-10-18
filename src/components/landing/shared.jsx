import { ArrowUpRight, Plus, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";

export function Logo({ light = false }) {
  return (
    <a
      href="#home"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="Echoloft home"
    >
      <img src="/images/icon-logo.svg" alt="" width="34" height="34" />
      <span>
        echoloft<span className="brand-dot">.</span>
      </span>
    </a>
  );
}

export function SectionLabel({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

export function BookingButton({
  onClick,
  children = "Let’s build your website",
  className = "",
}) {
  return (
    <Button onClick={onClick} className={`action-button ${className}`}>
      {children}
      <ArrowUpRight size={18} />
    </Button>
  );
}

export function BrowserBar({ domain }) {
  return (
    <div className="browser-bar" aria-hidden="true">
      <div className="browser-dots">
        <i />
        <i />
        <i />
      </div>
      <span>
        <ShieldCheck size={10} />
        {domain}
      </span>
      <Plus size={12} />
    </div>
  );
}
