import {
  ArrowUpRight,
  ArrowRight,
  Check,
  CheckCheck,
  Globe2,
  MousePointer2,
  Sparkles,
  Heart,
  Monitor,
} from "lucide-react";
import { Button } from "../ui/button";
import { BookingButton, BrowserBar } from "./shared";

export default function Hero({ onBooking }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="status-dot" /> SMALL BUSINESS. BIG POSSIBILITIES.
          </div>
          <h1>
            Your business.
            <br />
            Only <span className="serif-word">bigger.</span>
            <br />
            <span className="green-line">Online.</span>
            <svg
              className="heading-spark"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              aria-hidden="true"
            >
              <path
                d="M25 3l-3 16M43 13L30 23M42 34l-15-4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p className="hero-description">
            You’ve built something great. Let’s give it a website to match.
            Beautiful, affordable websites for small businesses in Nigeria.
          </p>
          <div className="hero-actions">
            <BookingButton onClick={onBooking} />
            <Button asChild variant="outline" className="secondary-button">
              <a href="#portfolio">
                Explore our work
                <ArrowRight size={17} />
              </a>
            </Button>
          </div>
          <div className="hero-reassurance">
            <span>
              <Check size={14} /> From ₦120,000
            </span>
            <span>
              <Check size={14} /> Ready in 4 working days
            </span>
          </div>
          <div className="hero-team">
            <div className="avatar-stack">
              <img
                src="/images/optimized/joel.webp"
                alt=""
                width="64"
                height="64"
              />
              <img
                src="/images/optimized/lotta.webp"
                alt=""
                width="64"
                height="64"
              />
              <img
                src="/images/optimized/noble.webp"
                alt=""
                width="64"
                height="64"
              />
            </div>
            <div>
              <strong>A small team. A big commitment.</strong>
              <span>Real people, building for your business.</span>
            </div>
            <span className="team-flower" aria-hidden="true">
              ✳
            </span>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="A preview of our Canadian Burger website design, with a website package starting at 120,000 naira"
        >
          <div className="art-grid" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-note">
            A little design.
            <br />A lot of possibility.
            <svg viewBox="0 0 80 65" aria-hidden="true">
              <path
                d="M6 5c55-13 65 28 24 37-18 4-25-10-14-14 20-8 30 17 36 28m-12-4 13 6 6-13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="hero-browser">
            <BrowserBar domain="canadianburger.com" />
            <div className="hero-browser-screen">
              <img
                src="/images/optimized/canadian-burger.webp"
                alt="Canadian Burger restaurant website featuring a burger and editorial typography"
                fetchPriority="high"
                width="1125"
                height="3668"
              />
            </div>
          </div>
          <div className="brand-studio-card" aria-hidden="true">
            <div className="mini-label">
              <span>YOUR BRAND, REIMAGINED</span>
              <ArrowUpRight size={18} />
            </div>
            <span className="studio-flower">✳</span>
            <div>
              Made to
              <br />
              <em>stand out.</em>
            </div>
            <span className="studio-bottom">GOOD DESIGN. REAL IMPACT.</span>
          </div>
          <div className="live-badge">
            <span>
              <CheckCheck size={17} />
            </span>
            <div>
              Looking good. Working hard.<small>Built for every screen.</small>
            </div>
          </div>
          <div className="price-float">
            <div className="price-float-top">
              <span>Your next big step.</span>
              <Sparkles size={16} />
            </div>
            <strong>
              ₦120,000<span> / website</span>
            </strong>
            <div className="price-float-bottom">
              <span>Design. Domain. Hosting.</span>
              <span className="small-check">
                <Check size={12} />
              </span>
            </div>
          </div>
          <div className="design-cursor" aria-hidden="true">
            <MousePointer2 fill="currentColor" size={25} />
            <span>Your brand here</span>
          </div>
          <span className="art-footnote">
            SMALL BUSINESS, MEET YOUR BIG BREAK.
          </span>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>BUILT FOR BUSINESSES LIKE YOURS</span>
        <div>
          <span>
            <Globe2 /> Locally rooted
          </span>
          <i />
          <span>
            <Monitor /> Thoughtfully designed
          </span>
          <i />
          <span>
            <Heart /> Built around you
          </span>
        </div>
        <a href="#services" aria-label="Discover what is included">
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
