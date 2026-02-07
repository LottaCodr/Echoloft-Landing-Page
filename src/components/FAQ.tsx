import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

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
                No problem! As part of your package, we'll design a professional logo for your business at no extra cost if you don't already have one.
            </>
        ),
    },
    {
        question: "Does this package cover e-commerce?",
        answer: (
            <>
                No, in as much as we can make e-commerce websites, this package doesn’t include it.<br />
                This is just for small businesses
            </>
        ),
    },
    {
        question: "Can I sell products on my website?",
        answer: (
            <>
                Yes! If we add e-commerce functionality to your website, that can allow you to sell products online. However, this package doesn’t include it.<br />
                This is just for small businesses
            </>
        ),
    },
]

export default function FAQ() {
    return (
        <section id="faq" className="max-w-2xl mx-auto mt-16 mb-24 px-4">
            <h2 className="text-3xl text-[var(--color-primary)] md:text-4xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>
            <Accordion
                type="single"
                collapsible
                className="w-full space-y-3 "
            >
                {faqData.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-[var(--color-border)] rounded-xl bg-[var(--color-primary)] shadow-sm overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-medium px-4 py-2 focus:outline-none bg-[var(--color-primary)] text-white">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-100 px-4 pb-4 pt-2 leading-relaxed">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
