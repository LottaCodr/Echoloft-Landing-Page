import React from 'react'
import { motion } from 'motion/react'

type CTAProps = {
    onOpenBooking?: () => void
    onOpenContact?: () => void
}

export default function CTA({ onOpenBooking, onOpenContact }: CTAProps) {
    return (
        <section
            className="py-16"
            style={{
                background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
            }}
        >
            <motion.div
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Grow Your Business Online?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto"
                    style={{ color: "var(--color-background-muted)" }}>
                    Get your professional website for just ₦120,000 and start attracting more customers today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
                        style={{
                            backgroundColor: "#fff",
                            color: "var(--color-primary)",
                            transition: "background-color var(--duration-normal), color var(--duration-normal)"
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.backgroundColor = "var(--color-background-muted)";
                            e.currentTarget.style.color = "var(--color-primary-dark)";
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.backgroundColor = "#fff";
                            e.currentTarget.style.color = "var(--color-primary)";
                        }}
                        onClick={() => onOpenBooking?.()}
                    >
                        Get Your Website Now
                    </button>
                    <button
                        className="border-2 px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
                        style={{
                            borderColor: "#fff",
                            color: "#fff",
                            backgroundColor: "transparent",
                            transition: "background-color var(--duration-normal), color var(--duration-normal)"
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.backgroundColor = "#fff";
                            e.currentTarget.style.color = "var(--color-primary)";
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#fff";
                        }}
                        onClick={() => onOpenContact?.()}
                    >
                        Contact Us
                    </button>
                </div>
            </motion.div>
        </section>
    )
}
