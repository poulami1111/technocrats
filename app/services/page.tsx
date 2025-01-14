
"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleGetReport = () => {
    if (selectedFile) {
      console.log("Generating report for:", selectedFile.name);
      // Add logic for processing the file or generating a report
    } else {
      alert("Please upload an image first.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  ">
        <Navbar/>
 <div className="absolute  bg-[rgba(99,102,241,0.4)] w-60 h-40 backdrop-blur-3xl blur-3xl -z-10  right-28  shadow-[0_0_35px_15px_rgba(255,193,69,0.8)]  -bottom-8"></div>
        <div className="text-white text-7xl mb-8">Are you ready to get healthy?</div>
      <div className="w-full max-w-xl backdrop-blur-sm border border-white/20 shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-100 text-center">
          Upload Image to Get Report
        </h2>
        <div className="flex flex-col items-center border-2 border-dashed border-gray-300/20 p-6 rounded-lg">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-full shadow-md">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-4-4 4 4 0 014-4h10a4 4 0 014 4 4 4 0 01-4 4M8 12h8m-4-4v8"
                />
              </svg>
            </div>
            <span className="text-gray-500 text-sm">
              Click to upload an image
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-600">
              Selected: <strong>{selectedFile.name}</strong>
            </p>
          )}
        </div>
        <button
          onClick={handleGetReport}
          className="w-full bg-gradient-to-r from-yellow-700 to-black/60 hover:text-white/20 text-white font-medium py-2.5 rounded-lg transition-all duration-200"
        >
          Get Report
        </button>
      </div>
    </div>
  );
};

export default Page;
