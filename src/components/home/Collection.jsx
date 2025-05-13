import Image from "next/image";
import { Container } from "..";

const Collection = () => {
  return (
    <Container>

    <div className="bg-gradient-to-b from-transparent to-transparent via-box h-[600px] py-10 hidden sm:inline">
      <div className="mx-auto">
        <h2 className="text-2xl text-title font-extrabold">
          COLLECTION FEATURED NFTS
        </h2>
        <p className="text-base lg:text-lg text-paragraph mb-10">
          Explore a handpicked set of pixel-powered personalities.
Each NFT evolves with your progress — no click, just flex.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {/* First Collection */}
          <div>
            <div className="flex gap-4 justify-between">
              <div>
                <Image
                  src="/assets/images/top-collection-1.png"
                  alt=""
                  height={330}
                  width={295}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src="/assets/images/discover-2.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/collection-2.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/collection-3.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <p className="font-semibold text-md">Amazing Collection</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/assets/images/collection-1.png"
                    alt=""
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                  <p className="text-sm font-semibold ml-4">by Shakil77</p>
                </div>
                <p className="border rounded-2xl border-secondary text-secondary text-sm px-2 py-[2px] font-semibold cursor-pointer">
                  Total 54 items
                </p>
              </div>
            </div>
          </div>

          {/* Second Collection */}
          <div>
            <div className="flex gap-4 justify-between">
              <div>
                <Image
                  src="/assets/images/discover-1.png"
                  alt=""
                  height={330}
                  width={295}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src="/assets/images/collection-1.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/collection-2.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/collection-3.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <p className="font-semibold text-md">Amazing Collection</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/assets/images/collection-1.png"
                    alt=""
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                  <p className="text-sm font-semibold ml-4">by Shakil77</p>
                </div>
                <p className="border rounded-2xl border-secondary text-secondary text-sm px-2 py-[2px] font-semibold cursor-pointer">
                  Total 54 items
                </p>
              </div>
            </div>
          </div>

          {/* Third Collection */}
          <div>
            <div className="flex gap-4 justify-between">
              <div>
                <Image
                  src="/assets/images/collection-2.png"
                  alt=""
                  height={330}
                  width={295}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src="/assets/images/collection-3.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/discover-1.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/collection-1.png"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <p className="font-semibold text-md">Amazing Collection</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/assets/images/collection-1.png"
                    alt=""
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                  <p className="text-sm font-semibold ml-4">by Shakil77</p>
                </div>
                <p className="border rounded-2xl border-secondary text-secondary text-sm px-2 py-[2px] font-semibold cursor-pointer">
                  Total 54 items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>

  );
};

export default Collection;
