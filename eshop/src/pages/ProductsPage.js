import React from "react";
import Header from "../componets/Header";
import ProductList from "../componets/ProductList";
import { CartProvider } from "../context/CartContext";
import CartPage from "./CartPage";
import Cart from "../componets/Cart";

function ProductsPage() {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductList />
        <Cart />
      </CartProvider>
  
    </>
  );
}

export default ProductsPage;
