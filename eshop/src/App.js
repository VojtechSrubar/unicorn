import './App.css';

import React, { useEffect, useState } from 'react';

import Product from './componets/Product';
import Button from "./componets/Button";
import Header from "./componets/Header";
import { fetchProducts } from './utils/functions';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts().then(json => setData(json));
  }, []);

  return (
    <>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map(product => (
          <div className="col" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
      <Header />
      <Button>Button</Button>
    </>
  );
}

export default App;
