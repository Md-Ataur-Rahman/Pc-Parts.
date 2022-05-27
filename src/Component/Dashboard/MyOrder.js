import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import CancelOrderModal from "./CancelOrderModal";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, isLoading] = useState(false);
  const idProductRef = useRef();

  useEffect(() => {
    fetch(
      `https://shrouded-atoll-06153.herokuapp.com/myorders?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders, loading, idProductRef]);

  const orderCancel = (id) => {
    idProductRef.current = id;
    isLoading(true);
  };
  const areUSureDelete = (choose) => {
    const id = idProductRef.current;
    if (choose) {
      fetch(`https://shrouded-atoll-06153.herokuapp.com/orders/${id}`, {
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
  console.log(myOrders);
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
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.orderName}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.perPrice}</td>
                <td>{order.perPrice * order.orderQuantity}</td>
                <td>
                  {order.perPrice && !order.paid && (
                    <>
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-xs btn-success">pay</button>
                      </Link>
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-xs btn-error mx-4"
                        onClick={() => orderCancel(order._id)}
                      >
                        cancel
                      </label>
                    </>
                  )}
                  {order.perPrice && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
      {loading && <CancelOrderModal onDialog={areUSureDelete} />}
    </>
  );
};

export default MyOrder;
