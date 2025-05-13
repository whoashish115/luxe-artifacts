import Link from "next/link";
import { FaDiscord, FaXTwitter, FaMedium } from "react-icons/fa6"; // updated for X & more relevant icons

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white ">
      <div className="grid sm:grid-cols-4 max-w-[1400px] mx-auto gap-8 py-14 px-6 sm:px-20">
        <div className="space-y-5">
          <h2 className="text-3xl font-extrabold tracking-wide">LUXE ARTIFACTS</h2>
          <p className="text-sm text-paragraph">
            Curating rarity. Minting legacy. Luxe Artifacts bridges ancient mystique with blockchain permanence through high-fidelity NFT mining.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaDiscord className="cursor-pointer hover:text-purple-400 transition" />
            <FaXTwitter className="cursor-pointer hover:text-purple-400 transition" />
            <FaMedium className="cursor-pointer hover:text-purple-400 transition" />
          </div>
        </div>

        <div>
          <h3 className=" text-lg md:text-xl  font-semibold mb-4 uppercase tracking-wide">Mining Portal</h3>
          <ul className="space-y-2 text-sm md:text-base text-paragraph">
            <li className="hover:text-white cursor-pointer">Mint Dashboard</li>
            <li className="hover:text-white cursor-pointer">Artifact Categories</li>
            <li className="hover:text-white cursor-pointer">Token Utility</li>
            <li className="hover:text-white cursor-pointer">Marketplace Access</li>
            <li className="hover:text-white cursor-pointer">Claim Rewards</li>
          </ul>
        </div>

        <div>
          <h3 className=" text-lg md:text-xl  font-semibold mb-4 uppercase tracking-wide">Community</h3>
          <ul className="space-y-2 text-sm md:text-base text-paragraph">
            <li className="hover:text-white cursor-pointer">Join Discord</li>
            <li className="hover:text-white cursor-pointer">Submit Artifact</li>
            <li className="hover:text-white cursor-pointer">Ambassador Program</li>
            <li className="hover:text-white cursor-pointer">Collaborations</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-lg md:text-xl  font-semibold mb-4 uppercase tracking-wide">Chronicle Drops</h3>
          <p className="text-sm text-paragraph mb-4">
            Get notified when legendary artifacts drop. Zero spam. Just magic & rarity.
          </p>
          <div className="flex border border-outline rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="you@cryptobloodline.xyz"
              className="bg-black text-white text-sm md:text-base px-4 py-2 w-full outline-none placeholder-paragraph"
            />
            <button className="bg-secondary text-sm md:text-base font-semibold px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border border-outline"/>
      <footer className="text-center max-w-[1400px] mx-auto  text-title py-6 px-4">
          © 2025 <Link href="/" className=" font-bold gradient-text hover:underline">Luxe Artifacts</Link> · All mined rights preserved.
      </footer>
    </div>
  );
};

export default Footer;
