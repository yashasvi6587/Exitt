import React from 'react'
import '../Styles/NewsLetterBox.css'
import { useNavigate } from 'react-router-dom'

const NewsLetterBox = () => {
  const navigate = useNavigate()

  const handleJoinClick = () => {
    window.scrollTo(0, 0)
    navigate('/contact')
  }

  return (
    <div className="newsletter-container bg-white dark:bg-black text-black dark:text-white py-16 px-6 md:px-20 text-center">
      <p className="text-2xl md:text-3xl font-semibold tracking-wide mb-2 animate-glow">
        Join Now and Get <span className="text-glow">Our Accessory</span>
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Join our newsletter to receive updates, exclusive deals, and more.
      </p>

      {/* Centered JOIN NOW Button */}
      <div className="flex justify-center">
        <button
          className="glow-button px-8 py-3 rounded-full border border-black dark:border-white font-semibold tracking-wide"
          onClick={handleJoinClick}
        >
          JOIN NOW
        </button>
      </div>
    </div>
  )
}

export default NewsLetterBox
