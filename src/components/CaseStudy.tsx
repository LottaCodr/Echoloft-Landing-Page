import React from "react"

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

export function CaseStudyGrid({
    data,
    hoveredId,
    setHoveredId,
    isLargestFrame,
    electricOutlineStyle,
}: Props) {
    // Find the index of the first card that would be "big" according to isLargestFrame
    // If none, force the first card to be big
    let bigIndex = data.findIndex(isLargestFrame)
    if (bigIndex === -1) {
        bigIndex = 0
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 auto-rows-[220px] md:auto-rows-[260px]">
            {data.map((item, i) => {
                // For each card, big if:
                // -- It's the "isLargestFrame" by data rule, or if none were big, the first one
                const isBig = (bigIndex >= 0 && i === bigIndex)

                // Compose layoutClass: if isBig, append "md:row-span-2"
                const layoutClass = isBig
                    ? (
                        item.layoutClass && !item.layoutClass.includes("md:row-span-2")
                            ? item.layoutClass + " md:row-span-2"
                            : item.layoutClass || "md:row-span-2"
                    )
                    : (
                        item.layoutClass?.replace(/\bmd:row-span-2\b/g, "").trim() ?? ""
                    )

                // Determine if this card is hovered/focused
                const isHovered = hoveredId === item.id;

                return (
                    <article
                        key={item.id}
                        className={`relative overflow-hidden rounded-3xl shadow-xl group transition-shadow duration-300 ease-out transform group-hover:shadow-2xl hover:scale-[1.035] hover:-translate-y-1 ${layoutClass}`}
                        style={{
                            backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.12), rgba(15,23,42,0.25)), url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition:
                                "box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1)",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        tabIndex={0}
                        onFocus={() => setHoveredId(item.id)}
                        onBlur={() => setHoveredId(null)}
                        aria-label={`Case Study: ${item.title}`}
                    >
                        {/* Electric outline */}
                        <div
                            className="absolute inset-0 pointer-events-none rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                            style={electricOutlineStyle}
                        />

                        {/* Hover image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity transition-transform duration-700 z-10 pointer-events-none ${
                                isHovered
                                    ? "opacity-100 scale-105"
                                    : "opacity-0 scale-100"
                            }`}
                            aria-hidden="true"
                            draggable={false}
                            style={{
                                willChange: "transform, opacity, objectPosition",
                                objectPosition: isBig && isHovered ? "top" : "center",
                            }}
                        />

                        {/* Overlays */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                        />
                        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-6 md:p-7 z-30">
                            <div className="flex-1" />
                            <div className={`space-y-1 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
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
                )
            })}
        </div>
    )
}
