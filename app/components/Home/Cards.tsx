import Image from "next/image";
import React from "react";

const Cards = () => {
  const cardData = [
    {
      image: "/images/cards/card2.jpg", 
      heading: "Cardiology Insights",
      description:
        "Advanced diagnostics and treatments for cardiovascular health.",
    },
    {
      image: "/images/cards/card1.png", 
      heading: "Neurology Updates",
      description:
        "Innovative solutions for brain and nervous system care.",
    },
    {
      image: "/images/cards/card3.png", 
      heading: "Radiology Revolution",
      description:
        "High-precision imaging powered by advanced technology.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative max-w-xs h-96 overflow-hidden  shadow-lg rounded-xl  backdrop-blur-md hover:scale-105 transition-transform duration-300 group"
          style={{
            boxShadow: "0 5px 5px #FFC145",
          }}
        >
          {/* Glow Effect */}
           <div className="absolute  bg-[#FFC145]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> 

          {/* Image */}
          <Image
          width={800}
          height={100}
            src={card.image}
            alt={card.heading}
            className="rounded-t-lg h-56 object-cover"
          />

          {/* Heading */}
          <h3 className="mt-4 text-xl font-bold text-white px-4">{card.heading}</h3>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-100 px-4">{card.description}</p>
          <div className="bg-[#FF9D23] w-36 h-36 -bottom-16 -left-10 overflow-hidden blur-3xl rounded-full absolute z-10 shadow-[0_0_15px_5px_rgba(255,193,69,0.8)]"></div>

          {/* Linear Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
