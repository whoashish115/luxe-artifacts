'use client'
import React, { useState, useEffect, useRef  } from 'react'
import {
  HiOutlineMenu as MenuIcon,
  HiOutlineX as CloseIcon,
  HiOutlineArrowSmUp as ChevronUpIcon,
  HiVolumeOff,
  HiVolumeUp,
} from 'react-icons/hi'
import { nav } from "../../data/navigations";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const router = useRouter()

   const typingAudioRef = useRef();

  useEffect(() => {
    function play() {
      let beat = new Audio("/assets/audio/click.mp3");
      beat.play();
    }
    document.body.addEventListener("click", play);
  }, []);

  useEffect(() => {
    const typingInterval = 1000;
    function typedown() {
      if (typingAudioRef?.current?.paused) {
        typingAudioRef.current?.play();
      }

      setTimeout(function () {
        typingAudioRef.current?.pause();
      }, typingInterval);
      typingAudioRef.current?.play();
    }
    document.body.addEventListener("keydown", typedown);
  }, []);

  const [showButton, setShowButton] = useState(false);
  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("header-bar").style.width = `${percentage}%`;
    window.scrollY > 1 ? setShowButton(true) : setShowButton(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const handleRouteChange = () => {
      try {
        
          document.getElementById("header-bar").style.width = "0px";
      }
      catch (e) { }
    }
  useEffect(() => {
    handleRouteChange()
  }, [router.pathname]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleScroll = (link) => {
    setDrawerOpen(false)
    try {
      
        if (link.includes('#')) {
          if (router.pathname !== "/") {
            router.push(`/${link}`);
          } else {
            document
            .querySelector(link)
            .scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          router.push(link);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (

    <>
      <audio preload="auto" loop ref={typingAudioRef}>
        <source src="/assets/audio/typing.mp3" type="audio/mp3"></source>
      </audio>

      <div className="absolute opacity-0" id="start" />

      <header className={`hidden lg:block backdrop-blur-lg ${showButton ? ' bg-box/50 ' : ''} fixed top-0  z-50 w-full`} >
        <nav className="h-full w-full flex justify-between px-4 md:px-8 lg:px-24  items-center max-w-[1400px] mx-auto">
          <Link href="/">
          <h1
            className="text-xl text-title uppercase flex items-center justify-start gap-4 flex-grow font-secondary  leading-relaxed ">
            <Image  src={'/assets/images/logo.png'} alt={'logo'} width={50} height={50}/>
            Luxe <span className='gradient-text'>Artifacts</span>
          </h1>
              </Link>
          <ul className="flex flex-wrap m-2 gap-2  p-1 rounded-2xl items-center ">
            {nav.map(({ name, icon, link }, index) => (
              <li key={index} onClick={() => handleScroll(link)}>
                <div className={`py-2 capitalize px-4 rounded-2xl flex gap-2 justify-center items-center select-none text-lg font-tertiary font-bold cursor-pointer outline-none text-title  border-transparent   ${router.pathname == link ? "bg-title/10" : "hover:bg-title/10 "}`} >
                  <span className='text-2xl'>
                    {icon}
                  </span>
                  {name}
                </div>
              </li>
            ))}
               <li 
        className={` cursor-pointer scale-100 z-50 text-lg outline-none gradient-bg font-tertiary font-bold ml-2 rounded-2xl px-4 py-2 my-2  text-white px-6 capitalize `}>
             Connect Wallet
        </li>
          </ul>

        </nav>
        <div id="header-bar" className='border-b-[4px] opacity-50 border-title/10  w-0' />

      </header>

      <header className={`z-[60] top-0 left-0 right-0 bottom-0 fixed lg:hidden bg-default  h-full w-full transition ${drawerOpen ? "-translate-x-0" : "-translate-x-full"}`}>
        <nav className="h-full w-full flex flex-col justify-between items-center px-6">

          <button onClick={handleDrawerToggle} className="absolute block sm:hidden top-6 right-6 text-title p-1.5 rounded-2xl">
            <CloseIcon fontSize="24px" />
          </button>

          <ul className="my-8 mt-6 ml-2 flex-grow flex flex-col align-center w-full " onClick={handleDrawerToggle}>
           <Link href="/">
          <h1
            className="text-xl text-title uppercase flex items-center justify-start gap-4 flex-grow font-secondary  leading-relaxed ">
            <Image  src={'/assets/images/logo.png'} alt={'logo'} width={50} height={50}/>
            Luxe <span className='gradient-text'>Artifacts</span>
          </h1>
              </Link>
            {nav.map(({ name, icon, link }, index) => (
              <li key={index} onClick={() => handleScroll(link)} className="py-1.5 my-1 flex items-center justify-start select-none text-base gap-2 font-semibold cursor-pointer text-title hover:text-primary">
                <span className='text-2xl'>
                  {icon}
                </span>

                {name}
              </li>
            ))}
               <li 
        className={` cursor-pointer scale-100 z-50 text-lg outline-none gradient-bg font-tertiary font-bold ml-2 rounded-2xl inline-flex px-4 py-2 my-2  text-white px-6 capitalize `}>
             Connect Wallet
        </li>
          
          </ul>
        </nav>

      </header>


      <div className='flex lg:flex-col-reverse fixed  left-6 lg:bottom-6 lg:left-auto lg:top-auto gap-2 top-6 lg:right-6 z-[50] '>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={handleDrawerToggle} className={`text-2xl lg:hidden gradient-bg  text-white p-1.5 lg:p-2 rounded-xl lg:rounded-2xl z-30`}>
          <MenuIcon />
        </motion.button>
     
      
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
          onClick={() => document.getElementById("start").scrollIntoView({ block: "center", behavior: "smooth" })} className={`cursor-pointer ${showButton ? 'scale-100' : 'scale-0'} z-50 gradient-bg  transition-all outline-none font-medium rounded-xl lg:rounded-2xl text-2xl lg:text-3xl p-1.5 lg:p-2  text-white `}>
          <ChevronUpIcon />
        </motion.button>
      </div>

  </>

  )
}

export default Header