import React from 'react'
import NftsCards from './NftsCards'
import Image from 'next/image'
import { Container } from '..'
import { FaFilter } from 'react-icons/fa'

const MoreNfts = () => {
  return (
    <Container>
    <div className='bg-gradient-to-b from-transparent to-transparent via-box '>
      <div className='mx-auto sm:py-10 py-5 sm:space-y-4'>
        <h2 className='sm:font-extrabold font-bold sm:text-3xl text-title mb-2'>DISCOVER MORE NFTS</h2>
        <div className='sm:flex items-center justify-between mb-6 text-sm hidden'>
          <div className='flex items-center justify-center space-x-4'>
            <p className='bg-secondary rounded-full px-4 py-[6px] text-white cursor-pointer'>All Categories</p>
            <p className='bg-box rounded-full px-4 py-[3px] cursor-pointer'>Art</p>
            <p className='bg-box rounded-full px-4 py-[3px] cursor-pointer'>Celebrities</p>
            <p className='bg-box rounded-full px-4 py-[3px] cursor-pointer'>Gaming</p>
            <p className='bg-box rounded-full px-4 py-[3px] cursor-pointer'>Sport</p>
            <p className='bg-box rounded-full px-4 py-[3px] cursor-pointer'>Music</p>
            <p className='bg-box rounded-full px-4 py-[3px] cursor-pointer'>Crypto</p>
          </div>
          <div className='flex items-center justify-center space-x-2 py-2  bg-box rounded-full px-4'>
            <div>
                             <FaFilter className="text-xl text-title"/>
            
            </div>
            <p className='text-title cursor-pointer'>All Filters</p>
          </div>
        </div>

        <NftsCards />
        <NftsCards />
        <NftsCards />
        <h2 className='text-center text-secondary border-2 rounded-full w-[150px] mt-4 py-2 mx-auto border-secondary hover:bg-secondary hover:text-title font-semibold cursor-pointer'>MORE NFTS</h2>
      </div>
    </div>
    </Container>

  )
}

export default MoreNfts