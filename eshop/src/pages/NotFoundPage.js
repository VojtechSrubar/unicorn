import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <p>Page not found</p>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default NotFoundPage