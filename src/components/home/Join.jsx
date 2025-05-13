'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Container } from '..';

const NFTs = [

  {
    id: 1,
    name: "Pixel Cat",
    color: "#3b82f6",
    face: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" ry="4" fill="#60a5fa" stroke="#1e40af" />
        <circle cx="7" cy="10" r="1.5" fill="#fff" />
        <circle cx="17" cy="10" r="1.5" fill="#fff" />
        <polygon points="7,14 17,14 14,16 10,16" fill="#1e40af" />
      </>
    )
  },
    {
    id: 2,
    name: "Pixel Fox",
    color: "#f59e0b",
    face: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" ry="3" fill="#fbbf24" stroke="#b45309" />
        <circle cx="8" cy="10" r="1.5" fill="#fff" />
        <circle cx="16" cy="10" r="1.5" fill="#fff" />
        <rect x="7" y="14" width="10" height="2" rx="1" ry="1" fill="#b45309" />
      </>
    )
  },
  {
    id: 3,
    name: "Pixel Alien",
    color: "#10b981",
    face: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="#34d399" stroke="#065f46" />
        <ellipse cx="8" cy="10" rx="2" ry="3" fill="#d1fae5" />
        <ellipse cx="16" cy="10" rx="2" ry="3" fill="#d1fae5" />
        <rect x="7" y="14" width="10" height="2" rx="1" ry="1" fill="#065f46" />
      </>
    )
  },
];

