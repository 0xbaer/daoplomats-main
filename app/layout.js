import { Urbanist } from "next/font/google";
import { Philosopher } from "next/font/google";

import localFont from "next/font/local";

import "./globals.css";

import { MouseCursor } from "@/components/ui/customCursor/MouseCursor";

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
  description:
    "Expert team providing customized solutions for decentralized governance. We prioritize objective decision-making, decentralization, positive-sum interactions, and representing everyday users in the DAO ecosystem.",

  applicationName: "DAOplomats",
  referrer: "origin-when-cross-origin",
  keywords: [
    "DAOplomats",
    "DAO",
    "Decentralized Autonomous Organization",
    "Decentralized",
    "Autonomous",
    "Organization",
    "Blockchain",
    "Web3",
    "Ethereum",
    "Aave",
    "ShutterDAO",
    "Shutter Network",
    "Governance",
    "Governance Solutions",
    "Governance Services",
    "Decentralized Governance",
    "Decentralized Governance Solutions",
    "Decentralized Governance Services",
    "Decentralized Governance Experts",
    "Decentralized Governance Consultants",
    "Decentralized Governance Advisors",
    "Decentralized Governance Specialists",
    "Decentralized Governance Strategists",
  ],
  authors: [{ name: "Gautam, Raj" }, { name: "Baer" }, { name: "Jenga Jojo" }],
  creator: "Gautam Raj",
  publisher: "Gautam Raj",

  metadataBase: new URL("https://daoplomats-main-five.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    title: "DAOplomats",
    description:
      "Expert team providing customized solutions for decentralized governance. We prioritize objective decision-making, decentralization, positive-sum interactions, and representing everyday users in the DAO ecosystem.",
    url: "https://daoplomats-main-five.vercel.app",
    siteName: "DAOplomats",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DAOplomats",
    description:
      "Expert team providing customized solutions for decentralized governance. We prioritize objective decision-making, decentralization, positive-sum interactions, and representing everyday users in the DAO ecosystem.",
  },

  icons: {
    icon: "/icons/icon.png",
    appleTouchIcon: "/icons/apple-icon.png",
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} ${philosopher.variable} ${urbanist.variable} antialiased`}
      >
        <MouseCursor />
        {children}
      </body>
    </html>
  );
}
