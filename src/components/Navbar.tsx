import React, { useState, useEffect } from "react"

// Simple Hamburger Icon
function SimpleHamburger({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span
        className={`block h-0.5 w-6 bg-[color:var(--color-text)] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
      />
      <span
        className={`block h-0.5 w-6 bg-[color:var(--color-text)] transition-opacity duration-200 my-1 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`block h-0.5 w-6 bg-[color:var(--color-text)] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
      />
    </div>
  )
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
]

// Scroll active section highlight (unchanged)
function getActiveSection(hashLinks: typeof navLinks): string {
  if (typeof window === "undefined") return "";
  let active = hashLinks[0]?.href || "";
  const offsets = hashLinks
    .map((l) => {
      const el = document.querySelector(l.href);
      if (el) {
        const rect = (el as HTMLElement).getBoundingClientRect();
        return { href: l.href, top: rect.top + window.scrollY };
      }
      return undefined;
    })
    .filter(Boolean) as { href: string; top: number }[];
  const scroll = window.scrollY + 80;
  for (let i = offsets.length - 1; i >= 0; i--) {
    if (scroll >= offsets[i].top - 5) {
      active = offsets[i].href;
      break;
    }
  }
  return active;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("#home")

  // Track active section on scroll
  useEffect(() => {
    function onScroll() {
      const current = getActiveSection(navLinks)
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Prevent scroll when mobile nav open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  function handleNavClick(href: string) {
    setMobileOpen(false)
    // Scroll smoothly to section if the link is for a hash
    if (href.startsWith("#")) {
      const el = document.querySelector(href)
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav
      className="fixed w-full top-0 z-[var(--z-navbar)] shadow-none"
      style={{
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition: "background-color var(--duration-normal), backdrop-filter var(--duration-normal)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 flex items-center group outline-none"
            aria-label="Go to home section"
            tabIndex={0}
            onClick={e => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-transparent"
              style={{
                background: "none",
                padding: 0,
              }}
            >
              <img
                src={"/images/logo.svg"}
                alt="Echoloft Logo"
                className="w-40 h-40 object-contain"
                style={{
                  display: "block",
                  width: "112px",
                  height: "112px",
                  maxWidth: "none",
                  maxHeight: "none",
                  filter: "drop-shadow(0 0 1px #0008) brightness(0) saturate(100%) invert(25%) sepia(69%) saturate(610%) hue-rotate(84deg) brightness(95%) contrast(95%)",
                  margin: 0,
                }}
              />
            </div>
          </a>
          {/* Desktop nav links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(link => {
                const isActive = link.href === activeSection
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-3 py-2 text-sm font-medium transition-all duration-200 focus:outline-none
                    `}
                    style={{
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                      transition: "color var(--duration-normal)",
                    }}
                    onClick={e => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#home"
              tabIndex={0}
              onClick={e => {
                e.preventDefault()
                handleNavClick("#home")
              }}
            >
              <button
                className="text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-2"
                style={{
                  backgroundColor: "var(--color-primary)",
                  transition: "background-color var(--duration-normal)",
                }}
                onMouseOver={e =>
                  (e.currentTarget.style.backgroundColor = "var(--color-primary-dark)")
                }
                onMouseOut={e =>
                  (e.currentTarget.style.backgroundColor = "var(--color-primary)")
                }
                onMouseDown={e =>
                  (e.currentTarget.style.backgroundColor = "var(--color-primary-dark)")
                }
                onFocus={e =>
                  (e.currentTarget.style.backgroundColor = "var(--color-primary-dark)")
                }
              >
                Get Your Website Now
              </button>
            </a>
          </div>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className={`
                flex items-center justify-center
                text-[color:var(--color-text)] hover:text-[color:var(--color-primary)] active:text-[color:var(--color-primary)] focus:outline-none rounded p-2
                transition-colors duration-200 bg-white
              `}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
              <SimpleHamburger open={mobileOpen} />
            </button>
          </div>
        </div>
      </div>
      {/* Simple mobile menu */}
      {mobileOpen && (
        <div
          className="absolute left-0 right-0 top-24 z-[1001] md:hidden bg-white border-t border-gray-100 shadow-lg"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="flex flex-col items-center gap-2 py-6 px-5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block w-full text-base font-medium px-3 py-3 rounded text-center transition-colors duration-150"
                style={{
                  color:
                    link.href === activeSection
                      ? "var(--color-primary)"
                      : "var(--color-text)",
                  background:
                    link.href === activeSection
                      ? "var(--color-background-muted)"
                      : "transparent",
                }}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#home"
              tabIndex={0}
              className="w-full"
              onClick={e => {
                e.preventDefault();
                handleNavClick("#home");
              }}
            >
              <button
                className="w-full text-white px-6 py-3 rounded-full text-base font-medium transition-colors duration-300 mt-3"
                style={{
                  backgroundColor: "var(--color-primary)",
                }}
              >
                Get Your Website Now
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
