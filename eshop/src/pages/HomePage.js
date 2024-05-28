import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "../componets/Product";
import { fetchProducts } from "../Functions";
import "../componets/HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchProducts(5).then((json) => setProducts(json));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">WELCOME TO THE UNICORN STORE</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="text-center">Featured Products</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="carousel">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`carousel-item ${
                      index === currentIndex
                        ? "active"
                        : index < currentIndex
                        ? "prev"
                        : "next"
                    }`}
                  >
                    <Link to={`/products/${product.id}`}>
                      <Product {...product} />
                    </Link>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                onClick={handlePrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
                onClick={handleNext}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
