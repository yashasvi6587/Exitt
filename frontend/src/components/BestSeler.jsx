import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import '../Styles/BestSeler.css'

const BestSeler = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 md:px-20 transition-colors duration-300">
      {/* Title Section */}
      <div className="text-center mb-10 space-y-3">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Our hottest picks just for you. Discover top-selling gems that define the season's style.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="group bg-black dark:bg-zinc-900 text-white border border-gray-200 dark:border-zinc-700 p-3 rounded-xl shadow-md hover:shadow-glow transition-transform duration-300 transform hover:-translate-y-2"
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestSeler
