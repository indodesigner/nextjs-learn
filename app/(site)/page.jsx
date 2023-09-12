"use client";
import { getSlides, getPackages } from "/sanity/sanity-utils";
import BlogSection from "/components/blogs";
import PlacesSection from "/components/places";
import PackagesSection from "/components/packages";
import HeroCarousel from "/components/heroCarousel";
import { motion, AnimatePresence } from "framer-motion";

export default async function HomePage() {
  const slides = await getSlides();
  const packages = await getPackages(); //fetch packages from sanity query can be fount in (sanity/sanity-utils.js)

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
        <PackagesSection packages={packages} />
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
