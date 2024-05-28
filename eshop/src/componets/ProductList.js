import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "../componets/Product";
import { fetchProducts } from "../Functions";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Outlet />
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
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
};

export default ProductList;
