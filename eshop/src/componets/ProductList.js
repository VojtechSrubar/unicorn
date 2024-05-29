import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "../componets/Product";
import { fetchProducts } from "../Functions";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchProducts()
      .then((json) => {
        setProducts(json);
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Set loading to false even on error
      });
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <>
      <Outlet />
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
          {products.map((product) => (
              <div className="col">
                <Product {...product} />
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
