import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";

const TestimonialsRoute = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Navbar />
    <Testimonials />
    <Footer />
  </motion.div>
);

export default TestimonialsRoute;
