import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div class="hero flex h-screen justify-center items-center bg-base-200">
      <div class="hero-content">
        <div class="card w-96 shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Sign Up</button>
            </div>
            <div class="divider">OR</div>
            <button class="btn btn-outline btn-primary">
              Continue with Google
            </button>
            <p className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
