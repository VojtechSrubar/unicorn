import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
import { CartProvider } from "./context/CartContext";
import Cart from "./componets/Cart";
import React from "react";
/* import { fetchProducts } from "../utils/Functions"; */

function App() {
  return (
    <div className="App">
      <main>
        <CartProvider>
          <Outlet />
        </CartProvider>
      </main>
    </div>
  );
}

export default App;