import React from "react";

const genreUrl = process.env.ANIMEURI;

const Genres = async () => {
  const response = await fetch(`${genreUrl}/genres/anime`);
  const data = await response.json();
  console.log(data);

  return (
    <>
      <h1>Genres</h1>
      <ul>
        {data.data.map((genre: any) => (
          <li key={genre.mal_id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
