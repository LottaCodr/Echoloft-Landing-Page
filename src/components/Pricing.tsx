import React from "react"


export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background-muted">
      <div className="
        max-w-md mx-auto
        bg-background
        p-10
        rounded-xl
        shadow-lg
        text-center
      ">
        <h2 className="text-4xl font-bold text-text mb-2">
          ₦130,000
        </h2>
        <p className="text-text-muted mb-6">
          Complete Website Package
        </p>

        <button className="
          bg-primary text-white
          px-6 py-3
          rounded-md
          shadow-md
          transition
          duration-normal
          ease-standard
          hover:bg-primary-dark
        ">
          Get Started
        </button>
      </div>
    </section>
  )
}
