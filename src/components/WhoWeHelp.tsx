import React, { useRef, useEffect, useState } from 'react'
import {
    FaStore,
    FaUtensils,
    FaGraduationCap,
    FaTools,
    FaCamera,
    FaHeartbeat,
    FaBriefcase,
    FaHandHoldingHeart
} from 'react-icons/fa';
import { motion } from 'motion/react';

// Card data for easier mapping
const CARDS = [
    {
        icon: <FaStore className="text-blue-600 text-2xl" />,
        dotIcon: FaStore,
        bg: "bg-blue-100",
        dotBg: "bg-blue-100",
        dotIconColor: "text-blue-700",
        dotIconColorActive: "text-blue-900",
        title: "Retail Stores",
    },
    {
        icon: <FaUtensils className="text-green-600 text-2xl" />,
        dotIcon: FaUtensils,
        bg: "bg-green-100",
        dotBg: "bg-green-100",
        dotIconColor: "text-green-700",
        dotIconColorActive: "text-green-900",
        title: "Restaurants & Cafes",
    },
    {
        icon: <FaGraduationCap className="text-purple-600 text-2xl" />,
        dotIcon: FaGraduationCap,
        bg: "bg-purple-100",
        dotBg: "bg-purple-100",
        dotIconColor: "text-purple-700",
        dotIconColorActive: "text-purple-900",
        title: "Schools & Tutors",
    },
    {
        icon: <FaTools className="text-orange-600 text-2xl" />,
        dotIcon: FaTools,
        bg: "bg-orange-100",
        dotBg: "bg-orange-100",
        dotIconColor: "text-orange-700",
        dotIconColorActive: "text-orange-900",
        title: "Service Providers",
    },
    {
        icon: <FaCamera className="text-yellow-600 text-2xl" />,
        dotIcon: FaCamera,
        bg: "bg-yellow-100",
        dotBg: "bg-yellow-100",
        dotIconColor: "text-yellow-700",
        dotIconColorActive: "text-yellow-900",
        title: "Photographers",
    },
    {
        icon: <FaHeartbeat className="text-red-600 text-2xl" />,
        dotIcon: FaHeartbeat,
        bg: "bg-red-100",
        dotBg: "bg-red-100",
        dotIconColor: "text-red-700",
        dotIconColorActive: "text-red-900",
        title: "Health & Wellness",
    },
    {
        icon: <FaBriefcase className="text-indigo-600 text-2xl" />,
        dotIcon: FaBriefcase,
        bg: "bg-indigo-100",
        dotBg: "bg-indigo-100",
        dotIconColor: "text-indigo-700",
        dotIconColorActive: "text-indigo-900",
        title: "Professionals",
    },
    {
        icon: <FaHandHoldingHeart className="text-pink-600 text-2xl" />,
        dotIcon: FaHandHoldingHeart,
        bg: "bg-pink-100",
        dotBg: "bg-pink-100",
        dotIconColor: "text-pink-700",
        dotIconColorActive: "text-pink-900",
        title: "Non-Profits",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    }
};

export default function WhoWeHelp() {
    // Responsive: Use a media query test for "mobile"
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function checkMobile() {
            setIsMobile(window.innerWidth < 768); // tailwind "md" breakpoint
        }
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Carousel state for mobile
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Autoplay logic (mobile-only)
    useEffect(() => {
        if (!isMobile) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setCurrent(0);
            return;
        }
        intervalRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % CARDS.length);
        }, 2500); // change slide every 2.5s
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [isMobile]);

    // Jump to a slide by dot click (mobile)
    const goTo = (i: number) => setCurrent(i);

    // Extracted color tokens from App.css (1–79): --color-primary (#1f7a3f), --color-border (#e2e8f0)
    const dotActiveStyle = {
        backgroundColor: "var(--color-primary)",
        border: "2px solid var(--color-primary)",
        boxShadow: "0 2px 6px 0 rgb(31 122 63 / 0.10)"
    };
    const dotInactiveStyle = {
        backgroundColor: "transparent",
        border: "2px solid var(--color-border)"
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our affordable website packages are perfect for small businesses across Nigeria
                    </p>
                </motion.div>
                {/* Carousel on mobile, grid on desktop+ */}
                {isMobile ? (
                    <div className="relative w-full max-w-xs mx-auto">
                        {/* The "carousel" motion card */}
                        <motion.div
                            key={current}
                            className="w-full"
                            initial={{ opacity: 0, scale: 0.96, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: -30 }}
                            transition={{ duration: 0.4, type: 'spring', damping: 28 }}
                        >
                            <div className="bg-white p-7 rounded-2xl border-2 border-gray-300 font-semibold transition-shadow duration-300 shadow-xl text-center relative overflow-hidden">
                                <div className={`w-16 h-16 ${CARDS[current].bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    {CARDS[current].icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{CARDS[current].title}</h3>
                            </div>
                        </motion.div>
                        {/* Dots below */}
                        <div className="flex justify-center gap-2 mt-5">
                            {CARDS.map(({ dotIcon: DotIcon, dotBg, dotIconColor, dotIconColorActive }, i) => {
                                const isActive = current === i;
                                return (
                                    <button
                                        key={i}
                                        className={`
                                            w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200
                                            focus:outline-none
                                            border
                                            ${dotBg}
                                            ${isActive ? '' : 'opacity-80'}
                                        `}
                                        /* We'll always show border, but style below will overlay when active/inactive */
                                        style={isActive ? dotActiveStyle : dotInactiveStyle}
                                        aria-label={`Go to slide ${i + 1}`}
                                        type="button"
                                        onClick={() => goTo(i)}
                                        tabIndex={0}
                                    >
                                        <span
                                            className={
                                                [
                                                    "flex items-center justify-center transition-transform duration-150",
                                                    isActive ? dotIconColorActive : dotIconColor,
                                                ].join(' ')
                                            }
                                            style={{
                                                opacity: isActive ? 1 : 0.67,
                                                transform: isActive ? "scale(1)" : "scale(0.85)",
                                                fontSize: "1.10rem",
                                                lineHeight: 1,
                                                // Ensures the icons have strong contrast (darker text on light bg).
                                            }}
                                        >
                                            <DotIcon />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {CARDS.map(({ icon, bg, title }, i) => (
                            <motion.div
                                key={title}
                                className="bg-white p-6 rounded-2xl border-2 border-gray-300 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "#1f7a3f",
                                    transition: { duration: 0.3 }
                                }}
                                style={{ borderColor: "rgb(209 213 219)" }}
                            >
                                <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    {icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
