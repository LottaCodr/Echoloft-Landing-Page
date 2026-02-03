import React, { useState } from 'react'
import { motion } from 'motion/react'

// FAQ type and data
type FAQItem = {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "How long does it take to build my website?",
        answer:
            "Most websites are completed within 7-14 business days. The exact timeline depends on the complexity of your requirements and how quickly you provide the necessary content and feedback.",
    },
    {
        question: "Do I need any technical skills to manage my website?",
        answer:
            "No! We build your website using a user-friendly content management system (CMS) that makes it easy for anyone to update content, add pages, and manage their website without any technical skills.",
    },
    {
        question: "What if I don't have a logo?",
        answer:
            "No problem! As part of your package, we'll design a professional logo for your business at no extra cost if you don't already have one.",
    },
    {
        question: "Can I sell products on my website?",
        answer:
            "Yes! We can add e-commerce functionality to your website, allowing you to sell products online. This may require an additional fee depending on the complexity of your online store.",
    },
    {
        question: "What happens after the first year?",
        answer:
            "After the first year, you'll need to renew your domain name and hosting. We'll notify you in advance and help you with the renewal process. The renewal cost is typically around ₦20,000-₦30,000 per year.",
    },
    {
        question: "Can I upgrade my website later?",
        answer:
            "Absolutely! We can add more features, pages, or functionality to your website as your business grows. Just contact us when you're ready to upgrade.",
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    return (
        <section
            id="faq"
            className="py-16"
            style={{ backgroundColor: "var(--color-background)" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: "var(--color-primary-dark)" }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto"
                        style={{ color: "var(--color-text-muted)" }}
                    >
                        Get answers to common questions about our affordable website packages
                    </p>
                </motion.div>
                <div className="max-w-4xl mx-auto">
                    <ul className="space-y-4" aria-label="Frequently asked questions">
                        {faqData.map((faq, idx) => {
                            const isOpen = openIndex === idx
                            return (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                >
                                    <div
                                        className={`faq-item rounded-2xl transition-shadow`}
                                        style={{
                                            background: isOpen
                                                ? "var(--color-background-muted)"
                                                : "var(--color-background)",
                                            boxShadow: isOpen
                                                ? "var(--shadow-lg)"
                                                : "var(--shadow-sm)",
                                            border: `1px solid ${isOpen ? "var(--color-primary)" : "var(--color-border)"
                                                }`
                                        }}
                                    >
                                        <button
                                            className="faq-question w-full text-left p-6 flex justify-between items-center focus:outline-none rounded-2xl transition-colors group"
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-panel-${idx}`}
                                            id={`faq-header-${idx}`}
                                            style={{
                                                background: "transparent",
                                                color: "var(--color-primary-dark)",
                                                fontWeight: 600,
                                                outline: isOpen ? `2px solid var(--color-primary)` : "none"
                                            }}
                                            onClick={() => handleToggle(idx)}
                                            onMouseOver={e => {
                                                e.currentTarget.style.background =
                                                    "var(--color-background-muted)"
                                            }}
                                            onMouseOut={e => {
                                                e.currentTarget.style.background = "transparent"
                                            }}
                                        >
                                            <span
                                                className="text-lg font-semibold"
                                                style={{
                                                    color: isOpen
                                                        ? "var(--color-primary)"
                                                        : "var(--color-secondary)",
                                                    transition: "color var(--duration-fast)"
                                                }}
                                            >
                                                {faq.question}
                                            </span>
                                            <svg
                                                className={`ml-4 h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                style={{
                                                    color: isOpen
                                                        ? "var(--color-primary)"
                                                        : "var(--color-text-muted)"
                                                }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                        <div
                                            className={`faq-answer px-6 pb-6 overflow-hidden transition-all duration-300 ${isOpen
                                                ? 'max-h-40 opacity-100 visible'
                                                : 'max-h-0 opacity-0 invisible'
                                                }`}
                                            id={`faq-panel-${idx}`}
                                            role="region"
                                            aria-labelledby={`faq-header-${idx}`}
                                            style={{
                                                color: "var(--color-text-muted)",
                                                fontSize: "1.0625rem"
                                            }}
                                        >
                                            {isOpen && (
                                                <p className="mt-2" style={{ color: "var(--color-text)" }}>
                                                    {faq.answer}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
