import GetCountry from "@/components/getCountry";
import { getPackages } from "/sanity/sanity-utils";
import ContactContent from "./contactContent";

export const metadata = {
  title: "Niko Travels",
  description: "Explore with Niko Travels - Contact",
};

const ContactPage = async () => {
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
    <>
      <ContactContent
        indianPackDetails={indianPackDetails}
        japanesePackDetails={japanesePackDetails}
      />
      <GetCountry country={null} />
    </>
  );
};

export default ContactPage;
