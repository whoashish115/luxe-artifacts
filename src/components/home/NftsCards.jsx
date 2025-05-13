import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';

const nftData = [
  {
    image: '/assets/images/discover-1.png',
  },
  {
    image: '/assets/images/discover-2.png',
  },
  {
    image: '/assets/images/discover-3.png',
  },
  {
    image: '/assets/images/collection-3.png',
  },
];

const AvatarGroup = () => (
  <div className='p-2   flex'>
    {['avatar-4', 'avatar-5', 'avatar-6', 'avatar-7'].map((name, index) => (
      <div key={name} className={index > 0 ? '-ml-4' : ''}>
        <Image src={`/assets/images/${name}.png`} className='!rounded-full overflow-hidden' alt="" width={50} height={50} />
      </div>
    ))}
  </div>
);

const NftCard = ({ image }) => (
  <div className='bg-box border border-outline rounded-md p-4 relative'>
    <div className='mb-4'>
      <Image src={image} alt="" width={300} height={300} />
    </div>
    <AvatarGroup />
    <div className='flex flex-col space-y-2'>
      <p className='font-semibold text-lg text-title'>ArtCrypto</p>
      <div className='flex items-center justify-between p-2 text-sm border-b-2 border-outline'>
        <div className='flex space-x-2 '>
                        <FaEthereum className="text-3xl text-title mr-2"/>
          
          <p className='gradient-text'>0.25 ETH</p>
        </div>
        <p>1 of 321</p>
      </div>
      <div className='flex items-center justify-between text-sm pt-2'>
        <p className='bg-black/5 dark:white/5 rounded-full px-4 py-1 text-paragraph font-light'>3h 40m 1s left</p>
        <p className='font-light  text-paragraph uppercase cursor-pointer'>place a bid</p>
      </div>
    </div>
  </div>
);

const NftsCards = () => {
  return (
    <div className='grid sm:grid-cols-4 gap-3'>
      {nftData.map((nft, index) => (
        <NftCard key={index} image={nft.image} />
      ))}
    </div>
  );
};

export default NftsCards;
