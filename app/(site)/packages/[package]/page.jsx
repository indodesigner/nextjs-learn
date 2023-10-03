import { RichTextComponents } from "@/components/RichTextComponents";
import Link from "next/link";
import { format } from "date-fns";
import { parseISO } from "date-fns";
import { getPackage } from "/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
// import urlFor from "/components/urlFor";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import PackageCarousel from "@/components/packageCarousel";
import GetCountry from "@/components/getCountry";

const TourPackage = async ({ params }) => {
  const slug = params.package;
  const tourPackage = await getPackage({ slug });
  const slides = tourPackage.packageImages;

  const countryName =
    Array.isArray(tourPackage.country) && tourPackage.country.length > 0
      ? tourPackage.country[0].toLowerCase()
      : "";

  const retdate = new Date(tourPackage.returnDate);
  const depDate = new Date(tourPackage.departureDate);
  const dateDiff = retdate - depDate;
  const duration = dateDiff / (1000 * 60 * 60 * 24);

  return (
    <div className="container mt-0 md:mt-24">
      <div className="flex items-center mb-3">
        <Link href="/packages" className="gradient-text">
          Packages
        </Link>
        <h6 className="text-sm">
          <BsChevronRight className="pt-[2px]" />
        </h6>
        <Link
          href={`/countries/${countryName}`}
          className=" text-neutral-500 dark:text-neutral-400"
        >
          {tourPackage.country}
        </Link>
      </div>

      <h2 className="text-2xl md:text-4xl font-bold mb-2">
        {tourPackage.packageName}
      </h2>

      <PackageCarousel slides={slides} />
      <div className="my-5 px-4 py-5 bg-white dark:bg-neutral-900 shadow-lg shadow-neutral-200 dark:shadow-neutral-900 rounded-md">
        <div className="flex flex-row justify-between">
          {duration == 0 ? (
            <h6>Duration depends on your schedule</h6>
          ) : (
            <h4 className="font-bold text-lg mb-4">{duration} Days</h4>
          )}

          {tourPackage.rate ? (
            <h4 className="font-bold text-lg mb-4">₹{tourPackage.rate}</h4>
          ) : (
            <h6>Package rate depends on the schedule</h6>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
          <div className="flex flex-row place-items-center">
            <h5 className="min-w-[80px] sm:min-w-fit font-light">Departure</h5>
            <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 ms-2 rounded-lg font-medium">
              {tourPackage.departureDate ? (
                format(parseISO(tourPackage.departureDate), "dd MMMM yyyy")
              ) : (
                <h6>You Pick</h6>
              )}
            </span>
          </div>
          <div className="flex flex-row place-items-center">
            <h5 className="min-w-[80px] sm:min-w-fit font-light">Return</h5>
            <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 ms-2 rounded-lg font-medium">
              {tourPackage.returnDate ? (
                format(parseISO(tourPackage.returnDate), "dd MMMM yyyy")
              ) : (
                <h6>You Pick</h6>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="mb-4 px-4">
        <PortableText
          value={tourPackage.content}
          components={RichTextComponents}
        />
      </div>
      <GetCountry country={countryName} />
    </div>
  );
};

export default TourPackage;
