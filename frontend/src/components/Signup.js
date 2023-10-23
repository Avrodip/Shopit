import React from "react";
import "./bg.css";
const Signup = () => {
  const divStyle = {
    BackgroundImage:
      'url("/https://raw.githubusercontent.com/gar-git/images/main/21727022_6505894.jpg")', // Replace with the path to your image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center  vh-100"
      style={divStyle}
    >
      <div className="bg-white p-3 rounded w-25 border border-dark rounded p-4">
        <form>
          <h2 className="text-center mb-4">Register</h2>
          <div className="mb-3 text-left">
            <label htmlFor="name" className=" row form-label  text-left">
              Name
            </label>
            <input
              type="name"
              placeholder="Enter Name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3 te">
            <label htmlFor="email" className=" row form-label ">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="row form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100 mb-2">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
