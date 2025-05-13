import React from 'react';
import { HiOutlineKey, HiOutlineSparkles } from 'react-icons/hi';
import Spline from '@splinetool/react-spline';
import { Container } from '..';

const Steps = () => {
  return (
      <Container  id="steps" className=" lg:py-10 relative">
        
        {/* Section One: Awaken the Artifact */}
        <div className="md:flex-row flex-col-reverse flex gap-10 items-center justify-between">
          <div className="lg:w-1/2 xl:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h5 className="uppercase gradient-text font-semibold text-lg md:text-xl lg:text-2xl tracking-widest">
                Step I
              </h5>
              <h3 className="font-semibold text-title font-secondary text-lg sm:text-2xl md:text-4xl lg:text-5xl !leading-snug uppercase">
                Awaken the Artifact
              </h3>
            </div>
            <p className="text-paragraph text-sm md:text-base">
              Before rarity reveals itself, the artifact must be unearthed. Connect your wallet, summon your ledger, and prepare to decode the block of origins.
            </p>
            <div className="mt-4">
              <button className="uppercase font-extrabold rounded-2xl gap-2 gradient-bg text-sm md:text-base text-white inline-flex justify-center cursor-pointer hover:scale-105 transition duration-300 items-center px-6 py-3">
                Initiate Access <HiOutlineKey className="text-xl" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full hidden md:block md:w-1/2 relative">
            <Spline
              className="md:!h-[650px] lg:translate-x-10 w-[280px]"
              scene="https://draft.spline.design/m1EVxGvHzMKmnxRW/scene.splinecode"
            />
          </div>
        </div>

        <section
      aria-label="Inscribe the Luxe NFT minting section"
      className="relative w-full  mx-auto min-h-[360px]  rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center
       bg-box
        border border-outline
        backdrop-blur-[12px] "
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/15 animate-pulse"
            style={{
              width: `${6 + Math.random() * 10}px`,
              height: `${6 + Math.random() * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
              filter: `blur(${3 + Math.random() * 7}px)`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <h3 className="font-secondary text-3xl sm:text-4xl  font-extrabold text-white uppercase tracking-widest mb-3">
        Inscribe the Luxe
      </h3>

      <p className="gradient-text uppercase font-semibold tracking-wider mb-4 text-sm md:text-base ">
        Eternalize your digital legacy
      </p>

      <p className="text-gray-300 max-w-lg md:max-w-xl mb-8 leading-relaxed text-sm md:text-base px-4">
        The final breath. The proof of rarity. Now etched forever on the chain. Your artifact transcends the digital realm — it becomes a timeless relic, a true symbol of exclusivity.
      </p>

    </section>

      </Container>
  );
};

export default Steps;
