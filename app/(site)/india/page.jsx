import { getSlidesIndia, getPackages, getPlaces } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";
import SlidesSection from "@/components/slidesSection";
import CommonSections from "@/components/commonSections";
import Image from "next/image";
import IndiaMapImage from "/public/images/map-india.png";

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
      <section className="container">
        <h4 className="text-3xl font-bold mb-4">About India</h4>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4 bg-neutral-200 dark:bg-neutral-800 py-2 px-4 rounded-2xl">
          <Image src={IndiaMapImage} width={500} height={400}></Image>
          <p className="text-sm">
            Welcome to India's enchanting paradise, Kerala, where nature's
            poetry unfolds in every corner. Nestled in the embrace of the
            Western Ghats, this coastal gem is a tapestry of lush landscapes and
            cultural richness. Glide through the serene backwaters of Alleppey
            on traditional houseboats, where palm-fringed canals whisper tales
            of tranquility. Discover the spice-scented hills of Munnar, a haven
            for tea plantations and mist-kissed vistas. Immerse yourself in the
            vibrant hues of Kathakali dance and rejuvenate with Ayurvedic
            traditions. Kerala's cuisine, steeped in coconut and spices, invites
            a gastronomic journey. From the tranquil beaches of Kovalam to the
            vibrant markets of Kochi, Kerala beckons with an immersive blend of
            nature, culture, and serenity. Your escape to this South Indian
            haven begins here.
          </p>
        </div>
      </section>
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
