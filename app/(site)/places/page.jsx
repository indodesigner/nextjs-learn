import { getPlaces } from "/sanity/sanity-utils";
import PlacesTabs from "@/components/placesTabs";
import GetCountry from "@/components/getCountry";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Places() {
  const places = await getPlaces(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)

  const indianPlaces = places.filter((place) => {
    return place.country && place.country.includes("India");
  });
  const japanesePlaces = places.filter((place) => {
    return place.country && place.country.includes("Japan");
  });

  return (
    <div className="container mt-0 md:mt-24">
      <h3 className="text-3xl font-bold my-4">Destinations</h3>

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
                All the Indian destinations are listes below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PlacesTabs places={indianPlaces} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="japan">
          <Card>
            <CardHeader>
              <CardTitle>Japan</CardTitle>
              <CardDescription>
                All the Japanese destinations are listes below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PlacesTabs places={japanesePlaces} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <GetCountry country={null} />
    </div>
  );
}
