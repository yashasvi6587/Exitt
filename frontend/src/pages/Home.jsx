import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeler from '../components/BestSeler'
import OurPolicy from '../components/OurPolicy'
import New from '../components/New'
import "../Styles/Home.css"

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="homepage">
        <section className="home-section latest">
          <LatestCollection />
        </section>
        <New />
      </div>
      <BestSeler />
      <OurPolicy />
    </div>
  )
}

export default Home
