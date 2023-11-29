"use client";
import Image from "next/image";
import PackagesTabContent from "@/components/packages/packagesTabContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "/contexts/languageContext";
import IndiaFlagIcon from "/public/images/india-flag-icon.svg";
import JapanFlagIcon from "/public/images/japan-flag-icon.svg";

const PackagesTabs = ({
  indianPacks,
  japanesePacks,
  trendingIndia,
  trendingJapan,
  popularIndia,
  popularJapan,
}) => {
  const { language } = useLanguage();

  return (
    <div className="sm:mt-8">
      <h2 className="text-3xl font-extrabold my-4">
        {language === "english" ? "Packages" : "パッケージ"}
      </h2>

      <Tabs defaultValue="india">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="india">
            <Image
              src={IndiaFlagIcon}
              width={20}
              height={20}
              className="me-1"
            ></Image>
            {language === "english" ? "India" : "インド"}
          </TabsTrigger>
          <TabsTrigger value="japan">
            <Image
              src={JapanFlagIcon}
              width={20}
              height={20}
              className="me-1"
            ></Image>
            {language === "english" ? "Japan" : "日本"}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="india" className="flex flex-col gap-2">
          {trendingIndia != 0 ? (
            <PackagesTabContent
              packages={trendingIndia}
              // heading={trendingIndia[0].packageFilter}
              heading={language === "english" ? "Trending" : "トレンド"}
              language={language}
              country={"india"}
            />
          ) : null}
          {popularIndia != 0 ? (
            <PackagesTabContent
              packages={popularIndia}
              // heading={popularIndia[0].packageFilter}
              heading={language === "english" ? "Popular" : "人気のある"}
              language={language}
              country={"india"}
            />
          ) : null}
          {indianPacks != 0 ? (
            <PackagesTabContent
              packages={indianPacks}
              // heading={"All"}
              heading={language === "english" ? "All" : "全て"}
              language={language}
              country={"india"}
            />
          ) : null}
        </TabsContent>
        <TabsContent value="japan" className="flex flex-col gap-2">
          {trendingJapan != 0 ? (
            <PackagesTabContent
              packages={trendingJapan}
              // heading={trendingJapan[0].packageFilter}
              heading={language === "english" ? "Trending" : "トレンド"}
              language={language}
              country={"japan"}
            />
          ) : null}
          {popularJapan != 0 ? (
            <PackagesTabContent
              packages={popularJapan}
              // heading={popularJapan[0].packageFilter}
              heading={language === "english" ? "Popular" : "人気のある"}
              language={language}
              country={"japan"}
            />
          ) : null}
          {japanesePacks != 0 ? (
            <PackagesTabContent
              packages={japanesePacks}
              // heading={"All"}
              heading={language === "english" ? "All" : "全て"}
              language={language}
              country={"japan"}
            />
          ) : null}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PackagesTabs;
