import React from 'react'
import Discover from './Discover'
import Transaction from './Transaction'
import SellNfts from './SellNfts'
import TopCollections from './TopCollections'
import Collection from './Collection'
import Hero from './Hero'
import MoreNfts from './MoreNfts'
import Creators from './Creators'
import Steps from './Steps'
import Join from './Join'

const Home = () => {
  return (
    <>
        <Hero />
       <Discover />
          <Transaction />
          <TopCollections />
          <Collection />
          <SellNfts />
          <MoreNfts /> 
        <Steps />
          <Creators/>
        <Join />
      </>
  )
}

export default Home