import React from 'react';
import '../Styles/LatestCollection.css';
import { assets } from '../assets/assets';
import Title from './Title';
import {Link} from "react-router-dom"

const productData = [
  {
    id: 1,
    name: "DUST & FREEDOM",
    price: "2999",
    content: "Sun-scorched, grit-covered, desert-born",
    image: assets.photo,
    button: "Ride This Way"
  },
  {
    id: 2,
    name: "MIDNIGHT RUN",
    price: "4999",
    content: "Rides that start after 12. Born of silence and steel",
    image: assets.p_img2_1,
    button: "Run The Night"
  },
  {
    id: 3,
    name: "BROTHERHOOD / SISTERHOOD",
    price: "1999",
    content: "One tribe. One Throttle. Marked Together",
    image: assets.p_img3,
    button: "Meet The Tribe"
  },
  {
    id: 4,
    name: "LAP RAGE",
    price: "1499",
    content: "Speed. Steel. Precision. Nothing in the rear-view",
    image: assets.p_img4,
    button: "Feel The Burn"
  }
];

const topper=()=>{
  window.scroll(0,0)
}

const LatestCollection = () => {
  return (
    <div className='collection-wrapper'>
      <Title text1="CHOOSE" text2="YOUR ROAD" />
      <div className="straight-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-name-heading">{product.name}</h2>
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-card-image" />
              <div className="hover-overlay">
                <p className="product-hover-text">{product.content}</p>
              </div>
            </div>
            <Link to={`/collection?category=${encodeURIComponent(product.name)}`}>
            <button onClick={topper} className="product-card-button">
              {product.button} <span className="arrow-icon">→</span>
            </button>
            </Link>
          </div>

        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
