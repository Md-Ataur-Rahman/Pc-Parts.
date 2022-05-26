import React from "react";
import Banner from "../Banner/Banner";
import BussinesService from "../BussinesService/BussinesService";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
import Reviews from "../Reviews/Reviews";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <>
      <Banner />
      <Tools />
      <AboutUs />
      <BussinesService />
      <Reviews />
      <ContactUs />
    </>
  );
};

export default Home;
