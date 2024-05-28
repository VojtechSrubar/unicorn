import React, { createContext, useState } from 'react';

const CartContext = createContext({
  items: [], // Pole pro uložení položek v košíku
  totalQuantity: 0, // Celkový počet položek v košíku
  totalPrice: 0, // Celková cena položek v košíku
  addItem: (item, quantity) => {}, // Funkce pro přidání položky do košíku
  removeItem: (itemId) => {}, // Funkce pro odebrání položky z košíku
  updateItemQuantity: (itemId, quantity) => {}, // Funkce pro aktualizaci počtu kusů položky
  clearCart: () => {}, // Funkce pro vyprázdnění košíku
});

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (newItem, quantity) => {
    console.log("Adding item:", newItem, "quantity:", quantity);
    const existingItem = items.find((x) => x.id === newItem.id);

    if (existingItem) {
      const updatedItems = items.map((x) =>
        x.id === newItem.id ? { ...x, quantity: x.quantity + quantity } : x
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { ...newItem, quantity }]);
    }
    console.log(items);

    calculateTotalQuantityAndPrice(); // Recalculate total after adding
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    calculateTotalQuantityAndPrice(); // Recalculate total after removing
  };

  const updateItemQuantity = (itemId, quantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setItems(updatedItems);
    calculateTotalQuantityAndPrice(); // Recalculate total after updating
  };

  const clearCart = () => {
    setItems([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  const calculateTotalQuantityAndPrice = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    items.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    });

    setTotalQuantity(totalQuantity);
    setTotalPrice(totalPrice);
  };

  const value = {
    items,
    totalQuantity,
    totalPrice,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
