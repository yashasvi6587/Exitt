import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import '../Styles/About.css'

const About = () => {
  return (
    <div className="about-wrapper bg-white dark:bg-black text-black dark:text-white px-4 py-10 md:px-20 transition-all duration-300">
      
      {/* About Title */}
      <div className="text-center mb-10">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <img src={assets.about_img} alt="about" className="w-full lg:w-1/2 rounded-lg shadow-glow" />
        <div className="lg:w-1/2 space-y-5">
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae consectetur veniam nemo eaque id dignissimos eius excepturi dolore possimus.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae consectetur veniam nemo eaque id dignissimos eius excepturi dolore possimus.
          </p>
          <div className="mission-box p-5 border-l-4 border-black dark:border-white hover:shadow-glow transition-all">
            <b className="block text-lg mb-2">Our Mission</b>
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit mollitia at nisi aperiam voluptate obcaecati error qui veritatis, doloremque maxime?
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-8">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {[
          {
            title: 'Quality Assurance',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus officiis harum, commodi quae optio fugiat praesentium iure repellendus labore!'
          },
          {
            title: 'Convenience',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus officiis harum, commodi quae optio fugiat praesentium iure repellendus labore!'
          },
          {
            title: 'Exceptional Customer Service',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus officiis harum, commodi quae optio fugiat praesentium iure repellendus labore!'
          }
        ].map((item, index) => (
          <div key={index} className="why-box border border-gray-300 dark:border-gray-700 p-6 rounded-xl hover:shadow-glow transition-all">
            <b className="text-lg block mb-2">{item.title} :</b>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <NewsLetterBox />
    </div>
  )
}

export default About
