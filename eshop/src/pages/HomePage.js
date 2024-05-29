import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import hand_icon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hand-hand-icon">
          <img src={hand_icon} alt="hand" />
          <p>new</p>
          <p>products</p>
        </div>
        <Link to="/products" className="hero-latest">
          Latest arrivals
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
      <div className="hero-right">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      </div>
    </div>
  );
};

export default HomePage;
