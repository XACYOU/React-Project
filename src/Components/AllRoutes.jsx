import React from 'react'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

import { Routes, Route } from 'react-router-dom'
import ProductListing from '../Pages/ProductListing'
import ProductDetails from '../Pages/ProductDetails'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="products" element={<ProductListing />} />
      <Route path="products/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default AllRoutes
