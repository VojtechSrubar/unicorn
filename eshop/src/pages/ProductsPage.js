import React from 'react'
import { Link } from 'react-router-dom'

function ProductsPage() {/*
  fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>console.log(json)) */

  /* const getProducts = async () => {
    const products = await Promise.all(
      [
        fetch('https://fakestoreapi.com/products').then(res=>res.json()),
        fetch('https://fakestoreapi.com/products').then(res=>res.json())
      ]
    )
    console.log(products)
  } */

  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage