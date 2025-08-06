import React from 'react'
import { assets } from '../assets/assets'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-6 py-10 md:px-20">
      <div className="footer-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
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
            <Link to={'/'}><li onClick={()=>window.scrollTo(0,0)}>The Ride Begins</li></Link>
            <Link to={'/collection'}><li onClick={()=>window.scrollTo(0,0)}>Road Edition</li></Link>
            <Link to={'/about'}><li onClick={()=>window.scrollTo(0,0)}>The Code</li></Link>
            <Link to={'/contact'}><li onClick={()=>window.scrollTo(0,0)}>Road Stories</li></Link>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-links">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul className="space-y-2 mt-4">
            <li className="footer-link-item">+91-123456789</li>
            <li className="footer-link-item">ecommerce1234@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Exitt.com – All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
