"use client";
import React from "react";
import Hero from "./components/Home/Hero";
import Imagebackground from "./components/Home/Image";
import Cards from "./components/Home/Cards";
import SectionWithImage from "./components/Home/SectionImage";

const HomePage = () => {


  return (
    <div className="flex flex-col relative">
      {/* Background Image */}
      <Imagebackground />

      {/* Hero Section */}
      <div className="mt-72 sm:mt-[590px] lg:mt-[430px]">
        <Hero />
        <div className="flex flex-col items-center justify-center mt-4 px-4 md:px-8">
          {/* Healthcare Innovations Section */}
          <section className="text-center space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">
              Healthcare Innovations
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Explore the latest advancements in healthcare technology to
              improve diagnostics and treatments.
            </p>
          </section>

          {/* Cards Section */}
          <Cards />
        </div>

        {/* Section with Image */}
        <SectionWithImage />
      </div>
    </div>
  );
};

export default HomePage;




