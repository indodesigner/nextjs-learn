import PackageCard from "@/_sections/packages/packageCard";
import FadeUp from "@/components/animations/fadeUp";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function PackagesTabContent({
  packages,
  heading,
  language,
  country,
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {heading}{" "}
            {country === "india"
              ? language === "english"
                ? "Kerala Packages"
                : "ケーララ州のバケーションパッケージ"
              : language === "english"
                ? "Japan Packages"
                : "日本パッケージ"}
          </CardTitle>

          <CardDescription>
            {country === "india"
              ? language === "english"
                ? `Explore Kerala's finest ${
                    heading === "All" ? "Tour" : heading
                  } Packages listed below`
                : "以下のケーララ州の最高のツアーパッケージを探索してください"
              : language === "english"
                ? `Explore Japan's Finest ${
                    heading === "All" ? "Tour" : heading
                  } Packages Listed Below`
                : "以下の日本最高のツアーパッケージを探索してください"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <FadeUp delay="0.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PackageCard packages={packages} language={language} />
            </div>
          </FadeUp>
        </CardContent>
      </Card>
    </>
  );
}
