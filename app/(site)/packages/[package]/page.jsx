// import { RichTextComponents } from "/utils/RichTextComponents";
// import Link from "next/link";
// import { format } from "date-fns";
// import { parseISO } from "date-fns";
import { getPackage, getPackages } from "/sanity/sanity-utils";
// import { PortableText } from "@portabletext/react";
// import urlFor from "/utils/urlFor";
// import PackageCarousel from "@/components/packageCarousel";
import GetCountry from "@/components/getCountry";
import PackageContent from "../packageContent";
import Advertisement from "@/components/advertisement";

const TourPackage = async ({ params }) => {
  const slug = params.package;
  const tourPackage = await getPackage({ slug });
  const slides = tourPackage.packageImages;
  const slicedSlides = slides.slice(1);

  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const indianPacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });
  const indianPackDetails = indianPacks.map((item) => ({
    name: item.packageName,
    slug: item.slug,
  }));
  const japanesePackDetails = japanesePacks.map((item) => ({
    name: item.packageName,
    slug: item.slug,
  }));

  const countryName =
    Array.isArray(tourPackage.country) && tourPackage.country.length > 0
      ? tourPackage.country[0].toLowerCase()
      : "";

  // const retdate = new Date(tourPackage.returnDate);
  // const depDate = new Date(tourPackage.departureDate);
  // const dateDiff = retdate - depDate;
  // const duration = dateDiff / (1000 * 60 * 60 * 24);

  return (
    <>
      <div className="container mt-0 lg:mt-24 lg:pb-8">
        <PackageContent
          country={countryName}
          slides={slicedSlides}
          tourPackage={tourPackage}
          indianPackDetails={indianPackDetails}
          japanesePackDetails={japanesePackDetails}
          currentPack={tourPackage}
        />
        <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mt-2" />

        <GetCountry country={countryName} />
      </div>
      <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mt-2" />

      <div className="container">
        <Advertisement />
      </div>
    </>
  );
};

export default TourPackage;

export const revalidate = 10;
