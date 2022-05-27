import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const handlerDelete = (id) => {
    fetch(`https://shrouded-atoll-06153.herokuapp.com/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id);
  };
  useEffect(() => {
    fetch("https://shrouded-atoll-06153.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div>
      <h1 className="py-9 text-center text-5xl font-bold">Manage Products</h1>
      <div className="w-5/6 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((pd) => (
          <div key={pd._id} class="card lg:max-w-max bg-base-100 shadow-xl">
            <figure>
              <img className="h-72" src={pd.image} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{pd.name}</h2>
              <p>{pd.descriptions}</p>
              <ul>
                <li>Order Quantity: {pd.orderQuantity}</li>
                <li className="py-2">Quantity: {pd.quantity}</li>
                <li>Per Price: {pd.perPrice}</li>
              </ul>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-error"
                  onClick={() => handlerDelete(pd._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
