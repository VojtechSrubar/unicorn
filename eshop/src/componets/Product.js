import React from "react";
import Button from "./Button";
import { fetchProduct } from "../Functions";
import "./Product.css";

const Product = ({ id, image, title, description, price }) => {
  const truncatedDescription = description && description.length > 100
    ? `${description.substring(0, 300)}...`
    : description;

  return (
    <div onClick={() => fetchProduct(id)}>
      <div className="product-card">
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
          </p>
          <p className="product-price">${price}</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
