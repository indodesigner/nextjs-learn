import { getPackages } from "/sanity/sanity-utils";
import PackagesTabs from "@/components/packagesTabs";
import GetCountry from "@/components/getCountry";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Packages() {
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const packagesWithDuration = packages.map((pack) => {
    const retdate = new Date(pack.returnDate);
    const depDate = new Date(pack.departureDate);
    const dateDiff = retdate - depDate;
    const duration = dateDiff / (1000 * 60 * 60 * 24);
    return { ...pack, duration };
  });
  const indianPacks = packagesWithDuration.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePacks = packagesWithDuration.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });

  const trendingIndia = indianPacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Trending");
  });
  const trendingJapan = japanesePacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Trending");
  });

  const popularIndia = indianPacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Popular");
  });
  const popularJapan = japanesePacks.filter((pack) => {
    return pack.packageFilter && pack.packageFilter.includes("Popular");
  });

  return (
    <div className="container mt-0 md:mt-24">
      <h1 className="text-4xl font-bold my-4">Packages</h1>

      <Tabs defaultValue="india">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="india">India</TabsTrigger>
          <TabsTrigger value="japan">Japan</TabsTrigger>
        </TabsList>
        <TabsContent value="india" className="flex flex-col gap-2">
          {trendingIndia != 0 ? (
            <PackagesTabs
              packages={trendingIndia}
              heading={trendingIndia[0].packageFilter}
            />
          ) : null}
          {popularIndia != 0 ? (
            <PackagesTabs
              packages={popularIndia}
              heading={popularIndia[0].packageFilter}
            />
          ) : null}
          {indianPacks != 0 ? (
            <PackagesTabs packages={indianPacks} heading={"All"} />
          ) : null}
        </TabsContent>
        <TabsContent value="japan" className="flex flex-col gap-2">
          {trendingJapan != 0 ? (
            <PackagesTabs
              packages={trendingJapan}
              heading={trendingJapan[0].packageFilter}
            />
          ) : null}
          {popularJapan != 0 ? (
            <PackagesTabs
              packages={popularJapan}
              heading={popularJapan[0].packageFilter}
            />
          ) : null}
          {japanesePacks != 0 ? (
            <PackagesTabs packages={japanesePacks} heading={"All"} />
          ) : null}
        </TabsContent>
      </Tabs>
      <GetCountry country={null} />
    </div>
  );
}
