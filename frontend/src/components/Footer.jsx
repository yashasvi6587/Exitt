import React from 'react';
import { assets } from '../assets/assets';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaUserTie, FaWhatsapp, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-6 py-12 md:px-28">

      <div className="footer-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

        {/* Logo & Description */}
        <div className="footer-logo-section">
          <img src={assets.logo} alt="Logo" className="w-32 mb-4 hover:scale-110 transition-transform duration-300" />
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur minima praesentium quia maiores animi aliquid distinctio, ducimus cum earum.
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <p className="footer-heading">COMPANY</p>
          <ul className="space-y-2 mt-4">
            <Link to="/"><li className="footer-link-item" onClick={() => window.scrollTo(0, 0)}>The Ride Begins</li></Link>
            <Link to="/collection"><li className="footer-link-item" onClick={() => window.scrollTo(0, 0)}>Road Edition</li></Link>
            <Link to="/about"><li className="footer-link-item" onClick={() => window.scrollTo(0, 0)}>The Code</li></Link>
            <Link to="/roadstories"><li className="footer-link-item" onClick={() => window.scrollTo(0, 0)}>Road Stories</li></Link>
            <Link to="/orders"><li className="footer-link-item" onClick={() => window.scrollTo(0, 0)}>Your Garage</li></Link>
            <Link to="/contact"><li className="footer-link-item" onClick={() => window.scrollTo(0, 0)}>Contact Us</li></Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-links">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul className="space-y-4 mt-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                54709 Williams Station<br />
                Suite 350, Washington, USA
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1" />
              <span>ecommerce1234@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaUserTie className="mt-1" />
              <span>We’re always looking for passionate individuals. Reach out to join our journey!</span>
            </li>
            <li className="flex gap-4 text-xl mt-2 social-icons text-gray-600 dark:text-gray-300">
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
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="footer-links">
          <p className="footer-heading">SEND A MESSAGE</p>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-transparent border border-gray-400 dark:border-gray-600 rounded focus:outline-none focus:border-black dark:focus:border-white text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-gray-400 dark:border-gray-600 rounded focus:outline-none focus:border-black dark:focus:border-white text-sm"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 bg-transparent border border-gray-400 dark:border-gray-600 rounded focus:outline-none focus:border-black dark:focus:border-white text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-semibold rounded hover:opacity-90 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-lg text-gray-500 dark:text-gray-400">
        © 2025 Exitt.com – All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
