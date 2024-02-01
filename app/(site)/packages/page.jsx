import PackagesTabs from "@/components/packages/packagesTabs";
import { getPackages, getPlaceTypes } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import GetInTouch from "@/components/getInTouch";
import Advertisement from "@/components/advertisement";

export const metadata = {
  title: "Niko Travels",
  description: "Explore with Niko Travels - Packages",
};

export default async function Packages() {
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const placeTypes = await getPlaceTypes();

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
      <div className="container mt-0 lg:mt-16">
        <PackagesTabs
          indianPacks={indianPacks}
          japanesePacks={japanesePacks}
          trendingIndia={trendingIndia}
          trendingJapan={trendingJapan}
          popularIndia={popularIndia}
          popularJapan={popularJapan}
          placeTypes={placeTypes}
        />
      </div>
      <div className="container">
        <GetInTouch />
      </div>
      <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mt-2" />

      <div className="container">
        <Advertisement />
      </div>
      <GetCountry country={null} />
    </>
  );
}

export const revalidate = 10;
