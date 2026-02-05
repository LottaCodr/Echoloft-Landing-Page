import React, { useState } from "react"

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

// Fix the path: prepending slash so it resolves from public folder
const BURGER_IMAGE = "/images/portfolio/Cadadian-Burger-Landing-Page.png"

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "canadian-burger",
    title: "Canadian Burger Landing Page",
    label: "Web Design",
    tag: "Restaurant Website",
    gradient: "from-[#fed7aa] via-[#f97316] to-[#fb7185]",
    accentText: "text-[#0f172a]",
    layoutClass: "md:row-span-2",
    image: BURGER_IMAGE,
  },
  // Example placeholder for other items; real paths and details should reflect real portfolio images.
  {
    id: "french-bistro",
    title: "French Bistro Promo",
    label: "UI Design",
    tag: "Landing Page Visual",
    gradient: "from-[#4c1d95] via-[#7c3aed] to-[#22c55e]",
    accentText: "text-white",
    layoutClass: "",
    image: BURGER_IMAGE,
  },
  {
    id: "street-food",
    title: "Street Food Campaign",
    label: "Marketing Design",
    tag: "Web Banner UI",
    gradient: "from-[#f97316] via-[#ec4899] to-[#6366f1]",
    accentText: "text-white",
    layoutClass: "",
    image: BURGER_IMAGE,
  },
  {
    id: "classic-diner",
    title: "Classic Diner Homepage",
    label: "Web Design",
    tag: "Homepage Mockup",
    gradient: "from-[#22c55e] via-[#06b6d4] to-[#facc15]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
    image: BURGER_IMAGE,
  },
]

// Electric outline/animation styles using Tailwind + @layer or a custom style below for demo
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

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Helper to check if the article is the largest frame
  const isLargestFrame = (item: CaseStudy) =>
    item.id === "canadian-burger"; // Based on "md:row-span-2"

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

          <div className="grid gap-6 md:grid-cols-2 auto-rows-[220px] md:auto-rows-[260px]">
            {CASE_STUDIES.map((item) => {
              const isBig = isLargestFrame(item);
              return (
                <article
                  key={item.id}
                  className={`relative overflow-hidden rounded-3xl shadow-xl group transition-shadow duration-300 ease-out transform group-hover:shadow-2xl hover:scale-[1.035] hover:-translate-y-1 ${item.layoutClass}`}
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.12), rgba(15,23,42,0.25)), url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: 'box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  tabIndex={0}
                  onFocus={() => setHoveredId(item.id)}
                  onBlur={() => setHoveredId(null)}
                  aria-label={`Case Study: ${item.title}`}
                >
                  {/* Electric "neon" animated outline on hover */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={electricOutlineStyle}
                  />

                  {/* On hover: display image as a visible img, on non-hover just a background */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity transition-transform duration-700 z-10 pointer-events-none ${
                      hoveredId === item.id
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                    aria-hidden="true"
                    draggable={false}
                    style={{
                      willChange: "transform, opacity, objectPosition",
                      objectPosition:
                        isBig && hoveredId === item.id
                          ? "top"
                          : "center"
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                  />

                  {/* Glass darkener for readability */}
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 md:p-7 z-30">
                    <div className="flex-1" />
                    <div className="space-y-1">
                      <p className="portfolio-label text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                        {item.label}
                      </p>
                      <h3
                        className={`portfolio-tag text-lg md:text-xl font-semibold ${item.accentText}`}
                      >
                        {item.tag}
                      </h3>
                      <p className="portfolio-title text-sm font-medium text-white/90">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  {/* Optional hover overlays and highlights removed as per prompt */}
                </article>
              )
            })}
          </div>

          <div className="mt-10 flex justify-center">
          </div>
        </div>
      </section>
    </>
  )
}
