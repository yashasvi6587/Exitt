import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import '../Styles/Product.css' // ← include the CSS
import { toast } from 'react-toastify'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart,navigate } = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [size, setSize] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    const foundProduct = products.find(p => p._id === productId)
    if (foundProduct) {
      setProductData(foundProduct)
      setImage(foundProduct.image[0])
    }
    window.scrollTo(0,0)
  }, [productId, products])
  



  return productData ? (
    <div className="product-container">
      <div className="product-content">
        {/* Left Column - Thumbnails */}
        <div className="thumbnail-list">
          {productData.image.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={`thumbnail ${img === image ? 'active' : ''}`}
              onClick={() => setImage(img)}
            />
          ))}
        </div>

        {/* Center - Main Image */}
        <div className="main-image-box">
          <img src={image} alt="main product" className="main-image" />
        </div>

        {/* Right Column - Details */}
        <div className="product-details">
          <h1>{productData.name}</h1>
          <div className="stars">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" />
            ))}
            <img src={assets.star_dull_icon} alt="star" />
            <p>(122)</p>
          </div>
          <p className="price">{currency}{productData.price}</p>
          <p className="desc">{productData.description}</p>

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
      return; // ❌ Prevents adding to cart or navigating
    }
    addToCart(productData._id, size);
    navigate('/cart'); // ✅ Only navigates after valid size
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

      {/* Description Section */}
      <div className="product-description">
        <div className="tabs">
          <b>Description</b>
          {/* <p>Reviews (122)</p> */}
        </div>
        <div className="tab-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Distinctio, fugiat optio? Neque minima praesentium accusamus.</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts onClick category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="product-container">Loading...</div>
}

export default Product
