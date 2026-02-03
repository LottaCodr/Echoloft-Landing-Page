import React, { useState, useRef, useEffect } from "react"
// import echoloftLogoWhite from ""

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
]

// Use color-tokens from App.css for nav links: 
// --color-text: #0f172a;
// --color-primary: #1f7a3f;

function getActiveSection(hashLinks: typeof navLinks): string {
  if (typeof window === "undefined") return ""
  let active = hashLinks[0]?.href || ""
  const offsets = hashLinks
    .map((l) => {
      const el = document.querySelector(l.href)
      if (el) {
        const rect = (el as HTMLElement).getBoundingClientRect()
        return { href: l.href, top: rect.top + window.scrollY }
      }
      return undefined
    })
    .filter(Boolean) as { href: string; top: number }[]
  const scroll = window.scrollY + 80 // Allow for navbar height
  for (let i = offsets.length - 1; i >= 0; i--) {
    if (scroll >= offsets[i].top - 5) {
      active = offsets[i].href
      break
    }
  }
  return active
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("#home")
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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

  // Close mobile menu on click outside or Esc key
  useEffect(() => {
    if (!mobileOpen) return
    function handleClick(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false)
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [mobileOpen])

  // Lock background scroll when mobile menu open
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
              e.preventDefault()
              handleNavClick("#home")
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
                src={'/images/echoloft-logo-white.png'}
                alt="Echoloft Logo"
                className="w-40 h-40 object-contain"
                style={{
                  display: 'block',
                  width: "112px",   // 28 * 4 px
                  height: "112px",  // 28 * 4 px
                  maxWidth: "none",
                  maxHeight: "none",
                  filter: 'drop-shadow(0 0 1px #0008) brightness(0) saturate(100%) invert(25%) sepia(69%) saturate(610%) hue-rotate(84deg) brightness(95%) contrast(95%)',
                  margin: 0,
                }}
              />
            </div>
            {/* <span
              className="ml-2 text-xl font-bold select-none tracking-tight"
              style={{
                color: "var(--color-text)",
              }}
            >
              Echoloft
            </span> */}
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
                      ${isActive
                        ? "" // will style active in style below
                        : ""
                      }
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
                    <span
                      aria-hidden="true"
                      className={`
                        absolute left-1/2 -translate-x-1/2 bottom-1
                        h-0.5 w-2/3 rounded-full
                        transition-all duration-200
                        ${isActive
                          ? "bg-[color:var(--color-primary)] opacity-100"
                          : "opacity-0"
                        }
                        group-hover:bg-[color:var(--color-primary)] group-hover:opacity-70
                      `}
                    ></span>
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
              className="text-[color:var(--color-text)] hover:text-[color:var(--color-primary)] active:text-[color:var(--color-primary)] focus:text-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] rounded p-2"
              aria-label="Open navigation menu"
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed inset-0 z-[1001] md:hidden bg-black/40 backdrop-blur transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ transitionProperty: "opacity, backdrop-filter" }}
        aria-modal="true"
        tabIndex={-1}
      >
        {/* Slide-out panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white bg-opacity-90 shadow-lg transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{
            borderTopLeftRadius: "1.25rem",
            borderBottomLeftRadius: "1.25rem",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.90)"
          }}
          role="menu"
        >
          <div className="flex justify-between items-center px-4 pt-4 pb-2 border-b border-gray-100">
            <span
              className="font-bold text-xl tracking-tight pl-2"
              style={{ color: "var(--color-text)" }}
            >
              Menu
            </span>
            <button
              aria-label="Close menu"
              className="text-[color:var(--color-text)] hover:text-[color:var(--color-primary)] active:text-[color:var(--color-primary)] focus:text-[color:var(--color-primary)] focus:outline-none p-2"
              onClick={() => setMobileOpen(false)}
              tabIndex={0}
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <div className="px-2 pt-3 pb-5 space-y-2 flex flex-col">
            {navLinks.map(link => {
              const isActive = link.href === activeSection
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    block px-3 py-2 rounded text-base font-medium transition-all duration-150 relative
                    ${isActive ? "" : ""}
                    hover:bg-gray-50 
                    focus:bg-gray-100
                  `}
                  style={{
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text)",
                    backgroundColor: isActive ? "var(--color-background-muted)" : "transparent",
                    transition: "color var(--duration-normal), background-color var(--duration-normal)",
                  }}
                  onClick={e => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  role="menuitem"
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className={`
                      absolute left-5 bottom-1 h-0.5 w-3/4 rounded-full
                      transition-all duration-200
                      ${isActive
                        ? "bg-[color:var(--color-primary)] opacity-100"
                        : "opacity-0"
                      }
                    `}
                  ></span>
                </a>
              )
            })}
            <a
              href="#home"
              tabIndex={0}
              onClick={e => {
                e.preventDefault()
                handleNavClick("#home")
              }}
            >
              <button
                className="w-full text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 mt-4 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-2"
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
        </div>
      </div>
    </nav>
  )
}
