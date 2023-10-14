import TopAnime from "@/components/TopAnime";
import React from "react";

const SearchKey = async ({ params }: any) => {
  const { keyword } = params;
  const animeURL = process.env.ANIMEURI;

  const response = await fetch(`${animeURL}/anime?q=${keyword}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60, tags: ["topanime", "anime"] },
  });
  const data = await response.json();

  /*ini adlah card berbentuk flex  */
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to my Anime List</h1>

        <div className="flex flex-wrap justify-center gap-2">
          {data.data.map((anime: any) => (
            <TopAnime
              key={anime.mal_id}
              links="#"
              classname="w-[400px] h-[600px]"
              title={anime.title.slice(0, 20) + "..."}
              image={anime.images.jpg.image_url}
              score={anime.score}
              waktu={anime.aired.string}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default SearchKey;
