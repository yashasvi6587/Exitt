import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from "axios"
import { toast } from 'react-toastify'
import '../Styles/Login.css'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext)



  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [bikeType, setBikeType] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
          phone,
          gender,
          dob,
          bikeType
        })

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.msg)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password
        })

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
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
      window.scrollTo(0, 0)
    }
  }, [token])

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>{currentState}</h2>
        <hr />
        {currentState === 'Sign Up' && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <select value={bikeType} onChange={(e) => setBikeType(e.target.value)} required>
              <option value="">Select Bike Type</option>
              <option value="Road">Road</option>
              <option value="MTB">MTB</option>
              <option value="Cruiser">Cruiser</option>
              <option value="Other">Other</option>
            </select>
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="form-footer">
          <p className="forgot">Forgot Your Password?</p>
          {currentState === 'Login' ? (
            <p className="toggle" onClick={() => setCurrentState('Sign Up')}>
              Create Account
            </p>
          ) : (
            <p
              className="toggle"
              onClick={() => {
                setCurrentState('Login')
              }}
            >
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
