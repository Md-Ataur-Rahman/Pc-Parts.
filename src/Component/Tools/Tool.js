import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, image, descriptions, orderQuantity, quantity, perPrice } =
    tool;
  return (
    <div className="card lg:max-w-max bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{descriptions}</p>
        <ul>
          <li>Order Quantity: {orderQuantity}</li>
          <li className="py-2">Quantity: {quantity}</li>
          <li>Per Price: {perPrice}</li>
        </ul>
        <div className="card-actions justify-end">
          <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
