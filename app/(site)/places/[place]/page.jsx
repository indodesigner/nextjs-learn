import { RichTextComponents } from "/components/RichTextComponents";
import Link from "next/link";
import Image from "next/image";
import { getPlace } from "/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
// import urlFor from "/components/urlFor";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";

const Place = async ({ params }) => {
  const slug = params.place;
  const place = await getPlace({ slug });

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

      <h2 className="text-2xl md:text-4xl font-bold">{place.placeName}</h2>

      <div className="grid sm:grid-cols-2 gap-3">
        {place.placeImages ? (
          place.placeImages.map((image) => (
            <Image
              src={image.asset.url}
              width={1080}
              height={480}
              className="mb-4 h-[400px] object-cover rounded-md"
              alt={`${place.slug}-image`}
            ></Image>
          ))
        ) : (
          <div className="flex justify-center my-8">
            <BsImageAlt className="w-16 h-16 text-white" />
          </div>
        )}
      </div>

      <div className="mb-4 px-4">
        <PortableText value={place.content} components={RichTextComponents} />
      </div>
    </div>
  );
};

export default Place;
