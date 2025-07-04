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

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          // setToken(response.data.token);
          localStorage.setItem('token', response.data.token)

        } else {
          toast.error(response.data.msg)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token);

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
    }
  }, [token])

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>{currentState}</h2>
        <hr />
        {currentState === 'Sign Up' && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            required
          />
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
