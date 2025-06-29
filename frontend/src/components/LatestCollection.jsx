import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import '../Styles/LatestCollection.css'
import { Link } from 'react-router-dom'

const LatestCollection = () => {
  const { products, currency, addToCart } = useContext(ShopContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const latestProduct = products.slice(0, 5)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + latestProduct.length) % latestProduct.length)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % latestProduct.length)
  }

  return (
    <div className="hero-section">
      <Title text1="EXPLORE" text2="COLLECTION" />

      <div className="hero-content">
        {/* Left Text */}
        <div className="hero-text">
          <p className="tagline">SELL ANYTHING</p>
          <h1 className="hero-heading">All you need to power your online store.</h1>
          <p className="hero-subtext">
            Whether you’re just getting started or are an established brand, our powerful platform helps your business grow.
          </p>
          <Link to='/collection'><button className="hero-cta">GET STARTED</button></Link>
        </div>

        {/* Right Carousel */}
        <div className="hero-carousel">
          {latestProduct.length > 0 && (
            <div className="carousel-box">
              <button className="carousel-nav left" onClick={handlePrev}><FaArrowLeft /></button>

              <div className="carousel-card">
                <img src={latestProduct[currentIndex].image} alt={latestProduct[currentIndex].name} className="carousel-img" />
                <h3 className="carousel-name">{latestProduct[currentIndex].name}</h3>
                <p className="carousel-desc">{latestProduct[currentIndex].content}</p>
                <p className="carousel-price">{currency} {latestProduct[currentIndex].price}/-</p>
                <Link to='/collection'><button
                  className="add-to-cart-btn"
                >
                  EXPLORE
                </button></Link>
              </div>

              <button className="carousel-nav right" onClick={handleNext}><FaArrowRight /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LatestCollection
