import React from 'react'
import { FaGlobe, FaServer, FaPaintBrush, FaRocket, FaSearch, FaMobileAlt, FaGift } from 'react-icons/fa';
import { motion } from 'motion/react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const includedFeatures = [
    {
        icon: <FaGlobe className="text-blue-600 text-2xl" />,
        bg: "bg-blue-100",
        title: "Professional Domain Name",
        description: (
            <>
                Get a custom domain name (e.g., yourbusiness.com.ng) that represents your brand professionally.
            </>
        ),
        note: <div className="text-sm text-gray-500">1 year free registration</div>,
        className: "border-gray-300 md:col-span-3",
        hoverBorder: "#1f7a3f",
        borderColor: "rgb(209 213 219)"
    },
    {
        icon: <FaServer className="text-purple-600 text-2xl" />,
        bg: "bg-purple-100",
        title: "Secure Web Hosting",
        description: (
            <>
                Fast, reliable, and secure hosting with 99.9% uptime guarantee to keep your website online 24/7.
            </>
        ),
        note: <div className="text-sm text-gray-500">1 year free hosting</div>,
        className: "border-gray-300 md:col-span-3",
        hoverBorder: "#1f7a3f",
        borderColor: "rgb(209 213 219)"
    },
    {
        icon: <FaPaintBrush className="text-green-600 text-2xl" />,
        bg: "bg-green-100",
        title: "Custom Web Design",
        description: (
            <>
                Beautiful, modern website design tailored to your business needs and brand identity.
            </>
        ),
        note: <div className="text-sm text-gray-500 mb-3">Mobile-responsive design</div>,
        className: "border-gray-300 md:col-span-2",
        hoverBorder: "#1f7a3f",
        borderColor: "rgb(209 213 219)"
    },
    {
        icon: <FaGift className="text-pink-600 text-2xl" />,
        bg: "bg-pink-100",
        title: "Free Logo Design",
        description: (
            <>
                If your business doesn't have a logo, we'll design a professional one for you at no extra cost!
            </>
        ),
        note: null,
        className: "border-pink-200 md:col-span-2",
        hoverBorder: "#e879f9",
        borderColor: "rgb(251 207 232)"
    },
    {
        icon: <FaRocket className="text-orange-600 text-2xl" />,
        bg: "bg-orange-100",
        title: "Web Development",
        description: (
            <>
                Fully functional website with all the features your business needs to succeed online.
            </>
        ),
        note: null,
        className: "border-gray-300 md:col-span-2",
        hoverBorder: "#1f7a3f",
        borderColor: "rgb(209 213 219)"
    },
    {
        icon: <FaSearch className="text-yellow-600 text-2xl" />,
        bg: "bg-yellow-100",
        title: "SEO Optimization",
        description: (
            <>
                Basic search engine optimization to help your website rank better on Google and attract more customers.
            </>
        ),
        note: null,
        className: "border-gray-300 md:col-span-2",
        hoverBorder: "#1f7a3f",
        borderColor: "rgb(209 213 219)"
    },
    {
        icon: <FaMobileAlt className="text-red-600 text-2xl" />,
        bg: "bg-red-100",
        title: "Mobile-Friendly Design",
        description: (
            <>
                Your website will look great and work perfectly on all devices - phones, tablets, and computers.
            </>
        ),
        note: null,
        className: "border-gray-300 md:col-span-2",
        hoverBorder: "#1f7a3f",
        borderColor: "rgb(209 213 219)"
    },
];

export default function WhatIsIncluded() {
    return (
        <section id='services' className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What's Included in Your ₦120,000 Package
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything your small business needs to establish a professional online presence
                    </p>
                </motion.div>
                {/* Maintains Bento-style grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {includedFeatures.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            className={`bg-white p-8 rounded-2xl border-2 transition-shadow duration-300 hover:shadow-2xl col-span-1 row-span-1 flex flex-col relative overflow-hidden ${feat.className}`}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                borderColor: feat.hoverBorder,
                                transition: { duration: 0.3 }
                            }}
                            style={{ borderColor: feat.borderColor }}
                        >
                            <div className={`w-16 h-16 ${feat.bg} rounded-full flex items-center justify-center mb-6`}>
                                {feat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feat.title}</h3>
                            <p className="text-gray-600 mb-2 flex-1">
                                {feat.description}
                            </p>
                            {feat.note}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
