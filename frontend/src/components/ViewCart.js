import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ViewCart = (props) => {
  const [userId, setUserId] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const { userID } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/viewCart`, {
        params: {
          user_id: parseInt(userID),
        },
      });
      console.log(response.data.data[0][0]);

      const data = await response.data.data[0];

      setItems(data);
      if (response.data.data[0][0] == null) {
        console.log("Empty Cart");
        navigate("/emptyCart");
      }
      console.log("itemsdata", items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="  bg-white p-3  rounded w-35 border border-dark rounded p-4">
        <div>
          {items.map((item) => (
            <div key={item.User_id}>
              <p>User Name: {item.First_name}</p>
              <p>Product Name: {item.Product_name}</p>
              <p>Quantity: {item.Quantity}</p>
              <img
                src={item.imglink1}
                alt="Product"
                style={{
                  width: "100px",
                  borderRadius: "50%",
                  borderColor: "#385a64",
                }}
              />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
