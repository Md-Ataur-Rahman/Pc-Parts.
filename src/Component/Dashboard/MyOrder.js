import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  const [isOrder, setIsOrder] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders, isOrder]);

  const orderCancel = (id) => {
    if (isOrder) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    console.log(id);
  };
  console.log(myOrders);
  return (
    <>
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
                        for="my-modal-6"
                        onClick={() => {
                          setIsOrder(true);
                          orderCancel(order._id);
                        }}
                        className="btn btn-xs btn-error mx-4"
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
      </div>
      <label for="my-modal-6" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setIsOrder(false)}
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
