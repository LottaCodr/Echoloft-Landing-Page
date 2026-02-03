import React from "react"


export default function MissionVision() {
  return (
    <section id="mission" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center">
        <div className="p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-text mb-3">
            Our Mission
          </h3>
          <p className="text-text-muted">
            Empower businesses with reliable, scalable digital products.
          </p>
        </div>

        <div className="p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-text mb-3">
            Our Vision
          </h3>
          <p className="text-text-muted">
            Become Africa’s most trusted digital partner.
          </p>
        </div>
      </div>
    </section>
  )
}
