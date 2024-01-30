import Image from "next/image";
import Link from "next/link";
import urlFor from "/utils/urlFor";
import { LuImageOff, LuCalendarClock } from "react-icons/lu";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "/utils/RichTextComponents";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function PackagesTabContent({
  packages,
  heading,
  language,
  country,
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {heading}{" "}
            {country === "india"
              ? language === "english"
                ? "Kerala Packages"
                : "ケーララ州のバケーションパッケージ"
              : language === "english"
              ? "Japan Packages"
              : "日本パッケージ"}
          </CardTitle>

          <CardDescription>
            {country === "india"
              ? language === "english"
                ? "Explore Kerala's Finest Tour Packages Listed Below"
                : "以下のケーララ州の最高のツアーパッケージを探索してください"
              : language === "english"
              ? "Explore Japan's Finest Tour Packages Listed Below"
              : "以下の日本最高のツアーパッケージを探索してください"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {packages &&
              packages.map((tourPackage) => (
                <Link
                  key={tourPackage._id}
                  href={`/packages/${tourPackage.slug}`}
                  className="group card card-hover p-2 mb-2"
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
                    // else part for no place image
                    <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                      <div>
                        <LuImageOff className="w-16 aspect-video text-neutral-300 dark:text-neutral-500" />
                      </div>
                    </div>
                  )}

                  <h5 className="px-2 text-sm sm:text-md md:text-lg font-semibold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                    {(language === "english"
                      ? tourPackage.packageName
                      : tourPackage.packageNamejp) || tourPackage.packageName}
                  </h5>

                  {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between px-2 mb-3">
                    {tourPackage.duration != null ? (
                      <div className="flex flex-row place-items-center">
                        <LuCalendarClock className="text-sm" />

                        <h6 className="text-xs ps-2">
                          <strong>{tourPackage.duration.days}</strong>{" "}
                          {language === "english" ? "Days & " : "日々 & "}
                          <strong>{tourPackage.duration.nights}</strong>{" "}
                          {language === "english" ? "Nights" : "夜"}
                        </h6>
                      </div>
                    ) : null}

                    {tourPackage.rate && (
                      <div className="hidden sm:block border-r border-neutral-300 dark:border-neutral-600"></div>
                    )}

                    {tourPackage.rate != null ? (
                      <h6 className="text-xs">
                        Starting from <strong>₹{tourPackage.rate}</strong>
                      </h6>
                    ) : null}
                  </div> */}

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
                      tourPackage.place.map((item, index) => (
                        <span
                          className="bg-neutral-900 dark:bg-neutral-300 px-2 py-[2px] rounded-2xl sm:max-w-[170px]"
                          key={index}
                        >
                          <h6 className="text-xs text-white dark:text-neutral-900 line-clamp-1">
                            {language === "english"
                              ? item.placeName.toUpperCase()
                              : item.placeNamejp ||
                                item.placeName.toUpperCase()}
                          </h6>
                        </span>
                      ))}
                  </div>
                  <hr className=" border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mb-2" />

                  <div className="px-2 flex flex-wrap gap-1 mb-2">
                    {tourPackage.placeTypes &&
                      tourPackage.placeTypes.map((item, index) => (
                        <span
                          className="border border-neutral-400 dark:border-neutral-500 px-2 rounded-2xl shadow-sm"
                          key={index}
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
                  {/* rich text component with line clamped to 3 lines */}
                  {/* <div className="text-sm line-clamp-2 md:line-clamp-3">
                    <PortableText
                      value={pack.content}
                      components={RichTextComponents}
                    />
                  </div> */}

                  {/* {pack.durationFromDates ? (
                    <div className="grid grid-cols-2 px-2 mb-2 text-sm end">
                      <span className="bg-neutral-200 dark:bg-neutral-800 rounded-md py-[2px]">
                        <h6 className="font-semibold grid justify-items-center text-center content-center">
                          {pack.durationFromDates} Days
                        </h6>
                      </span>

                      <h6 className="text-xs grid justify-items-end content-center">
                        ₹{pack.rate}
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
                  )} */}
                </Link>
              ))}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
