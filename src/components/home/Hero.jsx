'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Spline from '@splinetool/react-spline';
import { FaWallet, FaFire, FaStar, FaUsers, FaStarAndCrescent } from 'react-icons/fa';

const Hero = () => {
  const nftSlogans = [
    'Collect. Trade. Flex.',
    'Own the Future of Art.',
    'Mint Your Unique Digital Soul.',
    'Where Pixels Become Gold.',
    'Unleash the Rare. Embrace the Hype.',
    '1 of 1. Yours Forever.',
    'Enter the NFTverse.',
    'Built on the Blockchain.',
    'Art, But Make it Meta.',
    'Verified. Immutable. Iconic.',
  ];

  return (
    <section id="hero" className="relative w-full min-h-[800px] overflow-hidden bg-black text-white">
      <div className="relative max-w-[1400px] overflow-hidden mx-auto z-10 flex flex-col justify-center items-start px-4 md:px-8 lg:px-24   py-4 md:py-8 lg:py-32  xl:py-32 md:h-[800px]">
      <div className="absolute inset-0 z-10">
        <Spline
          className="absolute top-[25%] md:top-auto md:left-[25%] w-full h-full"
          scene="https://draft.spline.design/AvOGpTKJcJqPvJ3w/scene.splinecode"
        />
      </div>
        {/* Typewriter Banner */}
        <div className="bg-box rounded-xl  text-md font-semibold  mb-4">
        <div className="p-2 z-20 px-4 rounded-xl  text-md font-semibold text-title">
          <Typewriter
            words={nftSlogans}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl  z-20 md:text-6xl font-extrabold tracking-tight leading-tight">
          Discover <span className="text-transparent gradient-text 0 to-yellow-500">Next-Gen</span><br/> NFTs
        </h1>

        {/* Subtext */}
        <p className="mt-6   z-20 text-lg md:text-xl text-paragraph max-w-lg">
          A decentralized NFT platform to mint, trade, and showcase your digital art like never before.
        </p>

        {/* Feature Tags */}
        <div className="mt-8  z-20 flex max-w-xl flex-wrap gap-2">
          <Feature icon={<FaWallet className="text-purple-400 text-xl" />} label="Secure Wallet" />
          <Feature icon={<FaFire className="text-orange-400 text-xl" />} label="Hot Drops" />
          <Feature icon={<FaStar className="text-yellow-300 text-xl" />} label="Verified Artists" />
          <Feature icon={<FaUsers className="text-yellow-300 text-xl" />} label="Major Community" />
          <Feature icon={<FaStarAndCrescent className="text-yellow-300 text-xl" />} label="#1 Choice" />
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-10  z-20 flex gap-4">
          <button className="gradient-bg hover:scale-105 transition px-6 py-3 rounded-full text-white font-bold">
            Explore NFTs
          </button>
          <button className="bg-title  text-paper hover:text-default cursor-pointer transition px-6 py-3 rounded-full font-semibold">
            Mint Yours
          </button>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium">
    {icon}
    {label}
  </div>
);

export default Hero;
