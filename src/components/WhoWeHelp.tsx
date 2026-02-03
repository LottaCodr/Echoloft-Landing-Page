import React from 'react'
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    }
}

export default function WhoWeHelp() {
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
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaStore className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Retail Stores</h3>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaUtensils className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Restaurants & Cafes</h3>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaGraduationCap className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Schools & Tutors</h3>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaTools className="text-orange-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Service Providers</h3>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCamera className="text-yellow-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Photographers</h3>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaHeartbeat className="text-red-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Health & Wellness</h3>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaBriefcase className="text-indigo-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Professionals</h3>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-2xl border-2 border-gray-800 font-semibold transition-shadow duration-300 hover:shadow-2xl text-center relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#1f7a3f",
                            transition: { duration: 0.3 }
                        }}
                        style={{ borderColor: "rgb(31 41 55)" }}
                    >
                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaHandHoldingHeart className="text-pink-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Non-Profits</h3>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
