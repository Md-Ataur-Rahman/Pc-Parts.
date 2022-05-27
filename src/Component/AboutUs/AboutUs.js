import React from "react";
import aboutus from "../../Images/aboutus.jpg";

const AboutUs = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="w-full md:w-10/12 mx-auto hero-content flex-col lg:flex-row-reverse">
        <img src={aboutus} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">About Us</h1>
          <p class="py-6">
            The About Us of our website is an essential source of information
            for all who want to know more about us. About Us pages are where you
            showcase our history, what is unique about our work, values, and who
            you serve.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
