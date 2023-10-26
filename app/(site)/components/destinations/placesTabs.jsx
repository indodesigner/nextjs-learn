"use client";
import { useLanguage } from "/contexts/languageContext";
import PlacesTabContent from "@/components/destinations/placesTabContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlacesTabs = ({ indianPlaces, japanesePlaces }) => {
  const { language } = useLanguage();

  return (
    <div>
      <h3 className="text-3xl font-bold my-4">
        {language === "english" ? "Destinations" : "目的地"}
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
        <TabsContent value="india">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "english" ? "India" : "インド"}
              </CardTitle>
              <CardDescription>
                {language === "english"
                  ? "All the Indian destinations are listed below"
                  : "インドのすべての目的地は以下にリストされています"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PlacesTabContent places={indianPlaces} language={language} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="japan">
          <Card>
            <CardHeader>
              <CardTitle>{language === "english" ? "Japan" : "日本"}</CardTitle>
              <CardDescription>
                {language === "english"
                  ? "All the Japanese destinations are listed below"
                  : "日本のすべての目的地は以下にリストされています"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <PlacesTabContent places={japanesePlaces} language={language} />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlacesTabs;
