"use client";
import Image from "next/image";
import { useLanguage } from "/contexts/languageContext";
import PlacesTabContent from "@/components/destinations/placesTabContent";
import IndiaFlagIcon from "/public/images/india-flag-icon.svg";
import JapanFlagIcon from "/public/images/japan-flag-icon.svg";
import DestinationCategories from "@/components/destinationCategories";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlacesTabs = ({ indianPlaces, japanesePlaces, placeTypes }) => {
  const { language } = useLanguage();

  return (
    <>
      <h2 className="text-3xl font-extrabold my-4">
        {language === "english" ? "Destinations" : "目的地"}
      </h2>

      <section className="mb-4">
        <Tabs defaultValue="india">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="india">
              <Image
                src={IndiaFlagIcon}
                width={20}
                height={20}
                className="me-1"
                alt="Indian flag button icon"
              ></Image>
              {language === "english" ? "India" : "インド"}
            </TabsTrigger>
            <TabsTrigger value="japan">
              <Image
                src={JapanFlagIcon}
                width={20}
                height={20}
                className="me-1"
                alt="Japanese flag button icon"
              ></Image>
              {language === "english" ? "Japan" : "日本"}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="india">
            <Card>
              {indianPlaces != 0 ? (
                <CardHeader>
                  <CardTitle>
                    {language === "english"
                      ? "Kerala Odyssey: Unveiling the Charms of God's Own Country"
                      : "ケララ オデッセイ: 神の国の魅力を明らかにする"}
                  </CardTitle>
                  <CardDescription>
                    {language === "english"
                      ? "Explore our Curated Collection of Kerala Destinations Below"
                      : "以下のケーララ州の目的地の厳選コレクションをご覧ください"}
                  </CardDescription>
                </CardHeader>
              ) : null}
              <CardContent className="space-y-2">
                {indianPlaces != 0 ? (
                  <PlacesTabContent places={indianPlaces} language={language} />
                ) : (
                  <h1 className="mt-8">
                    Error loading data, Please reload the page
                  </h1>
                )}
              </CardContent>
              {/* <CardFooter></CardFooter> */}
            </Card>
          </TabsContent>
          <TabsContent value="japan">
            {japanesePlaces != 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "english"
                      ? "Discover the Wonders of Japan"
                      : "日本の不思議を発見する"}
                  </CardTitle>
                  <CardDescription>
                    {language === "english"
                      ? "Explore our Curated Collection of Japan Destinations Below"
                      : "以下の厳選された日本の目的地コレクションをご覧ください"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <PlacesTabContent
                    places={japanesePlaces}
                    language={language}
                  />
                </CardContent>
              </Card>
            ) : (
              <div className="text-center">
                <h1 className="mt-8">Coming soon...</h1>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
      <section>
        <DestinationCategories placeTypes={placeTypes} language={language} />
      </section>
    </>
  );
};

export default PlacesTabs;
