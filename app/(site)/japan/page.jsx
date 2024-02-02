import {
  getSlidesJapan,
  getPackages,
  getPlaces,
  getPlaceTypes,
} from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import HeroCarousel from "@/components/heroCarousel";
import CommonSections from "@/components/commonSections";
import AboutJapan from "./aboutJapan";

export const metadata = {
  title: "Niko Travels",
  description: "Explore with Niko Travels - Japan",
};

export default async function ExploreJapan() {
  const slidesJapan = await getSlidesJapan();
  const packs = await getPackages();
  const places = await getPlaces();
  const placeTypes = await getPlaceTypes();

  const allPackages = packs.filter(
    (pack) => pack.country && pack.country.includes("Japan")
  );

  const trendingPackages = allPackages.filter((pack) => pack.isTrending);

  const businessPackages = allPackages.filter((pack) => pack.isBusiness);

  const placesJapan = places.filter(
    (pack) => pack.country && pack.country.includes("Japan")
  );

  return (
    <div>
      <HeroCarousel slides={slidesJapan} />
      <AboutJapan />
      <CommonSections
        placeTypes={placeTypes}
        packages={allPackages}
        firstSectionPackages={null}
        secondSectionPackages={trendingPackages}
        businessPackages={businessPackages}
        places={placesJapan}
      />
      <GetCountry country={null} />
    </div>
  );
}

export const revalidate = 10;
