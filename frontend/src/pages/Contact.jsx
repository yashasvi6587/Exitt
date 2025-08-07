import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import '../Styles/Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserTie } from 'react-icons/fa';
import { FaWhatsapp, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact-container bg-white dark:bg-black text-black dark:text-white px-4 md:px-20 py-16 transition-all duration-300">
      {/* Section Title */}
      <div className="text-center mb-10">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">

        <div className="contact-details space-y-6 lg:w-1/2">
          <div className="contact-card">
            <div className="card-icon"><FaMapMarkerAlt /></div>
            <div>
              <p className="text-lg font-semibold">Our Store</p>
              <p className="card-text">
                54709 Williams Station <br />
                Suite 350, Washington, USA
              </p>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon"><FaPhoneAlt /></div>
            <div>
              <p className="text-lg font-semibold">Tel & Email</p>
              <p className="card-text">
                Tel: (+91) 1234567890 <br />
                Email: address123@gmail.com
              </p>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon"><FaUserTie /></div>
            <div>
              <p className="text-lg font-semibold">Careers Forever</p>
              <p className="card-text">
                We’re always looking for passionate individuals. Reach out to join our journey!
              </p>
              <button className="mt-4 contact-btn">Join Us</button>
              <div className="flex gap-4 mt-4 text-2xl text-gray-600 dark:text-gray-300 social-icons">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                  <FaWhatsapp />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
                  <FaTwitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="contact-form grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Your Message..." className="md:col-span-2 h-32 resize-none"></textarea>
        <button type="submit" className="contact-btn md:col-span-2">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
