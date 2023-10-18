import TopAnime from "@/components/TopAnime";
import React from "react";

const SearchKey = async ({ params }: any) => {
  const { keyword } = params;

  const animeURL = process.env.ANIME;
  const response = await fetch(`${animeURL}/api/v1/search/${keyword}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60, tags: ["topanime", "anime"] },
  });
  const data = await response.json();
  console.log(data);

  const dKey = decodeURI(keyword);

  /*ini adlah card berbentuk flex  */
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">
          Pencarian untuk : {dKey.charAt(0).toUpperCase() + dKey.slice(1)}
          <span className="text-sm text-gray-500">
            ({data.search.length} hasil)
          </span>
          {data.search.length === 0 && (
            <span className="text-sm text-gray-500">
              Tidak ada hasil untuk :{" "}
              {dKey.charAt(0).toUpperCase() + dKey.slice(1)}
            </span>
          )}
        </h1>

        <div className="flex flex-wrap justify-center gap-2">
          {data.search.map((anime: any) => (
            <TopAnime
              key={anime.id}
              links="#"
              classname="w-[400px] h-[600px]"
              title={anime.title.slice(0, 20) + "..."}
              image={anime.thumb}
              score={anime.rating}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default SearchKey;
