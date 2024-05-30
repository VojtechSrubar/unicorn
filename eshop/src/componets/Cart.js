import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { items, removeItem, totalPrice, clearCart, updateItemQuantity } =
    useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateItemQuantity(itemId, newQuantity);
  };

  return (
    <>
      {items.length > 0 ? (
        <div className="small-container cart-page">
          <table>
            <tr className="cart-header">
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>

            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="cart-info">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <p>{item.title}</p>
                      <small>$ {item.price}</small>
                      <br />
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </table>
          <div className="total-price">
            <table>
              <tr>
                <td>Total</td>
                <td>$ {totalPrice.toFixed(2)}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </>
  );
};

export default Cart;
