import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Headers from "@/components/Headers";
import Footers from "@/components/Footers";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
  keywords: "XotoNime, anime, anime list",
  authors: [{ name: "XotoNime", url: "https://xotonime.xyz" }],
  twitter: {
    card: "summary_large_image",
    title: "XotoNime",
    description: "Anime List",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:site" content="@xotonime"></meta>
        <meta property="twitter:creator" content="@xotonime"></meta>
        <meta property="twitter:title" content="XotoNime"></meta>
        <meta property="twitter:description" content="Anime List"></meta>
        <meta property="twitter:image" content="/favicon.ico"></meta>
        <meta property="og:title" content="XotoNime" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xotonime.xyz" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:description" content="Anime List" />
        <meta property="og:site_name" content="XotoNime" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className={inter.className}>
        <header>
          <Headers />
        </header>
        {children}
        <Footers />
        <Analytics />
      </body>
    </html>
  );
}
