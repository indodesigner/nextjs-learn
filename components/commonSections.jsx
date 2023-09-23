"use client";
import BlogSection from "/components/blogs";
import PlacesSection from "/components/places";
import PackagesSection from "/components/packages";
import HeroCarousel from "/components/heroCarousel";
import { motion } from "framer-motion";

export default async function CommonSections({
  slides,
  packages,
  firstSectionPackages,
  secondSectionPackages,
  businessPackages,
  places,
  headings,
}) {
  return (
    <div>
      <section className="p-4 md:px-8 md:py-20 lg:py-[86px] lg:px-16">
        <HeroCarousel slides={slides} />
      </section>

      {firstSectionPackages != 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
          id="packages"
        >
          <PackagesSection
            packages={firstSectionPackages}
            heading={headings[0]}
          />
        </motion.section>
      ) : null}
      {secondSectionPackages != 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
        >
          <PackagesSection
            packages={secondSectionPackages}
            heading={headings[1]}
          />
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
        <PlacesSection places={places} />
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
