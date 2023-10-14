import Link from "next/link";
import React from "react";

const Footers = () => {
  return (
    <>
      <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023 Copyright: <span> </span>
          <Link className="text-neutral-800  dark:text-neutral-400" href="#">
            <span className="text-neutral-800  dark:text-neutral-400">
              Allanime
            </span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footers;
