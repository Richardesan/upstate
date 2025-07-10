import React from "react";
import Hero from "./component/Hero";
import AboutUs from "./component/aboutUs";
import Service from "./component/service";
import BestWork from "./component/bestWork";
import Contact from "../component/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Service />
      <Contact />
      <BestWork />
    </div>
  );
};

export default Home;
