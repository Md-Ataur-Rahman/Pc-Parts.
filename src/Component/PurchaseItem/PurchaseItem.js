import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const PurchaseItem = () => {
  const [user] = useAuthState(auth);
  const [purchaseItem, setPurchaseItem] = useState({});
  const [stateOrderQuantity, setStateOrderQuantity] = useState(
    purchaseItem?.orderQuantity
  );
  const [addOrderQuantity, setAddOrderQuantity] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const { id } = useParams();
  console.log(stateOrderQuantity);

  useEffect(() => {
    fetch(`https://shrouded-atoll-06153.herokuapp.com/purchase/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPurchaseItem(data);
        setStateOrderQuantity(data.orderQuantity);
      });
  }, [id]);
  console.log(purchaseItem);

  const handlerOrderQuantityBlur = (e) => {
    setAddOrderQuantity(e.target.value);
  };

  const handlerAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  const handlerNumberBlur = (e) => {
    setNumber(e.target.value);
  };

  const handlerOrderQuantity = (e) => {
    e.preventDefault();
    const increaseAddQuantity =
      parseInt(addOrderQuantity) + purchaseItem?.orderQuantity;
    if (purchaseItem?.quantity >= increaseAddQuantity) {
      purchaseItem.orderQuantity = increaseAddQuantity;
      setAddOrderQuantity(increaseAddQuantity);
      console.log(increaseAddQuantity);
    } else {
      toast.error("Don't available");
    }
  };

  const handlerDecrease = () => {
    const minOrderQuantity = purchaseItem?.orderQuantity;
    if (stateOrderQuantity < minOrderQuantity) {
      const decreaseOrderQuantity = purchaseItem?.orderQuantity - 1;
      purchaseItem.orderQuantity = decreaseOrderQuantity;
      setAddOrderQuantity(decreaseOrderQuantity);
      console.log(decreaseOrderQuantity);
    } else {
      toast.error("Min order Quantity require");
    }
  };

  const handlerOrderInfo = (e) => {
    e.preventDefault();
    const orderInfo = {
      name: user?.displayName,
      email: user?.email,
      orderName: purchaseItem?.name,
      orderQuantity: purchaseItem?.orderQuantity,
      quantity: purchaseItem?.quantity,
      perPrice: purchaseItem?.perPrice,
      address,
      number,
    };

    fetch("https://shrouded-atoll-06153.herokuapp.com/order", {
      method: "POST",
      body: JSON.stringify(orderInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("order completed");
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="card-body">
            <div className="card w-96 bg-base-100 shadow-xl p-10 text-center">
              <form onSubmit={handlerOrderQuantity}>
                <input
                  type="number"
                  placeholder="Update oerder Quantity"
                  className="input input-bordered w-full max-w-xs my-4"
                  onBlur={handlerOrderQuantityBlur}
                  required
                />
                <input
                  className="btn btn-active btn-accent block w-full"
                  type="submit"
                  value="Increase Order"
                />
              </form>
              <button
                onClick={handlerDecrease}
                className="btn btn-active btn-secondary mt-5"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card w-[500px] bg-base-100 shadow-xl p-5">
            <form className="card-body" onSubmit={handlerOrderInfo}>
              <h2 className="card-title">Name: {purchaseItem?.name}</h2>
              <label className="label mt-4">
                <span className="label-text">Order Quantity</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max"
                value={purchaseItem?.orderQuantity}
                required
              />
              <label className="label mt-4">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs"
                value={purchaseItem?.quantity}
                required
              />
              <label className="label mt-4">
                <span className="label-text">Per Price</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs"
                value={purchaseItem?.perPrice}
                required
              />
              <label className="label mt-4">
                <span className="label-text">User name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={user?.displayName}
                required
              />
              <label className="label mt-4">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={user?.email}
                required
              />
              <label className="label mt-4">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs"
                onBlur={handlerAddressBlur}
                required
              />
              <label className="label mt-4">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
                onBlur={handlerNumberBlur}
                required
              />
              <input
                type="submit"
                className="btn btn-active btn-accent block w-full"
                value="Order Now"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PurchaseItem;
