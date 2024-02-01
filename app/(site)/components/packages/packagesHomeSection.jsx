import Link from "next/link";
import useMediaQuery from "/hooks/useMediaQuery";
import { Badge } from "@/components/ui/badge";
import PackageCard from "@/components/packages/packageCard";

export default function PackagesSection({ heading, packages, language }) {
  const showViewAllLink = packages.length > 3;

  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const packagesToDisplay = isSmallScreen
    ? packages.slice(0, 4)
    : packages.slice(0, 3); // Get the first 3/4 packages

  return (
    <div>
      <div className="flex justify-between mb-4 px-1">
        <div className="flex flex-row items-center gap-2">
          <h4 className="text-xl sm:text-2xl font-bold">
            {language === "english" ? "Explore" : "探検する"} {heading}
          </h4>
          {heading === "All" ? (
            ""
          ) : (
            <div>
              <Badge>
                <span className="gradient-text">Trending</span>
              </Badge>
            </div>
          )}
        </div>

        {showViewAllLink ? (
          <Link
            href="/packages"
            className="button-primary group text-xs font-medium"
          >
            {language === "english" ? "View all" : "すべて見る"}
          </Link>
        ) : // )
        null}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2">
        <PackageCard packages={packagesToDisplay} language={language} />
      </div>
    </div>
  );
}
