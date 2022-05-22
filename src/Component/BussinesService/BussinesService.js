import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { GrLike, GrCloudComputer } from "react-icons/gr";
import BussinesServiceImage from "../../Images/bussiness_service.jpg";

const BussinesService = () => {
  return (
    <div class="hero min-h-screen bg-base-300">
      <div class="hero-content w-5/6 mx-auto flex-col lg:flex-row">
        <img
          src={BussinesServiceImage}
          class="max-w-sm rounded-lg shadow-2xl flex-1"
        />
        <div className="flex-2 lg:mx-16">
          <h1 class="text-5xl font-bold">Bussiness Services</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ul className="flex flex-col md:flex-row items-center py-4">
            <li className="flex flex-col justify-center items-center text-2xl">
              <GrLike className="text-5xl font-bold" />
              <span className="text-3xl pt-4 pb-2">500 + </span>
              <span className="font-thin">likes</span>
            </li>
            <li className="flex flex-col justify-center items-center text-2xl px-10">
              <BsPeopleFill className="text-5xl font-bold" />
              <span className="text-3xl pt-4 pb-2">210 + </span>
              <span className="font-thin">Happy Clients</span>
            </li>
            <li className="flex flex-col justify-center items-center text-2xl">
              <GrCloudComputer className="text-5xl font-bold" />
              <span className="text-3xl pt-4 pb-2">100 + </span>
              <span className="font-thin">Projects</span>
            </li>
          </ul>
          <button class="btn btn-primary-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BussinesService;
