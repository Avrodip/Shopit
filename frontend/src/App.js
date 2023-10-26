import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Test from "./components/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Suppliers from "./components/Suppliers";
import Orderconfirmation from "./components/Orderconfirmation";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
     <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/jwt" element={<Test />} />
          <Route path="/orderconfirm" element={<Orderconfirmation />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
