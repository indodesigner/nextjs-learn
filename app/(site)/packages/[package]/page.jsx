import { RichTextComponents } from "@/components/RichTextComponents";
import Link from "next/link";
// import { format } from "date-fns";
// import { parseISO } from "date-fns";
import { getPackage, getPackages } from "/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
// import urlFor from "/components/urlFor";
import { BsImageAlt, BsChevronRight, BsXLg } from "react-icons/bs";
import PackageCarousel from "@/components/packageCarousel";
import GetCountry from "@/components/getCountry";
import ContactForm from "@/components/contactForm";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const TourPackage = async ({ params }) => {
  const slug = params.package;
  const tourPackage = await getPackage({ slug });
  const slides = tourPackage.packageImages;

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
    <div className="container mt-0 md:mt-24 pb-8">
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

      <h3 className="text-2xl md:text-3xl font-bold mb-2">
        {tourPackage.packageName}
      </h3>

      <PackageCarousel slides={slides} />

      <div className="px-2 flex flex-wrap gap-2 my-6">
        {tourPackage.place &&
          tourPackage.place.map((item) => (
            <Link
              href={`/places/${item.slug}`}
              className="group border-2 border-red-600 dark:border-red-500 hover:bg-red-600 dark:hover:bg-red-900 p-1 px-5 rounded-3xl transition"
            >
              <h6 className="text-xs sm:text-sm font-medium group-hover:text-white">
                {item.placeName}
              </h6>
            </Link>
          ))}
      </div>

      {/* <div className="my-5 px-4 py-5 bg-white dark:bg-neutral-900 shadow-lg shadow-neutral-200 dark:shadow-neutral-900 rounded-md">
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
      </div> */}

      <div className="mb-8 px-4">
        <PortableText
          value={tourPackage.content}
          components={RichTextComponents}
        />
      </div>
      {/* <Link
        href="/contact"
        className="font-medium text-white bg-neutral-950 dark:text-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 hover:dark:bg-neutral-300 p-2 px-4 ms-4 rounded-lg transition"
      >
        Book now
      </Link> */}
      <AlertDialog>
        <AlertDialogTrigger className="font-medium text-white bg-neutral-950 dark:text-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 hover:dark:bg-neutral-300 p-2 px-4 ms-4 rounded-lg transition">
          Book now
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="flex flex-row justify-between items-center">
            <AlertDialogTitle>
              Interested?
              <p className="text-sm font-normal">
                Send your details we will get back to you within 24 Hrs
              </p>
            </AlertDialogTitle>

            <AlertDialogCancel className="rounded-3xl">
              <BsXLg />
            </AlertDialogCancel>
          </AlertDialogHeader>

          <AlertDialogDescription className="flex justify-center mt-2">
            <ContactForm
              indianPackDetails={indianPackDetails}
              japanesePackDetails={japanesePackDetails}
              currentPack={tourPackage}
            />
          </AlertDialogDescription>
          <AlertDialogFooter>
            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <GetCountry country={countryName} />
    </div>
  );
};

export default TourPackage;
