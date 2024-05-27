import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const params = useParams();

  return (
    <div>
      <h1>Product {params.productId}</h1>
    </div>
  )
}

export default ProductPage