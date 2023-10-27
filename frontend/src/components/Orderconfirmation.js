import React, { useState, useEffect } from "react";
import axios from "axios";

function Orderconfirmation({ logindet }) {
  const [data, setData] = useState([]);
  const loggedIn =
    logindet.username === "avro_25" && logindet.password === "avro@aha";

  useEffect(() => {
    if (loggedIn) {
      fetchData(); // Fetch data when component is mounted
      const intervalId = setInterval(fetchData, 1000); // Polling every 60 seconds

      return () => {
        clearInterval(intervalId); // Cleanup on unmount
      };
    }
  }, [loggedIn]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3002/ordersconfirm", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleConfirm = async (orderId) => {
    try {
      console.log(orderId)
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3002/orderconfirm/${orderId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("Order confirmed:", response.data);

      setData((prevData) =>
        prevData.map((order) => {
          if (order.Orders_id === orderId) {
            return { ...order, Order_status: "not confirmed" };
          }
          return order;
        })
      );
    } catch (error) {
      console.error("Error confirming order:", error);
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
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((order) => order.Order_status !== "confirmed")
                  .map((order) => (
                    <tr key={order.Orders_id}>
                      <td>{order.Orders_id}</td>
                      <td>{order.User_id}</td>
                      <td>{order.Order_date}</td>
                      <td>{order.Payment_id}</td>
                      <td>{order.Payment_method}</td>
                      <td>{order.Pay_total}</td>
                      <td>{order.Order_status}</td>
                      <td>
                        <button
                          onClick={() => handleConfirm(order.Orders_id)}
                          className="btn btn-success"
                        >
                          Confirm
                        </button>
                      </td>
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

export default Orderconfirmation;
