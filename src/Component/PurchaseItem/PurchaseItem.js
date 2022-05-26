import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const PurchaseItem = () => {
  const [user] = useAuthState(auth);
  const [purchaseItem, setPurchaseItem] = useState({});
  const [addOrderQuantity, setAddOrderQuantity] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchaseItem(data));
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
    //   const increaseAddQuantity =
    //     parseInt(addOrderQuantity) + purchaseItem?.orderQuantity;
    //   if (purchaseItem?.quantity >= increaseAddQuantity) {
    //     purchaseItem.orderQuantity = increaseAddQuantity;
    //     setAddOrderQuantity(increaseAddQuantity);
    //     console.log(increaseAddQuantity);
    //   }
  };

  const handlerDecrease = () => {
    let decreaseOrderQuantity;
    if (50 < parseInt(decreaseOrderQuantity)) {
      decreaseOrderQuantity = purchaseItem?.orderQuantity - 1;
    }
    // if (purchaseItem?.orderQuantity > parseInt(decreaseOrderQuantity)) {
    //   console.log(purchaseItem?.orderQuantity);
    //   console.log(parseInt(decreaseOrderQuantity));
    //   console.log(true);
    // } else {
    //   purchaseItem.orderQuantity = decreaseOrderQuantity;
    //   setAddOrderQuantity(decreaseOrderQuantity);
    //   console.log(decreaseOrderQuantity);
    // }
    console.log(decreaseOrderQuantity);
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
    // console.log(orderInfo);

    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify(orderInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <div class="card-body">
            <div class="card w-96 bg-base-100 shadow-xl p-10 text-center">
              <form onSubmit={handlerOrderQuantity}>
                <input
                  type="number"
                  placeholder="Update oerder Quantity"
                  class="input input-bordered w-full max-w-xs my-4"
                  onBlur={handlerOrderQuantityBlur}
                  required
                />
                <input
                  class="btn btn-active btn-accent block w-full"
                  type="submit"
                  value="Increase Order"
                />
              </form>
              <button
                onClick={handlerDecrease}
                class="btn btn-active btn-secondary mt-5"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card w-[500px] bg-base-100 shadow-xl p-5">
            <form class="card-body" onSubmit={handlerOrderInfo}>
              <h2 class="card-title">Name: {purchaseItem?.name}</h2>
              <label class="label mt-4">
                <span class="label-text">Order Quantity</span>
              </label>
              <input
                type="number"
                class="input input-bordered w-full max"
                value={purchaseItem?.orderQuantity}
                required
              />
              <label class="label mt-4">
                <span class="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                class="input input-bordered w-full max-w-xs"
                value={purchaseItem?.quantity}
                required
              />
              <label class="label mt-4">
                <span class="label-text">Per Price</span>
              </label>
              <input
                type="number"
                class="input input-bordered w-full max-w-xs"
                value={purchaseItem?.perPrice}
                required
              />
              <label class="label mt-4">
                <span class="label-text">User name</span>
              </label>
              <input
                type="text"
                class="input input-bordered w-full max-w-xs"
                value={user?.displayName}
                required
              />
              <label class="label mt-4">
                <span class="label-text">User Email</span>
              </label>
              <input
                type="text"
                class="input input-bordered w-full max-w-xs"
                value={user?.email}
                required
              />
              <label class="label mt-4">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                class="input input-bordered w-full max-w-xs"
                onBlur={handlerAddressBlur}
                required
              />
              <label class="label mt-4">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                class="input input-bordered w-full max-w-xs"
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
    </div>
  );
};

export default PurchaseItem;
