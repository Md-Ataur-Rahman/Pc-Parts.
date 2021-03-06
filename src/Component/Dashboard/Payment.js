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
  console.log(paymentId);

  const url = `https://shrouded-atoll-06153.herokuapp.com/paymentorder/${paymentId}`;
  const { data: paymentOrder, isLoading } = useQuery(
    ["paymentorder", paymentId],
    () => fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card w-10/12 bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Name: {paymentOrder.name}</p>
          <h2 className="card-title">{paymentOrder.email}</h2>
          <h2 className="card-title">{paymentOrder.perPrice}</h2>
        </div>
      </div>
      <div className="card flex-shrink-0 w-10/12 shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentOrder={paymentOrder} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
