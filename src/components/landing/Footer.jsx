import { ArrowUpRight, MapPin, Mail, Phone, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP, navLinks } from "./content";
import { Logo, SectionLabel, BookingButton } from "./shared";

export default function Footer({ onBooking, onContact }) {
  return (
    <>
      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <SectionLabel>YOUR NEXT CHAPTER STARTS HERE</SectionLabel>
            <h2>
              Let’s put your business
              <br />
              <span className="serif-word">on the map.</span>
              <span className="cta-star" aria-hidden="true">
                ✳
              </span>
            </h2>
          </div>
          <div>
            <BookingButton onClick={onBooking}>
              Let’s build something great
            </BookingButton>
            <a
              className="whatsapp-link"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={19} /> Or, say hello on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Logo />
              <p>
                Good design. Real connections.
                <br />A bigger future for small businesses.
              </p>
              <div className="socials">
                <a
                  href="https://www.instagram.com/echoloft_designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Echoloft on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://x.com/echo__loft"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Echoloft on X"
                >
                  <span>𝕏</span>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Echoloft on WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Explore</h3>
              {navLinks.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
            <div className="footer-links">
              <h3>A little about us</h3>
              <a href="#team">Meet the team</a>
              <a href="#pricing">Our package</a>
              <button onClick={onContact}>Get in touch</button>
              <a href="#home">Back to top ↑</a>
            </div>
            <div className="footer-links footer-contact">
              <h3>Let’s connect</h3>
              <a href="mailto:echoloft001@gmail.com">
                <Mail size={15} />
                echoloft001@gmail.com
              </a>
              <a href="tel:+2348130923309">
                <Phone size={15} />
                +234 813 092 3309
              </a>
              <span>
                <MapPin size={15} />
                Abuja, Nigeria
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Echoloft. All rights reserved.
            </span>
            <span>
              Thoughtfully built in Nigeria.
              <span className="nigeria-flag" aria-label="Nigerian flag">
                ▮▮▮
              </span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
