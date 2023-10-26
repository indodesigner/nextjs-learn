"use client";
import PackagesTabContent from "@/components/packages/packagesTabContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "/contexts/languageContext";

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
    <div>
      <h3 className="text-3xl font-bold my-4">
        {language === "english" ? "Packages" : "パッケージ"}
      </h3>

      <Tabs defaultValue="india">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="india">
            {language === "english" ? "India" : "インド"}
          </TabsTrigger>
          <TabsTrigger value="japan">
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
            />
          ) : null}
          {popularIndia != 0 ? (
            <PackagesTabContent
              packages={popularIndia}
              // heading={popularIndia[0].packageFilter}
              heading={language === "english" ? "Popular" : "人気のある"}
              language={language}
            />
          ) : null}
          {indianPacks != 0 ? (
            <PackagesTabContent
              packages={indianPacks}
              // heading={"All"}
              heading={language === "english" ? "All" : "全て"}
              language={language}
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
            />
          ) : null}
          {popularJapan != 0 ? (
            <PackagesTabContent
              packages={popularJapan}
              // heading={popularJapan[0].packageFilter}
              heading={language === "english" ? "Popular" : "人気のある"}
              language={language}
            />
          ) : null}
          {japanesePacks != 0 ? (
            <PackagesTabContent
              packages={japanesePacks}
              // heading={"All"}
              heading={language === "english" ? "All" : "全て"}
              language={language}
            />
          ) : null}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PackagesTabs;
