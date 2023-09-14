import { getSlides, getPackages, getFilters } from "/sanity/sanity-utils";
import CommonSections from "/components/commonSections";

export default async function HomePage() {
  const slides = await getSlides();
  const packages = await getPackages(); //fetch packages from sanity query can be fount in (sanity/sanity-utils.js)

  // const packFilters = await getFilters();

  const trendingPackages = packages.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Trending");
  });

  const popularPackages = packages.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Popular");
  });

  const businessPackages = packages.filter((pack) => {
    return pack.category && pack.category.includes("Business");
  });

  const headings = ["Trending", "Popular", "Business", "All"];

  return (
    <div>
      <CommonSections
        slides={slides}
        packages={packages}
        trendingPackages={trendingPackages}
        popularPackages={popularPackages}
        businessPackages={businessPackages}
        headings={headings}
      />
    </div>
  );
}
