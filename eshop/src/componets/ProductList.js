import React, { useContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "./Product";
import { fetchProducts } from "../Functions";
import SearchContext from "../context/SearchContext";

const ProductList = () => {
  const { searchTerm } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <>
      <Outlet />
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
