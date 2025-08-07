import React, { useContext, useState, useRef, useEffect } from 'react';
import { assets } from "../assets/assets.js";
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import '../Styles/Navbar.css';

const Navbar = () => {
  const location = useLocation(); // To detect current path
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

  const isCollectionPage = location.pathname === '/collection';

  return (
    <div className="navbar-container bg-white dark:bg-black text-black dark:text-black transition-colors duration-300 shadow-md">
      {/* Top Navbar */}
      <div className="flex justify-between items-center p-4">
        <Link to='/'><img src={assets.logo} alt="Logo" className="w-24 hover:scale-105 transition-transform duration-300 h-24" /></Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10 font-large text-xl tracking-wide">
          {[
            { label: 'The Ride Begins', path: '/' },
            { label: 'Road Edition', path: '/collection' },
            { label: 'The Code', path: '/about' },
            { label: 'Road Stories', path: '/roadstories' },
            { label: 'Your Garage', path: '/orders' },
            { label: 'Contact Us', path: '/contact' },
          ].map(({ label, path }, index) => (
            <NavLink to={path} key={index}>
              {({ isActive }) => (
                <div className="relative group pb-1">
                  <p
                    className={`transition-all duration-300 px-2 py-1 
    ${isActive ? 'active-nav' : 'hover:text-gray-700 dark:hover:text-gray-300'}`}
                  >
                    {label}
                  </p>

                  <span className={`nav-underline ${isActive ? 'w-full' : ''} group-hover:w-full`}></span>
                </div>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {isCollectionPage && (
            <img
              onClick={() => setShowSearch(true)}
              src={assets.search_icon}
              alt="Search"
              className="icon-hover w-10 h-10"
            />
          )}

          <div className="relative" ref={dropdownRef}>
            <div className="relative flex items-center gap-5" ref={dropdownRef}>
              {/* SaddleBag Box */}
              <div className="saddlebag-box cursor-pointer" onClick={handleProfileClick}>
                <span className="saddlebag-text">SaddleBag</span>
              </div>

              {/* Cart Icon (outside box) */}
              <Link to='/cart' className='relative cart-icon-container'>
                <img src={assets.cart_icon} alt="Cart" className="cart-icon icon-hover" />
                <p className='cart-count-badge'>{getCartCount()}</p>
              </Link>
            </div>



            {token && showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 shadow-md rounded-md border z-20 transition-all duration-200">
                {/* <p onClick={() => { navigate('/orders'); setShowDropdown(false); }} className="dropdown-item">
                  Orders
                </p> */}
                <p onClick={() => { logout(); setShowDropdown(false); }} className="dropdown-item">
                  Logout
                </p>
              </div>
            )}
          </div>

          {/* <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="Cart" className="icon-hover w-10 h-10" />
            <p className='absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-2'>
              {getCartCount()}
            </p>
          </Link> */}

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
          <NavLink onClick={() => setVisible(false)} to='/'>The Ride Begins</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/collection'>Road Edition</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about'>The Code</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/roadstories'>Road Stories</NavLink>
          {!token ? (
            <NavLink
              onClick={() => setVisible(false)}
              to='/login'
              className="px-5 py-2 mt-2 bg-black text-white dark:bg-white dark:text-black rounded-lg shadow-md text-center font-semibold"
            >
              Your Garage
            </NavLink>
          ) : (
            <>
              <NavLink onClick={() => setVisible(false)} to='/orders'>Orders</NavLink>
              <p onClick={() => { logout(); setVisible(false); }} className="cursor-pointer">Logout</p>
            </>
          )}

        </div>
      )}
    </div>
  );
};

export default Navbar;
