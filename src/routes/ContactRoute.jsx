import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const ContactRoute = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Navbar />
    <Contact />
    <Footer />
  </motion.div>
);

export default ContactRoute;
