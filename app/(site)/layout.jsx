import { DM_Sans, Roboto } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Providers from "@/components/providers";
import { CountryProvider } from "/contexts/countryContext";
import { LanguageProvider } from "/contexts/languageContext";
import SmoothScrolling from "@/components/animations/lenisScroll";
import Navbar from "@/_layout/Navbar";
import Footer from "@/_layout/footer";
import ScrollToTopButton from "@/components/scrollToTopButton";

const display = DM_Sans({
  weight: ["variable"],
  subsets: ["latin"],
  variable: "--font-headings",
  display: "swap",
});

const primary = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  // weight: ["variable"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title:
    "Travel and Tour Packages | Affordable Packages for Vaccations | Niko Travels - Kochi",
  description:
    "Explore the world with Niko! Discover curated travel packages, unbeatable deals, and unforgettable experiences. Plan your dream vacaation and let us turn your travel aspirations into reality. Book now for a journey filled with adventure, luxury, and unparalleled service!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${primary.variable}`}>
      <body className="bg-neutral-50 dark:bg-neutral-900 min-h-screen bg-images">
        <div className="scroll-watcher"></div>
        <Providers>
          <CountryProvider>
            <LanguageProvider>
              <SmoothScrolling>
                <Navbar />
                <main className="min-h-[100svh]">{children}</main>
                <ScrollToTopButton />
                <Footer />
              </SmoothScrolling>
            </LanguageProvider>
          </CountryProvider>
        </Providers>

        {/* google analytics tags....................... */}
        <GoogleAnalytics gaId="G-0SH9RRRGYN" />
        <GoogleTagManager gtmId="GTM-53GRCD5N" />
      </body>
    </html>
  );
}
