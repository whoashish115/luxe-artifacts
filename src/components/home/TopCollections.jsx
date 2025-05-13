import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { Container } from "..";

const TopCollections = () => {
  const trendingCollections = [
    { rank: 1, name: "CryptoFunks", value: "19,769.39", change: "+26.52%", img: "crypto-1.png", color: "#14C8B0" },
    { rank: 2, name: "Cryptix", value: "2,769.39", change: "+10.52%", img: "crypto-2.png", color: "#FF002E" },
    { rank: 3, name: "Frensware", value: "9,232.39", change: "+2.52%", img: "crypto-3.png", color: "#14C8B0" },
    { rank: 4, name: "PunkArt", value: "3,669.39", change: "+1.72%", img: "crypto-4.png", color: "#14C8B0" },
    { rank: 5, name: "Art Crypto", value: "10,769.48", change: "+6.40%", img: "crypto-5.png", color: "#FF002E" },
  ];

  const miniCollections = [
    {
      img: "/assets/images/avatar-1.png",
      title: "Neon Vibes",
      stock: "5 of 10",
      eth: "0.33 ETH",
      avatar: "/assets/images/avatar-1.png",
      primaryButton: true,
    },
    {
      img: "/assets/images/avatar-2.png",
      title: "Pixel Dreams",
      stock: "2 of 6",
      eth: "0.18 ETH",
      avatar: "/assets/images/avatar-1.png",
      primaryButton: false,
    },
    {
      img: "/assets/images/avatar-3.png",
      title: "Abstract Aura",
      stock: "7 of 15",
      eth: "0.45 ETH",
      avatar: "/assets/images/avatar-1.png",
      primaryButton: false,
    },
  ];

  return (
    <Container >
    <div className=" mx-auto grid sm:grid-cols-3 gap-4 bg-box p-8 rounded-2xl ">
      <div className="space-y-6">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden transition-transform hover:scale-105">
          <Image
            src="/assets/images/top-collection-1.png"
            alt="Featured Collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/images/avatar-1.png"
              alt="Creator Avatar"
              width={40}
              height={40}
              className="rounded-full border-2 border-Outline"
            />
            <div>
              <h3 className="font-bold text-lg text-title">The Futr Abstr</h3>
              <p className="text-sm text-paragraph">10 NFTs available</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase text-title">Highest Bid</p>
            <div className="flex items-center justify-end space-x-1 mt-1 gradient-text font-semibold">
                          <FaEthereum className="text-3xl mr-2"/>

              <span>0.25 ETH</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 border-r border-outline pr-8">
        {miniCollections.map(({ img, title, stock, eth, avatar, primaryButton }, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-5 group hover:bg-black/10 dark:hover:bg-white/10 rounded-lg p-4 transition-colors cursor-pointer"
          >
            <Image
              src={img}
              alt={title}
              width={90}
              height={90}
              className="rounded-lg "
            />
            <div className="flex flex-col justify-between h-full">
              <h4 className="font-semibold text-base text-title group-hover:text-title">{title}</h4>
              <div className="flex items-center space-x-3">
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={28}
                  height={28}
                  className="!rounded-full border border-secondary"
                />
                <div className="flex items-center space-x-1 px-2 py-0.5 rounded-md gradient-text font-semibold text-xs">
                 <FaEthereum className="text-2xl text-title"/>
                  <span>{eth}</span>
                </div>
                <span className="text-xs text-title flex-shrink-0">{stock}</span>
              </div>
              <button
                className={`mt-2 text-sm rounded-full px-6 py-2 cursor-pointer font-semibold transition ${
                  primaryButton
                    ? "bg-secondary text-white"
                    : "border border-secondary text-secondary hover:bg-secondary hover:text-white"
                }`}
              >
                Place a Bid
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Trending Collections */}
      <div className="space-y-6 w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-title">Top Collections</h2>
          <p className="gradient-text font-semibold uppercase tracking-wider">Last 7 Days</p>
        </div>

        <div className="space-y-4">
          {trendingCollections.map(({ rank, name, value, change, img, color }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-outline pb-3"
            >
              <div className="flex items-center space-x-5">
                <p className="text-3xl font-extrabold text-title w-8">{rank}</p>
                <Image
                  src={`/assets/images/${img}`}
                  alt={name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div>
                  <p className="font-semibold text-title">{name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                                            <FaEthereum className="text-3xl mr-2"/>

                    <span className="text-sm font-medium text-paragraph">{value}</span>
                  </div>
                </div>
              </div>
              <p
                className="font-bold text-lg"
                style={{ color }}
              >
                {change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Container>
  );
};

export default TopCollections;
