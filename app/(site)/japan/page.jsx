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
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4 bg-neutral-200 py-2 px-4 rounded-2xl">
          <Image src={JapanMapImage} width={500} height={400}></Image>
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
        places={placesJapan}
        headings={headings}
      />
      <GetCountry country={null} />
    </div>
  );
}
