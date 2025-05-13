import React from "react";

const InternalServerError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-2xl text-center p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="md:w-40 w-32 md:h-40 h-32 mx-auto"
        >
          <path
            className="fill-secondary"
            d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          ></path>
          <rect
            width="176"
            height="32"
            x="168"
            y="320"
            className="fill-secondary"
          ></rect>
          <polygon
            points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            className="fill-secondary"

          ></polygon>
          <polygon
            points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
            className="fill-secondary"
          ></polygon>
        </svg>

          <h6 className="text-xl md:text-2xl lg:text-3xl my-4 mt-6 !leading-snug !tracking-wide font-semibold text-title">
            Looks like our services are currently <span className="uppercase gradient-text font-bold">offline</span>
          </h6>

          <p className="text-base !leading-snug px-4 max-w-[80%] mx-auto ">
            please try refreshing the page or revisit after sometimes
          </p>
      </div>
    </div>
  );
};

export default InternalServerError;
