import React from "react";
import { useNavigate } from "react-router-dom";
function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div
        className="  bg-white p-3  rounded w-35 border border-dark rounded justify-content-center align-items-center p-4"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <img src="https://github.com/gar-git/images/blob/main/Screenshot_2023-11-02_185431-removebg-preview.png?raw=true"></img>
        <h1>OOPS!! The cart is empty</h1>
        <button
          style={{ justifyContent: "center", alignItems: "center" }}
          className="btn btn-secondary"
          onClick={() => {
            navigate("/displayproduct");
          }}
        >
          ← Return to home
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
