"use client";
import BlogSection from "/components/blogs";
import PlacesSection from "/components/places";
import PackagesSection from "/components/packages";
import HeroCarousel from "/components/heroCarousel";
import { motion } from "framer-motion";

export default async function CommonSections({
  slides,
  packages,
  trendingPackages,
  popularPackages,
  businessPackages,
  headings,
}) {
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
