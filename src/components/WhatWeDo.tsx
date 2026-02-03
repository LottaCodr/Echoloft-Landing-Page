import React from "react";
import { FaUserTie, FaBoxOpen, FaRegComments, FaRegClock } from "react-icons/fa";

const features = [
    {
        title: "Dedicated project manager",
        description:
            "We help small businesses get online without breaking their budget.",
        bg: "bg-[color:var(--color-primary)/10]",
        icon: <FaUserTie className="text-xl" aria-label="Dedicated project manager" />,
    },
    {
        title: "Maximum Customer attraction",
        description:
            "We help brands look credible and ready for growth with world-class SEO tools.",
        bg: "bg-red-100",
        icon: <FaBoxOpen className="text-xl" aria-label="Maximum Customer attraction" />,
    },
    {
        title: "Easy Usability",
        description:
            "We build websites that are easy to understand and use",
        bg: "bg-green-100",
        icon: <FaRegComments className="text-xl" aria-label="Easy Usability" />,
    },
    {
        title: "Up-to-date technology",
        description:
            "We design attractive and responsive website that works on all devices",
        bg: "bg-slate-100",
        icon: <FaRegClock className="text-xl" aria-label="Up-to-date technology" />,
    },
];

export default function WhatWeDo() {
    return (
        <section className="bg-[color:var(--color-background-muted)] py-[var(--spacing-24)]">
            {/* Header */}
            <div className="text-center mb-[var(--spacing-16)]">
                <p className="text-[var(--text-sm)] font-semibold tracking-widest text-[color:var(--color-primary)] mb-[var(--spacing-3)]">
                    WHAT WE DO
                </p>

                <h2 className="text-[var(--text-4xl)] font-bold text-[color:var(--color-text)] leading-tight">
                    People choose us because <br />
                    we serve the best for
                </h2>
            </div>

            {/* Features grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 px-[var(--spacing-8)]">
                {features.map((item, idx) => (
                    <div key={idx} className="flex gap-[var(--spacing-6)]">
                        <div
                            className={`w-14 h-14 rounded-[var(--radius-lg)] flex items-center justify-center ${item.bg}`}
                        >
                            {item.icon}
                        </div>

                        <div>
                            <h4 className="text-[var(--text-lg)] font-semibold text-[color:var(--color-text)] mb-[var(--spacing-2)]">
                                {item.title}
                            </h4>
                            <p className="text-[var(--text-base)] text-[color:var(--color-text-muted)] leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="max-w-6xl mx-auto mt-[var(--spacing-24)] mb-[var(--spacing-16)] border-t border-[color:var(--color-border)]" />

            {/* CTA */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-[var(--spacing-8)] px-[var(--spacing-8)]">
                <div>
                    <h3 className="text-[var(--text-2xl)] font-bold text-[color:var(--color-text)] mb-[var(--spacing-3)]">
                        Ready to launch your website today?
                    </h3>
                    <p className="text-[var(--text-base)] text-[color:var(--color-text-muted)] max-w-xl leading-relaxed">
                        With lots of unique blocks, you can easily build a page without coding.
                        Build your next landing page.
                    </p>
                </div>

                <button className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-[var(--radius-md)] transition-colors duration-[var(--duration-normal)]">
                    Book a Schedule
                </button>
            </div>
        </section>
    );
}
