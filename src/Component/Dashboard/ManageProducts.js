import React, { useEffect, useState, useRef } from "react";
import CancelManageOrder from "./CancelManageOrder";
import { ToastContainer, toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(false);
  const idProductRef = useRef();

  useEffect(() => {
    fetch("https://shrouded-atoll-06153.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products, loading, idProductRef]);

  const handlerDelete = (id) => {
    idProductRef.current = id;
    isLoading(true);

    console.log(id);
  };
  const areUSureDelete = (choose) => {
    const id = idProductRef.current;
    console.log(id);
    console.log(choose);

    if (choose) {
      fetch(`https://shrouded-atoll-06153.herokuapp.com/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Delete Order");
          isLoading(false);
        });
    }
  };

  return (
    <>
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
                  <label
                    for="manageOrder"
                    class="btn btn-error"
                    onClick={() => handlerDelete(pd._id)}
                  >
                    Delete
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
      {loading && <CancelManageOrder onDialog={areUSureDelete} />}
    </>
  );
};

export default ManageProducts;
