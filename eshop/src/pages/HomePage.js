import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import hand_icon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import Product from "../componets/Product";

const HomePage = () => {
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
  }

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hand-hand-icon">
          <img src={hand_icon} alt="hand" />
          <p>New</p>
          <p>Products</p>
        </div>
        <Link to="/products" className="hero-latest">
          Latest Arrivals
          <img className="arrow" src={arrow} alt="arrow" />
        </Link>
      </div>
      <Link>
        <Product {...product} />
      </Link>
    </div>
  );
};

export default HomePage;
