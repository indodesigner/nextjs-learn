"use client";
import { getSlides } from "/sanity/sanity-utils";
import BlogSection from "/components/blogs";
import PlacesSection from "/components/places";
import PackagesSection from "/components/packages";
import HeroCarousel from "/components/heroCarousel";
import { motion, AnimatePresence } from "framer-motion";

export default async function HomePage() {
  const slides = await getSlides();

  return (
    <div>
      <HeroCarousel slides={slides} />
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
        id="packages"
      >
        <PackagesSection />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
      >
        <PlacesSection />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
      >
        <BlogSection />
      </motion.section>
    </div>
  );
}
