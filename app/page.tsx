import Allanime from "@/components/Allanime";
import TopAnime from "@/components/TopAnime";
import type { Metadata } from "next";
const animeURL = process.env.ANIMEURI;

export const metadata: Metadata = {
  title: `XotoNime | Home`,
  description: "Home Page of XotoNime",
  keywords:
    "XotoNime, Home, Top Anime, Anime, Anime List, Anime List Website, Anime List App, Anime List Mobile App, Anime List Desktop App, Anime List Web App, Anime List Mobile App, Anime List Web App, Anime List Mobile App, Anime List Web App, Anime List Mobile App, Anime List Web App, Anime List Mobile App, Anime List Web App, Anime",
  generator: "XotoNime",
};
const Home = async () => {
  const response = await fetch(`${animeURL}/top/anime/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60, tags: ["topanime", "anime"] },
  });
  const data = await response.json();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to my Anime List</h1>
        <h2 className="text-2xl font-bold">Top Anime</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {data.data.map((anime: any) => (
            <TopAnime
              key={anime.mal_id}
              classname="w-[400px] h-[600px]"
              links="#"
              description={anime.synopsis.slice(0, 100) + "..."}
              title={anime.title.slice(0, 20) + "..."}
              image={anime.images.jpg.image_url}
              score={anime.score}
              waktu={anime.aired.string}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold">All Anime</h2>
        <Allanime />
        <div></div>
      </main>
    </>
  );
};
export default Home;
