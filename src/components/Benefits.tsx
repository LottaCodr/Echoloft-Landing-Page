import React from 'react'
import { FaUsers, FaCreditCard, FaChartLine, FaClock, FaShareAlt, FaChartBar } from 'react-icons/fa';
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function Benefits() {
    return (
        <section id="benefits" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Your Business Needs a Website</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        In today's digital world, a professional website is essential for small businesses in Nigeria
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <FaUsers className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Reach More Customers</h3>
                        <p className="text-gray-600">Your website works 24/7 to attract new customers, even while you sleep. Expand your reach beyond your local area.</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <FaCreditCard className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Increase Sales</h3>
                        <p className="text-gray-600">A professional website builds trust and credibility, making customers more likely to buy from you.</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <FaChartLine className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Compete with Big Brands</h3>
                        <p className="text-gray-600">A well-designed website levels the playing field, allowing you to compete with larger businesses.</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                            <FaClock className="text-orange-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Save Time</h3>
                        <p className="text-gray-600">Answer common customer questions automatically, freeing up your time to focus on your business.</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                            <FaShareAlt className="text-yellow-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Easy to Share</h3>
                        <p className="text-gray-600">Share your website link on social media, WhatsApp, and business cards to promote your business effortlessly.</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-8 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                            <FaChartBar className="text-red-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Track Your Success</h3>
                        <p className="text-gray-600">Monitor your website traffic and customer behavior to make informed business decisions.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
