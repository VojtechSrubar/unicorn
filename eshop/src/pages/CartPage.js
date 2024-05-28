import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Assuming CartContext is in a sibling folder

const CartPage = () => {
  const { items } = useContext(CartContext);

  console.log (items);
  return (
    <div>
      {items.length > 0 ? (
        <div>
          <h2>Your Cart Items</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          {/* Add buttons or options for checkout etc. */}
        </div>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default CartPage;
