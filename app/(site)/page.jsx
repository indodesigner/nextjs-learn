import { getSlides, getPackages, getPlaces } from "/sanity/sanity-utils";
import SlidesSection from "@/components/slidesSection";
import CommonSections from "@/components/commonSections";
import GetCountry from "@/components/getCountry";

export default async function HomePage() {
  const slides = await getSlides();
  const packages = await getPackages(); //fetch packages from sanity query can be fount in (sanity/sanity-utils.js)
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const packagesWithDuration = packages.map((pack) => {
    const retdate = new Date(pack.returnDate);
    const depDate = new Date(pack.departureDate);
    const dateDiff = retdate - depDate;
    const duration = dateDiff / (1000 * 60 * 60 * 24);
    return { ...pack, duration };
  });

  const indianPackages = packagesWithDuration.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePackages = packagesWithDuration.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });

  // old home sections...........................
  // const trendingPackages = packages.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Trending");
  // });

  // const popularPackages = packages.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Popular");
  // });

  const businessPackages = packagesWithDuration.filter((pack) => {
    return pack.category && pack.category.includes("Business");
  });

  // const headings = ["India", "Japan", "Business", "All"];
  // const headingsJp = ["インド", "日本", "仕事", "全て"];
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
      <SlidesSection slides={slides} />
      <CommonSections
        packages={packagesWithDuration}
        firstSectionPackages={indianPackages}
        secondSectionPackages={japanesePackages}
        businessPackages={businessPackages}
        places={places}
      />
      <GetCountry country={null} />
    </div>
  );
}
