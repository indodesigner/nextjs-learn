import { getSlidesIndia, getPackages } from "/sanity/sanity-utils";
import HeroCarousel from "/components/heroCarousel";
import PackageSection from "/components/packages";

export default async function ExploreIndia() {
  const slidesIndia = await getSlidesIndia();

  const packs = await getPackages();

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

  return (
    <div>
      <HeroCarousel slides={slidesIndia} />
      <section id="packages" className="container">
        {trendingPackages != 0 ? (
          <PackageSection packages={trendingPackages} heading={headings[0]} />
        ) : null}
        {popularPackages != 0 ? (
          <PackageSection packages={popularPackages} heading={headings[1]} />
        ) : null}
        <PackageSection packages={businessPackages} heading={headings[2]} />
        <PackageSection packages={allPackages} heading={headings[3]} />
      </section>
    </div>
  );
}
