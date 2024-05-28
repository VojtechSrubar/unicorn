import React from "react";
import Button from "./Button";
import "./Product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ id, image, title, description, price, onAddToCart }) => {
  const truncatedDescription = description && description.length > 100
    ? `${description.substring(0, 100)}...`
    : description;


    const { addItem } = useContext(CartContext);

    const handleProductClick = () => {
      addItem({ id, image, title, price }, 1); // Call addItem directly
    };

  return (
      <div className="product-card">
        <img src={image} className="product-image" alt={title} />
        <div className="product-info">
          <h5 className="product-title">{title}</h5>
          <p className="product-description">
            {truncatedDescription || "No description available"}
          </p>
          <p className="product-price">${price}</p>
          <div onClick={handleProductClick}>
            <Button />
          </div>
        </div>
      </div>
  );
};

export default Product;