const EnergyOrb = ({ startX, startY, endX, endY, onEnd }) => {
  const orbRef = useRef(null);

  useEffect(() => {
    if (!orbRef.current) return;
    const orb = orbRef.current;

    let animationFrame;
    let startTime;
    const duration = 800;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = (t) => t * (2 - t);
      const eased = easeOutQuad(progress);

      const currentX = startX + (endX - startX) * eased;
      const currentY = startY + (endY - startY) * eased;

      orb.style.transform = `translate(${currentX}px, ${currentY}px) scale(${1 - 0.5 * eased})`;
      orb.style.opacity = 1 - eased;

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        onEnd();
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [startX, startY, endX, endY, onEnd]);

  return (
    <div
      ref={orbRef}
      className="fixed w-5 h-5 rounded-full bg-secondary pointer-events-none"
      style={{ left: 0, top: 0 }}
    />
  );
};

const NftMiniGame = () => {
  const [tokens, setTokens] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoClickSpeed, setAutoClickSpeed] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [energyMax, setEnergyMax] = useState(100);
  const [orbs, setOrbs] = useState([]);

  const nftRef = useRef(null);
  const tokenCounterRef = useRef(null);

  useEffect(() => {
    if (autoClickSpeed > 0) {
      const interval = setInterval(() => {
        addTokens(clickPower);
      }, 1000 / autoClickSpeed);
      return () => clearInterval(interval);
    }
  }, [autoClickSpeed, clickPower]);

  const addTokens = (amount) => {
    setTokens((t) => t + amount);
    addEnergy(amount * 10);
    createOrb();
  };

  const addEnergy = (amount) => {
    setEnergy((e) => Math.min(e + amount, energyMax));
  };

  const handleNFTClick = () => {
    addTokens(clickPower);
  };

  const createOrb = () => {
    if (!nftRef.current || !tokenCounterRef.current) return;

    const nftRect = nftRef.current.getBoundingClientRect();
    const tokenRect = tokenCounterRef.current.getBoundingClientRect();

    const startX = nftRect.left + nftRect.width / 2;
    const startY = nftRect.top + nftRect.height / 2;
    const endX = tokenRect.left + tokenRect.width / 2;
    const endY = tokenRect.top + tokenRect.height / 2;

    const id = Date.now();

    setOrbs((o) => [...o, { id, startX, startY, endX, endY }]);
  };

  const removeOrb = (id) => {
    setOrbs((o) => o.filter((orb) => orb.id !== id));
  };

  const buyUpgrade = (type) => {
    if (type === "clickPower") {
      const cost = (clickPower + 1) * 10;
      if (tokens >= cost) {
        setTokens((t) => t - cost);
        setClickPower((cp) => cp + 1);
        setEnergyMax((em) => em + 50);
        setEnergy(0);
        return true;
      }
      return false;
    }
    if (type === "autoClick") {
      const cost = (autoClickSpeed + 1) * 50;
      if (tokens >= cost) {
        setTokens((t) => t - cost);
        setAutoClickSpeed((ac) => ac + 1);
        setEnergyMax((em) => em + 100);
        setEnergy(0);
        return true;
      }
      return false;
    }
  };
 const getFaceIndex = () => {
    if (clickPower >= 9) return 3;
    if (clickPower >= 6) return 2;
    if (clickPower >= 3) return 1;
    return 0;
  };
  const energyPercent = Math.min((energy / energyMax) * 100, 100);

  const clickPowerCost = (clickPower + 1) * 10;
  const autoClickCost = (autoClickSpeed + 1) * 50;

  const canBuyClickPower = tokens >= clickPowerCost;
  const canBuyAutoClick = tokens >= autoClickCost;

  const resetGame = () => {
    setTokens(0);
    setClickPower(1);
    setAutoClickSpeed(0);
    setEnergy(0);
    setEnergyMax(100);
    setOrbs([]);
  };

  return (
    <div
      className="relative bg-box p-6 rounded-3xl rounded-2xl  mx-auto select-none text-center font-semibold text-title"
      aria-label="NFT collector mini game"
    >
      <h3 className="mb-6 text-3xl gradient-text tracking-wide font-extrabold select-none">
        NFT Collector
      </h3>

      <div
        ref={nftRef}
        className="relative mx-auto w-[150px] h-[150px] mb-6 cursor-pointer rounded-2xl
          transition-transform duration-300
          hover:scale-[1.12] active:scale-[0.98]
          "
        onClick={handleNFTClick}
        title={`Click to collect tokens (+${clickPower})`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke={NFTs[getFaceIndex()].color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-400"
        >
          {NFTs[getFaceIndex()].face}
        </svg>
      </div>

      <div
        ref={tokenCounterRef}
        className="mb-4 text-4xl gradient-text font-extrabold select-text"
        aria-live="polite"
        aria-atomic="true"
        aria-relevant="additions"
      >
        {tokens}
      </div>

      {/* Energy bar */}
      <div className="relative w-full h-4 rounded-full bg-black bg-opacity-20 overflow-hidden mb-6 select-none" aria-label="Energy bar">
        <div
          className="h-full bg-gradient-to-r from-secondary to-yellow-600 transition-all duration-300"
          style={{ width: `${energyPercent}%` }}
        />
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          disabled={!canBuyClickPower}
          onClick={() => buyUpgrade("clickPower")}
          className={`rounded-xl px-4 py-2 font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed
            border-solid border hover:bg-secondary hover:text-white
            ${
              canBuyClickPower
                ? "text-secondary border-secondary"
                : "text-paragraph border-outline"
            }`}
          aria-label={`Upgrade click power, costs ${clickPowerCost} tokens`}
        >
          Click Power ({clickPower}) - {clickPowerCost}⚡
        </button>
        <button
          disabled={!canBuyAutoClick}
          onClick={() => buyUpgrade("autoClick")}
          className={`rounded-xl px-4 py-2 font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed
            border-solid border hover:bg-primary hover:text-white
            ${
              canBuyAutoClick
                ? "text-primary border-primary"
                : "text-paragraph border-outline"
            }`}
          aria-label={`Buy auto-click upgrade, costs ${autoClickCost} tokens`}
        >
          Auto Click ({autoClickSpeed}) - {autoClickCost}⚡
        </button>
      </div>

      <button
        onClick={resetGame}
        className="w-full rounded-xl px-4 py-2 font-semibold border border-outline text-paragraph  hover:text-white transition"
        aria-label="Reset game"
      >
        Reset Game
      </button>

      {/* Flying energy orbs */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-50 overflow-visible"
        aria-hidden="true"
      >
        {orbs.map(({ id, startX, startY, endX, endY }) => (
          <EnergyOrb
            key={id}
            startX={startX}
            startY={startY}
            endX={endX}
            endY={endY}
            onEnd={() => removeOrb(id)}
          />
        ))}
      </div>

    </div>
  );
};

export default function SideBySideGameWithCommunity() {
  return (
        <Container>
    <div className="flex gap-8 flex-col md:flex-row text-white">

      <aside className="w-1/2 bg-black flex flex-col justify-center items-start gap-6 select-none">
        <h2 className="text-4xl font-bold tracking-wide">Join Our Community</h2>
        <p className="text-lg max-w-xs text-gray-300">
          Connect with like-minded collectors, share your NFTs, and get exclusive updates.
        </p>
        <a
          href="https://discord.gg/your-community" // <-- Replace with your community link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl gradient-bg font-semibold text-white transition"
          aria-label="Join our Discord community"
        >
          Join Discord
        </a>
      </aside>

      <main className=" flex justify-center items-center">
        <NftMiniGame />
      </main>

    </div>
        </Container>
  );
}
