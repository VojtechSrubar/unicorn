import React from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/functions";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
