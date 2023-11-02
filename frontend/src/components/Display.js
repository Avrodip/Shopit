import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import "./cart.css";
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
        // console.log("helooooooooo", response.data[0].User_id);
        // const data = await response.data;
        // setUserID(data);
        // console.log("user id is: ", userID);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
    fetchID();
  }, []);

  return (
    <div>
      <img
        src="https://github.com/gar-git/images/blob/main/cart-icon-28344.png?raw=true"
        className="lo"
        id="btn-1"
        width="60px"
        height="60px"
        alt="Logo"
        style={{
          padding: "5px",
          marginLeft: "95%",
          marginTop: "5px",
          borderRadius: "50%",
          position: "fixed",
        }}
        onClick={() => {
          navigate(`/viewCart/${userID}`);
        }}
      />
      <div
        className="items d-flex flex-wrap w-90 justify-content-center m-auto"
        id="bg"
      >
        {items.map((item) => (
          <div
            key={item.Product_id}
            className="item"
            style={{
              padding: "10px",
              border: "2px solid",
              borderRadius: "9%",
              margin: "20px",
              background: "#ebe6e2",
              width: "300px",
            }}
          >
            <center>
              <img
                src={item.imglink1}
                className="img-fluid"
                alt="image unavailable"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  border: "2px solid",
                }}
              />
              <h4>{item.Product_name}</h4>
              <p style={{ height: "70px" }}>{item.Description}</p>
              <span>Rs.{item.Sell_price}</span>
              <br />
              <button className="btn btn-secondary addCart" id="btn-1">
                Add to cart
              </button>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
