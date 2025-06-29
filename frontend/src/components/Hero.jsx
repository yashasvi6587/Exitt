import React from 'react'
import { assets } from '../assets/assets'
// import "../Styles/Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-white text-black w-full overflow-hidden py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 animate-fade-in">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-8 md:w-10 h-[2px] bg-black rounded-full" />
            <p className="text-lg tracking-widest font-semibold">
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase hover:tracking-wider transition duration-500">
            Latest Arrivals
          </h1>

          <p className="text-md text-gray-600 max-w-md mx-auto md:mx-0">
            Discover our new limited-edition arrivals with sleek designs and monochrome aesthetics. Designed for modern minimalists.
          </p>

          {/* CTA Button */}
          <Link to="/collection"><div className="group inline-block relative mt-4 cursor-pointer">
            <p className="text-md font-medium px-6 py-3 bg-black text-white rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
              SHOP NOW
            </p>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 bg-black blur-xl transition duration-700" />
          </div></Link>
        </div>

        {/* Video Section */}
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <video
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            autoPlay
            muted
            loop
            playsInline
            src={assets.hero_video} // Add video to your assets folder
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
