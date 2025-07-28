import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Statistics from "../components/sections/Statistics";
import Services from "../components/sections/Services";
import FeaturedEvents from "../components/sections/FeaturedEvents";
import InfiniteScrollTestimonials from "../components/sections/InfiniteScrollTestimonials";
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
    <Statistics />
    <Services 
      showHeader={true}
      headerTitle="Our Premium Services"
      headerDescription="Discover our comprehensive range of event management services. From intimate gatherings to grand celebrations, we make every moment special."
    />
    <FeaturedEvents />
    <InfiniteScrollTestimonials />
    <Footer />
  </motion.div>
);

export default HomeRoute;
