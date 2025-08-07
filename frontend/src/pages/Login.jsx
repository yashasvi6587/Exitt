import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from "axios"
import { toast } from 'react-toastify'
import '../Styles/Login.css'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, backendUrl, navigate, getUserCart } = useContext(ShopContext)
  const [name, setName] = useState('')
  const [tribe, setTribe] = useState('')
  const [state, setState] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password, tribe, state,phone })
        if (response.data.success) {
          localStorage.setItem('token', response.data.token)
          setToken(response.data.token)
          await getUserCart(response.data.token)
        } else {
          toast.error(response.data.msg)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          localStorage.setItem('token', response.data.token)
          setToken(response.data.token)
          await getUserCart(response.data.token)
        } else {
          toast.error(response.data.msg || response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  const tribeOptions = [
    "DUST & FREEEDOM",
    "MIDNIGHT RUN",
    "BROTHERHOOD / SISTERHOOD",
    "LAP RAGE"
  ]

  const stateOptions = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ]

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>{currentState}</h2>
        <hr />
        {currentState === 'Sign Up' && (
          <>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              inputMode="numeric"
              type='tel'
              placeholder="Your Phone Number"
              required
              pattern="[0-9]{10}" // optional validation
              maxLength={10}
            />

            <select value={tribe} onChange={(e) => setTribe(e.target.value)} required>
              <option value="" disabled>Select Tribe</option>
              {tribeOptions.map((t, i) => <option key={i} value={t}>{t}</option>)}
            </select>
            <select value={state} onChange={(e) => setState(e.target.value)} required>
              <option value="" disabled>Select State</option>
              {stateOptions.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>
          </>
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <div className="form-footer">
          <p className="forgot">Forgot Your Password?</p>
          {currentState === 'Login' ? (
            <p className="toggle" onClick={() => setCurrentState('Sign Up')}>
              Create Account
            </p>
          ) : (
            <p className="toggle" onClick={() => setCurrentState('Login')}>
              Login Account
            </p>
          )}
        </div>
        <button type="submit" className="submit-btn">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

export default Login