import {
  getSlidesIndia,
  getPackages,
  getPlaces,
  getPlaceTypes,
} from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import HeroCarousel from "@/components/heroCarousel";
import CommonSections from "@/components/commonSections";
import AboutIndia from "./aboutIndia";
import FadeUp from "@/components/animations/fadeUp";

export const metadata = {
  title:
    "Explore India's Wonders: Unbeatable Tour Packages & Cultural Journeys | Niko Travels",
  description:
    "Discover the magic of India with our curated tour packages. Immerse yourself in cultural splendors, historical marvels, and breathtaking landscapes. Book now for exclusive deals and expert-guided adventures. Your unforgettable journey through India begins here with Niko Travels",
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
      <HeroCarousel slides={slidesIndia} />
      <FadeUp delay="0.3">
        <AboutIndia />
      </FadeUp>
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
