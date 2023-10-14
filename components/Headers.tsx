import Link from "next/link";
import React from "react";
import Search from "./Search";

const Headers = () => {
  return (
    <>
      <div
        className="w-full
      h-[80px] px-4 py-2 border-b border-gray-500 border-opacity-50 backdrop-blur-sm backdrop-filter bg-opacity-50 bg-gradient-to-r from-[#1E1E1E] to-[#1E1E1E] rounded-t-md      shadow-md shadow-[#1E1E1E] bg-[#1E1E1E] flex justify-center items-center"
      >
        <Link href="/">
          <h1 className="text-white text-3xl font-bold">
            <span className="text-[#F9A109]">XotO</span>nIme
          </h1>
        </Link>

        <div className="w-full h-full flex justify-center items-center">
          <Search />
        </div>
        <div className="w-full h-full flex justify-center items-center md:flex md:justify-end md:items-center md:w-auto md:h-full md:rounded-md md:shadow-md md:shadow-[#1E1E1E] md:bg-[#1E1E1E] md:bg-opacity-50 md:backdrop-blur-sm md:backdrop-filter md:bg-gradient-to-r md:from-[#1E1E1E] md:to-[#1E1E1E]">
          <Link
            href="/"
            className="text-white mr-5 text-xl font-bold hover:text-blue-950"
          >
            Home
          </Link>
          <Link
            href="/genres"
            className="text-white mr-4 text-xl font-bold hover:text-blue-950"
          >
            Genre
          </Link>
          <Link
            href="/list"
            className="text-white mr-5 text-xl font-bold hover:text-blue-950"
          >
            List
          </Link>
        </div>
      </div>
    </>
  );
};

export default Headers;
