import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-2xl text-center p-6">

        <h2 className="mb-8 font-extrabold font-secondary text-6xl md:text-7xl lg:text-8xl gradient-text capitalize">
          <span className="sr-only">Error</span>404
        </h2>

        <h6 className="text-xl md:text-2xl mb-4 !leading-snug !tracking-wide font-semibold text-title">
          Sorry, we <span className="uppercase gradient-text font-bold">couldn't find</span> this page.
        </h6>

        <p className="mt-4 font-tertiary mb-8 !leading-snug text-base max-w-[80%] mx-auto">
          But dont worry, you can find plenty of other things on our homepage.
        </p>

        <Link href="/">
          <button className="inline-flex transition-all tracking-wider items-center cursor-pointer group uppercase align-middle text-center text-white select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full gradient-bg font-bold">
            back to homepage <HiOutlineArrowLongRight className="w-[18px]  transition-all h-[18px] ml-2 group-hover:ml-4" />
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
