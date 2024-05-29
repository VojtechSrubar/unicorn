import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="header">
      {/* <div className="logo">
        <Link to="/">
          <img
            src="../assets/img/logo.jpg"
            alt="logo"
          />
        </Link>
      </div> */}
      <div className="brand-name">
        <Link to="/">
          <h1>UNICORN</h1>
        </Link>
      </div>
      <div className="navbar">
        <div className="nav-item">
          <Link to="/">
            <h5>Home</h5>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/products">
            <h5>Products</h5>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/contact">
            <h5>Contact</h5>
          </Link>
        </div>
        <div>
        <h5>
          <SearchBar />
        </h5>
        </div>
        <div className="shopping-cart">
          <Link to="/cart">
            <h5>
              <ShoppingCartIcon />
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
