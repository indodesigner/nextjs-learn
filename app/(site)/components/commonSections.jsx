"use client";
import BlogSection from "@/components/blogsHomeSection";
import PlacesSection from "@/_sections/destinations/placesHomeSection";
import PackagesSection from "@/_sections/packages/packagesHomeSection";
import DestinationCategories from "@/components/destinationCategories";
import { useLanguage } from "/contexts/languageContext";
import GetInTouch from "@/components/getInTouch";
import Advertisement from "@/components/advertisement";
import FadeUp from "@/components/animations/fadeUp";

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

  return (
    <div>
      {firstSectionPackages?.length > 0 ? (
        <section className="container" id="packages">
          <FadeUp delay="0.3">
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
          </FadeUp>
        </section>
      ) : null}

      {secondSectionPackages?.length > 0 ? (
        <section className="container">
          <FadeUp delay="0.3">
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
          </FadeUp>
        </section>
      ) : null}

      {placeTypes != 0 ? (
        <section className="container" id="categories">
          <FadeUp delay="0.3">
            <DestinationCategories
              placeTypes={placeTypes}
              language={language}
            />
          </FadeUp>
        </section>
      ) : null}

      {businessPackages != 0 ? (
        <section className="container">
          <FadeUp delay="0.3">
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
          </FadeUp>
        </section>
      ) : null}

      {packages != 0 ? (
        <section className="container">
          <FadeUp delay="0.3">
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
          </FadeUp>
        </section>
      ) : null}

      <section className="container">
        <FadeUp delay="0.3">
          <Advertisement language={language} />
        </FadeUp>
      </section>

      {places != 0 ? (
        <section className="container">
          <FadeUp delay="0.3">
            <PlacesSection places={places} language={language} />
          </FadeUp>
        </section>
      ) : null}

      <section className="container">
        <FadeUp delay="0.3">
          <GetInTouch language={language} />
        </FadeUp>
      </section>

      <section className="container">
        <FadeUp delay="0.3">
          <BlogSection language={language} />
        </FadeUp>
      </section>
    </div>
  );
}
