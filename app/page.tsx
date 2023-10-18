import Allanime from "@/components/Allanime";
import ReactPaginate from "react-paginate";
import React from "react";
import TopAnime from "@/components/TopAnime";
import type { Metadata } from "next";
import Link from "next/link";
const animeURL = process.env.ANIMEURI;

interface Data {
  data: {
    [x: string]: any;
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
      };
      webp: {
        image_url: string;
      };
    };
    trailer: {
      youtube_id: string;
      url: string;
      embed_url: string;
      images: {
        image_url: string;
        maximum_image_url: string;
      };
    };
    approved: true;
    title: string;
    type: string;
    source: string;
    episodes: number;
    status: string;
    aired: {
      from: string;
      to: string;
    };
    score: number;
    synopsis: string;
    season: string;
    year: number;

    genres: [
      {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      },
      {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      },
      {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      },
      {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      }
    ];
  };
}
export const metadata: Metadata = {
  title: "Home",
};

const Home = async () => {
  const response = await fetch(`${animeURL}/top/anime?limit=10`, {
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
      <h1 className="text-4xl font-bold text-center mt-[20px]">
        Welcome to my Anime List
      </h1>
      <div className="flex justify-center gap-[85rem] md:gap-20 sm:gap-7 lg:gap-[50rem]">
        <h2 className="text-2xl font-bold">On Going Anime</h2>
        <Link
          href="/ongoing"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-sm hover:shadow-lg"
        >
          see all
        </Link>
      </div>

      <div className=" items-center justify-between p-4">
        <div className="flex flex-wrap justify-center gap-2">
          {data.data.map((anime: any) => (
            <TopAnime
              key={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              links="#"
              waktu={anime.aired.from.toString("dddd, DD MMMM YYYY")}
              hari={toString.call(anime.aired.to)}
            />
          ))}
        </div>
      </div>
      <br />
      <h2 className="font-semibold text-xl text-teal-950 text-center my-10">
        All List Anime
      </h2>
      <div className="flex justify-center  mt-[4rem] gap-[85rem] md:gap-20 sm:gap-7 lg:gap-[50rem]">
        <h2 className="text-2xl font-bold">All Anime</h2>
        <Link
          href="/allanime"
          className="bg-blue-500 hover:bg-blue-700 justify-end items-end text-white font-bold py-2 px-4 rounded shadow-sm hover:shadow-lg"
        >
          see all
        </Link>
      </div>
      <div className="mx-3">
        <Allanime />
      </div>
    </>
  );
};
export default Home;
