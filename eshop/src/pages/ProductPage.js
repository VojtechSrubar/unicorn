import React from "react";
import Product from "../componets/Product";
import { fetchProduct } from "../Functions";

function ProductPage(id) {
  /* Potřebujem useContext, doděláme zítra */
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Product
             /* id={product.id}  */
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
