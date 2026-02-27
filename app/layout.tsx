import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Google font
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

// Local font Termina
const termina = localFont({
  src: [
    { path: "../public/fonts/TerminaTest-Thin.woff2", weight: "100" },
    { path: "../public/fonts/TerminaTest-ExtraLight.woff2", weight: "200" },
    { path: "../public/fonts/TerminaTest-Light.woff2", weight: "300" },
    { path: "../public/fonts/TerminaTest-Regular.woff2", weight: "400" },
    { path: "../public/fonts/TerminaTest-Medium.woff2", weight: "500" },
    { path: "../public/fonts/TerminaTest-Demi.woff2", weight: "600" },
    { path: "../public/fonts/TerminaTest-Bold.woff2", weight: "700" },
    { path: "../public/fonts/TerminaTest-Heavy.woff2", weight: "800" },
    { path: "../public/fonts/TerminaTest-Black.woff2", weight: "900" },
  ],
  variable: "--font-termina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TNHC Church",
  description: "Welcome to TNHC Church",
  icons: {
    icon: "/logo/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${termina.variable} ${dmSans.variable}`}>
      <body
        className={`flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}