import React from "react"
import { motion } from "motion/react"

type HeroProps = {
  onOpenBooking?: () => void
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-24 md:pt-28 pb-16 w-full min-h-screen flex items-center mb-8 md:mb-0"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #f3f0ff 100%)",
      }}
    >
      <div className="max-w-7xl min-h-screen flex items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Professional Websites for Small Businesses in Nigeria
            </h1>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Get a stunning, mobile-friendly website for just ₦120,000. Includes domain, hosting, design, and a free logo if you don't have one!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
                style={{
                  backgroundColor: "var(--color-primary)",
                  transition: "background-color var(--duration-normal)",
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = "var(--color-primary-dark)"}
                onMouseOut={e => e.currentTarget.style.backgroundColor = "var(--color-primary)"}
                onClick={() => onOpenBooking?.()}
              >
                Get Started Today
              </button>
              <button
                className="border-2 px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  backgroundColor: "transparent",
                  transition:
                    "background-color var(--duration-normal), color var(--duration-normal)",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.backgroundColor = "var(--color-primary)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
                onClick={() => {
                  if (typeof window === "undefined") return
                  const el = document.querySelector("#portfolio")
                  if (el) {
                    (el as HTMLElement).scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                See Examples
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile photo"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile photo"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1644152993066-9b9ee687930d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile photo"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://plus.unsplash.com/premium_photo-1693243528720-f93a4f700981?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile photo"
                />



              </div>
              <div className="ml-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Trusted by 500+ businesses in Nigeria
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="floating-animation">
              <div className="relative">
                <div
                  className="w-full h-96 rounded-3xl shadow-2xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
                  }}
                >
                  <div className="w-80 h-64 bg-white rounded-2xl shadow-xl p-4 transform rotate-3">
                    <div className="w-full h-full bg-gray-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-500">
                          yourbusiness.com
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div
                          className="h-4 rounded w-3/4"
                          style={{ backgroundColor: "var(--color-primary-light, #bbf7d0)" }}
                        ></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div
                          className="h-20 rounded-lg mt-4"
                          style={{
                            background:
                              "linear-gradient(90deg, #f0fdf4 0%, #f3f0ff 100%)",
                          }}
                        ></div>
                        <div className="flex space-x-2 mt-4">
                          <div
                            className="w-16 h-16 rounded-lg"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          ></div>
                          <div
                            className="w-16 h-16 rounded-lg"
                            style={{ backgroundColor: "var(--color-secondary, #0f172a)" }}
                          ></div>
                          <div
                            className="w-16 h-16 rounded-lg"
                            style={{ backgroundColor: "var(--color-accent)" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
