import React from "react";
import banner from "../../Images/banner.jpg";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-[2.3rem] font-bold">Welcome to Pc Parts</h1>
          <p class="mb-5">
            Our Community is the engine room for creating and disseminating
            practical, affordable training, leadership, and technological
            solutions that allow not-for-profit and grantmaking organisations to
            get on with the crucial work of building stronger communities
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
