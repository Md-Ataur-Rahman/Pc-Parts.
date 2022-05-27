import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-atoll-06153.herokuapp.com/allorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const changeText = (id) => {
    fetch(`https://shrouded-atoll-06153.herokuapp.com/status/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Shipped Done");
        }
      });
  };
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>OrderQuantity</th>
            <th>Per Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.orderName}</td>
              <td>{order.orderQuantity}</td>
              <td>{order.perPrice}</td>
              <td>
                {order.paid && (
                  <button
                    className="btn btn-xs btn-success"
                    onClick={() => changeText(order.transactionId)}
                  >
                    {order.status}
                  </button>
                )}
                {!order.paid && (
                  <button className="btn btn-xs btn-outline btn-success">
                    unpaid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default ManageAllOrders;
