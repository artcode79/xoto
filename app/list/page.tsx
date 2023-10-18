import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "XotoNime | List",
  description: "List of anime",
  openGraph: {
    title: "XotoNime | List",
    description: "List of anime",
    url: "https://xoto.vercel.app/list",
  },
};

const Page = async () => {
  const response = await fetch(`${process.env.ANIME}/api/v1/anime-list`, {
    method: "GET",
  });
  const data = await response.json();
  return (
    <>
      <h1>List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {data.manga_list.map((anime: any, index: number) => (
          <>
            <div
              key={anime.mal_id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 transition p-4"
            >
              <Link href={`/search/${anime.title}`}>
                <h3 className="text-lg font-bold">
                  {anime.title
                    .replace(/[^a-zA-Z0-9]/g, " ")
                    .trim(
                      anime.title.includes(" anime")
                        ? anime.title.split(" ")[0]
                        : ""
                    )}
                </h3>
                <p>{anime.endpoint}</p>
              </Link>
            </div>
          </>
        ))}
        <br />
      </div>
    </>
  );
};

export default Page;
