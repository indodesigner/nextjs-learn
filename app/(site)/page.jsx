import {
  getSlides,
  getPackages,
  getPlaces,
  getPlaceTypes,
} from "/sanity/sanity-utils";
import HeroCarousel from "@/components/heroCarousel";
import CommonSections from "@/components/commonSections";
import GetCountry from "@/components/getCountry";

export default async function HomePage() {
  const slides = await getSlides();
  const packages = await getPackages(); //fetch packages from sanity query can be fount in (sanity/sanity-utils.js)
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const placeTypes = await getPlaceTypes();

  const indianPackages = packages.filter((pack) => {
    return pack.country && pack.country.includes("India") && pack.isTrending;
  });
  const japanesePackages = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan") && pack.isTrending;
  });

  const businessPackages = packages.filter((pack) => pack.isBusiness);

  return (
    <div>
      <HeroCarousel slides={slides} />
      <CommonSections
        placeTypes={placeTypes}
        packages={packages}
        firstSectionPackages={indianPackages}
        secondSectionPackages={japanesePackages}
        businessPackages={businessPackages}
        places={places}
      />
      <GetCountry country={null} />
    </div>
  );
}

export const revalidate = 10;
