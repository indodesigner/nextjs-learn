import PackagesTabs from "@/components/packages/packagesTabs";
import { getPackages } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import GetInTouch from "@/components/getInTouch";

export const metadata = {
  title: "Niko Travels",
  description: "Explore with Niko Travels - Packages",
};

export default async function Packages() {
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  // find duration from dep date and ret date.......
  // const packagesWithDuration = packages.map((pack) => {
  //   const retdate = new Date(pack.returnDate);
  //   const depDate = new Date(pack.departureDate);
  //   const dateDiff = retdate - depDate;
  //   const duration = dateDiff / (1000 * 60 * 60 * 24);
  //   return { ...pack, duration };
  // });
  // const indianPacks = packagesWithDuration.filter((pack) => {
  //   return pack.country && pack.country.includes("India");
  // });
  // const japanesePacks = packagesWithDuration.filter((pack) => {
  //   return pack.country && pack.country.includes("Japan");
  // });

  // const trendingIndia = indianPacks.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Trending");
  // });
  // const trendingJapan = japanesePacks.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Trending");
  // });

  // const popularIndia = indianPacks.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Popular");
  // });
  // const popularJapan = japanesePacks.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Popular");
  // });

  const indianPacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });

  const trendingIndia = indianPacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Trending");
  });
  const trendingJapan = japanesePacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Trending");
  });

  const popularIndia = indianPacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Popular");
  });
  const popularJapan = japanesePacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Popular");
  });

  return (
    <>
      <div className="container mt-0 lg:mt-24">
        <PackagesTabs
          indianPacks={indianPacks}
          japanesePacks={japanesePacks}
          trendingIndia={trendingIndia}
          trendingJapan={trendingJapan}
          popularIndia={popularIndia}
          popularJapan={popularJapan}
        />
      </div>
      <div className="container">
        <GetInTouch />
      </div>
      <GetCountry country={null} />
    </>
  );
}

export const revalidate = 10;
