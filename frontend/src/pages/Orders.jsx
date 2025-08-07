import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import '../Styles/Orders.css'
import { toast } from 'react-toastify'

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])
  const [userDetails, setUserDetails] = useState(null)

  const loadOrderData = async () => {
    try {
      if (!token) return null

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, {
        headers: { token }
      })

      if (response.data.success) {
        const allOrdersItem = []
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const loadUserDetails = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/user/profile', {
        headers: { token }
      })
      if (response.data.success) {
        setUserDetails(response.data.data)
      }
      console.log(response);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      loadOrderData()
      loadUserDetails()
    }
  }, [token])


  return (
    <div className="orders-container">
      {userDetails && (
        <div className="user-profile-box">
          <h3>Welcome back, {userDetails.name}</h3>

          <p>This is where your story lives.</p>
          <div className="user-info-line">
            <p className="info-title">Your Mark</p>

            <div className="info-item">
              <span className="info-label">Tribe</span>
              <span className="info-value">{userDetails.tribe}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">{userDetails.state}, IN</span>
            </div>

            <div className="info-item">
              <span className="info-label">Member Since</span>
              <span className="info-value">{new Date(userDetails.date).toDateString()}</span>
            </div>
          </div>

        </div>
      )}
      <Title text1="YOUR" text2="GEARS" />
      <div>
        {
          orderData.map((item, index) => (
            <div className="order-card" key={index}>
              <div className="order-left">
                <img src={item.image[0]} alt="product" />
                <div className="order-info">
                  <p><b>{item.name}</b></p>
                  <p>{currency}{item.price} × {item.quantity}</p>
                  <p>Size: <span>{item.size}</span></p>
                  <p>Date: <span>{new Date(item.date).toDateString()}</span></p>
                  <p>Payment: <span>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className="order-right">
                <div className="order-status">
                  <div className="order-status-dot"></div>
                  <p>{item.status}</p>
                </div>
                <button className="track-btn" onClick={loadOrderData}>TRACK ORDER</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders