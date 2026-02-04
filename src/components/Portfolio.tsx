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

export default function Portfolio() {
  return (
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
              className={`relative overflow-hidden rounded-3xl shadow-lg group ${item.layoutClass}`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.12), rgba(15,23,42,0.25))`,
              }}
            >
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
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">

        </div>
      </div>
    </section>
  )
}

