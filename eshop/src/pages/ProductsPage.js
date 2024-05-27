import React from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/functions";

function ProductsPage() {
  
  const products = fetchProducts();
  console.log(products);

  return <div>ProductsPage</div>;
}

export default ProductsPage;
