import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'
import '../Styles/SearchBar.css'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setVisible(location.pathname.includes('collection'))
  }, [location])

  return showSearch && visible ? (
    <div className="searchbar-container">
      <div className="searchbar-inner">
        <input
          className="searchbar-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
        />
        <img className="search-icon" src={assets.search_icon} alt="search" />
        <img className="cross-icon" onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="close" />
      </div>
    </div>
  ) : null
}

export default SearchBar
