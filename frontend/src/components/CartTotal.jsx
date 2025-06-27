import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import '../Styles/CartTotal.css'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)
    const subtotal = getCartAmount()
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee

    return (
        <div className="cart-total-container">
            <Title text1={'CART'} text2={'TOTALS'} />
            <div className="cart-total-section">
                <p>SubTotal</p>
                <p>{currency}{subtotal}.00</p>
            </div>
            <hr className="cart-total-divider" />
            <div className="cart-total-section">
                <p>Shipping Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr className="cart-total-divider" />
            <div className="cart-total-section total">
                <b>Total</b>
                <b>{currency}{total}.00</b>
            </div>
        </div>
    )
}

export default CartTotal
