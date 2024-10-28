import PackagesTabs from "@/_sections/packages/packagesTabs";
import { getPackages, getPlaceTypes } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import GetInTouch from "@/components/getInTouch";
import Advertisement from "@/components/advertisement";
import FadeUp from "@/components/animations/fadeUp";

export const metadata = {
  title:
    "Uncover Asian Marvels: Best Tour Packages to Japan and India | Explore with Niko Travels",
  description:
    "Experience the allure of Japan and the richness of India with our curated tour packages. Discover cultural treasures, historical landmarks, and scenic wonders. Book now for exclusive deals and personalized adventures. Elevate your travel experience with the best from Japan to India, brought to you by Niko Travels.",
};

export default async function Packages() {
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const placeTypes = await getPlaceTypes();

  const indianPacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });

  const trendingIndia = indianPacks.filter((pack) => pack.isTrending);
  const trendingJapan = japanesePacks.filter((pack) => pack.isTrending);

  // const popularIndia = indianPacks.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Popular");
  // });
  // const popularJapan = japanesePacks.filter((pack) => {
  //   return pack.packageFilter && pack.packageFilter.includes("Popular");
  // });

  const businessIndia = indianPacks.filter((pack) => pack.isBusiness);
  const businessJapan = japanesePacks.filter((pack) => pack.isBusiness);

  return (
    <>
      <div className="container mt-0 lg:mt-16">
        <PackagesTabs
          indianPacks={indianPacks}
          japanesePacks={japanesePacks}
          trendingIndia={trendingIndia}
          trendingJapan={trendingJapan}
          // popularIndia={popularIndia}
          // popularJapan={popularJapan}
          businessIndia={businessIndia}
          businessJapan={businessJapan}
          placeTypes={placeTypes}
        />
      </div>
      <div className="container">
        <FadeUp delay="0.3">
          <GetInTouch />
        </FadeUp>
      </div>
      <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mt-2" />

      <div className="container">
        <FadeUp delay="0.3">
          <Advertisement />
        </FadeUp>
      </div>
      <GetCountry country={null} />
    </>
  );
}

export const revalidate = 10;
