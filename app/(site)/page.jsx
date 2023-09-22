import { getSlides, getPackages, getPlaces } from "/sanity/sanity-utils";
import CommonSections from "/components/commonSections";

export default async function HomePage() {
  const slides = await getSlides();
  const packages = await getPackages(); //fetch packages from sanity query can be fount in (sanity/sanity-utils.js)
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const indianPackages = packages.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePackages = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });

  // old home sections...........................
  // const trendingPackages = packages.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Trending");
  // });

  // const popularPackages = packages.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Popular");
  // });

  const businessPackages = packages.filter((pack) => {
    return pack.category && pack.category.includes("Business");
  });

  const headings = ["India", "Japan", "Business", "All"];

  return (
    <div>
      {
        // old home sections...........................
        /* <CommonSections
        slides={slides}
        packages={packages}
        trendingPackages={trendingPackages}
        popularPackages={popularPackages}
        businessPackages={businessPackages}
        headings={headings}
      /> */
      }
      <CommonSections
        slides={slides}
        packages={packages}
        firstSectionPackages={indianPackages}
        secondSectionPackages={japanesePackages}
        businessPackages={businessPackages}
        places={places}
        headings={headings}
      />
    </div>
  );
}
