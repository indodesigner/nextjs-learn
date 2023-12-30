"use client";
import BlogSection from "@/components/blogs";
import PlacesSection from "@/components/destinations/places";
import PackagesSection from "@/components/packages/packages";
import DestinationCategories from "@/components/destinationCategories";
// import { motion } from "framer-motion";
import { useLanguage } from "/contexts/languageContext";
import GetInTouch from "@/components/getInTouch";

export default function CommonSections({
  placeTypes,
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
        <>
          <section
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
          </section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {placeTypes != 0 ? (
        <>
          <section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container"
            id="categories"
          >
            <DestinationCategories
              placeTypes={placeTypes}
              language={language}
            />
          </section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {secondSectionPackages != 0 ? (
        <>
          <section
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
          </section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {businessPackages != 0 ? (
        <>
          <section
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
          </section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {packages != 0 ? (
        <>
          <section
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
          </section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      <section className="container">
        <GetInTouch />
        {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
      </section>

      {places != 0 ? (
        <section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
        >
          <PlacesSection places={places} language={language} />
        </section>
      ) : null}

      <section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
      >
        <BlogSection language={language} />
      </section>
    </div>
  );
}
