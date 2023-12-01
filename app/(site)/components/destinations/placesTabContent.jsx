import Image from "next/image";
import Link from "next/link";
import urlFor from "/utils/urlFor";
import { LuImageOff } from "react-icons/lu";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "/utils/RichTextComponents";

export default async function PlacesTabContent({ places, language }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
      {places &&
        places.map((place) => (
          <Link
            key={place._id}
            href={`/places/${place.slug}`}
            className="group card card-hover p-2"
          >
            <div className="relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-neutral-900 opacity-70 hover:opacity-10 k to-transparent rounded-md z-9 transition"></div>
              {place.placeImages ? (
                <Image
                  src={urlFor(place.placeImages).url()}
                  width={800}
                  height={500}
                  alt={place.alt}
                  className="object-cover h-36 md:h-36 rounded-md"
                ></Image>
              ) : (
                // else part for no place image
                <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                  <div>
                    <LuImageOff className="w-16 h-36 md:h-36 text-neutral-300 dark:text-neutral-500" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-1 left-1 group-hover:bg-neutral-800 group-hover:backdrop-blur-md group-hover:bg-opacity-50 rounded-md">
                <h5 className=" text-neutral-100 dark:text-white  px-2 text-sm sm:text-lg font-bold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                  {language === "english"
                    ? place.placeName
                    : place.placeNamejp || place.placeName}
                </h5>
              </div>
            </div>
            <div className="px-2 flex flex-wrap gap-1 mb-2 mt-4">
              {place.placeTypes &&
                place.placeTypes.map((item, index) => (
                  <span
                    className="bg-red-500 px-3 py-1 rounded-2xl"
                    key={index}
                  >
                    <h6 className="text-xs font-bold text-white dark:text-neutral-50">
                      {language === "english"
                        ? item.placeTypeName.toUpperCase()
                        : item.placeTypeNamejp ||
                          item.placeTypeName.toUpperCase()}
                    </h6>
                  </span>
                ))}
            </div>

            {/* rich text component with line clamped to 3 lines */}
            {/* <div className="px-2 mb-2 text-sm line-clamp-2 md:line-clamp-3">
              <PortableText
                value={
                  language === "english"
                    ? place.content
                    : place.contentjp != null
                    ? place.contentjp
                    : place.content
                }
                components={RichTextComponents}
              />
            </div> */}
          </Link>
        ))}
    </div>
  );
}
