import React from "react";
import Product from "../componets/Product";
import { fetchProduct } from "../Functions";

import "./ProductPage.css";

function ProductPage() {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

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

          <button>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
