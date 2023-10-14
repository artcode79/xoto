import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Headers from "@/components/Headers";
import Footers from "@/components/Footers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
  keywords: "XotoNime, anime, anime list",
  authors: [{ name: "XotoNime", url: "https://xotonime.xyz" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Headers />
        </header>
        {children}
        <Footers />
      </body>
    </html>
  );
}
