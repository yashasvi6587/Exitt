import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeler from '../components/BestSeler'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
// import StoryThemes from '../components/StoryThemes'
import New from '../components/New'
import "../Styles/Home.css"

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="homepage">
        <New />
        <section className="home-section latest">
          <LatestCollection />
        </section>
        {/* <section className="home-section themes">
          <StoryThemes />
        </section> */}
      </div>
      <BestSeler />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
