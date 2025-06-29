import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import '../Styles/Product.css' // ← include the CSS
import { toast } from 'react-toastify'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart, navigate } = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [size, setSize] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    const foundProduct = products.find(p => p._id === productId)
    if (foundProduct) {
      setProductData(foundProduct)
      setImage(foundProduct.image[0])
    }
    window.scrollTo(0, 0)
  }, [productId, products])
  return productData ? (
    <div className="product-container">
      <div className="product-content updated-layout">
        {/* Left: Text description */}
        <div className="product-info-left">
          <h1>{productData.name}</h1>
          <ul className="bullet-points">
            <li>✔ Fits true to size</li>
            <li>✔ Oversized fit</li>
            <li>✔ Cozy outer buttons and pen holes on the front</li>
            <li>✔ And back of body</li>
            <li>✔ Major detail on the jacket</li>
            <li>✔ Custom detail with signature cozy vibes</li>
            <li>✔ Plush and cozy removable</li>
            <li>✔ Jacket can reverse — wear 2 way</li>
          </ul>
        </div>

        {/* Center: Main image */}
        <div className="product-image-center">
          <img src={image} alt="main product" className="main-image" />
          <button
            className="arrow-button"
            onClick={() => {
              const currentIndex = productData.image.indexOf(image);
              const nextIndex = (currentIndex + 1) % productData.image.length;
              setImage(productData.image[nextIndex]);
            }}
          >
            →
          </button>

        </div>

        {/* Right: Extra details below image */}
        <div className="product-extras">
          <div className="stars">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" />
            ))}
            <img src={assets.star_dull_icon} alt="star" />
            <p>(122)</p>
          </div>

          <p className="price">{currency}{productData.price}</p>

          <div className="size-section">
            <p>Select Size:</p>
            <div className="size-options">
              {productData.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSize(s)}
                  className={size === s ? 'active' : ''}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className='add-btn'
            onClick={() => {
              if (!size) {
                toast.error('Please select a size.');
                return;
              }
              addToCart(productData._id, size);
              navigate('/cart');
            }}
          >
            ADD TO CART
          </button>

          <div className="policy">
            <p>✓ 100% Original Product</p>
            <p>✓ Cash on Delivery Available</p>
            <p>✓ Easy Return & Exchange within 7 Days</p>
          </div>
        </div>
      </div>

      <RelatedProducts onClick category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="product-container">Loading...</div>
}

export default Product
