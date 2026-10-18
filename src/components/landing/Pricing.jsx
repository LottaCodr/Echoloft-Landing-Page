import { Check } from "lucide-react";
import { SectionLabel, BookingButton } from "./shared";

export default function Pricing({ onBooking }) {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container pricing-layout">
        <div className="pricing-copy">
          <SectionLabel light>SMALL BUSINESS FRIENDLY. BY DESIGN.</SectionLabel>
          <h2>
            A big step forward.
            <br />
            Not a big <span className="serif-word">expense.</span>
          </h2>
          <p>
            A professional website shouldn’t feel out of reach. One
            straightforward package to get your business online, without the
            runaround.
          </p>
          <div className="pricing-values">
            <span>
              <Check /> Clear scope, agreed together
            </span>
            <span>
              <Check /> Real people, not a ticket number
            </span>
            <span>
              <Check /> Your first year of essentials, covered
            </span>
          </div>
          <div className="pricing-decoration" aria-hidden="true">
            Good things
            <br />
            start <span>small.</span>
            <svg viewBox="0 0 140 60">
              <path
                d="M5 45c50 20 70-43 120-30m-17-10 20 10-17 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="pricing-card">
          <div className="plan-heading">
            <span>THE BUSINESS STARTER</span>
            <span>All the essentials</span>
          </div>
          <div className="plan-price">₦120,000</div>
          <p className="plan-subtitle">Your website. Ready for what’s next.</p>
          <div className="plan-divider" />
          <ul>
            {[
              "Custom website design & development",
              "Mobile-friendly on every screen",
              "Domain registration — first year included",
              "Secure hosting — first year included",
              "Basic search engine optimisation",
              "Free logo design, if you need one",
              "Website handover & guidance",
            ].map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
          <BookingButton onClick={onBooking}>
            Let’s build your website
          </BookingButton>
          <p className="plan-footnote">
            Start with a free, no-pressure consultation.
          </p>
          <div className="plan-fineprint">
            Domain & hosting renew annually after year one. E-commerce is quoted
            separately.
          </div>
        </div>
      </div>
    </section>
  );
}
