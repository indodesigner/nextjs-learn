import { getPackages } from "/sanity/sanity-utils";
import PackagesTabs from "/components/packagesTabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs";

export default async function Packages() {
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const indianPacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });
  return (
    <div className="container mt-0 md:mt-24">
      <h1 className="text-4xl font-bold my-4">Packages</h1>

      <Tabs defaultValue="india">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="india">India</TabsTrigger>
          <TabsTrigger value="japan">Japan</TabsTrigger>
        </TabsList>
        <TabsContent value="india">
          <Card>
            <CardHeader>
              <CardTitle>India</CardTitle>
              <CardDescription>
                All the Indian tour packages are listes below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PackagesTabs packages={indianPacks} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="japan">
          <Card>
            <CardHeader>
              <CardTitle>Japan</CardTitle>
              <CardDescription>
                All the Japanese tour packages are listes below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PackagesTabs packages={japanesePacks} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
