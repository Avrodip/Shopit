import React from "react";
import { useNavigate } from "react-router-dom";
function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex vh-100"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div className="  bg-white p-3  rounded w-35 border border-dark rounded p-4">
        <h1>OOPS!! The cart is empty</h1>
        <button
          style={{ justifyContent: "center", alignItems: "center" }}
          className="btn btn-secondary"
          onClick={() => {
            navigate("/displayproduct");
          }}
        >
          Return to home
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
