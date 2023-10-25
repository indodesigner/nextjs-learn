// import { RichTextComponents } from "/utils/RichTextComponents";
// import Link from "next/link";
// import { format } from "date-fns";
// import { parseISO } from "date-fns";
import { getPackage, getPackages } from "/sanity/sanity-utils";
// import { PortableText } from "@portabletext/react";
// import urlFor from "/utils/urlFor";
import { BsXLg } from "react-icons/bs";
// import PackageCarousel from "@/components/packageCarousel";
import GetCountry from "@/components/getCountry";
import ContactForm from "@/components/contactForm";
import PackageContent from "../packageContent";

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
      <PackageContent
        countryName={countryName}
        slides={slides}
        tourPackage={tourPackage}
      />
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
