import React from 'react'
import { Routes, Route, Navigate } from 'react-router';
import ProductDetail from '../pages/ProductDetail';
// import Footer from './Footer';
import Home2 from '../pages/Home2';
import Login from '../pages/Login';
import Homepage from '../pages/Home';

const Myroute = () => {
  return (
    <div>
      <div className="pages">
        <Routes>
          <Route path="/home2" element={<Home2 />} />
          <Route path='/' element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Myroute;
