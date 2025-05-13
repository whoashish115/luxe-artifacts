import Image from "next/image";
import { Container } from "..";

const Avatar = ({ src, className }) => (
  <div className={`absolute hidden sm:inline ${className}`}>
    <Image src={src} alt="" width={50} height={50} />
  </div>
);

const SellNfts = () => {
  return (
    <Container>

    <div className="grid sm:grid-cols-2 gap-8 mx-auto h-[750px]">
      {/* Left - NFT Images and Avatars */}
      <div className="flex items-center justify-center relative">
        <div className="mr-10 relative">
          <div className="mb-10">
            <Image src="/assets/images/discover-1.png" alt="" width={400} height={400} />
          </div>
          <div className="ml-[100px]">
            <Image src="/assets/images/discover-3.png" alt="" width={200} height={200} />
          </div>

          <Avatar src="/assets/images/avatar-2.png" className="top-[48%] !rounded-full  right-[-20px]" />
          <Avatar src="/assets/images/avatar-2.png" className="top-[92%] !rounded-full  right-[-20px]" />
        </div>

        <div>
          <Image src="/assets/images/discover-2.png" alt="" width={200} height={200} />
        </div>

        <Avatar src="/assets/images/avatar-3.png" className="top-[60%]  !rounded-full right-[40px]" />
      </div>

      {/* Right - Text and Button */}
   <div className="space-y-6 flex flex-col justify-center">
 <h5 className="font-extrabold text-2xl sm:text-3xl w-full text-title">
  <span className='gradient-text'>CREATE</span> AND   <span className='gradient-text'>SELL</span> YOUR UNIQUE NFT COLLECTIONS
</h5>
<p className="sm:text-base text-sm text-paragraph w-full">
  Explore a seamless platform to mint, showcase, and sell your original digital art. 
  Join a vibrant, creator-first community that's redefining ownership in the digital world. 
  Whether you're launching your first drop or building a collectible empire, we’ve got the tools you need.
</p>
<ul className="list-disc list-inside text-title mt-3 text-paragraph text-sm sm:text-base space-y-1">
  <li>Mint NFTs instantly with zero coding required</li>
  <li>Showcase your collection with custom branding</li>
  <li>Earn royalties automatically with every resale</li>
  <li>Track performance with real-time analytics</li>
  <li>Secure, blockchain-backed asset protection</li>
</ul>
  <button
    type="button"
    className="gradient-bg text-white mr-auto inline-flex px-6 rounded-3xl text-sm py-3 font-semibold "
  >
    Sign Up Now
  </button>
</div>

    </div>
    </Container>

  );
};

export default SellNfts;
