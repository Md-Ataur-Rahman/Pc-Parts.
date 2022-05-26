import React from "react";

const ContactUs = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div>
        <h2 className="font-bold text-center text-4xl py-4">Contact Us</h2>
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
                  <span class="label-text">Your Comment</span>
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Commetnt"
                  class="input input-bordered"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
