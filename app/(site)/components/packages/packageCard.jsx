import Image from "next/image";
import Link from "next/link";
import urlFor from "/utils/urlFor";
import { LuImageOff, LuCalendarClock } from "react-icons/lu";

export default function PackageCard({ packages, language }) {
  return (
    <>
      {packages &&
        packages.map((tourPackage) => (
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
                className="object-cover aspect-video rounded-md"
              ></Image>
            ) : (
              // else part for no blog image
              <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                <div>
                  <LuImageOff className="w-16 aspect-video text-neutral-300 dark:text-neutral-500" />
                </div>
              </div>
            )}

            <h5 className="px-2 text-base sm:text-md md:text-lg font-semibold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
              {(language === "english"
                ? tourPackage.packageName
                : tourPackage.packageNamejp) || tourPackage.packageName}
            </h5>

            <div className="flex flex-row gap-2 sm:gap-0 justify-between px-2 py-1 mb-3 bg-neutral-200 dark:bg-neutral-800 bg-opacity-30 dark:bg-opacity-50 rounded-lg">
              {tourPackage.duration != null ? (
                <div className="flex flex-row place-items-center">
                  <LuCalendarClock className="text-md sm:text-lg" />

                  <h6 className="text-base sm:text-md ps-2">
                    <strong>{tourPackage.duration.days}</strong>{" "}
                    {language === "english" ? "Days & " : "日々 & "}
                    <strong>{tourPackage.duration.nights}</strong>{" "}
                    {language === "english" ? "Nights" : "夜"}
                  </h6>
                </div>
              ) : null}

              {tourPackage.rate && (
                <div className=" border-r border-neutral-300 dark:border-neutral-600 border-opacity-50 dark:border-opacity-70"></div>
              )}

              {tourPackage.rate != null ? (
                <h6 className="text-xs flex flex-col items-center">
                  Starting from
                  <strong className="text-lg sm:text-lg">
                    ₹{tourPackage.rate}
                  </strong>
                </h6>
              ) : null}
            </div>

            <div className="px-2 flex flex-wrap gap-1 mb-2">
              {tourPackage.place &&
                tourPackage.place.map((item) => (
                  <span
                    className="bg-neutral-900 dark:bg-neutral-300 px-2 py-[2px] rounded-2xl sm:max-w-[180px]"
                    key={item._id}
                  >
                    <h6 className="text-xs text-white dark:text-neutral-900 line-clamp-1">
                      {language === "english"
                        ? item.placeName.toUpperCase()
                        : item.placeNamejp || item.placeName.toUpperCase()}
                    </h6>
                  </span>
                ))}
            </div>
            <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mb-2" />

            <div className="px-2 flex flex-wrap gap-1 mb-2">
              {tourPackage.placeTypes &&
                tourPackage.placeTypes.map((item) => (
                  <span
                    className="border border-neutral-400 dark:border-neutral-400 px-2 rounded-2xl"
                    key={item._id}
                  >
                    <h6 className="text-xs">
                      {language === "english"
                        ? item.placeTypeName.toUpperCase()
                        : item.placeTypeNamejp ||
                          item.placeTypeName.toUpperCase()}
                    </h6>
                  </span>
                ))}
            </div>
          </Link>
        ))}
    </>
  );
}
