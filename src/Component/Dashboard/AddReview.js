import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const handlerReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handlerRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      name: user.displayName,
      reviewText,
      rating,
    };

    fetch("http://localhost:5000/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div class="hero flex h-screen justify-center items-center">
      <div class="hero-content">
        <div class="card w-96 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} class="card-body">
            <label class="label mt-4">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full max"
              value={user?.displayName}
              required
            />
            <label class="label mt-4">
              <span class="label-text">Review Text</span>
            </label>
            <textarea
              type="text"
              class="input input-bordered w-full max"
              placeholder="Review Text"
              required
              cols="30"
              rows="10"
              onChange={handlerReviewChange}
            ></textarea>
            <label class="label mt-4">
              <span class="label-text">Rating</span>
            </label>
            <input
              type="number"
              class="input input-bordered w-full max"
              placeholder="min 1 & max 5"
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
    </div>
  );
};

export default AddReview;
