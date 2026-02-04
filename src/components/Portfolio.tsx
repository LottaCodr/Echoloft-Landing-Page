import React from "react"

type CaseStudy = {
  id: string
  title: string
  label: string
  tag: string
  gradient: string
  accentText: string
  layoutClass: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aura-skin",
    title: "Aura Skincare Website",
    label: "Web Design",
    tag: "Concept UI/UX",
    gradient: "from-[#fed7aa] via-[#f97316] to-[#fb7185]",
    accentText: "text-[#0f172a]",
    layoutClass: "md:row-span-2",
  },
  {
    id: "abs-snacks",
    title: "EchoLoft Brand Identity",
    label: "Logo Design",
    tag: "ABS Snack Packaging",
    gradient: "from-[#4c1d95] via-[#7c3aed] to-[#22c55e]",
    accentText: "text-white",
    layoutClass: "",
  },
  {
    id: "llm-live",
    title: "LLM Live Website",
    label: "Web Development",
    tag: "Gradient Landing Page",
    gradient: "from-[#f97316] via-[#ec4899] to-[#6366f1]",
    accentText: "text-white",
    layoutClass: "",
  },
  {
    id: "noble-org",
    title: "Noble Org Website",
    label: "Web Development",
    tag: "Magazine Mockup",
    gradient: "from-[#22c55e] via-[#06b6d4] to-[#facc15]",
    accentText: "text-[#0f172a]",
    layoutClass: "",
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
  return (
    <>
      {/* Electric glow keyframes, inject globally */}
      <style>{electricOutlineKeyframes}</style>
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
            Our works describe why we
            <br className="hidden sm:block" /> are the best in the business
          </h2>

          <div className="grid gap-6 md:grid-cols-2 auto-rows-[220px] md:auto-rows-[260px]">
            {CASE_STUDIES.map((item) => (
              <article
                key={item.id}
                // Added tailwind and inline style effects for hover
                className={`relative overflow-hidden rounded-3xl shadow-xl group transition-shadow duration-300 ease-out transform group-hover:shadow-2xl hover:scale-[1.035] hover:-translate-y-1 ${item.layoutClass}`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.12), rgba(15,23,42,0.25))`,
                  transition: 'box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1)',
                  cursor: 'pointer'
                }}
              >
                {/* Electric "neon" animated outline on hover */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={electricOutlineStyle}
                />

                {/* Image / artwork placeholder */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--color-background) 0%, rgba(15,23,42,0.02) 20%), linear-gradient(135deg, var(--color-background) 0%, rgba(15,23,42,0.02) 40%), linear-gradient(135deg, var(--color-background) 0%, rgba(15,23,42,0.02) 60%)`,
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Subtle glass overlay for content area */}
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-7">
                  <div className="flex-1" />

                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                      {item.label}
                    </p>
                    <h3
                      className={`text-lg md:text-xl font-semibold ${item.accentText}`}
                    >
                      {item.tag}
                    </h3>
                    <p className="text-sm font-medium text-white/90">
                      {item.title}
                    </p>
                  </div>
                </div>
                {/* Hover animated overlay for effect */}
                <div className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"
                  style={{
                    background: 'linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.06) 100%)'
                  }}
                />
                {/* Animated subtle lift highlight (like moving window) */}
                <div className="pointer-events-none absolute top-0 left-0 w-full h-1/3 bg-white/10 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md z-10" />
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">

          </div>
        </div>
      </section>
    </>
  )
}
