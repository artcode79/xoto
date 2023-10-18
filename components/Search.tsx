"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @next/next/no-async-client-component
const Search = () => {
  const searchRef: any = useRef<HTMLInputElement>();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent | any) => {
    const searchTerm = searchRef.current.value;
    if (!searchTerm) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <>
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="Search"
          className="bg-gray-200 rounded-md p-2"
          onKeyDown={handleSubmit}
        />
        <button type="submit" className="bg-gray-200 rounded-md p-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="search"
            width={24}
            height={24}
          />
        </button>
      </form>
    </>
  );
};

export default Search;
