import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lolito Cycle | Top Speed & Azpire Bicycles, Gear & Accessories",
  description:
    "Shop high-performance bicycles from Lolito Cycle including Top Speed Cycle and Azpire Cycle. Find premium bikes, gear, and accessories for every rider.",
  keywords: [
    "Lolito Cycle",
    "Top Speed Cycle",
    "Azpire Cycle",
    "buy bicycles online",
    "cycling accessories",
    "mountain bikes",
    "road bikes",
    "bike gear",
    "bike shop",
    "best bicycles in India"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lolito Cycle | Premium Bicycles & Accessories",
    description:
      "Explore Lolito Cycle's wide range of performance bicycles and gear including the Top Speed and Azpire Cycle series.",
    url: "https://www.lolitocycle.com", // Replace with your actual domain
    siteName: "Lolito Cycle",
    images: [
      {
        url: "https://www.lolitocycle.com/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Lolito Cycle - Premium Bikes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lolito Cycle | Buy Top Speed & Azpire Bicycles Online",
    description:
      "Buy Top Speed and Azpire bicycles from Lolito Cycle. Quality bikes built for performance and style.",
    images: ["https://www.lolitocycle.com/og-image.jpg"], // Replace with your image
    creator: "@LolitoCycle", // Optional: Replace with your actual Twitter handle
  },
  authors: [{ name: "Lolito Cycle" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
      </body>
    </html >
  );
}

