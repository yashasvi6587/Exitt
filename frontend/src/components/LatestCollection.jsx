import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import '../Styles/LatestCollection.css'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProduct, setLatestProduct] = useState([])

  useEffect(() => {
    setLatestProduct(products.slice(0, 10))
  }, [products])

  return (
    <div className="bg-white dark:bg-black text-white dark:text-white py-16 px-4 md:px-20 transition-colors duration-300">
      {/* Title Section */}
      <div className="text-center mb-12 space-y-4">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Discover the freshest drops in our lineup. Elegance meets style with modern transitions and glowing charm.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestProduct.map((item, index) => (
          <div
            key={index}
            className="group rounded-xl p-2 text-white md:p-3 border border-gray-200 dark:border-zinc-800 bg-black dark:bg-white shadow-md hover:shadow-glow transform transition-all duration-300 hover:-translate-y-2"
          >
            <ProductItem className="text-white"
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

export default LatestCollection
