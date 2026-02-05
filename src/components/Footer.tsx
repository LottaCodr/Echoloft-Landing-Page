import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Use colours from App.css design tokens
const COLORS = {
  primary: "var(--color-primary)",
  primaryDark: "var(--color-primary-dark)",
  accent: "var(--color-accent)",
  secondary: "var(--color-secondary)",
  white: "#fff",
  gray800: "#1e293b", // fallback, not used directly (prefer Tailwind class)
  bg: "var(--color-background)",
  text: "var(--color-text)",
  textMuted: "var(--color-text-muted)",
  border: "var(--color-border)",
  redHeart: "#ef4444", // from tailwind red-500, fallback
  blue: "#3b82f6", // for phone and email icon (tailwind blue-400)
};

const socialLinks = [
  {
    href: "https://www.instagram.com/echoloft_designs?igsh=MW8zYWc4aG13NHN3Zg%3D%3D&utm_source=qr",
    label: "Instagram",
    icon: <FaInstagram size={22} />,
    brandColor: COLORS.white,
  },
  {
    href: "https://x.com/echo__loft?s=21",
    label: "Twitter",
    icon: <FaTwitter size={22} />,
    brandColor: COLORS.white,
  },
  {
    href: "https://www.tiktok.com/@echoloft.designs?_r=1&_t=ZS-93cR1q7CGES",
    label: "TikTok",
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "inline-block", verticalAlign: "middle" }}
      >
        <path
          d="M16.666 0H12.665v16.393a2.672 2.672 0 11-2.347-2.654V9.74a6.988 6.988 0 101.64 13.733c2.841-.535 5.039-3.062 5.039-6.027V7.967c1.135.847 2.501 1.347 4 1.347V4.75a4.748 4.748 0 01-4.33-4.75z"
          fill="#fff"
        />
      </svg>
    ),
    brandColor: COLORS.white,
  },
];

const serviceLinks = [
  { label: "Web Design", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "Domain & Hosting", href: "#services" },
  { label: "Logo Design", href: "#services" },
  { label: "SEO Optimization", href: "#services" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const contacts = [
  {
    icon: (
      <FaPhone
        className="mr-3"
        size={18}
        aria-hidden="true"
        style={{ color: COLORS.primary }}
      />
    ),
    value: (
      <a
        href="tel:+2348130923309"
        className="hover:underline"
        style={{ color: "inherit" }}
      >
        +234 813 092 3309
      </a>
    ),
    label: "Phone",
  },
  {
    icon: (
      <FaEnvelope
        className="mr-3"
        size={18}
        aria-hidden="true"
        style={{ color: COLORS.primary }}
      />
    ),
    value: (
      <a
        href="mailto:echoloft001@gmail.com"
        className="hover:underline"
        style={{ color: "inherit" }}
      >
        echoloft001@gmail.com
      </a>
    ),
    label: "Email",
  },
  {
    icon: (
      <FaMapMarkerAlt
        className="mr-3"
        size={18}
        aria-hidden="true"
        style={{ color: COLORS.primary }}
      />
    ),
    value: <>Abuja, Nigeria</>,
    label: "Location",
  },
];

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string
) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, "", href);
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 font-sans"
      style={{
        backgroundColor: 'black',
        color: COLORS.white,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive grid for sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand/About */}
          <div className="top-0">
            <div className="flex items-center mb-4">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-100"
                style={{
                  background: "none",
                  padding: 0,
                }}
              >
                <img
                  src={"/images/white_main.svg"}
                  alt="Echoloft Logo"
                  className="object-contain"
                  style={{
                    display: "block",
                    width: 112,
                    height: 112,
                    maxWidth: "none",
                    maxHeight: "none",
                    margin: 0,
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <p
              className="mb-5 leading-relaxed text-base"
              style={{ color: COLORS.textMuted }}
            >
              Helping small businesses in Nigeria establish a professional online
              presence; affordably and quickly.
            </p>
            {/* Accessible social icons */}
            <div className="mb-2">
              <span className="block text-xs tracking-widest font-semibold mb-2" style={{ color: COLORS.textMuted, letterSpacing: "2px" }}>
                FOLLOW&nbsp;US
              </span>
              <nav
                aria-label="Social media"
                className="flex space-x-3"
              >
                {socialLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"group transition-all duration-200 focus:outline-none p-0 flex items-center justify-center"}
                    style={{
                      color: link.brandColor,
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}
                    aria-label={link.label}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.open(link.href, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    <span
                      className="transition-colors duration-200"
                      style={{
                        color: COLORS.white,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 32,
                        width: 32,
                      }}
                    >
                      {link.icon}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          {/* Services */}
          <section>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    onClick={(e) => handleSmoothScroll(e, s.href)}
                    className="transition-colors duration-200 focus:outline-none focus:underline"
                    tabIndex={0}
                    style={{
                      color: COLORS.textMuted,
                    }}
                    onMouseOver={e => { e.currentTarget.style.color = COLORS.white; }}
                    onMouseOut={e => { e.currentTarget.style.color = COLORS.textMuted; }}
                    onFocus={e => { e.currentTarget.style.color = COLORS.white; }}
                    onBlur={e => { e.currentTarget.style.color = COLORS.textMuted; }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {/* Quick Links */}
          <section>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((q) => (
                <li key={q.label}>
                  <a
                    href={q.href}
                    onClick={(e) => handleSmoothScroll(e, q.href)}
                    className="transition-colors duration-200 focus:outline-none focus:underline"
                    tabIndex={0}
                    style={{
                      color: COLORS.textMuted,
                    }}
                    onMouseOver={e => { e.currentTarget.style.color = COLORS.white; }}
                    onMouseOut={e => { e.currentTarget.style.color = COLORS.textMuted; }}
                    onFocus={e => { e.currentTarget.style.color = COLORS.white; }}
                    onBlur={e => { e.currentTarget.style.color = COLORS.textMuted; }}
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {/* Contact */}
          <section>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">
              Contact Us
            </h3>
            <ul
              className="space-y-2"
              style={{ color: COLORS.textMuted }}
            >
              {contacts.map((c) => (
                <li key={c.label} className="flex items-center">
                  {c.icon}
                  <span className="whitespace-nowrap">{c.value}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {/* Divider and copyright */}
        <div
          className="mt-10 pt-8 text-center text-sm"
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            color: COLORS.textMuted,
          }}
        >
          <p>
            &copy; {currentYear}{" "}
            <span
              className="font-semibold"
              style={{ color: COLORS.white }}
            >
              EchoLoft
            </span>
            . All rights reserved. Built with{" "}
            <span
              className="inline-block align-middle"
              title="heart"
              aria-label="love"
              style={{ color: COLORS.redHeart }}
            >
              ♥
            </span>{" "}
            in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
