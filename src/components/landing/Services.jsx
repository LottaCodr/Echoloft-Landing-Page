import {
  ArrowUpRight,
  Check,
  Globe2,
  Menu,
  MousePointer2,
  Sparkles,
  Smartphone,
  Search,
  PenTool,
} from "lucide-react";
import { SectionLabel } from "./shared";

export default function Services({ onBooking }) {
  const cards = [
    {
      icon: PenTool,
      title: "Designed to feel like you.",
      text: "Not another generic website. A thoughtful design that captures your brand and makes the right first impression.",
      className: "design-feature",
    },
    {
      icon: Globe2,
      title: "Your own corner of the internet.",
      text: "A professional domain and secure hosting. Your first year is on us.",
      className: "domain-feature",
    },
    {
      icon: Smartphone,
      title: "Every screen. Just right.",
      text: "From a quick phone scroll to a desktop deep dive. Your website looks great everywhere.",
      className: "mobile-feature",
    },
    {
      icon: Search,
      title: "Get found. Get growing.",
      text: "Basic SEO foundations to help the right people discover your business.",
      className: "seo-feature",
    },
  ];
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel>THE WHOLE PACKAGE</SectionLabel>
            <h2>
              Everything you need.
              <br />
              <span className="muted-heading">Nothing you don’t.</span>
            </h2>
          </div>
          <p>
            You focus on what you do best. <br />
            We’ll take care of your corner of the internet.
          </p>
        </div>
        <div className="service-grid">
          {cards.map(({ icon: Icon, title, text, className }, i) => (
            <article className={`service-card ${className}`} key={title}>
              <div className="service-icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              {i === 0 && (
                <div className="design-illustration" aria-hidden="true">
                  <div className="palette">
                    <i />
                    <i />
                    <i />
                    <i />
                    <span>Aa</span>
                  </div>
                  <div className="design-mini">
                    <div>
                      <span>your brand.</span>
                      <Menu size={10} />
                    </div>
                    <strong>
                      A fresh
                      <br />
                      <em>perspective.</em>
                    </strong>
                    <span className="mini-pill">
                      Made for you <ArrowUpRight size={11} />
                    </span>
                    <span className="mini-flower">✳</span>
                  </div>
                  <span className="design-tag">
                    <MousePointer2 size={13} fill="currentColor" /> Uniquely
                    yours
                  </span>
                </div>
              )}
              {i === 1 && (
                <div className="domain-illustration" aria-hidden="true">
                  <Globe2 size={18} />
                  <span>yourbusiness.com.ng</span>
                  <span className="domain-check">
                    <Check size={13} />
                  </span>
                </div>
              )}
              {i === 2 && (
                <div className="device-illustration" aria-hidden="true">
                  <div className="device-desktop">
                    <div />
                    <span />
                    <span />
                    <i />
                  </div>
                  <div className="device-phone">
                    <div />
                    <span />
                    <i />
                  </div>
                  <span className="responsive-label">
                    <Check size={12} /> Mobile-ready
                  </span>
                </div>
              )}
              {i === 3 && (
                <div className="search-illustration" aria-hidden="true">
                  <div>
                    <Search size={13} /> Your next customer is searching...
                  </div>
                  <span>Let’s help them find you.</span>
                  <i />
                  <i />
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="included-strip">
          <div>
            <span className="gift-icon">
              <Sparkles size={21} />
            </span>
            <p>
              <strong>No logo? No problem.</strong> We’ll create one for your
              business, at no extra cost.
            </p>
            <span className="included-tag">INCLUDED</span>
          </div>
          <button onClick={onBooking}>
            Let’s make it happen
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
