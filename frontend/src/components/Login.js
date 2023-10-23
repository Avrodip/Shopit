import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: "user", // Set the default role to "user"
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the selected role using values.role
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
      <div className="bg-white p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Log In</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={handleInput}
              className="form-control rounded-0"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
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
            <label htmlFor="role" className="form-label">
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
              <option value="supplier">Supplier</option>
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
    </div>
  );
};

export default Login;
