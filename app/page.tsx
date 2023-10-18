import Allanime from "@/components/Allanime";
import ReactPaginate from "react-paginate";
import React from "react";
import TopAnime from "@/components/TopAnime";
import type { GetServerSideProps, Metadata } from "next";
import Link from "next/link";
const animeURL = process.env.ANIME;

interface Data {
  ongoing: {
    title: string;
    thumb: string;
    total_episode: string;
    updated_on: string;
    updated_day: string;
    endpoint: string;
  }[];
}
export const metadata: Metadata = {
  title: "Home",
};

const Home = async () => {
  const response = await fetch(`${animeURL}/api/v1/ongoing/1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60, tags: ["topanime", "anime"] },
  });
  const data: Data = await response.json();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to my Anime List</h1>

        <h2 className="text-2xl font-bold">On Going Anime</h2>
        <Link
          href="/ongoing"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-sm hover:shadow-lg"
        >
          see all
        </Link>
        <div className="flex flex-wrap justify-center gap-2">
          {data.ongoing.length > 0 &&
            data.ongoing.map((anime) => (
              <TopAnime
                key={anime.endpoint}
                title={anime.title}
                image={anime.thumb}
                description={anime.total_episode}
                links={anime.endpoint}
                waktu={anime.updated_on}
                hari={anime.updated_day}
                endpoint={anime.endpoint}
              />
            ))}
        </div>

        <div className="flex  mt-[2rem]">
          <h2 className="text-2xl font-bold justify-start items-start">
            All Anime
          </h2>
          <Link
            href="/allanime"
            className="bg-blue-500 hover:bg-blue-700 justify-end items-end text-white font-bold py-2 px-4 rounded shadow-sm hover:shadow-lg"
          >
            see all
          </Link>
        </div>
        {/* <Allanime /> */}
      </main>
    </>
  );
};
export default Home;
