import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { Container } from "..";

const Discover = () => {
  return (
    <Container>

    <div className="relative  mx-auto grid sm:grid-cols-3 gap-10 py-10">

      {/* Left column - NFT Image and details */}
      <div className="relative  rounded-2xl bg-[url('/assets/images/discover-1.png')] bg-contain bg-no-repeat ml-4 hidden sm:block max-w-[500px] h-full">
        <div className="pt-4 pl-4 space-y-2 relative z-20">
          <p className="font-semibold text-xl text-title">Abstr Gradient NFT</p>
          <div className="flex space-x-2 items-center">
            <Image
              src={"/assets/images/avatar-1.png"}
              alt="Creator Avatar"
              height={25}
              width={25}
              className="rounded-full"
            />
            <p className="-mt-1 font-bold text-title">Tanvir</p>
          </div>
        </div>

        <div className="absolute bottom-6 left-4 flex justify-between w-[90%] max-w-[300px] rounded-lg bg-box px-4 py-2 z-30">
          <div className="space-y-1">
            <p className="text-sm text-title">Current Bid</p>
            <div className="flex space-x-2 items-center">
           
              <FaEthereum className="text-3xl mr-2"/>
              <p className="font-semibold text-title">0.25 ETH</p>
            </div>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-sm text-title">Ends in</p>
            <p className="font-semibold text-title">12h 43m 42s</p>
          </div>
        </div>
      </div>
      <div className="relative  rounded-2xl bg-[url('/assets/images/discover-2.png')] bg-contain bg-no-repeat ml-4 hidden sm:block max-w-[500px] h-full">
        <div className="pt-4 pl-4 space-y-2 relative z-20">
          <p className="font-semibold text-xl text-title">Cret Gradient NFT</p>
          <div className="flex space-x-2 items-center">
            <Image
              src={"/assets/images/avatar-2.png"}
              alt="Creator Avatar"
              height={25}
              width={25}
              className="rounded-full"
            />
            <p className="-mt-1 font-bold text-title">Tanvir</p>
          </div>
        </div>

        <div className="absolute bottom-6 left-4 flex justify-between w-[90%] max-w-[300px] rounded-lg bg-box px-4 py-2 z-30">
          <div className="space-y-1">
            <p className="text-sm text-title">Current Bid</p>
            <div className="flex space-x-2 items-center">
           
              <FaEthereum className="text-3xl mr-2"/>
              <p className="font-semibold text-title">0.25 ETH</p>
            </div>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-sm text-title">Ends in</p>
            <p className="font-semibold text-title">12h 43m 42s</p>
          </div>
        </div>
      </div>

      {/* Right column - Text, button, stats */}
      <div className="flex flex-col justify-center sm:space-y-5">
        <div className="space-y-5 mb-5">
          <h1 className="text-[20px] sm:text-[40px] font-extrabold font-bold text-title">
            DISCOVER, AND COLLECT DIGITAL ART NFTS
          </h1>
          <p className="text-sm text-paragraph sm:w-6/12">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell and discover exclusive digital assets.
          </p>
        </div>

        <button className="bg-box hover:text-white rounded-3xl mr-8 text-sm px-8 py-[7px] font-semibold hover:bg-primary text-title max-w-max">
          Explore Now
        </button>

        {/* Stats */}
        <div className="flex mt-5 sm:mt-0 space-x-8">
          <div>
            <h4 className="font-extrabold text-title text-[20px]">98K+</h4>
            <p className="text-sm text-paragraph">Artwork</p>
          </div>
          <div>
            <h4 className="font-extrabold text-title text-[20px]">12K+</h4>
            <p className="text-sm text-paragraph">Auction</p>
          </div>
          <div>
            <h4 className="font-extrabold text-title text-[20px]">15K+</h4>
            <p className="text-sm text-paragraph">Artist</p>
          </div>
        </div>
      </div>

    </div>
    </Container>

  );
};

export default Discover;
