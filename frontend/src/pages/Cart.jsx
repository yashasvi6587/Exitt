import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import '../Styles/Cart.css'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productsData = products.find((product) => product._id === item._id);

            // Skip if product not found (prevent crash)
            if (!productsData) return null;

            return (
              <div className="cart-item" key={index}>
                <div className="cart-product">
                  <img src={productsData.image?.[0]} alt="" />
                  <div className="cart-details">
                    <p className="font-semibold">{productsData.name}</p>
                    <p>{currency}{productsData.price}</p>
                    <p>Size: <strong>{item.size}</strong></p>
                  </div>
                </div>
                <div className="cart-actions">
                  <input
                    onChange={(e) =>
                      e.target.value === '' || e.target.value === '0'
                        ? null
                        : updateQuantity(item._id, item.size, Number(e.target.value))
                    }
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    src={assets.bin_icon}
                    alt="Delete"
                  />
                </div>
              </div>
            )
          })
        }

      </div>

      <div className="checkout-section">
        <CartTotal />
        <button
          className="checkout-btn"
          onClick={() => {
            navigate('/place-order');
            window.scrollTo(0, 0);
          }}
        >
          PROCEED TO CHECKOUT
        </button>

      </div>
    </div>
  )
}

export default Cart
