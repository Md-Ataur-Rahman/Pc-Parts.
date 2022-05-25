import React from "react";
import Banner from "../Banner/Banner";
import BussinesService from "../BussinesService/BussinesService";
import Reviews from "../Reviews/Reviews";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <>
      <Banner />
      <Tools />
      <BussinesService />
      <Reviews />
    </>
  );
};

export default Home;
