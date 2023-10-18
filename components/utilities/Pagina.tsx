"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Pagina = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const animeUrl = process.env.ANIMEURI;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${animeUrl}/recommendations/anime${page}`
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Pagina</h1>
    </>
  );
};

export default Pagina;
