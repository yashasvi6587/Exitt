import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)
  return (
    <Link
      to={`/product/${id}`}
      className="block p-4 border rounded-lg hover:shadow-lg transition-all"
    >
      <div>
        <img src={image[0]} alt={name} className="w-full h-auto object-cover" />
      </div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-white">{currency} {price}</p>
    </Link>

  )
}

export default ProductItem
