import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "../componets/Product";
import { fetchProducts } from "../Functions";

const ProductList = () => {
  const [products, setProducts] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    fetchProducts().then((json) => setProducts(json));
  }, []);

=======
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

>>>>>>> kosik
  return (
    <>
      <Outlet />
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
          {products.map((product) => (
<<<<<<< HEAD
            <Link key={product.id} to={`/products/${product.id}`}>
              <div className="col">
                <Product {...product} />
              </div>
            </Link>
=======
            <div className="col" key={product.id}>
              <Product {...product} />
            </div>
>>>>>>> kosik
          ))}
        </div>
      </div>
    </>
  );
};
<<<<<<< HEAD
=======

>>>>>>> kosik

export default ProductList;
