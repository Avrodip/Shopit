import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Home.css';

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
        <Link to="/products">
          <button className='btn-m'>Product</button>
        </Link>
        <Link to="/Suppliers">
          <button className='btn-m'>Supplier</button>
        </Link>
        <Link to="/orderconfirm">
          <button className='btn-m'>Order</button>
        </Link>
        <Link to="/customers">
          <button className='btn-m'>Customer</button>
        </Link>
      </div>
    </div>
  )
}


export default Home;
