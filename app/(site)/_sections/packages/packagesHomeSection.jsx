import Link from "next/link";
import useMediaQuery from "/hooks/useMediaQuery";
import { Badge } from "@/components/ui/badge";
import PackageCard from "@/_sections/packages/packageCard";

export default function PackagesSection({ heading, packages, language }) {
  const showViewAllLink = packages && packages.length > 3;

  const { id, title } = heading;

  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const packagesToDisplay = isSmallScreen
    ? packages && packages.slice(0, 4)
    : packages && packages.slice(0, 3); // Get the first 3/4 packages

  return (
    <div>
      <div className="flex justify-between mb-4 px-1">
        <div className="flex flex-row items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold">
            {id === "in" || id === "jp"
              ? language === "english"
                ? "Explore"
                : "探検する"
              : null}{" "}
            {title}
          </h2>
          {id === "in" || id === "jp" ? (
            <div>
              <Badge>
                <span className="gradient-text">
                  {language === "english" ? "Trending" : "トレンド"}
                </span>
              </Badge>
            </div>
          ) : null}
        </div>

        {showViewAllLink ? (
          <Link
            href="/packages"
            className="button-primary group text-xs font-medium"
          >
            {language === "english" ? "View all" : "すべて見る"}
          </Link>
        ) : null}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <PackageCard packages={packagesToDisplay} language={language} />
      </div>
    </div>
  );
}

export const revalidate = 10;
