import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
      if (response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white transition-all duration-300">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-xl shadow-lg border border-white/10">
        <h1 className="text-3xl font-bold text-center mb-6 tracking-widest glow-text">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white/50 glow-input transition-all duration-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white/50 glow-input transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-black hover:text-white border border-white hover:border-white transition-all duration-300 glow-button"
          >
            Login
          </button>
        </form>
      </div>

      {/* Add custom glow animation with Tailwind's plugin or CSS if not supported */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 10px white;
        }
        .glow-input:focus {
          box-shadow: 0 0 8px white;
        }
        .glow-button:hover {
          box-shadow: 0 0 15px white;
        }
      `}</style>
    </div>
  )
}

export default Login
