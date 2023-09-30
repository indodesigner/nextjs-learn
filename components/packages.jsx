import Image from "next/image";
import Link from "next/link";
import urlFor from "./urlFor";
import { LuImageOff } from "react-icons/lu";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "./RichTextComponents";
// import { Button } from "/components/ui/button";

export default async function PackagesSection({ heading, packages }) {
  const showViewAllLink = packages.length > 4;
  const packagesToDisplay = packages.slice(0, 4); // Get the first 4 packages
  const countries = packages[0].country;

  const country = countries.map((item) => item.toLowerCase());

  return (
    <div>
      <div className="flex justify-between mt-8 mb-4">
        <h2 className="text-xl sm:text-3xl font-bold">{heading} Packages</h2>
        {showViewAllLink ? (
          heading == "India" || heading == "Japan" ? (
            <Link
              href={`/countries/${country}`}
              className="text-sm font-medium flex items-center"
            >
              <span className="link-hover py-1 px-2 border-2 border-neutral-500 rounded-xl">
                View all
              </span>
            </Link>
          ) : (
            <Link
              href="/packages"
              className="text-sm font-medium flex items-center"
            >
              <span className="link-hover py-1 px-2 border-2 border-neutral-500 rounded-xl">
                View all
              </span>
            </Link>
          )
        ) : null}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
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
                  className="object-cover h-32 md:h-32 rounded-md"
                ></Image>
              ) : (
                // else part for no blog image
                <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                  <div>
                    <LuImageOff className="w-16 h-32 md:h-32 text-neutral-300 dark:text-neutral-500" />
                  </div>
                </div>
              )}

              <h6 className="px-2 text-sm sm:text-md md:text-lg lg:text-xl font-bold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                {tourPackage.packageName}
              </h6>

              {/* rich text component with line clamped to 2 lines */}
              {/* <div className="px-2 mb-2 text-sm line-clamp-2 md:line-clamp-3">
                <PortableText
                  value={tourPackage.content}
                  components={RichTextComponents}
                />
              </div> */}
              {tourPackage.duration ? (
                <div className="grid grid-cols-2 px-2 mb-2 text-sm end">
                  <span className="bg-neutral-200 dark:bg-neutral-800 rounded-md py-[2px]">
                    <h6 className="font-semibold grid justify-items-center text-center content-center">
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
                  <h6 className="grid justify-items-end content-center">
                    Custom rate
                  </h6>
                </div>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}
