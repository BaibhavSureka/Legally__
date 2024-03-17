"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter,Raleway,Carme } from "next/font/google";
import "../globals.css";
import {HoverEffect} from "@/components/ui/card-hover-effect";
const inter = Inter({ subsets: ["latin"] });
const oswald = Raleway({ subsets: ["latin"] });
const carme = Carme({ weight: "400", subsets: ["latin"] });
import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${carme.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {/* <HoverEffect /> */}
          {children}
          {/* <Footer /> */}
          {/* <ScrollToTop /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
