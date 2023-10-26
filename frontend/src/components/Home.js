import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='btn-mm'>
      <h1>ADMIN LOGIN</h1>
      <div className='btn'>
        <button className='btn-m'>Product</button>
        <button className='btn-m'>Supplier</button>
        <button className='btn-m'>Order</button>
        <button className='btn-m'>Customer</button>
      </div>
    </div>
  )
}

export default Home;