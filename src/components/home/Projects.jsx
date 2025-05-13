"use client"
import React, {  useEffect, useState } from "react";
import { Container, WorkCard } from "..";
import { HiOutlineArrowRight as RightArrowIcon } from "react-icons/hi"
import { FaGithubAlt as GithubIcon } from "react-icons/fa"
import { categories, subCategories, works } from "../../data/global";
import { motion } from 'framer-motion';

const Projects = () => {
  const [mixer, setMixer] = useState()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mixitup = require('mixitup');
      if (mixitup) {
        const mixer = mixitup(".works", {
          selectors: {
            target: '.work-item'
          },
          animation: {
            "duration": 250,
            "nudge": false,
            "reverseOut": false,
            "effects": "fade scale(0.01) translateY(20%)"
          }
        });
        setMixer(mixer)
      }
      }
  }, [])

  const [category, setCategory] = useState("all")
  const [subCategory, setSubCategory] = useState("all")
  useEffect(() => {

    if (mixer) {
      if (category == "all" && subCategory =='all') mixer.filter(`.all.all`)
      else if (category == "all") mixer.filter(`.${subCategory}.all`)
      else if (subCategory == "all") mixer.filter(`.all.${category}`)
      else mixer.filter(`.${subCategory}.${category} `)
    }
  }, [category, subCategory])

  return (
    <Container id="projects" title="Projects :D" subtitle="What I have done" description="projects i made along with learning">


      <div className="works relative">

        {categories.length > 0 && <ul className="flex flex-wrap justify-start text-base font-medium text-center mb-2">
          {categories.map((ct, index) => (
            <li onClick={() => setCategory(ct.slug)} className="m-1 mb-1" key={index}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className={`${category == ct.slug ? '!bg-title/10 !text-white' : ''} border-outline border-2 inline-block py-2.5 text-sm md:text-base px-5 cursor-pointer rounded-lg text-title bg-paper hover:bg-title/10 hover:text-white capitalize  ${ct == category && "!text-white !bg-title/10"}`}>
                {ct.name}
              </motion.div>
            </li>
          ))}
        </ul>}
        {subCategories.length > 0 && <ul className="flex flex-wrap justify-start text-base font-medium text-center mb-10">
          {subCategories.map((sct, index) => (
            <li onClick={() => setSubCategory(sct.slug)} className="m-1 mb-1" key={index}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className={`${subCategory == sct.slug ? '!bg-title/10 !text-white' : ''} border-outline border-2 inline-block py-1.5 text-sm md:text-base px-3 cursor-pointer rounded-lg text-title bg-paper hover:bg-title/10 hover:text-white capitalize  ${sct == subCategory && "!text-white !bg-title/10"}`}>
                {sct.name}
              </motion.div>
            </li>
          ))}
        </ul>}

        {works.length > 0 ? <div className="flex flex-wrap flex-row items-center justify-center">
          {works.map((work, index) => <div key={index}><WorkCard work={work} /></div>)}
        </div> : <div className='text-center font-bold uppercase w-full'>
          No works
        </div>}

       <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=" capitalize transition-all font-semibold  bg-paper hover:bg-title/10  hover:text-white hover:fill-white w-max mx-auto mt-12 xl:mt-16 text-sm  6 py-2 px-4 my-8 flex items-center justify-center text-title rounded-2xl group"
        >
          <GithubIcon className='text-xl lg:text-3xl mr-2' />
          More
          <RightArrowIcon className='text-xl lg:text-3xl ml-2 group-hover:ml-4 transition-all' />
        </a>

      </div>
    </Container>
  );
};

export default Projects;
