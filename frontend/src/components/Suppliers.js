import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Suppliers = () => {
  const divStyle = {
    backgroundImage:
      'url("https://raw.githubusercontent.com/gar-git/images/main/21727022_6505894.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "50px",
  };

  const [Company_name, setCompany_name] = useState("");
  const [Supplier_name, setSupplier_name] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Admin_id, setAdmin_id] = useState("101"); // Default Admin ID
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Company_name,
      Supplier_name,
      Email,
      Phone,
      Address,
      Admin_id,
      Username,
      password,
    };

    try {
      const token = localStorage.getItem("token");
      console.log("token is", token);
      const response = await axios.post("http://localhost:3002/addSupplier", {
        headers: {
          Content_Type: "application/JSON",
          authorization: `Bearer ${token}`,
        },
        data,
      });

      if (response.data) {
        console.log("Supplier added successfully");
        toast.success("Supplier Added", { autoClose: 3000 });
        // Redirect to a success page
      } else {
        console.error("Error adding supplier");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={divStyle}
    >
      <div className="bg-white p-3 rounded w-75 border border-dark rounded p-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Register Supplier</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="comname" className="form-label">
                Enter Company Name
              </label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="form-control rounded-0"
                value={Company_name}
                onChange={(e) => setCompany_name(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="supname" className="form-label">
                Supplier Name
              </label>
              <input
                type="text"
                placeholder="Enter Supplier Name"
                className="form-control rounded-0"
                value={Supplier_name}
                onChange={(e) => setSupplier_name(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control rounded-0"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="Phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                placeholder="Enter Phone number"
                className="form-control rounded-0"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                className="form-control rounded-0"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Admin_ID" className="form-label">
                AdminID
              </label>
              <select
                className="form-control rounded-0"
                value={Admin_id}
                onChange={(e) => setAdmin_id(e.target.value)}
              >
                <option value="101">101</option>
                {/* Add more Admin IDs as options if needed */}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter UserName"
                className="form-control rounded-0"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="form-control rounded-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 mb-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Suppliers;
