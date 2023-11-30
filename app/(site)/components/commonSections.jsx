"use client";
import BlogSection from "@/components/blogs";
import PlacesSection from "@/components/destinations/places";
import PackagesSection from "@/components/packages/packages";
import { motion } from "framer-motion";
import { useLanguage } from "/contexts/languageContext";

export default function CommonSections({
  packages,
  firstSectionPackages,
  secondSectionPackages,
  businessPackages,
  places,
}) {
  const { language } = useLanguage();
  const headings = ["Trending", "Popular", "Business", "All"];
  const headingsJp = ["インド", "日本", "仕事", "全て"];

  return (
    <div>
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
            heading={language === "english" ? headings[0] : headingsJp[0]}
            language={language}
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
            heading={language === "english" ? headings[1] : headingsJp[1]}
            language={language}
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
          <PackagesSection
            packages={businessPackages}
            heading={language === "english" ? headings[2] : headingsJp[2]}
            language={language}
          />
        </motion.section>
      ) : null}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
      >
        <PackagesSection
          packages={packages}
          heading={language === "english" ? headings[3] : headingsJp[3]}
          language={language}
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
      >
        {places != 0 ? (
          <PlacesSection places={places} language={language} />
        ) : null}
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
      >
        <BlogSection language={language} />
      </motion.section>
    </div>
  );
}
