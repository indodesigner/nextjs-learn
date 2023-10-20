import Image from "next/image";
import Link from "next/link";
import urlFor from "@/components/urlFor";
import { LuImageOff, LuChevronRight } from "react-icons/lu";
import { format } from "date-fns";
import { parseISO } from "date-fns";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "./RichTextComponents";
// import { Button } from "/components/ui/button";

export default async function PackagesSection({ heading, packages, language }) {
  const showViewAllLink = packages.length > 4;
  const packagesToDisplay = packages.slice(0, 4); // Get the first 4 packages
  const countries = packages[0].country;
  const country = countries.map((item) => item.toLowerCase());

  return (
    <div>
      <div className="flex justify-between mt-8 mb-4">
        <h4 className="text-xl sm:text-2xl font-bold">
          {heading} {language === "english" ? "Packages" : "パッケージ"}
        </h4>
        {showViewAllLink ? (
          heading == "India" || heading == "Japan" ? (
            <Link
              href={`/countries/${country}`}
              className="group text-sm font-medium flex items-center link-hover py-1 px-2"
            >
              View all
              <LuChevronRight className="group-hover:text-red-300 transition" />
            </Link>
          ) : (
            <Link
              href="/packages"
              className="group text-sm font-medium flex items-center link-hover py-1 px-2"
            >
              View all
              <LuChevronRight className="group-hover:text-red-300 transition" />
            </Link>
          )
        ) : null}
      </div>

      <div className="grid grid-cols-1  xs:grid-cols-2 lg:grid-cols-4 gap-2">
        {packagesToDisplay &&
          packagesToDisplay.map((tourPackage) => (
            <Link
              key={tourPackage._id}
              href={`/packages/${tourPackage.slug}`}
              className="group card card-hover p-2"
            >
              {tourPackage.packageImages ? (
                <Image
                  src={urlFor(tourPackage.packageImages).url()}
                  width={800}
                  height={500}
                  alt={tourPackage.alt}
                  className="object-cover h-40 lg:h-32 rounded-md"
                ></Image>
              ) : (
                // else part for no blog image
                <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                  <div>
                    <LuImageOff className="w-16 h-40 lg:h-32 text-neutral-300 dark:text-neutral-500" />
                  </div>
                </div>
              )}

              <h5 className="px-2 text-sm sm:text-md md:text-lg font-semibold my-2 line-clamp-3 group-hover:gradient-text transition duration-200">
                {language === "english"
                  ? tourPackage.packageName
                  : tourPackage.packageNamejp}
              </h5>

              <div className="px-2 flex flex-wrap gap-1 mb-2">
                {tourPackage.place &&
                  tourPackage.place.map((item) => (
                    <span className="bg-black dark:bg-neutral-300 px-2 rounded-2xl">
                      <h6 className="text-xs font-bold text-white dark:text-neutral-900">
                        {item.toUpperCase()}
                      </h6>
                    </span>
                  ))}
              </div>

              {/* <div className="flex flex-col px-2 mb-3">
                <div className="flex flex-row place-items-center">
                  <h5 className="text-xs min-w-[64px] font-light">Departure</h5>
                  <span className="text-xs px-2 py-1 ms-2 rounded-lg font-medium">
                    {tourPackage.departureDate ? (
                      format(
                        parseISO(tourPackage.departureDate),
                        "dd MMMM yyyy"
                      )
                    ) : (
                      <h6 className="text-sm">Custom</h6>
                    )}
                  </span>
                </div>
                <div className="flex flex-row place-items-center">
                  <h5 className="text-xs min-w-[64px] font-light">Return</h5>
                  <span className="text-xs px-2 py-1 ms-2 rounded-lg font-medium">
                    {tourPackage.returnDate ? (
                      format(parseISO(tourPackage.returnDate), "dd MMMM yyyy")
                    ) : (
                      <h6 className="text-sm">Custom</h6>
                    )}
                  </span>
                </div>
              </div> */}

              {/* rich text component with line clamped to 2 lines */}
              {/* <div className="px-2 mb-2 text-sm line-clamp-2 md:line-clamp-3">
                <PortableText
                  value={tourPackage.content}
                  components={RichTextComponents}
                />
              </div> */}
              {/* {tourPackage.duration ? (
                <div className="grid grid-cols-2 px-2 mb-2 text-sm end">
                  <span className="bg-neutral-200 dark:bg-neutral-800 rounded-md py-[2px]">
                    <h6 className="text-xs font-semibold grid justify-items-center text-center content-center">
                      {tourPackage.duration} Days
                    </h6>
                  </span>

                  <h6 className="text-xs grid justify-items-end content-center">
                    ₹{tourPackage.rate}
                  </h6>
                </div>
              ) : (
                <div className="grid grid-cols-2 px-2 mb-2 text-sm end">
                  <span className="bg-neutral-200 dark:bg-neutral-800 rounded-md py-[2px] px-1">
                    <h6 className="text-xs grid justify-items-center content-center text-center">
                      Custom duration
                    </h6>
                  </span>
                  <h6 className="text-xs grid justify-items-end content-center">
                    Custom rate
                  </h6>
                </div>
              )} */}
            </Link>
          ))}
      </div>
    </div>
  );
}
