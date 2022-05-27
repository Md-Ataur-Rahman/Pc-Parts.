import React from "react";

const ContactUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div>
        <h2 className="font-bold text-center text-4xl py-4">Contact Us</h2>
        <div className="hero-content">
          <div className="card mx-w-sm md:w-96 shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Comment</span>
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Commetnt"
                  className="input input-bordered"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
