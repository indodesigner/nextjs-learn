import { Outfit, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
// import Footer from "../../components/footer";
import Providers from "../../components/providers";
import Navbar from "../../components/navbar/Navbar";

const outfit = Outfit({
  weight: ["variable"],
  subsets: ["latin"],
  variable: "--font-headings",
  display: "swap",
});

const noto_sans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  title: "Learn NextJS Frontend",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // passing font variables to global.css can be accessed there and used
    <html lang="en" className={`${outfit.variable} ${noto_sans.variable}`}>
      {/* main layout page */}
      <body className="min-h-screen bg-white dark:bg-black">
        {/* apply background gradient top and bottom images through css (globals.css) */}
        {/* <div className="bg-header-gradient"></div> */}
        <Providers>
          {/* common navbar component (/components/navbar.jsx)*/}
          <div className="hidden md:block sticky top-0 z-50">
            <Header />
          </div>
          <div className="block md:hidden sticky top-0 z-50">
            <Navbar />
          </div>

          <main className="">
            {/* rendering childrens - Next Js */}
            {children}
          </main>
          {/* common footer component (/components/footer.jsx)*/}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
