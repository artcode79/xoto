import React from "react";

const genreUrl = process.env.ANIME;

const Genres = async () => {
  const response = await fetch(`${genreUrl}/api/v1/genres`);
  const data = await response.json();
  console.log(data);

  return (
    <>
      <h1>Genres</h1>
      <ul>
        {data.genres.map((genre: any) => (
          <li key={genre.endpoint}>{genre.genre}</li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
