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
                Most websites are completed within <b>7–14 business days</b>. Timelines depend on project complexity and how quickly content and feedback are provided.
            </>
        ),
    },
    {
        question: "Do I need any technical skills to manage my website?",
        answer: (
            <>
                <b>No technical skills required.</b> Your site is built with a user-friendly CMS, so you can make updates easily with no coding necessary.
            </>
        ),
    },
    {
        question: "What if I don't have a logo?",
        answer: (
            <>
                That’s not a problem! <b>We’ll design a professional logo for you at no extra cost</b> to help your business stand out from the start.
            </>
        ),
    },
    {
        question: "Can I sell products on my website?",
        answer: (
            <>
                Absolutely. <b>E-commerce features</b> can be added based on your needs and budget. Let us know your requirements and we’ll tailor a solution.
            </>
        ),
    },
    {
        question: "What happens after the first year?",
        answer: (
            <>
                <b>Annual renewal for hosting & domain</b> applies after your first year. We’ll remind you well in advance and help ensure your website stays online.
            </>
        ),
    },
    {
        question: "Can I upgrade my website later?",
        answer: (
            <>
                Of course. <b>Your website grows with your business</b>—you can add new features or pages at any time.
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
                type="multiple"
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
