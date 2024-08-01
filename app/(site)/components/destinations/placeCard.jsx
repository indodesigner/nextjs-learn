import Image from "next/image";
import Link from "next/link";
import urlFor from "/utils/urlFor";
import { LuImageOff } from "react-icons/lu";

export default function PlaceCard({ places, language }) {
  return (
    <>
      {places &&
        places.map((place) => (
          <Link
            key={place._id}
            href={`/places/${place.slug}`}
            className="group card card-hover p-2 mb-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 opacity-70 hover:opacity-10 k to-transparent rounded-md z-9 transition"></div>
              {place.placeImages ? (
                <Image
                  src={urlFor(place.placeImages).url()}
                  width={500}
                  height={250}
                  alt={place.alt}
                  className="object-cover aspect-video rounded-md"
                  loading="lazy"
                ></Image>
              ) : (
                <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                  <div>
                    <LuImageOff className="w-16 aspect-video text-neutral-300 dark:text-neutral-500" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 group-hover:bg-neutral-800 group-hover:backdrop-blur-md group-hover:bg-opacity-40 rounded-md w-full h-full flex justify-center items-center">
                <h3 className="text-center text-neutral-100 dark:text-white  px-2 text-lg md:text-xl font-extrabold mt-1 mb-1 line-clamp-2 group-hover:gradient-text transition duration-200">
                  {language === "english"
                    ? place.placeName
                    : place.placeNamejp || place.placeName}
                </h3>
              </div>
            </div>
            <div className="px-2 flex flex-wrap gap-1 mb-2 mt-4">
              {place.placeTypes &&
                place.placeTypes.map((item) => (
                  <span
                    className="bg-neutral-900 dark:bg-neutral-300 px-3 py-0.5 rounded-2xl"
                    key={item._id}
                  >
                    <div className="text-xs text-white dark:text-neutral-800">
                      {language === "english"
                        ? item.placeTypeName.toUpperCase()
                        : item.placeTypeNamejp ||
                          item.placeTypeName.toUpperCase()}
                    </div>
                  </span>
                ))}
            </div>
          </Link>
        ))}
    </>
  );
}
