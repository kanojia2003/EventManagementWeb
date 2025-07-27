import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Footer from "../components/layout/Footer";

const AboutRoute = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Navbar />
    <About />
    <Footer />
  </motion.div>
);

export default AboutRoute;
