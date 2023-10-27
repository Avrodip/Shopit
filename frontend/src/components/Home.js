import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Home = ({ loggedIn,logindet }) => {
 

  useEffect(()=>{
    console.log("This will be printed",logindet.username)
      }, [])

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  if (logindet.username === "rahul_34" && logindet.password === "rahul@123") {
    console.log("Hello rahul")
    return <Navigate to="/confirmedorders" />;
  }

  

  return (
    <div className='btn-mm'>
      <h1>ADMIN LOGIN</h1>
      <div className='btn'>
        <Link to="/products" className='btn-m'>Product</Link>
        <Link to="/suppliers" className='btn-m'>Supplier</Link>
        <Link to="/orderconfirm" className='btn-m'>Order</Link> 
        <Link to="/customers" className='btn-m'>Customer</Link>
      </div>
    </div>
  );
}

export default Home;
