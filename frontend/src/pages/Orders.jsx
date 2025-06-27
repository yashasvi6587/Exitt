import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import '../Styles/Orders.css'

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) return

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
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [])

  return (
    <div className="orders-container">
      <Title text1="MY" text2="ORDERS" />
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
