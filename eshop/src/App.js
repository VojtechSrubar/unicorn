<<<<<<< HEAD
import './App.css';
import React, { useEffect, useState } from 'react';
import Product from './componets/Product';

const fetchData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
=======
import "./App.css";
import Button from "./componets/Button";
import Header from "./componets/Header";
>>>>>>> e481859de5c433e9bc21cad6e1ec8be219cf79c9

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(json => setData(json));
  }, []);

  return (
<<<<<<< HEAD
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map(product => (
          <div className="col" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
=======
    <>
      <Header />
      <Button>Button</Button>
    </>
>>>>>>> e481859de5c433e9bc21cad6e1ec8be219cf79c9
  );
}

export default App;
