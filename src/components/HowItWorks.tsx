import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function HowItWorks() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your professional website up and running in no time with our straightforward process
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <i className="fas fa-comments text-blue-600 text-3xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation</h3>
            <p className="text-gray-600">
              We'll discuss your business needs, goals, and preferences to create the perfect website for you.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">2</span>
              </div>
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <i className="fas fa-paint-brush text-purple-600 text-3xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Design & Development</h3>
            <p className="text-gray-600">
              Our team will design and build your website, keeping you updated throughout the process.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <i className="fas fa-rocket text-green-600 text-3xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch</h3>
            <p className="text-gray-600">
              We'll launch your website and provide training on how to manage and update it yourself.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
            Start Your Website Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
