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

  const [productName, setProductName] = useState("user");
  const [prodDesc, setProdDesc] = useState("");
  const [supPrice, setSupPrice] = useState("");
  const [selPrice, setSelPrice] = useState("");
  const [cat, setCat] = useState("");
  const [adminID, setAdminID] = useState("");
  const [supID, setSupID] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can submit the form data or perform other actions here
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={divStyle}
    >
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
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
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
                value={prodDesc}
                onChange={(e) => setProdDesc(e.target.value)}
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
                value={supPrice}
                onChange={(e) => setSupPrice(e.target.value)}
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
                value={selPrice}
                onChange={(e) => setSelPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Product Category
              </label>
              <select
                className="form-control rounded-0"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                <option value="tshirt">T-shirt</option>
                <option value="shoes">Shoes</option>
                <option value="bag">Bagpack</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="admin" className="form-label">
                AdminID
              </label>
              <select
                className="form-control rounded-0"
                value={adminID}
                onChange={(e) => setAdminID(e.target.value)}
              >
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="supplier" className="form-label">
                Supplier ID
              </label>
              <select
                className="form-control rounded-0"
                value={supID}
                onChange={(e) => setSupID(e.target.value)}
              >
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
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img2" className="form-label">
              Image 2 link
            </label>
            <input
              type="text"
              placeholder="Enter Image 2 link"
              className="form-control rounded-0"
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
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
