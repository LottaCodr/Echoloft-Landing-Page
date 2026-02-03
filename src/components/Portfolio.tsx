import React from "react"


export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-text text-center mb-12">
          Our Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div
              key={i}
              className="h-48 bg-border rounded-lg shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
