import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section relative w-full h-screen bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/80 z-10" />
      <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left">

        {/* Tag Line */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
          <div className="w-8 md:w-10 h-[2px] bg-white rounded-full" />
          <p className="text-lg tracking-widest font-semibold uppercase text-white">
            EXITT - Mark the Free.
          </p>
        </div>

        {/* Join the Movement Button */}
        <Link to="/collection">
          <div className="group inline-block relative cursor-pointer mb-6">
            <p className="text-2xl md:text-3xl font-bold px-8 py-4 bg-white text-black rounded-full shadow-lg transition-all duration-300 uppercase tracking-wider group-hover:bg-black group-hover:text-white">
              Join the Movement
            </p>

            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white blur-xl transition duration-700" />
          </div>
        </Link>

        {/* Sub Heading */}
        <h2 className="text-xl md:text-3xl font-semibold mb-3 text-white">
          We Don’t Sell Clothes. We Mark the Free.
        </h2>

        {/* Description */}
        <p className="text-md md:text-lg max-w-xl text-gray-200 mb-6">
          EXITT is built for the untamed. For those who don’t follow maps. For those who ride into the horizon with fire in their lungs. This is not fashion. This is identity.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/collection">
            <div className=" group inline-block relative cursor-pointer">
              <p className="text-md font-medium px-6 py-3 bg-white text-black shadow-md transition-all duration-300 group-hover:bg-black group-hover:text-white">
                SHOP NOW
              </p>

              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white blur-xl transition duration-700" />
            </div>
          </Link>

          <Link to="/about">
            <div className="group inline-block relative cursor-pointer">
              <p className="about text-md font-medium px-6 py-3 border border-white text-white shadow-md group-hover:bg-white group-hover:text-black transition-all duration-300">
                Learn Our Code
              </p>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white blur-xl transition duration-700" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
