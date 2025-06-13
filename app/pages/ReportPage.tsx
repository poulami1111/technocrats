"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { SiPolestar } from "react-icons/si";

// Props type for ReportPage
interface ReportPageProps {
  image: string;
  diagnosisData: {
    details: {
      category: string;
      description: string;
      diet: string[];
      effect_of_disease: string;
      most_likely_cause: string;
      name: string;
      precautions: string[];
      symptoms: string[];
    };
    predicted_category: string;
    predicted_class: string;
  };
}

// ReportPage component
const ReportPage: React.FC<ReportPageProps> = ({ image, diagnosisData }) => {
  console.log('ReportPage Props:', { image, diagnosisData }); // Debug log
  console.log('Diagnosis Details:', diagnosisData?.details); // Debug log

  if (!diagnosisData || !diagnosisData.details) {
    console.error('Missing diagnosis data or details');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>No diagnosis data available</p>
        </div>
      </div>
    );
  }

  const {
    name,
    description,
    symptoms,
    precautions,
    diet,
    category,
    most_likely_cause,
    effect_of_disease,
  } = diagnosisData.details;

  console.log('Extracted details:', {
    name,
    description,
    symptoms,
    precautions,
    diet,
    category,
    most_likely_cause,
    effect_of_disease
  }); // Debug log

  // Sample food images - you should replace these with actual paths
  const foodImages = [
    
    "/images/food/whole-grain.jpg",
    "/images/food/green-veges.jpg",
    "/images/food/fruit.jpg",
    "/images/food/yogurt.jpg",
    "/images/food/rich.jpg",
  ];

  return (
    <div className="min-h-screen font-poppins flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full max-w-6xl py-10 px-4 md:py-20 text-white shadow-lg rounded-lg space-y-6 md:space-y-0 md:space-x-6">
        {/* Uploaded Image Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Uploaded Image
            </h2>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 text-xs font-medium bg-gray-700/50 rounded-full text-gray-300">
                {category} Scan
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[#FF9D23]/10 text-[#FF9D23] rounded-full border border-[#FF9D23]/20">
                {diagnosisData.predicted_class}
              </span>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9D23]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative overflow-hidden rounded-xl border border-gray-700/50">
              <Image
                width={1200}
                height={1200}
                src={image}
                alt="Uploaded Medical Image"
                className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-gray-400 mb-1">Image Type</p>
              <p className="text-sm font-medium text-white">{category} Scan</p>
            </div>
            <div className="p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-gray-400 mb-1">Predicted Class</p>
              <p className="text-sm font-medium text-white">
                {diagnosisData.predicted_class}
              </p>
            </div>
          </div>
        </div>

        {/* Report Section */}
        <div className="w-full md:w-1/2 p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl">
          {/* Diagnosis Header */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Diagnosis Report
            </h2>
            <div className="p-4 bg-[#FF9D23]/10 rounded-xl border border-[#FF9D23]/20">
              <h2 className="text-white font-medium text-2xl md:text-3xl tracking-wider mb-2">
                {name}
              </h2>
              <p className="text-white/80 font-light text-sm md:text-base tracking-wide">
                {description}
              </p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-3 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF9D23]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#FF9D23]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-medium text-lg md:text-xl tracking-wide">
                Additional Details
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm">
                <p className="text-xs text-gray-400 mb-1">Most Likely Cause</p>
                <p className="text-white/80 text-sm">{most_likely_cause}</p>
              </div>
              <div className="p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm">
                <p className="text-xs text-gray-400 mb-1">Effect of Disease</p>
                <p className="text-white/80 text-sm">{effect_of_disease}</p>
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="space-y-3 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF9D23]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#FF9D23]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-medium text-lg md:text-xl tracking-wide">
                Symptoms
              </h3>
            </div>
            
            <div className="space-y-2">
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm"
                >
                  <SiPolestar className="text-[#FF9D23] w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80 text-sm">{symptom}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Precautions Section */}
          <div className="space-y-3 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF9D23]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#FF9D23]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-medium text-lg md:text-xl tracking-wide">
                Precautions
              </h3>
            </div>
            
            <div className="space-y-2">
              {precautions.map((precaution, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm"
                >
                  <SiPolestar className="text-[#FF9D23] w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80 text-sm">{precaution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diet Section */}
          <div className="space-y-3 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF9D23]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#FF9D23]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-white font-medium text-lg md:text-xl tracking-wide">
                Recommended Diet
              </h3>
            </div>
            
            <div className="space-y-2">
              {diet.map((foodItem, index) => (
                <div
                  key={index}
                  className="group p-3 bg-gray-700/30 rounded-lg backdrop-blur-sm hover:bg-gray-700/40 transition-colors duration-300"
                >
                  <div className="flex gap-3 items-start">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={foodImages[index % foodImages.length]}
                        alt={foodItem}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium mb-1">{foodItem}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;

