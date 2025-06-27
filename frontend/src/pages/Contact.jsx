import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div className="contact-container bg-white dark:bg-black text-black dark:text-white px-4 md:px-20 py-16 transition-all duration-300">
      
      {/* Section Title */}
      <div className="text-center mb-10">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <img src={assets.contact_img} alt="Contact" className="rounded-lg w-full lg:w-1/2 shadow-glow" />

        <div className="contact-details space-y-5 lg:w-1/2">
          <div className="p-6 bg-white/5 dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 rounded-xl transition-all">
            <p className="text-lg font-semibold">Our Store</p>
            <p className="text-gray-600 dark:text-gray-300">
              54709 Williams Station <br />
              Suite 350, Washington, USA
            </p>
          </div>

          <div className="p-6 bg-white/5 dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 rounded-xl transition-all">
            <p className="text-lg font-semibold">Tel & Email</p>
            <p className="text-gray-600 dark:text-gray-300">
              Tel: (+91) 1234567890 <br />
              Email: address123@gmail.com
            </p>
          </div>

          <div className="p-6 bg-white/5 dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 rounded-xl transition-all">
            <p className="text-lg font-semibold">Careers Forever</p>
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, corrupti!
            </p>
            <button className="mt-4 contact-btn">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewsLetterBox />
    </div>
  )
}

export default Contact
