import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Services from "../components/sections/Services";
import Footer from "../components/layout/Footer";

const ServicesRoute = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Navbar />
    <Services />
    <Footer />
  </motion.div>
);

export default ServicesRoute;
