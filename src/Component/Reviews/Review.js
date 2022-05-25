import React from "react";

const Review = ({ review }) => {
  const { name, reviewText, rating } = review;
  return (
    <div class="card lg:max-w-max bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Name: {name}</h2>
        <p>{reviewText}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Review;
