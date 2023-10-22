import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLoggedIn={loggedIn} />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
