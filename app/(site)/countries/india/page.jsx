import { getSlidesIndia, getPackages, getPlaces } from "/sanity/sanity-utils";
import CommonSections from "/components/commonSections";

export default async function ExploreIndia() {
  const slidesIndia = await getSlidesIndia();
  const packs = await getPackages();
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const allPackages = packs.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });

  const trendingPackages = allPackages.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Trending");
  });

  const popularPackages = allPackages.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Popular");
  });

  const businessPackages = allPackages.filter((pack) => {
    return pack.category && pack.category.includes("Business");
  });

  const headings = ["Trending", "Popular", "Business", "All"];

  const placesIndian = places.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });

  return (
    <div>
      <CommonSections
        slides={slidesIndia}
        packages={allPackages}
        firstSectionPackages={trendingPackages}
        secondSectionPackages={popularPackages}
        businessPackages={businessPackages}
        places={placesIndian}
        headings={headings}
      />
    </div>
  );
}
