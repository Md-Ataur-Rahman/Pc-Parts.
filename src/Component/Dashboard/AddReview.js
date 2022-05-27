import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const handlerReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handlerRatingChange = (e) => {
    const ratingNumber = Number(e.target.value);
    console.log(ratingNumber);
    if (1 > ratingNumber) {
      toast.error("Rating bigger than 1");
    } else if (5 < ratingNumber) {
      toast.error("Rating lower than 5");
    } else {
      setRating(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      name: user.displayName,
      reviewText,
      rating,
    };

    fetch("https://shrouded-atoll-06153.herokuapp.com/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Posted");
        }
      });
  };

  return (
    <div className="hero flex h-screen justify-center items-center">
      <div className="hero-content">
        <div className="card max-w-sm md:w-96 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <label className="label mt-4">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max"
              value={user?.displayName}
              required
            />
            <label className="label mt-4">
              <span className="label-text">Review Text</span>
            </label>
            <textarea
              type="text"
              className="input input-bordered w-full max"
              placeholder="Review Text"
              required
              cols="30"
              rows="10"
              onChange={handlerReviewChange}
            ></textarea>
            <label className="label mt-4">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max"
              placeholder="min 1 & max 5"
              min="1"
              max="5"
              onChange={handlerRatingChange}
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full mt-4"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddReview;
