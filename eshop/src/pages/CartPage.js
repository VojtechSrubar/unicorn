import React from 'react'
import { CartContext, CartProvider } from '../context/CartContext';
import Cart from '../componets/Cart';

const CartPage = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  )
}

export default CartPage