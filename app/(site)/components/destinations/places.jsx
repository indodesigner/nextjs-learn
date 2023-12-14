import Image from "next/image";
import Link from "next/link";
// import { getPlaces } from "../sanity/sanity-utils";
import urlFor from "/utils/urlFor";
import { LuImageOff, LuChevronRight } from "react-icons/lu";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "/utils/RichTextComponents";

export default function PlacesSection({ places, language }) {
  const showViewAllLink = places.length > 3;
  const placesToDisplay = places.slice(0, 3); // Get the first 4 packages

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h4 className="text-xl sm:text-2xl font-bold">
          {language === "english" ? "Destinations" : "目的地"}
        </h4>
        {showViewAllLink && (
          <Link
            href="/places"
            className="group text-sm font-medium flex items-center link-hover py-1 px-2"
          >
            View all
            <LuChevronRight className="group-hover:text-red-300 transition" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
        {placesToDisplay &&
          placesToDisplay.map((place, index) => (
            <Link
              key={index}
              id={place._id}
              href={`/places/${place.slug}`}
              className="group card card-hover p-2"
            >
              {place.placeImages ? (
                <Image
                  src={urlFor(place.placeImages).url()}
                  width={800}
                  height={500}
                  alt={place.alt}
                  className="object-cover h-40 lg:h-36 rounded-md"
                ></Image>
              ) : (
                // else part for no place image
                <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                  <div>
                    <LuImageOff className="w-16 h-40 lg:h-36 text-neutral-300 dark:text-neutral-500" />
                  </div>
                </div>
              )}

              <h6 className="px-2 text-sm sm:text-md md:text-lg font-semibold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                {language === "english"
                  ? place.placeName
                  : place.placeNamejp || place.placeName}
              </h6>
              <div className="px-2 flex flex-wrap gap-1 mb-2">
                {place.placeTypes &&
                  place.placeTypes.map((item, index) => (
                    <span
                      className="bg-red-500 px-3 py-1 rounded-2xl"
                      key={index}
                    >
                      <h6 className="text-xs font-medium text-white dark:text-neutral-50">
                        {language === "english"
                          ? item.placeTypeName.toUpperCase()
                          : item.placeTypeNamejp ||
                            item.placeTypeName.toUpperCase()}
                      </h6>
                    </span>
                  ))}
              </div>

              {/* rich text component with line clamped to 3 lines */}
              {/* <div className="px-2 mb-2 text-neutral-600 dark:text-neutral-100 text-sm line-clamp-2 md:line-clamp-3">
                <PortableText
                  value={
                    language === "english"
                      ? place.content
                      : place.contentjp || place.content
                  }
                  components={RichTextComponents}
                />
              </div> */}
            </Link>
          ))}
      </div>
    </div>
  );
}
