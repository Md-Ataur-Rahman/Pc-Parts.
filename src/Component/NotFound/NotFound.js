import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../Images/errorpage.png";

const NotFound = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={NotFoundImage}
            class="md:w-3/5 max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">We Are Lost ...</h1>
            <p class="py-6">
              THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN MOVED, RENAMED, OR
              MIGHT NEVER EXISTED.
            </p>
            <Link to="/">
              <button class="btn btn-outline btn-primary">Send Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
