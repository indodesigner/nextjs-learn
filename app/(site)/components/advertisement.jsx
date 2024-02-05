import AdContent from "@/components/adContent";
import { getAds } from "/sanity/sanity-utils";

const Advertisement = async () => {
  const ads = await getAds();
  return (
    <div>
      <AdContent ads={ads} />
    </div>
  );
};

export default Advertisement;
