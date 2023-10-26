import React from 'react';

import './Home.css';
import { Link, Navigate } from 'react-router-dom';
const Home = ({ loggedIn }) => {
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className='btn-mm'>
      <h1>ADMIN LOGIN</h1>
      <div className='btn'>
        <Link to="/products" className='btn-m'>Product</Link>
        <Link to="/suppliers" className='btn-m'>Supplier</Link>
        <Link to="/orderconfirm" className='btn-m'>Order</Link> {/* Link to "orderconfirm" route */}
        <Link to="/customers" className='btn-m'>Customer</Link>
      </div>
    </div>
  );
}

export default Home;

