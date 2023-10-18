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
  keywords: "XotoNime, anime, anime list",
  authors: [{ name: "XotoNime", url: "https://xotonime.xyz" }],
  twitter: {
    card: "summary_large_image",
    title: "XotoNime",
    description: "Anime List",
  },
  openGraph: {
    title: "XotoNime",
    description: "Anime List",
    url: "https://xoto.varcel.com",
    images: [{ url: "/favicon.ico" }],
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
  viewport: "width=device-width, initial-scale=1",
  creator: "XotoNime",
  generator: "XotoNime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1909779298462458"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          type="text/javascript"
          src="//pl20999686.highcpmrevenuegate.com/2f/4b/11/2f4b11fa855f85552cd098e0dd6d2ac0.js"
        ></script>
        <script
          async
          type="text/javascript"
          src="//pl20999614.highcpmrevenuegate.com/cc/1f/71/cc1f71564592ba7360aaf0db07c10ea9.js"
        ></script>
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
