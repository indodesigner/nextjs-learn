import { getSlidesIndia, getPackages, getPlaces } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import SlidesSection from "@/components/slidesSection";
import CommonSections from "@/components/commonSections";

import AboutIndia from "./aboutIndia";

export default async function ExploreIndia() {
  const slidesIndia = await getSlidesIndia();
  const packs = await getPackages();
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const packagesWithDuration = packs.map((pack) => {
    const retdate = new Date(pack.returnDate);
    const depDate = new Date(pack.departureDate);
    const dateDiff = retdate - depDate;
    const duration = dateDiff / (1000 * 60 * 60 * 24);
    return { ...pack, duration };
  });
  const allPackages = packagesWithDuration.filter((pack) => {
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

  // const headings = ["Trending", "Popular", "Business", "All"];
  // const headingsJp = ["インド", "日本", "仕事", "全て"];

  const placesIndian = places.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });

  return (
    <div>
      <SlidesSection slides={slidesIndia} />
      <AboutIndia />
      <CommonSections
        packages={allPackages}
        firstSectionPackages={trendingPackages}
        secondSectionPackages={popularPackages}
        businessPackages={businessPackages}
        places={placesIndian}
      />
      <GetCountry country={null} />
    </div>
  );
}
