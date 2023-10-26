import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Products = () => {
  const divStyle = {
    backgroundImage:
      'url("https://raw.githubusercontent.com/gar-git/images/main/21727022_6505894.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "50px",
  };
  const [role, setRole] = useState("user");
  const [showAdminFields, setShowAdminFields] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [hireDate, setHireDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={divStyle}
    >
      <div className="bg-white p-3 rounded w-75 border border-dark rounded p-4">
        <form>
          <h2 className="text-center mb-4">Register Products</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="pname" className="form-label">
                Enter Product Name
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="form-control rounded-0"
                value={firstName}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="desc" className="form-label">
                Product Description
              </label>
              <input
                type="text"
                placeholder="Enter Product Description"
                className="form-control rounded-0"
                value={lastName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="SupPrice" className="form-label">
                Supplier Price
              </label>
              <input
                type="text"
                placeholder="Enter Supplier Price"
                className="form-control rounded-0"
                value={address}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="SelPrice" className="form-label">
                Seller Price
              </label>
              <input
                type="text"
                placeholder="Enter Seller Price"
                className="form-control rounded-0"
                value={phoneNumber}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Product Category
              </label>
              <select className="form-control rounded-0" value={role}>
                <option value="tshirt">T-shirt</option>
                <option value="shoes">Shoes</option>
                <option value="bag">Bagpack</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="admin" className="form-label">
                AdminID
              </label>
              <select className="form-control rounded-0" value={role}>
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="supplier" className="form-label">
                Supplier ID
              </label>
              <select className="form-control rounded-0" value={role}>
                <option value="501">501</option>
                <option value="502">502</option>
                <option value="503">503</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="img1" className="form-label">
              Image 1 link
            </label>
            <input
              type="text"
              placeholder="Enter Image 1 link"
              className="form-control rounded-0"
              value={username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img2" className="form-label">
              Image 2 link
            </label>
            <input
              type="password"
              placeholder="Enter Image 2 link"
              className="form-control rounded-0"
              value={password}
            />
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
                  value={position}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="hireDate" className="form-label">
                  Hire Date
                </label>
                <input
                  type="date"
                  className="form-control rounded-0"
                  value={hireDate}
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

export default Products;
