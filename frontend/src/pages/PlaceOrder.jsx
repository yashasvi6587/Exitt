import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../Styles/PlaceOrder.css'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }

  const initPay=(order)=>{
    const options={
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:"Order Payment",
      description:"Order Payment",
      order_id:order.id,
      receipt:order.receipt,
      handler:async(response)=>{
        console.log(response);
        try {
          const {data}=await axios.post(backendUrl+"/api/order/verifyRazorpay",response,{headers:{token}})
          if(data.success){
            navigate("/orders")
            setCartItems({})
          }
        } catch (error) {
          console.log(error);
          toast.error(error)
        }
        
      }
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break
        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }
          break
        case 'razorpay':
          const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } })
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
            
          //   const { session_url } = responseStripe.data
          //   window.location.replace(session_url)
          // } else {
          //   toast.error(responseStripe.data.message)
          }
          break
        default:
          break
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="place-order-container">
      <Title text1={'DELIVERY'} text2={'INFORMATION'} />
      <div className="delivery-form">
        <div className="delivery-row">
          <input required onChange={onChangeHandler} value={formData.firstName} name='firstName' type="text" placeholder='First Name' />
          <input required onChange={onChangeHandler} value={formData.lastName} name='lastName' type="text" placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} value={formData.email} name='email' type="email" placeholder='Email ' />
        <input required onChange={onChangeHandler} value={formData.street} name='street' type="text" placeholder='Street' />
        <div className="delivery-row">
          <input required onChange={onChangeHandler} value={formData.city} name='city' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} value={formData.state} name='state' type="text" placeholder='State' />
        </div>
        <div className="delivery-row">
          <input required onChange={onChangeHandler} value={formData.zipCode} name='zipCode' type="number" placeholder='ZipCode' />
          <input required onChange={onChangeHandler} value={formData.country} name='country' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} value={formData.phone} name='phone' type="number" placeholder='Phone' />
      </div>

      <CartTotal />

      <Title text1={'PAYMENT'} text2={'METHOD'} />
      <div className="payment-method">
        <div className="payment-option" onClick={() => setMethod('stripe')}>
          <p className={method === 'stripe' ? 'selected' : ''}></p>
          <img src={assets.stripe_logo} alt="Stripe" />
        </div>
        <div className="payment-option" onClick={() => setMethod('razorpay')}>
          <p className={method === 'razorpay' ? 'selected' : ''}></p>
          <img src={assets.razorpay_logo} alt="Razorpay" />
        </div>
        <div className="payment-option" onClick={() => setMethod('cod')}>
          <p className={method === 'cod' ? 'selected' : ''}></p>
          <img src={assets.cod_logo} alt="" />
        </div>
      </div>

      <button type='submit' className="place-order-btn">PLACE ORDER</button>
    </form>
  )
}

export default PlaceOrder
