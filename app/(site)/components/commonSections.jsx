"use client";
import BlogSection from "@/components/blogsHomeSection";
import PlacesSection from "@/components/destinations/placesHomeSection";
import PackagesSection from "@/components/packages/packagesHomeSection";
import DestinationCategories from "@/components/destinationCategories";
import { useLanguage } from "/contexts/languageContext";
import GetInTouch from "@/components/getInTouch";
import Advertisement from "@/components/advertisement";
import { motion } from "framer-motion";

export default function CommonSections({
  placeTypes,
  packages,
  firstSectionPackages,
  secondSectionPackages,
  businessPackages,
  places,
}) {
  const { language } = useLanguage();
  const headings = [
    { id: "in", title: "India", titlejp: "インド" },
    { id: "jp", title: "Japan", titlejp: "日本" },
    { id: "bp", title: "Business Packages", titlejp: "仕事 パッケージ" },
    { id: "ap", title: "All Packages", titlejp: "全て パッケージ" },
  ];

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div>
      {firstSectionPackages?.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.5 },
          }}
        >
          <section className="container" id="packages">
            <PackagesSection
              packages={firstSectionPackages}
              heading={{
                id: headings[0].id,
                title:
                  language === "english"
                    ? headings[0].title
                    : headings[0].titlejp,
              }}
              language={language}
            />
          </section>
        </motion.div>
      ) : null}

      {secondSectionPackages?.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.5 },
          }}
        >
          <section className="container">
            <PackagesSection
              packages={secondSectionPackages}
              heading={{
                id: headings[1].id,
                title:
                  language === "english"
                    ? headings[1].title
                    : headings[1].titlejp,
              }}
              language={language}
            />
          </section>
        </motion.div>
      ) : null}

      {placeTypes != 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.5 },
          }}
        >
          <section className="container" id="categories">
            <DestinationCategories
              placeTypes={placeTypes}
              language={language}
            />
          </section>
        </motion.div>
      ) : null}

      {businessPackages != 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.5 },
          }}
        >
          <section className="container">
            <PackagesSection
              packages={businessPackages}
              heading={{
                id: headings[2].id,
                title:
                  language === "english"
                    ? headings[2].title
                    : headings[2].titlejp,
              }}
              language={language}
            />
          </section>
        </motion.div>
      ) : null}

      {packages != 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.5 },
          }}
        >
          <section className="container">
            <PackagesSection
              packages={packages}
              heading={{
                id: headings[3].id,
                title:
                  language === "english"
                    ? headings[3].title
                    : headings[3].titlejp,
              }}
              language={language}
            />
          </section>
        </motion.div>
      ) : null}

      <section className="container">
        <Advertisement language={language} />
      </section>

      {places != 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.5 },
          }}
        >
          <section className="container">
            <PlacesSection places={places} language={language} />
          </section>
        </motion.div>
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", delay: 0.5 },
        }}
      >
        <section className="container">
          <GetInTouch />
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", delay: 0.5 },
        }}
      >
        <section className="container">
          <BlogSection language={language} />
        </section>
      </motion.div>
    </div>
  );
}
