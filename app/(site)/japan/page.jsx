import { getSlidesJapan, getPackages, getPlaces } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import Image from "next/image";
import SlidesSection from "@/components/slidesSection";
import CommonSections from "@/components/commonSections";
import JapanMapImage from "/public/images/map-japan.png";

export default async function ExploreJapan() {
  const slidesJapan = await getSlidesJapan();
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

  const placesJapan = places.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });

  return (
    <div>
      <SlidesSection slides={slidesJapan} />
      <section className="container">
        <h4 className="text-3xl font-bold mb-4">About Japan</h4>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4 bg-neutral-200 dark:bg-neutral-800 py-2 px-4 rounded-2xl">
          <Image src={JapanMapImage} width={500} height={400}></Image>
          <p className="text-sm">
            Discover the captivating allure of Japan, a land where ancient
            traditions harmonize with cutting-edge modernity. Immerse yourself
            in the vibrant tapestry of cherry blossoms, historic temples, and
            futuristic cities. Traverse Tokyo's bustling streets, where neon
            lights and traditional markets coexist seamlessly. Experience the
            serenity of Kyoto's iconic bamboo forests and timeless tea
            ceremonies. Indulge in culinary delights, from sushi masterpieces to
            savory ramen. Explore the cultural richness of Hiroshima's Peace
            Memorial Park and the majestic Mount Fuji. Japan, a fusion of past
            and present, beckons you to embark on a journey of unparalleled
            beauty, innovation, and cultural enchantment.
          </p>
        </div>
      </section>
      <CommonSections
        packages={allPackages}
        firstSectionPackages={trendingPackages}
        secondSectionPackages={popularPackages}
        businessPackages={businessPackages}
        places={placesJapan}
        headings={headings}
      />
      <GetCountry country={null} />
    </div>
  );
}
