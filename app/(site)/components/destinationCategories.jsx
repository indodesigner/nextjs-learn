import Image from "next/image";
import Link from "next/link";

const DestinationCategories = ({ placeTypes, language }) => {
  return (
    <div className="bg-red-100 dark:bg-neutral-700 bg-opacity-30 dark:bg-opacity-30 shadow-lg backdrop-blur-lg dark:backdrop-blur-lg rounded-xl">
      <h4 className="text-neutral-800 dark:text-neutral-50 text-xl sm:text-2xl font-bold py-4 text-center">
        {language === "english" ? "Destination Categories" : "目的地のカテゴリ"}
      </h4>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 p-4 place-items-center">
        {placeTypes &&
          placeTypes.map((item) => (
            <Link
              key={item._id}
              href={`placeTypes/${item.slug}`}
              className="bg-primary-color hover:bg-primary-color-hover dark:bg-neutral-600 dark:bg-opacity-10 dark:backdrop-blur-md p-2 ps-4 w-full flex items-center gap-2 rounded-xl hover:-translate-y-1 hover:shadow-md transition"
            >
              {item.placeTypeIcon ? (
                <Image
                  src={item.placeTypeIcon}
                  width={100}
                  height={100}
                  alt={item.placeTypeIcon.alt}
                  className="w-auto h-16"
                ></Image>
              ) : null}

              <h5 className="text-white font-bold">
                {language === "english"
                  ? item.placeTypeName
                  : item.placeTypeNamejp || item.placeTypeName}
              </h5>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DestinationCategories;
