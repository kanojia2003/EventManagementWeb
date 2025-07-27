import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import galleryData from "../data/gallery.json";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../framer";

const GalleryRoute = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Navbar />
    <motion.section
      className="py-20 bg-gradient-to-br from-white via-gold/10 to-gold/30 mt-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 flex justify-center items-center gap-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <span className="text-black">Gallery</span>
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#D4AF37] bg-clip-text text-transparent">Categories</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {galleryData.map((cat, idx) => (
            <motion.div
              key={cat.category}
              className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">{cat.category}</h3>
              <Link
                to={`/gallery/${cat.category
                  .toLowerCase()
                  .replace(/\s+/g, "")}`}
                className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gold transition-colors duration-300"
              >
                View Gallery
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
    <Footer />
  </motion.div>
);

export default GalleryRoute;
