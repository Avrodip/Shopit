import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='btn-mm'>
      <h1>ADMIN LOGIN</h1>
      <div className='btn'>
        <Link to="/product">
          <button className='btn-m'>Product</button>
        </Link>
        <Link to="/Suppliers">
          <button className='btn-m'>Supplier</button>
        </Link>
        <Link to="/order">
          <button className='btn-m'>Order</button>
        </Link>
        <Link to="/customer">
          <button className='btn-m'>Customer</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
