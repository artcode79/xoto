import React from "react";
import Image from "next/image";
import Link from "next/link";

/*ini adalah top anime ber bentuk card*/
const TopAnime = async ({
  title,
  description,
  image,
  score,
  waktu,
  links,
  classname,
  hari,
}: any) => {
  return (
    <>
      <div className={classname}>
        <div className="bg-white rounded-lg hover:rounded-xl shadow-md hover:shadow-xl hover:bg-slate-300 p-4">
          <div className="flex justify-center">
            <Image
              width={200}
              height={300}
              className="rounded-lg shadow-md hover:shadow-xl "
              src={image}
              alt="anime"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mt-2">{title}</h3>

          <p className="text-gray-500 mb-2">{score}</p>
          <p className="text-gray-500 mb-2">{description}</p>
          <p className="text-gray-500 mb-2">{waktu}</p>
          <p className="text-gray-500 mb-2">{hari}</p>
          <Link
            href={links}
            className="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded mt-4"
          >
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopAnime;
