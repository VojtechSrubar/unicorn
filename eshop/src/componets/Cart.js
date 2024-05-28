import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Assuming CartContext is in a sibling folder

const CartPage = () => {
  const { items } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { totalPrice } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { updateItemQuantity } = useContext(CartContext);

  console.log(items);
  return (
    <div>
      {items.length > 0 ? (
        <div>
          <h2>Your Cart Items</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                <button type="button" className="btn btn-primary" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <button type="button" className="btn btn-primary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <div>Total value:{totalPrice}</div>
          <button type="button" className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
          {/* Add buttons or options for checkout etc. */}
        </div>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default CartPage;
