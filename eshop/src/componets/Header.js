import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="home">
          <h2>Home</h2>
        </div>
        <div className="contacts">
          <h2>Contacts</h2>
        </div>
        <div className="products">
          <h2>Products</h2>
        </div>
      </div>
    </div>
  );
}
