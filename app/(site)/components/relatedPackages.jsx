import GetCountry from "@/components/getCountry";
import PackageCard from "@/_sections/packages/packageCard";

const RelatedPackages = ({ relatedPacks, heading, headingjp, language }) => {
  return (
    <>
      <h4 className="text-lg sm:text-xl font-bold my-4 text-red-500">
        <span className="text-neutral-900 dark:text-neutral-50 me-2 font-light">
          {language == "english" ? "Suggested" : "パッケージ"}
        </span>
        {language == "english" ? heading : headingjp}
        <span className="text-neutral-900 dark:text-neutral-50 ms-2 font-light">
          {language == "english" ? "Tour Packages" : "旅行 パッケージ"}
        </span>
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <PackageCard packages={relatedPacks} language={language} />
      </div>

      <GetCountry country={null} />
    </>
  );
};

export default RelatedPackages;
