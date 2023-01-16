import type { NextPage } from 'next'
import Head from '../components/Static/Header'
import Image from 'next/image'
import Navbar from '../components/Static/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats.js'
const Home: NextPage = () => {
  return (
    <>
      <Head />
     
      <Navbar />
      <Hero />
      <Features />
      <Stats />
    </>
    )
}

export default Home