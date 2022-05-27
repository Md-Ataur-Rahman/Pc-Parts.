import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CancelManageAllModal from "./CancelManageAllModal";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, isLoading] = useState(false);
  const idProductRef = useRef();

  useEffect(() => {
    fetch("https://shrouded-atoll-06153.herokuapp.com/allorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders, loading, idProductRef]);

  const orderCancel = (id) => {
    idProductRef.current = id;
    isLoading(true);
    console.log(idProductRef.current);
  };

  const areUSureDelete = (choose) => {
    const id = idProductRef.current;
    console.log(id);
    console.log(choose);
    if (choose) {
      fetch(`https://shrouded-atoll-06153.herokuapp.com/allorders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("Delete Order");
            isLoading(false);
          }
        });
    }
  };

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
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
                    <>
                      <button className="btn btn-xs btn-outline btn-success">
                        unpaid
                      </button>
                      <label
                        htmlFor="manageallmodal"
                        className="btn btn-xs btn-error mx-4"
                        onClick={() => orderCancel(order._id)}
                      >
                        cancel
                      </label>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
      {loading && <CancelManageAllModal onDialog={areUSureDelete} />}
    </>
  );
};

export default ManageAllOrders;
