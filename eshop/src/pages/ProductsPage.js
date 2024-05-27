import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../componets/Header";
import Product from "../componets/Product";

import { fetchProducts } from "./Functions";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div className="col">
                <Product {...product} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
