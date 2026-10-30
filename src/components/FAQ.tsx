import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import { motion } from "motion/react"

type FAQItem = {
    question: string
    answer: string | React.ReactNode
}

const faqData: FAQItem[] = [
    {
        question: "How long does it take to build my website?",
        answer: (
            <>
                Website takes 4 working days to complete.
            </>
        ),
    },
    {
        question: "What if I don't have a logo?",
        answer: (
            <>
                No problem! As part of your package, we&apos;ll design a professional logo for your business at no extra cost if you don&apos;t already have one.
            </>
        ),
    },
    {
        question: "Does this package cover e-commerce?",
        answer: (
            <>
                No, in as much as we can make e-commerce websites, this package doesn&apos;t include it. This is just for small businesses.
            </>
        ),
    },
    {
        question: "Can I sell products on my website?",
        answer: (
            <>
                Yes! If we add e-commerce functionality to your website, that can allow you to sell products online. However, this package doesn&apos;t include it. This is just for small businesses.
            </>
        ),
    },
]

export default function FAQ() {
    return (
        <section id="faq" className="max-w-2xl mx-auto mt-16 mb-24 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8"
                    style={{ color: "var(--color-primary)" }}>
                    Frequently Asked Questions
                </h2>
            </motion.div>
            <Accordion
                type="single"
                collapsible
                className="w-full space-y-3"
            >
                {faqData.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-2 rounded-xl shadow-sm overflow-hidden"
                        style={{
                            borderColor: "var(--color-border)",
                            backgroundColor: "var(--color-background)",
                        }}
                    >
                        <AccordionTrigger
                            className="text-base md:text-lg font-semibold px-5 py-4 focus:outline-none text-left"
                            style={{ color: "var(--color-text)" }}
                        >
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent
                            className="px-5 pb-4 pt-0 leading-relaxed"
                            style={{ color: "var(--color-text-muted)" }}
                        >
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
