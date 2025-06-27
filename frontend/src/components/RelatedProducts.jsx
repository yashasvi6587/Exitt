import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice()
      productsCopy = productsCopy.filter((item) => category === item.category)
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
      setRelated(productsCopy.slice(0, 5))
    }
  }, [products, category, subCategory])

  return (
    <div className="bg-neutral-100 text-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <Title text1="RELATED" text2="PRODUCTS" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          {related.map((item, index) => (
            <div  key={index}
              className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-all duration-300 shadow hover:shadow-lg border border-neutral-700 hover:border-white">
              <ProductItem
                id={item._id}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
