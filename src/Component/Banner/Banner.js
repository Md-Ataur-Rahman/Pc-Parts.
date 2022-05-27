import React from "react";
import banner from "../../Images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-[2.3rem] font-bold">Welcome to Pc Parts</h1>
          <p className="mb-5">
            Our Community is the engine room for creating and disseminating
            practical, affordable training, leadership, and technological
            solutions that allow not-for-profit and grantmaking organisations to
            get on with the crucial work of building stronger communities
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
