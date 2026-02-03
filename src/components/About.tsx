import React from "react"


export default function About() {
  return (
    <section id="about" className="py-24 bg-background-muted">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-text mb-4">
            Across Nigeria
          </h2>
          <p className="text-text-muted text-lg">
            Millions of small businesses rely on affordable digital solutions
            to scale sustainably.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 bg-border rounded-lg" />
          <div className="h-40 bg-border rounded-lg" />
        </div>
      </div>
    </section>
  )
}
