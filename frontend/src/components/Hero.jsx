import React from 'react'
import { assets } from '../assets/assets'
import "../Styles/Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative bg-white dark:bg-black text-white dark:text-white overflow-hidden">
      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-6 md:px-20 gap-6 animate-fade-in">

        {/* Top Tag Line */}
        <div className="flex items-center gap-3 group">
          <div className="w-8 md:w-11 h-[2px] bg-white dark:bg-white transition-all duration-300 group-hover:w-16"></div>
          <p className="text-sm font-medium tracking-widest group-hover:tracking-[0.25em] transition-all duration-300">
            OUR BESTSELLERS
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight transition-all duration-500 bg-clip-text text-transparent bg-white dark:from-white dark:via-gray-400 dark:to-white">
          Latest Arrivals
        </h1>

        {/* Call to Action */}
        <div className="flex items-center gap-4 group cursor-pointer transition-transform hover:scale-105">
          <button className="glow-button px-6 py-2 rounded-full font-medium relative z-10 overflow-hidden border border-white dark:border-white">
           <Link to="/collection"> <span className="relative z-20">SHOP NOW</span></Link>
            <div className="glow-bg"></div>
          </button>
          <div className="w-8 md:w-11 h-[2px] bg-white dark:bg-white transition-all group-hover:w-16"></div>
        </div>
      </div>

      {/* Hero Video */}
      <video
        src={assets.hero_video}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-black/60 dark:from-black/80 dark:via-transparent dark:to-white/10 z-0"></div>
    </div>
  )
}

export default Hero
