import React, { useState, useEffect } from "react";
import axios from "axios";

function Confirmorder({ logindet }) {
  const [data, setData] = useState([]);
  const loggedIn =
    logindet.username === "rahul_34" && logindet.password === "rahul@123";

  useEffect(() => {
    let intervalId;

    if (loggedIn) {
      fetchData();
    
    }

    return () => {
      // Clear the interval when the component unmounts
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [loggedIn]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3002/confirmedorders", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <div className="container mt-5">
            <h1>Orders</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>Order Date</th>
                  <th>Payment Id</th>
                  <th>Payment Method</th>
                  <th>Pay_Total</th>
                
                </tr>
              </thead>
              <tbody>
                {data
                  
                  .map((order) => (
                    <tr key={order.Orders_id}>
                      <td>{order.Orders_id}</td>
                      <td>{order.User_id}</td>
                      <td>{order.Order_date}</td>
                      <td>{order.Payment_id}</td>
                      <td>{order.Payment_method}</td>
                      <td>{order.Pay_total}</td>
                      
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <h2>Access not available</h2>
        </div>
      )}
    </div>
  );
}

export default Confirmorder;
