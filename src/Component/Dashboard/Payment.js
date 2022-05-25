import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L30IlI4xdWLmuAgBXhXWWJVOOWFb3STlVpJ22qdAcXoPSNpPTkJbFBn1CSNcXTJDf1OvBpptUxxLoddDVh0AOzG00QNrQW8e2"
);

const Payment = () => {
  const { paymentId } = useParams();
  const [paymentOrder, setPaymentOrder] = useState({});
  console.log(paymentId);

  fetch(`http://localhost:5000/paymentorder/${paymentId}`)
    .then((res) => res.json())
    .then((data) => setPaymentOrder(data));

  // const { data: paymentOrder, isLoading } = useQuery(
  //   ["paymentorder", paymentId],
  //   () => fetch(url).then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <p>Loading</p>;
  // }
  // paymentOrder={paymentOrder}
  // console.log(paymentOrder);
  return (
    <div className="flex flex-col items-center justify-center">
      <div class="card w-10/12 bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Name: {paymentOrder.name}</p>
          <h2 class="card-title">{paymentOrder.email}</h2>
          <h2 class="card-title">{paymentOrder.perPrice}</h2>
        </div>
      </div>
      <div class="card flex-shrink-0 w-10/12 shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentOrder={paymentOrder} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
