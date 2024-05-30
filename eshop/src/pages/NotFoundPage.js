import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center mt-5">
      <h1>404 Page not found</h1>
      <p>The page you requested was not found</p>
      <Link className="btn btn-primary" to="/">
        Continue shopping
      </Link>
    </div>
  );
}

export default NotFoundPage;
