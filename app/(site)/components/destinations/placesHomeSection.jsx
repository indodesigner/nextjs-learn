import Link from "next/link";
import PlaceCard from "@/components/destinations/placeCard";
import useMediaQuery from "/hooks/useMediaQuery";

export default function PlacesSection({ places, language }) {
  const showViewAllLink = places.length > 3;
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const placesToDisplay = isSmallScreen
    ? places.slice(0, 4)
    : places.slice(0, 3); // Get the first 3/4 places

  return (
    <>
      <div className="flex justify-between mb-4 px-1">
        <h4 className="text-xl sm:text-2xl font-bold">
          {language === "english" ? "Destinations" : "目的地"}
        </h4>
        {showViewAllLink && (
          <Link
            href="/places"
            className="button-primary group text-xs font-medium"
          >
            {language === "english" ? "View all" : "すべて見る"}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
        <PlaceCard places={placesToDisplay} language={language} />
      </div>
    </>
  );
}
