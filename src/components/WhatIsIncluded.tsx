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
                {/* Bento-style grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Domain */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-300 transition-shadow duration-300 hover:shadow-2xl col-span-1 md:col-span-3 row-span-1 flex flex-col relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(209 213 219)" }}
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <FaGlobe className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Domain Name</h3>
                        <p className="text-gray-600 mb-2 flex-1">
                            Get a custom domain name (e.g., yourbusiness.com.ng) that represents your brand professionally.
                        </p>
                        <div className="text-sm text-gray-500">1 year free registration</div>
                    </motion.div>
                    {/* Hosting */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-300 transition-shadow duration-300 hover:shadow-2xl col-span-1 md:col-span-3 row-span-1 flex flex-col relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(209 213 219)" }}
                    >
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <FaServer className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Web Hosting</h3>
                        <p className="text-gray-600 mb-2 flex-1">
                            Fast, reliable, and secure hosting with 99.9% uptime guarantee to keep your website online 24/7.
                        </p>
                        <div className="text-sm text-gray-500">1 year free hosting</div>
                    </motion.div>
                    {/* Custom Web Design WITH Free Logo Inside */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-300 transition-shadow duration-300 hover:shadow-2xl col-span-1 md:col-span-2 row-span-1 md:row-span-2 flex flex-col relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(209 213 219)" }}
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <FaPaintBrush className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Web Design</h3>
                        <p className="text-gray-600 mb-2 flex-1">
                            Beautiful, modern website design tailored to your business needs and brand identity.
                        </p>
                        <div className="text-sm text-gray-500 mb-3">Mobile-responsive design</div>
                        {/* Free Logo Design Included inside this card */}
                        <div className="flex items-center mt-4 bg-pink-50 rounded-lg px-3 py-2 border border-pink-200">
                            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                                <FaGift className="text-pink-600 text-lg" />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800">Free Logo Design</div>
                                <div className="text-xs text-gray-600">
                                    If your business doesn't have a logo, we'll design a professional one for you at no extra cost!
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Web Development */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-300 transition-shadow duration-300 hover:shadow-2xl col-span-1 md:col-span-2 row-span-1 flex flex-col relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(209 213 219)" }}
                    >
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                            <FaRocket className="text-orange-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                        <p className="text-gray-600 mb-2 flex-1">
                            Fully functional website with all the features your business needs to succeed online.
                        </p>
                    </motion.div>
                    {/* SEO */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-300 transition-shadow duration-300 hover:shadow-2xl col-span-1 md:col-span-2 row-span-1 flex flex-col relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(209 213 219)" }}
                    >
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                            <FaSearch className="text-yellow-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Optimization</h3>
                        <p className="text-gray-600 mb-2 flex-1">
                            Basic search engine optimization to help your website rank better on Google and attract more customers.
                        </p>
                    </motion.div>
                    {/* Mobile Friendly */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-300 transition-shadow duration-300 hover:shadow-2xl col-span-1 md:col-span-2 row-span-1 flex flex-col relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(209 213 219)" }}
                    >
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                            <FaMobileAlt className="text-red-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-Friendly Design</h3>
                        <p className="text-gray-600 mb-2 flex-1">
                            Your website will look great and work perfectly on all devices - phones, tablets, and computers.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
