import React from "react";
import Image from "next/image";
import Link from "next/link";

const animeURL = process.env.ANIMEURI;

const Allanime = async () => {
  const response = await fetch(`${animeURL}/anime`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60, tags: ["topanime", "anime"] },
  });

  const data = await response.json();

  const getPaginate = async () => {};

  return (
    <>
      <div className="flex flex-wrap justify-center items-center p-4  rounded-lg shadow-md  hover:shadow-xl">
        {data.data.map((anime: any, index: number) => (
          <>
            <div
              key={anime.mal_id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 transition p-4"
            >
              <Link
                className="block"
                href={`/anime/${anime.mal_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg"
                  width={300}
                  height={200}
                  loading="lazy"
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                />
                <h3 className="text-lg font-bold">{anime.title}</h3>
                <p className="text-sm">Rating: {anime.rating}</p>
                <p className="text-sm">
                  {anime.synopsis.slice(0, 100)
                    ? anime.synopsis.slice(0, 100)
                    : anime.synopsis}
                  ...
                  <span className="text-blue-500">Read More</span>
                </p>
              </Link>
            </div>
          </>
        ))}{" "}
        <br />
      </div>
      <div
        className="justify-center mt-2 
       rounded-sm shadow-md "
      ></div>
    </>
  );
};

export default Allanime;
