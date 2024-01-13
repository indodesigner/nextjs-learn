import PlaceTypeContent from "../placeTypeContent";
import { getPlaceType, getPackages } from "/sanity/sanity-utils";
import GetCountry from "@/components/getCountry";

const PlaceType = async ({ params }) => {
  const slug = params.placeType;
  const placeType = await getPlaceType({ slug });
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const relatedPacks = packages.filter((pack) => {
    return (
      pack.placeTypes &&
      pack.placeTypes.some((item) =>
        item.placeTypeName.includes(placeType.placeTypeName)
      )
    );
  });

  const slides = placeType && placeType.placeTypeImages;

  return (
    <div className="container mt-0 lg:mt-24">
      <PlaceTypeContent
        placeType={placeType}
        slides={slides}
        relatedPacks={relatedPacks}
      />
      <GetCountry country={null} />
    </div>
  );
};

export default PlaceType;

export const revalidate = 10;
