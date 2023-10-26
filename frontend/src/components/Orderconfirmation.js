import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Orderconfirmation({ logindet }) {
  const [data, setData] = useState([]);
  const loggedIn =
    logindet.username === "avro_25" && logindet.password === "avro@aha";

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3002/orders", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loggedIn) {
    fetchData();
  }

  const handleDelete = async (orderId) => {
    // Implement delete logic here
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
                {data.map((order) => (
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
                        className="btn btn-danger"
                        onClick={() => handleDelete(order.order_id)}
                      >
                        Remove
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/update-orderdetails/${order.order_id}`}
                        className="btn btn-success"
                      >
                        Confirm
                      </Link>
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
