import GetInTouchContent from "@/components/getInTouchContent";
import { getPackages } from "/sanity/sanity-utils";

const GetInTouch = async () => {
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const indianPacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });
  const indianPackDetails = indianPacks.map((item) => ({
    name: item.packageName,
    slug: item.slug,
  }));
  const japanesePackDetails = japanesePacks.map((item) => ({
    name: item.packageName,
    slug: item.slug,
  }));
  return (
    <div>
      <GetInTouchContent
        indianPackDetails={indianPackDetails}
        japanesePackDetails={japanesePackDetails}
      />
    </div>
  );
};

export default GetInTouch;
