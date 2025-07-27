import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Footer from "../components/layout/Footer";

const HomeRoute = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Footer />
  </motion.div>
);

export default HomeRoute;
