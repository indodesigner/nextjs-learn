"use client";
import { getSlides, getPackages, getFilters } from "/sanity/sanity-utils";
import BlogSection from "/components/blogs";
import PlacesSection from "/components/places";
import PackagesSection from "/components/packages";
import HeroCarousel from "/components/heroCarousel";
import { motion, AnimatePresence } from "framer-motion";

export default async function HomePage() {
  const slides = await getSlides();
  const packages = await getPackages(); //fetch packages from sanity query can be fount in (sanity/sanity-utils.js)

  // const packFilters = await getFilters();

  const trendingPackages = packages.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Trending");
  });

  const popularPackages = packages.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Popular");
  });

  const businessPackages = packages.filter((pack) => {
    return pack.category && pack.category.includes("Business");
  });

  const headings = ["Trending", "Popular", "Business", "All"];

  return (
    <div>
      <HeroCarousel slides={slides} />
      {trendingPackages != 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
          id="packages"
        >
          <PackagesSection packages={trendingPackages} heading={headings[0]} />
        </motion.section>
      ) : null}
      {popularPackages != 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
          id="packages"
        >
          <PackagesSection packages={popularPackages} heading={headings[1]} />
        </motion.section>
      ) : null}

      {businessPackages != 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
          id="packages"
        >
          <PackagesSection packages={businessPackages} heading={headings[2]} />
        </motion.section>
      ) : null}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
        id="packages"
      >
        <PackagesSection packages={packages} heading={headings[3]} />
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
