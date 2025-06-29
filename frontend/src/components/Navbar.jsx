import React, { useContext, useState } from 'react';
import { assets } from "../assets/assets.js";
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import '../Styles/Navbar.css';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    if (!token) {
      navigate('/login');
    } else {
      setShowDropdown((prev) => !prev);
    }
  };
  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="navbar-container bg-white dark:bg-black text-black dark:text-black transition-colors duration-300 shadow-md">
      {/* Top Navbar */}
      <div className="flex justify-between items-center p-4">
        <Link to='/'><img src={assets.logo} alt="Logo" className="w-24 hover:scale-105 transition-transform duration-300 h-24" /></Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-15 font-large text-2xl tracking-wide">
          {['/', '/collection', '/about', '/contact','/login'].map((path, index) => (
            <NavLink to={path} key={index}>
              {({ isActive }) => (
                <div className="relative group pb-1">
                  <p
                    className={`transition-colors duration-300 ${isActive ? 'text-glow' : 'hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                  >
                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </p>
                  <span
                    className={`nav-underline ${isActive ? 'w-full' : ''} group-hover:w-full`}
                  ></span>
                </div>
              )}
            </NavLink>
          ))}
        </ul>


        {/* Right Icons */}
        <div className="flex items-center gap-4 ">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="icon-hover w-10 h-10"
          />

          <div className="relative" ref={dropdownRef}>
            {
              <img
              onClick={handleProfileClick}
              src={assets.profile_icon}
              alt="Profile"
              className="cursor-pointer w-10 h-10"
            />
            }
            

            {token && showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 shadow-md rounded-md border z-20 transition-all duration-200">
                <p onClick={() => { navigate('/profile'); setShowDropdown(false); }} className="dropdown-item">
                  My Profile
                </p>
                <p onClick={() => { navigate('/orders'); setShowDropdown(false); }} className="dropdown-item">
                  Orders
                </p>
                <p onClick={() => { logout(); setShowDropdown(false); }} className="dropdown-item">
                  Logout
                </p>
              </div>
            )}
          </div>

          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="Cart" className="icon-hover w-10 h-10" />

            <p className='absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-2'>
              {getCartCount()}
            </p>
          </Link>

          {!visible && (
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className='sm:hidden cursor-pointer icon-hover'
              alt="Menu"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black z-50 flex flex-col items-start p-6 gap-6 transition-all">
          <div onClick={() => setVisible(false)} className="flex items-center gap-2 cursor-pointer">
            <img src={assets.dropdown_icon} className="rotate-180 w-5 h-5" alt="Back" />
            <p className="text-base font-medium">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/collection'>COLLECTIONS</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/contact'>CONTACT</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/login'>LOGIN</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
