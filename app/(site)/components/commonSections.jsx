"use client";
import BlogSection from "@/components/blogs";
import PlacesSection from "@/components/destinations/placesHomeSection";
import PackagesSection from "@/components/packages/packagesHomeSection";
import DestinationCategories from "@/components/destinationCategories";
import { useLanguage } from "/contexts/languageContext";
import GetInTouch from "@/components/getInTouch";
import Advertisement from "@/components/advertisement";

export default function CommonSections({
  placeTypes,
  packages,
  firstSectionPackages,
  secondSectionPackages,
  businessPackages,
  places,
}) {
  const { language } = useLanguage();
  const headings = ["India", "Japan", "Business", "All"];
  const headingsJp = ["インド", "日本", "仕事", "全て"];

  return (
    <div>
      {firstSectionPackages != 0 ? (
        <>
          <section className="container" id="packages">
            <PackagesSection
              packages={firstSectionPackages}
              heading={language === "english" ? headings[0] : headingsJp[0]}
              language={language}
            />
          </section>
        </>
      ) : null}

      {placeTypes != 0 ? (
        <>
          <section className="container" id="categories">
            <DestinationCategories
              placeTypes={placeTypes}
              language={language}
            />
          </section>
        </>
      ) : null}

      {secondSectionPackages != 0 ? (
        <>
          <section className="container">
            <PackagesSection
              packages={secondSectionPackages}
              heading={language === "english" ? headings[1] : headingsJp[1]}
              language={language}
            />
          </section>
        </>
      ) : null}

      {businessPackages != 0 ? (
        <>
          <section className="container">
            <PackagesSection
              packages={businessPackages}
              heading={language === "english" ? headings[2] : headingsJp[2]}
              language={language}
            />
          </section>
        </>
      ) : null}

      {packages != 0 ? (
        <>
          <section className="container">
            <PackagesSection
              packages={packages}
              heading={language === "english" ? headings[3] : headingsJp[3]}
              language={language}
            />
          </section>
        </>
      ) : null}

      <section className="container">
        <Advertisement language={language} />
      </section>

      {places != 0 ? (
        <section className="container">
          <PlacesSection places={places} language={language} />
        </section>
      ) : null}

      <section className="container">
        <GetInTouch />
      </section>

      <section className="container">
        <BlogSection language={language} />
      </section>
    </div>
  );
}
