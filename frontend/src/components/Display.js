import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Display = () => {
  console.log("Diplay called");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("useeffect called");
    async function fetchItems() {
      console.log("item fetched called");
      try {
        const res = await axios.get("http://localhost:3002/products");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchItems();
  }, []);

  console.log(items);

  return (
    <div>
      <div
        className="items"
        style={{
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
              style={{ width: "200px", height: "200px" }}
            />
            <h4>{item.Product_name}</h4>
            <p>{item.Description}</p>
            <span>Rs.{item.Sell_price}</span>
            <br />
            <button className="addCart">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
