import React from "react";
import Button from "./Button";
import "./Product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductPage from "../pages/ProductPage";
import { useState } from "react";

const Product = ({ id, image, title, description, price, onAddToCart }) => {

  
  const { product_id} = useContext(CartContext);
  const { setProduct_id } = useContext(CartContext);

  const truncatedDescription = description && description.length > 100
    ? `${description.substring(0, 100)}...`
    : description;


    const { addItem } = useContext(CartContext);

    const handleProductClick = () => {
      addItem({ id, image, title, price }, 1); // Call addItem directly
    };


    console.log({ id, image, title, description, price });

  return (
    <>
    <div className="product-card">
    <Link key={id} to={`/products/${id}`} onClick={
      () => {
        setProduct_id(id);
        console.log(product_id);
      }
      
      }>
      <img src={image} className="product-image" alt={title} />
      <div className="product-info">
        <h5 className="product-title">{title}</h5>
        <p className="product-description">
          {truncatedDescription ? (
            truncatedDescription
              .replace(/\//g, " / ") // Replace forward slashes with space-slash
              .replace(/,/g, ", ") // Replace commas with space-comma
          ) : (
            'No description available'
          )}
          {truncatedDescription || "No description available"}
        </p>
        <p className="product-price">${price}</p>
      </div>
    </Link>
    <div onClick={handleProductClick}>
      <Button />
    </div>
  </div>
    </>
    
  );
};

export default Product;
