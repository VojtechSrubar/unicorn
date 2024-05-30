import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Assuming CartContext is in a sibling folder
import "./Cart.css";

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
          <h1>Your Cart Items</h1>
          <ul className="cart-items-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.title}
                  </span>
                  - Quantity: {item.quantity} - Price: $
                  {(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="item-actions">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="cart-totals"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            <span>Total value:</span> ${totalPrice.toFixed(2)}
          </div>
          <button type="button" className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
          {/* Add buttons or options for checkout etc. */}
        </div>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};

export default CartPage;
