import React from "react";
import Product from "../componets/Product";
import { fetchProduct } from "../Functions";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState, useEffect } from "react";

import "./ProductPage.css";

function ProductPage() {
  
  const { product_id} = useContext(CartContext);
  const { setProduct_id } = useContext(CartContext);



  console.log(product_id);


  const [product, setProduct] = useState([]);

  
  
  useEffect(() => {
    fetchProduct(product_id)
      .then((json) => {
        setProduct(json);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [product_id]);


  console.log(product);



  





  console.log(product)
  return (
    <section>
    <div className="container flex">
      <div className="left">
        <div className="main_image">
          <img src={product.image} className="slide" alt={product.id} />
        </div>
      </div>
      <div className="right">
        <h3>{product.title}</h3>
        <h4> ${product.price} </h4>
        <p>{product.description} </p>
        <h5>Number</h5>
        <div className="add flex1">
          <span>-</span>
          <label>1</label>
          <span>+</span>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </section>
  );
}

export default ProductPage;
