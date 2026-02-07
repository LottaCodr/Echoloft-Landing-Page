import React, { useState, useRef, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { CaseStudyGrid } from "./CaseStudy"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

type CaseStudy = {
  id: string
  title: string
  label: string
  tag: string
  gradient: string
  accentText: string
  layoutClass: string
  image: string
}

type Props = {
  data: CaseStudy[]
  hoveredId: string | null
  setHoveredId: (id: string | null) => void
  isLargestFrame: (item: CaseStudy) => boolean
  electricOutlineStyle: React.CSSProperties
}

// Paths: resolve from public folder
const BURGER_IMAGE = "/images/portfolio/Cadadian-Burger-Landing-Page.png"
const PRIME_IMAGE1 = "/images/portfolio/prime1.PNG"
const PRIME_IMAGE2 = "/images/portfolio/prime2.png"
const WAPMENTORS1 = "/images/portfolio/wapmentors1.png"
const WAPMENTORS2 = "/images/portfolio/wapmentors2.png"
const WAPMENTORS3 = "/images/portfolio/wapmentors3.png"

const CASE_STUDIES: CaseStudy[] = [
  // Grouped: "Prime", "Canadian"/"Burger", then "WapMentors"
  {
    id: "ecoprime-home",
    title: "Prime One Homepage",
    label: "Web Design",
    tag: "Industrial Services Website",
    gradient: "from-[#6ee7b7] via-[#3b82f6] to-[#312e81]",
    accentText: "text-white",
    layoutClass: "md:row-span-2",
    image: PRIME_IMAGE1,
  },
  {
    id: "ecoprime-detail",
    title: "Prime Two Features",
    label: "UI/UX Design",
    tag: "Corporate Landing Page",
    gradient: "from-[#dbeafe] via-[#a7f3d0] to-[#fef08a]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: PRIME_IMAGE2,
  },
  {
    id: "ecoprime-detail-2",
    title: "EcoPrime Highlight Section",
    label: "Web Design",
    tag: "Industrial Landing Page",
    gradient: "from-[#fde68a] via-[#fbbf24] to-[#f87171]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: PRIME_IMAGE1,
  },
  {
    id: "canadian-feature",
    title: "Canadian Feature Section",
    label: "UI Design",
    tag: "Restaurant Booking Platform",
    gradient: "from-[#fed7aa] via-[#f97316] to-[#fb7185]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: BURGER_IMAGE,
  },
  {
    id: "canadian-burger",
    title: "Canadian Burger Landing Page",
    label: "Web Design",
    tag: "Restaurant Website",
    gradient: "from-[#fed7aa] via-[#f97316] to-[#fb7185]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: BURGER_IMAGE,
  },
  {
    id: "canadian-bakery",
    title: "Canadian Bakery Website",
    label: "Web Design",
    tag: "Canadian Bakery Website",
    gradient: "from-[#fde68a] via-[#a7f3d0] to-[#3b82f6]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: BURGER_IMAGE,
  },
  // --- WapMentors new entries ---
  {
    id: "wapmentors-main",
    title: "WapMentors Main Platform",
    label: "Web Application",
    tag: "Mentorship Platform",
    gradient: "from-[#a7f3d0] via-[#3b82f6] to-[#fdba74]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: WAPMENTORS1,
  },
  {
    id: "wapmentors-dashboard",
    title: "WapMentors Dashboard",
    label: "UI Dashboard",
    tag: "Mentors Dashboard",
    gradient: "from-[#dbeafe] via-[#fbbf24] to-[#f87171]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: WAPMENTORS2,
  },
  {
    id: "wapmentors-book",
    title: "WapMentors Booking Page",
    label: "Booking System",
    tag: "Appointment Booking",
    gradient: "from-[#fde68a] via-[#a7f3d0] to-[#3b82f6]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: WAPMENTORS3,
  },
]

const slides: CaseStudy[][] = [
  CASE_STUDIES.slice(0, 3),
  CASE_STUDIES.slice(3, 6),
  CASE_STUDIES.slice(6, 9)
]

const electricOutlineStyle = {
  boxShadow:
    "0 4px 24px 0 rgba(80,0,255,0.15), 0 0 0 3px #a78bfa, 0 0 10px 3px #a5b4fc, 0 0 30px 3px #fdba74",
  animation:
    "electric-glow 1.2s linear infinite alternate",
}

const electricOutlineKeyframes = `
@keyframes electric-glow {
  0% {
    box-shadow:
      0 4px 24px 0 rgba(80,0,255,0.13),
      0 0 0 2px #a78bfa,
      0 0 6px 2px #a5b4fc,
      0 0 6px 2px #fdba74;
  }
  50% {
    box-shadow:
      0 8px 40px 0 rgba(253,186,116,0.20),
      0 0 0 3px #f97316,
      0 0 18px 4px #a5b4fc,
      0 0 48px 6px #a78bfa;
  }
  100% {
    box-shadow:
      0 4px 24px 0 rgba(80,0,255,0.13),
      0 0 0 2px #a78bfa,
      0 0 6px 2px #a5b4fc,
      0 0 6px 2px #fdba74;
  }
}
`

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    position: "absolute" as const,
  }),
  center: { x: 0, opacity: 1, position: "relative" as const },
  exit: (direction: number) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    position: "absolute" as const,
  }),
}

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoSlideInterval = 7500 // ms, slower than previous 4500
  const timerRef = useRef<number | null>(null)

  // Helper: for Ecoprime homepage feature (make as largest frame demo, like screenshot)
  const isLargestFrame = (item: CaseStudy) =>
    item.id === "ecoprime-home";

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      slideTo((current + 1) % slides.length, 1)
    }, autoSlideInterval)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  function slideTo(idx: number, slideDirection: number) {
    setDirection(slideDirection)
    setCurrent(idx)
  }
  function handlePrev() {
    slideTo((current - 1 + slides.length) % slides.length, -1)
  }
  function handleNext() {
    slideTo((current + 1) % slides.length, 1)
  }

  // Style for the icon buttons using --color-primary from global CSS vars
  const navBtnStyle: React.CSSProperties = {
    background: "var(--color-background)",
    color: "var(--color-primary)",
    border: "none",
    outline: "none",
    borderRadius: "9999px",
    padding: "0.6rem 0.83rem",
    fontSize: 22,
    boxShadow: "0 2px 8px rgb(31 122 63 / 9%)",
    transition: "box-shadow 0.18s, background 0.18s",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    opacity: 0.97,
  }

  return (
    <>
      {/* Electric glow keyframes, inject globally */}
      <style>
        {electricOutlineKeyframes}
        {`
        .portfolio-title,
        .portfolio-tag,
        .portfolio-label {
          transition:
            color 0.23s cubic-bezier(.4,0,.2,1),
            background 0.23s cubic-bezier(.4,0,.2,1),
            letter-spacing 0.23s cubic-bezier(.4,0,.2,1),
            box-shadow 0.23s cubic-bezier(.4,0,.2,1),
            text-shadow 0.23s cubic-bezier(.4,0,.2,1),
            border-radius 0.2s;
        }
        .group:hover .portfolio-title,
        .group:focus-within .portfolio-title {
          color: var(--color-accent);
          background: rgba(36,27,0,0.65);
          letter-spacing: 0.03em;
          box-shadow: 0 2px 12px 0 rgba(252,211,77,0.12);
          text-shadow: 0 2px 16px rgba(251,113,133,0.2), 0 0 2px #facc15;
          border-radius: 0.5rem;
        }
        .group:hover .portfolio-tag,
        .group:focus-within .portfolio-tag {
          color: #fff;
          background: linear-gradient(90deg, var(--color-accent) 20%, #f97316 80%);
          letter-spacing: 0.07em;
          text-shadow: 0 1px 6px rgba(252,211,77,0.8);
          padding: 0.18em 0.7em;
          border-radius: 0.5rem;
        }
        .group:hover .portfolio-label,
        .group:focus-within .portfolio-label {
          color: #facc15;
          background: rgba(17,24,39,0.70);
          box-shadow: 0 2px 8px 0 rgba(253,186,116,0.09);
          padding: 0.14em 0.55em;
          border-radius: 0.4rem;
          letter-spacing: 0.24em;
        }
        `}
      </style>
      <section
        id="portfolio"
        className="py-24"
        style={{ background: "var(--color-background)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-[0.2em] text-center mb-3 uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Case Studies
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-center leading-snug mb-10"
            style={{ color: "var(--color-text)" }}
          >
            Our Works Describes Us
          </h2>

          <div className="px-4 md:px-8">
            <Carousel className="relative">
              {/* AnimatePresence needed for framer-motion slide */}
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 140,
                      damping: 34,
                      mass: 1.0,
                    },
                    opacity: { duration: 0.38, ease: "easeInOut" }
                  }}
                  style={{ minHeight: '1px', width: "100%", position: "relative", }}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <CaseStudyGrid
                        data={slides[current]}
                        hoveredId={hoveredId}
                        setHoveredId={setHoveredId}
                        isLargestFrame={isLargestFrame}
                        electricOutlineStyle={electricOutlineStyle}
                      />
                    </CarouselItem>
                  </CarouselContent>
                </motion.div>
              </AnimatePresence>
              {/* Carousel controls as React Icons with --color-primary */}
              <button
                type="button"
                aria-label="Previous"
                onClick={handlePrev}
                style={{
                  ...navBtnStyle,
                  left: "-1.6rem",
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={handleNext}
                style={{
                  ...navBtnStyle,
                  right: "-1.6rem",
                }}
              >
                <FaChevronRight />
              </button>
            </Carousel>
          </div>

          <div className="mt-10 flex justify-center">
          </div>
        </div>
      </section>
    </>
  )
}
