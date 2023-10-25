"use client";
import React from "react";
import PackagesCards from "@/components/packages/packagesCards";
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
          <TabsTrigger value="india">India</TabsTrigger>
          <TabsTrigger value="japan">Japan</TabsTrigger>
        </TabsList>
        <TabsContent value="india" className="flex flex-col gap-2">
          {trendingIndia != 0 ? (
            <PackagesCards
              packages={trendingIndia}
              heading={trendingIndia[0].packageFilter}
            />
          ) : null}
          {popularIndia != 0 ? (
            <PackagesCards
              packages={popularIndia}
              heading={popularIndia[0].packageFilter}
            />
          ) : null}
          {indianPacks != 0 ? (
            <PackagesCards packages={indianPacks} heading={"All"} />
          ) : null}
        </TabsContent>
        <TabsContent value="japan" className="flex flex-col gap-2">
          {trendingJapan != 0 ? (
            <PackagesCards
              packages={trendingJapan}
              heading={trendingJapan[0].packageFilter}
            />
          ) : null}
          {popularJapan != 0 ? (
            <PackagesCards
              packages={popularJapan}
              heading={popularJapan[0].packageFilter}
            />
          ) : null}
          {japanesePacks != 0 ? (
            <PackagesCards packages={japanesePacks} heading={"All"} />
          ) : null}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PackagesTabs;
