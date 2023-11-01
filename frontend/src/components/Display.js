import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Display = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [userID, setUserID] = useState(0);
  const uname = props.logindet.username;

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await axios.get("http://localhost:3002/products");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    async function fetchID() {
      try {
        console.log("user name is: ", uname);
        const response = await axios.get(`http://localhost:3002/users`, {
          params: {
            Username: uname,
          },
        });
        setUserID(response.data[0].User_id);
        console.log(response.data[0].User_id);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
    fetchID();
  }, []);

  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          navigate(`/viewCart/${userID}`);
        }}
        style={{ background: "#385a64", marginTop: "10px" }}
      >
        View Cart items
      </button>
      <div
        className="items"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          marginTop: "90px",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <div
            key={item.Product_id}
            className="item"
            style={{ padding: "10px" }}
          >
            <img
              src={item.imglink1}
              className="img-fluid"
              alt="image unavailable"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
            <h4>{item.Product_name}</h4>
            <p>{item.Description}</p>
            <span>Rs.{item.Sell_price}</span>
            <br />
            <button className="btn btn-secondary addCart">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
