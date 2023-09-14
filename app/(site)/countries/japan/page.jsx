import { getSlidesJapan, getPackages } from "/sanity/sanity-utils";
import CommonSections from "/components/commonSections";

export default async function ExploreJapan() {
  const slidesJapan = await getSlidesJapan();

  const packs = await getPackages();

  const allPackages = packs.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
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

  return (
    <div>
      <CommonSections
        slides={slidesJapan}
        packages={allPackages}
        trendingPackages={trendingPackages}
        popularPackages={popularPackages}
        businessPackages={businessPackages}
        headings={headings}
      />
    </div>
  );
}
