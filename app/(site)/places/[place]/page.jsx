import { RichTextComponents } from "@/components/RichTextComponents";
import Link from "next/link";
import { getPlace } from "/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import PackageCarousel from "@/components/packageCarousel";

const Place = async ({ params }) => {
  const slug = params.place;
  const place = await getPlace({ slug });
  const slides = place.placeImages;

  const countryName =
    Array.isArray(place.country) && place.country.length > 0
      ? place.country[0].toLowerCase()
      : "";

  return (
    <div className="container mt-0 md:mt-24">
      <div className="flex items-center mb-3">
        <Link href="/places" className="gradient-text">
          Destinations
        </Link>
        <h6 className="text-sm">
          <BsChevronRight className="pt-[2px]" />
        </h6>
        <Link
          href={`/countries/${countryName}`}
          className=" text-neutral-500 dark:text-neutral-400"
        >
          {place.country}
        </Link>
      </div>

      <h2 className="text-2xl md:text-4xl font-bold mb-2">{place.placeName}</h2>

      {slides && slides.length > 0 ? (
        <PackageCarousel slides={slides} />
      ) : (
        <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
          <div className="flex justify-center my-8">
            <BsImageAlt className="w-16 h-16 text-neutral-300 dark:text-neutral-500" />
          </div>
        </div>
      )}

      <div className="mb-4 px-4 mt-2">
        <PortableText value={place.content} components={RichTextComponents} />
      </div>
    </div>
  );
};

export default Place;
