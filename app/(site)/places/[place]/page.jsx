import PlaceContent from "../placeContent";
import { getPlace } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";

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
      <PlaceContent place={place} slides={slides} country={countryName} />
      <GetCountry country={countryName} />
    </div>
  );
};

export default Place;
