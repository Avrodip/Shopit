import React, { useState } from "react";
import "./bg.css";

const Signup = () => {
  const [role, setRole] = useState("user");
  const [showAdminFields, setShowAdminFields] = useState(false);

  const divStyle = {
    backgroundImage:
      'url("https://raw.githubusercontent.com/gar-git/images/main/21727022_6505894.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);

    if (e.target.value === "admin") {
      setShowAdminFields(true);
    } else {
      setShowAdminFields(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={divStyle}>
      <div className="bg-white p-3 rounded w-75 border border-dark rounded p-4">
        <form>
          <h2 className="text-center mb-4">Register</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control rounded-0"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control rounded-0"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                className="form-control rounded-0"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Phone number"
                className="form-control rounded-0"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              className="form-control rounded-0"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          {showAdminFields && (
            <div>
              <div className="mb-3">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  placeholder="Enter Position"
                  className="form-control rounded-0"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="hireDate" className="form-label">
                  Hire Date
                </label>
                <input
                  type="date"
                  className="form-control rounded-0"
                />
              </div>
            </div>
          )}
          <button className="btn btn-success w-100 mb-2">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
