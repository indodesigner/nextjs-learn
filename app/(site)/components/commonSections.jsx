"use client";
// import Image from "next/image";
import Link from "next/link";
import BlogSection from "@/components/blogs";
import PlacesSection from "@/components/destinations/places";
import PackagesSection from "@/components/packages/packages";
import { motion } from "framer-motion";
import { useLanguage } from "/contexts/languageContext";

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
          <hr className="container border-neutral-300 dark:border-neutral-800 mt-8" />
        </>
      ) : null}

      {placeTypes != 0 ? (
        <>
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container bg-neutral-100 dark:bg-neutral-800 rounded-xl"
            id="packages"
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-4 text-center">
              Destination Categories
            </h4>
            <div className="grid grid-cols-1  xs:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
              {placeTypes &&
                placeTypes.map((item) => (
                  <Link
                    key={item._id}
                    href={`placeTypes/${item.slug}`}
                    className="bg-neutral-200 dark:bg-neutral-700 p-4 w-full flex justify-center rounded-xl hover:-translate-y-1 transition"
                  >
                    <h5 className="font-bold">{item.placeTypeName}</h5>
                  </Link>
                ))}
            </div>
          </motion.section>
          <hr className="container border-neutral-300 dark:border-neutral-800 mt-8" />
        </>
      ) : null}

      {secondSectionPackages != 0 ? (
        <>
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
          <hr className="container border-neutral-300 dark:border-neutral-800 mt-8" />
        </>
      ) : null}

      {businessPackages != 0 ? (
        <>
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
          <hr className="container border-neutral-300 dark:border-neutral-800 mt-8" />
        </>
      ) : null}

      {packages != 0 ? (
        <>
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
          <hr className="container border-neutral-300 dark:border-neutral-800 mt-8" />
        </>
      ) : null}
      {places != 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
        >
          <PlacesSection places={places} language={language} />
        </motion.section>
      ) : null}

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
