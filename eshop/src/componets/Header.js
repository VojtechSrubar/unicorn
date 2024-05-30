import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "./SearchBar";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="brand-name">
          <Link to="/">
            <h1>
              BICORN
            </h1>
          </Link>
        </div>
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
          <Link to="/products">
            <SearchBar />
          </Link>
        </div>
        <div className="shopping-cart">
          <Link to="/cart">
            <h5>
              <ShoppingCartIcon />({totalQuantity})
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
