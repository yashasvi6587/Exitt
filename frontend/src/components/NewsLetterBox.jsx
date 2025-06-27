import React from 'react'
import '../Styles/NewsLetterBox.css'
import { Link } from 'react-router-dom'

const NewsLetterBox = () => {
  const onSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
  }

  return (
    <div className="newsletter-container bg-white dark:bg-black text-black dark:text-white py-16 px-6 md:px-20 text-center">
      <p className="text-2xl md:text-3xl font-semibold tracking-wide mb-2 animate-glow">
        Join Now and Get <span className="text-glow">Our Accessory</span>
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Join our newsletter to receive updates, exclusive deals, and more.
      </p>

      <form onSubmit={onSubmit} className="newsletter-form max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="newsletter-input flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-zinc-700 focus:outline-none"
        />
        <Link to="/login"><button type="submit" className="glow-button px-6 py-2 rounded-full border border-black dark:border-white font-semibold tracking-wide">
          JOIN NOW
        </button></Link>
      </form>
    </div>
  )
}

export default NewsLetterBox
