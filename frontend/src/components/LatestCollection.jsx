import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/LatestCollection.css';
import { assets } from '../assets/assets';
import Title from './Title';

const productData = [
  {
    id: 1,
    name: "DUST & FREEDOM",
    price: "2999",
    content: "Sun-scorched, grit-covered, desert-born",
    image: assets.photo,
    button: "Ride This Way ->"
  },
  {
    id: 2,
    name: "MIDNIGHT RUN",
    price: "4999",
    content: "Rides that start after 12. Born of silence and steel",
    image: assets.p_img2_1,
    button: "Run The Night ->"
  },
  {
    id: 3,
    name: "BROTHERHOOD / SISTERHOOD",
    price: "1999",
    content: "One tribe. One Throttle. Marked Together",
    image: assets.p_img3,
    button: "Meet The Tribe ->"
  },
  {
    id: 4,
    name: "LAP RAGE",
    price: "1499",
    content: "Speed. Steel. Precision. Nothing in the rear-view",
    image: assets.p_img4,
    button: "Feel The Burn ->"
  }
];

const LatestCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const product = productData[currentIndex];

  return (
    <div className='collection-wrapper'>
      <Title text1="CHOOSE" text2="YOUR ROAD" />
      <div className="container">
        {/* Inserted Title component at the top */}

        <div className="hero-left">
          <p className="hero-tag">SELL ANYTHING</p>
          <h1 className="hero-title">All you need to power your online store.</h1>
          <p className="hero-subtext">
            Whether you're just getting started or are an established brand, our powerful platform helps your business grow.
          </p>
          <Link to="/collection">
            <button className="hero-button">GET STARTED</button>
          </Link>


        </div>

        <div className="hero-right">
          <div className="carousel-controls">
            <button className="carousel-arrow left" onClick={prevSlide}>&lt;</button>
            <button className="carousel-arrow right" onClick={nextSlide}>&gt;</button>
          </div>
          <div className="product-box">
            <div className="product-details">
              <p className="breadcrumb">Shop &gt; {product.name}</p>
              <p className="product-price"> Starts From ₹{product.price}/-</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.content}</p>
              <Link to={`/collection?category=${encodeURIComponent(product.name)}`}>
                <button className="add-cart-button">{product.button}</button>
              </Link>

            </div>

            <div style={{ paddingRight: '20px' }}>
              <img src={product.image} alt={product.name} className="product-image" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );

};

export default LatestCollection;
