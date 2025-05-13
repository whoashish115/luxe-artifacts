import Image from 'next/image';
import React from 'react';
import { Container } from '..';
import {
  FaRobot,
  FaUserAstronaut,
  FaUserNinja,
  FaUserSecret,
  FaUserAlt,
  FaUserGraduate,
  FaUserTie,
  FaUserInjured,
  FaUserMd,
  FaUserCog,
} from 'react-icons/fa';

const creatorDots = [
  { icon: <FaUserAstronaut />, x: '10%', y: '20%', delay: '0s', size: 'text-3xl' },
  { icon: <FaUserNinja />, x: '25%', y: '40%', delay: '0.2s', size: 'text-2xl' },
  { icon: <FaRobot />, x: '70%', y: '25%', delay: '0.4s', size: 'text-4xl' },
  { icon: <FaUserSecret />, x: '55%', y: '70%', delay: '0.1s', size: 'text-xl' },
  { icon: <FaUserAlt />, x: '35%', y: '60%', delay: '0.3s', size: 'text-3xl' },
  { icon: <FaUserGraduate />, x: '80%', y: '50%', delay: '0.5s', size: 'text-2xl' },
  { icon: <FaUserTie />, x: '60%', y: '35%', delay: '0.6s', size: 'text-xl' },
  { icon: <FaUserInjured />, x: '45%', y: '15%', delay: '0.7s', size: 'text-3xl' },
  { icon: <FaUserMd />, x: '18%', y: '70%', delay: '0.2s', size: 'text-2xl' },
  { icon: <FaUserCog />, x: '85%', y: '15%', delay: '0.3s', size: 'text-4xl' },
];

const Creators = () => {
  return (
    <Container>
      <div  className="relative flex flex-col items-center justify-center">

      <Image
        src="/assets/images/map.png"
        width={1000}
        height={562}
        alt="global map"
        className="pointer-events-none h-[600px] md:h-[700px] w-full  brightness-[0.3] grayscale select-none"
      />

      {/* Animated Dots */}
      <div className="absolute inset-0">
        {creatorDots.map((dot, i) => (
          <div
            key={i}
            className={`absolute p-3 rounded-full border border-white/20 backdrop-blur-xl bg-white/10 text-white ${dot.size}`}
            style={{
              top: dot.y,
              left: dot.x,
              animation: `floatUpDown ${4 + (i % 3)}s ease-in-out infinite, pulseGlow 3s ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          >
            {dot.icon}
          </div>
        ))}
      </div>

      {/* Glow Auras */}
      <svg
        className="absolute -z-10 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
            <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        {creatorDots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="140"
            fill="url(#glow)"
            className="animate-ping"
          />
        ))}
      </svg>

      {/* Central Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 max-w-xl px-4">
        <h2 className="text-white font-secondary text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 uppercase">
          Global Creators Network
        </h2>
        <p className="text-paragraph text-white/80 text-base sm:text-lg font-light">
          Empowering visionary builders from every corner of the world. These are the minds behind the Luxe chain. Every dot is alive — a pulse of innovation.
        </p>
      </div>
      </div>

    </Container>
  );
};

export default Creators;
