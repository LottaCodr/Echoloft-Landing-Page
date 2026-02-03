import React from "react"

const features = [
  "Dedicated Support",
  "Fast Delivery",
  "Scalable Architecture",
  "Modern Technology",
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why people choose us
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-900"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
