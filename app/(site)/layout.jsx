import { DM_Sans, Geologica, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Providers from "@/components/providers";
import { CountryProvider } from "/contexts/countryContext";
import { LanguageProvider } from "/contexts/languageContext";
import Navbar from "@/components/Navbar";
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
  title: "Niko Travels",
  description: "Explore with Niko Travels",
};

export default function RootLayout({ children }) {
  return (
    // passing font variables to global.css can be accessed there and used
    <html lang="en" className={`${display.variable} ${primary.variable}`}>
      {/* main layout page */}
      <body className="bg-neutral-50 dark:bg-neutral-900 min-h-screen bg-images">
        <div className="scroll-watcher"></div>
        <Providers>
          <CountryProvider>
            <LanguageProvider>
              <Navbar />
              <main className="min-h-[84vh] sm:min-h-[80vh] md:min-h-[78vh]">
                {children}
              </main>
              <ScrollToTopButton />
              <Footer />
            </LanguageProvider>
          </CountryProvider>
        </Providers>
      </body>
    </html>
  );
}
