import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <>
      {/* HERO IMAGE SECTION */}
      <div className="hero-section relative w-full h-screen">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left text-white">

          {/* Tag Line */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="w-8 md:w-10 h-[2px] bg-white rounded-full" />
            <p className="text-lg tracking-widest font-semibold uppercase">
              EXITT - Mark the Free.
            </p>
          </div>

          {/* CTA Button */}
          <Link to="/collection">
            <div className="group inline-block relative cursor-pointer">
              <p className="text-2xl md:text-3xl font-bold px-8 py-4 bg-white text-black rounded-full shadow-lg transition-all duration-300 uppercase tracking-wider group-hover:bg-black group-hover:text-white">
                Join the Movement
              </p>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white blur-xl transition duration-700" />
            </div>
          </Link>
        </div>
      </div>

      {/* TEXT + BUTTON SECTION BELOW IMAGE */}
      <div className="text-section w-full bg-gradient-to-b from-black via-[#111] to-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center md:text-left fade-in">

          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
            We Don’t Sell Clothes. We Mark the Free.
          </h2>

          <p className="text-md md:text-lg text-gray-300 mb-10 leading-relaxed">
            EXITT is built for the untamed. For those who don’t follow maps. For those who ride into the horizon with fire in their lungs. This is not fashion. This is identity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/collection">
              <div className="group inline-block relative cursor-pointer">
                <p className="text-md font-medium px-6 py-3 bg-white text-black shadow-md transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  SHOP NOW
                </p>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white blur-xl transition duration-700" />
              </div>
            </Link>

            <Link to="/about">
              <div className="group inline-block relative cursor-pointer">
                <p className="text-md font-medium px-6 py-3 border border-white text-white shadow-md group-hover:bg-white group-hover:text-black transition-all duration-300">
                  Learn Our Code
                </p>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-white blur-xl transition duration-700" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
