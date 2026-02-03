import React from "react"


export default function Team() {
  return (
    <section id="team" className="py-24 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Meet the Team
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="p-6 border border-border rounded-lg"
            >
              <div className="h-32 bg-border rounded mb-4" />
              <p className="text-text-muted">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
