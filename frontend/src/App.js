import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Suppliers from "./components/Suppliers";
import Orderconfirmation from "./components/Orderconfirmation";
import Display from "./components/Display";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [logindet, setLogindet] = useState({ username: "", password: "" });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setLoggedIn={setLoggedIn}
                logindet={logindet}
                setLogindet={setLogindet}
              />
            }
          />
          <Route path="/create" element={<Signup loggedIn={loggedIn} />} />
          <Route path="/home" element={<Home loggedIn={loggedIn} />} />
          <Route path="/products" element={<Products loggedIn={loggedIn} />} />
          <Route path="/orderconfirm" element={<Orderconfirmation loggedIn={loggedIn} logindet={logindet}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
