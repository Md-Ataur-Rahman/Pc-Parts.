import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [buttonText, setButtonText] = useState("pending");
  const [stateTransactionId, setStateTransactionId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/allorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const changeText = (transactionId, text) => {
    //     for (let i = 0; i < orders.length; i++) {
    //       if (orders[i].transactionId === transactionId) {
    //         setStateTransactionId(orders[i].transactionId);
    //       }
    //     }
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
            <th>Payment Status</th>
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
              <td>{order.perPrice * order.orderQuantity}</td>
              <td>
                {/* {order.paid(
                  <button
                    onClick={() => changeText(order.transactionId, "shipped")}
                  >
                    {buttonText}
                  </button>
                )}
                {!order.paid && <button>unpaid</button>} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;
