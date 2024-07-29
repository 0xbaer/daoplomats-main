import { Urbanist } from "next/font/google";
import { Philosopher } from "next/font/google";

import localFont from "next/font/local";

import "./globals.css";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-philosopher",
  preload: true,
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  preload: true,
});

const myFont = localFont({
  src: "./Helvetica.ttf",
  display: "swap",
  preload: true,
  variable: "--font-helvetica",
});

export const metadata = {
  title: "DAOplomats",
  description: "Working to DAO it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} ${philosopher.variable} ${urbanist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
