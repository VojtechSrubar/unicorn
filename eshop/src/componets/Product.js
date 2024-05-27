import React from 'react';
import Button from './Button';
import './Product.css';

const Product = ({ image, title, description, price }) => {
  const truncatedDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;

  return (
    <div className="product-card">
      <img src={image} className="product-image" alt={title} />
      <div className="product-info">
        <h5 className="product-title">{title}</h5>
        <p className="product-description">{truncatedDescription}</p>
        <p className="product-price">${price}</p>
        <Button />
      </div>
    </div>
  );
};

export default Product;