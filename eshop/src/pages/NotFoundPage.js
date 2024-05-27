import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container text-center mt-5">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="btn btn-danger" to="/">
        Go back
      </Link>
    </div>
  );
}

export default NotFoundPage;
