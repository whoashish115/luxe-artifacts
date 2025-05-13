import React from "react";
import Image from "next/image";
import { Container } from "..";
import { HiClipboardCheck, HiOutlineCash } from "react-icons/hi";
import { HiOutlineAcademicCap, HiOutlineBars2, HiOutlineChartBar, HiOutlineShieldCheck } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { services } from "@/data/services";

const Transaction = () => {
  return (
    <Container className='bg-gradient-to-b from-transparent via-box to-transparent '>
    <div className="sm:h-[380px] flex flex-col items-center justify-center py-12">
      <div className=" mx-auto grid sm:grid-cols-3 gap-10">
        <div className="sm:col-span-3 mb-6 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-title mb-2">
            Discover the <span className="gradient-text">Amazing World</span> of NFT Art
          </h2>
          <p className="text-paragraph max-w-xl mx-auto sm:mx-0 text-sm sm:text-base">
            Dive into an exclusive marketplace where creativity meets technology.
            Experience lightning-fast transactions, scalable growth, and the future of digital collectibles.
          </p>
        </div>

        {/* Feature card 1 */}
        <div className="flex space-x-4 items-start max-w-sm mx-auto sm:mx-0">
          <div className="flex-shrink-0 mt-1">
            <HiOutlineCash className="text-6xl"/>
          </div>
          <div>
            <h6 className="text-xl font-bold text-title mb-1">Lightning-Fast Transactions</h6>
            <p className="text-sm text-paragraph">
              Seamlessly buy, sell, and trade NFTs with instant confirmations powered by cutting-edge blockchain technology.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 items-start max-w-sm mx-auto sm:mx-0">
          <div className="flex-shrink-0 mt-1">
                       <HiOutlineChartBar className="text-6xl"/>

          </div>
          <div>
            <h6 className="text-xl font-bold text-title mb-1">Scalable Growth Opportunities</h6>
            <p className="text-sm text-paragraph">
              Unlock new levels of growth with analytics and market trends to maximize your NFT portfolio's potential.
            </p>
          </div>
        </div>

        {/* Feature card 3 */}
        <div className="flex space-x-4 items-start max-w-sm mx-auto sm:mx-0">
          <div className="flex-shrink-0 mt-1">
                                  <HiOutlineShieldCheck className="text-6xl"/>

          </div>
          <div>
            <h6 className="text-xl font-bold text-title mb-1">Secure & Trustworthy Platform</h6>
            <p className="text-sm text-paragraph">
              Built with top-tier security protocols ensuring your digital assets and transactions remain protected at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
         <div className="grid  py-8 md:grid-cols-3  w-full gap-6">
          {services.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="bg-paper backdrop-blur-md hover:bg-box transition-all duration-300 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-start gap-5 border border-white/10  "
            >
              <span className="text-5xl font-secondary text-title">{icon}</span>
              <h3 className="text-xl font-semibold text-title gradient-text font-secondary ">
                {title}
              </h3>
              <p className="text-paragraph text-sm md:text-base font-light">
                {description}
              </p>
             {i==1 && <div className="mt-2 text-sm  text-title flex items-center gap-2 bg-black/5 rounded-full p-2 dark:bg-white/5">
                <BsStars className="text-lg text-secondary" />
                Certified by The Chain
              </div>}
            </div>
          ))}
        </div>
    </Container>
  );
};

export default Transaction;
