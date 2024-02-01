import GetCountry from "@/components/getCountry";
import PlaceCard from "@/components/destinations/placeCard";

const RelatedPlaces = ({ relatedPlaces, language }) => {
  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
        <PlaceCard places={relatedPlaces} language={language} />
      </div>

      <GetCountry country={null} />
    </>
  );
};

export default RelatedPlaces;
