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

// Social links using React Icons
const socialLinks = [
  {
    href: "https://facebook.com/webpro.ng",
    label: "Facebook",
    icon: <FaFacebookF size={22} />,
    brandColor: "#1877f3",
  },
  {
    href: "https://twitter.com/webpro_ng",
    label: "Twitter",
    icon: <FaTwitter size={22} />,
    brandColor: "#1da1f2",
  },
  {
    href: "https://instagram.com/webpro.ng",
    label: "Instagram",
    icon: <FaInstagram size={22} />,
    brandColor: "#e4405f",
  },
  {
    href: "https://linkedin.com/company/webprong",
    label: "LinkedIn",
    icon: <FaLinkedinIn size={22} />,
    brandColor: "#0a66c2",
  },
  {
    href: "https://www.tiktok.com/@webpro.ng",
    label: "TikTok",
    icon: (
      // TikTok icon via SVG, as react-icons does not include TikTok in Font Awesome
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
          fill="#000"
        />
      </svg>
    ),
    brandColor: "#010101",
  }
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
    icon: <FaPhone className="mr-3 text-blue-400" size={18} aria-hidden="true" />,
    value: <a href="tel:+2348012345678" className="hover:underline">+234 801 234 5678</a>,
    label: "Phone"
  },
  {
    icon: <FaEnvelope className="mr-3 text-blue-400" size={18} aria-hidden="true" />,
    value: <a href="mailto:echoloft001@gmail.com" className="hover:underline">echoloft001@gmail.com</a>,
    label: "Email"
  },
  {
    icon: <FaMapMarkerAlt className="mr-3 text-blue-400" size={18} aria-hidden="true" />,
    value: <>Abuja, Nigeria</>,
    label: "Location"
  }
];

// Helper: smooth scroll handler for hash links
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
    // Optionally, update the URL hash (not required for navigation hash)
    window.history.replaceState(null, "", href);
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive grid for sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand/About */}
          <div className='top-0'>
            <div className="flex items-center mb-4">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-100"
                style={{
                  background: "none",
                  padding: 0,
                }}
              >
                <img
                  src={"/images/logo.svg"}
                  alt="Echoloft Logo"
                  className="object-contain"
                  style={{
                    display: "block",
                    width: 112,
                    height: 112,
                    maxWidth: "none",
                    maxHeight: "none",
                    filter: "brightness(0) invert(1)", // flat white logo style for dark bg
                    margin: 0,
                  }}
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-5 leading-relaxed text-base">
              Helping small businesses in Nigeria establish a professional online presence—affordably and quickly.
            </p>
            {/* Accessible social icons */}
            <nav aria-label="Social media" className="flex space-x-3 mt-3 mb-2">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full bg-gray-800 hover:bg-white group transition-all duration-200 shadow-lg p-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[${link.brandColor}]`}
                  style={{
                    color: link.brandColor,
                    border: `1.5px solid ${link.brandColor}`,
                    boxShadow: "0 2px 10px 0 rgba(0,0,0,0.07)",
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
                    className="group-hover:text-white transition-colors duration-200"
                    style={{
                      color: link.brandColor,
                    }}
                  >
                    {link.icon}
                  </span>
                </a>
              ))}
            </nav>
          </div>
          {/* Services */}
          <section>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    onClick={(e) => handleSmoothScroll(e, s.href)}
                    className="text-gray-400 hover:text-white focus:text-white transition-colors duration-200 focus:outline-none focus:underline"
                    tabIndex={0}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {/* Quick Links */}
          <section>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((q) => (
                <li key={q.label}>
                  <a
                    href={q.href}
                    onClick={(e) => handleSmoothScroll(e, q.href)}
                    className="text-gray-400 hover:text-white focus:text-white transition-colors duration-200 focus:outline-none focus:underline"
                    tabIndex={0}
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {/* Contact */}
          <section>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
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
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} <span className="text-white font-semibold">EchoLoft</span>. All rights reserved. Built with <span className="inline-block align-middle text-red-500" title="heart" aria-label="love">♥</span> in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
