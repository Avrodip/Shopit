import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLoggedIn, setLogindet }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      username: values.username,
      password: values.password,
      role: values.role,
    };

    try {
      console.log(values.username);
      console.log(values.password);
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem("token", token);

        toast.success("Login successful", { autoClose: 3000 });
        setLoggedIn(true);

       
        setLogindet({
          username: values.username,
          password: values.password,
        });

        if (values.role === "admin") {
          navigate("/home"); 
        } else {
          navigate("/displayproduct"); 
        }
      } else if (response.status === 401) {
        toast.error("Invalid credentials", { autoClose: 3000 });
      } else {
        toast.error("Server error", { autoClose: 3000 });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred", { autoClose: 3000 });
    }
  };

  const handleButtonClickLogin = () => {
    navigate("/create");
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 border w-100" id="main">
      <div className="bg-white p-3 rounded w-25 border border-dark rounded p-4">
        <form action="" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Log In</h2>
          <div className="mb-3">
            <label htmlFor="username" className="row form-label">
              username
            </label>
            <input
              type="username"
              placeholder="Enter username"
              onChange={handleInput}
              className="form-control rounded-0" 
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="row form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handleInput}
              className="form-control rounded-0"
              name="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="row form-label">
              Role
            </label>
            <select
              className="form-control rounded-0"
              name="role"
              value={values.role}
              onChange={handleInput}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button className="btn btn-success w-100 mb-2" type="submit">
            Log in
          </button>
          <button
            className="btn btn-default border w-100 bg-light"
            onClick={handleButtonClickLogin}
          >
            Create Account
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
