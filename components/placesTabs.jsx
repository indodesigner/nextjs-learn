import Image from "next/image";
import Link from "next/link";
import urlFor from "/components/urlFor";
import { LuImageOff } from "react-icons/lu";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "/components/RichTextComponents";

export default async function PlacesTabs({ places }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {places &&
        places.map((place) => (
          <Link
            id={place._id}
            href={`/places/${place.slug}`}
            className="group card card-hover p-2"
          >
            {place.placeImages ? (
              <Image
                src={urlFor(place.placeImages).url()}
                width={800}
                height={500}
                alt={`${place.slug}-image`}
                className="object-cover h-32 md:h-32 rounded-md"
              ></Image>
            ) : (
              // else part for no place image
              <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                <div>
                  <LuImageOff className="w-16 h-32 md:h-32 text-neutral-300 dark:text-neutral-500" />
                </div>
              </div>
            )}

            <h6 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
              {place.placeName}
            </h6>

            {/* rich text component with line clamped to 3 lines */}
            <div className="text-sm line-clamp-2 md:line-clamp-3">
              <PortableText
                value={place.content}
                components={RichTextComponents}
              />
            </div>
          </Link>
        ))}
    </div>
  );
}
