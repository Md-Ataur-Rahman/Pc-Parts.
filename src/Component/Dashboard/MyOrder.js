import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  console.log(myOrders);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
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
              <td>{order.orderQuantity}</td>
              <td>{order.perPrice}</td>
              <td>{order.perPrice * order.orderQuantity}</td>
              <td>
                {order.perPrice && !order.paid && (
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn btn-xs btn-success">pay</button>
                  </Link>
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
  );
};

export default MyOrder;
