import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
import { CartProvider } from "./context/CartContext";
import Cart from "./componets/Cart";
import React from "react";
import SearchContext from './context/SearchContext';
import { useState } from "react";
/* import { fetchProducts } from "../utils/Functions"; */

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <main>
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
        </SearchContext.Provider>
      </main>
    </div>
  );
}

export default App;