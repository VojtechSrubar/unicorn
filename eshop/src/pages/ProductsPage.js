import React from "react";
import Header from "../componets/Header";
import ProductList from "../componets/ProductList";
import { CartProvider } from "../context/CartContext";

function ProductsPage() {
  return (
    <>
      <CartProvider>
        <ProductList />
      </CartProvider>
  
    </>
  );
}

export default ProductsPage;
