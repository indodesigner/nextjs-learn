import PlaceContent from "../placeContent";
import { getPlace, getPackages } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";

const Place = async ({ params }) => {
  const slug = params.place;
  const place = await getPlace({ slug });
  const slides = place.placeImages;

  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const relatedPacks = packages.filter((pack) => {
    return (
      pack.place &&
      pack.place.some((item) => item.placeName.includes(place.placeName))
    );
  });

  const countryName =
    Array.isArray(place.country) && place.country.length > 0
      ? place.country[0].toLowerCase()
      : "";

  return (
    <div className="container mt-0 lg:mt-24">
      <PlaceContent
        place={place}
        slides={slides}
        country={countryName}
        relatedPacks={relatedPacks}
      />
      <GetCountry country={countryName} />
    </div>
  );
};

export default Place;

export const revalidate = 10;
