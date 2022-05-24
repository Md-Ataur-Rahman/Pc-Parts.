import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, image, descriptions, orderQuantity, quantity, perPrice } =
    tool;
  return (
    <div class="card lg:max-w-max bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={image} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{descriptions}</p>
        <ul>
          <li>Order Quantity: {orderQuantity}</li>
          <li className="py-2">Quantity: {quantity}</li>
          <li>Per Price: {perPrice}</li>
        </ul>
        <div class="card-actions justify-end">
          <Link to={`/purchase/${_id}`}>
            <button class="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
