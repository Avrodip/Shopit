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
import Confirmorder from "./components/Confirmedorder";
import Display from "./components/Display";
import ViewCart from "./components/ViewCart";

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
          <Route path="/home" element={<Home loggedIn={loggedIn} logindet={logindet} />} />
          <Route path="/products" element={<Products loggedIn={loggedIn} />} />
          <Route path="/orderconfirm" element={<Orderconfirmation loggedIn={loggedIn} logindet={logindet}/>} />
          <Route path="/confirmedorders" element={<Confirmorder loggedIn={loggedIn} logindet={logindet}/>} />
          <Route path="/displayproduct" element={<Display />}></Route>
          <Route path="/suppliers" element={<Suppliers />}></Route>
          <Route path="/addshipment/:ordersId" element={<AddShipment logindet={logindet}/>} />
          <Route path="/displayproduct" element={<Display logindet={logindet} />}/>
          <Route path="/suppliers" element={<Suppliers />}></Route>
         <Route path="/viewCart/:userID" element={<ViewCart logindet={logindet} />}/>
            <Route path="/emptyCart" element={<EmptyCart />}></Route>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
