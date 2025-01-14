import React from "react";

import Hero from "./components/Home/Hero";
import Imagebackground from "./components/Home/Image";
import Cards from "./components/Home/Cards";

const HomePage = () => {
  return (
    <div className="flex flex-col  relative">
      <Imagebackground />

      {/* Hero Section */}
      <div className=" mt-[430px] ">
        <Hero />
        <div className="flex flex-col items-center justify-center">
          <section>
          <h2 className="text-3xl text-center font-bold text-white uppercase tracking-widest">
        Healthcare Innovations
      </h2>
      <p className="text-gray-300 text-center ">
        Explore the latest advancements in healthcare technology to improve
        diagnostics and treatments.
      </p>
          </section>
        <Cards/>
        </div>
       
      </div>
    </div>
  );
};

export default HomePage;



