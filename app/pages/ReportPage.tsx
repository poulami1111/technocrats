"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { SiPolestar } from "react-icons/si";

// Props type for ReportPage
interface ReportPageProps {
  image: string;
}

// ReportPage component
const ReportPage: React.FC<ReportPageProps> = ({ image }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full max-w-6xl py-10 px-4 md:py-20 text-white shadow-lg rounded-lg space-y-6 md:space-y-0 md:space-x-6">
        {/* Uploaded Image Section */}
        <div className="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Uploaded Image</h2>
          <Image
            width={1200}
            height={1200}
            src={image}
            alt="Uploaded"
            className="shadow-md border-b py-4 w-full rounded-md"
          />
        </div>
        {/* Report Section */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Report</h2>
          <h2 className="text-white font-medium text-2xl md:text-4xl tracking-widest">
            Pneumonia
          </h2>
          <p className="text-white/80 font-light text-sm md:text-xl tracking-wide mb-4">
            Pneumonia is a lung infection that causes the air sacs in the lungs
            to fill with fluid or pus. This makes it difficult to breathe and
            limits the amount of oxygen the body receives. Pneumonia can be
            caused by bacteria, viruses, or fungi.
          </p>
          <p className="text-white font-medium text-lg md:text-2xl tracking-widest mb-2">
            Symptoms
          </p>
          <ul className="space-y-2 text-white/80 tracking-normal">
            {[
              "Coughing, which may produce mucus or phlegm",
              "Fever, chills, and sweating",
              "Shortness of breath",
              "Sharp chest pain when breathing or coughing",
              "Bluish tint to the lips or fingernails",
              "Fast breathing or trouble breathing",
              "Fatigue",
            ].map((symptom, index) => (
              <li key={index} className="flex gap-2">
                <SiPolestar className="text-blue-700 w-5 h-5 md:w-6 md:h-6" />
                {symptom}
              </li>
            ))}
          </ul>
          <p className="text-white font-medium text-lg md:text-2xl tracking-widest mt-4 mb-2">
            Precautions
          </p>
          <ul className="space-y-2 text-white/80 tracking-normal">
            {[
              "Pneumonia caused by bacteria is treated with antibiotics.",
              "Pneumonia caused by a virus usually goes away on its own.",
            ].map((precaution, index) => (
              <li key={index} className="flex gap-2">
                <SiPolestar className="text-blue-700 w-5 h-5 md:w-6 md:h-6" />
                {precaution}
              </li>
            ))}
          </ul>
          {/* Diet Section */}
          <div className="mt-8">
            <p className="text-white font-medium text-lg md:text-2xl tracking-widest mt-4 mb-2">
              Diet
            </p>
            {[
              {
                title: "Protein-rich foods",
                description:
                  "These help build new tissues and replace damaged lung tissue. Examples include lean meats, fish, beans, nuts, and seeds.",
                image: "/images/food/protien.jpg",
              },
              {
                title: "Whole grains",
                description:
                  "These provide energy and nutrients, and contain fiber which helps with digestion. Examples include brown rice, oats, and barley.",
                image: "/images/food/whole-grain.jpg",
              },
              {
                title: "Green leafy vegetables",
                description:
                  "These contain antioxidants that help with healing. Examples include spinach, kale, and lettuce.",
                image: "/images/food/green-veges.jpg",
              },
              {
                title: "Citrus fruits",
                description:
                  "These contain vitamin C, which helps strengthen the immune system. Examples include oranges, berries, and kiwi.",
                image: "/images/food/fruit.jpg",
              },
              {
                title: "Yogurt",
                description:
                  "This contains probiotics which help promote good bacteria in the gut.",
                image: "/images/food/yogurt.jpg",
              },
            ].map((food, index) => (
              <div
                key={index}
                className="space-y-2 text-white/80 tracking-normal"
              >
                <p className="text-white">{food.title}</p>
                <div className="flex gap-2 border border-white/20 rounded-lg p-2 items-center">
                  <Image
                    src={food.image}
                    alt={food.title}
                    width={100}
                    height={100}
                    className="rounded-lg w-16 h-16 md:w-20 md:h-16"
                  />
                  <p className="text-sm md:text-base">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;


