import {
  getSlidesIndia,
  getPackages,
  getPlaces,
  getPlaceTypes,
} from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import SlidesSection from "@/components/slidesSection";
import CommonSections from "@/components/commonSections";
import AboutIndia from "./aboutIndia";

export const metadata = {
  title: "Niko Travels",
  description: "Explore with Niko Travels - India",
};

export default async function ExploreIndia() {
  const slidesIndia = await getSlidesIndia();
  const packs = await getPackages();
  const places = await getPlaces();
  const placeTypes = await getPlaceTypes();

  const allPackages = packs.filter(
    (pack) => pack.country && pack.country.includes("India")
  );

  const trendingPackages = allPackages.filter((pack) => pack.isTrending);

  const businessPackages = allPackages.filter((pack) => pack.isBusiness);

  const placesIndian = places.filter(
    (pack) => pack.country && pack.country.includes("India")
  );

  return (
    <div>
      <SlidesSection slides={slidesIndia} />
      <AboutIndia />
      <CommonSections
        placeTypes={placeTypes}
        packages={allPackages}
        firstSectionPackages={trendingPackages}
        secondSectionPackages={null}
        businessPackages={businessPackages}
        places={placesIndian}
      />
      <GetCountry country={null} />
    </div>
  );
}

export const revalidate = 10;
