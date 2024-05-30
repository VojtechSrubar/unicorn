import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="text-center">
      <h1>404 Page Not Found</h1>
      <p>The page you requested was not found</p>
      <Link className="btn btn-primary tlacitko" to="/">
        Continue Shopping
        <img src={arrow} alt="arrow" className="arrow-icon" />
      </Link>
    </div>
  );
}

export default NotFoundPage;
