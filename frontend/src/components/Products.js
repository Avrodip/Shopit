import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import "./style.css";

const Products = () => {
  const divStyle = {
    backgroundImage:
      'url("https://raw.githubusercontent.com/gar-git/images/main/21727022_6505894.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "50px",
  };

  const [Product_name, setProduct_name] = useState("");
  const [Description, setDescription] = useState("");
  const [Supplier_price, setSupplier_price] = useState("");
  const [Sell_price, setSell_price] = useState("");
  const [Product_category, setProduct_category] = useState("T-shirt");
  const [Supplier_id, setSupplier_id] = useState("501");
  const [Admin_id, setAdmin_id] = useState("101");
  const [imglink1, setimglink1] = useState("");
  const [imglink2, setimglink2] = useState("");

  const navigate = useNavigate();





  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const productData = {
      Product_name,
      Description,
      Supplier_price,
      Sell_price,
      Product_category,
      Supplier_id,
      Admin_id,
      imglink1,
      imglink2,
    };
  
    try {
      const token = localStorage.getItem("token"); // Retrieve the JWT token from storage
      console.log("token is", token);
      const response = await axios.post("http://localhost:3002/addProducts", {
        headers: {
          Content_Type: "application/JSON",
          authorization: `Bearer ${token}`,
        },
        productData,
      });
  
      if (response.data) {
        console.log("Product added successfully");
        toast.success("Product Added", { autoClose: 3000 });
        // Redirect to a success page
      } else {
        console.error("Error adding Product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };






  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={divStyle}>
      <div className="bg-white p-3 rounded w-75 border border-dark rounded p-4">
        <form onSubmit={handleSubmit}>
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
                value={Product_name}
                onChange={(e) => setProduct_name(e.target.value)}
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
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Supplier_price" className="form-label">
                Supplier Price
              </label>
              <input
                type="number"
                placeholder="Enter Supplier Price"
                className="form-control rounded-0"
                value={Supplier_price}
                onChange={(e) => setSupplier_price(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="Sell_price" className="form-label">
                Sell Price
              </label>
              <input
                type="number"
                placeholder="Enter Seller Price"
                className="form-control rounded-0"
                value={Sell_price}
                onChange={(e) => setSell_price(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="category" className="form-label">
                Product Category
              </label>
              <select
                className="form-control rounded-0"
                value={Product_category}
                onChange={(e) => setProduct_category(e.target.value)}
              >
                <option value="tshirt">T-shirt</option>
                <option value="shoes">Shoes</option>
                <option value="bag">Bagpack</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="supplier" className="form-label">
                Supplier ID
              </label>
              <select
                className="form-control rounded-0"
                value={Supplier_id}
                onChange={(e) => setSupplier_id(e.target.value)}
              >
                <option value="501">501</option>
                <option value="502">502</option>
                <option value="503">503</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="admin" className="form-label">
                AdminID
              </label>
              <select
                className="form-control rounded-0"
                value={Admin_id}
                onChange={(e) => setAdmin_id(e.target.value)}
              >
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="img1" className="form-label">
              Image 1 link
            </label>
            <input
              type="text"
              placeholder="Enter Image link"
              className="form-control rounded-0"
              value={imglink1}
              onChange={(e) => setimglink1(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img2" className="form-label">
              Image 2 link
            </label>
            <input
              type="text"
              placeholder="Enter Image link"
              className="form-control rounded-0"
              value={imglink2}
              onChange={(e) => setimglink2(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mb-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;