import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";
import { fadeInUp, staggerContainer } from "../framer";

const TestimonialsRoute = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Navbar />
    
    {/* Hero Section */}
    <motion.section
      className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 border border-gold/20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-gold/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="text-white">Client </span>
            <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Hear what our clients say about their experiences with us. 
            Real stories, genuine feedback, and unforgettable memories shared.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">1000+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">4.9</div>
                <div className="text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">98%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    <Testimonials />
    <Footer />
  </motion.div>
);

export default TestimonialsRoute;
