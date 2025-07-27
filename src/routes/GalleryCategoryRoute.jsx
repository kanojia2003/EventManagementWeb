import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import galleryData from "../data/gallery.json";
import { fadeInUp, staggerContainer } from "../framer";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const GalleryCategoryRoute = () => {
  const { category } = useParams();
  const categoryData = galleryData.find(
    (item) =>
      item.category.toLowerCase().replace(/\s+/g, "") ===
      category.toLowerCase().replace(/\s+/g, "")
  );

  if (!categoryData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <div className="text-center py-20">
          No images found for this category.
        </div>
        <Footer />
      </motion.div>
    );
  }

  return (
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
          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            {galleryData.map((cat) => (
              <motion.div
                key={cat.category}
                whileHover={{ scale: 1.12, boxShadow: "0 4px 24px rgba(212,175,55,0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ display: "inline-block" }}
              >
                <Link
                  to={`/gallery/${cat.category.toLowerCase().replace(/\s+/g, "")}`}
                  className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-gold text-lg tracking-wide
                    ${cat.category === categoryData.category
                      ? "bg-gradient-to-r from-yellow-400 via-gold to-yellow-500 text-black border-gold scale-105"
                      : "bg-white text-gold border-gold hover:bg-gradient-to-r hover:from-yellow-300 hover:via-gold hover:to-yellow-400 hover:text-black"}
                  `}
                  style={{ minWidth: "120px", textAlign: "center" }}
                >
                  {cat.category}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            {categoryData.category}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            {categoryData.images.map((img, idx) => (
              <motion.div
                key={img}
                className="overflow-hidden rounded-lg shadow-lg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.img
                  src={img}
                  alt={`${categoryData.category} event ${idx + 1}`}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  initial={{ filter: "grayscale(0.5)" }}
                  whileHover={{ filter: "grayscale(0)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </motion.div>
  );
};

export default GalleryCategoryRoute;
